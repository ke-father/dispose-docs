# Device Hardware Configuration

##  __1. Install Driver__

Take installing Quectel USB driver in __FC41D__ module as an example. You can contact Quectel technical support to get the USB driver or download it in <a :href="getUrl('menuCode=MODULE_DEVL&moduleType=FC41DAATB&resourceType=M', 'en')" target="_blank">Download Center-Driver</a>.


* Connect your PC with an EVB and open PC Device Manager to view the port (COM and LPT). Select the newly added port and right click "__Update Drivers__" and then click __Browse my computer for drivers__.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-01.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-01.png)</a>

* Browse and select the folder where the downloaded USB driver is located. After the driver is successfully installed, it is shown as follows.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-02.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-02.png)</a>



##  __2. Install QthTools-MCU Simulator__

__QthTools-MCU Simulator__ is a tool used to simulate MCU and communicate with the module, so that  it can greatly reduce the time for developers to get familiar with the AT commands and improve the development efficiency.

Enter <a :href="getUrl('menuCode=DEBUG_UTIL&resourceType=C', 'en')" target="_blank">Download Center-Debugging Tool</a> page and download __QthTools-MCU Simulator__.  Find __USB Serial Port(COMxx)__ in __Device Manager__ > __Port (COM  and LPT)__, select and open it in QthTools-MCU Simulator, and then send __“AT”__  to test the communication quality. Unless otherwise specified, you do not need to modify other configurations, as shown below: 

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-03.png">![img](/en/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-03.png)</a>


  