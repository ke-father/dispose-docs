# OTA Overview

## **What is OTA?**

OTA stands for Over-the-Air Technology.

The main application of OTA (Over-the-Air Technology) in IoT is to update the module firmware or MCU firmware of devices, so that the firmware upgrade does not need physical access, saving the cost and time needed for recall of sold products and downloading of firmware. 


## **OTA Upgrade Process**

<a data-fancybox title="img" href="/en/guide/image2022-3-10_21-11-2.png?version=1&modificationDate=1646917270000&api=v2">![img](/en/guide/image2022-3-10_21-11-2.png?version=1&modificationDate=1646917270000&api=v2)</a>

Description Of Upgrade Process

**Before using OTA upgrade feature, please make sure that the OTA upgrade service has been developed on device side.**

1.After logging in to Developer Center, upload the target upgrade package to Developer Center. 

2.Create an upgrade plan: select the product to be upgraded, add components, add an upgrade package for each component and configure upgrade strategy.

3.After the upgrade plan is configured, click "Activate Plan". The plan takes effect.

4.At this time, the device goes online and sends an OTA request with the current module firmware version and MCU firmware version list to Developer Center.

5.Developer Center receives the OTA request from the device and check whether there is an upgrade plan for the device. If the plan exists, Developer Center verifies whether the source version in the plan is consistent with the version reported by the device and whether the upgrade strategy is satisfied.

6.If all the information are verified successfully, Developer Center sends the plan information to the device. The plan must meet the criteria and contains information such as component identifier, component type, source version, target version and upgrade strategy.

7.The device receives the plan information sent from Developer Center and determines whether to confirm the upgrade according to the current device status after comparing the plan information. If conditions permit, the device will report the upgrade confirmation information to Developer Center.

8.After receiving the upgrade confirmation information from device, Developer Center issues the download address of the upgrade package for each component according to the upgrade sequence of the components.

9.The device requests the OSS service to download the upgrade package from the received download address.

10.After the firmware is downloaded, the device firmware upgrade starts.

11.The device will continuously report the upgrade progress to Developer Center during the firmware upgrade. The detailed upgrade progress reported by the device can be found in the device component upgrade logs.

12.Developer Center stores and displays the progress reported by the device to let users intuitively understand the upgrade details of each device.

13.The device will reboot after the firmware is upgraded. The device connects to Developer Center after it reboots successfully and reports the current version to Developer Center synchronously.

14.Developer Center receives the version reported by the device and then compares whether the version is consistent with the target version in the plan. If the two versions are consistent, the device firmware is upgraded successfully.



## **OTA Capability of Developer Center**

| Feature     | Description                                                                                                                                                                                                                                                                                                                                   |
| :------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Supported Protocol | MQTT protocol <span v-if="!isEu">, LwM2M protocol</span> and HTTP protocol can be used for OTA upgrade on Developer Center.  |
| Upgrade Package  | Full package and Delta package are supported. The maximum size of a full package is 100 M, and the supported upgrade package formats are .bin, .zip, .rar, .pack, .mini_1, .mini_2, .tar, .tar.gz, .s19, bin_1 and bin_2. Delta upgrade allows multiple source versions to be upgraded to the same target version, regardless of the device source version. |
| Component Type | Both module firmware upgrade and MCU firmware upgrade are supported in a plan.  |
| Upgrade Scope | Supports batch upgrade of devices, and excludes special cases by adding whitelists and blacklists. A maximum of 10000 devices can be upgraded simultaneously.  |
| Upgrade Strategy | You can configure the upgrade mode, the minimum signal strength, the minimum battery power and the number of retries.  |
| Upgrade Plan | Multiple upgrade plans can be performed for a single device. After an upgrade plan is completed, subsequent upgrade plans can be started immediately.   |
| Region | Support OTA upgrade for devices worldwide  |
| Upgrade Monitor | Support real-time monitoring of device upgrades and statistics of upgrade success rate                                                                                                                                                                                                                                                        |



  

