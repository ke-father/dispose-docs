# Quick Access to Developer Center

## __Description__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the cloud through the gateway. To achieve this purpose, the gateway should connect to Developer Center first, and then you need to add the sub-device to the gateway to establish the connection between the sub-device and Developer Center. This chapter guides the user to connect the sub-devices to Developer Center through the gateway with QuecPython solution.



## __Related Functions__

|             Functions             |                         Description                          |
| :-------------------------------: | :----------------------------------------------------------: |
|    quecIot.subDevSetEventCB()     | Registers the callback function for the interaction event between the sub-device and the gateway. |
|       quecIot.subDevConn()        | Connects sub-device to gateway or authenticates sub-device.  |
|      quecIot.subDevDisconn()      |         Disconnects the sub-device from the gateway.         |
|      quecIot.subDevDeauth()       |                 De-registers the sub-device.                 |
|   quecIot.subDevPassTransSend()   | Sends transparent transmission data of the sub-device to Developer Center. |
| quecIot.subDevPassTransSend_ex()  | Sends transparent transmission data of the sub-device to Developer Center. |
|  quecIot.subDevPhymodelReport()   |             Sends TSL data of sub-device to Developer Center.             |
| quecIot.subDevPhymodelReport_ex() |             Sends TSL data of sub-device to Developer Center.             |
|    quecIot.subDevPhymodelAck()    |   Replies to TSL data requested by Developer Center to the sub-device.    |
|        quecIot.subDevHTB()        | Refreshes the last interaction time between sub-device and gateway. |

<font color=#999AAA >Note: For details see [API Overview on Gateway and Sub-device](/deviceDevelop/subDevice/d_c_sub/QuecPython/sub-quecpython-api-01.md).</font>


## __Procedures__

### __1. Log in Developer Center__

Log in <a :href="toDevelopCenter(null, 'en')" target="_blank">__Quecte Device Management Platform__</a>. If you are not registered, you can click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">__Sign Up Now__</a> to sign up.

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
* ___Authorize gateway permissions__: Developer Center authorizes the gateway device.   
  *  __Access Network__: The gateway only acts as a agent for the sub-device to access the Internet and forwards data to Developer Center, and does not record any behavior of the sub-device on Developer Center.
  *  __Integrate Product__: The gateway not only forwards the data of the sub-device as an agent, but also records the behavior data of the sub-device on Developer Center.
* __Enable/disable switching gateway dynamically__: Indicates whether the sub-device is allowed to dynamically switch to another gateway after the sub-device is mounted on a gateway. Once created, the option cannot be changed.

### __4. Configure Gateway Device__

__1) Initialization__

Before development, please complete the initialization of the QuecThing solution of the project. The function below needs to be called before using the networking service. Initialization refers to completing the basic configuration of the module after the module is powered on to connected to the cloud.

```py
""" Initialize QuecThing SDK """
quecIot.init()
```

__2) Register Callback Function of Gateway Event__

The event callback function is simply to add a monitoring task to the event source (component). When the gateway device triggers an event, the listener will process the event. The developer only needs to deal with the event notified by the event callback function. 

```py
""" Register event callback function """
quecIot.setEventCB(self.eventCB)
```

__3) Configure Product Info (Required at first connection)__

QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be adapted according to specific project requirements. When the gateway device sends a bootstrap/authentication, Developer Center authenticates ProductKey and ProductSecret that the bootstrap/authentication carries. If the bootstrap/authentication is passed, a connection is established and the information required for the device access is delivered.

```py
""" Configure product info"""
quecIot.setProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh")
```


__4) Connect to Quectel Device Management Platform__

The module enables to connect to Developer Center, establishes a safe and stable communication between Developer Center and the device, and realizes device management, monitoring, control and other operations.

```py
""" Enable to connect to Developer Center """
quecIot.setConnmode(1)
```

<font color=#999AAA >Note: After the gateway successfully connects to Developer Center, it starts to forward the sub-device messages to Developer Center. Before that, all messages received from the sub-devices are discarded and not saved.</font>


### __5. Sub-device Operation Procedures__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the cloud through the gateway. To achieve this purpose, you need to add the sub-device to the gateway to establish the connection between the sub-device and the gateway. 

__1) Initialization__

Before development, please complete the initialization of the QuecPython solution of the project. The function below needs to be called before using the networking service. Initialization refers to completing the basic configuration of the module after the module is powered on to connected to the cloud.

```py
/* Initialize QuecThing SDK */
Ql_iotInit();
```

__2) Register Sub-device Event Callback__

