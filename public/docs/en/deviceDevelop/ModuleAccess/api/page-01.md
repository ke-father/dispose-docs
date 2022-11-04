# Adaption Layer API Description

## **C Standard Library API Redefinition**

> The header file of C Standard Library API is qhal_types.h。

### **The following macro definitions need to be modified according to the actual API of the module.**

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

### **Update Header File**

    The current header file qhal_types.h is defined based on the official Linux library file, so you need to modify the header file according to the library file for the module.

### **Switch of Macro Definition**

    The following macros must be enabled according to the QuecThing features used by the module.

```c
/* Whether to enable AT command solution. The following macro must be defined in AT command solution but cannot be defined in QuecOpen and QuecPython solutions. */
#ifndef QUEC_ENABLE_AT
//#define QUEC_ENABLE_AT
#endif

#ifdef QUEC_ENABLE_AT
#define QUEC_IOT_SEND_MAX_LEN (1024)
#define QUEC_ATCMD_BUF_MAX_LEN  (QUEC_IOT_SEND_MAX_LEN+64)
#endif

/* **Not supported currently. Do not enable it.**Whether to enable LAN communication which is only applicable to WIFI modules. */
#ifndef QUEC_ENABLE_LAN
//#define QUEC_ENABLE_LAN
#endif

/* Whether to enable HTTP OTA. */
#ifndef QUEC_ENABLE_HTTP_OTA
#define QUEC_ENABLE_HTTP_OTA
#endif

/* Whether to enable gateway. */
#ifndef QUEC_ENABLE_GATEWAY
#define QUEC_ENABLE_GATEWAY
#endif

/* Whether to enable Modbus. */
#if (!defined QUEC_ENABLE_MODBUS) && (!defined QUEC_ENABLE_AT)
#define QUEC_ENABLE_MODBUS
#endif

// Whether to use downloading service provided by QuecThing SDK during FOTA upgrade. 0 indicates using downloading service provided by QuecThing SDK and 1 indicates using the downloading service of the module. If the downloading service of the module is used, Qhal_devOtaNotify() needs adaption.
#define QUEC_ENABLE_QTH_OTA 1
```

