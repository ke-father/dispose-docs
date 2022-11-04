# Upgrade Plan

This document introduces the creation of OTA plan on Developer Center, including version package management and upgrade plan.  

## **Version Package Management**

Versions are the definitions of different packages required for different modules, MCUs and applications in modules, and are used to manage different upgrade packages.

### **Prerequisites**

None

### **Steps**

1.After logging in to Developer Center, click "Device Management"→"OTA Upgrade" in the left navigation bar to enter detail page of OTA upgrade.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_13-45-2.png?version=1&modificationDate=1647053287000&api=v2">![img](/en/guide/image2022-3-12_13-45-2.png?version=1&modificationDate=1647053287000&api=v2)</a>

Click **"Add a Version Package"** on the **"Version Package Management"** panel to bring up the following window and enter the required information.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_11-4-28.png?version=1&modificationDate=1647053663000&api=v2">![img](/en/guide/image2022-3-12_11-4-28.png?version=1&modificationDate=1647053663000&api=v2)</a>

Parameters

| **Parameter**       | **Description**                                                        |
| :--------- | :----------------------------------------------------------- |
| Version Name   | The version name of the upgrade package |
| Upgrade Package Type   | Upgrade packages are classified into full packages and Delta packages. Full package: The base package can be used for upgrade and the source package version does not need to be specified. Delta package: It is used to upgrade the firmware from a specific version to the target version and the source version needs to be specified. |
| Target Version  | The version to be updated to  |                                  |
| Source Version     | It only needs to be specified for Delta upgrade and is used to upgrade the firmware from a specific version to the target version. |
| Select Upgrade Package | The size of a single upgrade package does not exceed 100 M. And up to 5 packages can be uploaded at the same time. The supported upgrade package formats are .bin, .zip, .rar, .pack, .mini_1, .mini_2, .py, .tar, .tar.gz, .s19, bin_1 and bin_2.|
| Remark   | Description of the upgrade package, such as fixed bugs and optimized features. No more than 200 characters. |

3.Click "Confirm" to enter "Version Management" page. Find the version and click "Details" or "Delete" in the Action column to view or delete the version information.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_11-34-23.png?version=1&modificationDate=1647055457000&api=v2">![img](/en/guide/image2022-3-12_11-34-23.png?version=1&modificationDate=1647055457000&api=v2)</a>

## **Upgrade Plan Creation**

If you want to perform a batch OTA upgrade for devices, you need to create an upgrade plan on Developer Center to configure the upgrade information for the batch of devices.

### **Prerequisites**

● A product has been created.<br />
● A version package has been added.

### **Steps**

1.After logging in to Developer Center, click "Device Management"→"OTA Upgrade" in the left navigation bar to enter detail page of OTA upgrade.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_13-45-2.png?version=1&modificationDate=1647053287000&api=v2">![img](/en/guide/image2022-3-12_13-45-2.png?version=1&modificationDate=1647053287000&api=v2)</a>


2.Click "Create an Upgrade Plan" on "Upgrade Plan" panel to enter "Create an Upgrade Plan" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_10-58-12.png?version=1&modificationDate=1647055698000&api=v2">![img](/en/guide/image2022-3-12_10-58-12.png?version=1&modificationDate=1647055698000&api=v2)</a>

Parameters

| **Parameter**              | **Description**            |
| :----------------- |:---------------|
| Plan Name          | Name of the upgrade plan  |
| Product to Be Upgraded          | The product to which the devices in the upgrade plan belongs     |
| Set Blacklist and Whitelist       | The blacklist and whitelist are used to handle special cases for this product upgrade. Blacklist: The devices in the blacklist are not allowed to be upgraded.  Whitelist: Only the devices in the whitelist are allowed to be upgraded. If the blacklist and whitelist are not set, all the devices under the product are upgraded; if the blacklist and whitelist are set at the same time, the blacklist has a higher priority than the whitelist. |
| Upgrade Mode          | Silent Upgrade and Manual Upgrade.  |
| Upgrade Strategy           | Strategy configuration for the batch upgrade. Number of retries: The number of times allowed to re-upgrade the device if an upgrade fails. Lowest RSRP: If the signal strength reported by the device is lower than this value, an OTA upgrade will not be performed. Minimum battery power: If the reported battery power is lower than this value, OTA upgrade will not be performed.                    |
| Planned Time          | You can specify a time period for the upgrade. And if the upgrade plan is not finished beyond the end time, an attempt is made to end the plan.   |
| Select Component and Version |  You can dynamically adjust the component information to adapt to the upgrade plan by adding or removing components. After the adjustment of the components is completed, you can click "Not Selected" in the Select Version column to select the appropriate version from the version list for each component.                                               |



After the plan information is configured, you can click "Save" to save the plan.  

Plan Status

| **Plan Status** | **Description**      |
| :------- | :----------------------------------------------------------- |
| Saved     | The the plan enters saved state after you click "Save". At this time, the plan is not activated, so it can be edited and modified. |
| Activated     | The plan enters activated state after you click "Activate Plan". At this time, the plan cannot be edited and modified. When a device in the upgrade plan goes online, the OTA upgrade process is initiated. |
| Upgrading   | After the plan is activated, when an OTA upgrade is performed for a device, the plan enters upgrading state. |
| Suspended     | You can suspend the plan. The subsequent devices no longer receive this upgrade plan information if you suspend the plan. Meanwhile the devices that are being upgraded can still be upgraded. The suspension can be resumed. |
| Terminated    | You can forcibly terminate the upgrade. After you click "Terminate", the upgrade status of the devices to be upgraded will turns to Failed, and the devices that are being upgraded can still be upgraded. Forced termination is not recoverable. |
| Ended     | When the upgrade reaches the end time, the status of the plan turns to Ended. The devices to be upgraded will not be upgraded. The devices being upgraded will still be upgraded until the upgrade times out or completes. |

