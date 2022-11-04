# **设备接入方案**

<font color=#999AAA >提示：本文简要介绍了设备侧对接移远开发者中心的多种接入方案并分析各方案的主要特性，使得用户可以根据实际的项目需求来选择最优接入方案。</font>



<a data-fancybox title="img" href="/deviceDevelop/Solutions/Solutions-01.png">![img](/deviceDevelop/Solutions/Solutions-01.png)</a>

## **基于MCU开发（AT指令方案）**

AT指令是 **移远模组** 与 **主控MCU** 之间用于连接与通信的指令。 **MCU** 作为主控端通过串口发送AT指令到 **移远模组** ，**移远模组** 收到AT指令后进行相对应的处理并响应回 **MCU**。开发者只需在 **MCU** 编写应用程序来操控 **移远模组** 从而实现联网等目的。

<a data-fancybox title="img" href="/deviceDevelop/Solutions/Solutions-02.png">![img](/deviceDevelop/Solutions/Solutions-02.png)</a>
### **方案主要特性**
* **快速上手**：AT指令较容易理解，调试简单，可快速熟悉上云流程。
* **扩展性强**：以主控MCU为主，设备侧预留串口出来后，后续产品迭代亦可直接替换模组。
* **自由度高**：无需过多关注MCU使用什么编程语言，仅需MCU可正常的收发AT指令。
* **SOTA升级**：用户可以通过SOTA方式，将自己的MCU程序进行升级。
* **需外挂MCU支持**：MCU与模组串口通信需要适配好，串口中断问题需要谨慎处理。


## **基于模组开发（QuecOpen方案）**

**QuecOpen**是基于移远模块作为主处理器的应用方式，使用C语言开发，是在模组上进行的二次开发方式，执行效率高。QuecOpen SDK提供设备一键接入开发者中心、数据上下行和 OTA 等基础业务接口封装，开发者只需调用该SDK必要的依赖接口即可完成接入。
<a data-fancybox title="img" href="/deviceDevelop/Solutions/Solutions-03.png">![img](/deviceDevelop/Solutions/Solutions-03.png)</a>

### **方案主要特性**
* **较低的硬件成本**：无需外部处理器以及相关的存储器和外围设备从而降低了硬件成本。
* **以C语言为开发语言**：使用C语言，代码量小，功能强大，运行速度快。
* **较高的集成度**：减小产品尺寸，减少体积，适用于一些手持设备。
* **较低的能耗**：去掉MCU部分的能耗，更少的中间资源占用，更高的交互效率。
* **较轻松的升级**：只需升级通讯模组，使得OTA升级更简单。
* **高安全性** ：无需通过串口传递关键业务数据，从而避免近端攻击窃取的可能。


## **基于模组开发（QuecPython方案）**
**QuecPython** 使用 Python语言开发，是在模组上进行的二次开发方式，无需编译、调试方便上手。QuecPython SDK提供设备一键接入开发者中心、数据上下行和 OTA 等基础业务接口封装，只需开发者根据该SDK必要的依赖接口即可完成接入。

<a data-fancybox title="img" href="/deviceDevelop/Solutions/Solutions-03.png">![img](/deviceDevelop/Solutions/Solutions-03.png)</a>

### **方案主要特性**
* **较轻松的升级**：只需升级通讯模组，使得OTA升级更简单。
* **兼容MicroPython**：QuecPython与MicroPython无论在目录结构还是接口应用上均保持一致，可以快速的更新迭代。
* **数据安全**：无论是在源码方面还是数据传输方面都做了相应的加密处理，最大限度地保证用户使用的安全性及私密性。
* **以Python为开发语言**：使用Python编程语言难度低、上手快、普及性强，简单易学且稳定可靠。
* **演示Demo** ：QuecPython较适合做Demo（接入快速，简单），但需占用较多的模块内存。

## **基于DTU开发（Modbus方案）**
**Modbus方案**是一款以Modbus 设备作为数据传输终端接入开发者中心的开发方案。Modbus设备可使用QthTools-DTU_Modbus工具零代码实现协议自解析并与开发者中心进行数据业务交互。

<a data-fancybox title="img" href="/deviceDevelop/Solutions/Solutions-04.png">![img](/deviceDevelop/Solutions/Solutions-04.png)</a>

### **方案主要特性**
* **零代码开发**：通过QthTools-DTU Modbus工具即可实现Modbus设备上云，可无需进行代码开发。
* **标准Modbus协议**：支持市面上标准Modbus协议的外设与传感器，通过RS-485协议实现数据采集与反向控制。
* **直连/网关模式切换**：移远云DTU支持单品模式与网关模式两种使用方式，可根据实际使用场景选择不同的方案。
* **以C语言为开发语言**：DTU底层使用C语言开发，代码量小，功能强大，运行速度快。


## **该如何选择最优接入方案?**

* __AT接入方案__ 使用标准AT指令控制移远模组上云，操作简单易上手。若设备端硬件主板已有MCU，并且在MCU上已经实现了自己的应用程序，仅仅需要使用移远模组连接移远云并透传数据时，则可以选择该接入方案。
* __QuecOpen接入方案__ 使用C语言进行开发，移远将提供SDK给到您，您将可以直接在该SDK内使用C语言对移远模组进行二次开发，从而节约MCU成本。若您对C语言与实时操作系统有一定的了解，又想节约外部MCU的成本则可以选择该接入方案。

* __QuecPython接入方案__ 使用Python语言开发，仅需要编写Python脚本下载进移远模组，或者通过QPYcom工具的交互界面进行调试即可上移远云。若想要快速做个演示Demo又对Python语言有一定了解，则可以选择该接入方案。


* __DTU Modbus接入方案__ 可以不需要对设备端进行开发，仅仅需使用配置工具对Modbus协议进行配置。若您希望零代码实现上云功能并且子设备支持标准Modbus协议，则可以使用该接入方案。




