# Running State

This document introduces the running state. Running state information is only for devices under the products in TSL data format.

## **Prerequisites**

● A product has been created in TSL data format.<br />
● A device has been developed and TSL data has been sent.

## **Steps**

After logging in to Developer Center, click "Device Management"→ "Operation and Maintenance” in the left navigation bar to display the list of devices. Find the device and click "View" in the Action column to enter "Device Information" page, and then click "Running State" tab.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_9-19-45.png?version=1&modificationDate=1646874596000&api=v2">![img](/en/guide/image2022-3-10_9-19-45.png?version=1&modificationDate=1646874596000&api=v2)</a>

Running state displays the properties in the TSL model. Find the property you want to view and click "View Data" button in the Action column to get the historical data of the current property.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_11-35-57.png?version=1&modificationDate=1646882767000&api=v2">![img](/en/guide/image2022-3-10_11-35-57.png?version=1&modificationDate=1646882767000&api=v2)</a>

Parameters

| **Parameter**    | **Description**                                                         |
| :------- | :----------------------------------------------------------- |
| Feature ID   | Feature ID, unique identifier of a feature of the product                             |
| Property Name | Name of the property defined in the TSL model                                      |
| Data Type | Data type of the feature. See [TSL Overview](/en/guide/develop/definition/page-01.md).|
| Identifier   | Identifier of a feature defined in TSL model                                            |
| Update Date | The most recent time when the data was reported and stored                                         |
| Current Value   | The most recently reported feature value                                |

