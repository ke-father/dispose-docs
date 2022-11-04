# User Manual

## **Program Introduction**

### **Introduction**

QthTools-MCU Simulator is a simulation assistant that simulates the communication between the main control MCU and Quectel module. It has powerful features such as connecting to Developer Center, data interaction with AT commands, TSL, transparent transmission,OTA, and gateway sub-device and so on. The features of log debugging and log analysis can effectively improve the user's functional understanding of the module or App, which facilitates verification and debugging of the module or App capabilities, thereby improving the development and acceptance efficiency of the overall solution.

### **Framework**

The name of the tool is Quectel MCU  Simulator Tool  and the version number is 2.0.0.

* **Output Interface**  
  The log output interface is the log output after the tool is connected to the SDK or module and displayed on the interface, so that users can view related information.   
  The log analysis interface parses the AT commands in the log output interface to help users quickly understand the format and meaning of the AT commands.  
  There are two features in the log output settings, "**Hex**" and "**Disable Window Display**". The "**Hex**" button is used to output the data in hexadecimal format in the log.
* **Feature Bar**  
  The feature bar  provides eight types of feature of "**Debug**", "**Configure**", "**TSL**", "**Transparent Transmission**", "**OTA**","**Info**", "**LAN**" and "**Gateway Sub-device**". See ***Chapters 2–10*** for specific features.
* **Status Bar**  
  The status bar can display information of some operations and operation results. It  displays the operation information that does not affect the overall operation of the program. For important information, it will be prompted by a pop-up window.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-1.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-1.png"></a>




## **Debug Interface Introduction**

Switch to "**Debug**" interface as.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-2.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-2.png"></a>




### **Log Window**

if you need to see more log information, hold down the bottom line of the box to stretch the display window.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-3.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-3.png"></a>




#### **Log Display**

<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-4.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-4.png"></a>


**\<TX>** : Data sent from the MCU simulator tool;  
**\<RX>**: Data that the MCU simulator tool received;  
**Timestamp Display** : It can be enabled or disabled through "Timestamp Display" in "**Debug**“.  
**Hex** : The hexadecimal part of the received data can be displayed 
**Disable Window Display**: Window display can be disabled. For example if operations over SOTA are not necessarily displayed in the window,  you can use this feature to prevent the previous command from being overwritten. Currently, the window only displays the records of the last 1000 lines.

#### **Log Analysis**

<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-5.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-5.png"></a>


By clicking the corresponding log in the log display window, the data of AT commands in the log will be parsed.
Currently, only AT commands related to Developer Center are supported for parsing, and other AT commands are not processed.

#### **Note**

If you need to know the content of the log display window during debugging, you can move the mouse to the lower border of the log display window, hold down the left button to pull down, and then pull up to restore.

### **Port Configuration**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-6.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-6.png"></a>





Select the corresponding serial port, baud rate, data bit, stop bit and other parameters.

**Enable the serial port**: After the serial port is enabled, its configuration cannot be modified. If you need to modify the configuration, please disable the serial port first.  
**Disable the serial port**: If it is currently connected to Developer Center, after the serial port is disabled, it will be disconnected from Developer Center.

### **TCP Configuration**

#### **Select Corresponding Remote IP, Port Number, Local IP and Local Port No.**

The format of the remote IP was restricted. Only numbers and '**.**' can be entered. At the same time, it needs to conform to the IP format. Click the '**x**' on the right of the box to delete the IP.

#### **Enable TCP**

**Reconnect**: After this feature is selected, if the TCP connection is unsuccessful, it will retry the connection 3 times. 

#### **Disable TCP**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-7.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-7.png"></a>




### **Running Configuration**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-8.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-8.png"></a>




#### **Connect Mode**

Click "**Start connection**" to activate the connect mode to connect to the features on Developer Center.
**Register manually**: Manually connect to IoT.
**Auto-register**: Actively connect to IoT when there is network available.

#### **Current Status**

Current connect mode of Developer Center：

* Uninitialized
* Initialized
* Authenticating
* Authentication succeeded
* Authentication failed
* Registering
* Registration succeeded
* Waiting to subscribe
* Registration failed
* Subscribed
* Data can be sent
* Subscription failed
* Logging out
* Logout succeeded
* Logout failed

**Start connection**: First please enable the serial port. After clicking "**Start Connection**", the module will connect to Developer Center with the selected product configuration information.
**Stop connection** : First please enable the serial port. After clicking "**Stop Connection**", the module will disconnect from Developer Center.

### **Log Configuration**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-9.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-9.png"></a>




#### **Timestamp Display**

After enabling timestamp display, a timestamp will be added to the logs sent and received from the serial port.

