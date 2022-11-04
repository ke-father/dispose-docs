# SOTA Example

## **Introduction**

SOTA upgrade of QuecThing generally refers to the process of writing new firmware into external MCU and replacing the original firmware. In all upgrade modes, users upload the firmware package to the Developer Center, and the device obtains the firmware package from Developer Center to realize upgrade on the air. Finally, MCU receives the upgrade package and writes it into the local flash memory to realize firmware upgrade. This chapter introduces how to perform SOTA upgrade by AT commands.


## **Related AT Commands**

|  AT Command   |           Description            |
| :-----------: | :------------------------------: |
| AT+QIOTOTAREQ |     Request OTA upgrade plan     |
| AT+QIOTUPDATE | Configure OTA upgrade operations |
| AT+QIOTOTARD  |     Read SOTA data by blocks     |
| AT+QIOTMCUVER |   Configure MCU version number   |

<font color=#999AAA >Note: See [OTA Upgrade Command](/en/deviceDevelop/nb/AT/API/nb-at-05.md) and [Product Configuration Command](/en/deviceDevelop/nb/AT/API/nb-at-03.md) for details.</font>


​	

## **Procedure**

### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

### **2. Create a Project**

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

### **3. Create a Product** 

Creating a product is the first step in the product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with NB-IoT networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product: "Smart Aromatherapy Diffuser".

### **4. OTA Upgrade Operations**

#### **a. Create a Model**

An upgrade model is a user-created collection of one or more components which is used to select and plan product components to be upgraded when an upgrade plan is created. The model is unique under the current project; Component names are unique under the same model.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/03-2-1.jpg">![img](/en/deviceDevelop/nb/AT/resource/03-2-1.jpg)</a>

* __Basic Information__: project name, model name, device model and version.
  * __Project Name__ : Project to which the OTA upgrade belongs (immutable).
  * __Model Name__: The name of the added model.
  * __Device Model__: The added device model, only supporting uppercase and lowercase letters, digits, and underscores (_).
  * __Version__: Description of the version, similar to remarks, which helps the user or others better understand the version.

* __Add a Component__: Description of each component that may require an OTA upgrade. Click __Add a Component__.

  * __Component Identifier__: Identifier of the added component.
  * __Component Name__: Name of the added component.
  * __Component Type__: Firmware or MCU.

  * __Remarks__: Component description that helps the user or others better understand the component. 
    <font color=#999AAA >Note: The upgrade model must contain at least one firmware component, so you need to add a firmware component in the SOTA upgrade.</font> 

#### **b. Add a Version**

<a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/03-2-2.jpg">![img](/en/deviceDevelop/nb/AT/resource/03-2-2.jpg)</a>

* __Product Name__: If a product is selected for this version, the version package is valid only at OTA upgrade of the selected product. If no product is selected for this version, the version package is valid in OTA upgrade of all projects.
* __Version Name__: Version package name.
* __Component Type__: Firmware or MCU.
  * Firmware upgrade (FOTA): Write new firmware to QuecCloud module.
  * MCU upgrade (SOTA): Download new software package into the external MCU through Quectel module.
* __Version Package Type__: Full Package or Delta Package.
  * Delta Package is for the upgrade of the specified original version, generally for the minor feature upgrade or bug fixing.
  * Full Package is not for a specified source version, and all devices can be upgraded.
* __Source Version__: Version of the source firmware package. This item is displayed if Delta Package is selected, but not the Full Package. (Developer Center determines whether the version number in the device information reported when the device is connected to Developer Center is consistent with this parameter. If they are consistent, the Developer Center issues the upgrade information.)
* __Target Version__: New version number of the firmware package. (After the device is upgraded, it needs to report the upgraded version number to Developer Center. Developer Center will check whether the version reported by the device is consistent with this parameter. If they are consistent, the upgrade is successful).
* __Upload File__: The file format should be zip/rar/tar/bin/pack/mini_1/mini_2. Up to 5 files are supported and a single file size cannot exceed 100 MB.
* __Version Information__: Information describing and recording the uploaded firmware version.

#### **c. Create an Upgrade Plan**

A upgrade plan should be created or selected from the existing plans before a device upgrade. The plan contains device(s) to be upgraded, upgrade time, components configurations and etc.

__i. Basic Information__
<a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/03-2-3.jpg">![img](/en/deviceDevelop/nb/AT/resource/03-2-3.jpg)</a>

* __Project Name__: Project to which the OTA upgrade belongs (immutable).
* __Product Name__: The name of the product to be upgraded.
* __Plan Name__: Plan name.
* __Model__: Model of the product in which the devices need upgrading.
* __Set Blacklist and Whitelist__: All devices of the product will be upgraded if no whitelist or blacklist is set. The blacklist has a higher priority than whitelist if both whitelist and blacklist are set.
  * __Set Whitelist__: Only the device(s) in the whitelist is/are allowed to be upgraded.
  * __Set Blacklist__: The device(s) in the blacklist is/are not allowed to be upgraded.

__ii. Formulate Upgrade Strategy__

During the firmware upgrade, it is inevitable that the upgrade fails due to a poor upgrade environment. To avoid this situation, you need to formulate an upgrade policy to reduce the probability of upgrade failure. Click __Self-defied __ next to the upgrade strategy to configure the upgrade strategy in the pop-up window.

* <a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/03-2-4.jpg">![img](/en/deviceDevelop/nb/AT/resource/03-2-4.jpg)</a>

