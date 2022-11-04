# GNSS&LBS定位 相关接口

## **API 列表**

|                        函数                        |                  说明                  |
| :------------------------------------------------: | :------------------------------------: |
|       [quecIot.getLocSupList()](#getLocSupList)       | 获取设备内置定位功能支持的NMEA语句类型 |
|          [quecIot.getLocData()](#getLocData)          |   获取设备当前内置定位功能的定位数据   |
|     [quecIot.locReportInside()](#locReportInside)     |   上报设备当前内置定位功能的定位数据   |
|    [quecIot.locReportOutside()](#locReportOutside)    |     上报设备外置定位功能的定位数据     |

## **API 详情**

<span id="getLocSupList"></span>

## <font color=#A52A1A  >__quecIot.getLocSupList__</font>

该函数用于获取设备内置定位功能支持的 NMEA 语句类型。

__函数原型__

```py
quecIot.getLocSupList()
```

__参数说明__

无。

__返回值__

* 若函数执行成功，返回设备内置定位功能支持的NMEA语句类型。详情请参考[NMEA 语句类型](#loc)
* 若函数执行失败，返回为空。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.getLocSupList()
```

---

<span id="getLocData">  </span>

## <font color=#A52A1A  >__quecIot.getLocData__</font>

该函数用于获取设备当前内置定位功能的定位数据。

__函数原型__

```py
quecIot.getLocData(types)
```

__参数说明__

* __`types`__：待获取的 NMEA 数据类型列表。详情请参考[NMEA 语句类型](#loc)

__返回值__

* 若函数执行成功，返回指定类型的NMEA数据；
* 若函数执行失败，返回为空。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.getLocData(["GPS","GGA"])
```

---

<span id="locReportInside"> </span>

## <font color=#A52A1A  >__quecIot.locReportInside__</font>

该函数用于上报设备当前内置定位功能的定位数据。

__函数原型__

```py
quecIot.locReportInside(types)
```

__参数说明__

* __`types`__：待上报的内置定位数据列表。详情请参考[NMEA 语句类型](#loc)

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.locReportInside(["LBS"])
```

---


<span id="locReportOutside"> </span>

## <font color=#A52A1A  >__quecIot.locReportOutside__</font>

该函数用于上报设备外置定位功能的定位数据。

__函数原型__

```py
quecIot.locReportOutside(nmea_data)
```

__参数说明__

* __`nmea_data`__：待上报的外置定位数据列表。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.locReportOutside(["$GPRMC,042523.0,A,3413.610533,N,10854.063257,E,0.0,245.9,190716,0.0,E,A*0F"])
```

---

<span id="loc"> </span>

## **NMEA 语句类型**

| 定位类型 |             说明             |
| :------: | :--------------------------: |
|   NONE   |         关闭所有类型         |
|   AUTO   | 更新定位信号自动选择上报类型 |
|   LBS   |           基站定位           |
|   GGA   |      任意卫星系统的 GGA      |
|   RMC   |      任意卫星系统的 RMC      |
|   GSV   |      任意卫星系统的 GSV      |
|   GSA   |      任意卫星系统的 GSA      |
|   VTG   |      任意卫星系统的 VTG      |
|  GPGGA  |      GPS 卫星系统的 GGA      |
|  GPRMC  |      GPS 卫星系统的 RMC      |
|  GPGSV  |      GPS 卫星系统的 GSV      |
|  GPGSA  |      GPS 卫星系统的 GSA      |
|  GPVTG  |      GPS 卫星系统的 VTG      |
|  BDGGA  |      北斗卫星系统的 GGA      |
|  BDRMC  |      北斗卫星系统的 RMC      |
|  BDGSV  |      北斗卫星系统的 GSV      |
|  BDGSA  |      北斗卫星系统的 GSA      |
|  BDVTG  |      北斗卫星系统的 VTG      |
|  GLGGA  |      GLONASS 卫星系统的      |
|   GGA   | GLRMC GLONASS 卫星系统的 RMC |
|  GLGSV  |    GLONASS 卫星系统的 GSV    |
|  GLGSA  |    GLONASS 卫星系统的 GSA    |
|  GLVTG  |    GLONASS 卫星系统的 VTG    |
|  GAGGA  |    Galileo 卫星系统的 GGA    |
|  GARMC  |    Galileo 卫星系统的 RMC    |
|  GAGSV  |    Galileo 卫星系统的 GSV    |
|  GAGSA  |    Galileo 卫星系统的 GSA    |
|  GAVTG  |    Galileo 卫星系统的 VTG    |
|  GNGGA  |    全球卫星导航系统的 GGA    |
|  GNRMC  |    全球卫星导航系统的 RMC    |
|  GNGSV  |    全球卫星导航系统的 GSV    |
|  GNGSA  |    全球卫星导航系统的 GSA    |
|  GNVTG  |    全球卫星导航系统的 VTG    |
