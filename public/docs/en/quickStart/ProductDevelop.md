# Product Development

## **Case**

This document takes RGB LED light as an example to introduce how to use the basic features of Developer Center, such as device accessing Developer Center, device reporting data to Developer Center and Developer Center issuing command to the device.

<a data-fancybox title="img" href="/en/quickStart/image2022-3-22_14-24-1.png">![img](/en/quickStart/image2022-3-22_14-24-1.png)</a>

## **Precondition**

1. You have signed up an account. If you do not have an account yet, refer to [Registration Guidance ](/en/quickStart/register.md) to finish registration. 
2. The RGB LED Light has ported with QuecThing SDK.

## **Create Product**

Log in to Developer Center with your registered account and create a project named "RGB LED Light".

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_11-43-26.png">![img](/en/quickStart/image2022-3-10_11-43-26.png)</a>

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_11-43-5.png">![img](/en/quickStart/image2022-3-10_11-43-5.png)</a>

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_11-43-56.png">![img](/en/quickStart/image2022-3-10_11-43-56.png)</a>

Click and enter the created "RGB LED Light" project. Click "**Create a Product**" to create a product named "RBG LED Light" and configure the following information.

● Product Category: Select a category according to the product to be developed. In this case, light equipment is selected.<br />
● Device Type: Directly Connected Device and Gateway Sub-device. In this case, directly connected device is selected.<br />
<span  v-if="isEu">
● Network Connection Method: 2G/3G/4G/5G, WiFi and BLE. In this case, Wi-Fi is selected.<br />
</span>
<span  v-else>
● Network Connection Method: 2G/3G/4G/5G, WiFi, NB-IoT and BLE. In this case, Wi-Fi is selected.<br />
</span>


  
● Data Format: TSL and Custom. TSL format is recommended, because it can greatly shorten development time.

Having configured the items above, input the product name to finish the product creation. Click "Device Management" to enter the "Feature Definition" page.

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_11-44-37.png">![img](/en/quickStart/image2022-3-10_11-44-37.png)</a>

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_11-47-49.png">![img](/en/quickStart/image2022-3-10_11-47-49.png)</a>

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_11-48-18.png">![img](/en/quickStart/image2022-3-10_11-48-18.png)</a>



## **Define Feature**

On "Feature Definition" page, you can define the features of RGB LED Light.

For example,

● Define the on/off status of the light as a boolean data. False indicates off and True indicates on.<br />
● Define the color value as three integers (R, G and B). Range: 0–255. The configured color values form the light color.<br />
● Define the lighting intensity as an integer. Range: 0–100. The higher the value, the brighter the light. <br />
● Define the delay off feature as an integer. Range: 0–86400.

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_13-25-9.png">![img](/en/quickStart/image2022-3-10_13-25-9.png)</a>

## **Develop Device**

You can select a development mode based on the actual situation and view the corresponding development guide on the page.

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_13-48-37.png">![img](/en/quickStart/image2022-3-10_13-48-37.png)</a>

Currently, there are three solutions to help you connect your device to Developer Center. See the following documents for details.

● [QuecOpen](/en/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-01.md)<br />
● [QuecPython](/en/deviceDevelop/cellular/speediness/QuecPython/speediness-quecpython-01.md)<br />
● [AT Command](/en/deviceDevelop/cellular/speediness/AT/speediness-at-01.md)


## **Debug Device**

After the device is connected to Developer Center, you can use the device debugging feature to test uplink and downlink business data.

**<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_13-50-38.png">![img](/en/quickStart/image2022-3-10_13-50-38.png)</a>**

On "Device Debug" page, you need to set the "Expected Value" to a specified feature, and then click "Send Command" to issue the command to the device.

Through the device debugging feature, you can judge whether the features of reporting data and receiving the control commands is available, and complete the hardware development work.

**<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_13-50-59.png">![img](/en/quickStart/image2022-3-10_13-50-59.png)</a>**