#  Program Code

## __1. Initialize QuecThing__

QuecOpen SDK provides APIs for reading and writing device information and corresponding reference implementation, which can be adapted based on actual scenarios. When the device sends bootstrap authentication operations, Developer Center will authenticate the PK and PS. If the authentication succeeds, Developer Center will issue the required information to the device. Finally, the device carries this information to establish a connection with Developer Center.

```c
/* Initialize QuecThing SDK. */
Ql_iotInit();
/* Register callback function for interaction event between the device and Developer Center. */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* Configure product information.*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
/* Configure the connection mode between the device and Developer Center. */
Ql_iotConfigSetConnmode(1);
```

## __2. Event Callback Function__


In short, event callback function is to add a listening task __Ql_iotEventCB()__ to a event source (component). When you trigger some event, the listener will take over the event and you can perform different operations according to different events. The data template sample __Ql_iotMain.c__ has implemented a generic framework for processing data events, and you can develop business logic based on this sample.

The event callback function can judge the event code and then enter the corresponding logic processing program. You only need to specifically process it in __Ql_iotEventCB()__. The event callback function can be divided into eight main events: bootstrap authentication, access, subscription, data sending, data receiving, de-registration, OTA, and Developer Center events. Specific descriptions are as follows:

* Bootstrap Authentication Event

>This event returns the result of device bootstrap authentication. You can check whether the device authentication is successful or not and view some error codes for connection failure, which facilitates developers to handle the errors according to the corresponding error codes.  

* Access Event

>This event returns whether the device accesses Developer Center successfully. When a device accesses Developer Center, there may be errors such as incorrect DeviceKey or abnormal network. Developers can handle these errors according to the error codes.

* Subscription Event

>This event returns whether subscribing the MQTT topic is successful.

* Data Sending Event

>This event returns the result of sending data, such as sending TSL data, transparent transmission data and positioning data.

* Data Receiving Event

>This event indicates that the transparent transmission data or downlink TSL data (service call and issuing writable property) or querying TSL (reading operations in device debug) is received. Developers can interact with Developer Center according to this event.

* De-registration Event

>This event indicates successful de-registration (disconnection), that is, the device disconnects from Developer Center.

* OTA Event

>This event returns OTA upgrade operations. For example, if there is a new OTA upgrade task, the developer can determine whether to enable the OTA upgrade according to the configuration in event arguments and check the OTA upgrade progress, including "There is an upgrade task", "Device starts to download firmware package", "The firmware package is being downloaded", "The firmware package is downloaded successfully", "The firmware package is being upgraded", "The firmware package is upgraded successfully" and "Firmware upgrade failure".

* Developer Center Event

  >This event indicates the Developer Center current limit when the device send s or receives messages, for example,  the number of activations or requests of a device exceeds the requirement.

For example, when the device sends TSL data to Developer Center, the callback function informs {event:4,errcode:10210}, which indicates the device has successfully sent TSL data to Developer Center. Then the developer can process the event under the event callback function, as shown below:

