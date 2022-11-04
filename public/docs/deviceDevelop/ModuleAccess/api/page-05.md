# 设备属性相关API
## **设备属性**
设备属性对应的API头文件位为qhal_property.h。
### **设备属性函数概览**
> 表5：设备属性函数概览  

|函数	|说明  
|---|---  
|[Qhal_propertyDevGet()](#Qhal_propertyDevGet)	        |获取模块设备属性
|[Qhal_propertyNetGet()](#Qhal_propertyNetGet)	        |获取模块网络属性
|[Qhal_propertySimGet()](#Qhal_propertySimGet)	        |获取模块的SIM卡信息
|[Qhal_propertyLocSupList()](#Qhal_propertyLocSupList)	    |获取模块支持的NMEA语句类型列表
|[Qhal_propertyGnssRawDataRead()](#Qhal_propertyGnssRawDataRead)	|获取GNSS的NMEA数据

<span id="Qhal_propertyDevGet">  </span>
### 4.5.2. <font color=#A52A2A  >__Qhal_propertyDevGet__</font>   
该函数用于获取模块设备属性。 

__函数原型__  
```c
qbool Qhal_propertyDevGet(Qhal_propertyDev_t *dInfo);
```  

* __输出参数__  
    * __Qhal_propertyDev_t *__ __`dInfo`__ : 设备模块属性。详情请参考[Qhal_propertyDev_t](#Qhal_propertyDev_t)结构体定义。 

* __返回值__  

    * TRUE	函数执行成功  
    * FALSE	函数执行失败  

__实现要求__  
必须实现。  

__适配示例代码__

```c
/**
 * 功能 @brief 通信模组信息获取
 * 输出 @param dInfo 存储模块信息结构体
 * 输出 @retval 函数执行结果
 * 备注 @remark 必须实现。
 */
qbool FUNCTION_ATTR_ROM Qhal_propertyDevGet(Qhal_propertyDev_t *dInfo)
{
    dInfo->cellLevel = 100;                         /* 设备连接基站信号百分比 */
    dInfo->cellVoltage = 5.000000000000001;         /* 设备电压值 单位：1V */
    dInfo->flashFree = 1024 * 1024 * 10 * 4 / 5;    /* 设备空余ROM空间；单位：Byte */
    dInfo->modelType = "EC200SCNAA";                /* 通信模组类型（型号） */
    dInfo->pdpCxtIdMin = 1;                         /* PDP最小值 */
    dInfo->pdpCxtIdMax = 15;                        /* PDP最大值 */
    return TRUE;
}
```

<span id="Qhal_propertyDev_t">  </span>
#### <font color=#A52A2A  >__Qhal_propertyDev_t__</font> 
模块属性结构体定义如下：

```c
typedef struct
{
    quint8_t  cellLevel;
    double    cellVoltage;
    quint32_t flashFree;
    char      *modelType;
    quint8_t  pdpCxtIdMin;
    quint8_t  pdpCxtIdMax;
} Qhal_propertyDev_t; 
```
* __参数介绍__   

|类型	|参数 |说明  
|---|---|---  
|`quint8_t`  |`cellLevel`   |模块电量
|`double`	 |`cellVoltage`	|模块电压
|`quint32_t` |`flashFree`	|Flash剩余可使用的空间大小（必须实现）
|`char`	     |`modelType`	|模块类型(必须实现)
|`quint8_t`	 |`pdpCxtIdMin`	|PDP上下文ID范围最小值（必须实现）
|`quint8_t`	 |`pdpCxtIdMax`	|PDP上下文ID范围最大值（必须实现）


<span id="Qhal_propertyNetGet">  </span>
### <font color=#A52A2A  >__Qhal_propertyNetGet__</font>  
该函数用于获取模块网络属性。 

__函数原型__  
```c
qbool Qhal_propertyNetGet(Qhal_propertyNet_t *nMasterInfo,Qhal_propertyNet_t (*nNeibhInfo)[],quint32_t maxCnt,quint32_t *neibhSize);
``` 

* __输入参数__

    * __quint32_t__ __`maxCnt`__ : 邻区的最大限制数。

* __输出参数__ 

    * __Qhal_propertyNet_t *__ __`nMasterInfo`__ : 当前服务小区的基站相关属性。基站信息详情，请参考[Qhal_propertyNet_t](#Qhal_propertyNet_t)结构体定义。
    * __Qhal_propertyNet_t *__ __`nNeibhInfo`__ : 邻区的基站相关属性。基站信息详情，请参考[Qhal_propertyNet_t](#Qhal_propertyNet_t)结构体定义。
    * __quint32_t *__ __`neibhSize`__ : 实际返回的邻区数量。 
  
* __返回值__  

    * TRUE	函数执行成功  
    * FALSE	函数执行失败  

__实现要求__  
必须实现。

__适配示例代码__

```c
/**
 * 功能 @brief 通信模组基站信息获取
 * 输出 @param nMasterInfo 主基站信息保存(当前联网基站)
 * 输出 @param nNeibhInfo 从基站信息保存(当前不联网，但有记录的基站)
 * 输入 @param maxCnt 最大获取从基站信息个数
 * 输出 @param neibhSize 实际获取到从基站个数
 * 输出 @retval 函数执行结果
 * 备注 @remark 必须实现。
 */
qbool FUNCTION_ATTR_ROM Qhal_propertyNetGet(Qhal_propertyNet_t *nMasterInfo, Qhal_propertyNet_t (*nNeibhInfo)[], quint32_t maxCnt, quint32_t *neibhSize)
{
    UNUSED(nNeibhInfo);
    UNUSED(maxCnt);
    if (nMasterInfo)
    {
        nMasterInfo->snr = 138;
        nMasterInfo->rsrp = -108;
        nMasterInfo->rsrq = -9;
        nMasterInfo->rssi = -113;
        nMasterInfo->lac = 0;
        nMasterInfo->mcc = 460;
        nMasterInfo->mnc = 2;
        nMasterInfo->cellid = 455;
    }
    if (nNeibhInfo)
    {
        (*nNeibhInfo)[0].snr = 0;
        (*nNeibhInfo)[0].rsrp = 0;
        (*nNeibhInfo)[0].rsrq = 0;
        (*nNeibhInfo)[0].rssi = -100;
        (*nNeibhInfo)[0].lac = 0;
        (*nNeibhInfo)[0].mcc = 460;
        (*nNeibhInfo)[0].mnc = 1;
        (*nNeibhInfo)[0].cellid = 456;
        if (neibhSize)
        {
            *neibhSize = 1;
        }
    }
    return TRUE;
}
```

<span id="Qhal_propertyNet_t">  </span>
#### <font color=#A52A2A  >__Qhal_propertyNet_t__</font> 
基站信息结构体定义如下：
```c
typedef struct
{
    quint32_t cellid;
    quint16_t mcc;
    quint16_t mnc;
    quint16_t lac;
    qint32_t rsrp;
    qint32_t rsrq;
    qint32_t snr;
    qint32_t rssi;
} Qhal_propertyNet_t; 
```
* __参数介绍__   

|类型	|参数 |说明  
|---|---|---  
|`quint32_t`    |`cellid`   |SIM卡的基站编号
|`quint16_t`	|`mcc`	    |移动国家代码
|`quint16_t`    |`mnc`	    |移动网络代码
|`quint16_t`	|`lac`	    |位置区域码
|`qint32_t`	    |`rsrp`	    |参考信号接收功率
|`qint32_t`	    |`rsrq`	    |参考信号接收质量
|`qint32_t`	    |`snr`	    |信噪比
|`qint32_t`	    |`rssi`	    |接收信号强度指示

<span id="Qhal_propertySimGet">  </span>
### <font color=#A52A2A  >__Qhal_propertySimGet__</font>   
该函数用于获取模块的SIM卡信息。  

__函数原型__  
```c
qbool Qhal_propertySimGet(Qhal_propertySim_t *sInfo);
```  

* __输出参数__ 

    * __Qhal_propertySim_t *__ __`sInfo`__ : SIM卡信息。详情请参考[Qhal_propertySim_t](#Qhal_propertySim_t)。      

* __返回值__ 

    * TRUE	函数执行成功  
    * FALSE	函数执行失败  

__实现要求__  
必须实现。

__适配示例代码__

```c
/**
 * 功能 @brief SIM卡信息获取
 * 输出 @param sInfo SIM卡信息结构体
 * 输出 @retval 函数执行结果
 * 备注 @remark 必须实现。
 */
qbool FUNCTION_ATTR_ROM Qhal_propertySimGet(Qhal_propertySim_t *sInfo)
{
    HAL_SPRINTF(sInfo->iccid, "%s", "00000000000000000000");
    HAL_SPRINTF(sInfo->phoneid, "%s", "13712345678");
    HAL_SPRINTF(sInfo->imsi, "%s", "012345678901234");
    return TRUE;
}
```

<span id="Qhal_propertySim_t">  </span>
#### <font color=#A52A2A  >__Qhal_propertySim_t__</font> 
SIM卡信息结构体定义如下：

```c
typedef struct
{
    char iccid[20 + 1];
    char phoneid[20 + 1];
    char imsi[15 + 1];
} Qhal_propertySim_t; 
```
* __参数介绍__   

|类型	|参数 |说明  
|---|---|---  
|`char`    |`iccid`     |SIM卡的ICCID
|`char`	   |`phoneid`	|手机号码
|`char`    |`imsi`	    |SIM卡的IMSI

<span id="Qhal_propertyLocSupList">  </span>
### <font color=#A52A2A  >__Qhal_propertyLocSupList__</font>   
该函数用于获取模块支持的NMEA语句类型列表。  

__函数原型__  
```c
quint32_t Qhal_propertyLocSupList(char **words, quint32_t maxSize);
``` 

* __输入参数__

    * __quint32_t__ __`maxSize`__ : 可获取的NMEA语句类型列表的最大数量。

* __输出参数__

    * __char **__ __`words`__ : 模块可支持的NMEA语句类型列表。  

* __返回值__  
    * 实际模块可支持的NMEA语句类型数量。 

__实现要求__  
若模块具备GNSS功能，则必须适配。

__适配示例代码__

```c
/**
 * 功能 @brief 获取模组支持定位类型
 * 输出 @param words 模块可支持的NMEA语句类型列表
 * 输入 @param maxSize 可获取的NMEA语句类型列表的最大数量
 * 输出 @retval 实际模块可支持的NMEA语句类型数量
 * 备注 @remark 若模块具备GNSS功能，则必须适配。
 */
quint32_t FUNCTION_ATTR_ROM Qhal_propertyLocSupList(char **words, quint32_t maxSize)
{
    UNUSED(maxSize);
    quint32_t i = 0;
    words[i++] = QIOT_LOC_SUPPORT_AUTO;
    words[i++] = QIOT_LOC_SUPPORT_LBS;      /* 基站定位 */
    /* 
    words[i++] = "GGA";
    words[i++] = "RMC";
    words[i++] = "GSV";
    words[i++] = "GPGGA";
    words[i++] = "GPRMC";
    words[i++] = "BDGGA";
    words[i++] = "BDRMC";
    words[i++] = "GNGGA";
    words[i++] = "GNRMC";
    */
    return i;
}
```

<span id="Qhal_propertyGnssRawDataRead">  </span>
### <font color=#A52A2A  >__Qhal_propertyGnssRawDataRead__</font>   
该函数用于获取GNSS的NMEA数据。根据请求的定位信息类型，该函数将定位信息类型及定位数据合并进行TTLV编码。

__函数原型__  
```c
qbool  Qhal_propertyGnssRawDataRead(void **ttlv, const char *title);
```  

* __输入参数__  

    * __char *__ __`title`__ : 请求的定位信息类型。

* __输出参数__  

    * __void **__ __`ttlv：`__ : 请求的定位信息数据（经过TTLV编码后存放的内存指针）。

* __返回值__  

    * TRUE	函数执行成功  
    * FALSE	函数执行失败 

__实现要求__  
若模块具备GNSS功能，则必须适配。

__适配示例代码__

```c
/**
 * 功能 @brief 获取模组定位数据
 * 输出 @param ttlv 请求的定位信息数据（经过TTLV编码后存放的内存指针）
 * 输入 @param title 请求的定位信息类型
 * 输出 @retval 函数是否执行成功
 * 备注 @remark 若模块具备GNSS功能，则必须适配。
 */
qbool Qhal_propertyGnssRawDataRead(void **ttlv, const char *title)
{
    qbool ret = FALSE;
    UNUSED(ttlv);
    UNUSED(title);
    /* if (0 == HAL_STRCMP(title, "GPGGA") || 0 == HAL_STRCMP(title, "GGA"))
    {
        ret = TRUE;
        Ql_iotTtlvIdAddString(ttlv, 0, "$GPGGA,092204.999,4250.5589,S,14718.5084,E,1,04,24.4,19.7,M,,,,0000*1F");
    }
    if (0 == HAL_STRCMP(title, "GNGGA") || 0 == HAL_STRCMP(title, "GGA"))
    {
        ret = TRUE;
        Ql_iotTtlvIdAddString(ttlv, 0, "$GNGGA,022106.000,3034.6466,N,10403.5680,E,1,7,1.04,470.2,M,-31.9,M,,*6B");
    }
    */
    return ret;
}
```
