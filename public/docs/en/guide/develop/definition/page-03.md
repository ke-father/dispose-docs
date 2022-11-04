# Self-defined Features

## **What is a Self-defined Feature?**

A self-defined feature is a personalized feature that can be defined according to the specific usage scenarios of the current product. It has no connection with the product category and only works under the current product.

## **Add a Self-defined Feature**

### **Prerequisites**

● A product has been created in TSL data format.

### **Steps**

1.After logging in to Developer Center, click the product panel or "Device Development" button on the panel to start the product development process.

<a data-fancybox title="img" href="/en/guide/image2022-3-3_16-28-9.png">![img](/en/guide/image2022-3-3_16-28-9.png)</a>

2.On "Define Feature" tab, click "Edit Draft" to enter the draft editing page.

<a data-fancybox title="img" href="/en/guide/image2022-3-22_9-58-55.jpg">![img](/en/guide/image2022-3-22_9-58-55.jpg)</a>

3.Click "Add a Self-defined Feature" to bring up the following window.

<a data-fancybox title="img" href="/en/guide/image2022-3-22_9-59-42.png">![img](/en/guide/image2022-3-22_9-59-42.png)</a>

You can define properties, events and services for the current product.

### **Add a Self-defined Property**

In the pop-up window, select "Property" in the drop-down box of feature type and enters the required parameters, then click "Confirm". A self-defined property is added.

<a data-fancybox title="img" href="/en/guide/image2022-3-22_9-59-42.png">![img](/en/guide/image2022-3-22_9-59-42.png)</a>

Parameters

