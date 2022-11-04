# Operations on QthTools-DTU Modbus 

DTU-modbus configuration tool helps you quickly define functions of sub-devices using Modbus protocol. After configuring the product information and function definition in the tool, you only need to burn the configuration file into the DTU module and import it into the Developer Center to complete the operation of connecting the sub-device to Developer Center. 

__Homepage of the Tool__

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-01.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-01.png)</a>

### __1. Configure the Product Information__

Click "__Add a Product__" on the left configuration bar.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-02.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-02.png)</a>

The pop-up window of "__Add Product Information__" is shown in the figure below.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-03.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-03.png)</a>

* __Product Name__: The product name of DTU. 
* __productKey__: The ProductKey generated when creating a product on Developer Center.
* __productSecret__: The ProductSecret generated when creating a product on Developer Center.
* __Reporting Method__: It can be set to"Only Report change)" or "All Report".
  * __Only Report change__: The data polled each time is compared with the last data, and only changes are reported to Developer Center. 
  * __All Report__:  The data polled each time will be directly reported to Developer Center.
* __Device type__: It can be set to "Directly connected devices" or "Gateway sub-devices".
  * __Directly connected devices__: The sub-device and the gateway share product information and display it on the Developer Center as a whole device.
  * __Gateway sub-devices__: The sub-device has independent product information and device information, which are displayed independently on Developer Center.

<font color=#999AAA >Note: Only one product information can be added, if you need to add a new one, please modify or delete the old product information. </font>

### __2. Configure the Serial Port Information__

Click "__Add Serial Port__" on the left configuration bar.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-04.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-04.png)</a>

The pop-up window of "Add Serial Port" is shown in the figure below.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-05.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-05.png)</a>


* __Port Number__: Actual port number for the DTU device to connect to the sub-device.
* __Baud Rate__: The number of bytes transmitted per second, commonly used are 9600, 115200, etc., which need to match the baud rate for the sub-device.
* __Data Bit__: Data bits are the real valid information in communication and default is 8 bits, which need to match the data bit of the sub-device.
* __Stop Bit__: It can be set to 1 bit, 1.5 bits or 2 bits to mark the end of a character transmission, and need to match the stop bit of the sub-device.
* __Parity Bit__: It can be set to "Odd parity", "even parity" and "None", and the default is "None", which need to match the parity bit of the sub-device. 
* __Polling Interval__: Interval for the DTU device to poll the sub-device to send Modbus protocol. For example, DTU device reads the temperature and humidity values from the sub-device every 60 seconds. 
* __Command Interval__: Due to the possibility of sticky packets, it is necessary to set the minimum time interval for the DTU to send each Modbus protocol to the sub-device.


### __3. Configure the Function Information__

Assuming that a temperature and humidity sensor based on Modbus protocol is accessed to the Developer Center, the temperature and humidity of the sensor can be remotely viewed through Developer Center, and the sensor switch and real-time time can be remotely configured. The following takes the temperature and humidity sensor as an example to demonstrate how to add function information in the configuration tool.

The functions to be added are shown in the table below.

| Type        | Function Name                          | Read-write Permission | Data Type               | Byte Order | Formula | Data Length |
| ----------- | -------------------------------------- | --------------------- | ----------------------- | ---------- | ------- | ----------- |
| Boolean     | Temperature and humidity Sensor Switch | Read-Write            | --                      | --         | --      | --          |
| Numerical   | Temperature                            | Read-Only             | 16-bit signed integer   | Big-endian | x0.01+0 | --          |
| Numerical   | Humidity                               | Read-Only             | 16-bit unsigned integer | Big-endian | x0.01+0 | --          |
| Byte stream | Time Stamp                             | Write-Only            | --                      | --         | --      | 13          |


Click "__Add Function__" on the left configuration bar.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-06.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-06.png)</a>

__1) Add the Function in Boolean__

Add the temperature and humidity sensor switch which can be remotely configured. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-07.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-07.png)</a>

* __Type__: Set to "Boolean", such as "True" indicates the temperature and humidity sensor is turned on.  
* __Function Name__: The naming of sub-device functions, such as "Switch".
* __Read-Write Permission__:  It can be set to"Read-Only", "Write-Only" or "Read-Write".

__2) Add the Function in Numerical__


Add the temperature and humidity function, and the temperature and humidity of the sensor which can be viewed on Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-08.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-08.png)</a>

