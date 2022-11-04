# Device Attribute API

## Device Attribute

The header file corresponding to device attribute is qhal_property.h.

### **Device Attribute API Overview**

> Table 5: Device Attribute API Overview  

|Function	|Description  
|---|---  
|[Qhal_propertyDevGet()](#Qhal_propertyDevGet)	        |Gets device attributes.
|[Qhal_propertyNetGet()](#Qhal_propertyNetGet)	        |Gets network attributes.
|[Qhal_propertySimGet()](#Qhal_propertySimGet)	        |Gets SIM card information.
|[Qhal_propertyLocSupList()](#Qhal_propertyLocSupList)	    |  Gets a list of NMEA sentence types  supported by the module.  
|[Qhal_propertyGnssRawDataRead()](#Qhal_propertyGnssRawDataRead)	|Gets GNSS NMEA data.

<span id="Qhal_propertyDevGet">  </span>

### 4.5.2. <font color=#A52A2A  >__Qhal_propertyDevGet__</font>   

This function gets device attributes. 

__Prototype__  

```c
qbool Qhal_propertyDevGet(Qhal_propertyDev_t *dInfo);
```

* __Output Parameter__  
  * __Qhal_propertyDev_t *__ __`dInfo`__ : Device attribute. See [Qhal_propertyDev_t](#Qhal_propertyDev_t) for details.

* __Return Value__  

  * TRUE	Successful execution  
  * FALSE	Failed execution  

__Required or Optional__  
Required.

__Sample Code__

```c
/**
 * Function @brief Get module information.
 * Output @param dInfo The structure of storing module information.
 * Output @retval Execution result.
 * Note @remark Required.
 */
qbool FUNCTION_ATTR_ROM Qhal_propertyDevGet(Qhal_propertyDev_t *dInfo)
{
    dInfo->cellLevel = 100;                         /* The percentage of the signal that connects the device to the base station */
    dInfo->cellVoltage = 5.000000000000001;         /* Device voltage. Unit: 1V. */
    dInfo->flashFree = 1024 * 1024 * 10 * 4 / 5;    /* Device free ROM space. Unit: Byte. */
    dInfo->modelType = "EC200SCNAA";                /* Module type (model). */
    dInfo->pdpCxtIdMin = 1;                         /* Minimum value of PDP context ID. */
    dInfo->pdpCxtIdMax = 15;                        /* Maximum value of PDP context ID. */
    return TRUE;
}
```

<span id="Qhal_propertyDev_t">  </span>

#### <font color=#A52A2A  >__Qhal_propertyDev_t__</font> 

The structure of device attributes is defined below:

```c
typedef struct
{
    quint8_t  cellLevel;
    double    cellVoltage;
    quint32_t flashFree;
    char      *modelType;
    quint8_t  pdpCxtIdMin;
    quint8_t  pdpCxtIdMax;
} Qhal_propertyDev_t; 
```

* __Parameter__   

|Type	|Parameter |Description  
|---|---|---  
|`quint8_t`  |`cellLevel`   |Electric quantity.
|`double`	 |`cellVoltage`	|Voltage.
|`quint32_t` |`flashFree`	|Size of the available Flash space. (Required)
|`char`	     |`modelType`	|Module model. (Required)
|`quint8_t`	 |`pdpCxtIdMin`	|Minimum value of PDP context ID. (Required)
|`quint8_t`	 |`pdpCxtIdMax`	|Maximum value of PDP context ID. (Required)


<span id="Qhal_propertyNetGet">  </span>

### <font color=#A52A2A  >__Qhal_propertyNetGet__</font>  

This function gets network attributes. 

__Prototype__  

```c
qbool Qhal_propertyNetGet(Qhal_propertyNet_t *nMasterInfo,Qhal_propertyNet_t (*nNeibhInfo)[],quint32_t maxCnt,quint32_t *neibhSize);
```

* __Input Parameter__

  * __quint32_t__ __`maxCnt`__ : Maximum limit number of neighbor cells.

* __Output Parameter__ 

  * __Qhal_propertyNet_t *__ __`nMasterInfo`__ : Base station attributes of the current serving cell. See [Qhal_propertyNet_t ](#Qhal_propertyNet_t) for details about base station information.
  * __Qhal_propertyNet_t *__ __`nNeibhInfo`__ : Base station attributes of the neighbor cell. See [Qhal_propertyNet_t](#Qhal_propertyNet_t) for details about base station information.
  * __quint32_t *__ __`neibhSize`__ : The number of neighbor cells returned. 

* __Return Value__  

  * TRUE	Successful execution  
  * FALSE	Failed execution  

__Required or Optional__  
Required.

__Sample Code__

```c
/**
 * Function @brief Get module base station information.
 * Output @param nMasterInfo Save the information of primary base station which is connected currently.
 * Output @param nNeibhInfo Save the information of secondary base station which is not connected but has records.
 * Input @param maxCnt Maximum number of secondary base stations returned.
 * Output @param neibhSize The number of secondary base stations returned.
 * Output @retval Execution result.
 * Note @remark Required.
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

The structure of  base station information is defined below:

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

* __Parameter__   

|Type	|Parameter |Description  
|---|---|---  
|`quint32_t`    |`cellid`   |Base station ID of SIM card.
|`quint16_t`	|`mcc`	    |Mobile Country Code.
|`quint16_t`    |`mnc`	    |Mobile Network Code.
|`quint16_t`	|`lac`	    |Location Area Code.
|`qint32_t`	    |`rsrp`	    |Reference Signal Receiving Power.
|`qint32_t`	    |`rsrq`	    |Reference Signal Receiving Power.
|`qint32_t`	    |`snr`	    |Signal to Noise Ratio.
|`qint32_t`	    |`rssi`	    |Received Signal Strength Indicator.

<span id="Qhal_propertySimGet">  </span>

### <font color=#A52A2A  >__Qhal_propertySimGet__</font>   

This function gets SIM card information.  

__Prototype__  

```c
qbool Qhal_propertySimGet(Qhal_propertySim_t *sInfo);
```

* __Output Parameter__ 

  * __Qhal_propertySim_t *__ __`sInfo`__ : SIM card information. See [Qhal_propertySim_t](#Qhal_propertySim_t) for details.      

* __Return Value__ 

  * TRUE	Successful execution  
  * FALSE	Failed execution  

__Required or Optional__  
Required.

__Sample Code__

```c
/**
 * Function @brief Get SIM card information.
 * Output @param sInfo Structure of SIM card information.
 * Output @retval Execution result.
 * Note @remark Required.
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

The structure of SIM card information is defined below：

```c
typedef struct
{
    char iccid[20 + 1];
    char phoneid[20 + 1];
    char imsi[15 + 1];
} Qhal_propertySim_t; 
```

* __Parameter__   

|Type	|Parameter |Description  
|---|---|---  
|`char`    |`iccid`     |ICCID.
|`char`	   |`phoneid`	|Mobile number.
|`char`    |`imsi`	    |IMSI.

<span id="Qhal_propertyLocSupList">  </span>

### <font color=#A52A2A  >__Qhal_propertyLocSupList__</font>   

This function gets a list of NMEA sentence types supported by the module.  

__Prototype__  

```c
quint32_t Qhal_propertyLocSupList(char **words, quint32_t maxSize);
```

* __Input Parameter__

  * __quint32_t__ __`maxSize`__ : Maximum number of  available lists of NMEA sentence types

* __Output Parameter__

  * __char **__ __`words`__ : List of NMEA sentence types supported by the module.  

* __Return Value__  
  * The number of NMEA sentence types supported by the module. 

__Required or Optional__  
If the module is GNSS-enabled, this API must be adapted.

__Sample Code__

```c
/**
 * Function @brief Get the positioning type supported by the module.
 * Output @param words List of NMEA sentence types supported by the module.
 * Input @param maxSize Maximum number of  available lists of NMEA sentence types.
 * Output @retval The number of NMEA sentence types supported by the module. 
 * Note @remark If the module is GNSS-enabled, this API must be adapted.
 */
quint32_t FUNCTION_ATTR_ROM Qhal_propertyLocSupList(char **words, quint32_t maxSize)
{
    UNUSED(maxSize);
    quint32_t i = 0;
    words[i++] = QIOT_LOC_SUPPORT_AUTO;
    words[i++] = QIOT_LOC_SUPPORT_LBS;      /* Location Based Service */
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

This function gets GNSS NMEA data. This function combines the positioning message type and its data for TTLV encoding based on the requested positioning message type.

__Prototype__  

```c
qbool  Qhal_propertyGnssRawDataRead(void **ttlv, const char *title);
```

* __Input Parameter__  

  * __char *__ __`title`__ : The requested positioning message type.

* __Output Parameter__  

  * __void **__ __`ttlv：`__ : The requested positioning message data (memory pointer stored after TTLV encoding).

* __Return Value__  

  * TRUE	Successful execution  
  * FALSE	Failed execution 

__Required or Optional__  
If the module is GNSS-enabled, this API must be adapted.

__Sample Code__

```c
/**
 * Function @brief Get module's positioning information.
 * Output @param ttlv The requested positioning message data (memory pointer stored after TTLV encoding).
 * Input @param title The requested positioning message type.
 * Output @retval Execution result.
 * Note @remark If the module is GNSS-enabled, this API must be adapted.
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

