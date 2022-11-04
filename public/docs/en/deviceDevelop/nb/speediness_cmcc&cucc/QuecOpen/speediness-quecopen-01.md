# Configure Development Environment

## __Introduction__

__QuecOpen__ is an application mode with a module as a __main processor__ and can also be used as __slave module__.  __QuecOpen__ solution can __simplify the development process of Internet of Things applications__, __streamline hardware structure design__, and thus __reduce product costs__. __SDK__ of __QuecOpen__ solution adopts modular design to separate core protocol service and hardware abstraction layer, and provides flexible configuration options and multiple compilation modes, which is suitable for different development platforms and environments of different devices.

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-01.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-01.png)</a>


## __1. Prepare Development Environment__

## Get SDK and Module Information


Click <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-SDK</a> to download module SDK and module documents. Contact Quectel Technical Supports to get your desired SDK if it is not included in Download Center.


## __2. Install Driver__

Take __BC25__ module as an example to introduce how to install USB driver in a Quectel module. You can contact Quectel technical support  to get the USB driver or download it in <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-Driver</a>.

__1) Install the driver__
Connect the module to the host, then you can open "Device Manager" to check the corresponding driver port. Right click the corresponding port and then click "Update Driver". Browse the downloaded driver file path in the pop up window to complete the driver installation.


<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-03.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-02.png)</a>


__2) Confirm the successful driver installation__

You can check whether the corresponding driver is installed by viewing "Port (COM and LPT)" in "Device Manager" of the host.  If the device name has a exclamation mark, that indicates the driver is not installed. The following figure shows that the driver is installed successfully. 

<a data-fancybox title="img" href="/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-03.png">![img](/en/deviceDevelop/nb/speediness_cmcc&cucc/resource/QuecOpen/Speediness-QuecOpen-03.png)</a>

## __3. Configure Compilation Environment__

__1) Download and install VSCode__

__2) Download and unzip CSDTK4.2 to root directory of C disk__

<font color=#999AAA >Note: This environment configuration is for reference only.</font>

  

