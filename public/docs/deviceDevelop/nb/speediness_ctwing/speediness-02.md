# 平台侧操作指引

__开发者中心__ 简化了与 __中国电信AEP平台__ 之间的复杂操作，并屏蔽了各种复杂的设备接口。对接 __中国电信AEP平台__ 几乎是 __零感知__，在开发者中心创建产品时选择”接入平台“为**电信AEP**，后续在开发者中心上该产品下添加或导入的设备会自动同步并添加至 __中国电信AEP平台__，创建产品、删除产品、删除设备等操作亦会同步至 __中国电信AEP平台__。因此无需过多关注 __中国电信AEP平台__ 内容，只需在开发者中心完成以下操作即可进行开发者中心与设备之间的数据交互。



## **一、登录平台**

登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>。若当前未注册开发者中心，可单击<a :href="toDevelopCenter('registerType')" target="_blank">平台注册</a>根据向导完成注册。



## **二、创建项目**
创建名为 __“移远智慧产业园区”__ 项目，用于演示智能门磁项目管理。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-2.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-2.png"></a>


## **三、创建产品**
<font color=#999AAA >提示：产品创建成功后，开发者中心将生成唯一的PK、PS。需妥善保存PK和PS，连接设备至开发者中心以及删除产品时均需提供该PK、PS。</font>

在创建产品窗口，“连网方式”选择**NB-IoT**即可看到“接入平台”选项，选择**电信AEP**，则该产品下的设备为已接入**中国电信AEP平台**的设备。保存产品信息时，将同步在**中国电信AEP平台**创建相同的产品。



__物模型概述__

物模型（TSL）指设备在开发者中心的数字化表示，并在开发者中心构建的实体数据模型。开发者中心定义的标准数据格式为 __物模型__ ，是开发者中心与设备间通讯的数据格式。物模型分为 __属性__ 、__服务__ 、__事件__ 三个维度。定义物模型并发布，即完成了物模型产品的定义，开发者中心对数据进行解析检验和处理。

点击 __产品管理__ 中的 __创建产品__ 创建一个新的产品，产品名称为 __“智能门磁”__ 。本次数据格式采用 __物模型__ 方式为例来演示，如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-3.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-3.png"></a>


* __产品名称__：产品所具有的功能命名。
* __产品品类__：开发者中心已为各大行业品类预定义了标准功能，创建产品时若选择标准品类，则可选择添加标准功能。点击**查看功能**，可在弹出的列表框中查看该产品的标准功能。 <font color=#999AAA >提示：若功能定义不同，仍可进入草稿模式进行修改。</font>
* __设备类型__：**单品设备**指可直接接入网络并访问开发者中心的设备；**网关设备**与**网关子设备**指通过 Wi-Fi 连网的方式访问开发者中心的设备。本文档所述NB-IoT模块为单品设备。
* __连网方式__：选择设备功能对应的连网方式。
* __接入平台__：根据设备插入的物联网卡所属运营商选择。若为中国电信，选择**电信AEP**，若为中国移动或中国联通，选择**移远云**。
* __数据格式__：开发者中心支持物模型与透传/自定义两种数据格式，可根据实际的实际业务场景选择其一。
* __连接协议__：目前NB-IoT模块只支持LwM2M协议。
* __数据加密方式__：中国电信AEP平台支持DTLS加密模式与明文，**明文** 表示不加密。
* __省电模式__：NB-IoT模块支持PSM、DRX、eDRX三种。根据模块实际支持的类型与项目需求进行选择。
* __eDRX周期__：若“省电模式”选择 eDRX，页面显示eDRX周期输入框，范围：20～10485.76秒。
		

__名词解析__	

| 名词 | 解析     |
|:--------:| :-------------|
| DTLS |　DTLS(Datagram TransportLayer Security)即数据包传输层安全性协议，是基于TLS协议架构上提出的扩展，用于保证UDP连接的传输安全。 |
| PSM |设备在数据连接终止或周期性TAU完成后进入PSM状态，PSM态的设备处于休眠状态，不再侦听信号。开发者中心的下行数据不会立即下发，会被缓存，直到设备退出PSM态后下发。 |
| DRX |非连续接收模式，由于DRX周期短，平台下行数据可以立即下发(如果设备在注册时Binding Mode支持Qmode,则按Qmode方式下发指令，即采用空闲时间窗进行激活态到休眠态的切换)。 |
| eDRX |增强型非连续接收，相比DRX周期更长，对时延要求高，需要根据设备是否休眠选择消息缓存或者立即下发。创建eDRX模式的产品，需要输入设备实际的eDRX周期，用于下发指令的超时时间判断。 |



## **功能定义**
进入产品开发环节，物模型数据格式产品开发第一步即定义物模型模板，功能定义分为 __标准功能__ 与 __自定义功能__。


* 标准功能即开发者中心已经对该品类进行过物模型定义。
* 自定义功能即可以根据当前产品特定使用场景进行的个性化功能定义，它不与产品品类相关，只在当前产品下产生作用。

<font color=#999AAA >提示：功能定义需创建产品时选择物模型数据格式，透传数据格式产品无需进行功能定义开发。</font>


__产品开发__ >__"移远国际酒店"__ > __“智能香薰机”__ 单击 __功能定义__ 页签，最后单击 __编辑草稿__ > __添加自定义功能__


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-4.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-4.png"></a>


## **添加设备**
<font color=#999AAA >提示：针对接入中国电信AEP平台的产品，需要手动添加设备。</font>

__1.__ 选择 __设备管理__ 页签，单击 __添加设备__ 按钮。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-5.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-5.png"></a>




__2.__ 编辑设备


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-6.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-6.png"></a>

* __DeviceKey__：模块的IMEI号。
 <font color=#999AAA >提示：IMEI号可通过模块丝印获取或发送 __AT+QIOTINFO?__ 查询。</font>
* __设备名称__：产品中设备所具有的设备名称，例如“智能门磁一号”。
* __PSK__：预共享密钥，相当于密码，必须唯一。若不填写, 则会根据DeviceKey自动生成。 <font color=#999AAA >提示：若数据加密方式为**明文**则无 PSK输入框。</font>
* __设备SN__：产品序列号。产品序列是为了验证“产品的合法身份”而引入的一个概念。

__3.__ 在开发者中心上新添加的设备状态变为 __激活__，代表设备已成功添加至中国电信AEP平台。


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-7.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-7.png"></a>


 