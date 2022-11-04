# iOS SDK User Guide

## **IoT iOS SDK Description**

The iOS SDK (hereinafter referred to as SDK) of Developer Center encapsulates the communication process between the mobile App, the smart hardware and the cloud. It includes features such as user registration, user login, device network provisioning, device binding, device status reading, device control, and device grouping.

The SDK can help developers quickly complete App development so that developers only need to pay attention to the UI without analyzing and assembling complex underlying protocols.

## **Integration Preparation**

### **1. Register an Account**

Before using the SDK, you need to register an account on Developer Center. See “[Developer Center Registration](/en/quickStart/register.html)” for details.

### **2. Obtain userDomain and userDomainSecret**

Create an App on Developer Center to obtain userDomain and userDomainSecret.

See “[App Development](/en/guide/app/dev.html)” for details.

### **3. Import SDK**

Double-click the downloaded zip packet to decompress it, and integrate the static library in the folder into the project.

<a data-fancybox title="img" href="/en/appDevelop/picture_1.png">![img](/en/appDevelop/picture_1.png)</a>

### **4. Add Dependencies**

The required system dependencies are:

● libc++.tbd<br />
● CoreTelephony.framework<br />
● libz.tbd<br />
● SystemConfiguration.framework<br />
● libresolv.9.tbd

<a data-fancybox title="img" href="/en/appDevelop/picture_2.png">![img](/en/appDevelop/picture_2.png)</a>

The required third-party dependencies are:

● YYModel （1.0.4）<br />
● AFNetworking （4.0）<br />
● SocketRocket （0.6.0）

### **5. Add Permission Configurations**

The required permissions configurions are:

● Privacy - Bluetooth Always Usage Description // Needed for network provisioning

So far, the SDK has been integrated, and App development can be carried out next.

## **IoT SDK Process Introduction**

<a data-fancybox title="img" href="/en/appDevelop/picture_3.png">![img](/en/appDevelop/picture_3.png)</a>

## **IoT SDK API Introduction**

See [demo](https://github.com/thridparty-cloud2/quecloud-iot-ios-sdk-demo-objc) for specific API usage.

