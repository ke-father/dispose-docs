# DTU-Modbus Exampleg

## __Scenario Description__

The data transmission unit DTU is a wireless terminal device specially used to transmit serial data through a wireless communication network. Broadly speaking, during communication, the module units responsible for sending data information at both ends of the data transmission link are called DTUs, which perform format conversion and data sorting and verification on the transmitted information.  This example describes a temperature and humidity sensor with __Modbus communication protocol__ accessed to __Quectel Developer Center__ through __Quectel DTU module__ to perform data interaction.


## __Related API__

| Function              | Description                                                  |
| :-------------------- | :----------------------------------------------------------- |
| quecIot.MBInit()      | Initializes Modbus components.                               |
| quecIot.MBCloudRecv() | Transfers the format of the TSL data issued by Developer Center to Modbus format and sends the data to Modbus sub-device. |
| quecIot.MBDeinit()    | De-initializes Modbus components.                            |
| quecIot.MBLocalRecv() | Forwards Modbus data received by the serial port to Modbus components and processes the Modbus data. |

<font color=#999AAA >Note: See [DTU-Modbus API](/en/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-08.md) for details.</font>


## **Operation on Developer Center**

### __1. Log in to Developer Center__

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

### __2. Create a Project__

A project is a collection of products. You need to create a new project before you can perform operations such as product creation or device management.

### __3. Create a Product__

Creating a product is the first step in the product development process. A product is an abstract description of devices defined by the Developer Center for managing similar devices. For example, if you have a temperature and humidity device with LTE network connection capability, and you need to access Developer Center to complete device monitoring, you can define it as a product: "Smart Temperature and Humidity".

## __Operation on QthTools-DTU Modbus__

QthTools-DTU Modbus helps you quickly define features of sub-devices using Modbus protocol. After configuring the product information and feature definition in the tool, you only need to burn the configuration file into the DTU module and import it into the Developer Center to complete the operation of connecting the sub-device to Developer Center. 

__Homepage of the Tool__

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-01.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-01.png)</a>

### __1. Configure the Product Information__

Click "__Add a Product__" on the left configuration bar.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-02.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-02.png)</a>


The pop-up window of "__Add Product Information__" is shown in the figure below.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-03.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-03.png)</a>


* __Product Name__: The product name of DTU
* __ProductKey__: The ProductKey generated when creating a product on Developer Center.
* __ProductSecret__: The ProductSecret generated when creating a product on Developer Center.
* __Reporting Method__: It can be set to"Only Report change" or "All Report".
  * __Only Report change__: The data polled each time is compared with the last data, and only changes are reported to Developer Center. 
  * __All Report__:  The data polled each time will be directly reported to Developer Center.
* __Device type__: It can be set to "Directly connected devices)" or "Gateway sub-devices".
  * __Directly connected devices__: The sub-device and the gateway share product information and display it on the Developer Center as a whole device.
  * __Gateway sub-devices__: The sub-device has independent product information and device information, which are displayed independently on Developer Center.

<font color=#999AAA ><font color=#999AAA >Note: Only one product information can be added, if you need to add a new one, please modify or delete the old product information. </font></font>

### __2. Configure the Serial Port Information__

Click "__Add Serial Port__" on the left configuration bar.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-04.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-04.png)</a>


The pop-up window of "Add Serial Port" is shown in the figure below.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-05.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-05.png)</a>

* __Port Number__: Actual port number for the DTU device to connect to the sub-device.
* __Baud Rate__: The number of bytes transmitted per second, commonly used are 9600, 115200, etc., which need to match the baud rate for the sub-device.
* __Data Bit__: Data bits are the real valid information in communication and default is 8 bits, which need to match the data bit of the sub-device.
* __Stop Bit__: It can be set to 1 bit, 1.5 bits or 2 bits to mark the end of a character transmission, and need to match the stop bit of the sub-device.
* __Parity Bit__: It can be set to "Odd parity", "even parity" and "None", and the default is "None", which need to match the parity bit of the sub-device. 
* __Polling Interval__: Interval for the DTU device to poll the sub-device to send Modbus protocol. For example, DTU device reads the temperature and humidity values from the sub-device every 60 seconds. 
* __Command Interval__: Due to the possibility of sticky packets, it is necessary to set the minimum time interval for the DTU to send each Modbus protocol to the sub-device.


