# Quick Access to Developer Center

## __Description__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the cloud through the gateway. To achieve this purpose, the gateway should connect to Developer Center first, and then you need to add the sub-device to the gateway to establish the connection between the sub-device and Developer Center. This chapter guides the user to connect the sub-devices to Developer Center through the gateway with QuecOpen solution.



## __Related AT Commands__

|            Function            | Description                                                  |
| :----------------------------: | :----------------------------------------------------------- |
| Ql_iotConfigSetSubDevEventCB() | Registers the callback function for the interaction event between the sub-device and the gateway. |
|       Ql_iotSubDevConn()       | Connects sub-device to gateway or authenticates sub-device.  |
|     Ql_iotSubDevDisconn()      | Disconnects the sub-device from the gateway.                 |
|  Ql_iotSubDevPassTransSend()   | Sends transparent tranmission data of the sub-device to Developer Center. |
| Ql_iotSubDevPassTransSend_ex() | Sends transparent tranmission data of the sub-device to Developer Center. |
|    Ql_iotSubDevTslReport()     | Sends TSL data of sub-device to Developer Center.                         |
|   Ql_iotSubDevTslReport_ex()   | Sends TSL data of sub-device to Developer Center.                         |
|      Ql_iotSubDevTslAck()      | Replies to TSL data requested by Developer Center to the sub-device.      |
|      Ql_iotSubDevDeauth()      | De-registers the sub-device.                                 |
|       Ql_iotSubDevHTB()        | Refreshes the last interaction time between sub-device and gateway. |

<font color=#999AAA >Note: For details see [API Overview on Gateway and Sub-device](/en/deviceDevelop/subDevice/d_c_sub/QuecOpen/sub-quecopen-api-01.md)。</font>


## __Procedures__

### __1. Log in to Developer Center__

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">__Developer Center__</a>. If you are not registered, you can click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">__Sign Up Now__</a> to sign up.



 

### __2. Create Project__

A project is a collection of products. After a new user logs in, there is no project by default, and operations related to the project or device management can only be performed after a project is created.

### __3. Create Product__

#### __1) Create a Gateway Product__

Creating a gateway product is similar to creating a cellular product. In the option of Device Type, select __Gateway and Sub-device__ and the matching options.

<a data-fancybox title="img" href="/en/deviceDevelop/subDevice/Example-01.png">![img](/en/deviceDevelop/subDevice/Example-01.png)</a>


#### __2) Create a gateway and Sub-device Product__

<a data-fancybox title="img" href="/en/deviceDevelop/subDevice/Example-02.png">![img](/en/deviceDevelop/subDevice/Example-02.png)</a>


* __Device Type__: A direct connected device can directly access the network. a gateway device can help the sub-device to connect Developer Center; a gateway sub-device is a device that relies on the gateway device to connect to the network.
* __Enable/disable cloud access control__: Indicates whether the topological relationship between the sub-device and Developer Center is verified when the data is forwarded to Developer Center through the gateway.
* __Authorize gateway permissions__: Developer Center authorizes the gateway device.  
  *  __Access Network__: The gateway only acts as a agent for the sub-device to access the Internet and forwards data to Developer Center, and does not record any behavior of the sub-device on Developer Center.
  *  __Integrate Product__: The gateway not only forwards the data of the sub-device as an agent, but also records the behavior data of the sub-device on Developer Center.
* __Enable/disable switching gateway dynamically__: Indicates whether the sub-device is allowed to dynamically switch to another gateway after the sub-device is mounted on a gateway. Once created, the option cannot be changed.

### __4. Configure Gateway Device__

__1) Initialization__

Before development, please complete the initialization of the QuecOpen solution of the project. The function below needs to be called before using the networking service. Initialization refers to completing the basic configuration of the module after the module is powered on to connected to the cloud.

```c
/* Initialize QuecThing SDK */
Ql_iotInit();
```

__2) Register Callback Function of Gateway Event__

The event callback function is simply to add a monitoring task to the event source (component). When the gateway device triggers an event, the listener will process the event. The developer only needs to deal with the event notified by the event callback function. 

```c
/* Register QuecThing event callback function */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```

__3) Configure Product Info (Required at first connection)__

QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be adapted according to specific project requirements. When the gateway device sends a bootstrap/authentication, Developer Center authenticates ProductKey and ProductSecret that the bootstrap/ authentication carries. If the bootstrap/authentication is passed, a connection is established and the information required for the device access is delivered.

 ```c
/* Configure product info*/
Ql_iotConfigSetProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh");
 ```


__4) Connect to Quectel Device Management Platform__

The module enables to connect to Developer Center, establishes a safe and stable communication between Developer Center and the device, and realizes device management, monitoring, control and other operations.

