# 数据交互 相关接口


## **API 列表**

| 函数 | 说明  |
|:--------:| :-------------:|
| [Ql_iotCmdBusPassTransSend()](#Ql_iotCmdBusPassTransSend) |发送透传数据至平台| 
| [Ql_iotCmdBusPhymodelReport()](#Ql_iotCmdBusPhymodelReport) | 发送物模型数据至平台 |
| [Ql_iotCmdBusPhymodelAck()](#Ql_iotCmdBusPhymodelAck) | 应答平台请求的物模型数据|
| [Ql_iotCmdSysStatusReport()](#Ql_iotCmdSysStatusReport) | 上报设备状态 |
| [Ql_iotSysGetDevStatus()](#Ql_iotSysGetDevStatus) | 获取设备状态|
| [Ql_iotCmdSysDevInfoReport()](#Ql_iotCmdSysDevInfoReport) | 上报指定设备信息 |
| [Ql_iotSysGetDevInfo()](#Ql_iotSysGetDevInfo) | 获取指定设备信息 |

## **API 详情**

<span id="Ql_iotCmdBusPassTransSend">  </span>
## <font color=#A52A2A  >__Ql_iotCmdBusPassTransSend__</font>

该函数用于发送透传数据至平台。

__函数原型__

```c
qbool Ql_iotCmdBusPassTransSend(quint16_t mode, quint8_t *payload, quint32_t len)
```
__参数说明__

* __输入参数__
	* __quint16_t__   __`mode`__：发送模式。	
		* __`0`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
		* __`1`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
		* __`2`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。	
        * __`100`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
		* __`101`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
		* __`102`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。	

	* __quint8_t *__   __`payload`__：待发送的数据内容。
	* __quint32_t__   __`len`__：待发送的数据长度。单位：字节。


__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 

2.1.2及以上版本支持。

__调用示例__

```c
qbool ret = Ql_iotCmdBusPassTransSend(0,(unsigned char *)"123abc",6);
```
---
<span id="Ql_iotCmdBusPhymodelReport">  </span>
## <font color=#A52A2A  >__Ql_iotCmdBusPhymodelReport__</font>

该函数用于发送物模型数据至平台。

__函数原型__

```c
qbool Ql_iotCmdBusPhymodelReport(quint16_t mode, const void *ttlvHead)
```
__参数说明__

* __输入参数__
	* __quint16_t__  __`mode`__：发送模式。	
		* __`0`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
		* __`1`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
		* __`2`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。	
        * __`100`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
		* __`101`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
		* __`102`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。

	* __const void *__   __`ttlvHead`__：待发送的TTLV数据表头。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

2.1.2及以上版本支持。


__调用示例__

```c
void *ttlvHead = NULL;  
Ql_iotTtlvIdAddInt(&ttlvHead, 1, 100);
Ql_iotCmdBusPhymodelReport(1, ttlvHead);
Ql_iotTtlvFree(&ttlvHead); //释放指针
```
---

<span id="Ql_iotCmdBusPhymodelAck">  </span>
## <font color=#A52A2A  >__Ql_iotCmdBusPhymodelAck__</font>

该函数用于应答平台请求的物模型数据。

__函数原型__

```c
qbool Ql_iotCmdBusPhymodelAck(quint16_t mode, quint16_t PkgID, const void *ttlvHead)
```
__参数说明__

* __输入参数__
	* __quint16_t__  __`mode`__：发送模式。	
		* __`0`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
		* __`1`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
		* __`2`__： 发送NON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。	
        * __`100`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为0。
		* __`101`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为1。
		* __`102`__： 发送CON数据并将模块发送数据所携带的RAI辅助释放标记设置为2。
	* __quint16_t__    __`PkgID`__：开发者中心下发的请求包ID。
	* __const void *__   __`ttlvHead`__： 待发送的 TTLV 数据表头。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 

2.1.2及以上版本支持。
注意：返回值使用完毕需要调用函数 __Ql_iotTtlvFree()__ 释放指针。

__调用示例__

```c
quint16_t PkgID ;
void *ttlvHead = NULL;  
Ql_iotTtlvIdAddInt(&ttlvHead, 1, 100);
qbool ret = Ql_iotCmdBusPhymodelAck(0,PkgID,ttlvHead);
Ql_iotTtlvFree(&ttlvHead); //释放指针
```
---
<span id="Ql_iotCmdSysStatusReport">  </span>
## <font color=#A52A2A  >__Ql_iotCmdSysStatusReport__</font>

该函数用于上报设备状态。

__函数原型__

```c
qbool Ql_iotCmdSysStatusReport(quint16_t ids[], quint32_t size)
```
__参数说明__

* __输入参数__
	* __quint16_t__  __`ids[]`__：设备状态 ID 集合。详情请参考[设备状态ID说明](#EquipmentStatus)。
			
	* __quint32_t__  __`size`__：设备状态 ID 数量。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。
  
__备注__ 

2.1.2及以上版本支持。

__调用示例__

```c
quint16_t statusIds[] = {
		QIOT_DPID_STATUS_BATTERY,    
		QIOT_DPID_STATUS_VOLTAGE,		       
		QIOT_DPID_STATUS_SIGNAL, 		                                                                                                     
		QIOT_DPID_STATUS_FLASHFREE
	};
qbool ret = Ql_iotCmdSysStatusReport(statusIds, sizeof(statusIds) / sizeof(statusIds[0]));
```
---

<span id="Ql_iotSysGetDevStatus">  </span>
## <font color=#A52A2A  >__Ql_iotSysGetDevStatus__</font>

该函数用于获取设备状态。

__函数原型__

```c
void *Ql_iotSysGetDevStatus(quint16_t ids[], quint32_t size)
```
__参数说明__

* __输入参数__
	* __quint16_t__  __`ids`__：设备状态 ID 集合。详情请参考[设备状态ID说明](#EquipmentStatus)。

	* __quint32_t__   __`size`__：设备状态 ID 数量。


__返回值__

TTLV数据表，节点是设备状态数据。

__备注__

2.1.2及以上版本支持。
注意：获取设备状态完成后，需要调用函数 __Ql_iotTtlvFree()__ 释放指针。


__调用示例__

```c
quint16_t ids[QIOT_DPID_STATUS_MAX];
quint32_t i = 0;
void *ttlvHead = Ql_iotSysGetDevStatus(ids, i / 2);
```
---

<span id="Ql_iotCmdSysDevInfoReport">  </span>
## <font color=#A52A2A  >__Ql_iotCmdSysDevInfoReport__</font>

该函数用于上报指定设备信息。

__函数原型__

```c
qbool Ql_iotCmdSysDevInfoReport(quint16_t ids[], quint32_t size)
```
__参数说明__

* __输入参数__
	* __quint16_t__  __`ids[]`__：设备信息 ID 集合。详情请参考[设备信息ID](#Device_ID)。

	* __quint32_t__   __`size`__：设备信息 ID 数量。


__返回值__


* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。
  

__备注__

2.3.3及以上版本支持。

__调用示例__

```c
quint16_t infoIds[] = {QIOT_DPID_INFO_MODEL_TYPE,
						QIOT_DPID_INFO_MODEL_VER,
						QIOT_DPID_INFO_MCU_VER,
						QIOT_DPID_INFO_CELLID,
						QIOT_DPID_INFO_ICCID,
						QIOT_DPID_INFO_MCC,
						QIOT_DPID_INFO_MNC,
						QIOT_DPID_INFO_LAC,
						QIOT_DPID_INFO_PHONE_NUM,
						QIOT_DPID_INFO_SIM_NUM,
						QIOT_DPID_INFO_SDK_VER,
						QIOT_DPID_INFO_LOC_SUPLIST,
						QIOT_DPIO_INFO_DP_VER,
						QIOT_DPIO_INFO_CP_VER};
Ql_iotCmdSysDevInfoReport(infoIds, sizeof(infoIds) / sizeof(infoIds[0]));
```
---

<span id="Ql_iotSysGetDevInfo">  </span>
## <font color=#A52A2A  >__Ql_iotSysGetDevInfo__</font>

该函数用于获取模块信息。

__函数原型__

```c
void *Ql_iotSysGetDevInfo(quint16_t ids[], quint32_t size)
```
__参数说明__

* __输入参数__
	* __quint16_t__  __`ids`__：设备信息 ID 集合。详情请参考[设备信息ID](#Device_ID)。

	* __quint32_t__   __`size`__：设备信息 ID 数量。


__返回值__

TTLV 数据表，节点是模块信息数据。

__备注__

注意：返回值使用完需要调用 __Ql_iotTtlvFree()__ 释放。
2.1.2及以上版本支持。

__调用示例__

```c
quint16_t ids[QIOT_DPID_INFO_MAX];
quint32_t i;
void *ttlvHead = Ql_iotSysGetDevInfo(ids, i / 2);
```
---
		



## **类型解析**

<span id="EquipmentStatus">  </span>
* __设备状态ID__
  
__枚举定义__

```c
enum { 
	QIOT_DPID_STATUS_BATTERY = 1, /* 电量 */
	QIOT_DPID_STATUS_VOLTAGE = 2, /* 电压 */ 
	QIOT_DPID_STATUS_SIGNAL = 3, /* 信号强度 */ 
	QIOT_DPID_STATUS_FLASHFREE = 4, /* 剩余空间 */ 
	QIOT_DPID_STATUS_RSRP = 5, /* 参考信号接收功率 */ 
	QIOT_DPID_STATUS_RSRQ = 6, /* LTE 参考信号接收质量 */ 
	QIOT_DPID_STATUS_SNR = 7, /* 信号与干扰加噪声比 */ 
	QIOT_DPID_STATUS_MAX, 
};
```

__参数说明__
	
| 参数 | 描述 |
| :--------| :-------------: |
|QIOT_DPID_STATUS_BATTERY	|电量（百分比）|
|QIOT_DPID_STATUS_VOLTAGE	|电压（伏特）|
|QIOT_DPID_STATUS_SIGNAL	|信号强度（RSSI）|
|QIOT_DPID_STATUS_FLASHFREE	|剩余空间（字节）|
|QIOT_DPID_STATUS_RSRP	|参考信号接收功率（RSRP）|
|QIOT_DPID_STATUS_RSRQ	|LTE参考信号接收质量（RSRQ）|
|QIOT_DPID_STATUS_SNR	|信号与干扰加噪声比（SNR）|

<span id="Device_ID">  </span>
* __设备信息ID__
  
__枚举定义__

```c
enum {
	QIOT_DPID_INFO_MODEL_TYPE = 1, /* 模块型号 */ 
	QIOT_DPID_INFO_MODEL_VER = 2, /* 模块版本 */ 
	QIOT_DPID_INFO_MCU_VER = 3, /* MCU 版本 */ 
	QIOT_DPID_INFO_CELLID = 4, /* 基站 id */ 
	QIOT_DPID_INFO_ICCID = 5, /* SIM 卡号 */ 
	QIOT_DPID_INFO_MCC = 6, /* 移动国家代码 */ 
	QIOT_DPID_INFO_MNC = 7, /* 移动网络代码 */ 
	QIOT_DPID_INFO_LAC = 8, /* 位置区代码 */ 
	QIOT_DPID_INFO_PHONE_NUM = 9, /* phone 号 */ 
	QIOT_DPID_INFO_SIM_NUM = 10, /* SIM 号 */ 
	QIOT_DPID_INFO_SDK_VER = 11, /* IOT SDK 版本号*/ 
	QIOT_DPID_INFO_MAX,
 };
```

__参数说明__

| 参数 | 描述 |
| :--------| :-------------: |
|QIOT_DPID_INFO_MODEL_TYPE| 模块型号 |
|QIOT_DPID_INFO_MODEL_VER| 模块版本 |
|QIOT_DPID_INFO_MCU_VER |MCU 版本 |
|QIOT_DPID_INFO_CELLID |基站 ID |
|QIOT_DPID_INFO_ICCID| SIM 卡号 |
|QIOT_DPID_INFO_MCC| 移动国家代码 |
|QIOT_DPID_INFO_MNC |移动网络代码 |
|QIOT_DPID_INFO_LAC |位置区代码 |
|QIOT_DPID_INFO_PHONE_NUM |phone 号 |
|IOT_DPID_INFO_SIM_NUM |SIM 号 |
|QIOT_DPID_INFO_SDK_VER |SDK 版本号|













