# Configure Development Environment

## **Introduction**

__QuecPython SDK__ is realized based on __Micro Python__ extension, which is specially used for embedded development on __Developer Center__ and is suitable for developers to independently develop business logic to access  __Developer Center__. __QuecPython SDK__ provides encapsulation of basic businesses such as __device activation__, __business data uplink and downlink__ and __OTA__. __SDK__ does not depend on the specific device platform and operating system, but only need Developer Center and system to support __CoAP__ protocol stack and provide necessary system-dependent interfaces for SDK to complete connection.


<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecPython/Speediness-QuecPython-01.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecPython/Speediness-QuecPython-01.png)</a>

## **Prepare Development Environment**

### __1. Install Driver__

This section takes BC25 module as an example to show you how to install USB driver of Quectel module. You can contact Quectel Technical Supports to obtain the USB driver or go to <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-Driver</a> to download the driver corresponding to the module model.

__1) Install the driver__

Connect the module to the host, then you can open "Device Manager" to check the corresponding driver port. Right click the corresponding port and then click "Update Driver". Browse the downloaded driver file path in the pop up window to complete the driver installation.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecPython/Speediness-QuecPython-02.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecPython/Speediness-QuecPython-02.png)</a>


__2) Confirm the successful driver installation__

You can check whether the corresponding driver is installed by viewing "Port (COM and LPT)" in "Device Manager" of the host.  If the device name has a exclamation mark, that indicates the driver is not installed. The following figure shows that the driver is installed successfully. 

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecPython/Speediness-QuecPython-03.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecPython/Speediness-QuecPython-03.png)</a>

### __2. Download QPYcom__

Quectel provides __QPYcom__, a graphical tool based on Windows interface for developers to help you __develop and debug__ devices more efficiently. Enter __<a :href="getUrl('menuCode=DEBUG_UTIL&resourceType=C', 'en')" target="_blank">Download Center- Debugging Tool</a>__ and download __QPYcom__ on __Debugging Tool__ page.



### __3. Download Firmware__

__1) Download Firmware Package__ 

Enter __<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center</a>__ , select the specified module and enter corresponding download page, find the firmware package and download it. 



<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecPython/Speediness-QuecPython-05.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecPython/Speediness-QuecPython-05.png)</a>

__2) Download Firmware__ 

__①__ Click "**Create**" in the lower left corner in "Download" page.<br>
__②__ Click __"Choose FM"__ to get the path of the downloaded firmware package.<br>
__③__ Click __the inverted triangle__ in the lower right corner and select __Download FM__ in the drop-down menu.<br>
__④__ Click "__Download FM__", and QPYcom starts downloading the firmware.


  