* __Type__: Set to "Numerical", such as “25.63” indicates the temperature of the sensor.  
* __Function Name__: The naming of sub-device functions, such as "Temperature".
* __Read-Write Permission__: It can be set to"Read-Only", "Write-Only" or "Read-Write".
* __Data Type__: The maximum and minimum values that this type of variable can store. For example, because the temperature value may be negative degrees Celsius and the range is -40~85, it is more appropriate to define it as  "16-bit signed integer".
* __Byte Order__: The order in which data is stored in memory. Take a 32-bit integer as an example: the value (ABCD) is stored in two bytes, the high-order byte is (AB), and the low-order byte is (CD).
  * __Big-endian__:  The high-order byte is in front, and the low-order byte is in the back, that is, it is stored in the form of (ABCD).
  * __Little-endian__: The low-order byte is in front, and the high-order byte is in the back, that is, it is stored in the form of (DCBA).
  * __Big-endian Byte Swap__ : Big-endian mode and swap between high and low bytes in pairs, that is, stored in the form of (BADC).
    * __Little-endian Byte Swap__ : Little-endian mode and swap between high and low bytes in pairs, that is, stored in the form of (CDAB).

* __Conversion Formula__: For example, the value read from the sensor is 0x0A 0x03 (2563 in decimal), the conversion formula is 2563 *0.01+0=25.63, then 25.63 is the actual temperature value.

__3) Add the Function in Byte Stream__

Add the time stamp setting function, and the time stamp of sensor can be viewed and configured on Developer Center. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-09.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-09.png)</a>


* __Type__: Set to "Byte stream", such as "ABCabc123#&*" indicates the data stream value.
* __Function Name__: The naming of sub-device functions, such as "Time stamp".
* __Read-Write Permission__: It can be set to"Read-Only", "Write-Only" or "Read-Write".
* __Byte Length__: Set according to the maximum byte length of byte stream data.


### __4. Add the Device Information__

<font color=#999AAA > Note: When selecting the device type as "Gateway sub-devices", you need to fill in the corresponding product information for each Modbus device.</font>

__1)__ Click  "__Add a Device__"  to add the sub-device.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-10.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-10.png)</a>


__2)__ Pop-up Window for "Add a sub-deivce"

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-11.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-11.png)</a>

__a.__ Fill in the name of the sub-device in "Device Name", such as "Temperature and Humidity Sensor" .

__b.__  Input the Modbus sub-device address in the serial port number list. For example, if the temperature and humidity sensor is placed on serial port 1, and the Modbus sub-device address is 1,  you should input "1". If there are multiple devices that need to be set to different Modbus sub-device addresses, add more than one.


### __5. Add the Function Register__

The functions to be added for the Modbus sub-device are shown in the table below.

| Type        | Function Name                   | Read-write Permission | Data Type               | Byte Order |
| ----------- | ------------------------------- | --------------------- | ----------------------- | ---------- |
| Boolean     | Temperature and humidity Switch | Read-Write            | --                      | --         |
| Numerical   | Temperature                     | Read-Only             | 16-bit signed integer   | Big-endian |
| Numerical   | Humidity                        | Read-Only             | 16-bit unsigned integer | Big-endian |
| Byte stream | Time Stamp                      | Write-Only            | --                      | --         |

__1) Add the Register Address__

Select the sub-device and click "__Add Register Address__ ".

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-12.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-12.png)</a>


Fill in the "Start Address" and "Quantity" respectively in the Pop-up window. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-13.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-13.png)</a>

<font color=#999AAA >Note: You can switch whether the "Start Address" is displayed in decimal or hexadecimal by checking the "Hex". </font>


__2) Add Register Configuration Information__

Drag the function configuration information in the function list to the __+__ control in the function label address on the right, and release the left mouse button to automatically add the function register configuration to the register configuration file.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-14.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-14.png)</a>


### __6. Generate the Configuration File__

Click "__Configuration File__" >"__Generate the Configuration File__" in the tool bar, and select the path for the file to be saved in the pop-up window.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-15.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-15.png)</a>

If the configuration file is successfully generated, the files in the following two formats will be generated in the selected file path.

* *xxxxxx_xxxxxxxxxx_cloud.json*: The TSL model definition file which is used to import the configuration to Developer Center.
* *xxxxxx_xxxxxxxxxx_local.bin*: The Modbus definition file which is used to burn the configuration to the device.


### __7. Import the Configuration File to Developer Center__

1) Log in to Developer Center and open the product page, then enter "__Feature Definition__" - "__Draft Mode__"  to edit.

2) Click "__Quick Import__" - "__Import TSL Model__"  - "__Upload__“. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-16.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-16.png)</a>

3)  Select the generated *xxxxxx_xxxxxxxxxx_cloud.json* file in the Pop-up window, and click "__Submit__" to import the configuration file.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-17.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-17.png)</a>

4) Click "__Release__" to exit from the editing mode. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-18.png">![img](/en/deviceDevelop/cellular/DTU/speediness/DTU_Modbus/Example-18.png)</a>

