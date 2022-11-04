# GNSS&LBS&WIFI Positioning Example

## **Introduction**

Currently, Developer Center location service supports __GNSS positioning__ and __LBS positioning__ and __Wi-Fi positioning__ to determine the specific location of the device. This chapter introduces how to obtain location data and report it to Developer Center.

* __GNSS Positioning__ 
  The module connects with an external GNSS module to realize satellite positioning.
* __LBS Positioning__ 
  LBS Positioning is based on station positioning system of communication operators.
* __Wi-Fi Positioning__ 
  A location tracking system based on wireless router signal.

## __Related API__

|             Function              | Description                                                  |
| :-------------------------------: | :----------------------------------------------------------- |
|       Ql_iotLocGetSupList()       | Obtains NMEA sentences type of the built-in positioning feature of the module. |
|        Ql_iotLocGetData()         | Obtains location data of the built-in positioning feature of the module. |
|   Ql_iotCmdBusLocReportInside()   | Reports the location data of the built-in positioning feature of the device. |
| Ql_iotCmdBusLocReportInside_ex()  | Reports the location data of the built-in positioning feature of the device (only valid in SDK versions 2.10.0 and above). |
|  Ql_iotCmdBusLocReportOutside()   | Reports location data obtained from external GNSS module.    |
| Ql_iotCmdBusLocReportOutside_ex() | Reports location data obtained from external GNSS module (only valid in SDK versions 2.10.0 and above). |

<font color=#999AAA >Note: See [GNSS&LBS Positioning API](/en/deviceDevelop/cellular/QuecOpen/api/cellular-quecopen-api-07.md) for details.</font>



### __Example 1 (Obtain NMEA sentences type of the built-in positioning feature of the module)__

This function obtains the NMEA type head pointer of TTLV linked list  supported by the built-in positioning feature, and the returned node is the NMEA type supported by the built-in positioning feature. If the return value is NULL, it indicates that the pointer fails to be obtained.

```c
void *titleTtlv = Ql_iotLocGetSupList();
Ql_iotTtlvFree(&titleTtlv);
```

<font color=#999AAA >Note: Call Ql_iotTtlvFree() to release the resource after adding TSL model node and getting the information. Ql_iotTtlvFree()  releases a memory block pointed to by the pointer, thus avoiding problems such as memory leakage.</font>



### __Example 2 (Obtain location data of the built-in positioning feature of the module)__

This function obtains the NMEA type head pointer of TTLV linked list  supported by the built-in positioning feature, and the returned node is the location data supported by the built-in positioning feature. If the return value is NULL, it indicates that the pointer fails to be obtained.

```c
void *locDataTtlv = Ql_iotLocGetData(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```

<font color=#999AAA >Note: Call Ql_iotTtlvFree() to release the resource after getting the information.</font>




### __Example 3 (Report the location data of the built-in positioning feature of the device)__

__1. Report location data of the built-in positioning feature of the module to Developer Center__

```c
  /* Send the location data of the built-in positioning feature of the device */
  void *titleTtlv = NULL;
  Ql_iotTtlvIdAddString(&titleTtlv, 0, "LBS");
  Ql_iotCmdBusLocReportInside(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```

<font color=#999AAA >Note: Call Ql_iotTtlvFree() to release head pointer of TTLV linked list  after using the pointer.</font>

### __Example 4 (Report location data obtained from external GNSS module)__

__1. Obtain the location data from an external GNSS module__

By connecting MCU with external GNSS module, GNSS module will print NMEA data to MCU after receiving the positioning data. For example, the NMEA data obtained by GNSS module is __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ 。

__2. Report the obtained positioning data to Developer Center__

Call __Ql_iotCmdBusLocReportOutside()__ to report the NMEA data obtained from the external GNSS module to Developer Center.

```c
/* Report the NMEA data obtained from the external GNSS module to Developer Center */
void *nmeaTtlv=NULL;
Ql_iotTtlvIdAddString(&nmeaTtlv,0,"$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78");
Ql_iotCmdBusLocReportOutside(nmeaTtlv);
Ql_iotTtlvFree(&nmeaTtlv);
```

__3. View the device location on Developer Center__

Open __Device Details__ page, and click __Location__ page to view the location data.
<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/LBS&GNSS/Example-01.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/LBS&GNSS/Example-01.png)</a>




### **Example 5 (Obtain location data of the Wi-Fi positioning feature of the module)**
__1. Obtain operation type and NMEA data type of the Wi-Fi positioning feature of the module__

```c
	void *titleTtlv = Ql_iotLocGetSupList();
  Ql_iotTtlvFree(&titleTtlv); 
```

__2. Obtain NMEA data of the Wi-Fi positioning feature of the module__

```c
  void *locDataTtlv = Ql_iotLocGetData(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```


__3. View the device location on Developer Center__

Open __Device Details__ page, and click __Location__ page to view the location data.
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/QuecOpen/resource/LBS&GNSS/Example-02.png">![img](/en/deviceDevelop/wifi/QuecOpen/resource/LBS&GNSS/Example-02.png)</a>


### __Example 6 (Report the location data of the Wi-Fi positioning feature of the module)__

__1. Report location data of the Wi-Fi positioning feature of the module to Developer Center__

```c
  /* Report location data of the built-in positioning feature of the module to Developer Center */
  void *titleTtlv = NULL;
  Ql_iotTtlvIdAddString(&titleTtlv, 0, "WiFi");
  Ql_iotCmdBusLocReportInside_ex(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```
__2. Developer Center queries the location data of the Wi-Fi positioning feature of the module__

Open __Device Details__ page, and click __Location__ page to view the location data.
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/QuecOpen/resource/LBS&GNSS/Example-03.png">![img](/en/deviceDevelop/wifi/QuecOpen/resource/LBS&GNSS/Example-03.png)</a>


