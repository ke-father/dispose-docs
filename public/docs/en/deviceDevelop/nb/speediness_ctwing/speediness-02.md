# Operations on Developer Center

__Quectel Developer Center__ has simplified the operations between Developer Center and __China Telecom AEP__ and shielded the complexed device interfaces.  To bridge __China Telecom AEP__, you only need to select **China Telecom AEP** in "Connection Platform" when you create the product on Developer Center. After that, the devices added or imported to this product on Developer Center will be added to __China Telecom AEP__ automatically. The operations of creating a product, deleting a product, deleting a device will also be synchronized to __China Telecom AEP__. To manage the connections between the device and Developer Center, you only need to complete the following operations without pay extra attention to __China Telecom AEP__.  This section takes Smart Door Sensor as an example.



## **Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">__Developer Center__</a>. If you have no account on Developer Center, you can register an account on Developer Center by referring to <a :href="toDevelopCenter('registerType', 'en')" target="_blank"> __Platform Registration__ </a>.



## **Create a Project**

Create a project named __“Quectel Smart Industrial Park”__  to present the management of smart door sensor project.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-2.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-2.png"></a>


## **Create a Product**

<font color=#999AAA >Note: Developer Center generates unqiue PK and PS after the product is created. Please keep the generated PK and PS safely. Developer Center requires the PK and PS when you connect the device to Developer Center or delete the product on Developer Center.</font>

In the product creation window, "Connection Platform" is displayed when you select **NB-IoT** in "Radio Access Technology", and select **China Telecom AEP**, then the devices belonging to this product are the devices that have connected to **China Telecom AEP**. The saved product will also be created on  **China Telecom AEP** synchronously.



__TSL__

A Thing Specification Language (TSL) model is a data model that is defined for a device in Developer Center. A TSL model digitizes a physical entity in Developer Center. The standard data format defined by Developer Center is the TSL model, which is the data format for the communication between Developer Center and the device. A TSL model includes the properties, services, and events of an entity. After defining and publishing a TSL model, the TLS model definition of the product is completed, and then Developer Center parses, inspects and processes the data.

Click **Create Product** in __Product Management__ to create a product named __“Smart Door Sensor”__. This sample takes __TSL model__ as the data format.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-3.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-3.png"></a>


* __Product Name__: Unique name of the product.
* __Product Category__: Developer Center has defined standard TSL features for different industrial categories. The standard TSL features are available if a standard category is selected. You can check the standard TSL features for the product by clicking **View** to pop up the feature table. <font color=#999AAA >Note: You can modify the TSL feature definition in draft mode.</font>
* __Device Type__: **Directly Connected Device** is the devices can directly connect to Developer Center. **Gateway Device** and **Gateway Sub-device** are the devices can connect to Developer Center through Wi-Fi network connection method. The NB-IoT module mentioned in this section is directly connected device. 
* __Radio Access Technology__: The network connection method of devices. 
* __Connection Platform__: This option is selected based on the IoT SIM card inserted in the device. If it is China Telecom, you should select **China Telecom AEP**. If it is China Mobile or China Unicom, you should select **QuecCloud**.
* __Data Format__: Developer Center supports two data formats, that are TSL and Custom.  You can choose one of them according to the actual business scenario. 
* __Connection Protocol__: Currently only LwM2M is supported for NB-IoT module.
* __Data Encryption Method__: China Telecom AEP supports DTLS Encryption and Plain Text. **Plain Text** indicates no encryption.
* __Power Saving Mode__: You can select one of the three modes (PSM, DRX and eDRX) according to the modes actually supported by the module and the project requirements.
* __eDRX Period__: This option is displayed if eDRX is selected in **Power Saving Mode**. Range: 20–10485.76 seconds.
  	

__Terms__	

| Term | **Description**                                              |
| :--: | :----------------------------------------------------------- |
| DTLS | DTLS is short for Datagram Transport Layer Security, which is an extension based on TLS protocol. DTLS ensures transmission security of UDP connection. |
| PSM  | The device enters PSM mode after the data connection is ended or periodical TAU is completed. In this state, the device hibernates and does not monitor paging. Developer Center caches the downlink data until the device exits from PSM. |
| DRX  | Due to short DRX period, Developer Center delivers downlink data immediately without waiting (If Qmode is supported when registering device, Developer Center delivers command according to Qmode, that is switching state to hibernation mode from active mode with idle time window). |
| eDRX | eDRX has a longer period than DRX and a strictly restricted delay time. Developer Center caches or immediately delivers command based on the state of device (whether hibernated). To create a product in eDRX mode, the actual eDRX period of the device is needed to determine whether the delivered command is timeout. |



## **Define TSL Features**

In product development stage, the first step of TSL data format product development is defining TSL model template.  TSL feature definition contains  __Standard Features__ and __Self-Defined Features__。


* Standard features are defined by Developer Center for the product category. When you create a product, the product category marked with "**Standard**" means that the product category has standard TSL models. 
* Self-defined features are customized TSL features definition based on the specific usage scenario of the product. This feature definition only takes effect on the specific product. 

<font color=#999AAA >Note: TSL feature defition is avalialbe only after you select TSL model when create a product. There is no need to define features for the product with transparent transmission data format.</font>


__Product Development__ >__"Quectel International Hotel"__ > __“Smart Aromatherapy”__, then click __Feature Definition __tab. Continue to click __Draft Mode__ > __Add Self-defined Feature__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-4.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-4.png"></a>


## **Manage a Device**

<font color=#999AAA >Note: In terms of the product that has connected to China Telecom AEP, you have to add devices for it manually.</font>

__1.__ Click __Manage Device__ tab and then click __Add Device__.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-5.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-5.png"></a>




__2.__ Edit the device.


<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-6.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-6.png"></a>

* __DeviceKey__: IMEI number of the module.
  <font color=#999AAA >Note: The IMEI can be obtained from the screen printing of the module or queried by executing __AT+QIOTINFO?__</font>.
* __Device Name__: Unique name of the device below the product. For example, “Smart Door Sensor No.1”.
* __PSK__: Pre-shared key, which is similar to a password, must be unique. PSK will be generated automatically based on DeviceKey if this option is ignored. <font color=#999AAA >Note: This option is not displayed if the __Data Encryption Method__ is **Plain Text**.</font>
* __Device SN__: Product serial number used to validate  "legality of the product".

__3.__  If the status of the device added on Developer Center changes to __Activated__, it indicates that the device is added to China Telecom AEP.


<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-7.png"><img src="/en/deviceDevelop/nb/speediness_ctwing/resource/picture-7.png"></a>


 