### __3. Configure the Feature Information__

Assuming that a temperature and humidity sensor based on Modbus protocol is accessed to the Developer Center, the temperature and humidity of the sensor can be remotely viewed through Developer Center, and the sensor switch and real-time time can be remotely configured. The following takes the temperature and humidity sensor as an example to demonstrate how to add feature information in the QthTools-DTU Modbus.

The features to be added are shown in the table below.

| Type        | Feature Name                           | Read-write Permission | Data Type               | Byte Order | Formula | Data Length |
| ----------- | -------------------------------------- | --------------------- | ----------------------- | ---------- | ------- | ----------- |
| Boolean     | Temperature and humidity Sensor Switch | Read-Write            | --                      | --         | --      | --          |
| Numerical   | Temperature                            | Read-Only             | 16-bit signed integer   | Big-endian | x0.01+0 | --          |
| Numerical   | Humidity                               | Read-Only             | 16-bit unsigned integer | Big-endian | x0.01+0 | --          |
| Byte stream | Time Stamp                             | Write-Only            | --                      | --         | --      | 13          |


Click "__Add Feature__" on the left configuration bar.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-06.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-06.png)</a>


__1) Add the Feature in Boolean__

Add the temperature and humidity sensor switch which can be remotely configured. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-07.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-07.png)</a>


* __Type__: Set to "Boolean", such as "True" indicates the temperature and humidity sensor is turned on.  
* __Feature Name__: The naming of sub-device features, such as "Switch".
* __Read-Write Permission__:  It can be set to"Read-Only", "Write-Only" or "Read-Write".

__2) Add the Feature in Numerical__


Add the temperature and humidity feature, and the temperature and humidity of the sensor which can be viewed on Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-08.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-08.png)</a>


* __Type__: Set to "Numerical", such as “25.63” indicates the temperature of the sensor.  
* __Feature Name__: The naming of sub-device features, such as "Temperature".
* __Read-Write Permission__: It can be set to"Read-Only", "Write-Only" or "Read-Write".
* __Data Type__: The maximum and minimum values that this type of variable can store. For example, because the temperature value may be negative degrees Celsius and the range is -40~85, it is more appropriate to define it as  "16-bit signed integer".
* __Byte Order__: The order in which data is stored in memory. Take a 32-bit integer as an example: the value (ABCD) is stored in two bytes, the high-order byte is (AB), and the low-order byte is (CD).
  * __Big-endian__:  The high-order byte is in front, and the low-order byte is in the back, that is, it is stored in the form of (ABCD).
  * __Little-endian__: The low-order byte is in front, and the high-order byte is in the back, that is, it is stored in the form of (DCBA).
  * __Big-endian Byte Swap__ : Big-endian mode and swap between high and low bytes in pairs, that is, stored in the form of (BADC).
  * __Little-endian Byte Swap__ : Little-endian mode and swap between high and low bytes in pairs, that is, stored in the form of (CDAB).

* __Conversion Formula__: For example, the value read from the sensor is 0x0A 0x03 (2563 in decimal), the conversion formula is 2563 *0.01+0=25.63, then 25.63 is the actual temperature value.


* __3) Add the Feature in Byte Stream__

  Add the time stamp setting feature, and the time stamp of sensor can be viewed and configured on Developer Center. 

  <a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/DTU_Modbus/Example-09.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/DTU_Modbus/Example-09.png)</a>


  * __Type__: Set to "Byte stream", such as "ABCabc123#&*" indicates the data stream value.
  * __Feature Name__: The naming of sub-device features, such as "Time stamp".
  * __Read-Write Permission__: It can be set to"Read-Only", "Write-Only" or "Read-Write".
  * __Byte Length__: Set according to the maximum byte length of byte stream data.

###  4. Add the Device Information

<font color=#999AAA >Note: When selecting the device type as "Gateway sub-devices", you need to fill in the corresponding product information for each Modbus device.</font>

__1)__ Click  "__Add a Device__"  to add the sub-device.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/DTU_Modbus/Example-10.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/DTU_Modbus/Example-10.png)</a>