#### **Clear Log**

After clicking the "**Clear Log**" button, the logs of the log display window will be cleared.

#### **Auto-save**

First click the "**Select file**" button, and then open the "**Auto-save**" option, the subsequent data in the log display window will be automatically saved to the selected file.

#### **Level Setting in Debug**

The levels are set to five categories: "debug", "info", "warning", "errno", and "dump" to complete the control of debug log output. The dump file is newly created or covered every time the program is started, and the previous records are not saved.

#### **Clear Log**

Click the button to clear the debugging logs.

### **Send AT Command**

<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-10.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-10.png"></a>



It is used to send AT commands.  
The AT command input box has a history record. 
It can be completed through the prompt box when you input part of the AT command. 


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-11.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-11.png"></a>



## **Configure Interface Introduction**

Switch to “Configure” interface.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-12.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-12.png"></a>




### **Add Product Configuration Info**

#### **Switch to “Configure” Interface, Click "+"**

Click to display the pop-up window to show the corresponding features.

#### **Enter Product Configurations as Needed in the Pop-up Window**

1. In the product configurations page,  "data type“ is "transparent transmission data".


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-13.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-13.png"></a>



<font color=#999AAA >Note: Configure the corresponding ProductKey and ProductSecret.</font>



1. In the product configurations page, "data type“ is "transparent transmission data".


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-14.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-14.png"></a>


<font color=#999AAA >Note: Import Developer Center or a customized json file. if the json file exceeds 1M or is illegal, an error will occur.</font>


1. Click “**OK**” button to save the product configurations. Then the configured information will be displayed in ”product configurations“ page as shown in the figure below.

<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-15.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-15.png"></a>




### **Delete a Product Configuration**

1. Switch to "configuration page" interface, and use the cursor to select the configuration to be deleted.
2. Click the "**-**" button to delete the selected configuration.
3. A pop-up window prompts: "Are you sure you want to delete the configuration file?"


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-16.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-16.png"></a>




4. Click "**Yes**" to delete, and click "**No**" to cancel.

### Change Product Configurations**

1. Switch to "configuration page" interface, and select the configurations to be used.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-17.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-17.png"></a>


**Two protocols are supported to connect the server** : MQTT and lwM2M.   
**Server Environment**:  "production environment(mqtt)" which supports MQTT only, "production environment(coap)" which supports MQTT only, and "production environment(http)" which supports HTTP only,. For other environment, please add through "customization". 
**lifeTime**:  The range is 1–65535.  
**contextId**:  The range is 0–99.
**TSL type**: TTLV and JSON.  
**Encryption mode**: Whether to add TLS encryption service on the basis of MQTT or HTTP.  
**DKDS**:  Change device IMEI and device key.  


## **TSL Interface Introduction**

Switch to “TSL” interface.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-18.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-18.png"></a>



### **TSL Model List**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-19.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-19.png"></a>




1. The TSL model list contains 3 categories, property, service and event class.
2. The corresponding TSL model list is generated according to the product configurations input by the user. If the selected data interaction method is transparent transmission or the imported json file is abnormal, the list will be empty.

### **Send**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-20.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-20.png"></a>





#### **Mode(QoS)**

* 0(Send once)
* 1(Send multiple times to ensure that the server receives at most once)
* 2(Send multiple times to ensure that the server receives it at least once)

#### **Send TSL Data**

Send TSL data by selecting the data in the TSL list on the right side, supporting single/multiple/all selection. You can click the button in the upper right corner to select "Direct send"/"Transparent transmission".

* **Single selection** : Select a single TSL ID directly.
* **Multiple selection**: Long press "**CRTL**" and select the multiple TSL IDs to be sent at the same time.
* **All selection** : Long press "**CTRL**" + "**A**".


#### **Send Reply Data**

Send reply data by selecting the data in the TSL list on the right side, supporting single/multiple/all selection. 

* **PkgId** : Developer Center reads the latest PkgId of the TSL ID, or you can manually modify and input PkgId. 
* **Single selection**: Select a single TSL ID directly.
* **Multiple selection**: Long press "**CRTL**" and select the multiple TSL IDs to be sent at the same time.
* **All selection**: Long press "**CTRL**" + "**A**".

#### **Auto-reply**

When this option is turned on, after Developer Center reads the TSL ID, the module will automatically respond to the corresponding TSL ID to Developer Center.

### **Read**

It is only valid when "cache mode"  is selected as "Enable cache mode" in the "Product configurations", and when "Disable cache mode" is selected, the received Developer Center data will be automatically updated to the TSL list on the right. Click the button in the upper right corner  of "Read" to select "Read TSL Data"/"Get Maximum Read Value".


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-21.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-21.png"></a>




