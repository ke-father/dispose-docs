# 数据业务交互 相关接口

## **API 列表**

|                      函数                      |           说明           |
| :--------------------------------------------: | :----------------------: |
|     [quecIot.passTransSend()](#passTransSend)     |    发送透传数据至平台    |
|    [quecIot.phymodelReport()](#phymodelReport)    |   发送物模型数据至平台   |
|       [quecIot.phymodelAck()](#phymodelAck)       | 应答平台请求的物模型数据 |
|      [quecIot.statusReport()](#statusReport)      |       上报设备状态       |
|     [quecIot.devInfoReport()](#devInfoReport)     |     上报指定内容信息     |
|      [quecIot.getDevStatus()](#getDevStatus)      |       获取设备状态       |
|        [quecIot.getDevInfo()](#getDevInfo)        |     获取指定设备信息     |

## **API 详情**

<span id="passTransSend"></span>

## <font color=#A52A1A  >__quecIot.passTransSend__ </font>

该函数用于发送透传数据至平台。

__函数原型__

```py
quecIot.passTransSend(mode,data)
```

__参数说明__

* __`mode`__： 整型。发送模式。
  
  * __`0`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
  * __`1`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
  * __`2`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。	
  * __`100`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
  * __`101`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
  * __`102`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。
* __`data`__： 待发送数据。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.passTransSend(0,"123abc")
```
---

<span id="phymodelReport"></span>

## <font color=#A52A1A  >__quecIot.phymodelReport__ </font>

该函数用于发送物模型数据至平台。

__函数原型__

```py
quecIot.phymodelReport(mode,data)
```

__参数说明__

* __`mode`__：整型。发送模式。

  * __`0`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
  * __`1`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
  * __`2`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。	
  * __`100`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
  * __`101`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
  * __`102`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。
* __`data`：__ dict 类型。待发送物模型数据。使用方法详见第 4.2.3 章。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelReport(100,ttlvHead)
```

---

<span id="phymodelAck"></span>

## <font color=#A52A1A  >__quecIot.phymodelAck__ </font>

该函数用于应答平台请求的物模型数据。

__函数原型__

```py
quecIot.phymodelAck(mode,PkgID,data)
```

__参数说明__

* __`mode`__：整型。发送模式。

  * __`0`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
  * __`1`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
  * __`2`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。	
  * __`100`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
  * __`101`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
  * __`102`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。
* __`PkgID`：__ 整型。开发者中心下发的请求包ID。
* __`data`：__ dict类型。待发送物模型数据。使用方法详见第2.3章。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelAck(100,12,ttlvHead)
```

---

<span id="statusReport"></span>

## <font color=#A52A1A  >__quecIot.statusReport__ </font>

该函数用于上报设备状态。

__函数原型__

```py
quecIot.statusReport(data)
```

__参数说明__

* __`data`__：序列，元素是整型。上报内容列表：
  * __`1`__ ： 电量百分比
  * __`2`__ ： 电压（单位伏特）
  * __`3`__ ： 信号强度（RSSI）
  * __`4`__ ： 剩余空间（单位字节）
  * __`5`__ ： 参考信号接收功率（RSRP）
  * __`6`__ ： LTE 参考信号接收质量（RSRQ）
  * __`7`__ ： 信号与干扰噪声比（SNR）

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
statusIds = [1,2,3,4,5,6,7]
quecIot.statusReport(statusIds)
```

---

<span id="getDevStatus"></span>

## <font color=#A52A1A  >__quecIot.getDevStatus__ </font>

该函数用于获取设备状态。

__函数原型__

```py
quecIot.getDevStatus(id_list)
```

__参数说明__

* __`id_list`__：序列，元素是整型。上报内容列表：
  * __`1`__ ： 电量百分比
  * __`2`__ ： 电压（单位伏特）
  * __`3`__ ： 信号强度（RSSI）
  * __`4`__ ： 剩余空间（单位字节）
  * __`5`__ ： 参考信号接收功率（RSRP）
  * __`6`__ ： LTE 参考信号接收质量（RSRQ）
  * __`7`__ ： 信号与干扰噪声比（SNR）

__返回值__

* 若函数执行成功则返回设备信息
  * __`Key`__： 查询的内容 ID。
  * __`Value`__： 查询的返回值。
* 函数执行失败则返回为空

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ids = [1,2,3,4,5,6,7]
ret = quecIot.getDevStatus(ids)
```

---

<span id="devInfoReport"></span>

## <font color=#A52A1A  >__quecIot.devInfoReport__ </font>

该函数用于上报指定设备信息。

__函数原型__

```py
quecIot.devInfoReport(data)
```

__参数说明__

* __`data`__：序列，元素是整型。上报设备信息项：
  * __`1`__ ：模块型号。
  * __`2`__ ：模块版本。
  * __`3`__ ：MCU 版本。
  * __`4`__ ：小区 ID（Cell ID）
  * __`5`__ ：集成电路卡识别码（ICCID）。
  * __`6`__ ：移动国家代码（MCC）。
  * __`7`__ ：移动网络代码（MNC）。
  * __`8`__ ：位置区代码（LAC）。
  * __`9`__ ：电话号码。
  * __`10`__ ：国际移动用户识别码（IMSI）。
  * __`11`__ ：IoT SDK 版本号。
  * __`12`__ ：支持的定位模式。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ids = [1,2,3,4,5,6,7,8,9,10,11,12]
ret = quecIot.devInfoReport(ids)
```

---

<span id="getDevInfo"></span>

## <font color=#A52A1A  >__quecIot.getDevInfo__ </font>

该函数用于获取设备信息。

__函数原型__

```py
quecIot.getDevInfo(id_list)
```

__参数说明__

* __`data`__：序列，元素是整型。上报设备信息项：
  * __`1`__ ：模块型号。
  * __`2`__ ：模块版本。
  * __`3`__ ：MCU 版本。
  * __`4`__ ：小区 ID（Cell ID）
  * __`5`__ ：集成电路卡识别码（ICCID）。
  * __`6`__ ：移动国家代码（MCC）。
  * __`7`__ ：移动网络代码（MNC）。
  * __`8`__ ：位置区代码（LAC）。
  * __`9`__ ：电话号码。
  * __`10`__ ：国际移动用户识别码（IMSI）。
  * __`11`__ ：IoT SDK 版本号。
  * __`12`__ ：支持的定位模式。

__返回值__

* 若函数执行成功则返回设备信息
  * __`Key`__：设备信息ID
  * __`Value`__： 设备信息ID对应的值
* 函数执行失败则返回为空
* 

__备注__

仅2.1.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ids = [1,2,3,4,5,6,7,8,9,10,11,12]
ret = quecIot.getDevInfo(ids)
```

---

 