__2)__ Pop-up Window for "Add a sub-deivce"

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/DTU_Modbus/Example-11.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/DTU_Modbus/Example-11.png)</a>


__a.__ Fill in the name of the sub-device in "Device Name", such as "Temperature and Humidity Sensor" .

__b.__  Input the Modbus sub-device address in the serial port number list. For example, if the temperature and humidity sensor is placed on serial port 1, and the Modbus sub-device address is 1,  you should input "1". If there are multiple devices that need to be set to different Modbus sub-device addresses, add more than one.

### __5. Add the Feature Register__

The features to be added for the Modbus sub-device are shown in the table below.

| Type        | Feature Name                    | Read-write Permission | Data Type               | Byte Order |
| ----------- | ------------------------------- | --------------------- | ----------------------- | ---------- |
| Boolean     | Temperature and humidity Switch | Read-Write            | --                      | --         |
| Numerical   | Temperature                     | Read-Only             | 16-bit signed integer   | Big-endian |
| Numerical   | Humidity                        | Read-Only             | 16-bit unsigned integer | Big-endian |
| Byte stream | Time Stamp                      | Write-Only            | --                      | --         |

__1) Add the Register Address__

Select the sub-device and click "__Add Register Address__ ".

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-12.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-12.png)</a>

Fill in the "Start Address" and "Quantity" respectively in the Pop-up window. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-13.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-13.png)</a>

<font color=#999AAA >Note: You can switch whether the "Start Address" is displayed in decimal or hexadecimal by checking the "Hex". </font>

__2) Add Register Configuration Information__

Drag the feature configuration information in the feature list to the __+__ control in the feature label address on the right, and release the left mouse button to automatically add the feature register configuration to the register configuration file.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-14.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-14.png)</a>

### __6. Generate the Configuration File__

Click "__Configuration File__" >"__Generate the Configuration File__" in the tool bar, and select the path for the file to be saved in the pop-up window.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-15.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-15.png)</a>

* If the configuration file is successfully generated, the files in the following two formats will be generated in the selected file path.
  * *xxxxxx_xxxxxxxxxx_cloud.json*: The TSL model definition file which is used to import the configuration to Developer Center.
  * *xxxxxx_xxxxxxxxxx_local.bin*: The Modbus definition file which is used to burn the configuration to the device.


### __7. Import the Configuration File to Developer Center__

1) Log in to Developer Center and open the product page, then enter "__Feature Definition__" - "__Draft Mode__"  to edit.

2) Click "__Quick Import__" - "__Import TSL Model__"  - "__Upload__“. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-16.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-16.png)</a>

3)  Select the generated *xxxxxx_xxxxxxxxxx_cloud.json* file in the Pop-up window, and click "__Submit__" to import the configuration file.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-17.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-17.png)</a>

4) Click "__Release__" to exit from the editing mode. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-18.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-18.png)</a>

## __Operation on Device Side__

### __1. Download Firmware__

__a) Download Firmware Package__ 

Enter __<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center</a>__ , select the specified module and enter corresponding download page, find the firmware package and download it. 

__b) Download Firmware__ 	<br>
__①__ Click "**Create**" in the lower left corner in "Download" page.<<br>
__②__ Click __"Choose FM"__ to get the path of the downloaded firmware package.<br>
__③__ Click __the inverted triangle__ in the lower right corner and select __Download FM__ in the drop-down menu.<br>
__④__ Click "__Download FM__", and QPYcom starts downloading the firmware.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-19.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-19.png)</a>

### __2. Program Code__ 

Create the file __main.py__.

__1) Initialize the Download Serial Port__

For example, set the UART 1 of the DTU device as the download serial port.

| Baud Rate | Data Bit | Parity Bit | Stop Bit | Hardware Flow Control |
| :-------: | -------- | ---------- | -------- | --------------------- |
|   9600    | 8        | 0          | 1        | 0                     |

The example script for the download serial port is shown below.

```py
global uart1
""" Initialize the Download Serial Port. """
""" Open UART1. """
uart1 = UART(UART.UART1, 9600, 8, 0, 1, 0)
uart1.set_callback(uart_call)
```

__2) Initialize QuecThing__