* **Read TSL Data**: The TSL data is read according to the set number of read bytes, and the read data is updated to the TSL list on the right of the interface.
* **Remaining Bytes** : The number of bytes left in the current data group.
* **Number of Remaining Data Groups**: The number of remaining cached data groups.


### **Regular Report**

After this option is enabled, the tool will report regularly according to the set reporting frequency and the ID selected in the TSL ID list on the right of the interface.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-22.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-22.png"></a>




* **Regular report frequency** :Unit: millisecond. Minimum reporting interval: 1 ms. Maximum reporting interval: 600 s.

## **Transparent Transmission Interface Introduction**

Switch to “Transparent transmission” interface.

<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-23.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-23.png"></a>




### **Send**

Move the mouse to the input box, it prompts that only 4096 bytes can be input at most, and the maximum input is also limited to 4096 bytes internally.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-24.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-24.png"></a>




* **Send in Hex**: This option can choose whether to report a string or a hexadecimal byte stream.
* **Mode(Qos)** : Default calue: 0. Other supported values are 1, 2.
* **Sending Method**: You can select "Transparent Transmission"/"Direct Send" via "**﹀**" in the lower right corner.

### **Read**

It is only valid when "cache mode"  is selected as "Enable cache mode" in the "Product configurations", and when "Disable cache mode" is selected, the received Developer Center data will be automatically updated to the transparent transmission data display window.  


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-25.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-25.png"></a>




* **Read Bytes** : Read transparent transmission data according to the set number of read bytes, and update the read data to the transparent transmission data display window above it.
* **Remaining Bytes**: The number of bytes left in the current data group.
* **Number of Remaining Data Groups**: The number of remaining cached data groups.
* **Sending Method** :You can select ""Read Data"/"Get Maximum Read Value" via "**﹀**" in the lower right corner.

## **OTA Interface Introduction**

Switch to “OTA” interface.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-26.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-26.png"></a>




### **MQTT**

#### **OTA Interaction**

OTA interaction is used for MQTT-OTA confirmation when the module receives the upgrade task issued by Developer Center.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-27.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-27.png"></a>





1. OTA Request
   Click "**OTA Request**" to get the current plan matching Developer Center.

<font color=#999AAA >Note: Click the "**Additional Information Request**" checkbox in front of "**OTA Request**" to attach the sha256 firmware calibration information to the OTA request.</font>

1. Refuse to upgrade 
   Reject the currently issued upgrade task.

2. Confirm to upgrade
   Accept the currently issued upgrade task.

3. Download the next block of data
   During MQTT-SOTA, when the MQTT-SOTA firmware is too large to be downloaded by split packets, after the split packet is received, the module will start to download the next package of data.

4. Report updating status
   During MQTT-SOTA, after the firmware download is completed and the verification is successful, the firmware updating status are reported to Developer Center when the firmware update is performed.

5. Read SOTA sharding data


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-28.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-28.png"></a>




* **Starting address**: The file offset address to read.
* **Read length** : The read file length.
* **Storage path** :Select the storage path of the data to be read in the SOTA firmware.
* **Auto**: After "**Auto**" is enabled, you only need to click "**Read Data**" once, and then the download process will be automatically completed and calibrate MD5.

#### **OTA State**

<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-29.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-29.png"></a>




* **Status**: Current MQTT-OTA status
* **Current block address**:  The starting address of the firmware block currently downloaded by the module.
* **Current block size**: The size of the firmware block currently downloaded by the module.
* **File size**: The file size of the module currently downloaded
* **MD5**: The file MD5 currently downloaded by the module.

### **HTTP-OTA**

You needs to configure "power“, "Version"(the version is confirmed by default), "URL" and the product information, and then click "**OTA request** ".



<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-31.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-31.png"></a>





### **Set MCU Version Number**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-32.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-32.png"></a>





1. **Get list**  
   Get all MCU numbers and version numbers currently saved by the module, and update them to the list below.
2. **Get version number**  
   Select "MCU number" below, and then click "Get version number". The obtained version number will be updated to the list below.
3. **Set version number**  
   Select "MCU number" below, and modify the corresponding MCU version number in the list. After clicking "Set version number", the selected MCU number and version number will be updated to the module.
4. **Add MCU**  
   Click the "**+**"  button to add an MCU number and an MCU version number to the list and edit them.
5. **Delete MCU**  
   Select an MCU in the list and click the "**-**" button to delete the selected MCU from the list, and also the corresponding MCU inside the module are deleted.

## **Info Interface Introduction**

