# Manage Product
This document describes the preparations for product development, the creation and maintenance of products. A product is a collection of devices that have the same feature definition (TSL model). Developer Center issues a unique **ProductKey** for each product. The same ProductKey will be downloaded to all devices of this product for connection authentication and communication between the devices and Developer Center.

## **Prerequisites**

● A project has been created.

## **Steps**
1.After logging in to Developer Center, click the project you have created to enter "Product Management" page.
<a data-fancybox title="img" href="/en/guide/image2022-3-29-1.png?version=1&modificationDate=1646119616000&api=v2">![img](/en/guide/image2022-3-29-1.png?version=1&modificationDate=1646119616000&api=v2)</a>
2.Click "Create a Product" to bring up the following window.

**Product Category**: A device division based on the usage scenarios.

You can select "Self-defined Development" or "Solutions By Industry" according to your own development needs.

3.Then select "Device Type". The supported device types are directly connected device, gateway and sub-device.  

You can select the appropriate device type for your device. The diagram of different device types below is for your reference.

<ALink imgurl="/en/guide/image2022-3-29-4.png?version=1&modificationDate=1646384329000&api=v2" imgenurl="/en/guide/image2022-3-29-4_en.png?version=1&modificationDate=1646384329000&api=v2" />


<span v-if="isEu">

| **Parameter**         | **Description**                                                        |
| :----------- | :----------------------------------------------------------- |
| Product Category    | A device division based on the usage scenarios, equivalent to a product template.<br />● Self-defined Development: You can define the features of a TSL model according to the actual features of your hardware product.<br />● Solutions By Industry:  The industry solution available for this product. The SaaS platform and App provided by the solution can be used directly without redevelopment.<br />● Defined Standard TSL Model: Indicates that a complete TSL model is defined for this product category on Developer Center.<br />● Customized Categories on QuecOne:  Indicates that there is a customized page for product category control on QuecOne. |
| Device Type    | Device type.<br />● Directly connected device:  a hardware device that integrates a communication module and can be directly connected to Developer Center.<br />● Gateway: It integrates a communication module, mounts sub-devices through different protocols such as 485, Zigbee and RS232 and provides Internet access through a proxy server for sub-devices, so that the sub-devices can connect to Developer Center. A gateway can be used to manage sub-devices and it maintains a topological relationship with the sub-devices.<br />● Gateway sub-device: It does not directly connect to Developer Center, but connects to Developer Center through gateway proxy. |
| Network Connection Method     | Network connection method for directly connected device and gateway. <br />● Directly connected device: 2G/3G/4G/5G, Wi-Fi and Bluetooth<br />● Gateway: 2G/3G/4G/5G, Wi-Fi|
| Data Format     | Format of uplink and downlink data.<br />● TSL  (Recommended): A data exchange protocol between the device and Developer Center provided by Developer Center. It is in JSON format.<br />● Custom: If you want to use a custom data format, you can select "Custom". |
| Specified Gateway | If device type is gateway sub-device, you need to determine whether to specify the corresponding gateway.<br />● Disable: Sub-devices can access Developer Center through any gateway.<br />● Enable: Sub-devices can access Developer Center only through the specified gateway. |
| Gateway Access Mode | If device type is gateway sub-device, you need to select a gateway access mode.<br />● Internet Access only Through Proxy Server: Sub-devices take the gateway as a network access and data forwarding channel, and the sub-devices are managed as directly connected devices.<br />● Product Integration: Sub-devices are integrated into the gateway, through which sub-devices can be queried and controlled. |
| Product Name    | The product name under an account is unique.                   |

</span>
<span v-else>

