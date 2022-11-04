# 透传格式数据业务交互示例
## **场景描述**
根据实际业务场景来使用。如果不需要平台解析数据，仅透传数据的话，可以在设备成功接入移远通信物联网开发者中心后，通过 __AT+QIOTSEND__ 与 __AT+QIOTRD__ 指令来实现与开发者中心的数据交互，任何类型的数据均可采用透传模式。本章节指导用户通过AT指令进行透传格式业务收发。



## **涉及指令**

| 指令名称| 功能描述    |
|:--------:| :-------------:|
|  AT+QIOTCFG| 配置可选参数 |
|  AT+QIOTSEND|  发送透传数据至平台 |
|   AT+QIOTRD| 读取平台下发的透传数据 |  

<font color=#999AAA >提示：详情请参考[数据业务交互 相关命令](/deviceDevelop/cellular/AT/API/cellular-at-04.md)。</font>



## **操作步骤**
### **平台侧**
#### **一、登录开发者中心**

登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。

#### **二、创建项目** 

项目是设备的集合，新用户在注册登录后默认是没有项目的，需进行项目的创建流程后才可进行项目维度的相关操作。

#### **三、创建产品** 

透传数据业务的交互需要在创建产品时选择 __透传/自定义__ 协议。 

<a data-fancybox title="img" href="/deviceDevelop/cellular/AT/resource/02-2-1.png">![img](/deviceDevelop/cellular/AT/resource/02-2-1.png)</a>


### **设备侧**

### **透传数据交互**
透传发送时，若QoS级别为1或以上，设备成功发送透传数据后将响应 __OK__ 与 __+QIOTEVT: 4,10200__；若QoS级别为0，设备成功发送数据后将响应 __OK__ 且不上报事件。  
#### **示例一(发送字符串类型数据)**
MCU可通过 __AT+QIOTSEND=\<mode\>,\<length\>[,\<data\>]__ 指令向平台发送透传指令。

发送数据为长度12字节的字符串"ABCabc123456"，QoS级别为1。

```c
[TX]AT+QIOTSEND=1,12,ABCabc123456

[RX]OK

[RX]+QIOTEVT: 4,10200
```

#### **示例二(发送任意字符流类型数据)**
MCU可通过 __AT+QIOTSEND=\<mode\>,\<length\>__ 指令向平台发送透传指令。

发送长度10字节的字节流{0x00,0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09}，QoS级别为2。

```c
[TX]AT+QIOTSEND=2,9

[RX]AT+QIOTSEND=2,9

> 
[TX]0x010203040506070809
[RX]OK

[RX]+QIOTEVT: 4,10200
```

#### **示例三(非缓存模式读取平台下发的透传数据)**
若不配置则出厂默认为 __`0`__：关闭缓存模式。

__1、开发者中心下发透传数据__

在 __产品详情__ 详情页，单击 __设备调试__ 页签可进行透传数据业务的交互。

<a data-fancybox title="img" href="/deviceDevelop/cellular/AT/resource/02-2-2.png">![img](/deviceDevelop/cellular/AT/resource/02-2-2.png)</a>

__2、模组向串口打印下行数据__

模组收到数据后主动向MCU发送通知 __+QIOTEVT: 5,10200__ 及该下行数据。

```c
[RX]+QIOTEVT: 5,10200,12
ABCabc123456
```

#### **示例四(缓存模式读取平台下发的透传数据)**

__1、打开下行数据缓存模式__
MCU可通过 __AT+QIOTCFG="buffer"[,<buffer_mode>]__ 指令配置下行数据缓存模式。

```c
[TX]AT+QIOTCFG="buffer",1

[RX]AT+QIOTCFG="buffer",1

OK
```
__2、开发者中心下发透传数据__

在 __产品详情__ 详情页，单击 __设备调试__ 页签可进行透传数据业务的交互。

<a data-fancybox title="img" href="/deviceDevelop/cellular/AT/resource/02-2-3.png">![img](/deviceDevelop/cellular/AT/resource/02-2-3.png)</a>

__3、查询下行数据__
模组收到数据后先缓存，最多支持缓存10条信息，且向MCU发送通知 __+QIOTEVT: 5,10200__ ，MCU收到通知后，则需手动发送 __AT+QIOTRD=\<req_length\>__ 查询指令读取数据。

```c
[RX]+QIOTEVT: 5,10200

[TX]AT+QIOTRD=512

[RX]AT+QIOTRD=512

+QIOTRD: 12,0,0
ABCabc123456
OK
```

 
