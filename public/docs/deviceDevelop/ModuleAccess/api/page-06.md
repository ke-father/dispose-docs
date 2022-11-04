# Socket通信相关API

## **Socket通信**
Socket通信对应的API头文件位为qhal_socket.h。
    
以下Socket通信API可按需实现。若模块采用MQTT接入方案，则必须实现TCP/TCP TLS。Socket通信接收到对端数据时调用 __Quos_socketIORx()__ 将数据通知给QuecThing功能。若Socket非主动断开，则 __Quos_socketIORx()__ 的参数 __bufLen=0__ ，并通知QuecThing功能。

### **Socket通信函数概览**
> 表6：Socket通信函数概览  

|函数	|说明  |
|:--------:| :-------------:| 
|[Qhal_tcpClientInit()](#Qhal_tcpClientInit)	        | 初始化TCP客户端|
|[Qhal_udpInit()](#Qhal_udpInit)	            | 初始化UDP客户端|
|[Qhal_tcpSslClientInit()](#Qhal_tcpSslClientInit)	    | 初始化TCP安全客户端|
|[Qhal_udpSslInit()](#Qhal_udpSslInit)	        | 初始化UDP安全客户端|
|[Qhal_sockWrite()](#Qhal_sockWrite)	            | 发送Socket数据|
|[Qhal_sockClose()](#Qhal_sockClose)	            | 关闭Socket链路|
|[Qhal_tcpServerInit()](#Qhal_tcpServerInit)	        | 初始化TCP服务器|
|[Qhal_dns2IPGet()](#Qhal_dns2IPGet)	            | 通过域名解析来获取IP列表|
|[Qhal_sockUdpBroadCastLAN()](#Qhal_sockUdpBroadCastLAN)	| 设备发送广播数据|

<span id="Qhal_tcpClientInit">  </span>
### <font color=#A52A2A  >__Qhal_tcpClientInit__</font> 
该函数用于初始化TCP客户端。

__函数原型__  
```c 
pointer_t  Qhal_tcpClientInit(quint8_t *type, const char *hostname, uint16_t r_port, quint32_t *connectTimeout);
```
* __输入参数__ 

    * __const char *__ __`hostname`__: 远程服务器的域名或IP。
    * __uint16_t__ __`r_port：`__: 远程服务器端口P。

* __输出参数__

    * __quint8_t *__ __`type`__: Socket类型。
    * __quint32_t *__ __`connectTimeout：`__: TCP连接的最大超时时间。
            </br>0	已完成连接（连接成功或连接失败）
            </br>本函数执行的最大超时时间	正在连接
   
* __返回值__  
    * Socket的句柄。			   函数执行成功  
    * SOCKET_FD_INVALID(-1)		  函数执行失败  

__实现要求__  
必须实现。需在本API内实现创建和连接TCP Socket链路。另外需给*type=SOCKET_TYPE_TCP_CLI设置Socket类型。

__适配示例代码__

```c
/**
 * 功能 @brief 初始化TCP客户端
 * 输出 @param type Socket类型
 * 输入 @param hostname 远程服务器的域名或IP
 * 输入 @param r_port 远程服务器端口
 * 输出 @param connectTimeout TCP连接的最大超时时间；0：表示连接完成
 * 输出 @retval Socket的句柄；-1：表示失败
 * 备注 @remark 必须实现。需在本API内实现创建和连接TCP Socket链路。另外需给*type=SOCKET_TYPE_TCP_CLI设置Socket类型。
 */
pointer_t FUNCTION_ATTR_ROM Qhal_tcpClientInit(quint8_t *type, const char *hostname, quint16_t r_port, quint32_t *connectTimeout)
{
    UNUSED(connectTimeout);
    Quos_logPrintf(HAL_TCP, LL_DBG, "hostname:%s[%u]", hostname, r_port);
    qint32_t ret = -1;
    int sockFd;
    struct timeval tm;
    fd_set set;
    quint8_t *ip = NULL;
    quint32_t ul = 1;

    /*允许端口复用 */
    qint32_t size = 1;
    tm.tv_usec = 0;

    *type = SOCKET_TYPE_TCP_CLI;
    Quos_netHostnameDnsEnable(hostname);

    while (1)
    {
        sockFd = socket(AF_INET, SOCK_STREAM, 0);
        if (sockFd < 0)
        {
            Quos_logPrintf(HAL_TCP, LL_ERR, "getaddrinfo[%s] fail errno[%d]!", hostname, errno);
            return SOCKET_FD_INVALID;
        }
        if (setsockopt(sockFd, SOL_SOCKET, SO_REUSEADDR, &size, sizeof(qint32_t)) < 0)
        {
            Quos_logPrintf(HAL_TCP, LL_ERR, "socket REUSEADDR errno[%d]", errno);
            break;
        }

        ioctl(sockFd, FIONBIO, &ul); /*设置为非阻塞模式 */
        FD_ZERO(&set);
        FD_SET(sockFd, &set);

        if (NULL == (ip = Quos_netGetIpFromHostname(hostname)))
        {
            Quos_logPrintf(HAL_TCP, LL_DBG, "get ip failed errno[%d]", errno);
            break;
        }
        struct sockaddr_in addr;
        bzero(&addr, sizeof(addr));
        addr.sin_family = AF_INET;
        addr.sin_port = htons(r_port);
        addr.sin_addr.s_addr = inet_addr((char *)ip);
        ret = connect(sockFd, (struct sockaddr *)&addr, sizeof(addr));
        tm.tv_sec = 3;

        if (0 == ret || select(sockFd + 1, NULL, &set, NULL, &tm) > 0)
        {
            int err = 0;
            socklen_t elen = sizeof(err);
            if (!FD_ISSET(sockFd, &set) || 0 > getsockopt(sockFd, SOL_SOCKET, SO_ERROR, (char *)&err, &elen) || err != 0)
            {
                Quos_logPrintf(HAL_TCP, LL_DBG, "FD_ISSET or getsockopt failed errno[%d]", errno);
                close(sockFd);
                continue;
            }
            ul = 0;
            ioctl(sockFd, FIONBIO, &ul); /*设置为阻塞模式 */
            pthread_t pthreadId;

            if (0 != pthread_create(&pthreadId, NULL, (void *)qhal_SockTcpRecvTask, (void *)(pointer_t)sockFd))
            {
                Quos_logPrintf(HAL_TCP, LL_DBG, "create thread failed errno[%d]", errno);
                break;
            }
            pthread_detach(pthreadId);
            Quos_netHostnameValidIpNumSet(hostname);
            signal(SIGPIPE, SIG_IGN);
            return (pointer_t)sockFd;
        }
        Quos_logPrintf(HAL_TCP, LL_ERR, "ret[%d] select errno[%d]", ret, errno);
        close(sockFd);
    }
    close(sockFd);

    Quos_logPrintf(HAL_TCP, LL_ERR, "connect server fail");
    return SOCKET_FD_INVALID;
}
```

#### <font color=#A52A2A  >__type事件标识符说明__</font> 

事件枚举信息定义如下：
```c
enum
{
    SOCKET_TYPE_UART = 0,
    SOCKET_TYPE_UDP,        
    SOCKET_TYPE_TCP_LISTEN,
    SOCKET_TYPE_TCP_CLI,    
    SOCKET_TYPE_TCP_SSL_CLI,
    SOCKET_TYPE_UDP_SSL_CLI,
}; 
```
__参数介绍__   

|成员 |说明  
|---|---
|`SOCKET_TYPE_UART`         |串口事件  
|`SOCKET_TYPE_UDP`	   	    |UDP事件  
|`SOCKET_TYPE_TCP_LISTEN`   |TCP监听事件  
|`SOCKET_TYPE_TCP_CLI`      |TCP客户端事件  
|`SOCKET_TYPE_TCP_SSL_CLI`	|TCP客户端TSL加密事件  
|`SOCKET_TYPE_UDP_SSL_CLI`  |UDP客户端TSL加密事件  

<span id="Qhal_udpInit">  </span>
### <font color=#A52A2A  >__Qhal_udpInit__</font>  

该函数用于初始化UDP客户端。

__函数原型__  
```c
pointer_t  Qhal_udpInit(quint8_t *type, quint16_t l_port, const char *hostname, quint16_t r_port, void **peer);
```

* __输入参数__

    * __quint16_t__ __`l_port`__: UDP本地端口
    * __quint16_t__ __`hostname：`__: 远程服务器的域名或IP
    * __quint16_t__ __`r_port`__: 远程服务器端口

* __输出参数__   

    * __quint8_t *__ __`type`__: Socket类型
    * __void **__ __`peer`__: UDP本地端口
   
* __返回值__  

    * Socket的句柄。			       函数执行成功  
    * SOCKET_FD_INVALID(-1)		  函数执行失败

__实现要求__  
必须实现。需在本API内创建和连接UDP Socket链路。另外需给*type=SOCKET_TYPE_UDP设置Socket类型。

__适配示例代码__

```c
/**
 * 功能 @brief udp客户端初始化
 * 输入 @param type socket类型
 * 输入 @param l_port udp本地端口号
 * 输入 @param hostname 远程服务器的域名或IP
 * 输入 @param r_port 远程服务器端口
 * 输出 @param peer 由hostname获得的远程服务器地址信息，用于UDP发送
 * 输出 @retval 函数是否执行成功
 * 备注 @remark 必须实现。需在本API内创建和连接UDP Socket链路。另外需给*type=SOCKET_TYPE_UDP设置Socket类型。
 */
pointer_t FUNCTION_ATTR_ROM Qhal_udpInit(quint8_t *type, quint16_t l_port, const char *hostname, quint16_t r_port, void **peer)
{
    Quos_logPrintf(HAL_UDP, LL_ERR, "l_port:%u remote:%u", l_port, r_port);
    struct addrinfo hints = {0}, *dns = NULL;
    *type = SOCKET_TYPE_UDP;
    hints.ai_socktype = SOCK_DGRAM;
    if (hostname)
    {
        char portStr[6];
        HAL_SPRINTF(portStr, "%u", r_port);
        if (0 != getaddrinfo(hostname, portStr, &hints, &dns) || NULL == dns)
        {
            Quos_logPrintf(HAL_TCP, LL_ERR, "getaddrinfo[%s] fail errno[%d]!", hostname, errno);
            return SOCKET_FD_INVALID;
        }
        else if (peer && (*peer = HAL_MALLOC(sizeof(struct sockaddr))) == NULL)
        {
            return SOCKET_FD_INVALID;
        }
        hints = *dns;
    }
    else
    {
        hints.ai_family = AF_INET;
    }
    do
    {
        int sockFd = socket(hints.ai_family, hints.ai_socktype, hints.ai_protocol);
        if (sockFd >= 0)
        {
            /*允许端口复用 */
            struct sockaddr addrIn = {0};
            if (AF_INET == hints.ai_family)
            {
                struct sockaddr_in *in = (struct sockaddr_in *)&addrIn;
                in->sin_family = AF_INET;
                in->sin_addr.s_addr = htonl(INADDR_ANY);
                in->sin_port = htons(l_port);
            }
            else
            {
                struct sockaddr_in6 *in = (struct sockaddr_in6 *)&addrIn;
                in->sin6_family = AF_INET6;
                in->sin6_addr = in6addr_any;
                in->sin6_port = htons(l_port);
            }

            pthread_t pthreadId;
            qint32_t size = 1;
            if (setsockopt(sockFd, SOL_SOCKET, SO_REUSEADDR, &size, sizeof(qint32_t)) < 0)
            {
                Quos_logPrintf(HAL_TCP, LL_ERR, "socket REUSEADDR errno[%d]", errno);
                close(sockFd);
            }
            else if (bind(sockFd, (struct sockaddr *)&addrIn, sizeof(addrIn)) < 0)
            {
                close(sockFd);
            }
            else if (hostname && connect(sockFd, hints.ai_addr, hints.ai_addrlen) == -1)
            {
                close(sockFd);
            }
            else if (0 != pthread_create(&pthreadId, NULL, (void *)qhal_SockUdpRecvTask, (void *)(pointer_t)sockFd))
            {
                close(sockFd);
            }
            else
            {
                pthread_detach(pthreadId);
                if (peer && *peer && hostname)
                    HAL_MEMCPY(*peer, hints.ai_addr, sizeof(struct sockaddr));
                if (dns)
                    freeaddrinfo(dns);
                return (pointer_t)sockFd;
            }
        }
        if (hints.ai_next)
        {
            hints = *(hints.ai_next);
        }
        else
        {
            break;
        }
    } while (1);
    if (dns)
        freeaddrinfo(dns);
    if (peer && *peer)
        HAL_FREE(*peer);
    return SOCKET_FD_INVALID;
}
```

<span id="Qhal_tcpSslClientInit">  </span>
### <font color=#A52A2A  >__Qhal_tcpSslClientInit__</font>  
该函数用于初始化TCP安全客户端。 

__函数原型__  
```c
pointer_t  Qhal_tcpSslClientInit(quint8_t *type, const char *hostname, uint16_t r_port, quint32_t *connectTimeout);
```

* __输入参数__

    * __const char *__ __`l_port`__ : 远程服务器的域名或IP。
    * __quint16_t__ __`r_port`__ : 远程服务器端口。

* __输出参数__ 

    * __quint8_t *__ __`type`__ : Socket类型。
    * __quint32_t *__ __`connectTimeout：`__ : TCP连接的最大超时时间。 
	 </br>0						  已完成连接（连接成功或连接失败）
	 </br>本函数执行的最大超时时间	正在连接
 
* __返回值__  
    * Socket的句柄。			   函数执行成功  
    * SOCKET_FD_INVALID(-1)		  函数执行失败

__实现要求__  
必须实现。需在本API内实现hostname的DNS解析，并创建和连接SSL TCP Socket链路。另外需给*type=SOCKET_TYPE_TCP_SSL_CLI设置Socket类型。

__适配示例代码__

```c
/**
 * 功能 @brief 初始化SSL TCP客户端
 * 输出 @param type Socket类型
 * 输入 @param hostname 远程服务器的域名或IP
 * 输入 @param r_port 远程服务器端口
 * 输出 @param connectTimeout TCP连接的最大超时时间；0：表示连接完成
 * 输出 @retval Socket的句柄；-1：表示失败
 * 备注 @remark 必须实现。需在本API内实现创建和连接SSL TCP Socket链路。另外需给*type=SOCKET_TYPE_TCP_SSL_CLI设置Socket类型。
 */
pointer_t FUNCTION_ATTR_ROM Qhal_tcpSslClientInit(quint8_t *type, const char *hostname, quint16_t r_port, quint32_t *connectTimeout)
{
    UNUSED(connectTimeout);
    Quos_logPrintf(HAL_TLS, LL_DBG, "hostname:%s[%u]", hostname, r_port);
    int ret = 0;
    SockSslContext_T *sockSslCtx = HAL_MALLOC(sizeof(SockSslContext_T));
    if (NULL == sockSslCtx)
    {
        Quos_logPrintf(HAL_TLS, LL_ERR, "malloc sockSslCtx fail");
        return SOCKET_FD_INVALID;
    }
    *type = SOCKET_TYPE_TCP_SSL_CLI;
    HAL_MEMSET(sockSslCtx, 0, sizeof(SockSslContext_T));
    mbedtls_net_init(&sockSslCtx->net_ctx);
    mbedtls_ssl_init(&sockSslCtx->ssl_ctx);
    mbedtls_ssl_config_init(&sockSslCtx->ssl_conf);
    mbedtls_x509_crt_init(&sockSslCtx->cacert);
    mbedtls_x509_crt_init(&sockSslCtx->clicert);
    mbedtls_pk_init(&sockSslCtx->pkey);
    mbedtls_ctr_drbg_init(&sockSslCtx->ctr_drbg);
    mbedtls_entropy_init(&sockSslCtx->entropy);
    mbedtls_ssl_conf_handshake_timeout(&sockSslCtx->ssl_conf, 1000, 30000);
    if ((ret = mbedtls_ctr_drbg_seed(&sockSslCtx->ctr_drbg,
                                     mbedtls_entropy_func,
                                     &sockSslCtx->entropy,
                                     (const quint8_t *)Qhal_softversionGet(), HAL_STRLEN(Qhal_softversionGet()))) != 0)
    {
        Quos_logPrintf(HAL_TLS, LL_ERR, "ctr_drbg_seed fail ret=-0x%X", -ret);
        goto exit;
    }

    /*if( && (ret =mbedtls_x509_crt_parse( &sockSslCtx->cacert,  )))
    {
        Quos_logPrintf(HAL_TLS, LL_ERR, "mbedtls_x509_crt_parse fail ret=-0x%X", -ret);
        goto exit;
    }*/
    char portStr[6];
    HAL_SPRINTF(portStr, "%u", r_port);
    if ((ret = mbedtls_net_connect(&sockSslCtx->net_ctx, hostname, portStr, MBEDTLS_NET_PROTO_TCP)) != 0)
    {
        Quos_logPrintf(HAL_TLS, LL_ERR, "mbedtls_x509_crt_parse fail ret=-0x%X", -ret);
        goto exit;
    }
    if ((ret = mbedtls_ssl_config_defaults(&sockSslCtx->ssl_conf,
                                           MBEDTLS_SSL_IS_CLIENT,
                                           MBEDTLS_SSL_TRANSPORT_STREAM,
                                           MBEDTLS_SSL_PRESET_DEFAULT)) != 0)
    {
        Quos_logPrintf(HAL_TLS, LL_ERR, "ssl_config_defaults fail ret=-0x%X", -ret);
        goto exit;
    }

    /* TODO: add customerization encryption algorithm */
    HAL_MEMCPY(&sockSslCtx->profile, sockSslCtx->ssl_conf.cert_profile, sizeof(mbedtls_x509_crt_profile));
    sockSslCtx->profile.allowed_mds = sockSslCtx->profile.allowed_mds | MBEDTLS_X509_ID_FLAG(MBEDTLS_MD_MD5);
    mbedtls_ssl_conf_cert_profile(&sockSslCtx->ssl_conf, &sockSslCtx->profile);

    mbedtls_ssl_conf_authmode(&sockSslCtx->ssl_conf, MBEDTLS_SSL_VERIFY_NONE);
    mbedtls_ssl_conf_ca_chain(&sockSslCtx->ssl_conf, &sockSslCtx->cacert, NULL);
    mbedtls_ssl_conf_rng(&sockSslCtx->ssl_conf, mbedtls_ctr_drbg_random, &sockSslCtx->ctr_drbg);

    if ((ret = mbedtls_ssl_setup(&sockSslCtx->ssl_ctx, &sockSslCtx->ssl_conf)) != 0)
    {
        Quos_logPrintf(HAL_TLS, LL_ERR, "ssl_setup fail ret=-0x%X", -ret);
        goto exit;
    }
    if ((ret = mbedtls_ssl_set_hostname(&sockSslCtx->ssl_ctx, hostname)) != 0)
    {
        Quos_logPrintf(HAL_TLS, LL_ERR, "ssl_set_hostname fail ret=-0x%X", -ret);
        goto exit;
    }

    mbedtls_ssl_set_bio(&sockSslCtx->ssl_ctx, &sockSslCtx->net_ctx, mbedtls_net_send, mbedtls_net_recv, NULL);
    while ((ret = mbedtls_ssl_handshake(&sockSslCtx->ssl_ctx)) != 0)
    {
        if (ret != MBEDTLS_ERR_SSL_WANT_READ && ret != MBEDTLS_ERR_SSL_WANT_WRITE)
        {
            Quos_logPrintf(HAL_TLS, LL_ERR, "ssl_handshake fail ret=-0x%X", -ret);
            goto exit;
        }
    }
    if ((ret = mbedtls_ssl_get_verify_result(&sockSslCtx->ssl_ctx)) != 0)
    {
        Quos_logPrintf(HAL_TLS, LL_ERR, "ssl_get_verify_result fail ret=-0x%X", -ret);
        goto exit;
    }
    else
    {
        pthread_t pthreadId;
        if (0 != pthread_create(&pthreadId, NULL, (void *)qhal_SockTcpTlsRecvTask, (void *)sockSslCtx))
        {
            Quos_logPrintf(HAL_TLS, LL_ERR, "creat pthread fail");
            goto exit;
        }
        pthread_detach(pthreadId);
        Quos_logPrintf(HAL_TLS, LL_INFO, "tcp tls client create ok");
        return (pointer_t)sockSslCtx;
    }

exit:
    mbedtls_net_free(&sockSslCtx->net_ctx);
    mbedtls_ssl_close_notify(&sockSslCtx->ssl_ctx);
    mbedtls_x509_crt_free(&sockSslCtx->cacert);
    mbedtls_x509_crt_free(&sockSslCtx->clicert);
    mbedtls_pk_free(&sockSslCtx->pkey);
    mbedtls_ssl_free(&sockSslCtx->ssl_ctx);
    mbedtls_ssl_config_free(&sockSslCtx->ssl_conf);
    mbedtls_ctr_drbg_free(&sockSslCtx->ctr_drbg);
    mbedtls_entropy_free(&sockSslCtx->entropy);
    HAL_FREE(sockSslCtx);
    return SOCKET_FD_INVALID;
}
```

<span id="Qhal_udpSslInit">  </span>
### <font color=#A52A2A  >__Qhal_udpSslInit__</font>  
该函数用于初始化UDP安全客户端。  

__函数原型__  
```c
pointer_t  Qhal_udpSslInit(quint8_t *type, quint16_t l_port, const char *hostname, quint16_t r_port);
```

* __输入参数__  

    * __quint16_t__ __`l_port`__ : UDP本地端口。
    * __const char *__ __`hostname`__ : 远程服务器的域名或IP。
    * __quint16_t__ __`r_port`__ : 远程服务器端口。

* __输入参数__  

    * __quint8_t *__ __`type`__ : Socket类型。
  

* __返回值__  
    * Socket的句柄。			       函数执行成功  
    * SOCKET_FD_INVALID(-1)		  函数执行失败

__实现要求__  
必须实现，需在本API内实现创建和连接SSL UDP Socket链路。另外需给*type=SOCKET_TYPE_UDP_SSL_CLI设置Socket类型。

__适配示例代码__

```c
/**
 * 功能 @brief 初始化SSL UDP客户端
 * 输出 @param type Socket类型
 * 输入 @param r_port 本地端口
 * 输入 @param hostname 远程服务器的域名或IP
 * 输入 @param r_port 远程服务器端口
 * 输出 @retval Socket的句柄；-1：表示失败
 * 备注 @remark 必须实现。需在本API内实现创建和连接SSL UDP Socket链路。另外需给*type=SOCKET_TYPE_UDP_SSL_CLI设置Socket类型。
 */
pointer_t FUNCTION_ATTR_ROM Qhal_udpSslInit(quint8_t *type, quint16_t l_port, const char *hostname, quint16_t r_port)
{
    UNUSED(l_port);
    Quos_logPrintf(HAL_DTLS, LL_DBG, "hostname:%s[%u]", hostname, r_port);
    int ret = 0;
    SocketSslKey_t sslKey;
    *type = SOCKET_TYPE_UDP_SSL_CLI;
    SockSslContext_T *sockSslCtx = HAL_MALLOC(sizeof(SockSslContext_T));
    if (NULL == sockSslCtx)
    {
        Quos_logPrintf(HAL_DTLS, LL_ERR, "malloc sockSslCtx fail");
        return SOCKET_FD_INVALID;
    }
    mbedtls_net_init(&sockSslCtx->net_ctx);
    mbedtls_ssl_init(&sockSslCtx->ssl_ctx);
    mbedtls_ssl_config_init(&sockSslCtx->ssl_conf);
    mbedtls_x509_crt_init(&sockSslCtx->cacert);
    mbedtls_x509_crt_init(&sockSslCtx->clicert);
    mbedtls_pk_init(&sockSslCtx->pkey);
    mbedtls_ctr_drbg_init(&sockSslCtx->ctr_drbg);
    mbedtls_entropy_init(&sockSslCtx->entropy);
    if (FALSE == qhal_socketGetSslKey(*type, hostname, r_port, &sslKey))
    {
        return SOCKET_FD_INVALID;
    }
    /*这里选择PSK密钥 */
    if (0 == sslKey.mode)
    {
        Quos_logPrintf(HAL_DTLS, LL_ERR, "psk:%.*s id:%.*s", sslKey.val.psk.pskLen, sslKey.val.psk.psk, sslKey.val.psk.idLen, sslKey.val.psk.id);
        mbedtls_ssl_conf_psk(&sockSslCtx->ssl_conf, sslKey.val.psk.psk, sslKey.val.psk.pskLen, sslKey.val.psk.id, sslKey.val.psk.idLen);
    }
    if (sslKey.isDynamic)
    {
        if (0 == sslKey.mode)
        {
            HAL_FREE(sslKey.val.psk.psk);
            HAL_FREE(sslKey.val.psk.id);
        }
    }
    mbedtls_ssl_conf_handshake_timeout(&sockSslCtx->ssl_conf, 1000, 30000);
    if ((ret = mbedtls_ctr_drbg_seed(&sockSslCtx->ctr_drbg,
                                     mbedtls_entropy_func,
                                     &sockSslCtx->entropy,
                                     (const unsigned char *)"HELLO", HAL_STRLEN("HELLO"))) != 0)
    {
        Quos_logPrintf(HAL_DTLS, LL_ERR, "mbedtls_ctr_drbg_seed fail ret=-0x%X", -ret);
        goto exit;
    }
    /*if( && (ret =mbedtls_x509_crt_parse( &sockSslCtx->cacert,  )))
    {
        Quos_logPrintf(HAL_DTLS, LL_ERR, "mbedtls_x509_crt_parse fail ret=-0x%X", -ret);
        goto exit;
    }*/
    char portStr[6];
    HAL_SPRINTF(portStr, "%u", r_port);
    if ((ret = mbedtls_net_connect(&sockSslCtx->net_ctx, hostname,
                                   portStr, MBEDTLS_NET_PROTO_UDP)) != 0)
    {
        Quos_logPrintf(HAL_DTLS, LL_ERR, "mbedtls_net_connect fail ret=-0x%X", -ret);
        goto exit;
    }
    if ((ret = mbedtls_ssl_config_defaults(&sockSslCtx->ssl_conf,
                                           MBEDTLS_SSL_IS_CLIENT,
                                           MBEDTLS_SSL_TRANSPORT_DATAGRAM,
                                           MBEDTLS_SSL_PRESET_DEFAULT)) != 0)
    {
        Quos_logPrintf(HAL_DTLS, LL_ERR, "mbedtls_ssl_config_defaults fail ret=-0x%X", -ret);
        goto exit;
    }

    /* TODO: add customerization encryption algorithm */
    mbedtls_ssl_conf_rng(&sockSslCtx->ssl_conf, mbedtls_ctr_drbg_random, &sockSslCtx->ctr_drbg);

    if ((ret = mbedtls_ssl_setup(&sockSslCtx->ssl_ctx, &sockSslCtx->ssl_conf)) != 0)
    {
        Quos_logPrintf(HAL_DTLS, LL_ERR, "mbedtls_ssl_setup fail ret=-0x%X", -ret);
        goto exit;
    }

    /*注册设置定时器和获取定时器回调 */
    mbedtls_ssl_set_timer_cb(&sockSslCtx->ssl_ctx, sockSslCtx, dtls_timing_set_delay, dtls_timing_get_delay);
    mbedtls_ssl_set_bio(&sockSslCtx->ssl_ctx, &sockSslCtx->net_ctx, mbedtls_net_send, mbedtls_net_recv, mbedtls_net_recv_timeout);
    while ((ret = mbedtls_ssl_handshake(&sockSslCtx->ssl_ctx)) != 0)
    {
        if (ret != MBEDTLS_ERR_SSL_WANT_READ && ret != MBEDTLS_ERR_SSL_WANT_WRITE)
        {
            Quos_logPrintf(HAL_DTLS, LL_ERR, "mbedtls_ssl_handshake fail ret=-0x%X", -ret);
            goto exit;
        }
    }
    if ((ret = mbedtls_ssl_get_verify_result(&sockSslCtx->ssl_ctx)) != 0)
    {
        Quos_logPrintf(HAL_DTLS, LL_ERR, "mbedtls_ssl_get_verify_result fail ret=-0x%X", -ret);
        goto exit;
    }
    else
    {
        pthread_t pthreadId;
        if (0 != pthread_create(&pthreadId, NULL, (void *)qhal_SockUdpTlsRecvTask, (void *)sockSslCtx))
        {
            Quos_logPrintf(HAL_DTLS, LL_ERR, "creat pthread fail");
            goto exit;
        }
        pthread_detach(pthreadId);
        Quos_logPrintf(HAL_DTLS, LL_INFO, "tcp tls client create ok");
        return (pointer_t)sockSslCtx;
    }

exit:
    HAL_FREE(sockSslCtx);
    return SOCKET_FD_INVALID;
}
```

<span id="Qhal_sockWrite">  </span>
### <font color=#A52A2A  >__Qhal_sockWrite__</font>  
该函数用于发送Socket数据。  

__函数原型__ 
```c
qbool Qhal_sockWrite(pointer_t sockFd, quint8_t type, const void *peer, const quint8_t *buf, quint16_t bufLen, qbool *isSending);
```

* __输入参数__ 

    * __pointer_t__ __`sockFd`__ : Socket的操作句柄。
    * __quint8_t__ __`type`__ : Socket类型。
    * __const void *__ __`peer`__ : 远程UDP服务器地址信息。非UDP时为NULL。
    * __const quint8_t *__ __`buf`__ : 待发送数据。
    * __quint16_t__ __`bufLen`__ : 待发送数据长度。

* __输入参数__ 

    * __qbool__ __`isSending`__ : 标识发送结果是否需要异步返回。

* __返回值__ 
    * TRUE	函数执行成功  
    * FALSE	函数执行失败

__实现要求__ 
必须实现。根据Socket类型调用不同Socket发送接口，对于非阻塞类型发送，需要设置isSending=TRUE，并发送回调函数Quos_socketIOTxCb()来告知QuecThing功能发送结果。

__适配示例代码__

```c
/**
 * 功能 @brief 发送socket数据
 * 输入 @param sockFd socket操作句柄
 * 输入 @param type socket类型
 * 输入 @param peer 远程UDP服务器地址信息。非UDP时为NULL
 * 输入 @param buf 待发送数据
 * 输入 @param bufLen 待发送数据长度
 * 输出 @param isSending 标识发送结果是否需要异步返回
 * 输出 @retval 函数是否执行成功
 * 备注 @remark 必须实现。根据Socket类型调用不同Socket发送接口，对于非阻塞类型发送，需要设置isSending=TRUE，并发送回调函数Quos_socketIOTxCb()来告知QuecThing功能发送结果。
 */
qbool FUNCTION_ATTR_ROM Qhal_sockWrite(pointer_t sockFd, quint8_t type, const void *peer, const quint8_t *buf, quint16_t bufLen, qbool *isSending)
{
    quint16_t offset = 0;
    UNUSED(peer);
    UNUSED(isSending);
    Quos_logPrintf(HAL_SOCK, LL_DBG, "sockFd:" PRINTF_FD " type:%u len:%u", sockFd, type, bufLen);
    Quos_logHexDump(HAL_SOCK, LL_DUMP, "", (void *)buf, bufLen);
    while (offset < bufLen)
    {
        int writeLen = -1;
        switch (type)
        {
        case SOCKET_TYPE_UART:
        case SOCKET_TYPE_TCP_CLI:
            writeLen = send(sockFd, buf + offset, bufLen - offset, MSG_NOSIGNAL);
            break;
        case SOCKET_TYPE_UDP:
            if (peer)
            {
                writeLen = sendto(sockFd, buf + offset, bufLen - offset, 0, (struct sockaddr *)peer, sizeof(struct sockaddr));
            }
            else
            {
                writeLen = send(sockFd, buf + offset, bufLen - offset, MSG_NOSIGNAL);
            }
            break;
        case SOCKET_TYPE_TCP_SSL_CLI:
        case SOCKET_TYPE_UDP_SSL_CLI:
        {
            SockSslContext_T *sockSslCtx = (SockSslContext_T *)sockFd;
            writeLen = mbedtls_ssl_write(&sockSslCtx->ssl_ctx, buf + offset, bufLen - offset);
            if (MBEDTLS_ERR_SSL_WANT_READ == writeLen || MBEDTLS_ERR_SSL_WANT_WRITE == writeLen)
            {
                *isSending = TRUE;
                writeLen = bufLen - offset;
            }
            break;
        }
        default:
            break;
        }
        if (writeLen <= 0)
        {
            Quos_logPrintf(HAL_SOCK, LL_ERR, "sockFd[" PRINTF_FD "] type[%u] Write fail:len[%d %u/%u] errno[%d]", sockFd, type, writeLen, offset, bufLen, errno);
            return FALSE;
        }
        offset += writeLen;
    }
    return TRUE;
}
```

<span id="Qhal_sockClose">  </span>
### <font color=#A52A2A  >__Qhal_sockClose__</font>  
该函数用于关闭Socket链路。

__函数原型__ 
```c
qbool Qhal_sockClose(pointer_t sockFd, quint8_t type);
``` 
* __输入参数__  

    * __pointer_t__ __`sockFd`__ : Socket的操作句柄。
    * __quint8_t__ __`type`__ : Socket类型。
      
* __返回值__ 
    * TRUE	函数执行成功  
    * FALSE	函数执行失败

__实现要求__ 
必须实现。根据Socket类型调用模块对应API来关闭Socket链路。

__适配示例代码__

```c
/**
 * 功能 @brief socket链路关闭
 * 输入 @param sockFd socket操作句柄
 * 输入 @param type socket类型
 * 输出 @retval 函数是否执行成功
 * 备注 @remark 必须实现。根据Socket类型调用模块对应API来关闭Socket链路。
 */
void FUNCTION_ATTR_ROM Qhal_sockClose(pointer_t sockFd, quint8_t type)
{
    Quos_logPrintf(HAL_SOCK, LL_DBG, "close sockFd=" PRINTF_FD " type:%u", sockFd, type);
    switch (type)
    {
    case SOCKET_TYPE_UART:
    case SOCKET_TYPE_TCP_CLI:
    case SOCKET_TYPE_UDP:
    case SOCKET_TYPE_TCP_LISTEN:
        shutdown(sockFd, 2);
        break;
    case SOCKET_TYPE_TCP_SSL_CLI:
    case SOCKET_TYPE_UDP_SSL_CLI:
    {
        SockSslContext_T *sockSslCtx = (SockSslContext_T *)sockFd;
        mbedtls_net_free(&sockSslCtx->net_ctx);
        /* HAL_FREE(sockSslCtx); */
        break;
    }
    default:
        break;
    }
}
```

<span id="Qhal_tcpServerInit">  </span>
### <font color=#A52A2A  >__Qhal_tcpServerInit__</font>  
 该函数用于TCP服务器初始化。 

__函数原型__
```c
pointer_t Qhal_tcpServerInit(quint8_t *type, quint16_t l_port, quint8_t maxClient);
```
* __输入参数__ 

    * __quint16_t__ __`l_port`__ : 端口号。
    * __quint8_t__ __`maxClient`__ : 客户端最大连接数。

* __输入参数__ 

    * __quint8_t *__ __`type`__ : 事件类型。
        
* __返回值__ 
    * Socket的句柄。			       函数执行成功  
    * SOCKET_FD_INVALID(-1)		  函数执行失败

__实现要求__  
当宏开关QUEC_ENABLE_LAN打开后必须实现。

__适配示例代码__

```c
/**
 * 功能 @brief tcp服务器初始化
 * 输入 @param type socket类型
 * 输入 @param l_port udp本地端口号
 * 输入 @param maxClient 客户端最大连接数
 * 输出 @retval Socket的操作句柄
 * 备注 @remark 当宏开关QUEC_ENABLE_LAN打开后必须实现。
 */
pointer_t FUNCTION_ATTR_ROM Qhal_tcpServerInit(quint8_t *type, quint16_t l_port, quint8_t maxClient)
{
    int sockFd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockFd < 0)
    {
        Quos_logPrintf(HAL_TCP, LL_ERR, "create TCP server socket fail errno[%d]", errno);
        return SOCKET_FD_INVALID;
    }
    *type = SOCKET_TYPE_TCP_LISTEN;
    /* 3. 允许端口复用 */
    qint32_t size = 1;
    if (setsockopt(sockFd, SOL_SOCKET, SO_REUSEADDR, &size, sizeof(qint32_t)) < 0)
    {
        Quos_logPrintf(HAL_TCP, LL_ERR, "socket REUSEADDR errno[%d]", errno);
        close(sockFd);
        return SOCKET_FD_INVALID;
    }
    struct sockaddr_in addrIn = {0};
    addrIn.sin_family = AF_INET;
    addrIn.sin_addr.s_addr = INADDR_ANY;
    addrIn.sin_port = htons(l_port);
    if (bind(sockFd, (struct sockaddr *)&addrIn, sizeof(addrIn)) == -1)
    {
        Quos_logPrintf(HAL_TCP, LL_ERR, "tcp bind fail!errno:%s", strerror(errno));
        close(sockFd);
        return SOCKET_FD_INVALID;
    }
    if (listen(sockFd, maxClient) == -1) /*在端口sock_descriptor监听 */
    {
        Quos_logPrintf(HAL_TCP, LL_ERR, "tcp listen fail errno[%d]", errno);
        close(sockFd);
        return SOCKET_FD_INVALID;
    }
    pthread_t pthreadId;
    if (0 != pthread_create(&pthreadId, NULL, (void *)qhal_SockTcpListenTask, (void *)(pointer_t)sockFd))
    {
        close(sockFd);
        return SOCKET_FD_INVALID;
    }
    pthread_detach(pthreadId);
    return (pointer_t)sockFd;
}
```

<span id="Qhal_dns2IPGet">  </span>
### <font color=#A52A2A  >__Qhal_dns2IPGet__</font>  
该函数用于通过域名解析来获取IP列表。

__函数原型__ 
```c
quint32_t Qhal_dns2IPGet(const char *hostname, quint8_t **retAddr, quint32_t addrMax);
```

* __输入参数__

    * __const char *__ __`hostname`__ : 待解析的域名。
    * __quint32_t__ __`addrMax`__ : 最大可接受的IP个数。

* __输出参数__

    * __quint8_t **__ __`retAddr：`__ : 解析到的点格式IP列表，单个IP长度不超过46。

* __返回值__  
    * 该域名实际能解析到的IP个数。

__实现要求__  
必须实现。增加该API后，`Qhal_tcpClientInit()`需要按照例程修改实现代码。

__适配示例代码__

```c
/**
 * 功能 @brief  根据URL解析为IP
 * 输入 @param hostname 待解析的域名
 * 输出 @param retAddr 解析到的点格式IP列表，单个IP长度不超过46
 * 输入 @param addrMax 最大可接受的IP个数
 * 输出 @retval 该域名实际能解析到IP个数
 * 备注 @remark 必须实现；域名管理器用将会对域名解析后的IP进行保存用于下次连接相同域名时不再进行域名解析，节省连接过程中域名解析时间。
 */
quint32_t FUNCTION_ATTR_ROM Qhal_dns2IPGet(const char *hostname, quint8_t **retAddr, quint32_t addrMax)
{
    struct hostent *host = NULL;
    if (NULL == (host = gethostbyname(hostname)))
    {
        return 0;
    }
    quint32_t i;
    for (i = 0; i < addrMax; i++)
    {
        if (NULL == host->h_addr_list[i])
        {
            break;
        }
        HAL_STRCPY(retAddr[i], inet_ntoa(*(struct in_addr *)host->h_addr_list[i]));
    }
    return i;
}
```

<span id="Qhal_sockUdpBroadCastLAN">  </span>
### <font color=#A52A2A  >__Qhal_sockUdpBroadCastLAN__</font>  
该函数用于发送广播数据。

__函数原型__ 
`qbool Qhal_sockUdpBroadCastLAN(pointer_t sockFd, quint16_t port, quint8_t *buf, quint32_t bufLen);`  

* __输入参数__ 

    * __pointer_t__ __`sockFd`__: socket操作句柄
    * __quint16_t__ __`port`__: 广播端口号
    * __quint8_t *__ __`buf`__: 广播发送数据内容
    * __quint32_t__ __`bufLen`__: 数据长度

* __返回值__ 
    * TRUE		函数执行成功 
    * FALSE		函数执行失败

__实现要求__  
启用无线网关功能后该函数必须实现。

__适配示例代码__

```c
/**
 * 功能 @brief UDP广播发送
 * 输入 @param sockFd socket操作句柄
 * 输入 @param port 广播消息端口号
 * 输入 @param buf 广播数据内容
 * 输入 @param bufLen 广播数据长度
 * 输出 @retval 函数是否执行成功
 * 备注 @remark 必须实现。开启无线网关功能时，必须实现，用于网关发送广播消息。
 */
qbool FUNCTION_ATTR_ROM Qhal_sockUdpBroadCastLAN(pointer_t sockFd, quint16_t port, quint8_t *buf, quint32_t bufLen)
{
    struct sockaddr_in addr;
    qbool ret = FALSE;
    memset(&addr, 0, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_port = htons(port);
    addr.sin_addr.s_addr = htonl(INADDR_BROADCAST);
    ret = Qhal_sockWrite(sockFd, SOCKET_TYPE_UDP, &addr, buf, bufLen, NULL);
    if (ret < 0)
    {
        Quos_logPrintf(HAL_SOCK, LL_ERR, "send broadcast fail");
    }
    return ret;
}
```
