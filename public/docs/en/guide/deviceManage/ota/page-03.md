# Monitoring and Statistics

This document introduces the monitoring and statistics of OTA upgrade plan.  Monitoring refers to the real-time monitoring of the upgrade status of devices in the upgrade plan. Statistics refers to the statistics of the success rate of the upgrade plan and the number of devices to be upgraded. 

## **Prerequisites**

● An upgrade plan has been created and a device has been upgraded or is being upgraded.  

## **Steps**

1.After logging in to Developer Center, click "Device Management"→"OTA Upgrade" in the left navigation bar to enter detail page of OTA upgrade.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_13-45-2.png?version=1&modificationDate=1647063296000&api=v2">![img](/en/guide/image2022-3-12_13-45-2.png?version=1&modificationDate=1647063296000&api=v2)</a>

2.Click "View" on "Upgrade Plan" panel to enter "Plan List" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_13-46-36.png?version=1&modificationDate=1647063390000&api=v2">![img](/en/guide/image2022-3-12_13-46-36.png?version=1&modificationDate=1647063390000&api=v2)</a>

3.Find the plan you want to view in the plan list and click "Upgrade Monitoring" in the Action column to enter the detail page of Monitoring and Statistics.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_13-47-22.png?version=1&modificationDate=1647063436000&api=v2">![img](/en/guide/image2022-3-12_13-47-22.png?version=1&modificationDate=1647063436000&api=v2)</a>

Upgrade Status

| **Upgrade Status** | **Description**                                                        |
| :----------- | :----------------------------------------------------------- |
| Upgrade Failed     | If one component fails to be upgraded or the upgrade is not performed after the scheduled end time, the device fails to be upgraded. |
| Upgraded     | If all components in the device are successfully upgraded, the device is upgraded successfully.                         |
| In Upgrade       | After the device sends an OTA upgrade request to Developer Center, Developer Center verifies the plan and delivers the upgrade plan information to the device. The device receives the plan and confirms the upgrade, then the device enters upgrading state. |
| Non-upgraded       | The device is offline or the device reports the version but does not receive the upgrade plan from Developer Center.                     |


4.Click "Component Details" in the Action column to view the upgrade process of each component.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_14-0-18.png?version=1&modificationDate=1647064212000&api=v2">![img](/en/guide/image2022-3-12_14-0-18.png?version=1&modificationDate=1647064212000&api=v2)</a>

The device will report many component upgrade information during the upgrade process, and the information is called component upgrade status, which can be classified as below:

Component Upgrade Status

| **Upgrade Status**| **Description**                                                        |
| :----------- | :----------------------------------------------------------- |
| Start        | Device sends an OTA request to Developer Center, and then Developer Center verifies the upgrade plan and sends the upgrade plan information to the device.                  |
| Confirmed by Device     | The device receives the upgrade plan and confirms the upgrade. Developer Center sends the download address of the upgrade package for each component.     |
| Downloading       | The device receives the download address of the upgrade package and requests OSS service to download the upgrade package.                  |
| Upgrading     | After the upgrade package is downloaded, the device is upgraded.                                    |
| Successful/Failed   | The device reports that the update is successful. The plan expires. The plan is forcibly terminated. The upgrade fails. The number of retries after a failure exceeds the threshold. |

5.Click "Upgrade Logs" → "Details" on "Component Details" page to view the upgrade logs of the component. The upgrade logs are displayed in chronological order. 

<a data-fancybox title="img" href="/en/guide/image2022-3-12_14-8-51.png?version=1&modificationDate=1647064725000&api=v2">![img](/en/guide/image2022-3-12_14-8-51.png?version=1&modificationDate=1647064725000&api=v2)</a>
