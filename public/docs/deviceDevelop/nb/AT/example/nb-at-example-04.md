# GNSS&LBS定位示例
## **场景描述**
目前开发者中心位置服务支持 __GNSS设备定位__ 与 __LBS定位__ ，从而确定设备所在具体位置。本文将为您介绍如何获取与上报定位数据到开发者中心。
* __全球导航卫星系统（GNSS）__ 
	连接外置GNSS模组实现卫星定位。
* __LBS定位__ 
基于通信运营商的基站定位系统。
## **涉及指令**


| 指令名称| 功能描述    |
|:--------:| :-------------:|
|  AT+QIOTLOCIN | 获取/上报设备内置定位功能的定位数据 |
| AT+QIOTLOCEXT | 上报设备外置定位功能的定位数据 |

<font color=#999AAA >提示：详情请参考[设备定位 相关命令](/deviceDevelop/nb/AT/API/nb-at-06.md)。</font>


## **操作步骤**
### **平台侧**
#### **一、登录开发者中心**
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。
#### **二、创建项目** 
项目是设备的集合，新用户在注册登录后默认是没有项目的，需进行项目的创建流程后才可进行项目维度的相关操作。
#### **三、创建产品** 
创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备NB-IOT联网能力的香薰机，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能香薰机”产品。

### **示例一(获取设备内置定位功能的定位数据)**
1、获取模组内置的NMEA数据类型
```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","LBS"

[RX]OK
```

2、获取模组内置NMEA定位数据
```c
[TX]AT+QIOTLOCIN=1,"LBS"

[RX]+QIOTLOCIN: "$LBS,460,02,0,455,-113,0*71"
[RX]+QIOTLOCIN: "$LBS,460,01,0,456,-100,0*69"


[RX]OK
```

### **示例二(上报设备内置定位功能的定位数据)**
1、查询模组内置的定位类型
```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","LBS"

[RX]OK
```

2、上报模组内置的定位数据到开发者中心
```c
[TX]AT+QIOTLOCIN=0,"LBS"

[RX]OK

[RX]+QIOTEVT: 4,10220
```

### **示例三(上报设备外置定位功能的定位数据)**
1、获取外置GNSS模组定位数据
通过MCU连接外置GNSS模组，GNSS模组接收到定位数据后会将NMEA数据打印到MCU。例如外置GNSS模组获取到的NMEA数据为 __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ 。

2、将获取到的定位数据上报到开发者中心
使用 __AT+QIOTLOCEXT__ 指令可将外置定位模组获取到的NMEA数据上报到开发者中心。

```c
[TX]AT+QIOTLOCEXT="$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"

[RX]OK

[RX]+QIOTEVT: 4,10220
```
3、开发者中心查看设备定位
在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。

 <a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/04-1.png">![img](/deviceDevelop/nb/AT/resource/04-1.png)</a>



 