# FAQ

## <font color=#A52A2A  >__FAQs About Quick Access to Developer Center__</font>

> __1. How to initialize device?__ <br>
>
> You have to perform the following steps to initialize QuecThing configurations.<br>
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
>
> The event callback processing interface is simply to add a listening task __quecIot.setEventCB()__ for event source (compoent). The triggered event will be sent to the listener, and developers can execute different operations according to the specific event. <br>

> __3. How to connect a device to Developer Center?__ <br>
>
> After the QuecThing configurations initialization is completed, you can call __quecIot.setConnmode(1)__ to connect the device to Developer Center.<br>


> __4.  How can I ensure that the device has connected to Developer Center?__ <br>
>
> You can check the connection status between the device and Developer Center by issuing __quecIot.getWorkState()__ to the device. If  __8__ is returned, it indicates that the device is connected to Developer Center and available to perform business data interaction.  <br>



## <font color=#A52A2A  >__FAQs About Data Interaction__</font>

> __1. How many data formats are there?__ <br>
>
> Developer Center supports two data formats, that are TSL data and transparent transmission data.<br>

> __2. What is TSL model?__ <br>
>
> TSL model refers to the digital representation of the device in Developer Center and the entity data model constructed in the cloud, which is divided into three dimensions: property, service and event.<br>

> __3. What is QoS?__ <br>
>
> QoS is short for Quality of Service. Improving QoS means ensuring transmission bandwidth and reducing packet loss rate and delay jitter. You can select QoS based on the actual network status.<br>
>
> There are currently three levels of QoS: 0, 1, 2.<br>
>
> * If high-frequency and unreliable interactions are required between the device and Developer Center, set QoS to 0 for traffic saving and high efficiency.<br>
> * If high-frequency and reliable interactions are required between the device and Developer Center, set QoS to 1 for traffic saving and high efficiency.<br>
> * If high frequency and reliable interactions are required between the device and Developer Center, and the principle of one-send-one-receive should be strictly followed, set QoS to 2.<br>

> __4. What is pkgID?__ <br>
>
> pkgID is the ID of the uplink and downlink packets. For example, when you send data for several times in a row, you may not be able to judge which data is sent successfully or failed. Therefore, the pkGID is used to identify each data packet. pkGID returned first when the data is sent to Developer Center, and then you will be notified of another pkgID when the data is successfully sent to Developer Center. You can determine whether the data is successfully sent according to the two pkgIDs.<br>

> __5. How to send TSL model to Developer Center?__ <br>
>
> You can send TSL data to Developer Center by calling __quecIot.phymodelReport_ex()__.<br>

> __6. How can I receive TSL service?__ <br>
>
> After Developer Center sends TSL service, the device calls event callback function automatically when receiving the sent data and reports event {5,10210}. You can obtain and parse the TTLV data, see QuecThing sample code for details.<br>

> __7. What data formats are available for TSL data?__ <br>
>
> JSON and TTLV.<br>
>
> * JSON format is a lightweight data exchange format, providing direct viewing of data for easy reading and comprehension.<br>
> * TTLV format is to compress data into a smaller volume, but it needs to be interpreted by using scripts or calling TTLV parsing library. Compared with JSON format, the volume of the same data is smaller, the utilization rate of space is higher, and redundant fields are not allowed.<br>

## <font color=#A52A2A  >__FAQs About OTA Upgrade__</font>

> __1. What is the meaning of OTA?__ <br>
> OTA refers to upgrade over the air. You can upload the target firmware package to Developer Center and create an upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device.<br>

> __2. How many DMP OTA solutions are there?__ <br>
>
> Developer Center supports two DMP OTA solutions, that are FOTA and SOTA .


> __3. How do I choose an OTA solution?__ <br>
>
> You can choose an OTA solution according to the project requirements. SOTA should be selected for upgrading MCU program and FOTA for upgrading module firmware.
>
> * If you need to perform secondary development based on the module firmware, FOTA should be selected to upgrade the module firmware.<br>
> * If you use Quectel module and self-developed device for development, SOTA should be selected to upgrade the program.<br>

