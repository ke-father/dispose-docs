# Quick Start (QuecOpen)

## __Introduction__

__QuecOpen__ is an application mode with a module as a __main processor__ and can also be used as __slave module__.  __QuecOpen__ solution can __simplify the development process of Internet of Things applications__, __streamline hardware structure design__, and thus __reduce product costs__. __SDK__ of __QuecOpen__ solution adopts modular design to separate core protocol service and hardware abstraction layer, and provides flexible configuration options and multiple compilation modes, which is suitable for different development platforms and environments of different devices.

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-01.png">![img](/en/deviceDevelop/ble/resource/platform-01.png)</a>


## __Operations on Device__

### __1. Preparation__

#### Get SDK

Download module SDK and module documents. 

#### __Chip Information__

This chapter takes __FR801xH__  as an example. Enter [Product page](https://www.freqchip.com/fr801xh) to download chip related information.

#### __Compilation Environment Configuration__

__1) Download and Install Keil__

Get the software from [Keil official page](https://www2.keil.com/mdk5) with version __Keil uVision5 MDK__.

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-02.png">![img](/en/deviceDevelop/ble/resource/platform-02.png)</a>


### __2. QuecThing  Introduction__

QuecThing SDK provides a unified API definition for module adaptation layer, and carries out secondary abstraction on chip basic SDK, shielding complex module technical details, which is convenient for you to get started quickly. Developers only need to implement specific business features according to module capabilities. After compilation and download, you can run QuecThing SDK on the module and connect the device to Developer Center to realize the intellectualization of the device. At the same time, in order to speed up the development efficiency, QuecThing SDK provides built-in and unified communication protocol and APIs for the module application layer to call, so developers can directly use and develop specific features without paying too much attention to the module model.


__1) Logic Structure Diagram__

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-09.png">![img](/en/deviceDevelop/ble/resource/platform-09.png)</a>

__2）Introduction to Part of the Main API__

Quecopen provides cloud APIs such as products, equipment, and services that meet the REST interface specifications to help developers develop applications quickly and meet the needs of scene business.


* Product Configuration API

  | Funtion                      | Description                                                  |
  | :--------------------------- | :----------------------------------------------------------- |
  | Ql_iotInit()                 | Initializes QuecThing, such as server IP and lifetime.       |
  | Ql_iotConfigSetEventCB()     | Registers event callback function by which all events generated during the running of QuecThing are notified. |
  | Ql_iotConfigSetProductinfo() | Configures PK/PS.                                            |
  | Ql_iotConfigSetConnmode()    | Configure the connection mode for the device to connect to Developer Center. |

* BLE API

  | Funtion              | Description                                           |
  | :------------------- | :---------------------------------------------------- |
  | Ql_iotDBindcodeSet() | Sets the BLE PIN code or opens the broadcasting time. |
  | Ql_iotDBindcodeGet() | Gets the PIN code of the current BLE.                 |

* TTLV Data API   <font color=#999AAA >Note: XXX is data type, such as bool and int.</font>

  | Funtion                | Description                                                  |
  | :--------------------- | :----------------------------------------------------------- |
  | Ql_iotTtlvCountGet()   | Gets the number of nodes in the data table.                  |
  | Ql_iotTtlvNodeGet()    | xtracts data nodes from the data table.                      |
  | Ql_iotTtlvFree()       | Releases data table resources after creating TTLV data table or adding TTLV nodes. |
  | Ql_iotTtlvIdAddXXX()   | Adds the node data in XXX type. For example, Ql_iotTtlvIdAddBool(). |
  | Ql_iotTtlvIdGetXXX()   | Gets the specified ID node data in XXX type.                 |
  | Ql_iotTtlvNodeGetXXX() | Gets the node data in XXX type.                              |

* Data Interaction API

  | Funtion                      | Description                                                  |
  | :--------------------------- | :----------------------------------------------------------- |
  | Ql_iotCmdBusPhymodelReport() | Sends TSL data to Developer Center.                                       |
  | Ql_iotCmdBusPhymodelAck()    | Replies to the querying of TSL data from Developer Center.                |
  | Ql_iotCmdSysDevInfoReport()  | Reports module information to Developer Center, such as module model and SIM card number. |
  | Ql_iotCmdBusPassTransSend()  | Sends transparent transmission data to APP.                  |

