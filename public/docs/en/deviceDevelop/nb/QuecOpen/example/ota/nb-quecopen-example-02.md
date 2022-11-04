# SOTA Example

## __Introduction__

SOTA upgrade of QuecThing generally refers to the process of writing new firmware into external MCU and replacing the original firmware. In all upgrade modes, users upload the firmware package to the Developer Center, and the device obtains the firmware package from Developer Center to realize upgrade on the air. Finally, MCU receives the upgrade package and writes it into the local flash memory to realize firmware upgrade. This chapter introduces how to perform SOTA upgrade in QuecOpen solution.


## __Related API__

|          Function           | Description                                       |
| :-------------------------: | :------------------------------------------------ |
|    Ql_iotCmdOtaRequest()    | Requests OTA upgrade plan from Developer Center.               |
|    Ql_iotCmdOtaAction()     | Configures OTA upgrade operations.                |
| Ql_iotCmdOtaMcuFWDataRead() | Reads firmware data stored in the device.         |
| Ql_iotConfigSetMcuVersion() | Sets MCU ID and the corresponding version number. |
| Ql_iotConfigGetMcuVersion() | Gets MCU ID and the corresponding version number. |

<font color=#999AAA >Note: See [OTA Upgrade API](/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-05.md) and [Product Configuration API](/en/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-02.md) for details.</font>


## __Procedure__

### **1. Log in to Developer Center**

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.

### **2. Create a Project**

A project is a collection of products. New users have no project by default after registering and logging in. You need to create a project before you can perform related operations in the project dimension.

### **3. Create a Product** 

Creating a product is the first step in the product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with NB-IoT networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product: "Smart Aromatherapy Diffuser".

### **4. OTA Upgrade Operations**

#### **a. Create a Model**

An upgrade model is a user-created collection of one or more components which is used to select and plan product components to be upgraded when an upgrade plan is created. The model is unique under the current project; Component names are unique under the same model.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-01.jpg">![img](/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-01.jpg)</a>

* __Basic Information__: project name, model name, device model and version.
  * __Project Name__ : Project to which the OTA upgrade belongs (immutable).
  * __Model Name__: The name of the added model.
  * __Device Model__: The added device model, only supporting uppercase and lowercase letters, digits, and underscores (_).
  * __Version__: Description of the version, similar to remarks, which helps the user or others better understand the model.
* __Add a Component__: Description of each component that may require a SOTA upgrade. Click __Add a Component__.

  * __Component Identifier__: Identifier of the added component.
  * __Component Name__: Name of the added component.
  * __Component Type__: Firmware or MCU.

  * __Remarks__: Component description that helps the user or others better understand the component. 
    <font color=#999AAA >Note: The upgrade model must contain at least one firmware component, so you need to add a firmware component in the SOTA upgrade.</font> 

#### __b. Add a Version__

<a data-fancybox title="img" href="/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-02.jpg">![img](/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-02.jpg)</a>


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

<a data-fancybox title="img" href="/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-03.jpg">![img](/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-03.jpg)</a>

* __Project Name__: Project to which the OTA upgrade belongs (immutable).
* __Product Name__: The name of the product to be upgraded.
* __Plan Name__: Plan name.
* __Model__: Model of the product in which the devices need upgrading.
* __Set Blacklist and Whitelist__: All devices of the product will be upgraded if no whitelist or blacklist is set. The blacklist has a higher priority than whitelist if both whitelist and blacklist are set.
  * __Set Whitelist__: Only the device(s) in the whitelist is/are allowed to be upgraded.
  * __Set Blacklist__: The device(s) in the blacklist is/are not allowed to be upgraded.

__ii. Formulate Upgrade Strategy__

During the firmware upgrade, it is inevitable that the upgrade fails due to a poor upgrade environment. To avoid this situation, you need to formulate an upgrade policy to reduce the probability of upgrade failure. Click __Self-defined __ next to the upgrade strategy to configure the upgrade strategy in the pop-up window.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-04.jpg">![img](/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-04.jpg)</a>

__iii. Select OTA Upgrade Version__

