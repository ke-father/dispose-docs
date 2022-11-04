# FAQ

## <font color=#A52A2A  >__FAQs About Quick Access to Developer Center__</font>

> __1. How can I ensure that the device network meets the requirements for access to Developer Center?__ <br>
>
> Send __AT+CGATT?__ to the module to query the network status. If the return value is __1__, it indicates that the module has the network condition to connect to Developer Center. 

> __2. How do I configure the device before the device connects to Developer Center for the first time?__ <br>
>
> Before connecting the device to Developer Center for the first time, you need to configure ProductKey (PK) and ProductSecret (PS). PK and PS are automatically sent to your email box after the product is successfully created on Developer Center.

> __3. What is callback event?__ <br>
>
> Callback event is an event processing mechanism based on listening. For example, when Developer Center issues TSL data, the module will automatically send the log to MCU through URC event after receiving the data. You can process the data according to the callback event.


> __4. How can I ensure that the device has connected to Developer Center?__ <br>
>
> Send __AT+QIOTSTATE?__ to the module to query the connection status between the device and Developer Center. If the return value is __8__, it indicates that the module has connected to Developer Center and data interaction can be performed.

> __5. Why is ERROR returned during product configuration?__ <br>
>
> 1) Perhaps the QuecThing version does not support the configuration command. You can send __AT+QIOTCFG=? __ to check whether the configuration is supported.<br>
> 2) QuecThing is enabled manually or automatically. You need to disconnect the device from Developer Center and disable the QuecThing before configuring the product.<br>

## <font color=#A52A2A  >__FAQs About Data Interaction__</font>

> __1. How many data formats are there?__ <br>
>
> Developer Center supports two data formats: that are TSL data and transparent transmission data.

> __2. What is TSL model?__ <br>
>
> TSL model refers to the digital representation of the device in Developer Center and the entity data model constructed in the cloud, which is divided into three dimensions: property, service and event.

> __3. What is RAI?__ <br>
>
> The RAI flag is used to indicate the core network release of the RRC connection to the module.
> When RAI is 0, there is no indication.
> When RAI is 1, it indicates that no further uplink or downlink data is expected after the data is sent and the core network can be released immediately.
> When RAI is 2, it indicates that a single downlink data packet with corresponding reply is expected after the data is sent and the core network can be released immediately.<br>
>
> __4. What is the difference between NON data and CON data?__ <br>
>
> NON data indicates that the data sent does not require a server ACK, and CON indicates that the data sent requires a server ACK. After the module sends CON data and receives the server ACK, it will notify the application layer by URC.<br>

> __5. What is PkgID?__ <br>
>
> PkgID is the ID of the uplink and downlink packets. For example, when you send data for several times in a row, you may not be able to judge which data is sent successfully or failed. Therefore, the PkgID is used to identify each data packet. PkgID returned first when the data is sent to Developer Center, and then you will be notified of another PkgID when the data is successfully sent to Developer Center. You can determine whether the data is successfully sent according to the two PkgIDs.

> __6. How to send TSL data to Developer Center?__ <br>
>
> MCU sends __AT+QIOTMODELTD__ to the module.

> __7. How can I receive TSL service?__ <br>
>
> In buffer mode, when Developer Center issues service, MCU sends __AT+QIOTMODELRD__ to the module to query the TSL data. In unbuffered mode, the module prints callback events and downlink data to MCU after receiving TSL service.

> __8. What are buffer mode and unbuffered mode?__ <br>
>
> Two modes for MCU reading data: buffer mode and unbuffered mode.
>
> * Buffer mode refers to that when the module receives data issued by Developer Center, the module will print callback events to MCU and store the data in the memory, and MCU needs to send __AT+QIOTMODELRD__ to read the downlink data.<br>
> * Unbuffered mode refers to that the module prints callback events and downlink data to MCU after receiving data issued by Developer Center<br>

> __9. What data formats are available for TSL data?__ <br>
>
> JSON and TTLV.
>
> * JSON format is a lightweight data exchange format, providing direct viewing of data for easy reading and comprehension.<br>
> * TTLV format is to compress data into a smaller volume, but it needs to be interpreted by using scripts or calling TTLV parsing library. Compared with JSON format, the volume of the same data is smaller, the utilization rate of space is higher, and redundant fields are not allowed.<br>

## <font color=#A52A2A  >__FAQs About OTA Upgrade__</font>

> __1. What is the meaning of OTA?__ <br>
>
> OTA refers to upgrade over the air. You can upload the target firmware package to Developer Center and create an upgrade plan. When the device environment meets the upgrade strategy, the upgrade plan will be triggered.

> __2. How many OTA solutions are there?__<br>
>
> Two: FOTA and SOTA.<br>

> __3. How do I choose an OTA solution?__ <br>
>
> You can choose an OTA solution according to the project requirements. SOTA should be selected for upgrading MCU program and FOTA for upgrading module firmware.

> __4. How to perform FOTA upgrade?__ <br>
>
> 1) Create a model, add a version and create an upgrade plan on Developer Center. <br>
> 2) MCU sends __AT+QIOTOTAREQ__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device. <br>
> 3) MCU sends __AT+QIOTUPDATE__ to confirm the upgrade. <br>
> 4) The module automatically enters the upgrade status after receiving the upgrade package. <br>

> __5. How to perform SOTA upgrade?__ <br>
>
> 1) MCU sends __AT+QIOTMCUVER__ to the module to configure MCU version number. <br>
> 2) Create a model, add the firmware version information and create an upgrade plan on Developer Center. <br>
> 3) MCU sends __AT+QIOTOTAREQ__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device.  <br>
> 4) MCU sends __AT+QIOTUPDATE__ to confirm the upgrade.  <br>
> 5) MCU sends __AT+QIOTOTARD__ to the module to read SOTA data by blocks. <br>
> 6) MCU automatically enters the upgrade status after receiving the upgrade package. <br>
> 7) After the upgrade is completed, MCU sets a new MCU version number and uploads it to Developer Center. <br>

## <font color=#A52A2A  >__FAQs About Device Location__</font>

> __1. How many ways are there to position a device?__ <br>
>
> Two, LBS positioning and GNSS positioning respectively.

> __2. What is the characteristics of LBS positioning?__ <br>
>
> LBS positioning features high coverage of both indoor and outdoor signals, low positioning accuracy, and no need for external modules.

> __3. How can I use LBS positioning?__ <br>
>
> QuecThing has equipped with LBS positioning component, so you only need to execute __AT+QIOTLOCIN__ to obtain or report location data of the built-in positioning feature of the module.

> __4. How can I use GNSS positioning?__ <br>
>
> GNSS positioning feature needs an external GNSS module. MCU needs to write the coordinate system read by GNSS module to the module and then sends __AT+QIOTLOCEXT__ to report the location data obtained from the external GNSS module.