| **Parameter**         | **Description**                                                        |
| :----------- | :----------------------------------------------------------- |
| Product Category    | A device division based on the usage scenarios, equivalent to a product template.<br />● Self-defined Development: You can define the features of a TSL model according to the actual features of your hardware product.<br />● Solutions By Industry:  The industry solution available for this product. The SaaS platform and App provided by the solution can be used directly without redevelopment.<br />● Defined Standard TSL Model: Indicates that a complete TSL model is defined for this product category on Developer Center.<br />● Customized Categories on QuecOne:  Indicates that there is a customized page for product category control on QuecOne. |
| Device Type    | Device type.<br />● Directly connected device:  a hardware device that integrates a communication module and can be directly connected to Developer Center.<br />● Gateway: It integrates a communication module, mounts sub-devices through different protocols such as 485, Zigbee and RS232 and provides Internet access through a proxy server for sub-devices, so that the sub-devices can connect to Developer Center. A gateway can be used to manage sub-devices and it maintains a topological relationship with the sub-devices.<br />● Gateway sub-device: It does not directly connect to Developer Center, but connects to Developer Center through gateway proxy. |
| Network Connection Method     | Network connection method for directly connected device and gateway. <br />● Directly connected device: 2G/3G/4G/5G, Wi-Fi, NB-IoT and Bluetooth<br />● Gateway: 2G/3G/4G/5G, Wi-Fi|
| Data Format     | Format of uplink and downlink data.<br />● TSL  (Recommended): A data exchange protocol between the device and Developer Center provided by Developer Center. It is in JSON format.<br />● Custom: If you want to use a custom data format, you can select "Custom". |
| Connected Platform    | If network connection mode is NB-IoT, you need to select a connected platform.<br />● Developer Center: Devices access Developer Center through the NB Broker provided by Quectel.<br />● China Telecom AEP:  Devices are connected to Developer Center through China Telecom AEP which is served as a bridge. The bridging service of IoT as Bridge is established between China Telecom AEP and Developer Center. |
| Data Encryption Method| If connected platform is China Telecom AEP,  you need to select a data encryption method.<br />● DTLS: Datagram Transport Layer Security<br />● Plaintext: no encryption |
| Power Saving Mode     | If the connected platform is China Telecom AEP, you need to select a power saving mode.<br />● PSM Mode: The device enters PSM state after the data connection is terminated or the periodic TAU is completed. The device is in a hibernation state and no longer listens for the signal. The downlink data from Developer Center is cached and will not be sent until the device exits PSM state.<br />● DRX Mode: Discontinuous reception mode. Due to the short DRX cycle, the downlink data from Developer Center can be sent immediately (if Qmode is supported when the device is registered, commands are issued in Qmode, that is, the idle time window is used to switch the device status from active state to hibernation state).<br />● eDRX Mode: Extended discontinuous reception code. The cycle of eDRX is longer than that of DRX and requires a high latency. You need to select message caching or immediate delivery based on whether the device is hibernated. To create a product in eDRX mode, you need to enter the actual eDRX cycle of the device to determine the timeout period for issuing commands.|
| Specified Gateway | If device type is gateway sub-device, you need to determine whether to specify the corresponding gateway.<br />● Disable: Sub-devices can access Developer Center through any gateway.<br />● Enable: Sub-devices can access Developer Center only through the specified gateway. |
| Gateway Access Mode | If device type is gateway sub-device, you need to select a gateway access mode.<br />● Internet Access only Through Proxy Server: Sub-devices take the gateway as a network access and data forwarding channel, and the sub-devices are managed as directly connected devices.<br />● Product Integration: Sub-devices are integrated into the gateway, through which sub-devices can be queried and controlled. |
| Product Name    | The product name under an account is unique.                   |

</span>

  

4.After you configure your product, you need to enter a valid name for the product.

5.Click "Create". A product is created successfully!

6.Click "Stay" to display all products under the current project, and the first one is the last product you created. The product panel displays some information about the current product, including product name, development status, product category, product image, creation time and ProductKey automatically generated by Developer Center for the product.

7.Find the product in the product list and click it to enter the page shown below.

The basic information of the product is displayed in the right column, where you can modify the product name, product image and binding permission. Binding permissions refer to the binding restrictions when the end users bind their accounts to the device, which is divided into three modes.<br />
● Multibinding: multiple user accounts can be bound to the same device at the same time.<br />
● Alternate Binding: only one user account can be bound to a device. After an account is bound to the device, the binding is unbound when another account is bound to the device.<br />
● Single Binding: only one user account can be bound to a device. After an account is bound to the device, another account will fails to be bound at the same time.

>Note: If two user accounts are bound to a device at the same time, the multibinding cannot be changed to other binding modes.Products connected over Bluetooth only support Alternate Binding and Single Binding.


The sharing permission for the end users can be controlled by turning on or off the device sharing.  And when device sharing is turned on, the devices of the product can be shared. (When device sharing is turned off, the shared device and its users are not affected, but the device cannot be shared to new users. ) 

The last part of the product information is a statistic on the total number of devices under the current product, the number of activated devices and the number of online devices. Click "Purchase Activation Code" to learn how to increase the activation codes for the product.

