# Quick Access to Developer Center

## __Description__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the cloud through the gateway.
To achieve this purpose, you need to add the sub-device to the gateway to establish the connection between the sub-device and the gateway. This chapter guides the user to connect the sub-devices to Developer Center through the gateway with AT commands.



## __Related AT Commands__

|    AT Command     |                         Description                         |
| :---------------: | :---------------------------------------------------------: |
|  AT+QIOTSUBCONN   |                Connect sub-device to gateway                |
| AT+QIOTSUBDISCONN |             Disconnect sub-device from gateway              |
|  AT+QIOTSUBSEND   | Send transparent transmission data of the sub-device to Developer Center |
|   AT+QIOTSUBRD    |      Read transparent transmission data issued by Developer Center       |
|  AT+QIOTSUBTSLTD  |           Send TSL data of the sub-device to Developer Center            |
|  AT+QIOTSUBTSLRD  |                 Read TSL data issued by Developer Center                 |
|   AT+QIOTSUBHTB   |                    Send heartbeat packet                    |
|   AT+QIOTSUBSVR   |                 Configure UDP/TCP listening                 |

<font color=#999AAA >Note: For details see [AT Command Overview on Directly Connected Sub-device](/en/deviceDevelop/subDevice/d_c_sub/AT/sub-at-01.md).</font>


## __Procedures__

### __1. Log in to Developer Center__

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">__Developer Center__</a>. If you are not registered, you can click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">__Sign Up Now__</a> to sign up.


 

### __2. Create Project__

A project is a collection of devices. After a new user logs in, there is no project by default, and operations related to the project can only be performed after a project is created.

### __3. Create Product__

#### __1) Create a Gateway Product__

Creating a gateway product is similar to creating a cellular product. In the option of Device Type, select __Gateway and Sub-device__ and the matching options.

<a data-fancybox title="img" href="/en/deviceDevelop/subDevice/Example-01.png"><img src="/en/deviceDevelop/subDevice/Example-01.png"></a>


#### __2) Create a Gateway and Sub-device Product__

<a data-fancybox title="img" href="/en/deviceDevelop/subDevice/Example-02.png"><img src="/en/deviceDevelop/subDevice/Example-02.png"></a>


* __Device Type__：A direct connected device can directly access the network. a gateway device can help the sub-device to connect Developer Center; a gateway sub-device is a device that relies on the gateway device to connect to the network.
* __Enable/disable cloud access control__: Indicates whether the topological relationship between the sub-device and Developer Center is verified when the data is forwarded to Developer Center through the gateway.
* __Authorize gateway permissions__: Developer Center authorizes the gateway device. 
  *  __Access Network__: The gateway only acts as a agent for the sub-device to access the Internet and forwards data to Developer Center, and does not record any behavior of the sub-device on Developer Center.
  *  __Integrate Product__: The gateway not only forwards the data of the sub-device as an agent, but also records the behavior data of the sub-device on Developer Center.
* __Enable/disable switching gateway dynamically__: Indicates whether the sub-device is allowed to dynamically switch to another gateway after the sub-device is mounted on a gateway. Once created, the option cannot be changed.

### __4. Configure Gateway Device__

#### __1) Configure Product Info (Required at first connection)__

When connecting to Developer Center for the first time, you need to configure the product information through  **AT+QIOTCFG="productinfo"[,\<pk\>,\<ps\>]** by downloading the product key into the device. After passing the device bootstrap/authentication, and the device that passes the bootstrap/authentication will be automatically added to the specific product on Developer Center. 

 ```c
[TX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]OK
 ```


#### __2) Connect to Quectel Device Management Platform__

The MCU can configure Developer Center connection mode through __AT+QIOTREG=\<reg_mode\>__. After sending the command, when the module responds with the following return values, it means the device has successfully connected to Developer Center.

  ```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

[RX]OK

[RX]+QIOTEVT: 2,10200

[RX]+QIOTEVT: 3,10200
  ```


### __5. Sub-device Connects to Gateway__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the cloud through the gateway.
To achieve this purpose, you need to add the sub-device to the gateway to establish the connection between the sub-device and the gateway. The gateway sub-device can connect to the gateway device through __AT+QIOTSUBCONN__.

```c
[TX]AT+QIOTSUBCONN=0,60,"p1126m","RGtwK1BxRmpJSUls","123123123"

[RX]OK
```

__Callback feedback of a successful connection event__

