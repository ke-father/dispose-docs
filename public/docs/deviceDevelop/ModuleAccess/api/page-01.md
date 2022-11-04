# 适配层API说明
## **C标准API重定义**
> C标准对应API头文件为qhal_types.h。
### **以下需要按照模块实际API修改宏定义。**
```c
#define HAL_MEMCPY(a,b,l)        memcpy((quint8_t*)(a),(quint8_t*)(b),l)
#define HAL_MEMCMP(a,b,l)        memcmp((quint8_t*)(a),(quint8_t*)(b),l)
#define HAL_MEMSET(a,b,l)        memset((void *)(a), (int)(b), l)
#define HAL_MEMMOVE             memmove
#define HAL_SPRINTF              sprintf
#define HAL_SNPRINTF             snprintf
#define HAL_STRCHR(X,Y)          strchr(X,Y)
#define HAL_STRCPY(a,b)          strcpy((char*)a,(char*)b)
#define HAL_STRNCPY(a,b,l)       strncpy((char*)a,(char*)b,l)
#define HAL_STRCMP(a,b)          strcmp((const char*)a,(const char*)b)
#define HAL_STRNCMP(a,b,l)       strncmp((char*)a,(char*)b,l)
#define HAL_STRSTR(a,b)          strstr((char*)a,(char*)b)
#define HAL_STRLEN(a)            ((NULL==a)?0:strlen((const char*)a))
#define HAL_STRNCASECMP(a,b,l)   strncasecmp((char*)a,(char*)b,l)
#define HAL_PRINTF(format,...)   printf(format,##__VA_ARGS__)
#define HAL_SSCANF               sscanf
#define HAL_ATOI                 atoi
#define HAL_STRTOUL              strtoul
#define HAL_STRTOD               strtod
#define HAL_LOCK_DEF(S,X)        S pthread_mutex_t X;
#define HAL_LOCK_INIT(X)         pthread_mutex_init(&X,NULL);    
#define HAL_LOCK(X)              pthread_mutex_lock(&X)
#define HAL_UNLOCK(X)            pthread_mutex_unlock(&X)
#define HAL_LOCK_INITDATA        PTHREAD_MUTEX_INITIALIZER
#define HAL_MALLOC(LEN)          qhal_malloc(LEN,__FUNCTION__,__LINE__)
#define HAL_FREE(ADDR)           qhal_free(ADDR,__FUNCTION__,__LINE__)
#define HAL_STRDUP(X)            qhal_strdup(X,__FUNCTION__,__LINE__)
#define HAL_MEMDUP(X,Y)          qhal_memdup(X,Y,__FUNCTION__,__LINE__)
```

### **更新头文件**
    目前的头文件qhal_types.h是基于Linux的官方库文件，因此需要根据模块所对应的库文件进行修改。

### **宏定义开关**
    以下宏开关需根据模块使用QuecThing功能进行打开相关宏。
```c
/* 是否启用AT方案，AT方案下需定义，QuecOpen和QuecPython方案下不可定义 */
#ifndef QUEC_ENABLE_AT
//#define QUEC_ENABLE_AT
#endif

#ifdef QUEC_ENABLE_AT
#define QUEC_IOT_SEND_MAX_LEN (1024)
#define QUEC_ATCMD_BUF_MAX_LEN  (QUEC_IOT_SEND_MAX_LEN+64)
#endif

/* **暂不支持，请勿启用**是否启用局域网通信，仅支持WIFI模块使用 */
#ifndef QUEC_ENABLE_LAN
//#define QUEC_ENABLE_LAN
#endif

/* 是否启用HTTP OTA服务 */
#ifndef QUEC_ENABLE_HTTP_OTA
#define QUEC_ENABLE_HTTP_OTA
#endif

/* 是否启用网关功能 */
#ifndef QUEC_ENABLE_GATEWAY
#define QUEC_ENABLE_GATEWAY
#endif

/* 是否启用Modbus功能 */
#if (!defined QUEC_ENABLE_MODBUS) && (!defined QUEC_ENABLE_AT)
#define QUEC_ENABLE_MODBUS
#endif

// FOTA是否使用QuecthingSDK下载服务，1使用QuecThing，0使用模块自身下载，适配层Qhal_devOtaNotify()需要匹配
#define QUEC_ENABLE_QTH_OTA 1
```

