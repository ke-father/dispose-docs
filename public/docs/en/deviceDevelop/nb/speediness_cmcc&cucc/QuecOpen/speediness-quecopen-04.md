# Presentation

## **1. Device Online**

### **1) Device Online**

Download the program into the module, and the module will automatically connect to Developer Center according to the code steps. After the module is connected to Developer Center, Developer Center will automatically add the device under the product and __automatically authenticate__ them.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-08.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-08.png)</a>

### **2) Enable Device Debug**

After the module is successfully connected to Developer Center, you can access the device console to debug the device.

In __"Quectel International Hotel" project__  > __Product Management__ page, click __"View"__ in the corresponding Action bar to receive data. Enter __Device Details__ page and click __Device Debug__ to debug TSL data online.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-09.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-09.png)</a>

## **2. Debug Device Online**

 <font color=#999AAA >Note: Device debugging online helps developers to debug device features, including property debug and some service debug. Ensure the device works online during device debugging.</font>


### __1) View Data Logs__

From the communication logs, you can see that the device reports the remaining content of essential oil to Developer Center every 30 seconds.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-10.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-10.png)</a>

### __2) Read the Current Property Value__

Click __Read Data in Batches__ or select single property to __Read__, and then Developer Center will send the querying command to the device. You can also read Communication Logs in real time to check the situation of data sent and reported by the device.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-11.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-11.png)</a>

### __3) Service Calls__

According to __Device Debug__ > __Service Calls__ defined by TSL feature, you can simulate the condition of remotely issuing command. In "Device Debug" page, select __Set Working Mode__ , set parameter to __Working Mode 2__ and click __"Send Command"__ , then you can see that the device has received the service issued by Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-12.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-12.png)</a>


### __4) Alert Event Logs__

By viewing __Event Logs__, you can see that the device automatically reports the alert event to Developer Center once an alert is generated.


<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-13.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-13.png)</a>