# Service Calls

This document introduces service calls. Service calls is a representation of the data defined as services in a TSL model for the product.

## **Prerequisites**

● A product has been created in TSL data format and a feature has been defined as a service in the TSL model.<br />
● A device has been developed and the data of service call has been sent.

## **Steps**

After logging in to Developer Center, click "Device Management"→ "Operation and Maintenance” in the left navigation bar to display the list of devices. Find the device and click "View" in the Action column to enter "Device Information" page, and then click "Service Calls" tab.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_11-45-7.png?version=1&modificationDate=1646883318000&api=v2">![img](/en/guide/image2022-3-10_11-45-7.png?version=1&modificationDate=1646883318000&api=v2)</a>

Parameters

| **Parameter**     | **Description**                                        |
| :------- | :------------------------------------------- |
| Feature ID  | Feature ID, unique identifier of a feature of the product            |
| Service Name | Name of the service defined in the TSL model                 |
| Identifier   | Identifier of the service defined in TSL model, corresponding to the service name |
| Send Time | The time when a service is called, that is, the creation time of the input parameter     |
| Response Time | The response time of the device after the service is called, that is, the creation time of the output parameter     |
| Input Parameter | Input the parameter when calling a service                       |
| Output Parameter | The parameter output in the response from the device                        |
