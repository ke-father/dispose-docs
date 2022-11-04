# Build Development Environment

##  Install Driver

The following content takes Quectel BC25 module as an example, you can contact Quectel Technical Supports to obtain the corresponding USB driver or go to <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center - Driver</a> to download the USB driver.

__1.  Install the driver__ 

Connect the module to the host, then you can open "Device Manager" to check the corresponding driver port. Right click the corresponding port and then click "Update Driver". Browse the downloaded driver file path in the pop up window to complete the driver installation.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-01.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-01.png)</a>

__2. Confirm the successful driver installation__ 

You can check whether the corresponding driver is installed by viewing "Port (COM and LPT)" in "Device Manager" of the host.  If the device name has a exclamation mark, that indicates the driver is not installed. The following figure shows that the driver is installed successfully. 

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-02.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-02.png)</a>


##  __Install QthTools-MCU Simulator__

Quectel QthTools-MCU Simulator is a tool that simulates a MCU to communicates with module, which greatly reduces the time for developers to know AT command process well and improves the efficiency of solution verification.

Go to <a :href="getUrl('menuCode=DEBUG_UTIL&resourceType=C', 'en')" target="_blank">Download Center-Debut Tool</a> to download __MCU Simulator Tool__. On the host, you can find __Quectel USB AT Port__ port from __Device Manager__ > __Port (COM and LPT)__, open __Quectel USB AT Port__ port on the tool and send a test command __AT__. Please do not change other configurations if there is no special requirements. 

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-03.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-03.png)</a>

  