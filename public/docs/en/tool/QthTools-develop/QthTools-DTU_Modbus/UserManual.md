# User Manual

## **Homepage Introduction**

**Workspace**: Import, export, and clear the current workspace configuration info.  
**Configuration file** :Generate Developer Center TSL model  files and files for device downloading.  
**Download** :Download the file to the device through the serial port.  
**Help** :View documentation, contact information, software version number.   
**Product info**: Product information defined in Developer Center, such as ProductKey, ProductSecret.  
**Port list** : The serial port information of the DTU device, such as serial port ID, baud rate, etc..  
**Feature list** :  The feature info of the slave device, such as temperature and humidity, light intensity, etc..  
**Slave device info**:  Information about the slave device, such as slave device name, address, etc..  


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-1.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-1.png"></a>




## **Configure Product Info**

**Product name**: The user-defined product name, which is recommended to be consistent with that in Developer Center.   
**ProductKey** : The globally unique identifier issued by Developer Center for the product. ProductKey is very important and will be used in device authentication and communication. Please keep it safe.  
**ProductSecret** :It is the private key that is issued by Developer Center for each product. A ProductSecret is used in pair with a ProductKey. ProductSecrets are required in unique-certificate-per-product authentication authentication. You must safely keep them.  
**Report Method**  
&emsp;**Report all** : The data polled by the device each time will be directly reported to Developer Center.   

&emsp;**Report changes**: The data polled by the device each time is compared with the last data, and changes are reported to Developer Center.  
**Device type**  
&emsp;**Directly connected device**: A Modbus slave device and  the gateway share product info and display it on Developer Center as one device.  
&emsp;**Gateway sub-device** : Modbus slave devices have independent product info and device info, which are displayed separately on Developer Center.


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-2.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-2.png"></a>



### **Add Product Info**

  1. Click the "**Add product**" button
  2. In the pop-up window, enter the parameters of "Product name", "productKey", "productSecret", "Report method", and "Device Type" respectively.
  3. Click "**OK**".

<font color=#999AAA >Note: Only one product information can be added, if you need to add a new one, please modify or delete the old product information.</font>


### **Modify Product Info**

  1. Right-click on the product info that needs to be modified.
  2. Click the "**Edit**" button in the right-click menu.
  3. In the pop-up window, modify the parameters of "Product name", "productKey", "productSecret", "Report method", and "设备类型(Device type)" respectively.
  4. Click "**OK**".

### **Delete Product Info**

  1. Right-click on the product info that needs to be modified.
  2. Click the "**Delete**" button in the right-click menu.

## **Configure Port Info**

**Port number**: The  port number used by the module. Range: 0–99.   
**Polling interval** : After Modbus polls all register data, the time interval between the next polling. Unit: second.  
**Command interval** : The time interval between Modbus command sending. Unit: milliseconds.  


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-3.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-3.png"></a>



### **Add Port Info**

1. Click the "**Add port**" button.  
2. In the pop-up window, enter the parameters of "Port number", "Baud rate", "Data bit", "Stop bit", "Check bit", "Polling interval" and "Command interval".
3. Click "**OK**".

### **Modify Port Info**

1. Right-click on the port info that needs to be modified.
2. Click the "**Edit**" button in the right-click menu.
3. In the pop-up window, modify the parameters of "Port number", "Baud rate", "Data bit", "Stop bit", "Check bit", "Polling interval" and "Command interval" respectively.
4. Click "**OK**".

### **Delete Port Info **

1. Right-click on the port info that needs to be modified.
2. Click the "**Delete**" button in the right-click menu.

## **Configure Feature Info**

**Type** : Feature type defined according to the actual Modbus slave device.

* **Boolean type** :There are only two states: 0 and 1, which are generally used for switches, relays, etc.;
* **Numeric type** : Integer or floating point number. This type is widely used;
* **Byte stream** : Byte stream or string type, which can be used for transmission in strings;
* **Enumeration** : List all possible values and give each of them a name.

**Feature name** : A specific feature name, such as thermal, humidity, etc., which is input by the user.

**Read&Write type** : The read and write type determines whether the feature requires uplink and downlink data.

* **Read-only** : The data of the feature type needs to be polled and reported, but is not allowed to be changed by Developer Center. 
* **Write-only**: The data of the feature type does not need to be polled and reported, but is allowed to be changed by Developer Center. 
* **Read&Write** : The data of the feature type needs to be polled and reported, and is allowed to be changed by Developer Center. 

### **Add Feature Info**

#### **Add Feature in Boolean Type**

1. Click "**Add feature**".
2. In the pop-up window, enter the parameters of "Feature name" and "Read&Write type" respectively.
3. Click "**OK**".


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-4.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-4.png"></a>




#### **Add Feature in Numeric Type**

* **Data type** : Selected according to the size of the register actually occupied by the feature.
* **Byte order** : Selected according to the byte order actually used by the feature.
* **Conversion formula** :Selected according to whether the feature requires numeric conversion.

1. Click "**Add feature**".
2. In the pop-up window, enter the parameters of "Feature name", "Read&Write type","Data type", "Byte order", and "Conversion formula" respectively.
3. Click "**OK**".


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-5.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-5.png"></a>