```c
/**************************************************************************
** Function	@brief: Eevnt callback
** Input   	@param : event: Main event 
** Input   	@param : errcode: Event code (subset)
** Input   	@param : value: Property data
** Input   	@param : valLen: Property data length
** Output  	@retval: NULL
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

<font color=#999AAA >Note: See [Events Related to Interaction Between the Device and Developer Center](/en/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-10.md) for details.</font>



## __3. Develop Application Logic__


## __1). Enable BLE__

You need to enable BLE before network provisioning.

* Sample Code
    ```c
	Qhal_IotBLEInit();			/* BLE INIT */
	char buff[2] = {"1", "1"}; 
	quec_ble_debug(2, buff);	/* Open the BLE */
    ```

<font color=#999AAA >Note: Wi-Fi station mode is enabled by default. </font>

### __2) Define Variable (Optional)__

Structure is a special compound  __data type__ defined by users. Developers can be define it according to the __TSL template__ on Developer Center, which will make the program structure clearer in code project. In addition, you can add the structure type variable to the function in this way as needed.

* Sample Code

  ```c
  typedef struct 
  {
      float         OilsCurrentCapacity;  /* The remaining content of  essential oil. Unit: ML.*/
      quint32_t     ReportFrequency;		/* Frequency of regular reporting. Unit: s.*/
      qbool         PowerSwitch;			/* On/Off status 0: Off; 1: On.*/
      qbool         OilsLackWarning;		/* Alert to lack of essential oil. Report the event to Developer Center when the essential oil is insufficient.*/
      quint32_t     WorkPattern;			/* Set working mode.*/
  }AromaDiffuser_type;  
  ```

### __3) Implementation of Uplink Business Logic__


The device can detect and process data property based on service scenario. For example, the device can read the remaining content of essential oil into the structure by connecting the sensor of the smart aromatherapy diffuser through a serial port. The module needs to upload the remaining content of essential oil read at this moment to Developer Center.

* Sample Code

  ```c
  while (1)
  {
      /*Report the remaining content of essential oil every 30 seconds.*/ 
      void *ttlvHead = NULL;   
      /*The remaining content of essential oil*/  
      Ql_iotTtlvIdAddFloat(&ttlvHead, 1, AromaDiffuser_type.OilsCurrentCapacity);
      /*The first argument is QoS, and when it is equel or greater than 1, there will be event callback response.*/
      Ql_iotCmdBusPhymodelReport(1, ttlvHead);
      Ql_iotTtlvFree(&ttlvHead);
      sleep(30); 
  }
  ```

  <font color=#999AAA >Note: After adding or calling TSL nodes, call Ql_iotTtlvFree() that releases a block of memory pointed to by the pointer, thus avoiding problems such as memory leakage.</font>

### __4) Implementation of Downlink Business Logic__

For the downlink data of the server, __QuecThing SDK__ has parsed TTLV data according to the data template protocol, so developers only need to develop downlink business logic according to different events. TSL is a template structure generated according to the product data template defined in Developer Center, and the defined properties constitute member variables. Enter the property data pointed to by the parameter value. In the downlink data from the server, __QuecThing SDK__  has parsed property data according to the data template protocol. Developers can directly use the parsed data to add business logic in the downlink logic processing function.


* Sample Code

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
  	            /* Test: Send the received transparent transmission data back to Developer Center. */
  	            Ql_iotCmdBusPassTransSend(1,(unsigned char *)value,valLen);
  	        }
  	        /* Receive TSL data (service or writable property) issued by Developer Center. */
  	        else if(10210 == errcode)
  	        {
  	            /* Test: Send the received TSL data back to Developer Center. */
  	            Ql_iotCmdBusPhymodelReport(1,value);
  	            /* Parse the TSL data (You can process the issued service in the function).*/
  	            Ql_iotTtlvHandle(value);
  	        }
  	        /* Receive the request of TSL data (Developer Center reads the data). */
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
  	                /* id1:Float id2:int id3:Bool */
  	                switch (modelId)
  	                {
  	               	 case 1:
  	                    Ql_iotTtlvIdAddFloat(&ttlvHead, modelId, AromaDiffuser_type.OilsCurrentCapacity);/* The remaining content of essential oil. Unit: ML.*/
  	                    break;
  	              	  case 2:
  	                    Ql_iotTtlvIdAddInt(&ttlvHead, modelId, AromaDiffuser_type.ReportFrequency);/* Frequency of regular reporting. Unit: s. */
  	                    break;
  	              	  case 3:
  	                   Ql_iotTtlvIdAddBool(&ttlvHead, modelId, AromaDiffuser_type.PowerSwitch);/* On/Off status. */
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


## __4. Compile__

This part takes __FC41D__ module as an example to introduce the compilation procedure.

<font color=#999AAA >Note: The following description is based on the application environment of /mnt/c/Users/mack.zhang/Desktop/.</font>

### __1) Create a Terminal__ 

What we need to do first is to open or create an integrated terminal. The simplest way is to press __Ctrl + Shift+`__  or click __Terminal__ > __Create Terminal__ on tool bar.