After sending the command to connect to the gateway, when the module responds with the following event callback, it means that the device has been successfully connected to the gateway device.

* Callback of a successful device authentication event 

  ```c
  [RX]+QIOTSUBEVT: "p1126m","123123123",1,10200,"2c8e8a105e5c4c0fa3787deb7e96ede7"
  ```

* Callback of a successful sub-device login event

  ```c
  [RX]+QIOTSUBEVT: "p1126m","123123123",2,10200
  ```

### __6. Sub-device Sends Heartbeat Packets__

To maintain the link validity between the sub-device and the gateway, a heartbeat message is maintained between the sub-device and the gateway. The start of the heartbeat depends on the command that is used for MCU to actively send the heartbeat packet, so it is necessary to execute __AT+QIOTSUBHTB__ to send heartbeat packet regularly according to the __sub-device keepalive time__ configured when the sub-device connects to the gateway.

```c
[TX]AT+QIOTSUBHTB="p1126m","123123123"

[RX]OK
```

### __7. Sub-device TSL Data Interaction__

To realize the remote control of a smart device, the  basic capability is to report the status of the device, receive and execute commands from the cloud. Therefore, data transmission is the core capability of the gateway. The following will take the smart tri-color light sub-device as an example of TSL model interaction.

#### __TSL Uplink Data__

__Send TSL data in JSON format__

The table of sending TSL data is shown below.

|  ID  | Type | Value |
| :--: | :--- | :---- |
|  1   | Bool | true  |
|  2   | Int  | 30    |

Execute __AT+QIOTSUBTSLTD="p1126m","123123123",17__, After __>__  is returned, MCU sends TSL data.

```c
[TX]AT+QIOTSUBTSLTD="p1126m","123123123",17
[RX]> 
[TX]{"1":true,"2":30}
[RX]OK

[RX]+QIOTSUBEVT: "p1126m","123123123",4,10210
```


#### __TSL Downlink Data__

* ##### __Unbuffered Mode(Buffer mode is disabled by default unless otherwise configured.)__

  __1) Developer Center Issues TSL Service__

   On  __Device Debug__ page of Developer Center, first click __Property Debug__, and then select the TSL property to be issued, and last click __Send Command__ in the lower left corner to issue the TSL property to the gateway sub-device.

    <a data-fancybox title="img" href="/en/deviceDevelop/subDevice/Example-03.png"><img src="/en/deviceDevelop/subDevice/Example-03.png"></a>


  __2) The Module Receives the Command and Prints Callback Event and Data to MCU__

  After the module receives the TSL data, it will actively print the callback event __+QIOTSUBEVT: "p1126m","123123123",5,10210,10__ and the issued TSL data __{"1":true} __to the MCU.

  ```c
  [RX]+QIOTSUBEVT: "p1126m","123123123",5,10210,10
  [RX]{"1":true}
  ```

* ##### __Buffer Mode__

  __1) Enable Downlink Data Buffer Mode__
  The MCU can configure downlink data buffer mode through __AT+QIOTCFG="buffer"[,\<buffer_mode\>]__.

  ```c
  [TX]AT+QIOTCFG="buffer",1
  
  [RX]AT+QIOTCFG="buffer",1
  
  [RX]OK
  ```

  __2) Developer Center Issues TSL Service__

  On  __Device Debug__ page of Developer Center, first click __Property Debug__, and then select the TSL property to be issued, and last click __Send Command__ in the lower left corner to issue the TSL property to the gateway sub-device.

    <a data-fancybox title="img" href="/en/deviceDevelop/subDevice/Example-03.png"><img src="/en/deviceDevelop/subDevice/Example-03.png"></a>


  __3) The Module Receives the Command and Prints Callback Event to MCU__

  * Callback event parsing: __+QIOTSUBEVT: "p1126m","123123123",5,10210__

    __p1126m__: ProductKey generated by the gateway sub-device when Developer Center creates a product.

    __123123123__: DeviceKey of the gateway sub-device. It is a unique identifier.

    __5__: A downlink service event is received.

    __10210__: Code returned when the TSL property event is received from Developer Center.

  __4) MCU Queries Data According to Callback Events__

  The TSL data queried by __AT+QIOTSUBTSLRD__ is __{"1":true}__.

  ```c
  [TX]AT+QIOTSUBTSLRD="p1126m","123123123",512
  
  [RX]+QIOTSUBTSLRD: "p1126m","123123123",10,0,0
  [RX]{"1":true}
  
  
  [RX]OK
  ```


  