The event callback function is simply to add a monitoring task to the event source (component). When the sub-device triggers an event, the listener will process the event. The developer only needs to deal with the event notified by the event callback function. 

```py
""" Register Sub-device Event Callback """
quecIot.subDevSetEventCB(subDevEventCB)
```


__3) Authenticate Sub-device__

When connecting to Developer Center for the first time, sub-device authentication is required. Device authentication can be done through quecIot.subDevConn(). After the MCU receives the successful authentication event report, the sub-device will automatically connect to Developer Center. The authenticated sub-device can be de-registrated through quecIot.subDevDeauth() when it is not connected to Developer Center. 

```py
""" Authenticate the sub-device to Developer Center """
quecIot.subDevConn("pxxxxM", "VzY3xxxxxxxxeDE5", "8ExxxxxxxxE9", 0, 120)
"""
```

If the sub-device has been authenticated to Developer Center, DeviceSecret obtained from the authentication needs to be put into the method when calling quecIot.subDevConn().
For example, the DeviceSecret obtained from authentication is "1234" , and the sample code is as follows.

```py
quecIot.subDevConn("pxxxxM", "VzY3xxxxxxxxeDE5", "8ExxxxxxxxE9", "1234", 0, 120)
```


### __6. Sub-device Sends Heartbeat Packets__

To maintain the link validity between the sub-device and the gateway, a heartbeat message is maintained between the sub-device and the gateway. The start of the heartbeat depends on the command that the sub-device actively sends the heartbeat packet, so it is necessary to send heartbeat packet regularly according to the __sub-device keepalive time__ configured when the sub-device connects to the gateway.

```py
def passTranDev_timerCB(self):
    quecIot.subDevHTB("pxxxxM", "8ExxxxxxxxE9")
    ptTimer.stop()
    ptTimer.start(period=60 * 1000,mode=Timer.PERIODIC, callback=self.passTranDev_timerCB)
```

### __7. TSL Data Interaction of Sub-device__

To realize the remote control of a smart device, the  basic capability is to report the status of the device, receive and execute commands from the cloud. Therefore, data transmission is the core capability of the gateway. The following will take the smart tri-color light sub-device as an example of TSL model interaction.

#### __TSL Uplink Data__

Sub-devices can adopt certain strategies to detect and process data property according to the needs of service scenarios, and then the sub-devices upload the read data to Developer Center through the gateway.


The TSL data sent is shown in the table below.

|  ID  | Type      | Value            |
| :--: | :-------- | :--------------- |
|  1   | Bool      | True             |
|  2   | Int       | 123              |
|  3   | Float     | 123.123          |
|  4   | Array     | [1, 2, 3]        |
|  5   | Structure | {6: 1.0, 7: 1.0} |


The sample code of sub-device sending TSL data code to Developer Center is shown below.

```py
def tslDev_connSuccess(self):
    """ Send bool data"""
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {1: True})
    """ Send values """
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {2: 123})
    """ Send floating point data """
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {3: 123.123})
    """ Send an array """
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {4: [1, 2, 3]})
    """ Send a structure """
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {5: {6: 1.0, 7: 1.0}})
    tslTimer = Timer(Timer.tslTimer)
    tslTimer.start(period=60 * 1000,mode=Timer.PERIODIC, callback=self.tslDev_timerCB)
```


#### __TSL Downlink Data__


__1) Developer Center Issues TSL Service__

 On __Device Debug__ page of Developer Center, first click __Service Calls__, and then select the TSL service and service values to be issued, and last click __Send Command__ in the lower left corner to issue the TSL service to the gateway sub-device.



__2) Sub-device Receives and Process TSL Service__

When the sub-device receives the downlink TSL service data, it will automatically enter the sub-device event processing callback function __subDevEventCB__ , and you can perform data response processing according to the corresponding event.

* The sample code for event callback processing is as follows.

  ```py
    def subDevEventCB(self,data):
        print("event:", data)
        event = data[0]
        errcode = data[1]
        if len(data) > 2:
            data = data[2]
        if event == 5:  # The data event is received. You can implement downlink business logic based on this event.
           if errcode == 10210:   # Downlink data is received
               print('Operation of receiving the data')
               model = data
               model_keys = list(model.keys())
               for cmdId in model_keys:
                   value = model.get(cmdId)
                   if 8 == cmdId:    #ID issued by the service    
                    #code
                    print("Model 2") 
                   elif 9 == cmdId:    #ID issued by the service      
                    #code
                    print("Model 2")              
                   else :
                       pass         
  ```



 