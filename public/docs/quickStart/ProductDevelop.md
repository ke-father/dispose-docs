# 产品开发

## **案例简介**

本文以RGB灯为例，带您快速体验平台的基本功能：设备到平台注册，设备上报数据到平台，平台下发命令给设备这三个基本场景。

<a data-fancybox title="img" href="/quickStart/image2022-3-22_14-24-1.png">![img](/quickStart/image2022-3-22_14-24-1.png)</a>

## **前置条件**

1.已注册平台帐号。未注册可查看[“平台注册”](/quickStart/register.md)完成注册。<br />
2.RGB灯设备已移植带有QuecThing功能的SDK。

## **创建产品**

使用已注册的账号登录开发者中心，首先创建一个项目，名称为 “三彩灯演示项目”。

<a data-fancybox title="img" href="/quickStart/image2022-3-10_11-43-26.png">![img](/quickStart/image2022-3-10_11-43-26.png)</a>

<a data-fancybox title="img" href="/quickStart/image2022-7-12-1.png">![img](/quickStart/image2022-7-12-1.png)</a>

<a data-fancybox title="img" href="/quickStart/image2022-3-10_11-43-56.png">![img](/quickStart/image2022-3-10_11-43-56.png)</a>

点击进入“三彩灯演示项目”，创建一个RGB灯的产品，依次选择以下信息：

● 产品品类：根据实际开发产品类别，选择产品品类，本案例选择灯光设备<br />
● 设备类型：平台支持单品设备与网关子设备方案，本案例选择单品设备<br />
<span  v-if="isEu">
● 连网方式：平台目前支持2G/3G/4G/5G、WiFi、BLE方式接入，本案例选择WiFi<br />
</span>
<span  v-else>
● 连网方式：平台目前支持2G/3G/4G/5G、WiFi、NB-IoT、BLE方式接入，本案例选择WiFi<br />
</span>

  
● 数据格式：平台支持物模型与透传协议两种数据格式，我们推荐使用物模型数据格式，可大大节约开发周期。

完成以上内容选择后，输入产品名称完成产品创建。点击”设备开发“进入功能定义页面。

<a data-fancybox title="img" href="/quickStart/image2022-3-10_11-44-37.png">![img](/quickStart/image2022-3-10_11-44-37.png)</a>

<a data-fancybox title="img" href="/quickStart/image2022-3-10_11-47-49.png">![img](/quickStart/image2022-3-10_11-47-49.png)</a>

<a data-fancybox title="img" href="/quickStart/image2022-3-10_11-48-18.png">![img](/quickStart/image2022-3-10_11-48-18.png)</a>



## **功能定义**

在“功能定义”页面中，用户可对RGB灯产品进行功能定义。

例如：

● 开关灯定义为Bool型，False为关灯，True为开灯。<br />
● 颜色色值分别定义为R、G、B三个INT型，范围0~255，组合成彩灯颜色。<br />
● 灯光亮度定义为INT型，范围0~100，控制灯光亮度大小。<br />
● 延时关灯定义为INT型，范围0 ~ 86400，用于设置倒计时。

<a data-fancybox title="img" href="/quickStart/image2022-3-10_13-25-9.png">![img](/quickStart/image2022-3-10_13-25-9.png)</a>

## **设备开发**

您可以根据实际情况选择不同的开发方式，在页面选择后查看对应的开发指引。

<a data-fancybox title="img" href="/quickStart/image2022-3-10_13-48-37.png">![img](/quickStart/image2022-3-10_13-48-37.png)</a>

目前可以通过以下三种方式把设备接入开发者中心，详细开发文档见下方。


● [基于QuecOpen方案开发。](/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-01.md)<br />
● [基于QuecPython方案开发。](/deviceDevelop/cellular/speediness/QuecPython/speediness-quecpython-01.md)<br />
● [基于AT指令方案开发。](/deviceDevelop/cellular/speediness/AT/speediness-at-01.md)


## **设备调试**

设备接入移远管理平台后，您可通过设备调试功能进行上下行业务指令测试。

**<a data-fancybox title="img" href="/quickStart/image2022-3-10_13-50-38.png">![img](/quickStart/image2022-3-10_13-50-38.png)</a>**

在设备调试页面中对具体参数设置期望值后，点击”发送指令“下发控制命令到设备。

通过设备调试功能您可确保设备的上报数据功能、接收控制命令设备响应是否正确，完成硬件产品开发工作。

**<a data-fancybox title="img" href="/quickStart/image2022-3-10_13-50-59.png">![img](/quickStart/image2022-3-10_13-50-59.png)</a>**
