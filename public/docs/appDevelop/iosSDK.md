# iOS SDK使用指导

## **IoT iOS SDK描述**

开发者中心的iOS SDK（以下简称SDK）封装了手机App与智能硬件以及云端的通讯过程。主要包括用户注册、用户登录、设备配网、设备绑定、设备状态读取、设备控制、设备分组等功能。

使用SDK可以帮助开发者快速完成APP开发，开发者只需关注UI呈现效果，无需处理复杂的底层协议解析与组装。

## **集成准备**

### **1. 注册账号**

在使用SDK前，您需要注册平台账号，详细请看“[平台注册](/quickStart/register.html)”。

### **2. 获取userDomain和userDomainSecret**

在开发者中心上创建一个App，获取userDomain和userDomainSecret。

详细请看“[App开发](/guide/app/dev.html)”。

### **3. 导入SDK**

将下载的zip双击进行解压，将文件夹内的静态库集成到工程中。

<a data-fancybox title="img" href="/appDevelop/picture_1.png">![img](/appDevelop/picture_1.png)</a>

### **4. 添加依赖库**

需要的系统依赖库分别是

● libc++.tbd<br />
● CoreTelephony.framework<br />
● libz.tbd<br />
● SystemConfiguration.framework<br />
● libresolv.9.tbd

<a data-fancybox title="img" href="/appDevelop/picture_2.png">![img](/appDevelop/picture_2.png)</a>

需要的第三方依赖库分别是

● YYModel （1.0.4）<br />
● AFNetworking （4.0）<br />
● SocketRocket （0.6.0）

### **5. 添加权限配置**

需要的权限配置分别是

● Privacy - Bluetooth Always Usage Description // 配网需要

至此，SDK已经集成完成，接下来可以进行APP开发了。

## **IoT SDK流程简介**

<a data-fancybox title="img" href="/appDevelop/picture_3.png">![img](/appDevelop/picture_3.png)</a>

## **IoT SDK API简介**

具体API用法可以参考[demo](https://github.com/thridparty-cloud2/quecloud-iot-ios-sdk-demo-objc)。