```c
/* Enable to connect to Developer Center */
Ql_iotConfigSetConnmode(1);	
```

<font color=#999AAA >Note: After the gateway successfully connects to Developer Center, it starts to forward the sub-device messages to Developer Center. Before that, all messages received from the sub-devices are discarded and not saved.</font>


### __5. Sub-device Operation Procedures__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the cloud through the gateway.
To achieve this purpose, you need to add the sub-device to the gateway to establish the connection between the sub-device and the gateway. 


__1) Register Sub-device Event Callback__

The event callback function is simply to add a monitoring task to the event source (component). When the sub-device triggers an event, the listener will process the event. The developer only needs to deal with the event notified by the event callback function. 

```c
/* Register event callback function */
Ql_iotConfigSetSubDevEventCB(Ql_iotSubEventCB);
```


__2) Authenticate Sub-device__

When connecting to Developer Center for the first time, sub-device authentication is required. Device authentication can be done through Ql_iotSubDevConn(). After the MCU receives the successful authentication event report, the sub-device will automatically connect to Developer Center. The authenticated sub-device can be de-registrated through Ql_iotSubDevDeauth() when it is not connected to Developer Center.

```c
/* Authenticate the sub-device to Developer Center */
Ql_iotSubDevConn("pxxxxm", VnhyxxxxxxxxSTFh, "123xxxx89", NULL, 0, 30);
```

<font color=#999AAA >Note: This function connects the sub-device to the gateway or authenticates the sub-device. The connection/authentication result is notified by the interaction event between the sub-device and the gateway. When subDs is set to NULL, it means to authenticate the sub-device; when subDs is specified, it means to connect the sub-device to the gateway.</font>


### __6. Sub-device Sends Heartbeat Packets__

To maintain the link validity between the sub-device and the gateway, a heartbeat message is maintained between the sub-device and the gateway. The start of the heartbeat depends on the command that the sub-device actively sends the heartbeat packet, so it is necessary to send heartbeat packet regularly according to the __sub-device keepalive time__ configured when the sub-device connects to the gateway.

```c
/* The sub-device sends heartbeat packet through the gateway to Developer Center */
Ql_iotSubDevHTB("pxxxxm","123123123");
```

### __7. TSL Data Interaction of Sub-device__

To realize the remote control of a smart device, the  basic capability is to report the status of the device, receive and execute commands from the cloud. Therefore, data transmission is the core capability of the gateway. The following will take the smart tri-color light sub-device as an example of TSL model interaction.

#### __TSL Uplink Data__

Sub-devices can adopt certain strategies to detect and process data property according to the needs of service scenarios. For example, sub-devices can read data such as smart tri-color light sensor switches through the serial port, and then the sub-devices upload the read data to Developer Center through the gateway.


The TSL data sent is shown in the table below.

|  ID  | Type | Value |
| :--: | :--- | :---- |
|  1   | Bool | true  |
|  2   | Int  | 30    |

The sample code is shown below.

```c
void *ttlvHead = NULL;
Ql_iotTtlvIdAddBool(&ttlvHead, 1, TRUE);
Ql_iotTtlvIdAddInt(&ttlvHead, 2, 30);
Ql_iotSubDevTslReport_ex("pxxxxm","123xxxx89",ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```

<font color=#999AAA >Note: After adding the TSL node and calling it, the developer should call Ql_iotTtlvFree(), which will release a memory block pointed to by the pointer to avoid problems such as memory leaks.</font>

#### __TSL Downlink Data__

__1) Developer Center Issues TSL Service__

On __Device Debug__ page of Developer Center, first click __Property Debug__, and then select the TSL property to be issued, and last click __Send Command__ in the lower left corner to issue the TSL property to the gateway sub-device.

<a data-fancybox title="img" href="/en/deviceDevelop/subDevice/Example-03.png">![img](/en/deviceDevelop/subDevice/Example-03.png)</a>


__2) Sub-device Receives and Processes TSL Data__

When the module receives the TSL data, it will automatically enter the sub-device event processing callback function __Ql_iotSubEventCB__ , and you can perform data response processing according to the corresponding event.

* The sample code for event callback processing is as follows.

  ```c
  void Ql_iotSubEventCB(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk, const void *value, quint32_t valLen)
  {
  	switch (event)
  	{
  	/* Operation of receiving the data */
  	case QIOT_ATEVENT_TYPE_RECV:
  		printf("data recv event,code:%d\r\n",errcode);
  		/* Receive data issued by TSL */
  		if(10210 == errcode)
  		{
  			/* TSL handle */
  			Ql_iotTtlvHandle(value);
  		}
  
  	default:
  		break;
  	}
  }
  ```
