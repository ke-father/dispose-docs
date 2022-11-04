# GNSS&LBS定位示例
## __场景描述__
目前开发者中心位置服务支持 __GNSS设备定位__ 与 __LBS定位__ ，从而确定设备所在具体位置。本文将为您介绍如何获取与上报定位数据到开发者中心。

* __全球导航卫星系统（GNSS）__ 
	连接外置GNSS模组实现卫星定位。
* __LBS定位__ 
基于通信运营商的基站定位系统。
## __涉及指令__

| 函数 | 说明  |
|:--------:| :-------------:|
| quecIot.getLocSupList()|获取设备内置定位功能支持的NMEA语句类型 |
| quecIot.getLocData() |获取设备当前内置定位功能的定位数据 |
| quecIot.locReportInside()|上报设备当前内置定位功能的定位数据 |
| quecIot.locReportOutside()|上报设备外置定位功能的定位数据 |

<font color=#999AAA >提示：详情请参考[设备定位 相关接口](/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-05.md)。</font>

### __示例一(获取内置定位功能支持的NMEA类型)__

获取内置定位功能支持的NMEA类型ttlv链表头指针，正常返回节点为定位支持的NMEA类型，若是NULL则表示获取失败。

```py
LocSupList = quecIot.getLocSupList()
```


### __示例二(获取内置定位数据)__
获取内置定位功能支持的NMEA类型ttlv链表头指针，正常返回节点是定位数据，若是NULL则表示获取失败。

```py
# 获取内置定位数据
LocData = quecIot.getLocData('LBS')
```




### __示例三(上报设备内置定位功能的定位数据)__
__1、上报模组内置的定位数据到开发者中心__
```py
# 发送内部定位数据 
quecIot.locReportInside('LBS')
```

### __示例四(上报设备外置定位功能的定位数据)__
__1、获取外置GNSS模组定位数据__

通过MCU连接外置GNSS模组，GNSS模组接收到定位数据后会将NMEA数据打印到设备。例如外置GNSS模组获取到的NMEA数据为 __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ 。

__2、将获取到的定位数据上报到开发者中心__

您可使用 __quecIot.locReportOutside_ex()__ 函数可将外置定位模组获取到的NMEA数据上报到开发者中心。

```py
# 发送外部定位数据 
quecIot.locReportOutside(["$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"])
```
__3、开发者中心查看设备定位__

在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。
<a data-fancybox title="img" href="/deviceDevelop/nb/QuecPython/resource/LBS&GNSS/Example-01.png">![img](/deviceDevelop/nb/QuecPython/resource/LBS&GNSS/Example-01.png)</a>




 