__iii. Select OTA Upgrade Version__

When creating an upgrade plan, select the model and then components and versions of the model will be automatically displayed and you need to select the MCU component package to be upgraded. Click __Not Selected__ under "Selected Version" to select the MCU component package version to be upgraded.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/03-2-5.jpg">![img](/en/deviceDevelop/nb/AT/resource/03-2-5.jpg)</a>

__iiii. Activate Plan__

After completing the above steps of __Create a Model__, __Add a Version__ and __Create an Upgrade Plan__, you can start activating the plan.
Click __Activate Plan__ in the lower left corner to activate the configured plan. Then Developer Center will execute the upgrade task and issue the selected target version firmware to the target devices.

<font color=#999AAA >Note: If the upgrade task is activated, it is not allowed to delete the task. If you need to delete it, stop the task manually in the task list before deleting the upgrade task.</font>

#### **d. Connect the Device to Developer Center**

MCU can configure connection mode by __AT+QIOTREG=\<reg_mode\>__ . PK and PS must be configured before you connect the device to Developer Center, otherwise ERROR will be returned. After sending the command, when the module responds with the following return value, it indicates that the device has successfully connected to Developer Center. 

```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

OK

[RX]+QIOTEVT: 2,10200

[RX]+QIOTEVT: 3,10200
```

#### **e. Configure MCU Version Number**

```c
[TX]AT+QIOTMCUVER="STM32","V1_0"

[RX]OK
```

#### **f. OTA Request**

After the upgrade plan is made and activated, the device needs to send __AT+QIOTOTAREQ__ to request SOTA upgrade. After sending SOTA request command, if the device has been included in the upgrade plan product, it will print the event, including component identifier + source version + target version + minimum power + minimum signal strength + firmware package size.  If the device meets the upgrade strategy requirements, proceed to the next step.

```c
[TX]AT+QIOTOTAREQ=1

[RX]OK

[RX]+QIOTEVT: 7,10700,"STM32","","V2_0",30,-113,19656
[RX]
```

#### **g. Check the Upgrade Result**

Send __AT+QIOTUPDATE__ to check the upgrade result.

```c
[TX]AT+QIOTUPDATE=1

[RX]AT+QIOTUPDATE=1

OK
```

<font color=#999AAA >Note: After confirming the device has been upgraded, you can view the execution results of batch tasks in the software upgrade task list. Click __View__ for the corresponding task  to view the upgrade results of each device in the __Execution Details__ interface.</font>


#### **h. Device Upgrade Process Feedback**

The successful process of firmware upgrade is divided into 5 steps: __Download starts__, __Download in progress__, __Successful download__, __Upgrade in progress__ and __Successful upgrade__. If the upgrade status is "Upgrade in progress", the status details display the percentage progress. The SOTA upgrade process feedbacks are as follows.

* Callback event that device starts to download firmware package.

  ```c
  [RX]+QIOTEVT: 7,10701,"STM32",19656,"95cbdeb4faeda4322ad9b65eb731ed2b",4022793929,"2bb534d576fb307f049a149787afab2382ebb8605467acfc2c05a2e67677e094"
  ```

* Callback event that the firmware package is being downloaded.

  ```c
  [RX]+QIOTEVT: 7,10702
  ```

* Callback event that the firmware package is downloaded successfully.

  ```c
  [RX]+QIOTEVT: 7,10703,"STM32",19656,0,19656
  ```

* MCU firmware is being upgraded in progress.

  ```c
  [RX]+QIOTEVT: 7,10704
  
  [TX]AT+QIOTOTARD=1,1024
  
  [RX]+QIOTOTARD: 1,1024
  
  00000064
  65746e45
  52412072
  4d545f48
  ...
  
  
  OK
  ...
  
  [TX]AT+QIOTOTARD=1024,1024
  
  [RX]+QIOTOTARD: 1024,1024
  
	f9e2b03b 
	d7013a95 
	279a69b3 
	2398e546
	...
  
  OK
  
  [TX]AT+QIOTOTARD=19656,1024
  
  [RX]+QIOTOTARD: 19656,305
  
  6c512072
  6365535f
  54646e6f
  6369546f
  ...
  
  OK
  ```

* MCU receives firmware package and writes it to local flash to upgrade the firmware.

* Configure new MCU version (After the device upgrade is completed, the MCU should actively set the new MCU version number).

  ```c
  [TX]AT+QIOTMCUVER="STM32","V2_0"
  
  [RX]OK
  ```

* Callback event that the firmware package is upgraded successfully.

  ```c
  [RX]+QIOTEVT: 7,10705
  
  +QIND: "FOTA","END",0
  ```



### **5. Monitor the Upgrade**

Click __Component Details__ in __Upgrade Plan__ >__Upgrade Plan List__ >__Device List__ to view the upgrade details. In "Upgrade Monitoring" page, you can view the current upgrade status and status details of all devices for this upgrade task. Status details include __Start__, __Confirm__, __Download__, __Upgrading__ and __Success/Fail__. In addition, click __"Details>>"__ to view the details of the Upgrade Logs in the pop-up window on the right side of the list, and cancel the device upgrade according to the upgrade progress. Upgrade monitoring is shown in the following figure.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/AT/resource/03-2-6.jpg">![img](/en/deviceDevelop/nb/AT/resource/03-2-6.jpg)</a>

 