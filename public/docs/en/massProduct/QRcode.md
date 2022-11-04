# Device QR Code

If the device is a cellular product and there is a matching App for end users, the QR code of the device needs to be generated for device  binding.

Developer Center provides a convenient management process for mass production and management of device QR codes,  including generating QR code, binding QR code to device and import binding information.

## **Quectel QR Code**

Please use Quectel QR codes if you use a Quectel App.

### **Generate a QR Code**

You can click "Generate SN" on "Product Development"→"Debug Device" or "Device Management"→"Operation and Maintenance" page to obtain the SNs and QR codes issued by Developer Center in batches.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-17-35.png?version=1&modificationDate=1647241633000&api=v2">![img](/en/massProduct/image2022-3-14_15-17-35.png?version=1&modificationDate=1647241633000&api=v2)</a>

Click "**Generate SN**" to bring up the following window, where you can fill in the number of SNS as required.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-17-59.png?version=1&modificationDate=1647241656000&api=v2">![img](/en/massProduct/image2022-3-14_15-17-59.png?version=1&modificationDate=1647241656000&api=v2)</a>

After the SNs and the device QR codes are generated, the SN list and the device QR code images are provided in the form of a compressed package on Developer Center for users to download. After a device QR code is bound to the module IMEI, the App user can bind the App to the device and control the device through the device QR code.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2">![img](/en/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2)</a>

### **Bind QR Code to Device**

After QR codes are generated, you can provide the QR codes to the production department. During production, the SN&IMEI binding tool can be used to bind the IMEI (DK) of the module scanned by a QR code scanner to the QR code (PK+SN) of the device, record the relationship between the module IMEI (DK) and the QR code (SN) of the device, generate and export the relationship file.  

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-16-58.png?version=1&modificationDate=1647241596000&api=v2">![img](/en/massProduct/image2022-3-14_15-16-58.png?version=1&modificationDate=1647241596000&api=v2)</a>

### **Import Binding Information**

Click "Add a Device" on "Debug Device" page to bring up the following window. Check "Add Devices in Batches", select the product to which the device belongs to and the relationship file of module IMEI and device QR code. Click "Confirm" to upload the file to Developer Center. Developer Center will record the relationship between module IMEI and device QR code.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2">![img](/en/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2)</a>

After the relationship file is imported, App users can bind their Apps to the device by scanning the QR code of the device.

## **Custom QR Code**

When you develop an App independently, you can customize the device QR code data format, but you also need to upload the relationship file of the module IMEI and the device QR code (SN) to Developer Center.

### **Generate a QR Code**

Device manufacturers can generate device QR codes according to the requirements of actual application scenarios, and the QR codes should contain PK and SN information for binding the App to device. 

### **Bind QR Code to Device**

When a device is produced, you need to record the relationship between the module IMEI (DK) and the device QR code (SN), and organize the relationship file according to the device import template.

To obtain the device import template, click "Add Device > Template Download".

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2">![img](/en/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2)</a>

### **Import Binding Information**

Click "Add a Device" on "Debug Device" page to bring up the following window. Check "Add Devices in Batches", select the product to which the device belongs to and the relationship file between module IMEI and device QR code. Click "Confirm" to upload the file to Developer Center. Developer Center will record the relationship between module IMEI and device QR code.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2">![img](/en/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2)</a>

After the relationship file is imported, App users can bind their Apps to the device by scanning the QR code of the device.

