# Development Environment Configuration

## __Introduction__

__QuecOpen__ is an application mode with a module as a __main processor__ and can also be used as __slave module__.  __QuecOpen__ solution can __simplify the development process of Internet of Things applications__, __streamline hardware structure design__, and thus __reduce product costs__. __SDK__ of __QuecOpen__ solution adopts modular design to separate core protocol service and hardware abstraction layer, and provides flexible configuration options and multiple compilation modes, which is suitable for different development platforms and environments of different devices.


<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png)</a>


## __1. Prepare Development Environment__

## Get SDK and Module Information


Click <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-SDK</a> to download module SDK and module documents. Contact Quectel FAE to get your desired SDK if it is not included in Download Center.

## __2. Install Driver__

Take __FC41D__ module as an example to introduce how to install USB driver in a Quectel module. You can contact Quectel technical support  to get the USB driver or download it in <a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M', 'en')" target="_blank">Download Center-Driver</a>.


* Connect your PC with an EVB and open PC Device Manager to view the port (COM and LPT). Select the newly added port and right click "__Update Drivers__" and then click __Browse my computer for drivers__.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png)</a>


* Browse and select the folder where the downloaded USB driver is located. After the driver is successfully installed, it is shown as follows.

<a data-fancybox title="img" href="/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png">![img](/en/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png)</a>


## __3. Configure Compilation Environment (Ubuntu)__

This part takes __FC41D__ module as an example to introduce how to configure compilation environment.

__1) Install Tools__
* Execute the following command in the Terminal window to install GCC (GNU Compiler Collection).
  
    > sudo apt-get install gcc
* Execute the following command in the Terminal window to install GNU Make.
  
    > apt-get install ubuntu-make

__2) Install and Configure Ubuntu 20.04 LTS__
Decompress arm-none-eabi-gcc to the */usr/bin* directory of the Ubuntu file system.

__3) Add Environment Variables__

**①** Execute **vim ~/.bashrc** in the Terminal window to enter .bashrc file.<br>
**②** Add **export PATH=$PATH:/usr/bin/gcc-arm-none-eabi-5_4-2016q3/bin** to the end of .bashrc file. <br>
**③** Execute **source ~/.bashrc** to load the modified configuration in the .bashrc file for the configuration to take effect.

__4) Install Libraries__
* Execute the following command to install libraries lib32ncurses5-dev and lib32z1-dev lsb-core
  
    > sudo apt-get install lib32ncurses5-dev lib32z1-dev lsb-core

__5) Check the Installation Result__
* After the installation is complete, execute the following command to query the arm-none-eabi-gcc version.
  
    > arm-none-eabi-gcc -v

<font color=#999AAA >Note: This environment configuration is for reference only.</font>






  