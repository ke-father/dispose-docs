# Development Environment Configuration

## **Introduction**

__QuecPython SDK__ is realized based on __Micro Python__ extension, which is specially used for embedded development on __Developer Center__ and is suitable for developers to independently develop business logic to access  __Developer Center__. __QuecPython SDK__ provides encapsulation of basic businesses such as __device activation__, __business data uplink and downlink__ and __OTA__. __SDK__ does not depend on the specific device platform and operating system, but only need Developer Center and system to support __MQTT__ protocol stack and provide necessary system-dependent interfaces for SDK to complete connection.


<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-01.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-01.png)</a>

## **Development Environment Configuration**

### __1. Install Driver__

__1)__ Enter <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-Driver</a> to download the driver corresponding to the module model.

__2) Check__

Enter __This PC__ >__Manage__ >__Device Manager__ to view __Port (COM and LPT)__ and check whether __AT Port__ and __DIAG Port__ has already existed.

### __2. Download QPYcom__

Quectel provides __QPYcom__, a graphical tool based on Windows interface for developers to help you __develop and debug__ devices more efficiently. Enter __<a :href="getUrl('menuCode=DEBUG_UTIL&resourceType=C', 'en')" target="_blank">Download Center- Debugging Tool</a>__ and download __QPYcom__ on __Debugging Tool__ page.



### __3. Download Firmware__

__1) Download Firmware Package__ 

Enter __<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center</a>__ , select the specified module and enter corresponding download page, find the firmware package and download it. 

__2) Download Firmware__ 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-05.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-05.png)</a>

__①__ Click "**Create**" in the lower left corner in "Download" page.<br>
__②__ Click __"Choose FM"__ to get the path of the downloaded firmware package.<br>
__③__ Click __the inverted triangle__ in the lower right corner and select __Download FM__ in the drop-down menu.<br>
__④__ Click "__Download FM__", and QPYcom starts downloading the firmware.


 __3) Check__

After downloading the firmware, manually reboot the module. Enter __This PC__ >__Manage__ >__Device Manager__ to view __Port (COM and LPT)__ and check whether __MI05 COM Port__ has already existed. If __MI05 COM Port__ has already existed, it indicates the firmware has been installed successfully, as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-06.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-06.png)</a>

<font color=#999AAA >Note: When dowloading a firmware, you do not need to select a port because QPYcom can __automatically select__ a port and start to download. However, do not __insert__ two or more EVBs __at the same time__, or QPYcom may __not identify__ them and the download may fail.</font>

  