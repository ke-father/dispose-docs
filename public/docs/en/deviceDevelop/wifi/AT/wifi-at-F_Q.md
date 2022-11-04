# FAQ

## <font color=#A52A2A  >__FAQs About Quick Access to Developer Center__</font>

> __1. How can I ensure that the device network meets the requirements for access to Developer Center?__ <br>
>
> Send __AT+CGATT?__ to the module to query the network status. If the return value is __1__, it indicates that the module has the network condition to connect to Developer Center. If the return value is not 1, you can get the current signal quality by  __AT+CSQ?__ .  If the current signal quality is less than 5, the network signal in the current environment may be poor or the device is not connected to the antenna line, so that the device cannot connect to the network; If the current signal quality is 99, check whether the current device is connected to the antenna or the SIM card fails to be inserted.

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
> 2) Some AT commands cannot be set after QuecThing is connected to Developer Center. Therefore, disconnect the the device from Developer Center before configuration.<br>

> __6. Why does an AT command return ERROR or no response?__ <br>
>
> 1) The current device may not support this AT command, execute __AT+QIOTINFO?__ to view the version number of QuecThing SDK. Then you can read the corresponding AT command manual according to the version number and use the AT command.<br>
> 2) Some AT commands cannot be set after QuecThing is connected to Developer Center. Therefore, disconnect the the device from Developer Center before configuration.<br>

## <font color=#A52A2A  >__FAQs About Data Interaction__</font>

> __1. How many data formats are there?__ <br>
>
> Developer Center supports two data formats, that are TSL data and transparent transmission data.

> __2. What is TSL model?__ <br>
>
> TSL model refers to the digital representation of the device in Developer Center and the entity data model constructed in the cloud, which is divided into three dimensions: property, service and event.

> __3. What is QoS?__ <br>
>
> QoS is short for Quality of Service. Improving QoS means ensuring transmission bandwidth and reducing packet loss rate and delay jitter. You can select QoS based on the actual network status.
>
> There are currently three levels of QoS: 0, 1, 2.<br>
>
> * If high-frequency and unreliable interactions are required between the device and Developer Center, set QoS to 0 for traffic saving and high efficiency.<br>
> * If high-frequency and reliable interactions are required between the device and Developer Center, set QoS to 1 for traffic saving and high efficiency.<br>
> * If high frequency and reliable interactions are required between the device and Developer Center, and the principle of one-send-one-receive should be strictly followed, set QoS to 2.<br>

> __4. What is PkgID?__ <br>
>
> PkgID is the ID of the uplink and downlink packets. For example, when you send data for several times in a row, you may not be able to judge which data is sent successfully or failed. Therefore, the PkgID is used to identify each data packet. PkgID returned first when the data is sent to Developer Center, and then you will be notified of another PkgID when the data is successfully sent to Developer Center. You can determine whether the data is successfully sent according to the two PkgIDs.

> __5. How to send TSL model to Developer Center?__ <br>
>
> MCU sends __AT+QIOTMODELTD__ to the module.

> __6. How can I receive TSL service?__ <br>
>
> In buffer mode, when Developer Center issues service, MCU sends __AT+QIOTMODELRD__ to the module to query the TSL data. In unbuffered mode, the module prints callback events and downlink data to MCU after receiving TSL service.

> __7. What are buffer mode and unbuffered mode?__ <br>
>
> Two modes for MCU reading data: buffer mode and unbuffered mode.
>
> * Buffer mode refers to that when the module receives data issued by Developer Center, the module will print callback events to MCU and store the data in the memory, and MCU needs to send __AT+QIOTMODELRD__ to read the downlink data.<br>
> * Unbuffered mode refers to that the module prints callback events and downlink data to MCU after receiving data issued by Developer Center<br>

> __8. What data formats are available for TSL data?__ <br>
>
> JSON and TTLV.
>
> * JSON format is a lightweight data exchange format, providing direct viewing of data for easy reading and comprehension.<br>
> * TTLV format is to compress data into a smaller volume, but it needs to be interpreted by using scripts or calling TTLV parsing library. Compared with JSON format, the volume of the same data is smaller, the utilization rate of space is higher, and redundant fields are not allowed.<br>

> __9. What is the difference between direct transmission and transparent transmission?__ <br>
>
> * Direct transmission supports string data.<br>
> * Transparent transmission supports byte stream data.<br>

## <font color=#A52A2A  >__FAQs About OTA Upgrade__</font>

> __1. What is the meaning of OTA?__ <br>
>
> OTA refers to upgrade over the air. You can upload the target firmware package to Developer Center and create an upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade itself.