When creating an upgrade plan, select the model and then components and versions of the model will be automatically displayed and you need to select the MCU component package to be upgraded. Click __Not Selected__ under "Selected Version" to select the MCU component package version to be upgraded.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-05.jpg">![img](/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-05.jpg)</a>



__iiii. Activate Plan__

After completing the above steps of __Create a Model__, __Add a Version__ and __Create an Upgrade Plan__, you can start activating the plan.
Click __Activate Plan__ in the lower left corner to activate the configured plan. Then Developer Center will execute the upgrade task and issue the selected target version firmware to the target devices.

<font color=#999AAA >Note: If the upgrade task is activated, it is not allowed to delete the task.</font>

#### __d. Initialize the Device and Connect the Device to Developer Center__

Initialize the device, connect the device to Developer Center and establish a safe and stable communication between the device and Developer Center to realize device management and OTA upgrade.

```c
/* Initialize QuecThing SDK */
Ql_iotInit();
/* Register event callback function */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* Access Developer Center */
Ql_iotConfigSetConnmode(1);
```

<font color=#999AAA >Note: If device with China Mobile/China Unicom IoT SIM card inserted is connected to Developer Center, Developer Center will automatically create the device on Developer Center.</font>



#### __e. Configure MCU Version Number__

```c
/* Configure the external MCU ID number and version number (optional). If there is no external MCU, these parameters are not required. */
Ql_iotConfigSetMcuVersion("STM32","V1_0");
```

#### __f. OTA Request__

<font color=#999AAA >Precondition: Ensure that the device is connected to Developer Center during OTA upgrade.</font>
After the upgrade plan is made and activated, the device needs to call __Ql_iotCmdOtaRequest()__ to request OTA upgrade. <font color=#999AAA >Note: This function is supported in QuecThing SDK versions 2.1.2 and above.</font>

* Sample code

  ```c
  /* OTA Request*/
  Ql_iotCmdOtaRequest(0);
  ```


#### __g. Check the Upgrade Result__

After sending OTA request command, if the device has been included in the product in the upgrade plan product, it will automatically trigger __Ql_iotEventCB__ and report the event __{7,10700}__. The event include component identifier + source version + target version + minimum power + minimum signal strength + firmware package size.  If the device meets the upgrade strategy requirements, call __Ql_iotCmdOtaAction(1)__ to confirm the upgrade.

* Issue the upgrade plan. The reported content is shown as follows (including component identifier, source version, target version, minimum power required for OTA upgrade, minimum signal strength in OTA upgrade and disk space required for OTA upgrade)

  ```c
  void (*eventCB)(7,10700,"<componentNo>,<sourceVersion>,<targetVersion>,<batteryLimit>,<minSignalIntensity>,<useSpace>");
  ```

  Sample code of processing event callback function:

  ```c
  void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
      switch (event)
      {
      	/* OTA upgrade event callback */
  	    case QIOT_ATEVENT_TYPE_OTA:
  	    {
  	        switch (errcode)
  	        {
  		        /* Detect upgrade plan */
  		        case QIOT_OTA_TASK_NOTIFY:
  		        {
  		            char *words[100];
  		            /* Disassemble strings */
  		            quint32_t count = Quos_stringSplit((char *)value,HAL_STRLEN(value), words, sizeof(words) / sizeof(words[0]),",", FALSE);
  		            printf("recv ota task\r\n");
  		            if(count < 6)
  		            {
  		                break;
  		            }
  		            /* Ensure whether the device meets the requirments for upgrade strategy */
  		            printf("componentNo:%s,sourceVersion:%s,targetVersion:%s,batteryLimit:%s,minSignalIntensity:%s,minSignalIntensity:%s\r\n",
  		                words[0],words[1],words[2],words[3],words[4],words[5]);
  		            /* Device starts upgrading*/
  		            Ql_iotCmdOtaAction(1);
  		            break;
  		        }
  	        }
          }
  	}
  }
  ```


#### __h. Device Upgrade Process Feedback__

