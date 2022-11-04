# FAQ

## <font color=#A52A2A  >__FAQs About Quick Access to Developer Center__</font>

> __1. What do I need to do to initialize the device?__ <br>
> QuecThing initialization requires the following steps:
>
> ```c
> /* Initialize QuecThing SDK */
> Ql_iotInit();
> /* Register event callback function */
> Ql_iotConfigSetEventCB(Ql_iotEventCB);
> /* Configure product information*/
> Ql_iotConfigSetProductinfo("pxxxxt", "VzZUxxxxxxxxxx9E");
> ```

> __2. What is event callback function?__ <br>
> Callback function refers to adding a listening task __Ql_iotEventCB()__ to a event source (component). When the device triggers come event, the developer only need to process the corresponding event under Ql_iotEventCB(), and the listening task will handle the event. 

> __3. How can the device access Developer Center?__ <br>
> After initialize the device, call __Ql_iotConfigSetConnmode(1)__ to connect the device to Developer Center.


> __4. How can I ensure that the device has connected to Developer Center?__ <br>
> Send __Ql_iotGetWorkState()__ to the module to query the connection status between the device and Developer Center. If the return value is __8__, it indicates that the module has connected to Developer Center and data interaction can be performed.




## <font color=#A52A2A  >__FAQs About Data Interaction__</font>

> __1. How many data formats are there?__ <br>
> Developer Center supports two data formats: TSL data and transparent transmission data.

> __2. What is TSL model?__ <br>
>
> TSL model refers to the digital representation of the device in Developer Center and the entity data model constructed in the cloud, which is divided into three dimensions: property, service and event.

> * __3. What is QoS?__ <br>
>
>   QoS is short for Quality of Service. Improving QoS means ensuring transmission bandwidth and reducing packet loss rate and delay jitter. You can select QoS based on the actual network status.
>
>   There are currently three levels of QoS: 0, 1, 2.<br>
>
>   * If high-frequency and unreliable interactions are required between the device and Developer Center, set QoS to 0 for traffic saving and high efficiency.<br>
>   * If high-frequency and reliable interactions are required between the device and Developer Center, set QoS to 1 for traffic saving and high efficiency.<br>
>   * If high frequency and reliable interactions are required between the device and Developer Center, and the principle of one-send-one-receive should be strictly followed, set QoS to 2.<br>

> __4. What is PkgID?__ <br>
>
> PkgID is the ID of the uplink and downlink packets. For example, when you send data for several times in a row, you may not be able to judge which data is sent successfully or failed. Therefore, the PkgID is used to identify each data packet. PkgID returned first when the data is sent to Developer Center, and then you will be notified of another PkgID when the data is successfully sent to Developer Center. You can determine whether the data is successfully sent according to the two PkgIDs.

> __5. How can a device send TSL data to Developer Center?__ <br>
> Call __Ql_iotCmdBusPhymodelReport_ex()__.

> __6. How can I receive TSL data?__ <br>
>
> When Developer Center issues TSL data, the device will automatically call event callback function and report event {5,10210}. You can call __Ql_iotTtlvCountGet()__ and __Ql_iotTtlvNodeGet()__ to get and parse the TTLV data. See Example of TSL Data Interaction for details.

> __7. What data formats are available for TSL data?__ <br>JSON and TTLV.
>
> * JSON format is a lightweight data exchange format, providing direct viewing of data for easy reading and comprehension.<br>
> * TTLV format is to compress data into a smaller volume, but it needs to be interpreted by using scripts or calling TTLV parsing library. Compared with JSON format, the volume of the same data is smaller, the utilization rate of space is higher, and redundant fields are not allowed.<br>

## <font color=#A52A2A  >__FAQs About OTA Upgrade__</font>

> __1. What is the meaning of OTA?__ <br>
>
> OTA refers to upgrade over the air. You can upload the target firmware package to Developer Center and create an upgrade plan. When the device environment meets the upgrade strategy, the upgrade plan will be triggered.

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
> 1) Create a model, add a version and create an upgrade plan on Developer Center.  <br>
> 2) Call __Ql_iotCmdOtaRequest()__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, the upgrade plan will be triggered. <br>
> 3) Call __Ql_iotCmdOtaAction()__ to confirm the upgrade. <br>
> 4) The module automatically enters the upgrade status after receiving the upgrade package.  <br>

> __6. How to perform SOTA upgrade?__ <br>
> 1) Call __Ql_iotConfigSetMcuVersion()__ to configure MCU version number.  <br>
> 2) Create a model, add the firmware version information and create an upgrade plan on Developer Center.  <br>
> 3) Call __Ql_iotCmdOtaRequest()__ to request OTA  upgrade plan. When the device environment meets the upgrade strategy, the upgrade plan will be triggered. <br>
> 4) Call __Ql_iotCmdOtaAction()__ to confirm the upgrade.  <br>
> 5) Call __Ql_iotCmdOtaMcuFWDataRead()__ to read SOTA data by blocks. <br>
> 6) MCU automatically enters the upgrade status after receiving the upgrade package. <br>
> 7) After the upgrade is completed, MCU sets a new MCU version number and uploads it to Developer Center. <br>

> __7. Why cannot the OTA upgrade be triggered?__ <br>
> 1) The device has not connected to Developer Center.<br>
> 2) The device properties do not meet the plan requirements. For example, the remaining space is insufficient or the current signal is weak.<br>
> 3) The device is not included in the created plan.<br>

> __8. Why did OTA upgrade fail?__<br>
>
> 1) Please ensure that the current SDK version complies with the relevant AT commands. If the SDK version before 2.9.2 uses AT commands of 2.9.2 or later, unpredictable errors may occurred.<br>
> 2) When the device is upgrading, if the device is powered off, disconnected from the network, or disconnected from Developer Center till the lifetime of the plan is exceeded, the device upgrade fails.<br>
> 3) When the device is upgrading, if network fluctuation occurs for a period of time, the device upgrade is regarded as failed and automatically triggers the upgrade again. If the upgrade fails for five consecutive times, the device upgrade is considered to be failed in the plan.<br>
> 4) If the device has downloaded firmware package but the upgrade failed, the upgrade file may be damaged during the upgrade. You can pay attention to the operations for the storage area of upgrade file.<br>



## <font color=#A52A2A  >__FAQs About Device Location__</font>

> __1. How many ways are there to position a device?__ <br>
> Two, LBS positioning and GNSS positioning respectively.

> __2. What is the characteristics of LBS positioning and GNSS positioning?__ <br>
> LBS has high positioning coverage and can receive signal both indoor and outdoor without external module. But the positioning accuracy is low. On the contrary, GNSS positioning provides high positioning accuracy outdoors or in open areas and it requires external GNSS module to get the location data.

> __3. How can I use LBS positioning?__ <br>
> QuecThing has equipped with LBS positioning component, so you only need to call __Ql_iotLocGetData()__ to obtain the location data of the built-in positioning feature of the module and call __Ql_iotCmdBusLocReportInside_ex()__ to report the obtained data.

> __4. How can I use GNSS positioning?__ <br>
>
> GNSS positioning feature needs an external GNSS module. MCU needs to write the coordinate system read by GNSS module to the module and then call __Ql_iotCmdBusLocReportOutside_ex()__ to report the location data obtained from the external GNSS module.