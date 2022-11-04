# 设备硬件配置

##  __一、驱动安装__
驱动安装举例：EC600N-CNLC 模组安装移远通信模块的USB驱动，可联系移远通信技术支持获取USB驱动或进入<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M')" target="_blank">下载中心-驱动</a>下载 USB驱动。

* 双击打开驱动包开始安装，选择安装目录，点击 __Next>__ 即可完成安装

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-01.png">![img](/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-01.png)</a>

* 验证是否安装成功
将PC与开发板连接，打开PC设备管理器可查看对应的驱动是否安装成功，查看 端口(COM 和 LPT) 项，若如下图所示设备即表示安装成功。

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-02.png">![img](/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-02.png)</a>


##  __二、安装移远MCU仿真工具__

__移远MCU仿真工具__ 用作模拟主控MCU且与模组通讯的一款实用工具，从而大大减少开发者对AT指令的熟悉流程时间，提高开发效率。

进入<a :href="getUrl('menuCode=DEBUG_UTIL&resourceType=C')" target="_blank">下载中心-调试工具</a>，下载 __移远MCU仿真工具__ 。在 __设备管理器__ >__端口(COM 和 LPT)__ 中找到 __Quectel USB AT Port__ 的端口，并在工具中选择端口并打开，发送测试通讯指令 __“AT”__ ，如无特别要求暂且不需要修改其他配置。如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-03.png">![img](/deviceDevelop/cellular/speediness/resource/AT/Speediness-AT-03.png)</a>

  