After the device is powered on, first __initialize QuecThing__, register Developer Center __event receiving callback function__, and judge the current access state according to the callback event. 

```py
""" Initialize QuecThing SDK. """
quecIot.init()
""" Register callback function. """
quecIot.setEventCB(self.eventCB)
```

__3) Initialize Modbus Components__

Initialize Modbus components, and the serial port list used to burn configuration file (uartList), callback function of sending data (sendFunc) and the initialization function (initCb) need to be registered. 
<font color=#999AAA >Note: This configuration file contains the device information, QuecThing configuration and serial port configuration, and this file is generated by QthTools-DTU Modbus.  </font>

```py
uartList = [1,2]
intResult = quecIot.MBInit(uartList,self.sendFunc,self.initCb)
print("MBInit:",intResult)
```

__4) Configure the UART for DTU to Connect with the Sub-device__

Because DTU needs to occupy the download serial port when connecting to the sub-device, so first close the download serial port and reconfigure the serial port.

```py
""" Close the UART and reconfigure."""
uart1.close()
uart2.close()
""" Configure the UART."""
for uart in uartList:
    if uart[0] == 1:
        uart1 = UART(UART.UART1, uart[1], enum_to_databits(uart[2]), enum_to_parity(uart[3]), enum_to_stopbits(uart[4]), 0)
        uart1.set_callback(uart_call)
    elif uart[0] == 2:
        uart2 = UART(UART.UART2, uart[1], enum_to_databits(uart[2]), enum_to_parity(uart[3]), enum_to_stopbits(uart[4]), 0)
        uart2.set_callback(uart_call)
```

__5) Dowdlink Data Callback Processing__

Convert the TSL data sent by Developer Center to ModBus format and send it to the ModBus sub-device.

```py
@staticmethod
def eventCB(data):
    if 5 == data[0] and 10210 == data[1]:
        quecIot.MBCloudRecv(data[2])
```

__6) Forward Modbus Data__

Forward Modbus data received by the sub-device to Modbus components and process the Modbus data.

```py
def uart_call(data):
    global uart1
    global uart2
    print(data)
    if data[0] == 0:
        if data[1] == 1:
            msg = uart1.read(data[2])
        elif data[1] == 2:
            msg = uart2.read(data[2])
        print(msg)
        quecIot.MBLocalRecv(data[1],msg)
```


__7) Configure the Product Information and Access Developer Center__

Configure the product information with PK/PS set by QthTools-DTU Modbus and access Developer Center. 

```py
""" Configure the product information."""
quecIot.setProductinfo(productInfo["pk"], productInfo["ps"])
""" Access Developer Center. """
quecIot.setConnmode(1)
```


### __3. Download QuecPython Script__

<font color=#999AAA >Note:  If the script file is named __main.py__, the script will be run automatically. If it is not named __main.py__, you need to manually click the __Run__ button to run it.</font>

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-20.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-20.png)</a>

__①__ Click __File__ tag to enter the file page and select __main.py__ file. <font color=#999AAA >Note: The files displayed on the left are local files of the PC and on the right are files on module.</font> <br>
__②__  Drag __main.py__ file to the root node of the __usr__ directory on the right and release the left mouse button to automatically download the file to the module.

<font color=#999AAA >Note: The file download progress is displayed in the status bar at the bottom of QPYcom. If the download progress reaches 100%, the file is downloaded successfully.</font>

### __4. Burn the Configuration File to DTU Device__

<font color=#999AAA >Note：If the script is not named __main.py__, you need to manually click the __Run__ button to burn the Modbus configuration file. </font>
1) Click "__Download__"  > "__Serial Port Download__"  on the tool bar. <br>
2) Click "__Import a File__",  and select the generated *xxxxxx_xxxxxxxxxx_local.bin* in the Pop-up window.   <br>
3) Click "__Open the serial port__" after completing the baud rate, port number or other configurations.   <br> <font color=#999AAA >Note: You can find the corresponding burning serial port according to the PIN number on the development board or the schematic diagram.</font>
4) Click "__Start Download__" and restart the hardware device, the download progress will be displayed in the text box, and a "Download Success" pop-up window will pop up when the download is successful.<br>


<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-21.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-21.png)</a>

## __Effect Presentation__

__1. Device Online__

