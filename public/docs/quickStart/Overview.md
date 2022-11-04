# 概述

如何让我的设备连接上开发者中心?参考下图。

<a data-fancybox title="img" href="/quickStart/image005.png">![img](/quickStart/image005.png)</a>

## **设备侧开发**

<a data-fancybox title="img" href="/quickStart/image2022-3-10_11-34-48.png">![img](/quickStart/image2022-3-10_11-34-48.png)</a>


## **App应用开发**
<a data-fancybox title="img" href="/quickStart/image2022-3-10_10-22-13.png">![img](/quickStart/image2022-3-10_10-22-13.png)</a>

## **SaaS应用开发**

<a data-fancybox title="img" href="/quickStart/image2022-3-10_10-22-46.png">![img](/quickStart/image2022-3-10_10-22-46.png)</a>

## **数据流转示意图**
<ALink imgurl="/quickStart/image2022-3-22_10-39-54.png" imgenurl="/quickStart/image2022-3-22_10-39-54_en.png" />


## **接入流程**

整体开发流程主要分为以下5个内容：

 - 创建项目，包括项目信息等项目维度的功能集合；

 - 创建产品，包括产品信息、物模型功能定义等；

 - 设备终端适配，包括设备添加、设备线下开发以及设备与平台对接调测（设备注册、数据交互、设备注销等）；

 - SaaS应用的开发，通常用于进行设备功能应用管理、运维管理、终端数据分析等场景；

 - 手机App应用的开发，通常用于对设备信息读取与控制、设备故障上报等。

<a data-fancybox title="img" href="/quickStart/image10013.png">![img](/quickStart/image10013.png)</a>

1、平台侧

如上图，开发者在完成账户注册和登录之后，您可以在开发者中心上创建项目、产品与设备。创建产品后，您会获取[**ProductKey**](/introduction/page-03.md)和[**ProductSecret**](/introduction/page-03.md)。您可以在硬件中烧录ProductKey和ProductSecret,当设备与平台连接时，设备会自动添加进产品中；

2、设备侧

终端设备在接入开发者中心之前，您需要进行设备开发，即在设备侧完成由开发者中心提供的基础通信套件SDK（集成QuecThing功能）的移植工作。当前集成SDK的模组请参考<a :href="getUrl('menuCode=MODULE_DEVL&resourceType=M')" target="_blank">**这里**</a>。需要更多的模组请点击[**这里** ](https://yiyuanznsb.tmall.com/shop/view_shop.htm)。

3、设备接入开发者中心

使用移植SDK后的设备，选择通过AT命令/QuecOpen/QuecPython三种方式中的其中一种即可接入开发者中心。

4、SaaS应用接入

设备接入开发者中心后，设备数据可以直接上报到开发者中心。SaaS应用与开发者中心之间可通过AMQP功能实现设备数据同步，可通过API实现指令下发，实现设备远程管理。

5、App应用接入

设备接入开发者中心后，在手机端可通过WebSocket与设备进行实时状态获取和指令下发，也可通过API获取设备最后上报的指令，实现设备远程控制。


  