# Device List

This chapter introduces device-related operations on the "Device Maintenance" page.

## **Add a Device**

### **Precondition**

● A product is created.

### **Procedures**

1.Log in to Developer Center and click "Device Maintenance" in the drop-down box of "Device Management" in the left menu bar.

<a data-fancybox title="img" href="/en/guide/image2022-3-8_16-43-12.png?version=2&modificationDate=1647338478000&api=v2">![img](/en/guide/image2022-3-8_16-43-12.png?version=2&modificationDate=1647338478000&api=v2)</a>

2.Click **"Add a Device"** on the right, and the following window will pop up.

<a data-fancybox title="img" href="/en/guide/image2022-3-8_16-52-10.png?version=1&modificationDate=1646728954000&api=v2">![img](/en/guide/image2022-3-8_16-52-10.png?version=1&modificationDate=1646728954000&api=v2)</a>

3.The device can be added to Developer Center by two means, **"Add a Single Device"** and **"Add Devices in Batches"** .

Devices with different authentication types can be added to Developer Center by either means of "Add a Single Device" or "Add Devices in Batches".

Dynamic Authentication: When the product-level dynamic authentication is disabled, only the added devices can access Developer Center through ProductKey and ProductSecret for authentication and obtain DeviceSecret.

Static Authentication: Only devices with DeviceSecret downloaded in advance can be connected to Developer Center. Developer Center will reject the authentication applied by the device whose DeviceKey and DeviceSecret are unmatched.

After a device with static authentication is added successfully, you can obtain DeviceSecret generated for the device on the "Device Details" or "Manage in Batches" page.

Note: The device with static authentication as authentication type can only be added to the product with MQTT <span v-if="!isEu">and LwM2M</span> as Radio Access Technology.

Device with X.509 Certificate: Developer Center allows device to use its own X.509 certificate for authentication. The CA certificate must be uploaded before the device is connected to the platform.

When adding a device in the authentication type of X.509 Certificate to Developer Center, you can choose to input the corresponding device certificate fingerprint. If not, the fingerprint will be generated by the certificate used in the initial connection of the device, and the subsequent connection will be matched and verified by the generated fingerprint.

The device certificate fingerprint should be calculated by SHA-1, such as openssl x509 -fingerprint -sha1 -in certfile.crt. The fingerprint generated by openssl has the mark ":". You need to remove the ":" and upload a 40-bit hexadecimal string.

**Add Device Automatically**

Developer Center supports device access over <span v-if="!isEu">LwM2M and</span> MQTT protocols. When the product-level dynamic authentication is enabled, ProductKey and ProductSecret obtained when the product is created can be downloaded to the device. After the authentication process is completed, the new device will be automatically added to the device list of the corresponding product.

4.Click "Generate SN" on the right to generate a certain number of SNs as required (up to 10,000 each time) to bind devices for App.

<a data-fancybox title="img" href="/en/guide/image2022-3-8_17-25-18.png?version=1&modificationDate=1646730942000&api=v2">![img](/en/guide/image2022-3-8_17-25-18.png?version=1&modificationDate=1646730942000&api=v2)</a>

For other operations, see the following table:

| **Operation**     | **Description**                                                         |
| :------- | :----------------------------------------------------------- |
| Reset |	If you want to reset DeviceSecret or the fingerprint of the X.509 certificate after the device is connected to Developer Center, click on the "Device Information" tab to perform the authentication process again. |
| Sub-device Management  | This feature is only available to a gateway product. On this page, you can view, control, and manage the sub-devices that are connected to the current gateway and whose Gateway Access Mode is Product Integrated. |
| Delete     | If a device is in the inactivated status, you can delete the device and connect it to Developer Center again. After the device is deleted, Developer Center will still retain the historical data generated by the device. |
| Debug | See [Device Debugging](/en/guide/deviceManage/operation/Debugger.md) for details. |

