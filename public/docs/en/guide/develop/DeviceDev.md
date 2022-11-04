# Develop Device

This document introduces device development, the second step in product development process.

## **Prerequisites**

● A product has been created.<br />
● Features for the product have been defined.

## **Steps**

1.After logging in to Developer Center, click the product panel or "Device Development" button on the panel to start the product development process.

2.After finishing feature definition, click "Next" button or click "Develop Device” tab to enter "Develop Device" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-5_15-25-33.png?version=2&modificationDate=1647332201000&api=v2">![img](/en/guide/image2022-3-5_15-25-33.png?version=2&modificationDate=1647332201000&api=v2)</a>

The device development method is selected initially according to the network connection method of the current product.

The relationship between the network connection method and development method of the product:

<span v-if="isEu">

| **Network Connection Method** | **Development Method**                               |
| :------- | :-------------------------------------- |
| Cellular Mobile | QuecOpen<br />QuecPython<br />AT Commands<br />Modbus |
| Wi-Fi     | QuecOpen<br />QuecPython<br />AT Commands   |
| Bluetooth     | QuecOpen                            |

</span>
<span v-else>

| **Network Connection Method** | **Development Method**                               |
| :------- | :-------------------------------------- |
| Cellular Mobile | QuecOpen<br />QuecPython<br />AT Commands<br />Modbus |
| Wi-Fi     | QuecOpen<br />QuecPython<br />AT Commands   |
| NB-IoT   | QuecOpen<br />QuecPython<br />AT Commands   |
| Bluetooth     | QuecOpen                            |

</span>

  

3.The system will filter out the currently supported module models according to the network connection method selected when creating the product and the selected development method. Developers can select the modules which have been used in actual device development.

4.After the development method and module are selected, the corresponding development guide and download link of resources will display on the page.

Development Guide: mainly contains guidance documents, API documents, example and help information. Click the document name to view the document content.

Resources: mainly contains the materials required for the development of the selected module. Click the download link to the corresponding resource download page.

5.Details about device development, see [Develop Device](/en/deviceDevelop/preliminaries.md).