##### **Byte order**

16-bit signed int/16-bit unsigned int:

* Big endian (AB)
* Little endian (BA)
* Big endian byte swapped (BA)
* Little endian byte swapped (AB)

32-bit signed int/32-bit unsigned int:

* Big endian (ABCD)
* Little endian (DCBA)
* Big endian byte swapped (BADC)
* Little endian byte swapped(CDAB)

64-bit signed int/64-bit unsigned int:

* Big endian (ABCDEFGH)
* Little endian (HGFEDCBA)
* Big endian byte swapped (BADCFEHG)
* Little endian byte swapped (GHEFCDAB)

32-bit single-precision floating-point:

* Big endian (ABCD)
* Little endian (DCBA)
* Big endian byte swapped (BADC)
* Little endian byte swapped (CDAB)

64-bit single-precision floating-point:

* Big endian (ABCDEFGH)
* Little endian (HGFEDCBA)
* Big endian byte swapped (BADCFEHG)
* Little endian byte swapped (GHEFCDAB)

##### **Conversion formula**

**Data report** :cloudValue = localValue*multiple+increment   
**Data sent** :localValue = (cloudValue-increment)/multiple

* **cloudValue**: Data issued by Developer Center
* **localValue**: The data of the Modbus slave device read by the device
* **Multiple**: Attenuation multiple is the value multiplied by the register value in the conversion formula interface
* **Increment** : Increment is the value added to the register value in the conversion formula interface


For example：

>In a slave device, the value read by the register is 350. According to the device user manual, the actual temperature is 350 x 0.1 = 35 ℃, so Multiple should be filled with 0.1, and Increment should be filled with 0.   
>localValue=10,multiple=0.1,increment=0.01,cloudValue=10\*0.01+0.01=0.11   
>cloudValue=0.11,multiple=0.01,increment=0.01,localValue=(0.11-0.01)/0.01=10

##### **Data Conversion Path**

* **Data report**: byte swapped -> Numeric conversion
* **Data sent**: Numeric conversion -> byte swapped

#### **Add Type of Byte stream**

* **Length in bytes** : Enter the maximum byte length according to the feature.

1. Click "**Add feature**".
2. In the pop-up window, enter the parameters of "Feature name", "Read&Write type", and "Length in bytes" respectively.
3. Click "**OK**".


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-6.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-6.png"></a>



#### **Add Type of Enumeration** 

* **Data type**: Selected according to the size of the register actually occupied by the feature.
* **Byte order**: Selected according to the byte order actually used by the feature.
* **Property value**: Support integer type. Range: -2147483648–2147483647.
* **Property Description**: Support Chinese, English uppercase and lowercase, numbers, underscores and dashes. It must start with Chinese, English or a number. The description should be no more than 20 characters.

1. Click "**Add feature**".
2. In the pop-up window, enter the parameters of "Feature name", "Read&Write type", "Data type", and "Byte order" respectively.
3. Add corresponding "Property value" and "Property Description" in the property table below.
4. Click "**OK**".


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-7.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-7.png"></a>




### **Modify Feature Info**

1. Right-click on the feature info that needs to be modified.
2. Click the "**Edit**" button in the right-click menu.
3. In the pop-up window, modify the parameters of "Feature name", and "Read&Write type" respectively.
4. Click "**OK**".

<font color=#999AAA >Note: The modified feature info will be synchronized to the same feature label in the entire workspace. Please operate with caution.</font>

### **Delete Feature Info**

1. Right-click on the product info that needs to be modified.
2. Click the "**Delete**" button in the right-click menu.

<font color=#999AAA >Note:The deleted feature info will be synchronized to the same feature label in the entire workspace. Please operate with caution.</font>

## **Configure Slave Device**


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-8.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-8.png"></a>



### **Add Slave Device**

1. Click the “**Add device(+)**” button.
2. In the pop-up window, enter "Device name". For example, if thedevice is a temperature and humidity   sensor probe, here you can fill in "temperature and humidity sensor".
3. Enter the Modbus slave address of the device in the list corresponding to the port number. For example, the temperature and humidity sensor probe is placed under serial port 0 and the Modbus address is 1, enter 1. If there are multiple devices that need to set to different Modbus slave addresses, add multiple devices.
4. When the device is selected as "Gateway sub-device", you need to fill in the corresponding product information for the Modbus slave device: ProductKey, ProductSecret.
5. Click "**OK**".


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-9.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-9.png"></a>




### **Modify Slave Device**

1. Right-click on the device info that needs to be modified.
2. Click the "**Edit**" button in the right-click menu.
3. In the pop-up window, modify the parameters of "Device name", and "Slave address" respectively.
4. Click "**OK**".

## Delete Slave Device

1. Right-click on the device info that needs to be modified.
2. Click the "**Delete**" button in the right-click menu.

## **Configure Register(Coil) List**

<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-10.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-10.png"></a>



### **Add Register(Coil) List**

