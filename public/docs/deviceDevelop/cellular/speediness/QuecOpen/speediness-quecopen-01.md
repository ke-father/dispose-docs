# 开发环境配置

## __概念说明__

__QuecOpen__ 主要是一种以模块作为 __主处理器__ 的应用方式，亦可以作为 __从模块__ 。采用 __QuecOpen__ 解决方案，可以 __简化开发者对物联网应用的开发流程__，__精简硬件结构设计__，从而 __降低产品成本__。__QuecOpen__ 接入方案的 __SDK__ 采用 模块化设计 ，分离核心协议服务 与 硬件抽象层，并提供灵活的配置选项和多种编译方式，适用于不同设备的开发平台和使用环境。


<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png">![img](/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png)</a>


## __一、开发环境准备__
## 获取SDK及模组资料


点击<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M')" target="_blank">下载中心-SDK</a>下载模组SDK及模组资料，若无SDK则联系移远FAE获取。

## __二、安装驱动__

以 __FC41D__ 模组为例，介绍如何安装移远通信模块的USB驱动。可联系移远通信技术支持获取USB驱动或进入<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M')" target="_blank">下载中心-驱动</a>下载 USB驱动。

__1、安装驱动__
双击打开驱动包开始安装，选择安装目录，点击 __Next>__ 即可完成安装

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png">![img](/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png)</a>

__2、验证是否安装成功__

将PC与开发板连接，打开PC设备管理器可查看对应的驱动是否安装成功，查看 端口(COM 和 LPT) 项，若如下图所示设备即表示安装成功。

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png">![img](/deviceDevelop/cellular/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png)</a>
 
## __三、编译环境配置__

__1、下载并安装VSCode__

__2、安装及配置Ubuntu 20.04 LTS__

__3、安装make工具__


<font color=#999AAA >提示：环境配置仅供参考。</font>

  
