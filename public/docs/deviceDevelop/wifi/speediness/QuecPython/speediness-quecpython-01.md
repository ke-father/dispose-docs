# 开发环境配置

## **概念说明**

__QuecPython SDK__ 是基于 __Micro Python__ 语言扩展实现，专门用于 __开发者中心__ 的嵌入式开发，适用于开发者自主开发设备业务逻辑接入 __开发者中心__。__QuecPython SDK__ 提供 __设备激活__、__业务数据上下行__ 和 __OTA__ 等基础业务接口封装，__SDK__ 不依赖具体设备平台及操作系统环境，仅需要支持 __MQTT__ 协议栈及提供 SDK 必要的系统依赖接口即可完成接入。


<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-01.png">![img](/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-01.png)</a>

## **开发环境配置**
### __一、驱动安装__

以 __FC41D__ 模组为例，介绍如何安装移远通信模块的USB驱动。可联系移远通信技术支持获取USB驱动或进入<a :href="getUrl('menuCode=MODULE_DEVL&moduleType=FC41DAATB&resourceType=M')" target="_blank">下载中心-驱动</a>下载 USB驱动。


* 将PC与开发板连接，打开PC设备管理器可查看 端口(COM 和 LPT) 项，选中新增的串口并点击右键选择 __更新驱动程序__ ，点击 __浏览我的电脑以查找驱动程序__。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-05.png">![img](/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-02.png)</a>


* 浏览并选择已下载的USB驱动所在的文件夹，安装驱动成功后如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-05.png">![img](/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-03.png)</a>
 

### __二、QPYcom图形化工具下载__

移远提供一个基于Windows界面工具 __QPYcom 图形化工具__ ，给予开发者更高效的 __开发且调试__ 。进入 __<a :href="getUrl('menuCode=DEBUG_UTIL&resourceType=C')" target="_blank">下载中心-调试工具</a>__ 点击 __调试工具__ 详情页可下载 __QPYcom图形化工具__ 。





### __三、固件烧录__

__1、获取固件包__ 

进入 __<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M')" target="_blank">下载中心-固件</a>__ ，点击进入指定模块的相关下载页面，找到固件包并下载。



<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-05.png">![img](/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-05.png)</a>

__2、烧写固件__ 

__①、__ 在下载页面左侧导航栏创建项目。<br>
__②、__ 点击 __选择固件__ 选择已获取的固件包的路径。<br>
__③、__ 左键点击页面右下角 __倒三角形__，在弹出的菜单中选择 __下载固件__ 菜单。<br>
__④、__ 点击 __下载固件__ 按钮即可工具自动开始固件烧写。



<font color=#999AAA >提示：下载固件时，无需选择串口，QPYcom工具将 __自动选择__ 并开始下载。请勿 __同时插入__ 两个或两个以上的开发板，以免QPYcom工具 __无法识别__，导致下载出错。</font>

  