1. Select the tab page of Coil, Holding register, Input register;
2. Click the “**Add register address**” button.
3. In the pop-up window, modify the parameters of "Starting address", and "Number" respectively.
4. Click the "**Hex**" button to switch whether the  input box of "Starting address" is displayed in decimal or hexadecimal.
5. Click "**OK**".

### **Modify Register(Coil) List**

1. Right-click the header of the register (coil) list that needs to be modified.
2. Click the "**Edit**" button in the right-click menu.
3. In the pop-up window, modify the parameters of "Starting address", and "Number" respectively.
4. Click "**OK**".


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-11.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-11.png"></a>




### **Delete Register(Coil) List**

#### **Modify Whole Register(Coil) List**

1. Right-click the header of the register (coil) list that needs to be modified.
2. Click the "**Delete**" button in the right-click menu.

#### **Delete Part of Register(Coil) List**

1. Right-click the register address that needs to be deleted.
2. Click the "**Delete to the top**" or "**Delete to Bottom**" button in the right-click menu.
3. Click "**Yes**" in the prompt box.

## **Configure Feature Label of Register(Coil)**


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-12.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-12.png"></a>




### **Add Feature Label to Register(Coil)**

#### **Add to Register List by Dragging Feature Labels**


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-13.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-13.png"></a>



1. Find the feature label that needs to be added in the feature list on the left.
2. Long press the feature label and drag it to the add button "**+**" in the register list.
3. If the feature label of the boolean value type is added to the register list, the corresponding bit address needs to be selected (if the bit address is gray, it indicates that the bit is already occupied).

#### **Add to Register List by Creating Feature Label**

<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-14.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-14.png"></a>




1. Click the button "**+**" on the register list.
2. In the pop-up window, add a new feature label.
3. If the feature label of the boolean value type is added to the register list, the corresponding bit address needs to be selected (if the bit address is gray, it indicates that the bit is already occupied).
4. Click "**OK**".

#### **Add Feature Label to Coil**

#### **Add to Coil List by Dragging Feature Label**


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-15.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-15.png"></a>


1. Find the feature label that needs to be added in the feature list on the left (Only boolean type is allowed to be added to the coil list).
2. Long press the feature label and drag it to the add button "**+**" in the coil list.

#### **Add to Coil List by Creating Feature Label**


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-16.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-16.png"></a>



1. Click the button "**+**" on the coil list.
2. In the pop-up window, add a new feature label (Only boolean type is allowed to be added to the coil list).
3. Click "**OK**".

### **Modify Feature Label of Register(Coil)**

1. Right-click the feature label that needs to be modified.
2. Click the "**Edit**" button in the right-click menu.
3. In the pop-up window, modify the parameters of "Feature name", and "Read&Write type" respectively.
4. Click "**OK**".

### **Delete Feature Label of Register(Coil)**

1. Right-click the feature label that needs to be deleted.
2. Click the "**Delete**" button in the right-click menu.

## **Workspace Info**

### **Import Workspace Info**

1. Click "**Workspace**" -> "**Open**" button in the menu bar.
2. Select the workspace file you want to open in the pop-up window.
3. Click "**Open**" to confirm.

### **Export Workspace Info**

1. Click "**Workspace**" -> "**Save**" button in the menu bar.
2. Select the path you want to save the file to in the pop-up window.
3. Click "**Save**" to confirm.

### **Clear Workspace Info**

1. Click "**Workspace**" -> "**Clear**" button in the menu bar.


<font color=#999AAA >Note: This operation will clear the entire workspace and cannot be restored. Please operate with caution.</font>


## **Configuration File**

### **Generate Configuration File**

1. Click "**Configuration File**" -> "**Generate configuration file**" button in the menu bar.
2. Select the path you want to save the file to in the pop-up window.
3. Click "**Save**" to confirm.


<font color=#999AAA >Note: 
  xxxxxx_xxxxxxxxxx_cloud.json: A TSL file which is imported to Developer Center   
  xxxxxx_xxxxxxxxxx_local.bin: A Modbus file which is downloaded to the device
</font>

### **Import Configuration File to Developer Center**


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-17.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-17.png"></a>



1. Log in to Developer Center, and open the product page and switch to "Function Definition" page.
2. Click "**Draft Mode**" to enter editing mode.
3. Click "**Import**"-> "**Import TSL**".
4. Select the genererated xxxxxx_xxxxxxxxxx_cloud.json file in the pop-up window.
5. Click "**Confirm**" to import.
6. Click "Release" to exit editing mode.

### **9.3 Download Configuration File to Device**


<a data-fancybox title="img" href="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-18.png"><img src="/en/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-18.png"></a>



1. Click "**Download**" -> "**Serial Download**" button in the menu bar.
2. Click "**Import**"
3. Select the genererated xxxxxx_xxxxxxxxxx_local.bin file in the pop-up window.
4. Select the corresponding port number.
5. Click "**Open port**"
6. Click "**Start downloading**"
7. Reboot the device.
8. The file download progress will be displayed in the text box. If the download is successful, a prompt "Download Succeeded" will pop up.

## **Appendix Term and Abbreviation**

Table 1: Terms and Abbreviations
|Abbreviation	|Description
|---|---|---
|USB	|Universal Serial Bus