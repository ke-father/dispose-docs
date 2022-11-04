# Device Hardware Configuration

##  __1. Install Driver__

Take installing Quectel USB driver in EC600N-CNLC module as an example. You can contact Quectel technical support to get the USB driver or download it in <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-Driver</a>.

* Double click to open the driver package and start to install the driver. Select the destination folder and click __Next>__ to finish the installation.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-01.png">![img](/en/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-01.png)</a>

* Check whether the driver has been installed successfully.
  Connect your PC with an EVB and open PC Device Manager to view the port (COM and LPT) to check whether the corresponding driver has been installed successfully. If the port is shown as the following figure, the USB driver is installed successfully. 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-02.png">![img](/en/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-02.png)</a>


##  __2. Install QthTools-MCU Simulator__

__QthTools-MCU Simulator__ is a tool used to simulate MCU and communicate with the module, so that  it can greatly reduce the time for developers to get familiar with the AT commands and improve the development efficiency.

Enter <a :href="getUrl('menuCode=DEBUG_UTIL&resourceType=C', 'en')" target="_blank">Download Center-Debugging Tool</a> page and download __QthTools-MCU Simulator__.  Find __Quectel USB AT Port__ in __Device Manager__ > __Port (COM  and LPT)__, select and open it in QthTools-MCU Simulator, and then send __“AT”__  to test the communication quality. Unless otherwise specified, you do not need to modify other configurations, as shown below: 

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-03.png">![img](/en/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-03.png)</a>

  