|**Parameter**        | **Description**                                                                                                                   |
| :----------- |:---------------------------------------------------------------------------------------------------------------------|
| Feature Name     | Name of the property, such as power consumption. Feature names of the same product must be unique. The value can contain a maximum of 128 characters, which can be Chinese characters, uppercase and lowercase letters, digits, dashes, underscores, slashes and decimal points, and must start with a Chinese character, letter or digit.                                     |
| Identifier      | The identifier of the feature, which corresponds to the feature ID. It is used for the application to exchange the key fields with the device. Properties, events, and services of each TSL model are unique.                                                                   |
| Data Type    | Data type. INT, FLOAT, DOUBLE, ENUM, TEXT, DATE, STRUCT, ARRAY, BOOL. See [Supported Data Types](/en/guide/develop/definition/page-01.md#supported-data-types) for details.|
| Value Range   | When the data type is numeric (INT/FLOAT/DOUBLE), the value range can be limited.                                                                          |
| Step Length         | When the data type is numeric (INT/FLOAT/DOUBLE), you can set the minimum granularity of property variations.                                                                         |
| Unit        | When the data type is numeric (INT/FLOAT/DOUBLE),  you can select the corresponding unit according to actual business scenarios.                                                                        |
| Data Length    | When the data type is TEXT, you need to limit the length of the text. The maximum length of the text cannot exceed 10,240 bytes.                                                                             |
| Maximum Number of Elements | When the data type is ARRAY,  you need to set the maximum length of the array.                                                                                                 |
| Element Type     | When the data type is ARRAY, you need to define the element type in the array to make sure that every element in the array is of the same type.                                                                           |
| Read/Write Type    | R: read only; W: write only; RW: read and write.                                                                                                    |
| Description      | Description or note of the feature. The maximum length cannot exceed 200 characters.                                                                                      |

### **Add a Self-defined Event**

In the pop-up window, select "Event" in the drop-down box of feature type and enters the required parameters, then click "Confirm". A self-defined event is added.

<a data-fancybox title="img" href="/en/guide/image2022-3-22_10-3-21.png">![img](/en/guide/image2022-3-22_10-3-21.png)</a>

Parameters

| **Parameter**        | **Description**                                                         |
| :------- | :----------------------------------------------------------- |
| Feature Name  | Name of the event, such as over-voltage alarm. Feature names of the same product must be unique. The value can contain a maximum of 128 characters, which can be Chinese characters, uppercase and lowercase letters, digits, dashes, underscores, slashes and decimal points, and must start with a Chinese character, letter or digit.|
| Identifier   | The identifier of the feature, which corresponds to the feature ID. It is used for the application to exchange the key fields with the device. Properties, events, and services of each TSL model are unique. |
| Event Type | Message: a general notification reported by a device, for example, the completion of a task.<br />Alert: an emergency or exception that a device actively reports to Developer Center when the device is running. The alert information has a high priority.<br />Fault: an emergency or exception that a device actively reports to Developer Center when the device is running. The fault information has a high priority. |
| Output Parameter | The output parameter of the event. Click "Add a Parameter" to add an event output parameter in the pop-up window. You can use a property as a parameter or customize a parameter. For example, if voltage, the defined property, is used as the output parameter, the voltage value of the current device will be carried in the fault event reported by the device to help further determine the cause of the fault.|
| Description     | Description or note of the feature. The maximum length cannot exceed 200 characters.     |

### **Add a Self-defined Service**

In the pop-up window, select "Service" in the drop-down box of feature type and enters the required parameters, then click "Confirm". A self-defined event is added.

<a data-fancybox title="img" href="/en/guide/image2022-3-22_10-3-45.png">![img](/en/guide/image2022-3-22_10-3-45.png)</a>

Parameters

| **Parameter**        | **Description**                                                       |
| :------- | :----------------------------------------------------------- |
| Feature Name | Name of the service, such as open/close gate. Feature names of the same product must be unique. The value can contain a maximum of 128 characters, which can be Chinese characters, uppercase and lowercase letters, digits, dashes, underscores, slashes and decimal points, and must start with a Chinese character, letter or digit. |
| Identifier   | The identifier of the feature, which corresponds to the feature ID. It is used for the application to exchange the key fields with the device. Properties, events, and services of each TSL model are unique.
| Call Type | ASYNC: when the service is called asynchronously, Developer Center returns the results directly without waiting for a response from the device<br />SYNC: when the service is called synchronously, Developer Center waits for a response from the device. If the device does not respond, the calling of service times out (currently not supported). |
| Input Parameter | The input parameter of the service, which is optional. Click "Add a Parameter" to add the service input parameter in the pop-up window. You can use a property as an input parameter or customize a parameter. |
| Output Parameter | The output parameter of the service, which is optional. Click "Add a Parameter" to add the service output parameter in the pop-up window. You can use a property as an output parameter or customize a parameter. |
| Description     | Description or note of the feature. The maximum length cannot exceed 200 characters.      |

## **Batch Add TSL Features**

### **Steps**

1.After logging in to Developer Center, click the product panel or "Device Development" button on the panel to start the product development process.

2.On "Define Feature" tab, click "Edit Draft" to enter the draft editing page.

3.Click "Import" to bring up the following window.

<a data-fancybox title="img" href="/en/guide/image2022-3-22_10-4-58.jpg">![img](/en/guide/image2022-3-22_10-4-58.jpg)</a>

There are two methods to add TSL features in batches.

- On the "Copy Product" tab, select a source product and a corresponding TSL version. Click "Confirm".  The default module and custom TSL model corresponding to the source product are imported. On the "Define Feature" tab, click "Edit Draft". On the page that appears, find the required TSL feature and click "Edit" to modify the feature.

- On the "Import TSL" tab, upload a JSON file or an Excel file.

## **Update a Self-defined Feature**

### **Prerequisites**

- A self-defined feature has been added.

### **Steps**

1.After logging in to Developer Center, click the product panel or "Device Development" button on the panel to start the product development process.

2.On "Define Feature" tab, click "Edit Draft" to enter the draft editing page.

3.Find the feature that you want to update and click "Edit" in the Action column.

<a data-fancybox title="img" href="/en/guide/image2022-3-22_10-31-8.png">![img](/en/guide/image2022-3-22_10-31-8.png)</a>

In the pop-up window, modify the information such as feature name, data type and identifier, and click "Confirm".  The feature type cannot be modified.



## **Delete a Self-defined Feature**

### **Prerequisites**

- A self-defined feature has been added.

### **Steps**

1.After logging in to Developer Center, click the product panel or "Device Development" button on the panel to start the product development process.

2.On "Define Feature" tab, click "Edit Draft" to enter the draft editing page.

3.Find the feature that you want to update and click "Delete" in the Action column. In the dialog box that appears, click "Confirm".

<a data-fancybox title="img" href="/en/guide/image2022-5-9.jpg">![img](/en/guide/image2022-5-9.jpg)</a>
