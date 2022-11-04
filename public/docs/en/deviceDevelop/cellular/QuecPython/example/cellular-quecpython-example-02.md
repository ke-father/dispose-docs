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

| Function                      | Description                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| quecIot.getLocSupList()       | Obtains NMEA sentences type of the built-in positioning feature of the module. |
| quecIot.getLocData()          | Obtains location data of the built-in positioning feature of the module. |
| quecIot.locReportInside()     | Reports the location data of the built-in positioning feature of the device. |
| quecIot.locReportInside_ex()  | Reports the location data of the built-in positioning feature of the device. |
| quecIot.locReportOutside()    | Reports location data obtained from external GNSS module.    |
| quecIot.locReportOutside_ex() | Reports location data obtained from external GNSS module.    |

<font color=#999AAA >Note: See [GNSS&LBS Positioning API](/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-06.md) for details.</font>



### __Example 1 (Obtain NMEA sentences type of the built-in positioning feature of the module)__

This function obtains the NMEA type supported by the built-in positioning feature, and the returned node is the NMEA type supported by the built-in positioning feature. If the return value is NULL, it indicates that the pointer fails to be obtained.

```python
LocSupList = quecIot.getLocSupList()
```



### __Example 2 (Obtain location data of the built-in positioning feature of the module)__

This function obtains the NMEA type supported by the built-in positioning feature, and the returned node is the location data supported by the built-in positioning feature. If the return value is NULL, it indicates that the pointer fails to be obtained.

```python
# Obtain location data of the built-in positioning feature of the module
LocData = quecIot.getLocData('LBS')
```




### __Example 3 (Report the location data of the built-in positioning feature of the device)__

__1. Report location data of the built-in positioning feature of the module to Developer Center__

```python
# Send the location data of the built-in positioning feature of the device
quecIot.locReportInside('LBS')
```


### __Example 4 (Report location data obtained from external GNSS module)__

__1. Obtain the location data from an external GNSS module__

By connecting MCU with external GNSS module, GNSS module will print NMEA data to MCU after receiving the positioning data. For example, the NMEA data obtained by GNSS module is __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ 。

__2. Report the obtained positioning data to Developer Center__

Call __quecIot.locReportOutside()__ to report the NMEA data obtained from the external GNSS module to Developer Center.

```python
# Report the NMEA data obtained from the external GNSS module to Developer Center
quecIot.locReportOutside(["$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"])
```

__3. View the device location on Developer Center__

Open __Device Details__ page, and click __Location__ page to view the location data.
<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/LBS&GNSS/Example-01.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/LBS&GNSS/Example-01.png)</a>


### **Example 5 (Obtain location data of the Wi-Fi positioning feature of the module)**
__1. Obtain operation type and NMEA data type of the Wi-Fi positioning feature of the module__
This function obtains the NMEA type supported by the built-in positioning feature, and the returned node is the NMEA type supported by the built-in positioning feature. If the return value is NULL, it indicates that the pointer fails to be obtained.
```python
	LocSupList = quecIot.getLocSupList()
```

__2. Obtain NMEA data of the Wi-Fi positioning feature of the module__

This function obtains the NMEA type supported by the built-in positioning feature, and the returned node is the location data supported by the built-in positioning feature. If the return value is NULL, it indicates that the pointer fails to be obtained.
```python
# Obtain location data of the built-in positioning feature of the module
LocData = quecIot.getLocData('WiFi')
```


__3. Developer Center queries the location data of the Wi-Fi positioning feature of the module__

Open __Device Details__ page, and click __Location__ page to view the location data.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/QuecPython/resource/LBS&GNSS/Example-02.png">![img](/en/deviceDevelop/wifi/QuecPython/resource/LBS&GNSS/Example-02.png)</a>


### __Example 6 (Report the location data of the Wi-Fi positioning feature of the module)__

__1. Report location data of the Wi-Fi positioning feature of the module to Developer Center__

```python
# Send the location data of the built-in positioning feature of the device 
quecIot.locReportInside_ex('WIFI')
```
__2. Developer Center queries the location data of the Wi-Fi positioning feature of the module__

Open __Device Details__ page, and click __Location__ page to view the location data.
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/QuecPython/resource/LBS&GNSS/Example-03.png">![img](/en/deviceDevelop/wifi/QuecPython/resource/LBS&GNSS/Example-03.png)</a>