The successful process of SOTA upgrade is divided into 5 steps: __Download starts__, __Download in progress__, __Successful download__, __Upgrade in progress__ and __Successful upgrade__. Each upgrade step triggers __Ql_iotEventCB__ and reports corresponding callback events.


* __Device starts to download firmware package.__ (The event includes component identifier, firmware package size and MD5 value of the firmware package.)

  ```c
  void (*eventCB)(7,10701,"<componentNo>,length,<MD5>");
  ```

* __The firmware package is being downloaded.__

  ```c
  void (*eventCB)(7,10702,NULL,0);
  ```

* __The firmware package is downloaded successfully.__ (The event includes component identifier, firmware package size, start address of the current downloaded block and size of the current file block.）

  ```c
  void (*eventCB)(7,10703,"<componentNo>","<length>,<startaddr>,<piece_length>");
  ```

* __MCU firmware is being upgraded in progress.__

  MCU receives firmware package and writes it to local flash to upgrade the firmware.

  __i. MCU reads firmware package__

  Sample code for simulating MCU loop reading firmware package:

  ```c
  /* Simulate MCU loop reading firmware package with API */
  void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
      switch (event)
      {
      	/* OTA upgrade event callback */
  	    case QIOT_ATEVENT_TYPE_OTA:
  	    {
  	        switch (errcode)
  	        {
  		        /* Successful download */
  		        case QIOT_OTA_DOWNLOADED:
  		        {
  		            char *words[100];
  		            quint32_t count = Quos_stringSplit((char *)value,HAL_STRLEN(value), words, sizeof(words) / sizeof(words[0]),",", FALSE);
  		            printf("ota download complete\r\n");
  		            if(count < 4)
  		            {
  		                break;
  		            }			
  		            printf("componentNo:%s,length:%s,startaddr:%s,piece_length:%s\r\n",words[0],words[1],words[2],words[3]);            
  		            /* If the SOTA upgrade is successful, read the firmware file with API. */
  		            if(strcmp(QIOT_MCU_COMPONENT_NO,Quos_stringRemoveMarks(words[0])) == 0)
  		            {
  		                quint8_t readBuf[1024]={0};
  		                for(int i=0;(i*1024)<words[3];i++)
  		                {
  			               	 if(Ql_iotCmdOtaMcuFWDataRead(i*1024,readBuf,sizeof(readBuf))>0)
  			               	 {
  			               		 printf("sota read file...ret:%d\r\n",ret);
  			               	 }
  			               	 else
  			               	 {
  			               	   printf("sota read file error");
  			               	   break;
  							 }
  		               	}			               
  		            }
  		            break;
  		        }
  	        }
          }
  	}
  }
  ```

  __ii. Inform Developer Center that the MCU is in upgrade status__

  After the device upgrade is completed, the MCU should actively call __Ql_iotCmdOtaAction(3)__.

  ```c
    /* Inform Developer Center that the MCU is in upgrade status after SOTA upgrade is completed. */
    Ql_iotCmdOtaAction(3);
  ```

  __iii. Configure new MCU version__ 

  After the device upgrade is completed, the MCU should set the new MCU version number and report it to Developer Center.

  ```c
  Ql_iotConfigSetMcuVersion("STM32","V2_0");
  ```


* __The MCU firmware is upgraded successfully.__ (After reporting new MCU version number to Developer Center, the callback event that the firmware package is upgraded successfully will be returned.）

  ```c
  void (*eventCB)(7,10705,NULL,0);
  ```




### __5. Monitor the Upgrade__

Click __Component Details__ in __Upgrade Plan__ >__Upgrade Plan List__ >__Device List__ to view the upgrade details. In "Upgrade Monitoring" page, you can view the current upgrade status and status details of all devices for this upgrade task. Status details include __Start__, __Confirm__, __Download__, __Upgrading__ and __Success/Fail__. In addition, click __"Details>>"__ to view the details of the Upgrade Logs in the pop-up window on the right side of the list, and cancel the device upgrade according to the upgrade progress. Upgrade monitoring is shown in the following figure.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-06.jpg">![img](/en/deviceDevelop/nb/QuecOpen/resource/OTA/SOTA/Example-06.jpg)</a>


 