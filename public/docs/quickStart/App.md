# App应用开发

## **案例简介**

本文以RGB灯为例，带您快速体验App开发的基本流程：创建App，开发App，绑定设备，获取设备上行数据，控制设备这五个基本场景。

## **创建App**

开发App前需要先通过App开发→创建App功能获取一个用户域。

用户域用于标识App用户从属于哪个应用

<a data-fancybox title="img" href="/quickStart/image2022-3-10_14-22-4.png">![img](/quickStart/image2022-3-10_14-22-4.png)</a>

<a data-fancybox title="img" href="/quickStart/image2022-3-10_14-30-53.png">![img](/quickStart/image2022-3-10_14-30-53.png)</a>

创建完成后把RGB灯这款产品添加到该App下。

<a data-fancybox title="img" href="/quickStart/image2022-3-10_14-32-48.png">![img](/quickStart/image2022-3-10_14-32-48.png)</a>

## **开发App**

您可基于我们的App SDK或Open API快速开发App应用或小程序应用，详细请看[这里](/appDevelop/ready.md)。

控制设备的最小闭环为App用户注册、用户登录、绑定设备、控制设备。在次之外可叠加其他个性化业务功能。

## **App用户注册与登录**

移远云支持手机号+密码、手机号+短信验证码、邮箱等方式进行用户注册与登录。

界面示例：

<a data-fancybox title="img" href="/quickStart/image2022-3-2_14-7-45.png">
<img src="/quickStart/image2022-3-2_14-7-45.png" style="width: 40%" />
</a>
<a data-fancybox title="img" href="/quickStart/image2022-3-2_14-8-35.png">
<img src="/quickStart/image2022-3-2_14-8-35.png" style="width: 40%" /></a>

包含涉及的用户API如下：

| 接口名称               | 接口                          |
| :--------------------- | :---------------------------- |
| 手机号是否已注册       | /enduserapi/phoneIsRegister   |
| 发送手机短信注册验证码 | /enduserapi/sendPhoneSmsCode  |
| 手机号密码注册         | /enduserapi/phonePwdRegister  |
| 手机号密码登录         | /enduserapi/phonePwdLogin     |
| 手机号验证码登录       | /enduserapi/phoneSmsCodeLogin |

更多请求的用户系统API，请查看[这里](/appDevelop/OpenAPI.md)。

## **绑定设备**

### **蜂窝类设备**

用户登录后，可通过扫描设备二维码来绑定设备。

<a data-fancybox title="img" href="/quickStart/image2022-3-10_15-3-48.png">![img](/quickStart/image2022-3-10_15-3-48.png)</a>

界面示例：<br />
<a data-fancybox title="img" href="/quickStart/image2022-3-2_14-12-36.png">
<img src="/quickStart/image2022-3-2_14-12-36.png" style="width: 40%" />
</a>

包含涉及的用户API如下：

| 接口名称         | 接口                     |
| :--------------- | :----------------------- |
| 使用 SN 绑定设备 | /enduserapi/bindDeviceSn |

更多请求的用户系统API，请查看[这里](/appDevelop/OpenAPI.md)。

### **WiFi类设备**

用户登录后，可通过近场发现来绑定设备。

<a data-fancybox title="img" href="/quickStart/image2022-3-10_15-4-17.png">![img](/quickStart/image2022-3-10_15-4-17.png)</a>

界面示例：

**图片（发现设备、配网、绑定界面）**

<a data-fancybox title="img" href="/quickStart/image2022-3-16_19-51-15.png">
<img src="/quickStart/image2022-3-16_19-51-15.png" style="width: 24%" /></a>
<a data-fancybox title="img" href="/quickStart/image2022-3-16_19-51-25.png">
<img src="/quickStart/image2022-3-16_19-51-25.png" style="width: 24%" /></a>
<a data-fancybox title="img" href="/quickStart/image2022-3-16_19-51-33.png">
<img src="/quickStart/image2022-3-16_19-51-33.png" style="width: 24%" /></a>
<a data-fancybox title="img" href="/quickStart/image2022-3-16_19-51-41.png">
<img src="/quickStart/image2022-3-16_19-51-41.png" style="width: 24%" /></a>




包含涉及的用户API如下：

| 接口名称     | 接口                       |
| :----------- | :------------------------- |
| WiFi设备绑定 | /enduserapi/bindDeviceWifi |

更多请求的用户系统API，请查看[这里](/appDevelop/OpenAPI.md)。

## **通过WebSocket实时与在线设备通讯**

使用WebSocket API获取在线设备实时信息。

**WebSocket API接入流程：**

 创建连接 => 登录 => 订阅 => 设备消息交互

<a data-fancybox title="img" href="/quickStart/image2022-3-22_14-2-42.png">![img](/quickStart/image2022-3-22_14-2-42.png)</a>

**注意**：用户登录注册并且绑定设备后方可使用WebSocket API功能。

### **接收设备上行数据**

App可以通过WebSocket API接收设备上下线信息、设备和模组状态信息、设备上行信息以及物模型上报的属性和事件等信息。

**WebSocket API支持订阅的设备消息类型：**

● 设备上下线信息<br />
● 设备和模组状态信息<br />
● 透传产品--设备上行信息<br />
● 物模型产品--设备上报属性信息<br />
● 物模型产品--设备事件信息<br />
● 物模型产品--设备事件告警<br />
● 物模型产品--设备事件故障<br />
● 设备定位信息上报

WebSocket API接入具体信息可参考[WebSocket接入指导](/appDevelop/websocket/guide.md)。

### **下发控制设备指令**

**WebSocket API 支持的命令类型：**

● 物模型属性-读<br />
● 物模型属性-写<br />
● 调用物模型服务<br />
● 透传命令

WebSocket API下发指令具体信息可参考[WebSocket接入指导](/appDevelop/websocket/guide.md)。

示例界面：

<a data-fancybox title="img" href="/quickStart/image2022-3-2_14-44-11.png">
<img src="/quickStart/image2022-3-2_14-44-11.png" style="width: 40%" />
</a>

## **通过OpenAPI与设备通讯**

对实时性要求不高的情况下可通过OpenAPI完成与设备的数据交互。

### **获取设备最后上行数据**

App可通过以下API获取设备在平台中记录的最新数据。

| 接口名称         | 接口                                 |
| :--------------- | :----------------------------------- |
| 查询设备业务属性 | /enduserapi/deviceBusinessAttributes |

### **App应用设备控制**

通过HTTP接口进行控制。通常使用在不建立Webscoket通道的情况下，单纯的向设备下发指令。

| 接口名称     | 接口                           |
| :----------- | :----------------------------- |
| 批量控制设备 | /enduserapi/batchControlDevice |
