# Data Logs

This document introduces data logs. Data Logs record the uplink data sent from the device to Developer Center and the downlink data sent from Developer Center to the device.

## **Prerequisites**

● A product has been created.<br />
● A device of the product has been developed and debugged successfully.<br />
● A uplink data or downlink data has been sent.

## **Steps**

After logging in to Developer Center, click "Device Management"→ "Operation and Maintenance" in the left navigation bar to display the list of devices. Find the device you have developed and debugged and click "View" in the Action column to enter the detail page of the device. Then click "Data Logs" tab.

<a data-fancybox title="img" href="/en/guide/image2022-3-8_20-11-43.png?version=1&modificationDate=1646740927000&api=v2">![img](/en/guide/image2022-3-8_20-11-43.png?version=1&modificationDate=1646740927000&api=v2)</a>

Parameters

| **Parameter**    | **Description**                                                        |
| :------- | :----------------------------------------------------------- |
| Ticket   | Unique identifier of data.                                          |
| Creation Date | The time when the data is stored.                                             |
| Data Type |**Uplink Data:** The commands or messages that the device reports to Developer Center. </br>**Downlink Data:**  The commands or messages that Developer Center sends to the device through API or Developer Center webpage. |
| Sending Status |**Pending:** Indicates that when the device is offline and a cache duration is set, the downlink data that Developer Center sends to the device through device debugging or the API of applications is in "**Pending**" state. The data will be delivered when the device goes online or sends uplink data within the cache duration. Pending state only exists when a downlink data is sent.</br> **Sent:** Successful delivery of downlink data refers to the downlink data sent from Developer Center through device debugging or the API of applications is delivered to the device and Developer Center receives a response from the device within 5 seconds. Successful delivery of downlink data refers to the uplink data sent from the device is delivered to Developer Center successfully. </br>**Failed:** Failed delivery of uplink data means that the device is connected to the gateway successfully, but no subsequent action is performed, which resulting in abnormal server or network. Failed delivery of downlink data means that the downlink data sent from Developer Center through device debugging or the API of applications is delivered to the device, but Developer Center does not receive a response from the device within 5 seconds. In most cases, failed delivery of downlink data is caused by a fake connection which is generated when the connection between the module and Developer Center is disconnected, but the device is not logged out actively. |
| Content | Click "View" button to view the data in various data formats. **HexString**: Data or byte array is converted to hexadecimal characters; (for example, binary 0x1234AB (3 bytes) is converted to string "1234AB" (6 bytes); String "1234AB" (6 bytes) is converted to binary 0x1234AB (3 bytes)). **Base64**: A binary data which is based on 64 printable characters (A-Z in upper case, a-z in lower case, +, /).. **Text**: A string which is in UTF-8 encoding format. **Json**: The format in which a TSL model is transmitted and presented.|
| Send Date | The send time of downlink data indicates the time when the data is sent from Developer Center to the device. The send time of uplink data indicates the time when Developer Center receives the data sent from the device. |

