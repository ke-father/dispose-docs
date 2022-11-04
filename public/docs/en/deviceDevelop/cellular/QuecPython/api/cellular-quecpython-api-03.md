# Data Interaction API

## **Data Interaction API Overview**

| Function                                          | Description                                   |
| :------------------------------------------------ | :-------------------------------------------- |
| [quecIot.passTransSend()](#passTransSend)         | Sends transparent transmission data to Developer Center.   |
| [quecIot.passTransSend_ex()](#passTransSend_ex)   | Sends transparent transmission data to Developer Center.   |
| [quecIot.phymodelReport()](#phymodelReport)       | Sends TSL data to Developer Center.                        |
| [quecIot.phymodelReport_ex()](#phymodelReport_ex) | Sends TSL data to Developer Center.                        |
| [quecIot.phymodelAck()](#phymodelAck)             | Replies to the querying of TSL data from Developer Center. |
| [quecIot.statusReport()](#statusReport)           | Reports device status.                        |
| [quecIot.devInfoReport()](#devInfoReport)         | Reports the specified device information.     |
| [quecIot.getDevStatus()](#getDevStatus)           | Gets device status.                           |
| [quecIot.getDevInfo()](#getDevInfo)               | Gets the specified device information.        |

## **API Description**

<span id="passTransSend"></span>

## <font color=#A52A1A  >__quecIot.passTransSend__ </font>

This function sends transparent transmission data to Developer Center. (It is recommended to call quecIot.passTransSend_ex() to send transparent transmission data. Uplink data ID will be returned after successful sending.)

__Prototype__

```py
quecIot.passTransSend(mode,data)
```

__Parameter__

* __`mode`__: Integer type. Data sending mode.

  * __`0`__: QoS = 0, at most once.
  * __`1`__: QoS = 1, at least once.
  * __`2`__: QoS = 2, exactly only once.
* __`data`__: Data to be sent.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ret = quecIot.passTransSend(0,"123abc")
```

---

<span id="passTransSend_ex">  </span>

## <font color=#A52A1A  >__quecIot.passTransSend_ex__ </font>

This function sends transparent transmission data to Developer Center. The uplink data ID will be returned after transparent transmission data is sent successfully.

__Prototype__

```py
quecIot.passTransSend_ex(mode,data)
```

__Parameter__

* __`mode`__: Integer type. Data sending mode.

  * __`0`__: QoS = 0, at most once.
  * __`1`__: QoS = 1, at least once.
  * __`2`__: QoS = 2, exactly only once.
* __`data`__: Bytes type. Data to be sent.

__Return Value__

* __`-1`__: Failed execution
* __`1–65535`__: Uplink data ID

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.passTransSend_ex(0,"123abc")
```

---

<span id="phymodelReport">  </span>

## <font color=#A52A1A  >__quecIot.phymodelReport__ </font>

This command sends TSL data to Developer Center. (It is recommended to call  quecIot.phymodelReport_ex() to send TSL data. Uplink data ID will be returned after successful sending.)

__Prototype__

```py
quecIot.phymodelReport(mode,data)
```

__参数说明__

* __`mode`__: Integer type. Data sending mode.

  * __`0`__: QoS = 0, at most once.
  * __`1`__: QoS = 1, at least once.
  * __`2`__: QoS = 2, exactly only once.
* __`data`__: Dict type. TSL data to be sent. 

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelReport(1,ttlvHead)
```

---

<span id="phymodelReport_ex"></span>

## <font color=#A52A1A  >__quecIot.phymodelReport_ex__ </font>

This function sends TSL data to Developer Center. The uplink data ID will be returned after TSL data is sent successfully.

__Prototype__

```py
quecIot.phymodelReport_ex(mode,data)
```

__Parameter__

* __`mode`__: Integer type. Data sending mode.

  * __`0`__: QoS = 0, at most once.
  * __`1`__: QoS = 1, at least once.
  * __`2`__: QoS = 2, exactly only once.
* __`data`__: Dict type. TSL data to be sent.  

__Return Value__

* __`-1`__: Failed execution
* __`1–65535`__: Uplink data ID

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelReport_ex(1,ttlvHead)
```

---

<span id="phymodelAck"></span>

## <font color=#A52A1A  >__quecIot.phymodelAck__ </font>

This function replies to the querying of TSL data from Developer Center.

__Prototype__

```py
quecIot.phymodelAck(mode,PkgID,data)
```

__Parameter__

* __`mode`__: Integer type. Data sending mode.

  * __`0`__: QoS = 0, at most once.
  * __`1`__: QoS = 1, at least once.
  * __`2`__: QoS = 2, exactly only once.
* __`PkgID`__:  Integer type. Package ID of the request issued by Developer Center.
* __`data`__:  Dict type. TSL data to be sent.  

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelAck(1,12,ttlvHead)
```

---

<span id="statusReport"></span>

## <font color=#A52A1A  >__quecIot.statusReport__ </font>

This function reports device status.

__Prototype__

```py
quecIot.statusReport(data)
```

__Parameter__

* __`data`__: List type. The elements are integer. Status items.
  * __`1`__: Battery capacity (percentage)
  * __`2`__: Voltage (V)
  * __`3`__: RSSI
  * __`4`__: Available space (byte)
  * __`5`__: RSRP
  * __`6`__: RSRQ
  * __`7`__: SNR

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
statusIds = [1,2,3,4,5,6]
quecIot.statusReport(statusIds)
```

---

<span id="getDevStatus"></span>

## <font color=#A52A1A  >__quecIot.getDevStatus__ </font>

This function gets device status.

__Prototype__

```py
quecIot.getDevStatus(id_list)
```

__Parameter__

* __`id_list`__: List type. The elements are integer. Status items.
  * __`1`__: Battery capacity (percentage)
  * __`2`__: Voltage (V)
  * __`3`__: RSSI
  * __`4`__: Available space (byte)
  * __`5`__: RSRP
  * __`6`__: RSRQ
  * __`7`__: SNR

__Return Value__

* Successful execution returns device status, that are:
  * __`Key`__: Status item ID
  * __`Value`__: Value corresponding to the status item ID
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.8.1 and above.

__Example__

```py
ids = [QIOT_DPID_STATUS_BATTERY,QIOT_DPID_STATUS_VOLTAGE,QIOT_DPID_STATUS_SIGNAL,QIOT_DPID_STATUS_FLASHFREE,QIOT_DPID_STATUS_RSRP,QIOT_DPID_STATUS_RSRQ,QIOT_DPID_STATUS_SNR]
ret = quecIot.getDevStatus(ids)
```

---

<span id="devInfoReport"></span>

## <font color=#A52A1A  >__quecIot.devInfoReport__ </font>

This function reports the specified device information.

__Prototype__

```py
quecIot.devInfoReport(data)
```

__Parameter__

* __`data`__: List type. The elements are integer. Information items.
  * __`1`__: Module model
  * __`2`__: Module firmware version
  * __`3`__: MCU version
  * __`4`__: Cell ID
  * __`5`__: ICCID
  * __`6`__: MCC
  * __`7`__: MNC
  * __`8`__: LAC
  * __`9`__: Phone number
  * __`10`__: IMSI
  * __`11`__: QuecThing SDK version
  * __`12`__: Supported positioning mode

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.3.3 and above.

__Example__

```py
ids = [QIOT_DPID_INFO_MODEL_TYPE,QIOT_DPID_INFO_MODEL_VER,QIOT_DPID_INFO_MCU_VER,QIOT_DPID_INFO_CELLID,QIOT_DPID_INFO_ICCID,QIOT_DPID_INFO_MCC,QIOT_DPID_INFO_MNC,QIOT_DPID_INFO_LAC,QIOT_DPID_INFO_PHONE_NUM,QIOT_DPID_INFO_SIM_NUM,QIOT_DPID_INFO_SDK_VER,QIOT_DPID_INFO_LOC_SUPLIST,QIOT_DPIO_INFO_DP_VER,QIOT_DPIO_INFO_CP_VER]
ret = quecIot.devInfoReport(ids)
```

---

<span id="getDevInfo"></span>

## <font color=#A52A1A  >__quecIot.getDevInfo__ </font>

This function gets the specified device information.

__Prototype__

```py
quecIot.getDevInfo(id_list)
```

__Parameter__

* __`data`__: List type. The elements are integer. Information items.
  * __`1`__: Module model
  * __`2`__: Module firmware version
  * __`3`__: MCU version
  * __`4`__: Cell ID
  * __`5`__: ICCID
  * __`6`__: MCC
  * __`7`__: MNC
  * __`8`__: LAC
  * __`9`__: Phone number
  * __`10`__: IMSI
  * __`11`__: QuecThing SDK version
  * __`12`__: Supported positioning mode

__Return Value__

* Successful execution returns device information, that are:
  * __`Key`__: Item ID
  * __`Value`__: Value corresponding to the item ID
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.8.1 and above.

__Example__

```py
ids = [QIOT_DPID_INFO_MODEL_TYPE,QIOT_DPID_INFO_MODEL_VER,QIOT_DPID_INFO_MCU_VER,QIOT_DPID_INFO_CELLID,QIOT_DPID_INFO_ICCID,QIOT_DPID_INFO_MCC,QIOT_DPID_INFO_MNC,QIOT_DPID_INFO_LAC,QIOT_DPID_INFO_PHONE_NUM,QIOT_DPID_INFO_SIM_NUM,QIOT_DPID_INFO_SDK_VER,QIOT_DPID_INFO_LOC_SUPLIST,QIOT_DPIO_INFO_DP_VER,QIOT_DPIO_INFO_CP_VER]
ret = quecIot.getDevInfo(ids)
```

---

  