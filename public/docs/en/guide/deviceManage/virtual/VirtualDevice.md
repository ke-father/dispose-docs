# Virtual Device
Before the hardware is developed, you can use the virtual device to simulate the real communication data of the application for data interaction debugging and preview the effect of the application.
You can use the mobile App to scan the QR code on the virtual device for binding.

## **Virtual Device Go Online/Offline** 

One virtual device can be enabled for each product under each account.

DeviceKey and SN of a virtual device are required when you create a virtual device. You can also use the default value to complete the creation.

Having created a virtual device, you can click "**Go Online**" or "**Go Offline**" to change the online status of the device.

The virtual device can be online for a maximum of 24 hours at a time, after which it will automatically go offline.

When the virtual device is a sub-device, you need to bind it to a virtual gateway when the virtual device goes online.

## **Simulate Data Reporting** 

You can simulate the real device reporting TSL data through the Property, Event, and Service Calls pages on the left. 

1. Select the TSL model to be reported.
2. Set the specific value expected to be reported.
3. Click "**Push**".

After the TSL data is pushed successfully, the application (App or AMQP consumer client) can receive the uplink data of the device. (Uplink messages can be pushed only when the virtual device is online.) 

You can set the Delayed Response Time to simulate non-real-time response situations such as querying device status and service callback response on the application.


## **Communication Logs** 
When a virtual device goes online/offline, receives downlink  TSL data and simulates reporting TSL data, the contents will be displayed in the "Communication Log" page.


NOTE: Currently, the feature of virtual device is unavailable for the products with China Telecom NB-IoT or Bluetooth as radio access technology or Transparent Transmission/Self-defined as data format. 