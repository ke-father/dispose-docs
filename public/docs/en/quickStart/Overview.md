# Overview

How to connect my device to Developer Center? Refer to the following figures.

<a data-fancybox title="img" href="/en/quickStart/image005.png">![img](/en/quickStart/image005.png)</a>

## **Develop Device**

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_11-34-48.png">![img](/en/quickStart/image2022-3-10_11-34-48.png)</a>


## **Develop Application**

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_10-22-13.png">![img](/en/quickStart/image2022-3-10_10-22-13.png)</a>

## **Develop SaaS Application**

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_10-22-46.png">![img](/en/quickStart/image2022-3-10_10-22-46.png)</a>

## **Data Flow**

<ALink imgurl="/en/quickStart/image2022-3-22_10-39-54.png" imgenurl="/en/quickStart/image2022-3-22_10-39-54_en.png" />


## **Access Process**

The whole development process is divided into five steps:

 - Create a project, including a collection of features for project dimension such as project information.

 - Create a product, including project information and TSL model definition.

 - Develop a device, including adding a device, offline development and device debugging (such as device registration, data interaction and device de-registration).

 - Develop a SaaS application, usually for device feature application management, operation and maintenance management, and terminal data analysis.

 - Develop an App, usually for reading and controlling device information and reporting device faults.

<a data-fancybox title="img" href="/en/quickStart/image10013.png">![img](/en/quickStart/image10013.png)</a>

**1. On Developer Center**

As shown in the above figure, a developer can create a project, a product and a device on Developer Center after you register an account and log in. Having created a product, you will get [**ProductKey**](/en/introduction/page-03.md) and [**ProductSecret**](/en/introduction/page-03.md). You can burn the ProductKey and ProductSecret to the device hardware. Once the device is connected to Developer Center, the device will be automatically added to the product.

**2. On Device**

Before connecting the terminal device to Developer Center, you need to develop the device, that is, port the basic communication kit SDK (QuecThing is integrated) provided by Developer Center to device. Click <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">**here**</a> to view all modules integrated with QuecThing SDK. For more module models, click [**here** ](https://yiyuanznsb.tmall.com/shop/view_shop.htm). 

**3. Connect a Device to Developer Center**

For the devices integrated the QuecThing SDK, you can connect the device to Developer Center in any of the three solutions of AT Command/QuecOpen/QuecPython.

**4. Connect a SaaS Application to Developer Center**

After a device is connected to Developer Center, the device data can be directly reported to Developer Center. Between SaaS application and device management platform, device data can be synchronized through AMQP feature, and commands can be issued through API to remotely manage the device.

**5. Connect an App to Developer Center**

After a device is connected to Developer Center, you can obtain real-time status of the device and issue commands through WebSocket on your mobile phone, and read the latest reported commands sent by the device through API to remotely manage the device.