### __3. Create a Product__

The following example demonstrates how to create a product.

#### __1) Log in  to Developer Center__

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

#### __2) Create a Project__

Create a project named  __“Quectel International Hotel”__  to demonstrate the project management in hotel industry.

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-03.png">![img](/en/deviceDevelop/ble/resource/platform-03.png)</a>

#### __3) Create a Product__

When creating a product, you need to select a data protocol, which includes two data formats:  __TSL__ and __Custom__. The following two data format products are created as examples. You can choose one of them based on actual service scenarios.

<font color=#999AAA >Note：You should keep PK/PS properly which is used for device connection and product deletion.</font>

- __TSL Format Overview__


__TSL__  refers to the digital representation of the device in Developer Center and the entity data model constructed in the cloud. The standard data format defined by Developer Center is __TSL__ , which is the data format of communication between Developer Center and the device. A TSL model is divided into three dimensions: __Property__ , __Service__, __Event__.  After the TSL is saved, that is, the TSL-format product is defined, Developer Center starts to parse, verify and process the data.

- __Custom Format Overview__ 


__Custom__ refers to that whatever the transmitted  content is, the model is only responsible for the data transmission between the device and Developer Center without making any changes to the data content, and Developer Center will not parse the data content. The data in custom format is referred to as transparent transmission data in our documents. Among hardware devices, there may be some devices __whose hardware configuration is low__ or  __which cannot build a TSL model__ to communicate with Developer Center. For such devices, you can select __Custom__ to transparently transmit the raw data to Developer Center.

__a. Create a TSL-format Product__

After creating a project, select the project and click __Create a Product__ to create a product and name the product __“Smart Aromatherapy Diffuser”__ . This example demonstrates the data format of __TSL__ , as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-04.png">![img](/en/deviceDevelop/ble/resource/platform-04.png)</a>

__b.  Create a Custom-format Product__

After creating a project, select the project and click __Create a Product__ to create a product and name the product __“Smart Aromatherapy Diffuser”__ . This example demonstrates the data format of  __Custom__ , as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-05.png">![img](/en/deviceDevelop/ble/resource/platform-05.png)</a>

<font color=#999AAA >Note: Feature definitions will not take effect when you select "Custom" as data format and the standard TSL model of the product category.</font>



### __4. Program Code__

#### __1) Initialize QuecThing__

QuecOpen SDK provides APIs for reading and writing device information and corresponding reference implementation, which can be adapted based on actual scenarios. When the device sends bootstrap authentication operations, Developer Center will authenticate the PK and PS. If the authentication succeeds, Developer Center will issue the required information to the device. Finally, the device carries this information to establish a connection with Developer Center.

```c
/* Initialize QuecThing SDK. */
Ql_iotInit();
/* Register callback function for the device and Developer Center interaction event. */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* Configure product information.*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
/* Configure the connection mode between the device and Developer Center. */
Ql_iotConfigSetConnmode(1);
```

#### __2) Event Callback Function__

In short, event callback function is to add a listening task __Ql_iotEventCB()__ to a event source (component). When  you trigger some event, the listener will take over the event and you can perform different opsration according to different events. The data template sample __Ql_iotMain.c__ has implemented a generic framework for processing data events, and you can develop business logic based on this sample.

The event callback function can judge the event code and then enter the corresponding logic processing program. You only need to specifically process it in __Ql_iotEventCB()__. The event callback function can be divided into eight main events: bootstrap authentication, access, subscription, data sending, data receiving, de-registration, OTA, and Developer Center events. Specific descriptions are as follows:

* Bootstrap Authentication Event

>This event returns the result of device bootstrap authentication. You can check whether the device authentication is successful or not and some error codes of connection failure, which facilitates developers to handle the error according to the corresponding error codes.  

* Access Event

>This event returns whether the device accesses APP successfully. When a device accesses Developer Center, there are often errors such as abnormal BLE connection, which can be handled by developers according to the error codes.

* Data Sending Event