Switch to “Info ” interface.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-33.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-33.png"></a>




### **Get Info**

After clicking "Get Info", the acquired module info will be displayed in the "Log analysis interface" on the upper right of the window.

### **Report to Developer Center**

After clicking "**Report to Developer Center**", the module will report the current module information to Developer Center.

### **Location Info**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-34.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-34.png"></a>




#### **Test Module Built-in Positioning Command**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-35.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-35.png"></a>




The debug info is displayed in the window above.

#### **Query Module Built-in Positioning Types**

The supported positioning types will be displayed in the "**Get built-in location information**" interface.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-36.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-36.png"></a>




#### **Get Module Built-in Positioning Data**

Click an item below "**Item**", and then click "**Get module built-in positioning data**", the corresponding information will be displayed in the "**Data**" column.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-37.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-37.png"></a>




Then click the "**data**" column, the following window will pop up, showing the specific content.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-38.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-38.png"></a>




#### **Report Module Built-in Positioning Data**

Click an item below "**item**", and then click "**Report module built-in positioning data**" to complete the report.

#### **Test Positioning Command External to Module**

#### **+**

Click "**+**" to add a new column in the "Get external positioning information" column, and click "item" to edit.

<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-39.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-39.png"></a>





#### **-**

Select one or more columns in "item", and then click "**-**", the selected items will be deleted.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-40.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-40.png"></a>




#### **Set Positioning Type External to the module**

Click "**Item** ", and then click "Set positioning type external to the module". After that the module will send messages to Developer Center, provided that the module is connected to Developer Center.

## **LAN Interface Introduction**

Switch to “LAN” interface.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-41.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-41.png"></a>



### **Feature Selection**

 You can select Associate AP/Configure Wi-Fi/Clear default settings.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-42.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-42.png"></a>





### **Associate AP**

Select "Associate AP" in the feature selection, fill in the AP name and key in "Information setting", and then click "**OK**" to connect.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-43.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-43.png"></a>




### **Configure Wi-Fi**

Select "**Configure Wi-Fi**" in the feature selection, fill in the Wi-Fi name and key in "Information setting", and then click "**OK**" to connect.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-44.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-44.png"></a>




### **Clear default settings**

Select "**Configure Wi-Fi**" in the feature selection, and then click "**OK**" to connect.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-45.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-45.png"></a>





### **Bluetooth**

Click the checkbox in front of "Bluetooth" to send a Bluetooth connection, and click again to turn it off.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-46.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-46.png"></a>



## **Gateway Sub-device Interface Introduction**

Switch to “Gateway Sub-device” interface.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-47.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-47.png"></a>




### **Add Sub-evice**

When adding a sub-device for the first time, if the sub-device does not have DS, the DS column can be empty.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-48.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-48.png"></a>




### **Delete Device**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-49.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-49.png"></a>




### **Search Device**


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-50.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-50.png"></a>




### **Connect Gateway**

After the gateway is properly connected, if the result is shown in the figure, both "Heartbeat switch and "state" will be set to true.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-51.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-51.png"></a>



### **Device Interaction**

The sub-device interaction interface includes three types of information: sub-device information: sub-device PK, sub-device DK, and sub-device status; sub-device transparent transmission data interaction; sub-device TSL data interaction. The transparent transmission data TSL data interaction interfaces of the sub-device are consistent with those in ***Chapter 4–5***.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-52.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-52.png"></a>




## **Quick Start Guide**

1. Step 1: This guide takes TCP connection as an example. When the user opens the program for the first time, as shown in the figure, click "**TCP**" in "Port configuration", select the IP and port number configuration according to the actual situation, and click "**Enable TCP**" after the configuration is completed.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-53.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-53.png"></a>




If the connection is successful, the button of "**Enable TCP**" will change to "**Disable TCP**".


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-54.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-54.png"></a>



2. Step 2: Click "**Configure**" interface, as shown in the figure, click the "**+**" button in the upper right corner of the interface to add product information.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-55.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-55.png"></a>



For the operation of adding products, see the instructions in ***Chapter 2*** of product configuration.<br>

3. Step 3: As shown in the figure below, Select the product and click"Set on the right, the log output interface will response **OK**.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-56.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-56.png"></a>



4. Step 4: Return to "**Debug**" interface, click "**Start Connection**", and the result is shown in the following figure.


<a data-fancybox title="img" href="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-57.png"><img src="/en/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-57.png"></a>




5. Step 5: The current device has been connected to Developer Center normally.  More operations such as: TSL interaction, transparent transmission data interaction, AT command interaction, positioning and product information interaction can be used through the corresponding configuration interface.