> __2. How many DMP OTA solutions are there?__ <br>
>
> Developer Center supports two DMP OTA solutions, that are FOTA and SOTA .


> __3. How do I choose an OTA solution?__ <br>
>
> You can choose an OTA solution according to the project requirements. SOTA should be selected for upgrading MCU program and FOTA for upgrading module firmware.
>
> * If you need to perform secondary development based on the module firmware, FOTA should be selected to upgrade the module firmware.<br>
> * If you use Quectel module and self-developed device for development, SOTA should be selected to upgrade the program.

> __4. What are the differences between full package and delta package?__ <br>
>
> 1) Making method <br>
> Both the full package and delta package can realize firmware upgrade. Full package is the firmware generated by the user project compiling the complete code by the compiler; 
> Delta package is to generate firmware (which can be called patch) that can be inserted into the original firmware by comparing the code differences of the original version, and it can only be generated with specific tools. 
> 2) Traffic <br>
> The full package is a firmware compiled by a complete project. In general, the size of full package is much larger than that of delta package. Therefore, delta package has better advantages for devices with high latency, low bandwidth or low power consumption.
> 3) Compatibility<br>
> Delta package upgrade is based on the firmware of the original version, so delta package upgrade cannot be compatible with upgrading from the lower version to the latest version. If all devices in different version need to be upgraded, you should create multiple components or plans. So, the maintenance cost of delta package is high for a large number of multi-version devices.   

> __5. How to perform FOTA upgrade?__ <br>
>
> 1) Create a model, add a version and create an upgrade plan on Developer Center. <br>
> 2) MCU sends __AT+QIOTOTAREQ__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device. <br>
> 3) MCU sends __AT+QIOTUPDATE__ to confirm the upgrade. <br>
> 4) The module automatically enters the upgrade status after receiving the upgrade package. <br>

> __6. How to perform SOTA upgrade?__ <br>
>
> 1) MCU sends __AT+QIOTMCUVER__ to the module to configure MCU version number. <br>
> 2) Create a model, add the firmware version information and create an upgrade plan on Developer Center. <br>
> 3) MCU sends __AT+QIOTOTAREQ__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, MCU actively triggers the upgrade plan to upgrade the device.  <br>
> 4) MCU sends __AT+QIOTUPDATE__ to confirm the upgrade.  <br>
> 5) MCU sends __AT+QIOTOTARD__ to the module to read SOTA data by blocks. <br>
> 6) MCU automatically enters the upgrade status after receiving the upgrade package. <br>
> 7) After the upgrade is completed, MCU sets a new MCU version number and uploads it to Developer Center. <br>

> __7. Why I cannot trigger OTA upgrade?__ <br>
>
> 1) The device has not connected to Developer Center.<br>
> 2) The device properties do not meet the plan requirements. For example, the remaining space is insufficient, the current signal is weak, and the version does not match.<br>
> 3) The device is not included in the created plan.<br>

> __8. Why did OTA upgrade fail?__<br>
>
> 1) Please ensure that the current SDK version complies with the relevant AT commands. If the SDK version before 2.9.2 uses AT commands of 2.9.2 or later, unpredictable errors may occurred.<br>
> 2) When the device is upgrading, if the device is powered off, disconnected from the network, or disconnected from Developer Center till the lifetime of the plan is exceeded, the device upgrade fails.<br>
> 3) When the device is upgrading, if network fluctuation occurs for a period of time, the device upgrade is regarded as failed and automatically triggers the upgrade again. If the upgrade fails for five consecutive times, the device upgrade is considered to be failed in the plan.<br>
> 4) If the device has downloaded firmware package but the upgrade failed, the upgrade file may be damaged during the upgrade. You can pay attention to the operations for the storage area of upgrade file.<br>
> <br>

## <font color=#A52A2A  >__FAQs About Device Location__</font>

> __1. How many ways are there to position a device?__ <br>
>
> Two, LBS positioning and GNSS positioning respectively.

> __2. What is the characteristics of LBS positioning?__ <br>
>
> LBS positioning requires high coverage of both indoor and outdoor signals, low positioning accuracy, and no external modules.

> __3. How can I use LBS positioning?__ <br>
>
> QuecThing has equipped with LBS positioning component, so you only need to execute __AT+QIOTLOCIN__ to obtain or report location data of the built-in positioning feature of the module.

> __4. How can I use GNSS positioning?__ <br>
>
> GNSS positioning feature needs an external GNSS module. MCU needs to write the coordinate system read by GNSS module to the module and then sends __AT+QIOTLOCEXT__ to report the location data obtained from the external GNSS module.
