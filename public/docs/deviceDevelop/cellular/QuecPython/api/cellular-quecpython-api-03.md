# 数据业务交互 相关接口

## **API 列表**

|                      函数                      |           说明           |
| :--------------------------------------------: | :----------------------: |
|     [quecIot.passTransSend()](#passTransSend)     |    发送透传数据至平台    |
|  [quecIot.passTransSend_ex()](#passTransSend_ex)  |    发送透传数据至平台    |
|    [quecIot.phymodelReport()](#phymodelReport)    |   发送物模型数据至平台   |
| [quecIot.phymodelReport_ex()](#phymodelReport_ex) |   发送物模型数据至平台   |
|       [quecIot.phymodelAck()](#phymodelAck)       | 应答平台请求的物模型数据 |
|      [quecIot.statusReport()](#statusReport)      |       上报设备状态       |
|     [quecIot.devInfoReport()](#devInfoReport)     |     上报指定内容信息     |
|      [quecIot.getDevStatus()](#getDevStatus)      |       获取设备状态       |
|        [quecIot.getDevInfo()](#getDevInfo)        |     获取指定设备信息     |

## **API 详情**

<span id="passTransSend"></span>

## <font color=#A52A1A  >__quecIot.passTransSend__ </font>

该函数用于发送透传数据至平台（建议通过 quecIot.passTransSend_ex()发送透传数据，发送成功后返回上行消息 ID）。

__函数原型__

```py
quecIot.passTransSend(mode,data)
```

__参数说明__

* __`mode`__： 整型。发送模式。

  * __`0`__ ：QoS = 0 最多发送一次。
  * __`1`__ ：QoS = 1 至少发送一次。
  * __`2`__ ：QoS = 2 仅发送一次。
* __`data`__： 待发送数据。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.passTransSend(0,"123abc")
```

---

<span id="passTransSend_ex"></span>

## <font color=#A52A1A  >__quecIot.passTransSend_ex__ </font>

该函数用于发送透传数据至平台。调用该函数发送物模型数据成功后，该函数返回上行数据 ID（仅QuecThing SDK 2.10.0 及以后版本支持该函数）。

__函数原型__

```py
quecIot.passTransSend_ex(mode,data)
```

__参数说明__

* __`mode`__： 整型。发送模式。

  * __`0`__ ：QoS = 0 最多发送一次。
  * __`1`__ ：QoS = 1 至少发送一次。
  * __`2`__ ：QoS = 2 仅发送一次。
* __`data`__：  bytes类型。待发送数据。

__返回值__

* __`-1`__：函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.passTransSend_ex(0,"123abc")
```

---

<span id="phymodelReport"></span>

## <font color=#A52A1A  >__quecIot.phymodelReport__ </font>

该函数用于发送物模型数据至平台（建议通过 quecIot.phymodelReport_ex()发送物模型数据，发送成功后返回上行消息 ID）。

__函数原型__

```py
quecIot.phymodelReport(mode,data)
```

__参数说明__

* __`mode`__：整型。发送模式。

  * __`0`__ ：QoS = 0 最多发送一次。
  * __`1`__ ：QoS = 1 至少发送一次。
  * __`2`__ ：QoS = 2 仅发送一次。
* __`data`：__ dict 类型。待发送物模型数据。使用方法详见第 4.2.3 章。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelReport(1,ttlvHead)
```

---

<span id="phymodelReport_ex"></span>

## <font color=#A52A1A  >__quecIot.phymodelReport_ex__ </font>

该函数用于向云平台发送物模型数据。调用该函数发送物模型数据成功后，该函数返回上行数据 ID（仅QuecThing SDK 2.10.0 及以后版本支持该函数）。

__函数原型__

```py
quecIot.phymodelReport_ex(mode,data)
```

__参数说明__

* __`mode`__：整型。发送模式。

  * __`0`__ ：QoS = 0 最多发送一次。
  * __`1`__ ：QoS = 1 至少发送一次。
  * __`2`__ ：QoS = 2 仅发送一次。
* __`data`：__ dict类型。待发送物模型数据。使用方法详见第2.3章。

__返回值__

* __`-1`__：函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelReport_ex(1,ttlvHead)
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

  * __`0`__ ：QoS = 0 最多发送一次。
  * __`1`__ ：QoS = 1 至少发送一次。
  * __`2`__ ：QoS = 2 仅发送一次。
* __`PkgID`：__ 整型。开发者中心下发的请求包ID。
* __`data`：__ dict类型。待发送物模型数据。使用方法详见第2.3章。

__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelAck(1,12,ttlvHead)
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

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
statusIds = [1,2,3,4,5,6]
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

仅2.8.1及以上版本的QuecThing SDK支持。

__调用示例__

```py
ids = [QIOT_DPID_STATUS_BATTERY,QIOT_DPID_STATUS_VOLTAGE,QIOT_DPID_STATUS_SIGNAL,QIOT_DPID_STATUS_FLASHFREE,QIOT_DPID_STATUS_RSRP,QIOT_DPID_STATUS_RSRQ,QIOT_DPID_STATUS_SNR]
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
  * __`1`__ ： 模块型号。
  * __`2`__ ： 模块版本。
  * __`3`__ ： MCU 版本。
  * __`4`__ ： 小区 ID（Cell ID）
  * __`5`__ ： 集成电路卡识别码（ICCID）。
  * __`6`__ ： 移动国家代码（MCC）。
  * __`7`__ ： 移动网络代码（MNC）。
  * __`8`__ ： 位置区代码（LAC）。
  * __`9`__ ： 电话号码。
  * __`10`__ ：国际移动用户识别码（IMSI）。
  * __`11`__ ：IoT SDK 版本号。
  * __`12`__ ：支持的定位模式。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ids = [QIOT_DPID_INFO_MODEL_TYPE,QIOT_DPID_INFO_MODEL_VER,QIOT_DPID_INFO_MCU_VER,QIOT_DPID_INFO_CELLID,QIOT_DPID_INFO_ICCID,QIOT_DPID_INFO_MCC,QIOT_DPID_INFO_MNC,QIOT_DPID_INFO_LAC,QIOT_DPID_INFO_PHONE_NUM,QIOT_DPID_INFO_SIM_NUM,QIOT_DPID_INFO_SDK_VER,QIOT_DPID_INFO_LOC_SUPLIST,QIOT_DPIO_INFO_DP_VER,QIOT_DPIO_INFO_CP_VER]
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
  * __`1`__ ： 模块型号。
  * __`2`__ ： 模块版本。
  * __`3`__ ： MCU 版本。
  * __`4`__ ： 小区 ID（Cell ID）
  * __`5`__ ： 集成电路卡识别码（ICCID）。
  * __`6`__ ： 移动国家代码（MCC）。
  * __`7`__ ： 移动网络代码（MNC）。
  * __`8`__ ： 位置区代码（LAC）。
  * __`9`__ ： 电话号码。
  * __`10`__ ：国际移动用户识别码（IMSI）。
  * __`11`__ ：IoT SDK 版本号。
  * __`12`__ ：支持的定位模式。

__返回值__

* 若函数执行成功则返回设备信息
  * __`Key`__： 设备信息ID
  * __`Value`__： 设备信息ID对应的值
* 函数执行失败则返回为空
* 

__备注__

仅2.8.1及以上版本的QuecThing SDK支持。

__调用示例__

```py
ids = [QIOT_DPID_INFO_MODEL_TYPE,QIOT_DPID_INFO_MODEL_VER,QIOT_DPID_INFO_MCU_VER,QIOT_DPID_INFO_CELLID,QIOT_DPID_INFO_ICCID,QIOT_DPID_INFO_MCC,QIOT_DPID_INFO_MNC,QIOT_DPID_INFO_LAC,QIOT_DPID_INFO_PHONE_NUM,QIOT_DPID_INFO_SIM_NUM,QIOT_DPID_INFO_SDK_VER,QIOT_DPID_INFO_LOC_SUPLIST,QIOT_DPIO_INFO_DP_VER,QIOT_DPIO_INFO_CP_VER]
ret = quecIot.getDevInfo(ids)
```

---

  
