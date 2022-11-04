# **Device Access Solutions**

<font color=#999AAA >Note: This document introduces four solutions in which the device can access Quecel Developer Center and the characteristics of each solution so that you can choose the optimal solution according to your actual project requirements.</font>


<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-01.png">![img](/en/deviceDevelop/Solutions/Solutions-01.png)</a>

## **Develop based on MCU (AT Command Solution)**

AT Command is applied to the connection and communication between the **Quectel Module** and **MCU**. **MCU**, the  controller, sends AT commands to the **Quectel Module** through a serial port. After receiving the AT commands, the **Quectel Module** will perform corresponding operations and respond to the **MCU**. You only need to write applications in the **MCU** to control the **Quectel Module** to connect to the network and realize other purposes.

<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-02.png">![img](/en/deviceDevelop/Solutions/Solutions-02.png)</a>

### **Characteristics**
* **Easy to Use**: AT command is easy to be understood and debugged, so you can quickly get familiar with the access process.
* **Flexible Expansion**: MCU is the key component of the solution. As long as the serial port is reserved on the device, the module can be replaced by other devices.
* **High Freedom**: As long as the MCU can receive and send AT commands normally, you do not need to pay too much attention to what programming language the MCU uses.
* **SOTA Upgrade**: You can upgrade the MCU by SOTA.
* **An external MCU is required**: The communication between the MCU and the module serial port must be adapted. The serial port interruptions should be handled carefully.


## **Develop Based on Module (QuecOpen Solution)**

**QuecOpen** is an application mode with a module as the main processor and an efficient secondary development method by using the C language on the module. QuecOpen SDK provides you with the interface encapsulation of basic businesses, such as one-click access to Developer Center, data uplink and downlink and OTA upgrade. You only need  to call the necessary dependent interfaces of the SDK to connect the module to Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-03.png">![img](/en/deviceDevelop/Solutions/Solutions-03.png)</a>

### **Characteristics**
* **Low Hardware Cost**: No external processors, memories and peripherals is required, reducing the hardware cost.
* **C Language**: QuecOpen adopts C language as the programming language, which has a small number of software codes, powerful features and high running speed. 
* **High Integrity**: Smaller size makes QuecOpen more suitable for some hand-held devices.
* **Low Power Consumption**: No external MCU makes QuecOpen consume less power, occupy fewer resources and have higher interaction efficiency. 
* **Simple Upgrade**: It makes OTA upgrade simpler to upgrade the Quectel module only.
* **High Security**: There is no need for a serial port to transfer important business data so that it can avoid the possibility of near-end attacks and data theft.


## **Develop Based on Module (QuecPython Solution)**
**QuecPython** is a secondary development method by using Python on the module, which requires no compilation and is easy to be debugged. QuecPython SDK provides you with the interface encapsulation of basic businesses, such as one-click access to Developer Center, data uplink and downlink and OTA upgrade. You only need  to call the necessary dependent interfaces of the SDK to connect the module to Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-03.png">![img](/en/deviceDevelop/Solutions/Solutions-03.png)</a>

### **Characteristics**
* **Simple Upgrade**: It makes OTA upgrade simpler to upgrade the Quectel module only.
* **Be Compatible with MicroPython**: The QuecPython interface is consistent with MicroPython in both directory structure and interfaces, which is easy to be updated.
* **Data Security**: Both source codes and data transmission are encrypted to ensure your data security and privacy to the maximum extent.
* **Python**: QuecPython adopts Python as the programming language, which is popular, stable, reliable and easy to learn.
* **Demo**: QuecPython is suitable for you to generate a Demo because it is fast and easy for a module to access Developer Center. However, the QuecPython solution occupies more memories of the module than other solutions.

## **Develop Based on DTU (DTU-Modbus Solution)**
**Modbus Solution** is a development solution that uses ModBus device as a data transmission terminal to access Developer Center. Modbus devices can realize protocol self-parsing and data interaction with Developer Center through QthTools-DTU_Modbus without codes.

<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-04.png">![img](/en/deviceDevelop/Solutions/Solutions-04.png)</a>

### **Characteristics**
* **Zero-code Development**: No code is required to develop the Modbus device to make it access Developer Center by using QthTools-DTU Modbus.
* **Modbus Communication Protocol**: Modbus solution supports the peripherals and sensors over Modbus communication protocol on the market and can realize data acquisition and reverse control through RS-485 interface.
* **Directly Connected Devices/Gateway Sub-devices Shift**: Quectel DTU supports directly connected device mode and gateway sub-device mode, and you can select different modes according to usage scenarios.
* **C Language**: DTU adopts C language as the programming language, which has a small number of software codes, powerful features and high running speed.


## **How to Choose the Optimal Solution?**

* __AT Command Solution__ adopts AT command to control the Quectel module, which is easy for you to get started. It is recommended for you to choose AT command solution when you only need the Quectel module to access Developer Center and transmit data transparently if the hardware motherboard of the device has an MCU, and its own application program has been realized on the MCU.
* __QuecOpen Solution__ adopts C language to develop the module. You can perform secondary development to the Quectel module in the QuecOpen SDK by using C language to save the cost of MCU.  It is recommended for you to choose the QuecOpen solution if you have a certain understanding of the C language and real-time operating system, and want to save the cost of an external MCU.

* __QuecPython Solution__ adopts Python to develop the module. You only need to write a Python script and download it into the module or debug the module on the "Interact" page of QPYcom to connect the module to Developer Center. It is recommended for you to choose the QuecPython solution if you have a certain understanding of Python and want to generate a Demo as quickly as possible.


* __DTU Modbus Solution__ requires no development of the device. You only need to configure the Modbus by using QthTools-DTU_Modbus. It is recommended for you to choose the DTU-Modbus solution if you want to connect the module to Developer Center with no code and the sub-device supports the Modbus protocol.




