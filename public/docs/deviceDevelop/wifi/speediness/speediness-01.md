# 创建产品

## __场景说明__
香薰生活已经慢慢成为了一种潮流，外形典雅时尚的香薰机除了是精油的好伴侣以外，还可以充当摆设品。星级酒店，连锁餐饮业，甚至高级服装品牌店，美发沙龙也开始了运用香味营销。我们基于 __具有QuecThing功能的移远模组__、 __开发者中心__ ，设备端到云端构建一款智能 __香薰机__ 解决方案样例，带您体验快速上云。无论人在何处，都可以通过 __开发者中心__ 进行实时批量查询香薰机剩余精油容量、切换运行模式等功能。   本文介绍如何在 __开发者中心__ 创建产品。


开发者中心是移远提供的 IoT 一站式开发平台，下面将从登录平台到新建产品等三个环节来演示开发者中心的操作步骤。
## __一、登录开发者中心__
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。


## __二、创建项目__
创建名为 __“移远国际酒店”__ 项目，用于演示酒店行业项目管理。

<a data-fancybox title="img" href="/deviceDevelop/platform/platform-01.png">![img](/deviceDevelop/platform/platform-01.png)</a>

## __三、创建产品__
创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。在创建产品时，需要选择数据协议，其中包含 __物模型__ 与 __透传/自定义__ 两种数据格式，以下分别创建两种数据格式产品作为示例，用户可根据实际业务场景选择其一。

* __物模型概述__

	__物模型__ 是指设备在开发者中心的数字化表示，并在云端构建的实体数据模型。开发者中心定义的标准数据格式为 __物模型__ ，是平台与设备间通讯的数据格式。物模型分为 __属性__ 、__服务__ 、__事件__ 三个维度。定义了物模型在发布以后，即完成了物模型产品的定义，平台对数据进行解析检验和处理。

* __透传/自定义概述__ 

	__透传__ 即透明传输，指的是在通讯中不管传输的业务内容如何，只负责设备与云端的数据传输交互，而不对业务数据内容做任何改变，开发者中心也不会对其业务数据进行解析。在硬件设备中，或许会存在一些 __硬件配置低__ 或自身 __无法构建物模型__ 与开发者中心进行通讯的设备。针对这类设备，您可以选择 __透传/自定义__ 将原始数据透传至平台。

<font color=#999AAA >提示：ProductKey(以下简称为"PK")、ProductSecret(以下简称为"PS")码需用户保存好，设备的认证与产品删除等将会需要使用到该PK、PS码。</font>

### __a.创建物模型数据产品__
项目创建完成后，进入该项目并点击 __创建产品__ 来创建一个新的产品，产品名称为 __“智能香氛机”__ 。本次数据格式采用 __物模型__ 方式为例来演示，如下图所示。



<font color=#999AAA >提示：创建产品时，未勾选自动添加标准物模型且数据格式为物模型的，可以在产品创建完成后手动添加标准功能。</font>

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/platform/platform-02.png">![img](/deviceDevelop/wifi/speediness/resource/platform/platform-02.png)</a>

### __b.创建透传数据产品__

项目创建完成后，进入该项目并点击 __创建产品__ 来创建一个新的产品，产品名称为 __“智能香氛机”__ 。本次数据格式采用 __透传/自定义__ 方式为例来演示，如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/platform/platform-03.png">![img](/deviceDevelop/wifi/speediness/resource/platform/platform-03.png)</a>

<font color=#999AAA >提示：当您选择了数据格式为 “透传/自定义” 且选择产品品类的标准物模型时，功能定义并不起作用。</font>

 
 ## __四、移联万物App授权使用（可选）__

<font color=#999AAA >提示：若使用移联万物移联万物App则在需在创建产品时选择物模型数据格式。</font>

1、在开发者中心进入 产品管理 ，在右下角打开授权使用按钮。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/platform/platform-15.png">![img](/deviceDevelop/wifi/speediness/resource/platform/platform-15.png)</a>