After burning the firmware into the DTU device, that device is automatically accessed to Developer Center. After that, device is added to the corresponding product list and certificated automatically.


<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-22.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-22.png)</a>

You can view the device status is online on Developer Center. The platform display effect is shown in the figure below.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-23.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-23.png)</a>

__2. Check Data Logs__

On the "Device Details" > "Data Logs" page, you can view that the terminal device regularly obtains the latest data from the sub-device every 60 seconds and sends it to Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-24.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-24.png)</a>

On the "Device Debug" > "Communication Logs" defined by the TSL feature, the uploaded temperature value: 25.68, humidity value: 65.13 can be clearly viewed.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-25.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-25.png)</a>

__3. Send Command__

Send commands to the DTU-Modbus device from Developer Center, the DTU device enters the callback function for processing and converts it into the Modbus protocol through the serial port and sends it to the temperature and humidity sensor. Then, the temperature and humidity sensor receives the time stamp and switch command issued by the Developer Center through the DTU device.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-26.png">![img](/en/deviceDevelop/cellular/QuecPython/resource/DTU_Modbus/Example-26.png)</a>


__Complete Sample Code__

```py
import quecIot
from machine import UART

def enum_to_databits(num):
    databits = {
        0 : 5,
        1 : 6,
        2 : 7,
        3 : 8
    }
    return databits.get(num, 8)

def enum_to_parity(num):
    parity = {
        0 : 0,
        1 : 1,
        2 : 2
    }
    return parity.get(num, 0)

def enum_to_stopbits(num):
    stopbits = {
        0 : 1,
        2 : 2
    }
    return stopbits.get(num, 0)

def uart_call(data):
    global uart1
    global uart2
    print(data)
    if data[0] == 0:
        if data[1] == 1:
            msg = uart1.read(data[2])
        elif data[1] == 2:
            msg = uart2.read(data[2])
        print(msg)
        quecIot.MBLocalRecv(data[1],msg)

class Quecthing:
    def __init__(self):
        global uart1
        global uart2
        """ Initialize QuecThing SDK. """
        quecIot.init()
        """ Register callback function. """
        quecIot.setEventCB(self.eventCB)
        """ Initialize the download serial port. """
        """ Open UART1. """
        uart1 = UART(UART.UART1, 9600, 8, 0, 1, 0)
        uart1.set_callback(uart_call)
        """ Open UART2. """
        uart2 = UART(UART.UART2, 9600, 8, 0, 1, 0)
        uart2.set_callback(uart_call)
        """ Initialize Modbus """
        uartList = [1,2]
        intResult = quecIot.MBInit(uartList,self.sendFunc,self.initCb)
        print("MBInit:",intResult)

    @staticmethod
    def eventCB(data):
        print(str(data[0]) + "," + str(data[1]) + "\r\n")
        if len(data) == 3:
            print(data[2])

        if 5 == data[0] and 10210 == data[1]:
            quecIot.MBCloudRecv(data[2])

    @staticmethod
    def sendFunc(data):
        global uart1
        global uart2
        print(data)
        if data[0] == 1:
            uart1.write(data[1])
        elif data[0] == 2:
            uart2.write(data[1])

    @staticmethod
    def initCb(data):
        global uart1
        global uart2
        print(data)
        """ Close the UART and reconfigure."""
        uart1.close()
        uart2.close()
        productInfo = data["product"]
        uartList = data["uart"]
        """ Configure the UART."""
        for uart in uartList:
            if uart[0] == 1:
                uart1 = UART(UART.UART1, uart[1], enum_to_databits(uart[2]), enum_to_parity(uart[3]), enum_to_stopbits(uart[4]), 0)
                uart1.set_callback(uart_call)
            elif uart[0] == 2:
                uart2 = UART(UART.UART2, uart[1], enum_to_databits(uart[2]), enum_to_parity(uart[3]), enum_to_stopbits(uart[4]), 0)
                uart2.set_callback(uart_call)
        """ Configure the product information."""
        quecIot.setProductinfo(productInfo["pk"], productInfo["ps"])
        """ Access Developer Center. """
        quecIot.setConnmode(1)

if __name__ == '__main__':
    Quecthing()
    while 1:
        pass
```

  
