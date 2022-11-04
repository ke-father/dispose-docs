# API接口概览

| 函数 | 说明  |
|:--------:| :-------------:|
|  [Ql_iotConfigSetSubDevEventCB()](#Ql_iotConfigSetSubDevEventCB) | 注册子设备与网关交互事件回调处理函数 | 
|  [Ql_iotSubDevConn()](#Ql_iotSubDevConn) | 连接子设备至网关或认证子设备 |
|  [Ql_iotSubDevDisconn()](#Ql_iotSubDevDisconn) | 断开子设备与网关之间的连接 |
|  [Ql_iotSubDevPassTransSend()](#Ql_iotSubDevPassTransSend) | 发送子设备透传数据至平台 |
|  [Ql_iotSubDevPassTransSend_ex()](#Ql_iotSubDevPassTransSend_ex) | 发送子设备透传数据至平台 |
|  [Ql_iotSubDevTslReport()](#Ql_iotSubDevTslReport) |发送子设备物模型数据至平台 |
|  [Ql_iotSubDevTslReport_ex()](#Ql_iotSubDevTslReport_ex) |发送子设备物模型数据至平台|
|  [Ql_iotSubDevTslAck()](#Ql_iotSubDevTslAck) | 回复平台向子设备请求的物模型数据|
|  [Ql_iotSubDevDeauth()](#Ql_iotSubDevDeauth) | 注销子设备 |
|  [Ql_iotSubDevHTB()](#Ql_iotSubDevHTB) | 刷新子设备与网关最后进行交互的时间 |
|  [Ql_iotSubDevSetConnMode()](#Ql_iotSubDevSetConnMode) | 允许或禁止子设备通过 TCP/UDP 连接至无线网关 |
|  [Ql_iotConfigSetSubDevAuth()](#Ql_iotConfigSetSubDevAuth) | 设置子设备连接无线网关时的鉴权方式 |

<br>

## __API接口详情__


<span id="Ql_iotConfigSetSubDevEventCB">  </span>
## <font color=#A52A2A  >__Ql_iotConfigSetSubDevEventCB__</font>

该函数用于注册子设备与网关交互事件回调函数。后续子设备与网关交互事件均通过该回调函数进行通知。

__函数原型__

```c
void Ql_iotConfigSetSubDevEventCB(void (*eventCb)
```

__参数说明__

* __入参回调函数__
	* __void *__  __`eventCb`__：子设备连接网关后，发生子设备与网关交互事件时自动调用该回调函数。
		* __函数原型__
			```c
			typedef void (*eventCb)(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk ,const void *value, quint32_t valLen)
			```
			* __输入参数__
				* __quint32_t__    __`event`__：事件标识。
				* __quint32_t__     __`errcode`__： 事件码。
				* __const char *__ __`subPk`__：在平台创建产品时生成的ProductKey。
				* __const char *__  __`subDk`__：子设备唯一标识。
				* __const void *__ __`value`__：回调内容。
				* __quint32_t__     __`valLen`__：回调内容长度。

__返回值__

无。

__备注__

2.10.0及以上版本支持。
响应码、回调内容、回调内容长度详情参考[网关子设备回调事件](#sub-event)。


__调用示例__

```c
Ql_iotConfigSetSubDevEventCB(Ql_iotSubEventCB);
```
---

<span id="Ql_iotSubDevConn">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevConn__</font>

该函数用于连接子设备至网关或认证子设备。连接/认证结果通过子设备与网关回调事件通知。设置 subDs为 NULL 时，表示认证子设备；指定 subDs 时，表示连接子设备至网关。

__函数原型__

```c
qbool Ql_iotSubDevConn(const char *subPk, const char *subPs, const char *subDk, const char *subDs, quint8_t sessionType, quint16_t keepalive)
```

__参数说明__

* __输入参数__
	* __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
	* __const char *__  __`subPs`__：创建子设备产品生成的 ProductSecret。
	* __const char *__  __`subDk`__：子设备设备唯一标识。
	* __const char *__   __`subDs`__：子设备的设备密钥。
	* __quint8_t__    __`sessionType`__：子设备使用加密方式。
		* __`0`__： 不加密。 
		* __`1`__： 加密。
	* __quint16_t__    __`keepalive`__：子设备保活时间。

__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.9.0及以上版本支持。

__调用示例__

```c
mp_buffer_info_t pro_keyinfo = {0};
mp_buffer_info_t pro_secretinfo = {0};
mp_buffer_info_t dev_keyinfo = {0};
mp_buffer_info_t dev_secretinfo = {0};
int session_type_val;
int keepalive_val;
qbool ret = Ql_iotSubDevConn((const char *)pro_keyinfo.buf, (const char *)pro_secretinfo.buf, (const char *)dev_keyinfo.buf, (const char *)dev_secretinfo.buf, session_type_val, keepalive_val);
```

---

<span id="Ql_iotSubDevDisconn">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevDisconn__</font>

该函数用于断开子设备与网关之间的连接。

__函数原型__

```c
qbool Ql_iotSubDevDisconn(const quint8_t *subPk, const quint8_t *subDk)
```

__参数说明__

* __输入参数__
	* __const quint8_t *__  __`subPk`__：在平台创建产品时生成的ProductKey。
	* __const quint8_t *__  __`subDk`__：子设备设备唯一标识。
	
__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.9.0及以上版本支持。

__调用示例__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t dev_key = {0};
qbool ret = Ql_iotSubDevDisconn((const char *)pro_key.buf, (const char *)dev_key.buf);
```
---

<span id="Ql_iotSubDevDeauth">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevDeauth__</font>

该函数用于注销子设备。

__函数原型__

```c
qbool Ql_iotSubDevDeauth(const char *subPk, const char *subPs, const char *subDk, const char *subDs)
```

__参数说明__

* __输入参数__
	* __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
	* __const char *__  __`subPs`__：创建子设备产品生成的 ProductSecret。
	* __const char *__  __`subDk`__：子设备唯一标识。
	* __const char *__  __`subDs`__：子设备的设备密钥。
	
__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.9.0及以上版本支持。

__调用示例__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t pro_secret = {0};
mp_buffer_info_t dev_key = {0};
mp_buffer_info_t dev_secret = {0};
qbool ret = Ql_iotSubDevDeauth((const char *)pro_key.buf, (const char *)pro_secret.buf, (const char *)dev_key.buf, (const char *)dev_secret.buf);
```
---
<span id="Ql_iotSubDevPassTransSend">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevPassTransSend__</font>

该函数用于发送子设备透传数据至平台(建议使用函数Ql_iotSubDevPassTransSend_ex替换)。

__函数原型__

```c
qbool Ql_iotSubDevPassTransSend(const quint8_t *subPk, const quint8_t *subDk, quint8_t *payload, quint16_t payloadlen)
```

__参数说明__

* __输入参数__
	* __const  quint8_t *__  __`subPk`__：创建子设备产品生成的 ProductKey。
	* __const  quint8_t *__  __`subDk`__：子设备设备唯一标识。
	* __quint8_t *__     __`payload`__：上报透传数据指针。
	* __quint16_t *__     __`payloadlen`__：上报透传数据长度。
	
__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.9.0及以上版本支持。

__调用示例__

```c
char *subPk;
char *subDk;
Ql_iotSubDevPassTransSend(subPk, subDk, "hello world", HAL_STRLEN("hello world"));
```
---

<span id="Ql_iotSubDevPassTransSend_ex">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevPassTransSend_ex__</font>

该函数用于发送子设备透传数据至平台。

__函数原型__

```c
qint32_t Ql_iotSubDevPassTransSend_ex(const quint8_t *subPk, const quint8_t *subDk, quint8_t *payload, quint16_t payloadlen)
```

__参数说明__

* __输入参数__
	* __const  quint8_t *__  __`subPk`__：创建子设备产品生成的 ProductKey。
	* __const  quint8_t *__  __`subDk`__：子设备设备唯一标识。
	* __quint8_t *__     __`payload`__：上报透传数据指针。
	* __quint16_t *__     __`payloadlen`__：上报透传数据长度。
	
__返回值__

* __`-1`__：      函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__

2.10.0及以上版本支持。

__调用示例__

```c
char *subPk;
char *subDk;
Ql_iotSubDevPassTransSend_ex(subPk, subDk, "hello world", HAL_STRLEN("hello world"));
```
---
<span id="Ql_iotSubDevTslReport">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevTslReport__</font>

该函数用于发送子设备物模型数据至平台(建议使用函数Ql_iotSubDevTslReport_ex替换)。

__函数原型__

```c
qbool Ql_iotSubDevTslReport(const char *subPk, const char *subDk, const void *ttlvHead)
```

__参数说明__

* __输入参数__
	* __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
	* __const char *__  __`subDk`__：子设备设备唯一标识。
	* __const void *__  __`ttlvHead`__：ttlv 数据链表头指针。

__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.9.0及以上版本支持。

__调用示例__

```c
void *ttlvHead = NULL;
char *subPk = NULL;
char *subDk = NULL;
Ql_iotSubDevTslReport(subPk,subDk,ttlvHead);
```
---

<span id="Ql_iotSubDevTslReport_ex">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevTslReport_ex__</font>

该函数用于发送子设备物模型数据至平台。

__函数原型__

```c
qint32_t Ql_iotSubDevTslReport_ex(const char *subPk, const char *subDk, const void *ttlvHead)
```

__参数说明__

* __输入参数__
	* __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
	* __const char *__  __`subDk`__：子设备设备唯一标识。
	* __const void *__  __`ttlvHead`__：ttlv 数据链表头指针。

__返回值__

* __`-1`__：      函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__

2.9.0及以上版本支持。

__调用示例__

```c
void *ttlvHead = NULL;
char *subPk = NULL;
char *subDk = NULL;
Ql_iotSubDevTslReport_ex(subPk,subDk,ttlvHead);
```
---
<span id="Ql_iotSubDevTslAck">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevTslAck__</font>

该函数用于回复平台向子设备请求的物模型数据。

__函数原型__

```c
qbool Ql_iotSubDevTslAck(const char *subPk, const char *subDk, quint16_t PkgID, const void *ttlv Head)
```

__参数说明__

* __输入参数__
	* __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
	* __const char *__  __`subDk`__：子设备设备唯一标识。
	* __quint16_t__    __`PkgID`__：ttlv 回复包 id，该 id 需要通过事件通知获取。
	* __const void *__  __`ttlvHead`__：ttlv数据链表头指针。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.9.0及以上版本支持。

__调用示例__

```c
char *subPk = NULL;
char *subDk = NULL;
quint16_t PkgID ;
void *ttlvHead = NULL;
Ql_iotSubDevTslAck(subPk, subDk, PkgID, ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```
---

<span id="Ql_iotSubDevHTB">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevHTB__</font>

该函数用于刷新子设备与网关最后进行交互的时间。

__函数原型__

```c
qbool Ql_iotSubDevHTB(const char *subPk, const char *subDk)
```

__参数说明__

* __输入参数__
	* __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
	* __const char *__  __`subDk`__：子设备设备唯一标识。


__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.9.0及以上版本支持。

__调用示例__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t dev_key = {0};
qbool ret = Ql_iotSubDevHTB((const char *)pro_key.buf, (const char *)dev_key.buf);
```
---

<span id="Ql_iotSubDevSetConnMode">  </span>
## <font color=#A52A2A  >__Ql_iotSubDevSetConnMode__</font>

该函数用于设置无线网关功能的TCP/UDP子设备允许连接功能是否开启。

__函数原型__

```c
qbool Ql_iotSubDevSetConnMode(quint8_t type, quint8_t mode)
```

__参数说明__

* __输入参数__
	* __quint8_t__  __`type`__：连接类型。
		* __`0`__：tcp连接类型
		* __`1`__：udp连接类型
	* __quint8_t__  __`mode`__：子设备允许连接模式。
		* __`0`__：不允许连接
		* __`1`__：允许连接


__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.10.0及以上版本支持。

__调用示例__

```c
quint8_t mode = 1;
qbool ret = Ql_iotSubDevSetConnMode(1, mode);
```
---

<span id="Ql_iotConfigSetSubDevAuth">  </span>
## <font color=#A52A2A  >__Ql_iotConfigSetSubDevAuth__</font>

该函数用于无线网关功能设置对子设备连接的准入鉴权功能。支持使用proJectId和设备pk两种方式进行鉴权。

__函数原型__

```c
Ql_iotConfigSetSubDevAuth(quint8_t authMode,  quint8_t *authKey)
```

__参数说明__

* __输入参数__
	* __quint8_t__  __`type`__：网关鉴权模式。
		* __`0`__：不启用鉴权
		* __`1`__：使用子设备的ProductKey进行鉴权
		* __`2`__：使用产品id进行鉴权
	* __quint8_t__  __`authKey`__：鉴权使用的密钥。


__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.10.0及以上版本支持。

__调用示例__

```c
qbool ret = Ql_iotConfigSetSubDevAuth(0,"12345678");
```
---
<br>

<span id="sub-event">  </span>
## 子设备与网关交互事件

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




