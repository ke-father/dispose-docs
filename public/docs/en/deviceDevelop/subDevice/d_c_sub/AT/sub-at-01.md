# __AT Command Overview__

|               AT Command                |                         Description                         |
| :-------------------------------------: | :---------------------------------------------------------: |
|    [AT+QIOTSUBCONN](#AT+QIOTSUBCONN)    |                Connect sub-device to gateway                |
| [AT+QIOTSUBDISCONN](#AT+QIOTSUBDISCONN) |             Disconnect/De-register sub-device from gateway              |
|    [AT+QIOTSUBSEND](#AT+QIOTSUBSEND)    | Send transparent transmission data of the sub-device to Developer Center |
|      [AT+QIOTSUBRD](#AT+QIOTSUBRD)      |      Read transparent transmission data issued by Developer Center       |
|   [AT+QIOTSUBTSLTD](#AT+QIOTSUBTSLTD)   |           Send TSL data of the sub-device to Developer Center            |
|   [AT+QIOTSUBTSLRD](#AT+QIOTSUBTSLRD)   |                 Read TSL data issued by Developer Center                 |
|     [AT+QIOTSUBHTB](#AT+QIOTSUBHTB)     |                    Send heartbeat packet                    |

## **AT Command Introduction**

<span id="AT+QIOTSUBCONN">  </span>

## <font color=#A52A2A  >__AT+QIOTSUBCONN (Connect sub-device to gateway)__</font>

* __Description__: This command connects the sub-device to the gateway.
* __Maximum Response Time__: 300 ms.

### Test Command

__Issue__

```c
AT+QIOTSUBCONN=?
```

__Response__

* Return the parameter range supported to be configured.

  ```c
  +QIOTSUBCONN: <sessionType>,<lifetime>,<subPK>,<sub PS>,<subDK>[,<subDS>]
  
  OK
  ```

### Write Command

__Issue__

```c
AT+QIOTSUBCONN=<sessionType>,<lifetime>,<subPK>,<subPS>,<subDK>[,<subDS>]
```

__Response__

* If the setting is successful:

  ```c
  OK
  ```

* If there is any error:

  ```c
  ERROR
  ```

***


__Parameter__

 * __`<sessionType>`__: Integer type. Encryption method of data interaction of the sub-device.
 * __`<lifetime>`__:  Integer type. The lifetime of the sub-device. Range: 60–65534. Unit: second.
 * __`<subPK>`__ : String type.  ProductKey generated when a product is created on Developer Center.
 * __`<subPS>`__: String type. ProductSecret generated when a product is created on Developer Center.
 * __`<subDK>`__ : String type. Unique identifier of the sub-device.
 * __`<subDS>`__: String type. The device secret issued by Developer Center when the device authenticates to Developer Center.

__NOTE__

This command is supported in SDK versions 2.9.0 and above.

#### Example

__Example 1 (Connect sub-device to gateway.)__

```c
[TX]AT+QIOTSUBCONN=0,60,"p1126m","RGtwxxxxxxxxSUls","123456"

[RX]OK
```

***

<span id="AT+QIOTSUBDISCONN">  </span>

## <font color=#A52A2A  >__AT+QIOTSUBDISCONN (Disconnect/De-register sub-device from gateway)__</font>

* __Description__: This command disconnects/De-register sub-device from the gateway.
* __Maximum Response Time__: 300 ms.

### Test Command

__Issue__

```c
AT+QIOTSUBDISCONN=?
```

__Response__

* Return the parameter range supported to be configured.

  ```c
  +QIOTSUBDISCONN: <subPK>,<subDK>[,<subPS>,<subDS>]
  
  OK
  ```

### Write Command

__Issue__

```c
AT+QIOTSUBDISCONN=<subPK>,<subDK>[,<subPS>,<subDS>]
```

__Response__

* If the setting is successful:

  ```c
  OK
  ```

* If there is any error:

  ```c
  ERROR
  ```

***


__Parameter__

 * __`<subDK>`__: String type. Unique identifier of the sub-device.
 * __`<subPK>`__ : String type. ProductKey generated when a product is created on Developer Center.
 * __`<subDS>`__: String type. The device secret issued by Developer Center when the device authenticates to Developer Center.
 * __`<subPS>`__: String type. ProductSecret generated when a product is created on Developer Center.


__NOTE__

This command is supported in SDK versions 2.9.2 and above.

#### Example

__Example 1 (Disconnect sub-device from gateway.)__

```c
[TX]AT+QIOTSUBDISCONN="p1126m","123456"

[RX]OK
```
__Example 2 (De-register sub-device from gateway.)__

```c
[TX]AT+QIOTSUBDISCONN="p1126m","RGtwxxxxxxxxSUls","123456","1213xxxxxxxx345"

[RX]OK
```
<font color=#999AAA >Note: Once the sub-device deregisters from the gateway, the old subDS is invalid. The sub-device needs to be certificated again and a new subDS will be returned.</font>

***

<span id="AT+QIOTSUBSEND">  </span>

## <font color=#A52A2A  >__AT+QIOTSUBSEND (Send transparent transmission data of the sub-device to Developer Center)__</font>

* __Description__: This command sends transparent transmission data of the sub-device to Developer Center.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.


### Test Command

__Issue__

```c
AT+QIOTSUBSEND=?
```

__Response__

* Return the supported range of legal parameters.

  ```c
  +QIOTSUBSEND: <subPK>,<subDK>,(range of supported <length>s),<data>
  OK
  ```

### Write Command

__Issue__

```c
AT+QIOTSUBSEND=<subPK>,<subDK>,<length>[,<data>]
```

__Response__

* If the optional parameter is omitted and the sub-device has connected to Developer Center:

  ```c	
  >
  ```

  After > is returned, input the data with the length equals to \<length>.

  * If that Package ID is required when a sub-device reports a message to Developer Center is configured:

    ```c	
    +QIOTSUBSEND:<subPK>,<subDK>,<txid>
    
    OK
    ```

  * Otherwise:

    ```c	
    OK
    ```

* If the optional parameter is specified and the sub-device has connected to Developer Center:

  * If that Package ID is required when a sub-device reports a message to Developer Center is configured:

    ```c
    +QIOTSUBSEND:<subPK>,<subDK>,<txid>
    
    OK
    ```

  * Otherwise:

    ```c
    OK
    ```

* If there is any error:

  ```c
  ERROR
  ```

***


__Parameter__

 * __`<subPK>`__ : String type. ProductKey generated when a product is created on Developer Center.
 * __`<subDK>`__ : String type. Unique identifier of the sub-device.
 * __`<length>`__: Integer type. Data length to be sent. Unit: Byte.
  * If \<data\> is specified in the Write Command, the length range depends on the actual return value of the Test Command.
  * If \<data\> is not specified in the Write Command, the length range depends on the module performance.
 * __`<data>`__ : The data to be sent.
   * If \<data\> is specified in the Write Command, the data to be sent can be of string type. 
   * If \<data\> is not specified in the Write Command, the data to be sent can be of any byte stream type.
 * __`<txid>`__: Integer type. Range: 1–65535.

__NOTE__

This command is supported in SDK versions 2.9.0 and above.

#### __Example__

__Example 1 (Send transparent transmission data of the sub-device to Developer Center)__
The sub-device sends transparent transmission data of "123456ABC" to Developer Center:

```c
[TX]AT+QIOTSUBSEND="p1126m","123456",9,"123456ABC"

[RX]OK

[RX]+QIOTSUBEVT: "p1126m","123456",4,10200
```

***

<span id="AT+QIOTSUBRD">  </span>

## <font color=#A52A2A  >__AT+QIOTSUBRD (Read transparent transmission data issued by Developer Center)__</font>

* __Description__: This command reads the transparent transmission data issued by Developer Center to the sub-device.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately. The configurations are saved automatically. 




### Test Command

__Issue__

```c
AT+QIOTSUBRD=?
```

__Response__

* Return the supported range of legal parameters.

  ```c
  +QIOTSUBRD: <subPK>,<subDK>,(range of supported <req_length>s)
  
  OK
  ```

### Read Command

__Issue__

```c
AT+QIOTSUBRD?
```

__Response__

* Return the supported range of legal parameters.

  ```c
  +QIOTSUBRD: <subPK>,<subDK>,<remain_pieces> 
  +QIOTSUBRD: <subPK>,<subDK>,<remain_pieces> 
  ...
  
  OK
  ```

### Write Command

__Issue__

```c
AT+QIOTSUBRD=<subPK>,<subDK> [,<req_length>]
```

__Response__

* If the optional parameter is omitted, it indicates querying the current cache transparent transmission data length of the sub-device.

  ```c
  +QIOTSUBRD: <subPK>,<subDK>,<remain_pieces>
  
  OK
  ```

* If the optional parameter is specified, it indicates reading the current sub-device cache data.

  ```c
  +QIOTSUBRD: <subPK>,<subDK>,<cur_len>,<remain_len>,< remain_pieces><CR><LF>
  <data>
  
  OK
  ```

* If there is any error:

  ```c
  ERROR
  ```

***


__Parameter__

 * __`<subDK>`__: String type. Unique identifier of the sub-device.
 * __`<subPK>`__ : String type. ProductKey generated when a product is created on Developer Center.
 * __`<req_length>`__: Integer type. Length of data to be read. Length range is subject to the value returned by the Test Command.
 * __`<cur_len>`__: Integer type. Length of data actually read.
 * __`<data>`__ :  Byte stream type. Data actually read.
 * __`<remain_len>`__: Integer type. Length of unread data remaining in the current data packet. Unit: bytes.
 * __`<remain_pieces>`__ : Integer type. The number of remaining data package.



__NOTE__

This command is supported in SDK versions 2.9.0 and above.

#### Example

__Example 1 (The sub-device reads the transparent transmission data in buffer mode.)__

i. Developer Center issues transparent transmission data.
ii. The sub-device receives the transparent transmission data and prints the callback event to the serial port.

```c
[RX]+QIOTSUBEVT: "p1126C","123456",5,10200
```

iii. After the sends the Read Command __AT+QIOTSUBRD="p1126C","12345678",512__  actively, the transparent transmission data actually queried is "123456ABC".

```c
[TX]AT+QIOTSUBRD="p1126C","123456",512

[RX]+QIOTSUBRD: "p1126C","123456",9,0,2
[RX]123456ABC

OK
```

__Example 2 (The sub-device reads the transparent transmission data in unbuffered mode.)__

i. Developer Center issues transparent transmission data.  
ii. The sub-device receives the transparent transmission data and prints the callback event and the transparent transmission data to the serial port.

```c
[RX]+QIOTSUBEVT: "p1126C","123456",5,10200,9
123456ABC
```

***

<span id="AT+QIOTSUBTSLTD">  </span>

## <font color=#A52A2A  >__AT+QIOTSUBTSLTD (Send TSL data of the sub-device to Developer Center)__</font>

* __Description__: This command sends TSL data of the sub-device to Developer Center.  If \<pkgID> is specified in Write Command, this command responds to Developer Center request. if \<pkgID> is omitted in Write Command, this command sends data to Developer Center. If the data is sent out, +QIOTSUBEVT: \<subPK\>,\<subDK\>,4,10210 will be reported to indicate that TSL data is sent out successfully.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.



### Test Command

__Issue__

```c
AT+QIOTSUBTSLTD=?
```

__Response__

* Return the supported range of legal parameters.

  ```c
  +QIOTSUBTSLTD:<subPK>,<subDK>,<length>,(range of supported <pkgID>s)
  
  OK
  ```

### Write Command

__Issue__

```c
AT+QIOTSUBTSLTD=<subPK>,<subDK>,<length>[,<pkgID>]
```

__Response__

```c
>
```

After > is returned, input the byte stream data with the length equals to \<length>.

* If the optional parameter is specified, this command responds to Developer Center request. 

  ```c
  OK
  ```

* f the optional parameter is omitted, this command sends data to Developer Center.

  * If that Package ID is required when a sub-device reports a message to Developer Center is configured:

    ```c
    +QIOTSUBTSLTD:<subPK>,<subDK>,<txid>
    
    OK
    ```

  * Otherwise:

    ```c
    OK	
    ```

* If there is any error:

  ```c
  ERROR
  ```


__Parameter__

 * __`<subPK>`__: String type. ProductKey generated when a product is created on Developer Center.
 * __`<subDK>`__: String type. Unique identifier of the sub-device.
 * __`<length>`__: Integer type. Length of the data to be sent. Length range depends on the performance of the specific module model.
 * __`<pkgID>`__ : Integer type. Request Package ID. Range: 1–65534. This parameter is required only when the device responds to the Developer Center request.
 * __`<txid>`__: Integer type. Uplink message ID. Range: 1–65535. 


__NOTE__

This command is supported in SDK versions 2.9.0 and above.

#### Example

__Example 1 (Send TSL data)__

The TSL data to be sent is shown below.
ID: 1. Data type: Bool. Value: true.   ID: 2. Data type: int. Value: 30.

```c
[TX]AT+QIOTSUBTSLTD="p1126m","123456",17
[RX]> 
[TX]{"1":true,"2":30}
[RX]OK

[RX]+QIOTSUBEVT: "p1126m","123456",4,10210
```

***

<span id="AT+QIOTSUBTSLRD">  </span>

## <font color=#A52A2A  >__AT+QIOTSUBTSLRD (Read TSL data issued by Developer Center)__</font>

* __Description__: This command reads TSL data issued by Developer Center. 
* __Maximum Response Time__ : 300 ms.
* __Characteristics__: The command takes effect immediately.



### Test Command

__Issue__

```c
AT+QIOTSUBTSLRD=?
```

__Response__

* Return the supported range of legal parameters.

  ```c
  +QIOTSUBTSLRD:<subPK>,<subDK>,(range of supported <req_length>s)
  
  OK
  ```

### Read Command

__Issue__

```c
AT+QIOTSUBTSLRD?
```

__Response__

* Return the supported range of legal parameters.

  ```c
  +QIOTSUBTSLRD:<subPK>,<subDK>,<remain_pieces> 
  +QIOTSUBTSLRD:<subPK>,<subDK>,<remain_pieces>
  ...
  
  OK
  ```

### Write Command

__Issue__

```c
AT+QIOTSUBTSLRD=<subPK>,<subD K>[,<req_length>]
```

__Response__

* If the optional parameter is omitted, query the TSL data length cached by the current sub-device:

  ```c
  +QIOTSUBTSLRD: <subPK>,<subDK>,<remain_pieces>
  
  OK
  ```

* If the optional parameter is specified, read the TSL data cached by the current sub-device:

  ```c
  +QIOTSUBTSLRD: <subPK>,<subDK>,<cur_len>,<remain_l en>,<remain_pieces><CR><LF>
  <data>
  
  OK
  ```

* If there is any error:

  ```c
  ERROR
  ```

***


__Parameter__

 * __`<subDK>`__: String type. Unique identifier of the sub-device.
 * __`<subPK>`__: String type. ProductKey generated when a product is created on Developer Center.
 * __`<req_length>`__: Integer type. Length of data to be read. Length range is subject to the value returned by the Test Command.
 * __`<cur_len>`__: Integer type. Integer type. Length of data actually read.
 * __`<data>`__: Byte stream type. TSL Data actually read.
 * __`<remain_len>`__: Integer type. Length of unread data remaining in the current data packet. Unit: bytes.
 * __`<remain_pieces>`__: Integer type. The number of remaining data package.

__NOTE__

This command is supported in SDK versions 2.9.0 and above.

#### Example

__Example 1 (The sub-device reads TSL data in buffer mode.)__

i. Developer Center issues TSL data.  
ii. The module receives the issued command and prints the callback event and data to the MCU

```c
[RX]+QIOTSUBEVT: "p1126C","123456",5,10200
```

iii. After the module receives TSL data, it actively prints the callback event +QIOTSUBEVT: “p1126m”,“123123123”,5,10210,10 and the TSL data issued by Developer Center to the MCU.

```c
[TX]AT+QIOTSUBTSLRD="p1126m","123456",512

[RX]+QIOTSUBEVT: "p1126m","123456",5,10210,10
{"1":true}

[RX]OK
```

__Example 2 (The sub-device prints TSL data in unbuffered mode.)__

i. Developer Center issues TSL data.  
ii. After the sub-device receives TSL data, it actively prints the callback event and data to the serial port.

```c
[RX]+QIOTSUBEVT: "p1126m","123456",5,10210,10
[RX]{"1":true}
```

***


<span id="AT+QIOTSUBHTB">  </span>

## <font color=#A52A2A  >__AT+QIOTSUBHTB (Send heartbeat packet)__</font>

* __Description__: This command sends heartbeat packet to refresh the last interaction time between the sub-device and the gateway.
* __Maximum Response Time__ : 300 ms.
* __Characteristics__: The command takes effect immediately.




### Test Command

__Issue__

```c
AT+QIOTSUBHTB=?
```

__Response__

* Return the supported range of legal parameters.

  ```c
  +QIOTSUBHTB:<subPK>,<subDK>
  
  OK
  ```

### Write Command

__Issue__

```c
AT+QIOTSUBHTB=<subPK>,<subDK>
```

__Response__



* If the setting is successful:

  ```c
  OK
  ```

* If there is any error:

  ```c
  ERROR
  ```

***


__Parameter__

 * __`<subPK>`__: String type. ProductKey generated when a product is created on Developer Center.
 * __`<subDK>`__: String type. Unique identifier of the sub-device.


__NOTE__

This command is supported in SDK versions 2.9.0 and above.

#### __Example__

__Example 1 (The sub-device sends the heartbeat packet)__

```c
[TX]AT+QIOTSUBHTB="p1126m","12345678"

[RX]OK
```


## __Events related to the Access of Sub-devices to Developer Center__

##  __Callback Event Format:__

> +QIOTSUBEVT: \<subPK\>,\<subDK\>,\<event_type\>,\<event_code\>,[,\<data\>]]

##  __Event Category Analysis：__

 * __`<event_type>`__: Integer type. Event identifier. 
  * __`1`__: Authentication Event
  * __`2`__: Access Event
  * __`4`__: Data Sending Event
  * __`5`__: Data Receiving Event
  * __`6`__: Logout Event
  * __`8`__: Developer Center Event 
  * __`10`__: Deregistration Event
* __`<event_code>`__: Integer type. Event code.
* __`<data>`__: Data content carried by the event.

##  __Event return code<event_type><event_code>：__

## __1: Authentication Event__

| Return Code |                         Description                          |
| :---------: | :----------------------------------------------------------: |
|   1,10200   | URC is followed by \<subDS>, and it is a successful device authentication. |
|   1,10404   |             Error occurs when Developer Center calls the API.             |
|   1,10422   |       The device is authenticated (Connection failed).       |
|   1,10423   |   Failed to query product information (Connection failed).   |
|   1,10425   |      Signature verification failed (Connection failed).      |
|   1,10427   |       Hash information is invalid (Connection failed).       |
|   1,10431   |              DK is invalid (Connection failed).              |
|   1,10500   |        Registration failed (Unknown error in system).        |
|   1,10440   |      The gateway is not associated with the sub-device.      |


## __2: Access Event__

| Return Code |                         Description                          |
| :---------: | :----------------------------------------------------------: |
|   2,10200   |                     Log in successfully.                     |
|   2,10404   |             Error occurs when Developer Center calls the API.             |
|   2,10430   |        The DeviceSecret is wrong (Connection failed).        |
|   2,10431   |         The device is disabled (Connection failed).          |
|   2,10433   |                       Flag is illegal.                       |
|   2,10434   | ClientID does not match password (password contains ClientID related information). |
|   2,10437   |                       DeviceSecret error.                       |
|   2,10438   |                 No device information found.                 |
|   2,10500   |        Registration failed (Unknown error in system).        |
|   2,10440   |      The gateway is not associated with the sub-device.      |
|   2,10441   |      Sub-device is connected (Connected successfully).       |

## __4: Data Sending Event__

| Return Code |                         Description                          |                   Remarks                   |
| :---------: | :----------------------------------------------------------: | :-----------------------------------------: |
|   4,10200   | Send transparent transmission data [,\<txid\>] successfully. | txid is returned once txid_mode is enabled. |
|   4,10210   |           Send TSL data [,\<txid\>] successfully.            | txid is returned once txid_mode is enabled. |
|   4,10300   |  Failed to send transparent transmission data [,\<txid\>].   | txid is returned once txid_mode is enabled. |
|   4,10310   |             Failed to send TSL data [,\<txid\>].             | txid is returned once txid_mode is enabled. |

##   __5: Data Receiving Event__

| Return Code |                         Description                          |                           Remarks                            |
| :---------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|   5,10200   | URC is followed by [,\<length>\<\r\n>\<data>] to display the transparent transmission data issued by Developer Center. | The received downlink data is issued directly if buffer mode is disabled. |
|   5,10210   | URC is followed by [,\<length>\<\r\n>\<data>] to display the TSL data issued by Developer Center. | The received downlink data is issued directly if buffer mode is disabled. |
|   5,10211   | URC is followed by \<pkgId>,\<ID1>[,\<ID2>...] to indicate that TSL read command issued by Developer Center is received.<br/>\<pkgId>	Request Package ID issued by Developer Center.<br/>\<ID>	TSL ID. |                                                              |
|   5,10473   | Failed to receive data whose length exceeds the device cache limit. |                                                              |
|   5,10428   |      Traffic limiting caused by excessive device cache.      |                                                              |


##   __6: Logout Event__

| Return Code |                         Description                          |
| :---------: | :----------------------------------------------------------: |
|   6,10200   | Successful logout (successful disconnection from the gateway). |

##  __8: Developer Center Event__

| Return Code |                         Description                          |
| :---------: | :----------------------------------------------------------: |
|   8,10428   | Data throttling caused by high-frequency messages on the device. |
|   8,10429   | Exceed the number of activations per device or data throttling caused by the number of daily requests. |
|   8,10442   |                Device is not logged into Developer Center.                |


## __10: De-registration Event__

| Return Code |         Description         |
| :---------: | :-------------------------: |
|  10,10200   | Successful de-registration. |