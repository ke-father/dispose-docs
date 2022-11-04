# Data Interaction API

## **Data Interaction API Overview**

| Function                                    | Description                                   |
| :------------------------------------------ | :-------------------------------------------- |
| [quecIot.passTransSend()](#passTransSend)   | Sends transparent transmission data to Developer Center.   |
| [quecIot.phymodelReport()](#phymodelReport) | Sends TSL data to Developer Center.                        |
| [quecIot.phymodelAck()](#phymodelAck)       | Replies to the querying of TSL data from Developer Center. |
| [quecIot.statusReport()](#statusReport)     | Reports device status.                        |
| [quecIot.devInfoReport()](#devInfoReport)   | Gets device status.                           |
| [quecIot.getDevStatus()](#getDevStatus)     | Reports the specified device information.     |
| [quecIot.getDevInfo()](#getDevInfo)         | Gets the specified device information.        |

## **API Description**

<span id="passTransSend">  </span>

## <font color=#A52A1A  >__quecIot.passTransSend__ </font>

This function sends transparent transmission data to Developer Center.

__Prototype__

```py
quecIot.passTransSend(mode,data)
```

__Parameter__

* __`mode`__: Integer type. Data sending mode.

  * __`0`__: Send NON data and the set the carried RAI flag to 0
  * __`1`__: Send NON data and the set the carried RAI flag to 1
  * __`2`__: Send NON data and the set the carried RAI flag to 2
  * __`100`__: Send CON data and the set the carried RAI flag to 0
  * __`101`__: Send CON data and the set the carried RAI flag to 1 
  * __`102`__: Send CON data and the set the carried RAI flag to 2
* __`data`__： Data to be sent.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.1.2 and above.

__Example__

```py
ret = quecIot.passTransSend(0,"123abc")
```

---

<span id="phymodelReport">  </span>

## <font color=#A52A1A  >__quecIot.phymodelReport__ </font>

This command sends TSL data to Developer Center. 

__Prototype__

```py
quecIot.phymodelReport(mode,data)
```

__Parameter__

* __`mode`__: Integer type. Data sending mode.

  * __`0`__: Send NON data and the set the carried RAI flag to 0
  * __`1`__: Send NON data and the set the carried RAI flag to 1
  * __`2`__: Send NON data and the set the carried RAI flag to 2
  * __`100`__: Send CON data and the set the carried RAI flag to 0
  * __`101`__: Send CON data and the set the carried RAI flag to 1 
  * __`102`__: Send CON data and the set the carried RAI flag to 2
* __`data`__: Dict type. TSL data to be sent. 

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.1.2 and above.

__Example__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelReport(100,ttlvHead)
```

---

<span id="phymodelAck">  </span>

## <font color=#A52A1A  >__quecIot.phymodelAck__ </font>

This function replies to the querying of TSL data from Developer Center.

__Prototype__

```py
quecIot.phymodelAck(mode,PkgID,data)
```

__Parameter__

* __`mode`__: Integer type. Data sending mode.

  * __`0`__: Send NON data and the set the carried RAI flag to 0
  * __`1`__: Send NON data and the set the carried RAI flag to 1
  * __`2`__: Send NON data and the set the carried RAI flag to 2
  * __`100`__: Send CON data and the set the carried RAI flag to 0
  * __`101`__: Send CON data and the set the carried RAI flag to 1 
  * __`102`__: Send CON data and the set the carried RAI flag to 2
* __`pkgid`__: Integer type. Request package ID issued by Developer Center.
* __`data`__: Dict type. TSL data to be sent. 

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.1.2 and above.

__Example__

```py
ttlvHead = {1:10}
ret = quecIot.phymodelAck(100,12,ttlvHead)
```

---

<span id="statusReport">  </span>

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

This function is supported in SDK versions 2.1.2 and above.

__Example__

```py
statusIds = [1,2,3,4,5,6,7]
quecIot.statusReport(statusIds)
```

---

<span id="getDevStatus">  </span>

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

This function is supported in SDK versions 2.1.2 and above.

__Example__

```py
ids = [1,2,3,4,5,6,7]
ret = quecIot.getDevStatus(ids)
```

---

<span id="devInfoReport">  </span>

## <font color=#A52A1A  >__quecIot.devInfoReport__ </font>

This function reports specific device information.

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
  * __`11`__:  QuecThing SDK version
  * __`12`__: Supported positioning mode

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.1.2 and above.

__Example__

```py
ids = [1,2,3,4,5,6,7,8,9,10,11,12]
ret = quecIot.devInfoReport(ids)
```

---

<span id="getDevInfo">  </span>

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
  * __`11`__:  QuecThing SDK version
  * __`12`__: Supported positioning mode

__Return Value__

* Successful execution returns device information, that are:
  * __`Key`__: Item ID
  * __`Value`__: Value corresponding to the item ID
* Failed execution returns null.

__NOTE__

This function is supported in SDK versions 2.1.2 and above.

__Example__

```py
ids = [1,2,3,4,5,6,7,8,9,10,11,12]
ret = quecIot.getDevInfo(ids)
```

---

 