# Device Information

This chapter introduces device information on the "Device Maintenance" page, including basic information and module information.

## **Preconditions**

● A product is created.<br />
● The steps from Define Feature to Debug Device are completed.

## **Procedures**

1.Log in to Developer Center and click "Device Maintenance" in the drop-down box of "Device Management" in the left menu bar. On the "Device Maintenance" page, click "View" in the "Action" bar to jump to the "Device Information" tab.  

<a data-fancybox title="img" href="/en/guide/image2022-3-8_19-6-34_en.png?version=1&modificationDate=1646737018000&api=v2" v-if="isEu">![img](/en/guide/image2022-3-8_19-6-34_en.png?version=1&modificationDate=1646737018000&api=v2)</a>
<a data-fancybox title="img" href="/en/guide/image2022-3-8_19-6-34.png?version=1&modificationDate=1646737018000&api=v2" v-else>![img](/en/guide/image2022-3-8_19-6-34.png?version=1&modificationDate=1646737018000&api=v2)</a>

<a data-fancybox title="img" href="/en/guide/image2022-3-8_19-7-31.png?version=1&modificationDate=1646737075000&api=v2">![img](/en/guide/image2022-3-8_19-7-31.png?version=1&modificationDate=1646737075000&api=v2)</a>

**Basic Information**

| **Parameter**         | **Description**                                              |
| :----------- | :------------------------------------------------- |
| Associated Product     | Name of the product to which the device belongs                          |
| Device Status     | Online/Offline                                          |
| Device Name     | The default value is the same as DeviceKey. It is can be edited.                       |
| DeviceKey    | The identifier for device to connect Developer Center, which is unique under the current product |
| DeviceSecret | Device secret issued by Developer Center after the device is certificated |
| Authentication Type | Authentication type when the device access Developer Center.|
| Certificate Fingerprint | Device certificate identifier. After the bidirectional authentication between the device and Developer Center is successful, the certificate fingerprint will be bound to the device. As to later connection, the device can only be connected to Developer Center by this device certificate.</br>The device certificate fingerprint should be calculated by SHA-1, such as openssl x509 -fingerprint -sha1 -in certfile.crt. The fingerprint generated by openssl has the mark ":". You need to remove the ":" and upload a 40-bit hexadecimal string.</br>You can set a new fingerprint when resetting the fingerprint. After the fingerprint is set successfully, the new fingerprint can be used to verify the connection permission of the device. |
| Device Type     | Directly Connected Device, Gateway, Gateway sub-device                   |
| Connection Protocol     | Protocol used by the device to connect to Developer Center. MQTT <span v-if="!isEu">and LwM2M are</span><span v-else>is</span> supported currently.            |
| Creation Date    | The time when the device is added to Developer Center                                 |
| Previous Online Time | The last time the device was online                                   |
| Device SN       | ID of the device bound to App. It is can be edited.              |

  

**More Device Information** includes module information and device status.

| **Parameter**         | **Description**                |
| :----------- | :------------------ |
| Module Type    |                     |
| Module Version     |                     |
| MCU Version      |                     |
| ICCID      |                     |
| MCC          | Mobile country code       |
| MNC          | Mobile network code       |
| Support Positioning     | Whether positioning feature is supported   |