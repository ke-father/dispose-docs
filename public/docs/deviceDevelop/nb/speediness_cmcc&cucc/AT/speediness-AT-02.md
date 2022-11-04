# 搭建开发环境


## **一、驱动安装**

以移远NB-IOT BC25模组为例，可联系移远通信技术支持获取USB驱动或进入<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M')" target="_blank">下载中心-驱动</a>下载USB驱动。

__1、安装驱动__ 

连接模块至上位机，打开上位机设备管理器可查看对应的驱动端口，选中对应的端口右键点击 __更新驱动程序__，浏览已下载的驱动文件路径完成安装。


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-01.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-01.png)</a>



__2、验证是否安装成功__ 

打开上位机设备管理器查看对应的驱动是否安装成功。查看 端口(COM 和 LPT) 项。如果在设备名称前有感叹号，说明驱动未安装，若如下图所示设备即表示安装成功。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-01.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-02.png)</a>


## **二、移远MCU仿真工具安装**

移远MCU仿真工具用作模拟主控MCU与模块通讯的一款实用工具，可大大减少开发者熟悉AT命令流程的时间，提高方案验证效率。

进入<a :href="getUrl('menuCode=DEBUG_UTIL&resourceType=C')" target="_blank">下载中心-调试工具</a>下载 __移远MCU仿真工具__ 。在 __设备管理器__ >__端口(COM 和 LPT)__ 中找到 __XR21V1412 USB UART Ch A__ 端口，在工具中选择端口并打开，发送测试命令 __AT__ ，如无特别要求暂且不需要修改其他配置。如下图所示。


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-01.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-03.png)</a>



  
