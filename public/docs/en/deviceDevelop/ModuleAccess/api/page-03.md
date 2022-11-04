# Device Driver API

## **Device Driver**

The header file corresponding to device driver is qhal_Dev.h.

### **Device Driver API Overview**

> Table 3: Device Driver API Overview

| Function                              | Description         |
| ------------------------------------- | ------------------- |
| [Qhal_devFeeddog()](#Qhal_devFeeddog) | Feeds the watchdog. |
|[Qhal_rtcInit()](#Qhal_rtcInit)	        |Initializes RTC. 
|[Qhal_rtcGet()](#Qhal_rtcGet)	        |Gets RTC time.
|[Qhal_softversionGet()](#Qhal_softversionGet)	|Gets the software version number of the module.
|[Qhal_logHeadString()](#Qhal_logHeadString)	    |Gets the information added to the log header.
|[Qhal_devRestart()](#Qhal_devRestart)	    |Reboots the module.
|[Qhal_beforeMain()](#Qhal_beforeMain)	    |Initializes the module before QuecThing SDK initialization.
|[Qhal_devUuidGet()](#Qhal_devUuidGet)	    |Gets module's UUID.
|[Qhal_randomGet()](#Qhal_randomGet)	        |Generates a random number.
|[Qhal_urcReport()](#Qhal_urcReport)	        |Reports URC.
|[Qhal_devOtaNotify()](#Qhal_devOtaNotify)	    |Informs OTA upgrade.
|[Qhal_KernelResume()](#Qhal_KernelResume)	    |Exits LPM.
|[Qhal_netOpen()](#Qhal_netOpen)	        |Connects to network.
|[Qhal_netClose()](#Qhal_netClose)	        |Disconnects from network.

<span id="Qhal_devFeeddog">  </span>

### <font color=#A52A2A  >__Qhal_devFeeddog__</font> 

This function feeds the watchdog.

__Prototype__  

```c
void Qhal_devFeeddog(void);
```

* __Input Parameter__  

  * None

* __Return Value__  

  * None

__Required or Optional__  
Because the module will be blocked for 5 to 10 seconds during QuecThing SDK firmware update, if you need the application layer to feed the watchdog, you need to adapt this function to prevent the watchdog from being abnormal.

__Sample Code__

```c
/**
 * Function @brief QuecThing SDK feeds the dog.
 * Output   @retval None
 * Note     @remark It takes time for Quecthing to verify the correctness of the upgrade file. If you need Quecthing SDK to feed the dog, perform the adaptation here.
 */
void FUNCTION_ATTR_ROM Qhal_devFeeddog(void)
{
}
```

<span id="Qhal_rtcInit">  </span>

### <font color=#A52A2A  >__Qhal_rtcInit__</font>

This function initializes RTC.

__Prototype__  

```c
qbool Qhal_rtcInit(void);
```

* __Input Parameter__  

  * None  

* __Return Value__  

  * TRUE Successful execution 
  * FALSE Failed execution   

__Required or Optional__  
Optional. If the module needs to initialize RTC, it can call the RTC API of the hardware layer to initialize. If the module has no hardware RTC, you need to manually create a virtual RTC task to calculate the running time of the module after power-up.  

__Sample Code__

```c
/**
 * Function @brief Initialize RTC.
 * Output   @retval Whether the function is executed successfully.
 * Note     @remark RTC must be enabled when QuecThing SDK is running. If you need QuecThing SDK to initialize RTC, perfrom the adaptation here, otherwise TURE will be returned directly.
 */
qbool FUNCTION_ATTR_ROM Qhal_rtcInit(void)
{
    return TRUE;
}
```

<span id="Qhal_rtcGet">  </span>

### <font color=#A52A2A  >__Qhal_rtcGet__</font>

This function gets RTC time. 

__Prototype__  

```c
void Qhal_rtcGet(quint32_t *sec, quint32_t *ms);
```

* __Output Parameter__  

  * __quint32_t *__ __`sec`__ : The total number of seconds of the current RTC time.
  * __quint32_t *__ __`ms`__ : The millisecond part of the current RTC time.

* __Return Value__ 

  * None  

__Required or Optional__   
Required. 

__Sample Code__

```c
/**
 * Function @brief Get RTC time
 * Input    @param sec The total number of seconds of the current RTC time
 * Input    @param ms The millisecond part of the current RTC time
 * Output   @retval None
 * Note     @remark This function is required when QuecThing system is running.
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

This function gets the software version number of the module.

__Prototype__  

```c
char *Qhal_softversionGet(void);
```

* __Input Parameter__  

  * None  

* __Return Value__  

  * The software version number of the module.  

__Required or Optional__  
Required.   

__Sample Code__

```c
/**
 * Function @brief Get the software version number of the module.
 * Output   @retval The software version number of the module.
 * Note     @remark This function must be enabled in QuecThing SDK update.
 */
char FUNCTION_ATTR_ROM *Qhal_softversionGet(void)
{
    return VERSION_FIRMWARE;
}
```

<span id="Qhal_logHeadString">  </span>

### <font color=#A52A2A  >__Qhal_logHeadString__</font>  

This function gets the information added to the log header.  

__Prototype__  

```c
char *Qhal_logHeadString(void);
```

* __Input Parameter__  

  * None  

* __Return Value__  

  * If a log header is added, the information added to the log header is returned.  
  * If no log header information is added, NULL is returned.

__Required or Optional__  
	Required.  

__Sample Code__

```c
/**
 * Function @brief Get the information added to the log header.
 * Output   @retval The information added to the log header
 * Note     @remark This fucntion may not be  required if the module does not need to add information to the log header.
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

This function reboots the module. 

__Prototype__  

```c 
void Qhal_devRestart(void);
```

* __Input Parameter__  

  * None  

* __Return Value__  

  * None 

__Required or Optional__  
Required.   

__Sample Code__

```c
/**
 * Function @brief Reboot the module
 * Output   @retval None
 * Note     @remark This function is required when QuecThing system is running.
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

This function initializes the module before QuecThing SDK initialization.  

__Prototype__  

```c 
qbool Qhal_beforeMain(void);
```

* __Input Parameter__  

  *None  

* __Return Value__  

  * TRUE Successful execution  
  * FALSE Failed execution   

__Required or Optional__  
Required.   

__Sample Code__

```c
/**
 * Function @brief Initialize the moduel before QuecThing SDK initialization
 * Output   @retval Whether the initialization is successfully
 * Note     @remark This API initializes the HAL layer.
 */
qbool FUNCTION_ATTR_ROM Qhal_beforeMain(void)
{
    signal(SIGPIPE, SIG_IGN);
    HAL_LOCK_INIT(lockMallocId);
    HAL_LOCK_INIT(lockKernelId);
    pthread_t pthreadId;
    pthread_create(&pthreadId, NULL, Qhal_quecthingRun, NULL);
    pthread_detach(pthreadId);
    return TRUE;
}
```

<span id="Qhal_devUuidGet">  </span>

### <font color=#A52A2A  >__Qhal_devUuidGet__</font>  

This function gets the module's UUID. 

__Prototype__  

```c
char *Qhal_devUuidGet(void);
```

* __Input Parameter__  

  * None

* __Return Value__  

  * Module's UUID, such as IMEI of cellular modules and MAC of Wi-Fi modules.   

__Required or Optional__  
Required.   

__Sample Code__

```c
/**
 * Function @brief Get the IMEI or MAC address of the module as the DeviceKey of the module on Developer Center.
 * Output   @retval Module's UUID, an ASCII string
 * Note     @remark This function is required because the UUID must be used when the QuecThing logs in to Developer Center. Module's UUID can be IMEI of cellular modules and MAC of Wi-Fi modules.
 */
char FUNCTION_ATTR_ROM *Qhal_devUuidGet(void)
{
    /* This example is to get the DeviceKey generated from the MAC address in Linux system. */
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

This function generates a random number. 

__Prototype__  

```c
quint32_t Qhal_randomGet(void);
```

* __Input Parameter__  

  * None  

* __Return Value__  

  * A random number.   

__Required or Optional__  
Required.   

__Sample Code__

```c
/**
 * Function @brief Generate a random number.
 * Output   @retval A random number.
 * Note     @remark This function is required becuase random numbers must be used when QuecThing system is running.
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

This function reports URC.  

__Prototype__  

```c
void Qhal_urcReport(const quint8_t *data, quint32_t len);
```

* __Input Parameter__

  * __const quint8_t *__ __`data`__ : The URC content in AT command solution.
  * __quint32_t__ __`len：`__ : Data length.

* __Return Value__  

  * None   

__Required or Optional__  
Optional. This command is required only when you access Developer Center in AT command solution.  

__Sample Code__

```c
/**
 * Function @brief Report URC in AT command solution.
 * Output   @retval None
 * Note     @remark This command is required only when you access Developer Center in AT command solution.
 */
extern void Qhal_atCmdSendUrc(pointer_t sockFd,char *buf,unsigned int len);
void FUNCTION_ATTR_ROM Qhal_urcReport(const quint8_t *data, quint32_t len)
{
    Qhal_atCmdSendUrc(SOCKET_FD_INVALID, (char*)data, len);
}
```

<span id="Qhal_devOtaNotify">  </span>

### <font color=#A52A2A  >__Qhal_devOtaNotify__</font>  

This function informs OTA upgrade. 

__Prototype__  

```c
	quint32_t Qhal_devOtaNotify(const char *filename, quint32_t fileSize);
```

* __Input Parameter__  

  * __const char *__ __`filename：`__ : Name of the downloaded firmware package.
  * __quint32_t__ __`fileSize：`__ : Size of the new firmware.

* __Return Value__  

  * Maximum wait time for OTA upgrade (in seconds)：Upgrade in progress 
  * 0：Successful upgrade 

__Required or Optional__  
Required when QuecThing SDK download is in use. QuecThing SDK triggers the module to update the firmware by calling this API after the OTA firmware is downloaded. The module performs firmware verification and firmware upgrade at this time, and reboots after the update is finished.  

__Sample Code__

```c
/**
 * Function @brief Inform FOTA update
 * Input    @param filename Update the firmware path and name
 * Input    @param fileSize 
 * Output   @retval Upgrade in progress. Unit: second. 0 indicates successful upgrade.
 * Note     @remark This function is required when you use QuecThing download and update the firmware. After the download, the module is informed to update the firmware then the module should perform firmware verification and firmware upgrade at this time, and reboots after the update is finished.
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

This function exits LPM.  

__Prototype__  

```c
void Qhal_KernelResume(void);
```

* __Input Parameter__  

  * None

* __Return Value__  

  * None 

__Required or Optional__  
Required.   
<!-- * __Note__  
If the module can enable Low Power Mode, the QuecThing SDK will be blocked when the module enters the Low Power Mode. Qhal_sleepExit is modified to Qhal_KernelResume in QuecThing SDK 2.3.5 and later. -->

__Sample Code__

```c
/**
 * Function @brief QuecThing exits pending mode.
 * Output   @retval None
 * Note     @remark There is a pending time after QuecThing executes a function. You can call this function to exit the pending mode.
 */
void FUNCTION_ATTR_ROM Qhal_KernelResume(void)
{
    HAL_UNLOCK(lockKernelId);
}
```

<span id="Qhal_netOpen">  </span>

### <font color=#A52A2A  >__Qhal_netOpen__</font>  

This function connects to network.  

__Prototype__  

```c
void Qhal_netOpen(quint32_t *timeout);
```

* __Output Parameter__

  * __quint32_t *__ __`timeout`__ : Latency time.
    </br>0: Successful connection; 
     </br>Maximum time required to connect to network: Connection in progress.

* __Return Value__  

  * None   

__Required or Optional__  
Required.  

__Sample Code__

```c
/**
 * Function @brief Connect the module to network
 * Output   @param timeout Maximum time required to connect the module to network. Unit: ms. 0 indicates successful connection.
 * Output   @retval None
 * Note     @remark This function is required because QuecThing needs network servive to access Developer Center.
 */
void FUNCTION_ATTR_RAM Qhal_netOpen(quint32_t *timeout)
{
    *timeout = 0;
}
```

<span id="Qhal_netClose">  </span>

### <font color=#A52A2A  >__Qhal_netClose__</font>  

This function disconnects from network.  

__Prototype__  

```c
void Qhal_netClose(void);
```

* __Input Parameter__  

  * None

* __Return Value__  

  * None  

__Required or Optional__  
Required.   

__Sample Code__

```c
/**
 * Function @brief Disconnect the module from network.
 * Output   @retval None
 * Note     @remark QuecThing uses this function to disconnect from network when it disconnects from Developer Center. Optional (No adaptation is needed if no disconnetion is required.)
 */
void FUNCTION_ATTR_ROM Qhal_netClose(void)
{
}
```