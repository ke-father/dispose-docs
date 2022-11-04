# Socket Communication API

## **Socket Communication**

The header file corresponding to Socket communication is qhal_socket.h.
    
The following Socket communication API can be implemented on demand. If the module uses MQTT to access Developer Center, TCP/TCP TLS must be implemented.  __Quos_socketIORx()__ is called when Socket communication receives peer data to inform the QuecThing of the data. If the Socket is not actively disconnected, __bufLen__ of __Quos_socketIORx()__  is equal to 0 and will be reported to QuecThing.

### **Socket Communication API Overview**

> Table 6: Socket Communication API Overview 

|                        Function                         |                 Description                  |
| :-----------------------------------------------------: | :------------------------------------------: |
|       [Qhal_tcpClientInit()](#Qhal_tcpClientInit)       |           Initializes TCP Client.            |
|             [Qhal_udpInit()](#Qhal_udpInit)             |           Initializes UDP Client.            |
|    [Qhal_tcpSslClientInit()](#Qhal_tcpSslClientInit)    |        Initializes TCP secure Client.        |
|          [Qhal_udpSslInit()](#Qhal_udpSslInit)          |        Initializes UDP secure Client.        |
|           [Qhal_sockWrite()](#Qhal_sockWrite)           |              Sends Socket data.              |
|           [Qhal_sockClose()](#Qhal_sockClose)           |           Closes the Socket link.            |
|       [Qhal_tcpServerInit()](#Qhal_tcpServerInit)       |           Initializes TCP Server.            |
|           [Qhal_dns2IPGet()](#Qhal_dns2IPGet)           | Gets the IP list by parsing the domain name. |
| [Qhal_sockUdpBroadCastLAN()](#Qhal_sockUdpBroadCastLAN) |            Sends broadcast data.             |

<span id="Qhal_tcpClientInit">  </span>

### <font color=#A52A2A  >__Qhal_tcpClientInit__</font> 

This function initializes TCP Client.

__Prototype__  

```c 
pointer_t  Qhal_tcpClientInit(quint8_t *type, const char *hostname, uint16_t r_port, quint32_t *connectTimeout);
```

* __Input Parameter__ 

  * __const char *__ __`hostname`__: IP or domain name of the remote server.
  * __uint16_t__ __`r_port：`__: Port of the remote server.

* __Output Parameter__

  * __quint8_t *__ __`type`__: Socket type.
  * __quint32_t *__ __`connectTimeout：`__: The maximum timeout of TCP connection.
        </br>0	Connection finished (successful or failed connection)
        </br>The maximum execution timeout	Connecting

* __Return Value__  
  * Socket handle			   Successful execution 
  * SOCKET_FD_INVALID(-1)		  Failed execution  

__Required or Optional__  
Required. TCP Socket link must be created and connected in this function and the Socket type must be set for *type=SOCKET_TYPE_TCP_CLI.

__Sample Code__

```c
/**
 * Function @brief  Initialize TCP Client.
 * Output @param type Socket type.
 * Input @param hostname IP or domain name of the remote server.
 * Input @param r_port Port of the remote server.
 * Output @param connectTimeout The maximum timeout of TCP connection. 0: connection finished.
 * Output @retval Socket handle; -1: Failed execution.
 * Note @remark Required。TCP Socket link must be created and connected in this function and the Socket type must be set for *type=SOCKET_TYPE_TCP_CLI.f
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

    /*Multiplexing the port is allowed. */
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

        ioctl(sockFd, FIONBIO, &ul); /*Set to non-blocking mode */
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
            ioctl(sockFd, FIONBIO, &ul); /*Set to blocking mode */
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

#### <font color=#A52A2A  >__type Event Identifier Description__</font> 

The enumeration of type events is defined below:

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

__Member__   

|Member |Description  
|---|---
|`SOCKET_TYPE_UART`         |Serial port event.  
|`SOCKET_TYPE_UDP`	   	    |UDP event.  
|`SOCKET_TYPE_TCP_LISTEN`   |TCP listening event.  
|`SOCKET_TYPE_TCP_CLI`      |TCP client event.  
|`SOCKET_TYPE_TCP_SSL_CLI`	|TSL encryption event on TCP server.  
|`SOCKET_TYPE_UDP_SSL_CLI`  |TSL encryption event on UDP server.  

<span id="Qhal_udpInit">  </span>

### <font color=#A52A2A  >__Qhal_udpInit__</font>  

This function initializes UDP Client.

__Prototype__  

```c
pointer_t  Qhal_udpInit(quint8_t *type, quint16_t l_port, const char *hostname, quint16_t r_port, void **peer);
```

* __Input Parameter__

  * __quint16_t__ __`l_port`__: UDP local port.
  * __quint16_t__ __`hostname：`__: IP or domain name of the remote server. 
  * __quint16_t__ __`r_port`__ : Port of the remote server.

* __Output Parameter__   

  * __quint8_t *__ __`type`__: Socket type.
  * __void **__ __`peer`__: Address information of the remote server gotten by *hostname* for UDP sending.

* __Return Value__  

  * Socket handle			       Successful execution 
  * SOCKET_FD_INVALID(-1)		  Failed execution

__Required or Optional__  
Required. UDP Socket link must be created and connected in this function and the Socket type must be set for *type=SOCKET_TYPE_UDP.

__Sample Code__

```c
/**
 * Function @brief Initialize UDP Client.
 * Input @param type Socket type.
 * Input @param l_port UDP local port.
 * Input @param hostname IP or domain name of the remote server.
 * Input @param r_port Port of the remote server.
 * Output @param peer Address information of the remote server gotten by *hostname* for UDP sending.
 * Output @retval Execution result.
 * Note @remark Required. UDP Socket link must be created and connected in this function and the Socket type must be set for *type=SOCKET_TYPE_UDP.
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
            /* Multiplexing the port is allowed. */
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

This function initializes SSL TCP Client. 

__Prototype__  

```c
pointer_t  Qhal_tcpSslClientInit(quint8_t *type, const char *hostname, uint16_t r_port, quint32_t *connectTimeout);
```

* __Input Parameter__

  * __const char *__ __`l_port`__ : IP or domain name of the remote server.
  * __quint16_t__ __`r_port`__ : Port of the remote server.

* __Output Parameter__ 

  * __quint8_t *__ __`type`__ : Socket type.
  * __quint32_t *__ __`connectTimeout：`__ : The maximum timeout of TCP connection. 
    </br>0						  Connection finished (Successful or failed execution)
     </br>The maximum execution timeout	Connecting

* __Return Value__  
  * Socket handle			   Successful execution 
  * SOCKET_FD_INVALID(-1)		  Failed execution

__Required or Optional__  
Required. DNS of hostname must be parsed and SSL TCP Socket link must be created and connected in this function. Besides, the Socket type must be set for *type=SOCKET_TYPE_TCP_SSL_CLI.

__Sample Code__

```c
/**
 * Function @brief Initialize SSL TCP Client.
 * Output @param type Socket type.
 * Input @param hostname IP or domain name of the remote server.
 * Input @param r_port Port of the remote server.
 * Output @param connectTimeout The maximum timeout of TCP connection; 0: Connection finished.
 * Output @retval Socket handle; -1: Failed execution
 * Note @remark Required.SSL TCP Socket link must be created and connected in this function. Besides, the Socket type must be set for *type=SOCKET_TYPE_TCP_SSL_CLI.
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

This function initializes SSL UDP Client. 

__Prototype__  

```c
pointer_t  Qhal_udpSslInit(quint8_t *type, quint16_t l_port, const char *hostname, quint16_t r_port);
```

* __Input Parameter__  

  * __quint16_t__ __`l_port`__ : UDP local port.
  * __const char *__ __`hostname`__ : IP or domain name of the remote server.
  * __quint16_t__ __`r_port`__ : Port of the remote server.

* __Input Parameter__  

  * __quint8_t *__ __`type`__ : Socket type.


* __Return Value__  
  * Socket handle			       Successful execution 
  * SOCKET_FD_INVALID(-1)		  Failed execution

__Required or Optional__  
Required. SSL UDP Socket link must be created and connected in this function and the Socket type must be set for *type=SOCKET_TYPE_UDP_SSL_CLI.

__Sample Code__

```c
/**
 * Function @brief Initialize SSL UDP Client.
 * Output @param type Socket type.
 * Input @param r_port UDP local port.
 * Input @param hostname IP or domain name of the remote server.
 * Input @param r_port Port of the remote server.
 * Output @retval Socket handle; -1: Failed execution.
 * Note @remark Required。需在本API内实现创建和连接SSL UDP Socket链路。另外需给*type=SOCKET_TYPE_UDP_SSL_CLI设置Socket类型。
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
    /*Select PSK here */
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

    /*Register timer and get the callback function of the timer. */
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

This function sends socket data.

__Prototype__ 

```c
qbool Qhal_sockWrite(pointer_t sockFd, quint8_t type, const void *peer, const quint8_t *buf, quint16_t bufLen, qbool *isSending);
```

* __Input Parameter__ 

  * __pointer_t__ __`sockFd`__ : Socket handle.
  * __quint8_t__ __`type`__ : Socket type.
  * __const void *__ __`peer`__ : Address information of the remote UDP server, which is NULL when the server is not UDP.
  * __const quint8_t *__ __`buf`__ : Data to be sent.
  * __quint16_t__ __`bufLen`__ : Length of the data to be sent.

* __Input Parameter__ 

  * __qbool__ __`isSending`__ : Identification of whether the sending result needs to be returned. asynchronously.

* __Return Value__ 
  * TRUE	Successful execution 
  * FALSE	Failed execution

__Required or Optional__ 
Required. Call different socket sending interfaces according to the socket type. For non-blocking type, set isSending to TRUE and send Quos_socketIOTxCb() to inform QuecThing the sending result.

__Sample Code__

```c
/**
 * Function @brief Send socket data.
 * Input @param sockFd socket handle.
 * Input @param type socket type.
 * Input @param peer Address information of the remote UDP server, which is NULL when the server is not UDP.
 * Input @param buf Data to be sent.
 * Input @param bufLen Length of the data to be sent.
 * Output @param isSending Identification of whether the sending result needs to be returned. 
 * Output @retval Execution result. 
 * Note @remark Required. Call different socket sending interfaces according to the socket type. For non-blocking type, set isSending to TRUE and send Quos_socketIOTxCb() to inform QuecThing the sending result.
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

This function closes the Socket link.

__Prototype__ 

```c
qbool Qhal_sockClose(pointer_t sockFd, quint8_t type);
```

* __Input Parameter__  

  * __pointer_t__ __`sockFd`__ : Socket handle.
  * __quint8_t__ __`type`__ : Socket type.

* __Return Value__ 
  * TRUE	Successful execution 
  * FALSE	Failed execution

__Required or Optional__ 
Required. Close the socket link by calling the module's API according to the socket type.

__Sample Code__

```c
/**
 * Function @brief Close the socket link.
 * Input @param sockFd Socket handle.
 * Input @param type Socket type.
 * Output @retval Execution result.
 * Note @remark Required. Close the socket link by calling the module's API according to the socket type.
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

 This function initializes TCP Server. 

__Prototype__

```c
pointer_t Qhal_tcpServerInit(quint8_t *type, quint16_t l_port, quint8_t maxClient);
```

* __Input Parameter__ 

  * __quint16_t__ __`l_port`__ :  Port ID.
  * __quint8_t__ __`maxClient`__ : The maximum number of connected clients.

* __Input Parameter__ 

  * __quint8_t *__ __`type`__ : Event type.

* __Return Value__ 
  * Socket handle			       Successful execution 
  * SOCKET_FD_INVALID(-1)		  Failed execution

__Required or Optional__  
Required when QUEC_ENABLE_LAN is enabled.

__Sample Code__

```c
/**
 * Function @brief Initializes TCP Server.
 * Input @param type Socket type.
 * Input @param l_port UDP port ID.
 * Input @param maxClient The maximum number of connected clients.
 * Output @retval Socket handle.
 * Note @remark Required when QUEC_ENABLE_LAN is enabled.
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
    /* 3. Multiplexing the port is allowed. */
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
    if (listen(sockFd, maxClient) == -1) /* Listening on sock_descriptor port */
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

This function gets the IP list by parsing the domain name.

__Prototype__ 

```c
quint32_t Qhal_dns2IPGet(const char *hostname, quint8_t **retAddr, quint32_t addrMax);
```

* __Input Parameter__

  * __const char *__ __`hostname`__ : Domain name to be parsed.
  * __quint32_t__ __`addrMax`__ : The maximum number of acceptable IP addresses.

* __Output Parameter__

  * __quint8_t **__ __`retAddr：`__ : The parsed IP list in dot format, with a single IP length not exceeding 46.

* __Return Value__  
  * The number of IP addresses that can be parsed by the domain name.

__Required or Optional__  
Required. After this function is added, the code of `Qhal_tcpClientInit()` needs to be modified according to the routine.

__Sample Code__

```c
/**
 * Function @brief  Get the IP list by parsing the domain name.
 * Input @param hostname Domain name to be parsed.
 * Output @param retAddr The parsed IP list in dot format, with a single IP length not exceeding 46.
 * Input @param addrMax The maximum number of acceptable IP addresses.
 * Output @retval The number of IP addresses that can be parsed by the domain name.
 * Note @remark Required;The domain name manager will save the parsed IP for the next connection with the same domain name without parsing the domain name, thus saving the time to parse domain name in the connection process.
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

This function sends broadcast messages.

__Prototype__ 
`qbool Qhal_sockUdpBroadCastLAN(pointer_t sockFd, quint16_t port, quint8_t *buf, quint32_t bufLen);`  

* __Input Parameter__ 

  * __pointer_t__ __`sockFd`__: Socket handle.
  * __quint16_t__ __`port`__: Port ID of the broadcast message.
  * __quint8_t *__ __`buf`__: Content of  the broadcast message.
  * __quint32_t__ __`bufLen`__: Broadcast message length.

* __Return Value__ 
  * TRUE		Successful execution
  * FALSE		Failed execution

__Required or Optional__  
Required when a wireless gateway is enabled.

__Sample Code__

```c
/**
 * Function @brief Send UDP broadcast.
 * Input @param sockFd socket handle.
 * Input @param port Port ID of the broadcast message.
 * Input @param buf Content of  the broadcast message.
 * Input @param bufLen Broadcast message length.
 * Output @retval Execution result.
 * Note @remark Required. Required when a wireless gateway is enabled.
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

