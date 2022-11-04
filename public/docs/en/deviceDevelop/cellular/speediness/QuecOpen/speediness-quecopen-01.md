# Development Environment Configuration

## __Introduction__

__QuecOpen__ is an application mode with a module as a __main processor__ and can also be used as __slave module__.  __QuecOpen__ solution can __simplify the development process of Internet of Things applications__, __streamline hardware structure design__, and thus __reduce product costs__. __SDK__ of __QuecOpen__ solution adopts modular design to separate core protocol service and hardware abstraction layer, and provides flexible configuration options and multiple compilation modes, which is suitable for different development platforms and environments of different devices.


<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png)</a>


## __1. Prepare Development Environment__

## Get SDK and Module Information


Click <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-SDK</a> to download module SDK and module documents. Contact Quectel FAE to get your desired SDK if it is not included in Download Center.

## __2. Install Driver__

Take __FC41D__ module as an example to introduce how to install USB driver in a Quectel module. You can contact Quectel technical support  to get the USB driver or download it in <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-Driver</a>.

__1) Install__
Double click to open the driver package and start to install the driver. Select the destination folder and click __Next>__ to finish the installation.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png)</a>

__2) Check__

Connect PC with an EVB and open PC Device Manager to view the port (COM and LPT) to check whether the corresponding driver has been installed successfully. If the port is shown as the following figure, the USB driver is installed successfully. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png">![img](/en/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png)</a>

## __3. Configure Compilation Environment__

__1) Download and install VSCode__

__2) Install and configure Ubuntu 20.04 LTS__

__3) Install GNU Make__

<font color=#999AAA >Note: This environment configuration is for reference only.</font>

  