# FAQ

## <font color=#A52A2A  >__FAQs About Quick Access to Developer Center__</font>

> __1. How to initialize device?__ <br>
> You have to perform the following steps to initialize QuecThing configurations.
>
> ```py
> import quecIot
> def __init__(self):
> """ Initialize QuecThing SDK """
> quecIot.init()
> """ Register event callback function """
> quecIot.setEventCB(self.eventCB)
> ```

> __2. What is callback event?__ <br>
> The event callback processing interface is simply to add a listening task __quecIot.setEventCB()__ for event source (compoent). The triggered event will be sent to the listener, and developers can execute different operations according to the specific event. <br>

> __3. How to connect a device to Developer Center?__ <br>
> After the QuecThing configurations initialization is completed, you can call __quecIot.setConnmode(1)__ to connect the device to Developer Center.<br>


> __4. How can I ensure that the device has connected to Developer Center?__ <br>
> You can check the connection status between the device and Developer Center by issuing __quecIot.getWorkState()__ to the device. If  __8__ is returned, it indicates that the device is connected to Developer Center and available to perform business data interaction. <br>



## <font color=#A52A2A  >__FAQs About Data Interaction__</font>

> __1. How many data formats are there?__ <br>
> Developer Center supports two data formats: that are TSL data and transparent transmission data.<br>

> __2. What is TSL model?__ <br>
> TSL model refers to the digital representation of the device in Developer Center and the entity data model constructed in the cloud, which is divided into three dimensions: property, service and event.<br>

> __3. What is RAI?__ <br>
>
> The RAI flag is used to indicate the core network release of the RRC connection to the module.<br>
> When RAI is 0, there is no indication.<br>
> When RAI is 1, it indicates that no further uplink or downlink data is expected after the data is sent and the core network can be released immediately.<br>
> When RAI is 2, it indicates that a single downlink data packet with corresponding reply is expected after the data is sent and the core network can be released immediately.<br>

> __4. What is the difference between NON data and CON data?__ <br>
> NON data indicates that the data sent does not require a server ACK, and CON indicates that the data sent requires a server ACK. After the module sends CON data and receives the server ACK, it will notify the application layer by URC.<br>

> __5. What is PkgID?__ <br>
> PkgID is the ID of the uplink and downlink packets. For example, when you send data for several times in a row, you may not be able to judge which data is sent successfully or failed. Therefore, the PkgID is used to identify each data packet. PkgID returned first when the data is sent to Developer Center, and then you will be notified of another PkgID when the data is successfully sent to Developer Center. You can determine whether the data is successfully sent according to the two PkgIDs.

> __6. How to send TSL data to Developer Center?__ <br>
> You can send TSL data to Developer Center by calling __quecIot.phymodelReport()__.<br>

> __7. How can I receive TSL service?__ <br>
> After Developer Center sends TSL service, the device calls event callback function automatically when receiving the sent data and reports event {5,10210}. You can obtain and parse the TTLV data, see QuecThing sample code for details.<br>

> __8. What data formats are available for TSL data?__ <br>
> JSON and TTLV.<br>
>
> * JSON format is a lightweight data exchange format, providing direct viewing of data for easy reading and comprehension.<br>
> * TTLV format is to compress data into a smaller volume, but it needs to be interpreted by using scripts or calling TTLV parsing library. Compared with JSON format, the volume of the same data is smaller, the utilization rate of space is higher, and redundant fields are not allowed.<br>

## <font color=#A52A2A  >__FAQs About OTA Upgrade__</font>

> __1. What is the meaning of OTA?__ <br>
> OTA refers to upgrade over the air. You can upload the target firmware package to Developer Center and create an upgrade plan. When the device environment meets the upgrade strategy, the upgrade plan will be triggered.<br>

> __2. How many OTA solutions are there?__ <br>
> Two: FOTA and SOTA.<br>

> __3. How do I choose an OTA solution?__ <br>
> You can choose an OTA solution according to the project requirements. SOTA should be selected for upgrading MCU program and FOTA for upgrading module firmware.<br>

> __4. How to perform FOTA upgrade?__ <br>
> 1) Create a model, add a version and create an upgrade plan on Developer Center.  <br>2) MCU calls __quecIot.otaRequest()__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device.  <br>3) MCU sends __quecIot.otaAction()__ to confirm the upgrade. <br>4) The module automatically enters the upgrade status after receiving the upgrade package. <br>

> __5. How to perform SOTA upgrade?__ <br>
> 1) MCU calls __quecIot.setMcuVersion()__ to configure MCU version number. <br>
> 2) Create a model, add the firmware version information and create an upgrade plan on Developer Center. <br>3) MCU calls __quecIot.otaRequest()__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device.   <br>
> 4) MCU calls __quecIot.otaAction()__ to confirm the upgrade.   <br>
> 5) MCU calls __quecIot.mcuFWDataRead()__ to the module to read SOTA data by blocks.  <br>
> 6) MCU automatically enters the upgrade status after receiving the upgrade package.  <br>
> 7) After the upgrade is completed, MCU sets a new MCU version number and uploads it to Developer Center. <br>

## <font color=#A52A2A  >__FAQs About Device Location__</font>

> __1. How many ways are there to position a device?__ <br>
>
> Two, LBS positioning and GNSS positioning respectively.<br>

> __2. What is the characteristics of LBS positioning and GNSS positioning?__ <br>
>
> LBS has high positioning coverage and can receive signal both indoor and outdoor without external module. But the positioning accuracy is low.<br>GNSS can only receive signal outdoors or open space. The positioning accuracy is high. An external GNSS module is required to obtain location data. <br>

> __3. How can I use LBS positioning?__ <br>
> QuecThing has equipped with LBS positioning component, so you only need to call __quecIot.getLocData()__ to obtain, or call __quecIot.locReportInside()__ to report the location data from the built-in positioning feature of the module.<br>

> __4. How can I use GNSS positioning?__ <br>
> GNSS positioning feature needs an external GNSS module. MCU needs to write the coordinate system read by GNSS module to the module and then calls __quecIot.locReportOutside()__ to report the location data obtained from the external GNSS module.