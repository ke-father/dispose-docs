# Dev硬件模块相关API

## **Dev硬件模块**

Dev硬件模块对应的API头文件位为qhal_Dev.h。

### **Dev硬件函数概览**
> 表3：Dev硬件函数概览

|函数	|说明|
|---|---|
|[Qhal_devFeeddog()](#Qhal_devFeeddog)	    | “看门狗” 定时器复位|
|[Qhal_rtcInit()](#Qhal_rtcInit)	        |初始化RTC 
|[Qhal_rtcGet()](#Qhal_rtcGet)	        |获取RTC时间
|[Qhal_softversionGet()](#Qhal_softversionGet)	|获取模块软件版本号
|[Qhal_logHeadString()](#Qhal_logHeadString)	    |获取日志打印头部添加的信息
|[Qhal_devRestart()](#Qhal_devRestart)	    |重启模块
|[Qhal_beforeMain()](#Qhal_beforeMain)	    |SDK运行前执行操作
|[Qhal_devUuidGet()](#Qhal_devUuidGet)	    |获取模块UUID唯一码
|[Qhal_randomGet()](#Qhal_randomGet)	        |生成随机数
|[Qhal_urcReport()](#Qhal_urcReport)	        |URC上报
|[Qhal_devOtaNotify()](#Qhal_devOtaNotify)	    |OTA更新通知
|[Qhal_KernelResume()](#Qhal_KernelResume)	    |退出低功耗模式
|[Qhal_netOpen()](#Qhal_netOpen)	        |打开网络
|[Qhal_netClose()](#Qhal_netClose)	        |关闭网络

<span id="Qhal_devFeeddog">  </span>
### <font color=#A52A2A  >__Qhal_devFeeddog__</font> 

该函数用于“看门狗”定时器复位。

__函数原型__  
```c
void Qhal_devFeeddog(void);
```

* __输入参数__  

	* 无

* __返回值__  

	* 无

__实现要求__  
由于进行QuecThing SDK固件更新时有5~10秒阻塞，若需要应用层执行喂狗动作，则需要适配该函数，防止“看门狗”异常。

__适配示例代码__
```c
/**
 * 功能 @brief QuecThing SDK喂狗操作
 * 输出 @retval 无
 * 备注 @remark QuecThing在执行升级文件正确性校验时较为耗时，若需要QuecThing SDK喂狗，则在此处进行适配
 */
void FUNCTION_ATTR_ROM Qhal_devFeeddog(void)
{
}
```

<span id="Qhal_rtcInit">  </span>
### <font color=#A52A2A  >__Qhal_rtcInit__</font>
该函数用于初始化RTC。

__函数原型__  
```c
qbool Qhal_rtcInit(void);
```
* __输入参数__  

	* 无  

* __返回值__  

	* TRUE 函数执行成功  
	* FALSE 函数执行失败  

__实现要求__  
可选API。如果模块需要做RTC初始化，可调用硬件层的RTC API初始化。若模块无硬件RTC，则客户需要手动创建一个虚拟RTC任务来计算模块上电后的运行时间。  

__适配示例代码__

```c
/**
 * 功能 @brief 初始化模组RTC时间模块
 * 输出 @retval 函数是否执行成功
 * 备注 @remark QuecThing需要使用RTC时间；若需要QuecThing初始化则在此进行适配，若无需QuecThing初始化，则直接返回TRUE
 */
qbool FUNCTION_ATTR_ROM Qhal_rtcInit(void)
{
    return TRUE;
}
```

<span id="Qhal_rtcGet">  </span>
### <font color=#A52A2A  >__Qhal_rtcGet__</font>
该函数用于获取RTC时间。  

__函数原型__  
```c
void Qhal_rtcGet(quint32_t *sec, quint32_t *ms);
```
* __输出参数__  

	* __quint32_t *__ __`sec`__ : 当前时间的秒总和。
	* __quint32_t *__ __`ms`__ : 当前时间的毫秒部分。
  
* __返回值__ 

	* 无  

__实现要求__   
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 获取RTC时间
 * 输入 @param sec 当前时间的秒总和
 * 输入 @param ms 当前时间的毫秒部分
 * 输出 @retval 无
 * 备注 @remark QuecThing系统运行过程需要使用到RTC时间，必须实现
 */
void FUNCTION_ATTR_ROM Qhal_rtcGet(quint32_t *sec, quint32_t *ms)
{
    struct timeval tv;
    gettimeofday(&tv, NULL);
    if (sec)
    {
        *sec = tv.tv_sec;
    }
    if (ms)
    {
        *ms = tv.tv_usec / 1000;
    }
}
```

<span id="Qhal_softversionGet">  </span>
### <font color=#A52A2A  >__Qhal_softversionGet__</font>  
该函数用于获取模块软件版本号。

__函数原型__  
```c
char *Qhal_softversionGet(void);
```  
* __输入参数__  

	* 无  

* __返回值__  

	* 模块的软件版本号。  

__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 获取通信模组版本号
 * 输出 @retval 通信模组软件版本号字符串
 * 备注 @remark QuecThing升级使用，必须实现
 */
char FUNCTION_ATTR_ROM *Qhal_softversionGet(void)
{
    return VERSION_FIRMWARE;
}
```

<span id="Qhal_logHeadString">  </span>
### <font color=#A52A2A  >__Qhal_logHeadString__</font>  
该函数用于获取日志头部添加的信息。  

__函数原型__  
```c
char *Qhal_logHeadString(void);
```

* __输入参数__  

	* 无  

* __返回值__  

	* 若添加日志头部信息，则返回添加在日志头部的信息。  
	* 若不添加日志头部信息，则返回NULL。

__实现要求__  
	必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 获取通信模组在QuecThing打印日志前添加信息
 * 输出 @retval 模组在QuecThing日志前添加信息
 * 备注 @remark 若通信模组无需在QuecThing输出日志前添加信息，则可不实现
 */
char FUNCTION_ATTR_ROM *Qhal_logHeadString(void)
{
    quint32_t sec, ms;
    Qhal_rtcGet(&sec, &ms);
    Quos_tm_t tm = Quos_localtime(sec);
    static char cmd[50];
    HAL_SPRINTF(cmd, "[\e[1;33m%02d%02d %02d%02d%02d:%03d\e[0m][\e[1;31m%ld\e[0m]", tm.tm_mon, tm.tm_mday, tm.tm_hour, tm.tm_min, tm.tm_sec, ms, syscall(SYS_gettid));
    return cmd;
}
```

<span id="Qhal_devRestart">  </span>
### <font color=#A52A2A  >__Qhal_devRestart__</font>  
该函数用于重启模块。 

__函数原型__  
```c 
void Qhal_devRestart(void);
```

* __输入参数__  

	* 无  

* __返回值__  

	* 无 
  
__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 重启通信模组
 * 输出 @retval 无
 * 备注 @remark QuecThing系统运行过程需要重启通信模组，必须实现
 */
void FUNCTION_ATTR_ROM Qhal_devRestart(void)
{
    Quos_logPrintf(HAL_DEV, LL_FAIL, "reboot now!");
    sleep(2);
    exit(0);
}
```

<span id="Qhal_beforeMain">  </span>
### <font color=#A52A2A  >__Qhal_beforeMain__</font>  
该函数用于QuecThing在初始化前给模组提供初始化 

__函数原型__  
```c 
qbool Qhal_beforeMain(void);
```

* __输入参数__  

	*无  

* __返回值__  

	* TRUE 函数执行成功  
	* FALSE 函数执行失败   

__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief QuecThing在初始化前给模组提供初始化
 * 输出 @retval 是否初始化成功
 * 备注 @remark 此API为HAL层提供初始化
 */
qbool FUNCTION_ATTR_ROM Qhal_beforeMain(void)
{
    signal(SIGPIPE, SIG_IGN);
    HAL_LOCK_INIT(lockMallocId);
    HAL_LOCK_INIT(lockKernelId);
    pthread_t pthreadId;
    pthread_create(&pthreadId, NULL, Qhal_QuecThingRun, NULL);
    pthread_detach(pthreadId);
    return TRUE;
}
```

<span id="Qhal_devUuidGet">  </span>
### <font color=#A52A2A  >__Qhal_devUuidGet__</font>  
该函数用于获取模块UUID唯一码。  

__函数原型__  
```c
char *Qhal_devUuidGet(void);
```

* __输入参数__  

	* 无

* __返回值__  

	* 模块UUID唯一码，如蜂窝模块的IMEI，Wi-Fi模块的MAC等。   

__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 获取通信模组IMEI号或者MAC地址用于作为模组在平台唯一标识DeviceKey
 * 输出 @retval 模组唯一标识ASCII字符串
 * 备注 @remark QuecThing登录平台使用需要产品级唯一；蜂窝模组可以为IMEI，WiFi蓝牙等无线设备可以为Mac地址，必须实现
 */
char FUNCTION_ATTR_ROM *Qhal_devUuidGet(void)
{
    /* 当前示例为获取Linux系统mac地址生成设备唯一标识DeviceKey */
    static char macStr[16] = {0};
    if(HAL_STRLEN(macStr))
    {
        return macStr;
    }
    struct ifreq ifr;
    struct ifconf ifc;
    char buf[2048];
 
    int sock = socket(AF_INET, SOCK_DGRAM, IPPROTO_IP);
    if (sock == -1) {
        Quos_logPrintf(HAL_DEV, LL_ERR,"socket error\n");
        return macStr;
    }

    ifc.ifc_len = sizeof(buf);
    ifc.ifc_buf = buf;
    if (ioctl(sock, SIOCGIFCONF, &ifc) == -1) {
        Quos_logPrintf(HAL_DEV, LL_ERR,"ioctl error\n");
        close(sock);
        return macStr;
    }
 
    struct ifreq* it = ifc.ifc_req;
    const struct ifreq* const end = it + (ifc.ifc_len / sizeof(struct ifreq));
    char szMac[64];
    int count = 0;
    for (; it != end; ++it) 
    {
        strcpy(ifr.ifr_name, it->ifr_name);
        if (ioctl(sock, SIOCGIFFLAGS, &ifr) == 0) 
        {
            if (! (ifr.ifr_flags & IFF_LOOPBACK)) 
            {
                if (ioctl(sock, SIOCGIFHWADDR, &ifr) == 0) 
                {
                    count ++ ;
                    unsigned char * ptr ;
                    ptr = (unsigned char  *)&ifr.ifr_ifru.ifru_hwaddr.sa_data[0];
                    snprintf(szMac,64,"%02X%02X%02X%02X%02X%02X",*ptr,*(ptr+1),*(ptr+2),*(ptr+3),*(ptr+4),*(ptr+5));
                    Quos_logPrintf(HAL_DEV, LL_ERR,"%d,Interface name : %s , Mac address : %s",count,ifr.ifr_name,szMac);
                    HAL_STRCPY(macStr,szMac);
                    break;
                }
            }
        }
        else
        {
            Quos_logPrintf(HAL_DEV, LL_ERR,"get mac info error\n");
            close(sock);
            return macStr;
        }
    }
    close(sock);
    return macStr;

}
```

<span id="Qhal_randomGet">  </span>
### <font color=#A52A2A  >__Qhal_randomGet__</font>  
该函数用于生成随机数。 

__函数原型__  
```c
quint32_t Qhal_randomGet(void);
```  

* __输入参数__  

	* 无  

* __返回值__  

	* 随机数。   

__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 用于生成随机数
 * 输出 @retval 随机数
 * 备注 @remark QuecThing系统运行过程需要使用随机数，必须实现
 */
quint32_t FUNCTION_ATTR_RAM Qhal_randomGet(void)
{
    static quint8_t cnt = 0;
    if (0 == cnt % 10)
    {
        quint32_t sec;
        Qhal_rtcGet(&sec, NULL);
        srand(sec);
    }
    cnt++;
    return rand();
}
```

<span id="Qhal_urcReport">  </span>
### <font color=#A52A2A  >__Qhal_urcReport__</font>  
该函数用于URC上报。  

__函数原型__  
```c
void Qhal_urcReport(const quint8_t *data, quint32_t len);
```

* __输入参数__

	* __const quint8_t *__ __`data`__ : AT命令方案中URC的内容。
	* __quint32_t__ __`len：`__ : 数据的长度。
 
* __返回值__  

	* 无   

__实现要求__  
可选API。若需使用AT命令接入开发者中心才需调用此函数。  

__适配示例代码__

```c
/**
 * 功能 @brief AT方案中上报URC事件
 * 输出 @retval 无
 * 备注 @remark 仅在AT方案中必须实现
 */
extern void Qhal_atCmdSendUrc(pointer_t sockFd,char *buf,unsigned int len);
void FUNCTION_ATTR_ROM Qhal_urcReport(const quint8_t *data, quint32_t len)
{
    Qhal_atCmdSendUrc(SOCKET_FD_INVALID, (char*)data, len);
}
```

<span id="Qhal_devOtaNotify">  </span>
### <font color=#A52A2A  >__Qhal_devOtaNotify__</font>  
该函数用于OTA更新通知。  

__函数原型__  
```c
	quint32_t Qhal_devOtaNotify(const char *filename, quint32_t fileSize);
```  

* __输入参数__  

	* __const char *__ __`filename：`__ : 已下载完成的新固件文件名。
	* __quint32_t__ __`fileSize：`__ : 新固件大小。
 
* __返回值__  

	* 非0，即OTA升级最大等待时间（单位：秒）：正在更新
	* 0：更新完成

__实现要求__  
当使用QuecThing SDK下载功能时必须实现。QuecThing SDK在OTA固件下载完成后，将通过该API触发模块进行固件更新。模块需在此时实现固件校验和固件升级，并在更新完成后重启。  

__适配示例代码__

```c
/**
 * 功能 @brief FOTA更新通知
 * 输入 @param filename 更新固件所在路径以及固件名称
 * 输入 @param fileSize 固件大小
 * 输出 @retval 更新固件最大等待时间，单位：秒；0表示更新完成
 * 备注 @remark 该接口为使用QuecThing进行下载更新固件；下载完成后通知到通信模组进行固件更新；模组需在此使用固件校验以及更新；更新完成后重启模组
 */
quint32_t FUNCTION_ATTR_ROM Qhal_devOtaNotify(const char *filename, quint32_t fileSize)
{
    UNUSED(filename);
    UNUSED(fileSize);
    Qhal_devRestart();
    return 0;
}
```

<span id="Qhal_KernelResume">  </span>
### <font color=#A52A2A  >__Qhal_KernelResume__</font>  

该函数用于退出低功耗模式。  

__函数原型__  
```c
void Qhal_KernelResume(void);
```  

* __输入参数__  

	* 无

* __返回值__  

	* 无 

__实现要求__  
必须实现。  
<!-- * __备注__  
如果模块有低功耗模式的实现，在模块进入低功耗模式时，QuecThing SDK将阻塞等待。QuecThing SDK2.3.5后将Qhal_sleepExit修改为Qhal_KernelResume。 -->

__适配示例代码__

```c
/**
 * 功能 @brief QuecThing退出挂起
 * 输出 @retval 无
 * 备注 @remark QuecThing执行函数在执行完成后会产生一个挂起时间，使用本接口可使QuecThing退出挂起状态
 */
void FUNCTION_ATTR_ROM Qhal_KernelResume(void)
{
    HAL_UNLOCK(lockKernelId);
}
```

<span id="Qhal_netOpen">  </span>
### <font color=#A52A2A  >__Qhal_netOpen__</font>  
该函数用于打开网络。  

__函数原型__  
```c
void Qhal_netOpen(quint32_t *timeout);
```

* __输出参数__

	* __quint32_t *__ __`timeout`__ : 延迟时间。
	 </br>0						已连接网络
	 </br>打开网络最大耗时		正在连接网络

* __返回值__  

	* 无   

__实现要求__  
必须实现。 

__适配示例代码__

```c
/**
 * 功能 @brief 打开模组网络
 * 输出 @param timeout 打开网络最大耗时；单位：ms；0：表示网络打开成功
 * 输出 @retval 无
 * 备注 @remark QuecThing需要联网服务，故在QuecThing连接平台前将会打开网络；必须实现
 */
void FUNCTION_ATTR_RAM Qhal_netOpen(quint32_t *timeout)
{
    *timeout = 0;
}
```

<span id="Qhal_netClose">  </span>
### <font color=#A52A2A  >__Qhal_netClose__</font>  
该函数用于关闭网络。  

__函数原型__  
```c
void Qhal_netClose(void);
```  

* __输入参数__  
	
	* 无

* __返回值__  
	
	* 无  

__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 关闭模组网络
 * 输出 @retval 无
 * 备注 @remark QuecThing断开与平台连接时，将使用该接口断开网络；可选实现(若无需断网，则无需适配)
 */
void FUNCTION_ATTR_ROM Qhal_netClose(void)
{
}
```
