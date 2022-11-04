# API接口概览

| 函数 | 说明  |
|:--------:| :-------------:|
|[quecIot.subDevSetEventCB()](#subDevSetEventCB) |	注册子设备与网关交互事件回调处理函数|
|[quecIot.subDevConn()](#subDevConn)	|连接子设备至网关|
|[quecIot.subDevDisconn()](#subDevDisconn)	|断开子设备与网关之间的连接|
|[quecIot.subDevDeauth()](#subDevDeauth)	|注销子设备|
|[quecIot.subDevPassTransSend()](#subDevPassTransSend)|	发送子设备透传数据至平台|
|[quecIot.subDevPassTransSend_ex()](#subDevPassTransSend_ex)|	发送子设备透传数据至平台|
|[quecIot.subDevPhymodelReport()](#subDevPhymodelReport)	|发送子设备物模型数据至平台|
|[quecIot.subDevPhymodelReport_ex()](#subDevPhymodelReport_ex)	|发送子设备物模型数据至平台|
|[quecIot.subDevPhymodelAck()](#subDevPhymodelAck)|	回复平台向子设备请求的物模型数据|
|[quecIot.subDevHTB()](#subDevHTB) |刷新子设备与网关最后进行交互的时间|
|[quecIot.subDevSetConnMode()](#subDevSetConnMode)	|设允许或禁止子设备通过 TCP/UDP 连接至无线网关|
|[quecIot.SetSubDevAuth()](#SetSubDevAuth)	|设置子设备连接无线网关时的鉴权方式|
	

## __API接口详情__

<span id="subDevSetEventCB">  </span>

## <font color=#A52A1A  >__quecIot.subDevSetEventCB__</font>
该函数用于注册子设备与网关交互事件回调处理函数。后续子设备与网关交互事件均通过该回调函数进行通知。

__函数原型__

```py
quecIot.subDevSetEventCB(event_sub_dev_urc_cb)
```

__参数说明__

* __入参回调函数__ 
	* __`eventCb`__：该回调函数为子设备与网关交互事件回调函数。
		
		* __函数原型__
			 ```py
			event_sub_dev_urc_cb(data_list)
			```
			* __参数说明__ 
				* 	__`data_list`__：形式参数，序列类型。				
					* 	__`data_list[0]`__：字符串类型。创建产品生成的ProductKey。
					* 	__`data_list[1]`__：字符串类型。子设备唯一标识。
					* 	__`data_list[2]`__：整型。事件标识符。
					* 	__`data_list[3]`__：整型。事件码。
					* 	__`data_list[4]`__：附带数据。


__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。
响应码、回调内容、回调内容长度详情参考[网关子设备回调事件](#sub-event)。


__调用示例__

```py
ret = quecIot.subDevSetEventCB(subDevEventCB)
```

---

<span id="subDevConn">  </span>
## <font color=#A52A1A  >__quecIot.subDevConn__</font>

该函数用于连接子设备至网关或认证子设备。连接/认证结果通过子设备与网关回调事件通知。设置device_secret 为 NULL 时，表示认证子设备；指定 device_secret 时，表示连接子设备至网关。

__函数原型__

```py
quecIot.subDevConn(product_key, product_secret, device_key,device_secret, sessopm_type,keeyalive)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。		
* 	__`product_secret`__：字符串类型。在平台创建产品时生成的ProductSecret。
* 	__`device_key`__：字符串类型。子设备唯一标识。
* 	__`device_secret`__：字符串类型。认证到平台时，平台下发的设备秘钥。认证到平台时不需要传入device_secret。登录平台时需要传入device_secret。
* 	__`session_type`__：整形。子设备交互数据加密方式。
* 	__`keeyalive`__：整形。子设备保活时间。范围：60~65534；单位：秒。
	 
__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.9.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevConn("pxxxxM", "VzYxxxxxxxxxDE5", "8EExxxxxxEE8", 0, 120)
```

---


<span id="subDevDisconn">  </span>

## <font color=#A52A1A  >__quecIot.subDevDisconn__</font>

该函数用于断开子设备与网关之间的连接。

__函数原型__

```py
quecIot.subDevDisconn(product_key, device_key)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。	
* 	__`product_secret`__：字符串类型。子设备唯一标识。

	 
__返回值__

* __`True`__：函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.9.0及以上版本的QuecThing SDK支持。


__调用示例__

```py
ret = quecIot.subDevDisconn("pxxxxM","8EExxxxxxEE8")
```

---

<span id="subDevDeauth">  </span>
## <font color=#A52A1A  >__quecIot.subDevDeauth__</font>

该函数用于注销子设备。

__函数原型__

```py
quecIot.subDevDeauth(product_key, product_secret, device_key,device_secret)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。	
* 	__`product_secret`__：字符串类型。在平台创建产品时生成的ProductSecret。
* 	__`device_key`__：字符串类型。子设备唯一标识。
* 	__`device_secret`__：字符串类型。认证到平台时，平台下发的设备秘钥。


__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.9.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevDeauth("pxxxxM","VzYxxxxxxxxxDE5","8EExxxxxxEE8","123xxxx890")
```

---

<span id="subDevPassTransSend">  </span>
## <font color=#A52A1A  >__quecIot.subDevPassTransSend__</font>

该函数用于发送子设备透传数据至平台（建议通过quecIot.subDevPassTransSend_ex()发送透传数据，发送成功后返回上行消息ID）。
 
__函数原型__

```py
quecIot.subDevPassTransSend(product_key, device_key, mp_data)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。	
* 	__`device_key`__：字符串类型。子设备唯一标识。	
* 	__`mp_data`__：Bytes类型。待发送数据。

	 
__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.9.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevPassTransSend("pxxxxM","8EExxxxxxEE8","123abc")
```

---

<span id="subDevPassTransSend_ex">  </span>
## <font color=#A52A1A  >__quecIot.subDevPassTransSend_ex__</font>

该函数用于发送子设备透传数据至平台。调用该函数发送透传数据成功后，该函数返回上行数据 ID（仅QuecThing SDK 2.10.0 及以后版本支持该函数）。

__函数原型__

```py
quecIot.subDevPassTransSend_ex(product_key, device_key, mp_data)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。	
* 	__`device_key`__：字符串类型。子设备唯一标识。	
* 	__`mp_data`__：Bytes类型。待发送数据。

	 
__返回值__

* __`-1`__： 函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevPassTransSend_ex("pxxxxM","8EExxxxxxEE8","123abc")
```

---

<span id="subDevPhymodelReport">  </span>
## <font color=#A52A1A  >__quecIot.subDevPhymodelReport__</font>

该函数用于发送子设备物模型数据至平台（建议通过 quecIot.subDevPhymodelReport_ex()发送物模型数据，发送成功后返回上行消息 ID）。

__函数原型__

```py
quecIot.subDevPhymodelReport(product_key, device_key, mp_data)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。	
* 	__`device_key`__：字符串类型。子设备唯一标识。	
* 	__`mp_data`__：Bytes类型。待发送数据。

	 
__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.9.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevPhymodelReport("pxxxxM","8EExxxxxxEE8",{1:True})
```

---

<span id="subDevPhymodelReport_ex">  </span>
## <font color=#A52A1A  >__quecIot.subDevPhymodelReport_ex__</font>

该函数用于发送子设备物模型数据至平台。调用该函数发送物模型数据成功后，该函数返回上行数据ID（仅 QuecThing SDK 2.10.0 及以后版本支持该函数）。

__函数原型__

```py
quecIot.subDevPhymodelReport_ex(product_key, device_key, mp_data)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。	
* 	__`device_key`__：字符串类型。子设备唯一标识。	
* 	__`mp_data`__：Bytes类型。待发送数据。

	 
__返回值__

* __`-1`__：函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevPhymodelReport_ex("pxxxxM","8EExxxxxxEE8",{2:100})
```

---

<span id="subDevPhymodelAck">  </span>
## <font color=#A52A1A  >__quecIot.subDevPhymodelAck__</font>

该函数用于回复平台向子设备请求的物模型数据。

__函数原型__

```py
quecIot.subDevPhymodelAck(product_key, device_key, mp_PkgID, mp_data)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。	
* 	__`device_key`__：字符串类型。子设备唯一标识。	
* 	__`mp_PkgID`__：整型。平台下发的请求包ID。
* 	__`mp_data`__：Dict类型。待发送物模型数据。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.9.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevPhymodelAck("pxxxxM","8EExxxxxxEE8",3,{1:True})
```

---

<span id="subDevHTB">  </span>
## <font color=#A52A1A  >__quecIot.subDevHTB__</font>

该函数用于刷新子设备与网关最后进行交互的时间。

__函数原型__

```py
quecIot.subDevHTB(product_key, device_key)
```
__参数说明__

* 	__`product_key`__：字符串类型。在平台创建产品时生成的ProductKey。
* 	__`device_key`__：字符串类型。子设备唯一标识。

__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.9.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevHTB("pxxxxM","8EExxxxxxEE8")
```

---

<span id="subDevSetConnMode">  </span>

## <font color=#A52A1A  >__quecIot.subDevSetConnMode__</font>

该函数用于允许或禁止子设备通过 TCP/UDP 连接至无线网关。

__函数原型__

```py
quecIot.subDevSetConnMode(type, mode)
```
__参数说明__

* 	__`type`__：连接类型
	* __`0`__：tcp
	* __`1`__：udp
* 	__`mode`__：允许或禁止子设备通过 TCP/UDP 连接至无线网关。
	* __`0`__：禁止
	* __`1`__：允许
	
__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.subDevSetConnMode(0,1)
```

---

<span id="SetSubDevAuth">  </span>
## <font color=#A52A1A  >__quecIot.SetSubDevAuth__</font>

该函数用于设置子设备连接无线网关时的鉴权方式。支持使用客户自定义 ProjectKey 和设备ProductKey 两种方式进行鉴权。

__函数原型__

```py
quecIot.SetSubDevAuth(authMode, authKey)
```
__参数说明__

* 	__`authMode`__：网关鉴权模式
	* __`0`__：禁用鉴权
	* __`1`__：使用平台生成的子设备 ProductKey 鉴权
	* __`2`__：使用自定义的 projectKey 鉴权
* 	__`authKey`__：鉴权使用的密钥
	
__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.SetSubDevAuth(0,"123xxxxxxxxxx45")
```

---


<br>

<span id="sub-event">  </span>

## __子设备与网关交互事件__

| 事件标识,事件码 | 值    |描述    | 备注|
|:--------:| :-------------:| :-------------|  :-------------:| 
|1,10200	|uint8_t*类型	|子设备认证成功||
|1,10404	|NULL	|平台内部接口调用错误||
|1,10422	|NULL	|设备已认证（连接失败）||
|1,10423	|NULL	|查询产品信息失败（连接失败）||
|1,10425	|NULL	|签名验证未通过（连接失败）||
|1,10427	|NULL	|散列信息不合法（连接失败）||
|1,10434	|NULL	|ClientID与password不匹配（password中包涵ClientID相关信息）||
|1,10431	|NULL	|DK不合法（连接失败）||
|1,10440	|NULL	|网关与子设备没有关联关系||
|1,10500	|NULL	|设备认证失败（系统发生未知异常）||
|2,10200	|NULL	|接入成功||
|2,10404	|NULL	|平台内部接口调用错误||
|2,10430	|NULL	|设备密钥不正确（连接失败）||
|2,10437	|NULL	|子设备DS错误||
|2,10438	|NULL	|未查到该设备||
|2,10440	|NULL	|网关与子设备没有关联关系||
|2,10441	|NULL	|子设备已连接（连接失败）||
|2,10500	|NULL	|接入失败（系统发生未知异常）||
|4,10200	|NULL/qint32_t*	|透传数据发送成功|响应回调事件后发送消息txid变量地址(qint32_t*)进行通知|
|4,10210	|NULL/qint32_t*	|物模型数据发送成功|响应回调事件后发送消息txid变量地址(qint32_t*)进行通知|
|4,10300	|NULL/qint32_t*	|透传数据发送失败|响应回调事件后发送消息txid变量地址(qint32_t*)进行通知|
|4,10310	|NULL/qint32_t*	|物模型数据发送失败|响应回调事件后发送消息txid变量地址(qint32_t*)进行通知|
|5,10200	|uint8_t*类型	|收到透传数据。	||
|5,10210	|ttlv指针类型	|收到物模型数据。	||
|5,10211	|uint16_t数组类型，格式：\<PkgID\>,\<id1\>,\<id2\>…	|收到物模型查询命令。<br/>\<PkgID\>	平台下发的请求包ID；<br/>\<ID\>	物模型ID	；||
|6,10200	|NULL	|子设备登出成功（断开连接成功）	||
|8,10428	|NULL	|设备高频消息导致限流	||
|8,10429	|NULL	|超过单设备激活数量或者每日请求数导致限流	||
|8,10442	|NULL	|子设备没有登录	||
|10,10200	|NULL	|子设备注销成功	||




