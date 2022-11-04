# API Overview

|                           Function                           |                         Description                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|       [quecIot.subDevSetEventCB()](#subDevSetEventCB)        | Registers the callback function for the interaction event between the sub-device and the gateway. |
|             [quecIot.subDevConn()](#subDevConn)              |               Connects sub-device to gateway.                |
|          [quecIot.subDevDisconn()](#subDevDisconn)           |         Disconnects the sub-device from the gateway.         |
|           [quecIot.subDevDeauth()](#subDevDeauth)            |                 De-registers the sub-device.                 |
|    [quecIot.subDevPassTransSend()](#subDevPassTransSend)     | Sends transparent transmission data of the sub-device to Developer Center. |
| [quecIot.subDevPassTransSend_ex()](#subDevPassTransSend_ex)  | Sends transparent transmission data of the sub-device to Developer Center. |
|   [quecIot.subDevPhymodelReport()](#subDevPhymodelReport)    |             Sends TSL data of sub-device to Developer Center.             |
| [quecIot.subDevPhymodelReport_ex()](#subDevPhymodelReport_ex) |             Sends TSL data of sub-device to Developer Center.             |
|      [quecIot.subDevPhymodelAck()](#subDevPhymodelAck)       |   Replies to TSL data requested by Developer Center to the sub-device.    |
|              [quecIot.subDevHTB()](#subDevHTB)               | Refreshes the last interaction time between sub-device and gateway. |
|      [quecIot.subDevSetConnMode()](#subDevSetConnMode)       | Enables or disables sub-device to connect to the wireless gateway over TCP/UDP. |
|          [quecIot.SetSubDevAuth()](#SetSubDevAuth)           | Sets the authentication method when the sub-device connects to the wireless gateway. |


## __API Description__

<span id="subDevSetEventCB">  </span>

## <font color=#A52A1A  >__quecIot.subDevSetEventCB__</font>

This function registers the callback function for the interaction event between the sub-device and the gateway. Subsequent interaction events between the sub-device and the gateway are notified through this callback function.

__Prototype__

```py
quecIot.subDevSetEventCB(event_sub_dev_urc_cb)
```

__Return Value__

* __Callback function__ 

  * __`eventCb`__: This is a callback function of interaction event between the sub-device and the gateway.

    * __Prototype__

      ```py
      event_sub_dev_urc_cb(data_list)
      ```

      * __Parameter__ 
        * 	__`data_list`__: A formal parameter. Sequence type.				
           * 	__`data_list[0]`__: String type.  ProductKey generated when a product is created on Developer Center.
           * 	__`data_list[1]`__: String type. Unique identifier of the sub-device.
           * 	__`data_list[2]`__: Integer type. Event identifier.
           * 	__`data_list[3]`__: Integer type. Event code.
           * 	__`data_list[4]`__: The attached data.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.10.0 and above.
For details of response code, callback data and callback content length, see [Interaction Events Between Sub-device and Gateway](#sub-event).

__Example__

```py
ret = quecIot.subDevSetEventCB(subDevEventCB)
```


---

<span id="subDevConn">  </span>

## <font color=#A52A1A  >__quecIot.subDevConn__</font>

This function connects sub-device to gateway or authenticates sub-device. The connection/authentication result is notified by the sub-device and gateway callback event. When device_descret is set to NULL, it means to authenticate the sub-device; when device_descret is specified, it means to connect the sub-device to the gateway.

__Prototype__

```py
quecIot.subDevConn(product_key, product_descret, device_key,device_descret, sessopm_type,keeyalive)
```

__Parameter__

* 	__`product_key`__: String type. ProductKey generated when a product is created on Developer Center.		
* 	__`product_descret`__: String type. ProductSecret generated when a product is created on Developer Center.
* 	__`device_key`__: String type. Unique identifier of the sub-device.
* 	__`device_descret`__: String type. The device secret issued by Developer Center when the device authenticates to Developer Center.
* 	__`session_type`__: Integer type. Encryption method of data interaction of the sub-device.
* 	__`keeyalive`__: Integer type. The keepalive time of the sub-device. Range: 60–65534. Unit: second.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.9.0 and above.

__Example__

```py
ret = quecIot.subDevConn("pxxxxM", "VzYxxxxxxxxxDE5", "8EExxxxxxEE8", 0, 120)
```


---


<span id="subDevDisconn">  </span>

## <font color=#A52A1A  >__quecIot.subDevDisconn__</font>

This function disconnects the sub-device from the gateway.

__Prototype__

```py
quecIot.subDevDisconn(product_key, device_key)
```

__Parameter__

* __`product_key`__: String type.  ProductKey generated when a product is created on Developer Center.	

* __`device_key`__: String type. Unique identifier of the sub-device.

   

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.9.0 and above.

__Example__

```py
ret = quecIot.subDevDisconn("pxxxxM","8EExxxxxxEE8")
```

---


<span id="subDevDeauth">  </span>

## <font color=#A52A1A  >__quecIot.subDevDeauth__</font>

This command disconnects sub-device from the gateway.

__Prototype__

```py
quecIot.subDevDeauth(product_key, product_descret, device_key,device_descret)
```

__Parameter__

* 	__`product_key`__: String type.  ProductKey generated when a product is created on Developer Center.	
* 	__`product_descret`__: String type. ProductSecret generated when a product is created on Developer Center.
* 	__`device_key`__: String type. Unique identifier of the sub-device.
* 	__`device_descret`__: String type. The device secret issued by Developer Center when the device authenticates to Developer Center.


__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.9.0 and above.

__Example__

```py
ret = quecIot.subDevDeauth("pxxxxM","VzYxxxxxxxxxDE5","8EExxxxxxEE8","123xxxx890")
```

---

<span id="subDevPassTransSend">  </span>

## <font color=#A52A1A  >__quecIot.subDevPassTransSend__</font>

This command sends transparent transmission data of the sub-device to Developer Center. (It is recommended to call quecIot.subDevPassTransSend_ex() to send transparent transmission data. After the data is sent successfully, it returns uplink message ID.)

__Prototype__

```py
quecIot.subDevPassTransSend(product_key, device_key, mp_data)
```

__Parameter__

* __`product_key`__ : String type. ProductKey generated when a product is created on Developer Center.	

* __`device_key`__: String type. Unique identifier of the sub-device.

* __`mp_data`__: Bytes type. The data to be sent. 

   

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.9.0 and above.

__Example__

```py
ret = quecIot.subDevPassTransSend("pxxxxM","8EExxxxxxEE8","123abc")
```

---

<span id="subDevPassTransSend_ex">  </span>

## <font color=#A52A1A  >__quecIot.subDevPassTransSend_ex__</font>

This command sends transparent transmission data of the sub-device to Developer Center. After the data is sent successfully, it returns uplink message ID. (This function is supported in QuecThing SDK versions 2.10.0 and above.)

__Prototype__

```py
quecIot.subDevPassTransSend_ex(product_key, device_key, mp_data)
```

__Parameter__

* __`product_key`__ : String type. ProductKey generated when a product is created on Developer Center.

* __`device_key`__: String type. Unique identifier of the sub-device.	

* __`mp_data`__: Bytes type. The data to be sent. 

   

__Return Value__

* __`-1`__: Failed execution
* __`1–65535`__: The message txid reported when the function is executed successfully.

__NOTE__

This function is supported in QuecThing SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.subDevPassTransSend_ex("pxxxxM","8EExxxxxxEE8","123abc")
```

---

<span id="subDevPhymodelReport">  </span>

## <font color=#A52A1A  >__quecIot.subDevPhymodelReport__</font>

This function sends TSL data of sub-device to Developer Center. (It is recommended to call quecIot.subDevPhymodelReport_ex() to send TSL data. After the data is sent successfully, it returns uplink message ID.)

__Prototype__

```py
quecIot.subDevPhymodelReport(product_key, device_key, mp_data)
```

__Parameter__

* __`product_key`__: String type. ProductKey generated when a product is created on Developer Center.	

* __`device_key`__: String type. Unique identifier of the sub-device.	

* __`mp_data`__: Bytes type. The data to be sent. 

   

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.9.0 and above.

__Example__

```py
ret = quecIot.subDevPhymodelReport("pxxxxM","8EExxxxxxEE8",{1:True})
```

---

<span id="subDevPhymodelReport_ex">  </span>

## <font color=#A52A1A  >__quecIot.subDevPhymodelReport_ex__</font>

This command sends TSL data of the sub-device to Developer Center. After the data is sent successfully, it returns uplink message ID. (This function is supported in QuecThing SDK versions 2.10.0 and above.)

__Prototype__

```py
quecIot.subDevPhymodelReport_ex(product_key, device_key, mp_data)
```

__Parameter__

* __`product_key`__: String type. ProductKey generated when a product is created on Developer Center.	

* __`device_key`__: String type. Unique identifier of the sub-device.	

* __`mp_data`__: Bytes type. The data to be sent.  

   

__Return Value__

* __`-1`__: Successful execution
* __`1–65535`__: The message txid reported when the function is executed successfully.

__NOTE__

This function is supported in QuecThing SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.subDevPhymodelReport_ex("pxxxxM","8EExxxxxxEE8",{2:100})
```

---

<span id="subDevPhymodelAck">  </span>

## <font color=#A52A1A  >__quecIot.subDevPhymodelAck__</font>

This function replies to TSL data requested by Developer Center to the sub-device.

__Prototype__

```py
quecIot.subDevPhymodelAck(product_key, device_key, mp_pkgid, mp_data)
```

__Parameter__

* 	__`product_key`__: String type. ProductKey generated when a product is created on Developer Center.
* 	__`device_key`__: String type. Unique identifier of the sub-device.	
* 	__`mp_pkgid`__: Integer type.  Request package ID issued by Developer Center.
* 	__`mp_data`__: Dict type. TSL data to be sent. See ***Chapter 2.5.4*** for details. 

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.9.0 and above.

__Example__

```py
ret = quecIot.subDevPhymodelAck("pxxxxM","8EExxxxxxEE8",3,{1:True})
```

---

<span id="subDevHTB">  </span>

## <font color=#A52A1A  >__quecIot.subDevHTB__</font>

This function refreshes the last interaction time between sub-device and gateway.

__Prototype__

```py
quecIot.subDevHTB(product_key, device_key)
```

__Parameter__

* 	__`product_key`__: String type. ProductKey generated when a product is created on Developer Center. 
* 	__`device_key`__: String type. Unique identifier of the sub-device.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.9.0 and above.

__Example__

```py
ret = quecIot.subDevHTB("pxxxxM","8EExxxxxxEE8")
```

---

<span id="subDevSetConnMode">  </span>

## <font color=#A52A1A  >__quecIot.subDevSetConnMode__</font>

This function enables or disables the sub-device to connect to the wireless gateway over TCP/UDP.

__Prototype__

```py
quecIot.subDevSetConnMode(type, mode)
```

__Parameter__

* 	__`type`__: Connection type.
   * __`0`__: TCP connection.
   * __`1`__: UDP connection.
* 	__`mode`__: Enable or Disable the sub-device to connect to the wireless gateway.
   * __`0`__:  Disable
   * __`1`__: Enable

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.subDevSetConnMode(0,1)
```

---

<span id="SetSubDevAuth">  </span>

## <font color=#A52A1A  >__quecIot.SetSubDevAuth__</font>

This function sets the authentication method when the sub-device connects to the wireless gateway. It supports authentication with customized ProjectKey or device ProductKey .

__Prototype__

```py
quecIot.SetSubDevAuth(authMode, authKey)
```

__Parameter__

* 	__`authMode`__: Gateway authentication mode.
   * __`0`__: Disable authentication.
   * __`1`__: Authenticate with ProductKey of the sub-device generated on Developer Center.
   * __`2`__: Use customized ProjectKey authentication.
* 	__`authKey`__: The key used for authentication.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__

This function is supported in QuecThing SDK versions 2.10.0 and above.

__Example__

```py
ret = quecIot.SetSubDevAuth(0,"123xxxxxxxxxx45")
```

---

<br>

<span id="sub-event">  </span>

## __Interaction Events Between Sub-device and Gateway__

| Event Identifier, Event Code |                          Value                          | Description                                                  |                           Remarks                            |
| :--------------------------: | :-----------------------------------------------------: | :----------------------------------------------------------- | :----------------------------------------------------------: |
|           1,10200            |                      uint8_t* type                      | It is a successful device authentication.                    |                                                              |
|           1,10404            |                          NULL                           | Error occurs when Developer Center calls the API.                         |                                                              |
|           1,10422            |                          NULL                           | The device is authenticated (Connection failed).             |                                                              |
|           1,10423            |                          NULL                           | Failed to query product information (Connection failed).     |                                                              |
|           1,10425            |                          NULL                           | Signature verification failed (Connection failed).           |                                                              |
|           1,10427            |                          NULL                           | Hash information is invalid (Connection failed).             |                                                              |
|           1,10434            |                          NULL                           | ClientID does not match password (password contains ClientID related information). |                                                              |
|           1,10431            |                          NULL                           | DK is invalid (Connection failed).                           |                                                              |
|           1,10440            |                          NULL                           | The gateway is not associated with the sub-device.           |                                                              |
|           1,10500            |                          NULL                           | Registration failed (Unknown error in system).               |                                                              |
|           2,10200            |                          NULL                           | Log in successfully.                                         |                                                              |
|           2,10404            |                          NULL                           | Error occurs when Developer Center calls the API.                         |                                                              |
|           2,10430            |                          NULL                           | The DeviceSecret is wrong (Connection failed).               |                                                              |
|           2,10437            |                          NULL                           | DeviceSecret error.                                             |                                                              |
|           2,10438            |                          NULL                           | No device information found.                                 |                                                              |
|           2,10440            |                          NULL                           | The gateway is not associated with the sub-device.           |                                                              |
|           2,10441            |                          NULL                           | Sub-device is connected (Connected successfully).            |                                                              |
|           2,10500            |                          NULL                           | Registration failed (Unknown error in system).               |                                                              |
|           4,10200            |                     NULL/qint32_t*                      | Send transparent transmission data successfully.             | After responding to the callback event, send message txid variable address (qint32_t*) for notification. |
|           4,10210            |                     NULL/qint32_t*                      | Send TSL data successfully.                                  | After responding to the callback event, send message txid variable address (qint32_t*) for notification. |
|           4,10300            |                     NULL/qint32_t*                      | Failed to send transparent transmission data                 | After responding to the callback event, send message txid variable address (qint32_t*) for notification. |
|           4,10310            |                     NULL/qint32_t*                      | Failed to send TSL data                                      | After responding to the callback event, send message txid variable address (qint32_t*) for notification. |
|           5,10200            |                      uint8_t* type                      | The transparent transmission data is received.               |                                                              |
|           5,10210            |                    ttlv pointer type                    | The TSL data is received.                                    |                                                              |
|           5,10211            | uint16_t array type, format: \<pkgId\>,\<id1\>,\<id2\>… | Received the Read Command of TSL.<br/>\<pkgId\>	Request Package ID issued by Developer Center.<br/>\<ID\>	TSL ID. |                                                              |
|           6,10200            |                          NULL                           | Successful logout (successful disconnection from the gateway). |                                                              |
|           8,10428            |                          NULL                           | Data throttling caused by high-frequency messages on the device. |                                                              |
|           8,10429            |                          NULL                           | Exceed the number of activations per device or data throttling caused by the number of daily requests. |                                                              |
|           8,10442            |                          NULL                           | Device is not logged into Developer Center.                               |                                                              |
|           10,10200           |                          NULL                           | Successful de-registration.                                  |                                                              |