>This event returns the result of data sending, such as sending TSL data, transparent transmission data.

* Data Receiving Event

>This event indicates that the transparent transmission data or downlink TSL data (service call and issuing writable property) or querying TSL (reading operations in device debug) is received. Developers can interact with APP according to this event.

* De-registration Event

>This event indicates successful de-registration (disconnection), that is, the device disconnects from App.

* OTA Event

  >This event returns OTA upgrade operations. For example, if there is a new OTA upgrade task, the developer can determine whether to enable the OTA upgrade according to the configuration in event arguments and the OTA upgrade progress, including "Receive OTA upgrade plan", "Start download", "Package download in progress", "Package download complete", "Package update in progress", "Firmware update complete" and "Firmware update failed".

For example, when the device sends TSL data to Developer Center, the callback function informs {event:4,errcode:10210}, which indicates the device has successfully sent TSL data to Developer Center. Then the developer can process the event under the event callback function, as shown below:

```c
/**************************************************************************
** Function	@brief : Eevnt callback
** Input	@param : event: Main event  
** Input	@param : errcode: Event code (subset)
** Input	@param : value：Property data
** Input	@param : valLen：Property data length
** Output	@retval: NULL
***************************************************************************/
void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
	/* Determine the callback event. */
	switch (event)
	{
		/* Send data. */
		case 4:
		  if(10210 == errcode)
	      {
	      	/* code */
	      	printf("Sending object model succeeded\r\n");
	      }
	 		break;
	  	default:
	        break;
	}
}
```

#### __3)  Develop Application Logic__

##### __a) Define Variable (Optional)__

Structure is a special compound  __data type__ defined by users. Developers can be define it according to the __TSL template__ on Developer Center, which will make the program structure clearer in code project. In addition, you can add the structure type variable to the function in this way as needed.

● __Sample Code__

```cpp
typedef struct
{
    float Odo;      /* Mileage; Unit: Km */
    bool Power;     /* Power switch 0: Off; 1: On */
	int batt;     /*Battery level*/
} CarDevice_type;
```

##### __b) Implementation of Uplink Business Logic__

The device can detect and process data property based on service scenario. For example, the device can read the the physical property of the Two-wheel vehicle into the structure and then upload the variable to the APP in the real time.

● __Sample Code__

```c
	void *ttlvHead = NULL; 
	CarDevice_type  CarDevice;

	/*Interrupt detected that the power switch is on.*/ 
	CarDevice_type  CarDevice.Power = 1;

	/*The current power status of the car device.*/  
	Ql_iotTtlvIdAddBool(&ttlvHead, 1,  CarDevice.Power);

	/*The current battery level of the car device.*/  
	Ql_iotTtlvIdAddInt(&ttlvHead, 1,  CarDevice.batt);

	/*The current mileage.*/  
	Ql_iotTtlvIdAddFloat(&ttlvHead, 1,  CarDevice.Odo);

	/*The first argument is QOS, and when it is equel or greater than 1, there will be event callback response.*/
	Ql_iotCmdBusPhymodelReport(1, ttlvHead);

	Ql_iotTtlvFree(&ttlvHead);
	

```

<font color=#999AAA >Note: After adding or calling TSL nodes, call Ql_iotTtlvFree() that releases a block of memory pointed to by the pointer, thus avoiding problems such as memory leakage. </font>

##### __c) Implementation of Downlink Business Logic__

For the downlink data of the server, __QuecThing SDK__ has parsed TTLV data according to the data template protocol, so developers only need to develop downlink business logic according to different events. TSL is a template structure generated according to the product data template defined in Developer Center, and the defined properties constitute member variables. Enter the property data pointed to by the parameter value. In the downlink data from the server, __QuecThing SDK__  has parsed property data according to the data template protocol. Developers can directly use the parsed data to add business logic in the downlink logic processing function.


● __Sample Code__

