# API Overview

|                           Function                           |                         Description                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| [Ql_iotConfigSetSubDevEventCB()](#Ql_iotConfigSetSubDevEventCB) | Registers the callback function for the interaction event between the sub-device and the gateway. |
|           [Ql_iotSubDevConn()](#Ql_iotSubDevConn)            | Connects sub-device to gateway or authenticates sub-device.  |
|        [Ql_iotSubDevDisconn()](#Ql_iotSubDevDisconn)         |         Disconnects the sub-device from the gateway.         |
|  [Ql_iotSubDevPassTransSend()](#Ql_iotSubDevPassTransSend)   | Sends transparent tranmission data of the sub-device to Developer Center. |
| [Ql_iotSubDevPassTransSend_ex()](#Ql_iotSubDevPassTransSend_ex) | Sends transparent tranmission data of the sub-device to Developer Center. |
|      [Ql_iotSubDevTslReport()](#Ql_iotSubDevTslReport)       |             Sends TSL data of sub-device to Developer Center.             |
|   [Ql_iotSubDevTslReport_ex()](#Ql_iotSubDevTslReport_ex)    |             Sends TSL data of sub-device to Developer Center.             |
|         [Ql_iotSubDevTslAck()](#Ql_iotSubDevTslAck)          |   Replies to TSL data requested by Developer Center to the sub-device.    |
|         [Ql_iotSubDevDeauth()](#Ql_iotSubDevDeauth)          |                 De-registers the sub-device.                 |
|            [Ql_iotSubDevHTB()](#Ql_iotSubDevHTB)             | Refreshes the last interaction time between sub-device and gateway. |
|    [Ql_iotSubDevSetConnMode()](#Ql_iotSubDevSetConnMode)     | Enables or disables sub-device to connect to the wireless gateway over TCP/UDP. |
|  [Ql_iotConfigSetSubDevAuth()](#Ql_iotConfigSetSubDevAuth)   | Sets the authentication method when the sub-device connects to the wireless gateway. |

<br>

## __API Description__

<span id="Ql_iotConfigSetSubDevEventCB">  </span>

## <font color=#A52A2A  >__Ql_iotConfigSetSubDevEventCB__</font>

This function egisters the callback function for the interaction event between the sub-device and the gateway. Subsequent interaction events between the sub-device and the gateway are notified through this callback function.

__Prototype__

```c
void Ql_iotConfigSetSubDevEventCB(void (*eventCb));
```

__Parameter__

* __Callback function__

  * __void *__  __`eventCb`__: Callback function for the interaction events between the sub-device and the gateway after the sub-device connects to the gateway.

    * __Prototype__

      ```c
      typedef void (*eventCb)(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk ,const void *value, quint32_t valLen)
      ```

      * __Input__
        * __quint32_t__    __`event`__: Event identifier.
        * __quint32_t__     __`errcode`__: Event code. 
        * __const char *__ __`subPk`__: ProductKey generated when a product is created on Developer Center.
        * __const char *__  __`subDk`__: Unique identifier of the sub-device.
        * __const void *__ __`value`__: Callback data.
        * __quint32_t__     __`valLen`__: Length of the callback data.

__Return Value__

None

__NOTE__

This function is supported in SDK versions 2.10.0 and above.
For details of response code, callback data and callback content length, see [Interaction Events Between Sub-device and Gateway](#sub-event)。


__Example__

```c
Ql_iotConfigSetSubDevEventCB(Ql_iotSubEventCB);
```

---

<span id="Ql_iotSubDevConn">  </span>

## <font color=#A52A2A  >__Ql_iotSubDevConn__</font>

This function connects sub-device to gateway or authenticates sub-device. The connection/authentication result is notified by the sub-device and gateway callback event. When subDs is set to NULL, it means to authenticate the sub-device; when subDs is specified, it means to connect the sub-device to the gateway.

__Prototype__

```c
qbool Ql_iotSubDevConn(const char *subPk, const char *subPs, const char *subDk, const char *subDs, quint8_t sessionType, quint16_t keepalive)
```

__Parameter__

* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subPs`__: ProductSecret generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __const char *__   __`subDs`__: The device secret of the sub-device.
  * __quint8_t__    __`sessionType`__: Encryption method of data interaction of the sub-device.
    * __`0`__: Not encrypted.
    * __`1`__: Encrypted.
  * __quint16_t__    __`keepalive`__: Keepalive time of the sub-device.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.9.0 and above.

__Example__

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

This function disconnects the sub-device from the gateway.

__Prototype__

```c
qbool Ql_iotSubDevDisconn(const quint8_t *subPk, const quint8_t *subDk)
```

__Parameter__

* __Input__
  * __const quint8_t *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const quint8_t *__  __`subDk`__: Unique identifier of the sub-device.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.9.0 and above.

__Example__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t dev_key = {0};
qbool ret = Ql_iotSubDevDisconn((const char *)pro_key.buf, (const char *)dev_key.buf);
```

---

<span id="Ql_iotSubDevDeauth">  </span>

## <font color=#A52A2A  >__Ql_iotSubDevDeauth__</font>

This function de-registers the sub-device.

__Prototype__

```c
qbool Ql_iotSubDevDeauth(const char *subPk, const char *subPs, const char *subDk, const char *subDs)
```

__Parameter__

* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subPs`__: ProductSecret generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __const char *__  __`subDs`__: The device secret of the sub-device.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.9.0 and above.

__Example__

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

This function sends transparent transmission data of the sub-device to Developer Center. (It is recommended to call Ql_iotSubDevPassTransSend_ex.)

__Prototype__

```c
qbool Ql_iotSubDevPassTransSend(const quint8_t *subPk, const quint8_t *subDk, quint8_t *payload, quint16_t payloadlen)
```

__Parameter__

* __Input__
  * __const  quint8_t *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const  quint8_t *__  __`subDk`__: Unique identifier of the sub-device.
  * __quint8_t *__     __`payload`__: Pointer to the transparent transmission data to be reported.
  * __quint16_t *__     __`payloadlen`__: Length of the transparent transmission data to be reported.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.9.0 and above.

__Example__

```c
char *subPk;
char *subDk;
Ql_iotSubDevPassTransSend(subPk, subDk, "hello world", HAL_STRLEN("hello world"));
```

---

<span id="Ql_iotSubDevPassTransSend_ex">  </span>

## <font color=#A52A2A  >__Ql_iotSubDevPassTransSend_ex__</font>

This function sends transparent transmission data of the sub-device to Developer Center.

__Prototype__

```c
qint32_t Ql_iotSubDevPassTransSend_ex(const quint8_t *subPk, const quint8_t *subDk, quint8_t *payload, quint16_t payloadlen)
```

__Parameter__

* __Input__
  * __const  quint8_t *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const  quint8_t *__  __`subDk`__: Unique identifier of the sub-device.
  * __quint8_t *__     __`payload`__: Pointer to the transparent transmission data to be reported.
  * __quint16_t *__     __`payloadlen`__: Length of the transparent transmission data to be reported.

__Return Value__

* __`-1`__: Failed execution
* __`1–65535`__: The message txid reported when the function is executed successfully.

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```c
char *subPk;
char *subDk;
Ql_iotSubDevPassTransSend_ex(subPk, subDk, "hello world", HAL_STRLEN("hello world"));
```

---

<span id="Ql_iotSubDevTslReport">  </span>

## <font color=#A52A2A  >__Ql_iotSubDevTslReport__</font>

This function sends TSL data of sub-device to Developer Center. (It is recommended to call Ql_iotSubDevTslReport_ex.)

__Prototype__

```c
qbool Ql_iotSubDevTslReport(const char *subPk, const char *subDk, const void *ttlvHead)
```

__Parameter__

* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __const void *__  __`ttlvHead`__: Pointer to TTLV data chain header.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.9.0 and above.

__Example__

```c
void *ttlvHead = NULL;
char *subPk = NULL;
char *subDk = NULL;
Ql_iotSubDevTslReport(subPk,subDk,ttlvHead);
```

---

<span id="Ql_iotSubDevTslReport_ex">  </span>

## <font color=#A52A2A  >__Ql_iotSubDevTslReport_ex__</font>

This function sends TSL data of sub-device to Developer Center.

__Prototype__

```c
qint32_t Ql_iotSubDevTslReport_ex(const char *subPk, const char *subDk, const void *ttlvHead)
```

__Parameter__

* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __const void *__  __`ttlvHead`__: Pointer to TTLV data chain header.

__Return Value__

* __`-1`__: Failed execution
* __`1–65535`__: The message txid reported when the function is executed successfully.

__NOTE__

This function is supported in SDK versions 2.9.0 and above.

__Example__

```c
void *ttlvHead = NULL;
char *subPk = NULL;
char *subDk = NULL;
Ql_iotSubDevTslReport_ex(subPk,subDk,ttlvHead);
```

---

<span id="Ql_iotSubDevTslAck">  </span>

## <font color=#A52A2A  >__Ql_iotSubDevTslAck__</font>

This function replies to TSL data requested by Developer Center to the sub-device.

__Prototype__

```c
qbool Ql_iotSubDevTslAck(const char *subPk, const char *subDk, quint16_t pkgId, const void *ttlv Head)
```

__Parameter__

* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __quint16_t__    __`pkgId`__: The replied TTLV package ID. The ID is obtained through the event.
  * __const void *__  __`ttlvHead`__: Pointer to TTLV data chain header.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.9.0 and above.

__Example__

```c
char *subPk = NULL;
char *subDk = NULL;
quint16_t pkgId ;
void *ttlvHead = NULL;
Ql_iotSubDevTslAck(subPk, subDk, pkgId, ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotSubDevHTB">  </span>

## <font color=#A52A2A  >__Ql_iotSubDevHTB__</font>

This function refreshes the last interaction time between sub-device and gateway.

__Prototype__

```c
qbool Ql_iotSubDevHTB(const char *subPk, const char *subDk)
```

__Parameter__

* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.9.0 and above.

__Example__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t dev_key = {0};
qbool ret = Ql_iotSubDevHTB((const char *)pro_key.buf, (const char *)dev_key.buf);
```

---

<span id="Ql_iotSubDevSetConnMode">  </span>

## <font color=#A52A2A  >__Ql_iotSubDevSetConnMode__</font>

This function enables or disables the sub-device to connect to the wireless gateway over TCP/UDP.

__Prototype__

```c
qbool Ql_iotSubDevSetConnMode(quint8_t type, quint8_t mode)
```

__Parameter__

* __Input__
  * __quint8_t__  __`type`__: Connection type.
    * __`0`__:  TCP connection.
    * __`1`__: UDP connection.
  * __quint8_t__  __`mode`__: Enable or disable the sub-device to connect to the wireless gateway.
    * __`0`__: Disable
    * __`1`__: Enable


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```c
quint8_t mode = 1;
qbool ret = Ql_iotSubDevSetConnMode(1, mode);
```

---

<span id="Ql_iotConfigSetSubDevAuth">  </span>

## <font color=#A52A2A  >__Ql_iotConfigSetSubDevAuth__</font>

This function sets the authentication method when the sub-device connects to the wireless gateway. It supports authentication with projectId and device PK.

__Prototype__

```c
Ql_iotConfigSetSubDevAuth(quint8_t authMode,  quint8_t *authKey)
```

__Parameter__

* __Input__
  * __quint8_t__  __`type`__: Gateway authentication mode.
    * __`0`__: Disable authentication.
    * __`1`__: Authenticate with ProductKey of the sub-device.
    * __`2`__: Authenticate with Product ID of the sub-device.
  * __quint8_t__  __`authKey`__: The key used for authentication.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in SDK versions 2.10.0 and above.

__Example__

```c
qbool ret = Ql_iotConfigSetSubDevAuth(0,"12345678");
```

---

<br>

<span id="sub-event">  </span>

## Interaction Events Between Sub-device and Gateway

| Event Identifier, Event Code |                         Value                          | Description                                                  |                           Remarks                            |
| :--------------------------: | :----------------------------------------------------: | :----------------------------------------------------------- | :----------------------------------------------------------: |
|           1,10200            |                     uint8_t* type                      | It is a successful device authentication.                    |                                                              |
|           1,10404            |                          NULL                          | Error occurs when Developer Center calls the API.                         |                                                              |
|           1,10422            |                          NULL                          | The device is authenticated (Connection failed).             |                                                              |
|           1,10423            |                          NULL                          | Failed to query product information (Connection failed).     |                                                              |
|           1,10425            |                          NULL                          | Signature verification failed (Connection failed).           |                                                              |
|           1,10427            |                          NULL                          | Hash information is invalid (Connection failed).             |                                                              |
|           1,10434            |                          NULL                          | ClientID does not match password (password contains ClientID related information). |                                                              |
|           1,10431            |                          NULL                          | DK is invalid (Connection failed).                           |                                                              |
|           1,10440            |                          NULL                          | The gateway is not associated with the sub-device.           |                                                              |
|           1,10500            |                          NULL                          | Registration failed (Unknown error in system).               |                                                              |
|           2,10200            |                          NULL                          | Log in successfully.                                         |                                                              |
|           2,10404            |                          NULL                          | Error occurs when Developer Center calls the API.                         |                                                              |
|           2,10430            |                          NULL                          | The DeviceSecret is wrong (Connection failed).               |                                                              |
|           2,10437            |                          NULL                          | DeviceSecret error.                                             |                                                              |
|           2,10438            |                          NULL                          | No device information found.                                 |                                                              |
|           2,10440            |                          NULL                          | The gateway is not associated with the sub-device.           |                                                              |
|           2,10441            |                          NULL                          | Sub-device is connected (Connected successfully).            |                                                              |
|           2,10500            |                          NULL                          | Registration failed (Unknown error in system).               |                                                              |
|           4,10200            |                     NULL/qint32_t*                     | Send transparent transmission data successfully.             | After responding to the callback event, send message txid variable address (qint32_t*) for notification. |
|           4,10210            |                     NULL/qint32_t*                     | Send TSL data successfully.                                  | After responding to the callback event, send message txid variable address (qint32_t*) for notification. |
|           4,10300            |                     NULL/qint32_t*                     | Failed to send transparent transmission data.                | After responding to the callback event, send message txid variable address (qint32_t*) for notification. |
|           4,10310            |                     NULL/qint32_t*                     | Failed to send TSL data.                                     | After responding to the callback event, send message txid variable address (qint32_t*) for notification. |
|           5,10200            |                     uint8_t* type                      | The transparent transmission data is received.               |                                                              |
|           5,10210            |                   ttlv pointer type                    | The TSL data is received.                                    |                                                              |
|           5,10211            | uint16_t array type. Format:\<pkgId\>,\<id1\>,\<id2\>… | The Read Command of TSL is received.<br/>\<pkgId\>	Request Package ID issued by Developer Center.<br/>\<ID\>	TSL ID. |                                                              |
|           6,10200            |                          NULL                          | Successful logout (successful disconnection from the gateway). |                                                              |
|           8,10428            |                          NULL                          | Data throttling caused by high-frequency messages on the device. |                                                              |
|           8,10429            |                          NULL                          | Exceed the number of activations per device or data throttling caused by the number of daily requests. |                                                              |
|           8,10442            |                          NULL                          | Device is not logged into Developer Center.                               |                                                              |
|           10,10200           |                          NULL                          | Successful de-registration.                                  |                                                              |