> __4. What are the differences between full package and delta package?__ <br>
>
> 1) Making method <br>
> Both the full package and delta package can realize firmware upgrade. Full package is the firmware generated by the user project compiling the complete code by the compiler; 
> Delta package is to generate firmware (which can be called patch) that can be inserted into the original firmware by comparing the code differences of the original version, and it can only be generated with specific tools.  <br>
> 2) Traffic <br>
> The full package is a firmware compiled by a complete project. In general, the size of full package is much larger than that of delta package. Therefore, delta package has better advantages for devices with high latency, low bandwidth or low power consumption. <br>
> 3) Compatibility<br>
> Delta package upgrade is based on the firmware of the original version, so delta package upgrade cannot be compatible with upgrading from the lower version to the latest version. If all devices in different version need to be upgraded, you should create multiple components or plans. So, the maintenance cost of delta package is high for a large number of multi-version devices.  <br>


> __5. How to perform FOTA upgrade?__ <br>
>
> 1) Create a model, add the firmware version information and create an upgrade plan on Developer Center. <br>
> 2) MCU calls __quecIot.otaRequest()__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device. <br>
> 3) MCU calls __quecIot.otaAction()__ to confirm the upgrade. <br>
> 4) The module automatically enters the upgrade status after receiving the upgrade package.<br>

> __6. How to perform SOTA upgrade?__ <br>
>
> 1) MCU calls __quecIot.setMcuVersion()__ to configure MCU version number. <br>
> 2) Create a model, add the firmware version information and create an upgrade plan on Developer Center. <br>
> 3) MCU calls __quecIot.otaRequest()__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device.  <br>
> 4) MCU calls __quecIot.otaAction()__ to confirm the upgrade.  <br>
> 5) MCU calls __quecIot.mcuFWDataRead()__ to read SOTA data by blocks. <br>
> 6) MCU automatically enters the upgrade status after receiving the upgrade package. <br>
> 7) After the upgrade is completed, MCU sets a new MCU version number and uploads it to Developer Center. <br>

> __7. Why I cannot trigger OTA upgrade?__ <br>
>
> 1) The device has not connected to Developer Center.<br>
> 2) The device properties do not meet the plan requirements. For example, the remaining space is insufficient, the current signal is weak.<br>
> 3) The device is not included in the created plan.<br>

> __8. Why did OTA upgrade fail?__ <br>
>
> 1) Please ensure that the current SDK version complies with the relevant functions. If the API of v2.9.2 or later versions on SDK version before v2.9.2, unpredictable errors may occurred.<br>
> 2) When the device is upgrading, if the device is powered off, disconnected from the network, or disconnected from Developer Center till the lifetime of the plan is exceeded, the device upgrade fails.<br>
> 3) When the device is upgrading, if network fluctuation occurs for a period of time, the device upgrade is regarded as failed and automatically triggers the upgrade again. If the upgrade fails for five consecutive times, the device upgrade is considered to be failed in the plan.<br>
> 4) If the device has downloaded firmware package but the upgrade failed, the upgrade file may be damaged during the upgrade. You can pay attention to the operations for the storage area of upgrade file.<br>


## <font color=#A52A2A  >__FAQs About Device Location__</font>

> __1. How many ways are there to position a device?__ <br>
>
> Two, LBS positioning and GNSS positioning respectively.<br>

> __2. What is the characteristics of LBS positioning and GNSS positioning?__ <br>
>
> LBS has high positioning coverage and can receive signal both indoor and outdoor without external module. But the positioning accuracy is low.<br>GNSS can only receive signal outdoors or open space. The positioning accuracy is high. An external GNSS module is required to obtain location data. <br>

> __3. How can I use LBS positioning?__ <br>
> QuecThing has equipped with LBS positioning component, so you only need to call __quecIot.getLocData()__ to obtain, or call __quecIot.locReportInside_ex()__ to report the location data from the built-in positioning feature of the module.<br>

> __4. How can I use GNSS positioning?__ <br>
> GNSS positioning feature needs an external GNSS module. MCU needs to write the coordinate system read by GNSS module to the module and then calls __quecIot.locReportOutside_ex()__ to report the location data obtained from the external GNSS module.

