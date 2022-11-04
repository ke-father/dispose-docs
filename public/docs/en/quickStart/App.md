# Mobile App Development

## **Introduction**

This section takes RGB light as an example to present you the basic process of mobile App development in the five basic scenarios: creating mobile App, developing mobile App, binding device, obtaining device uplink data, and controlling the device.

## **Create Mobile App**

Before you develop a mobile App, you have to obtain a user domain in "App Development" → "Create an App".

User domain identifies which application the mobile App user belongs to. 

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_14-22-4.png">![img](/en/quickStart/image2022-3-10_14-22-4.png)</a>

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_14-30-53.png">![img](/en/quickStart/image2022-3-10_14-30-53.png)</a>

After the App is created, you can add the RGG light to this App.

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_14-32-48.png">![img](/en/quickStart/image2022-3-10_14-32-48.png)</a>

## **Develop Mobile App**

You can use App SDK or Open API provides by Developer Center to develop your own mobile App or mini program quickly. See [Overview of App Data Communication](/en/appDevelop/ready.md) for detais.

The minimum closed-loop of controlling the devices is mobile App user registration, user login, device binding and device control. Besides this, you can add other personalized service. 

## **Mobile App User Registration and Login**

QuecCloud supports the registration and login methods of mobile number + password, mobile number + SMS verification code, and email address. 

For example:

<a data-fancybox title="img" href="/en/quickStart/image2022-3-2_14-7-45.png">
<img src="/en/quickStart/image2022-3-2_14-7-45.png" style="width: 40%" />
</a>
<a data-fancybox title="img" href="/en/quickStart/image2022-3-2_14-8-35.png">
<img src="/en/quickStart/image2022-3-2_14-8-35.png" style="width: 40%" /></a>

Part of the related interfaces:

| Description                                                | Interface                     |
| :--------------------------------------------------------- | :---------------------------- |
| Check whether the mobile number is already been registered | /enduserapi/phoneIsRegister   |
| Send SMS verification code for registration                | /enduserapi/sendPhoneSmsCode  |
| Register an account with mobile number + password          | /enduserapi/phonePwdRegister  |
| Log in with mobile number + password                       | /enduserapi/phonePwdLogin     |
| Log in with mobile number + SMS verification code          | /enduserapi/phoneSmsCodeLogin |

For more terminal user related interfaces, see [OpenAPI User Guide](/en/appDevelop/OpenAPI.md).

## **Bind a Device**

### **2G/3G/4G/5G Device (Cellular Device)**

After a terminal user logs in to the mobile App, the user can bind a device by scanning device QR code.

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_15-3-48.png">![img](/en/quickStart/image2022-3-10_15-3-48.png)</a>

For example: <br />
<a data-fancybox title="img" href="/en/quickStart/image2022-3-2_14-12-36.png">
<img src="/en/quickStart/image2022-3-2_14-12-36.png" style="width: 40%" />
</a>

Part of the related interfaces:

| Description           | Interface                |
| :-------------------- | :----------------------- |
| Bind a device with SN | /enduserapi/bindDeviceSn |

For more terminal user related interfaces, see [OpenAPI User Guide](/en/appDevelop/OpenAPI.md).

### **Wi-Fi Device**

After a terminal user logs in to the mobile App, the user can bind a device by finding a device.

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_15-4-17.png">![img](/en/quickStart/image2022-3-10_15-4-17.png)</a>

For example:

<a data-fancybox title="img" href="/en/quickStart/image2022-3-16_19-51-15.png">
<img src="/en/quickStart/image2022-3-16_19-51-15.png" style="width: 24%" /></a>
<a data-fancybox title="img" href="/en/quickStart/image2022-3-16_19-51-25.png">
<img src="/en/quickStart/image2022-3-16_19-51-25.png" style="width: 24%" /></a>
<a data-fancybox title="img" href="/en/quickStart/image2022-3-16_19-51-33.png">
<img src="/en/quickStart/image2022-3-16_19-51-33.png" style="width: 24%" /></a>
<a data-fancybox title="img" href="/en/quickStart/image2022-3-16_19-51-41.png">
<img src="/en/quickStart/image2022-3-16_19-51-41.png" style="width: 24%" /></a>

Part of the related interfaces:

| Description         | Interface                  |
| :------------------ | :------------------------- |
| Bind a Wi-Fi device | /enduserapi/bindDeviceWifi |

For more terminal user related interfaces, see [OpenAPI User Guide](/en/appDevelop/OpenAPI.md).

## **Communicate with On-line Device in Real Time Through WebSocket**

You can obtain real-time message of on-line device with WebSocket API.

**WebSocket API Access Process**

 Create a WebSocket connection => Log in to Developer Center with token => Subscribe a device  => Communicate with the device

<a data-fancybox title="img" href="/en/quickStart/image2022-3-22_14-2-42.png">![img](/en/quickStart/image2022-3-22_14-2-42.png)</a>

**Note**: WebSocket API is available only after the terminal user registers an account and bind a device.

### **Mobile App Receives Uplink Data from Device**

Mobile App can receive online/offline event of the device, device and module status, device uplink data, and properties and events reported by TSL model through WebSocket API.

**Device message type supported by WebSocket API**

● Online/offline event<br />
● Device and module status<br />
● Transparent transmission - device uplink data<br />
● TSL model - device reports property<br />
● TSL model - Event - Message<br />
● TSL model  - Event - Alert<br />
● TSL model  - Event - Fault<br />
● Device reports positioning data.

For details of WebSocket API access, see [WebSocket Access Guide](/en/appDevelop/websocket/guide.md)。

### **Mobile App Issues Control Command**

**Command type supported by WebSocket API:**

● TSL model property - Read<br />
● TSL model property - Write<br />
● Call TSL model service<br />
● Transparent transmission command

For details of commands supported by WebSocket API, see [WebSocket Access Guide](/en/appDevelop/websocket/guide.md)。

For example

<a data-fancybox title="img" href="/en/quickStart/image2022-3-2_14-44-11.png">
<img src="/en/quickStart/image2022-3-2_14-44-11.png" style="width: 40%" />
</a>

## **Communicate with On-line Device with OpenAPI**

You can communicate with the device with OpenAPI if the real-time requirements are not high.

### **Mobile App Gets the Last Uplink Data**

Mobile App can obtain the latest data recorded in Developer Center through the following API.

| Description                       | Interface                            |
| :-------------------------------- | :----------------------------------- |
| Query device business attributes. | /enduserapi/deviceBusinessAttributes |

### **Mobile App Controls Device**

Mobile App controls the devices through HTTP interfaces. It is usually used to simply issue commands to the device without establishing a Websocket channel.

| Description                | Interface                      |
| :------------------------- | :----------------------------- |
| Control device in batches. | /enduserapi/batchControlDevice |