### __2) Enter Bash__ 

Bash is a Shell (command-line environment) for Unix and Linux OS and is the default Shell for most Linux distributions. The basic use of Bash is to type commands at the command line, which is straightforward. As an exercise, try issuing  __pwd__ command and press Enter to view the current directory.

Once you enter the command line environment, bash is usually already open. If your Shell is not Bash, you can start Bash by issuing __bash__ command, as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-05.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-05.png)</a>

<font color=#999AAA >Note: To exit Bash, execute __exit__ command.</font>

### __3) Compile__ 

__GNU Make__ is a command tool that interprets the commands in __Makefile__.  When __GNU Make__ executes commands, a __Makefile__ file is required to tell __GNU Make__ how to compile and link program. After entering Bash of the integrated terminal, enter the current directory of  __Makefile__ and input the following content to compile.

* Enter the directory to be compiled
  <a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-06.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-06.png)</a>


* Execute **make clean** to clear the files generated after compilation, such as .cfg, .bin, .map and .log files

  > make clean

* Execute compiling command

  > make bk7231n

 At this time, if the compilation is successful, __an execution file all_2M.1220.bin__ in a hidden folder __.out__ is automatically generated in the current path. 




## __5. Download__

This part takes __FC41D__ module as an example to introduce how to use a burning tool to burn programs into the module.

__1) Download Burning Tool__

Enter __[Download Center](https://www.quectel.com/cn/download_zone)__ , select the specified module and enter corresponding download page, find the burning tool and download it. 

__2) Connect PC to the Device__

Connect your PC to __M_UART_USB__  serial port of the module with a __MicroUSB__  cable.

__3) Use the Burning Tool__

Open the burning tool __Beken Writer__ and write the execution file __all_2M.1220.bin__ into the module, as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-07.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-07.png)</a>

__①__ Select the __"Port"__ and __"Baud Rate"__ used to connect the module.<br>
__②__ Select __BK7231N__ as the "object".<br>
__③__ Click __"View (F5)"__ to open the generated execution file all_2M.1220.bin.<br>
__④__ Click __"Download"__ and click __"Reset"__ of the module to reset the module.

<font color=#999AAA >Note: Ensure that the port is not being occupied during the download. If it is occupied, cancel the occupation.</font>



## __6. QuecOne Network Provisioning__

### Precondition：
Download QuecOne and register an account.
### Procedure:
1. Log in to QuecOne with your account and turn on the Bluetooth and Wi-Fi of your mobile phone. On the "Home" page, click “⊕” in the upper right corner.
   
   <br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-28.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-28.png" style="width: 30%" /></a>

2. Select "Search device nearby" in the pop-up window and enter the "Search for Device" page. Then QuecOne will automatically search for nearby devices, and the searched devices will be displayed in the current page.

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-29.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-29.png" style="width: 30%" /></a>

3. Click the searched device, QUEC_BLE_xxxx, and enter the "Network Configuration" page.

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-30.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-30.png" style="width: 30%" /></a>

4. Enter the Wi-Fi name and password of the current network environment to configure the network (Only 2.4 GHz Wi-Fi band is supported).

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-31.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-31.png" style="width: 30%" /></a>

5. In the "Bind Device" page, QuecOne will automatically recognize and fill in the MAC address. You need to manually enter the device name (In this example, the device is named smart aromatherapy diffuser), and then click "Bind".

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-32.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-32.png" style="width: 30%" /></a>

6. So far, the smart aromatherapy diffuser is successfully added, and it is displayed in the "Device List" on the QuecOne "Home" page .

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-33.png">
<img src="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-AT-33.png" style="width: 30%" /></a>

   At this time, you can see that this device is already online in Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-08.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-08.png)</a>