~~~c
```c
void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
	/* Determine callback event. */
	switch (event)
	{
	    /* Receive data. */
	    case QIOT_ATEVENT_TYPE_RECV:
	        printf("data recv event,code:%d\r\n",errcode);
	        /* Receive transparent transmission data. */
	        if(10200 == errcode)
	        {
	            printf("pass data:%.*s\r\n",valLen,(char *)value);
	            /* Test: Send the received transparent transmission data back to APP. */
	            Ql_iotCmdBusPassTransSend(1,(unsigned char *)value,valLen);
	        }
	        /* Receive TSL data (service or writable property). */
	        else if(10210 == errcode)
	        {
	            /* Test: Send the received TSL data back to APP. */
	            Ql_iotCmdBusPhymodelReport(1,value);
	            /* Parse the TSL data (You can process the issued service in the function).*/
	            Ql_iotTtlvHandle(value);
	        }
	        /* Receive the request of TSL data (APP reads the data). */
	        else if(10211 == errcode && value)
	        {
	            quint16_t pkgId = *(quint16_t *)value;
	            quint16_t *ids = (quint16_t *)(value+sizeof(quint16_t));
	            void *ttlvHead = NULL;
	            printf("model read event,pkgid:%d\r\n",pkgId);
	            quint32_t i = 0;
	            for(i=0;i<valLen;i++)
	            {
	                quint16_t modelId = ids[i];
	                printf("modelId:%d\r\n",modelId);
	     
	                switch (modelId)
	                {
	               	 case 1:
	                    Ql_iotTtlvIdAddBool(&ttlvHead, modelId, CarDevice.Odo);/* Mileage status. */
	                    break;
	              	  case 2:
	                    Ql_iotTtlvIdAddBool(&ttlvHead, modelId, CarDevice.LockWarn);/* Lock warning status. */
	                    break;
	              	  case 3:
	                   Ql_iotTtlvIdAddBool(&ttlvHead, modelId, CarDevice.Power);/* Power status. */
	                    break;
	              	  default:
	                    break;
	                }
	            }
	            Ql_iotCmdBusPhymodelAck(1,pkgId,ttlvHead);/* Respond to the requested TSL data to Developer Center. */
	           	Ql_iotTtlvFree(&ttlvHead);/* Releases TTLV resources. */
	        }
	        break;
	          	default:
	        break;
	}
}
```
~~~

#### __4) Compile__

Take __FR801xH__ chip as an example to introduce the compilation procedure.

__a) Get SDK__ 

Gets SDK from __[Freqchip SDK release page](https://gitee.com/freqchip/FR801xH-SDK)__ .

__b) Enter Keil__ 

Download KEIL5 and open SDK, no other install package is required.

__c) Compile__ 

Click the compilation button on KEIL5, and *host_app.bin* is generated, that is firmware. 

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-06.png">![img](/en/deviceDevelop/ble/resource/platform-06.png)</a>


### __5. Download__

Take __FR801xH__ chip as an example to introduce how to use burning tool to download programs.

#### __1) Download Burning Tool__

Enter [Freqchip Product page](https://www.freqchip.com/fr801xh) to download the burning tool.

#### __2) Connect__

Connect FR801xH development board to PC with USB cable.

#### __3) Use the Burning Tool__

Open __FR8010H_Download_Tool__, and burn the generated  *host_app.bin*  to the chip,  the operation steps are shown in the figure below.

&emsp;&emsp;__[1]__ Open the serial port tool on PC, then select the proper serial port number and import the DAT file (the bin file to be downloaded.)  Open the serial port and enter the connection waiting status. 


<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-07.png">![img](/en/deviceDevelop/ble/resource/platform-07.png)</a>

&emsp;&emsp;__[2]__ Connect the TX of the serial port tool to PA2 (RX on the chip side), and connect the RX of the serial port tool to PA3 (TX on the chip side) .

&emsp;&emsp;__[3]__ Connect the GND and power supply of the serial port tool to the GND and power supply of the chip. And "已经连接(flash)(Connected)" status is shown up in the tool interface after the handshake is successful, then select "写入所有内容(Writes all contents)" to burn the program into the chip.  

<a data-fancybox title="img" href="/en/deviceDevelop/ble/resource/platform-08.png">![img](/en/deviceDevelop/ble/resource/platform-08.png)</a>

<font color=#999AAA >Note: Ensure that the port is not being occupied during the burning. If it is occupied, cancel the occupation.</font>

 









