# 产品管理
本文介绍产品开发中准备工作，产品的创建及维护。产品是设备的集合，通常是将具有相同功能定义（物模型）的设备归属到一个产品下。开发者中心为每个产品颁发全局唯一的**ProductKey**。该产品下所有设备将会烧录同一个ProductKey进行设备连云的认证与通信。

## **前提条件**
● 已创建项目

## **操作步骤**
1.登录开发者中心，点击上一步创建的项目面板，进入产品管理页面。
<a data-fancybox title="img" href="/guide/image2022-3-29-1.png?version=1&modificationDate=1646119616000&api=v2">![img](/guide/image2022-3-29-1.png?version=1&modificationDate=1646119616000&api=v2)</a>
2.点击“创建产品”按钮，弹出产品创建弹框。

**产品品类**：针对设备的使用场景进行的一个划分。

在产品品类下可以根据自身开发需求选择自定义开发或者行业解决方案进行选择。

3.选择品类后，继续选择当前产品的设备类型：单品设备、网关与子设备

您可以根据自身设备类型进行选择，下图给出不同设备类型关联关系图，以供参考。

<ALink imgurl="/guide/image2022-3-29-4.png?version=1&modificationDate=1646384329000&api=v2" imgenurl="/guide/image2022-3-29-4_en.png?version=1&modificationDate=1646384329000&api=v2" />

<span v-if="isEu">

| 参数         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| 产品品类     | 针对设备的使用场景进行的一个划分，相当于产品模板。<br /> ● 自定义开发：用户可按硬件产品实际功能进行物模型功能定义。<br /> ● 行业解决方案：表示移远目前已支持该品类的行业解决方案，可直接使用行业SaaS后台与App应用，无需重新开发。<br /> ● 已定义标准物模型：表示该品类已在开发者中心中拥有完整的物模型定义模板。<br /> ● 移联万物App定制品类：表示该品类在移远通用App中有定制的品类控制页面。 |
| 设备类型     | 产品下设备的类型。<br /> ● 单品设备：指集成了通信模组，可直接连接开发者中心的硬件设备。<br /> ● 网关设备：指集成了通信模组，且可以通过485、Zigbee、RS232等不同协议挂载子设备，为子设备进行代理上网，实现子设备连接开发者中心。网关具有子设备管理功能，可以维持与子设备的拓扑关系。<br /> ● 网关子设备：不直接连接物联网平台，而是通过网关代理入网的方式，接入到开发者中心。 |
| 连网方式     | 单品设备与网关设备的连网方式。<br /> ● 单品设备连网方式：2G/3G/4G/5G、WiFi、蓝牙<br /> ● 网关设备连网方式：2G/3G/4G/5G、WiFi |
| 数据格式     | 设备上下行的数据格式。<br /> ● 物模型（推荐）：是开发者中心为开发者提供的设备与云端的数据交换协议，采用JSON格式。<br /> ● 透传/自定义：如果您希望使用自定义的串口数据格式，可以选择为透传/自定义。 |
| 限制网关产品 | 当选择设备类型为子设备时，需要选择关联网关产品的限制。<br /> ● 不启用：表示子设备可通过任意网关设备连接云端；<br /> ● 启用：表示子设备仅能通过指定的网关设备连接云端。 |
| 接入网关方式 | 当选择设备类型为子设备时，需要选择关联网关方式。<br /> ● 仅代理上网：子设备把网关当成上网与数据转发通道，子设备以单品设备方式进行管理；<br /> ●  产品整合：子设备被整合到网关设备中，可通过网关设备查询与控制子设备。 |
| 产品名称     | 为产品命名。产品名称在账号内具有唯一性。      |

</span>        
<span v-else>

| 参数         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| 产品品类     | 针对设备的使用场景进行的一个划分，相当于产品模板。<br /> ● 自定义开发：用户可按硬件产品实际功能进行物模型功能定义。<br /> ● 行业解决方案：表示移远目前已支持该品类的行业解决方案，可直接使用行业SaaS后台与App应用，无需重新开发。<br /> ● 已定义标准物模型：表示该品类已在开发者中心中拥有完整的物模型定义模板。<br /> ● 移联万物App定制品类：表示该品类在移远通用App中有定制的品类控制页面。 |
| 设备类型     | 产品下设备的类型。<br /> ● 单品设备：指集成了通信模组，可直接连接开发者中心的硬件设备。<br /> ● 网关设备：指集成了通信模组，且可以通过485、Zigbee、RS232等不同协议挂载子设备，为子设备进行代理上网，实现子设备连接开发者中心。网关具有子设备管理功能，可以维持与子设备的拓扑关系。<br /> ● 网关子设备：不直接连接物联网平台，而是通过网关代理入网的方式，接入到开发者中心。 |
| 连网方式     | 单品设备与网关设备的连网方式。<br /> ● 单品设备连网方式：2G/3G/4G/5G、WiFi、NB-IoT、蓝牙<br /> ● 网关设备连网方式：2G/3G/4G/5G、WiFi |
| 数据格式     | 设备上下行的数据格式。<br /> ● 物模型（推荐）：是开发者中心为开发者提供的设备与云端的数据交换协议，采用JSON格式。<br /> ● 透传/自定义：如果您希望使用自定义的串口数据格式，可以选择为透传/自定义。 |
| 接入平台     | 当连网方式选择NB-IoT时，需要选择接入平台。<br /> ● 移远云平台：设备使用移远自身提供的NB Broker接入开发者中心。<br /> ● 电信云平台：设备通过电信云平台接入开发者中心，电信云与移远云建立了云云对接的桥梁。 |
| 数据加密方式 | 当接入平台选择电信云时，需要选择数据的加密方式。<br /> ● DTLS：数据包传输层安全性协议。<br /> ● 明文：不使用任何加密方式。 |
| 省电模式     | 当接入平台选择电信云时，需要选择省电模式。<br /> ● PSM模式：设备在数据连接终止或周期性TAU完成后进入PSM状态，PSM态的设备处于休眠状态，不再侦听信号，平台的下行数据不会立即下发，缓存直到设备退出PSM态才会下发。<br /> ● DRX模式：非连续接收模式，由于DRX周期短，平台下行数据可以立即下发（如果设备在注册时Binding Mode支持Qmode，则按Qmode方式下发指令，即采用空闲时间窗进行激活态到休眠态的切换）。<br /> ● eDRX模式：增强型非连续接受，DRX周期要长，对时延要求高，需要根据设备是否休眠选择消息缓存或者立即下发。创建eDRX模式的产品，需要输入设备实际的eDRX周期，用于下发指令的超时时间判断。 |
| 限制网关产品 | 当选择设备类型为子设备时，需要选择关联网关产品的限制。<br /> ● 不启用：表示子设备可通过任意网关设备连接云端；<br /> ● 启用：表示子设备仅能通过指定的网关设备连接云端。 |
| 接入网关方式 | 当选择设备类型为子设备时，需要选择关联网关方式。<br /> ● 仅代理上网：子设备把网关当成上网与数据转发通道，子设备以单品设备方式进行管理；<br /> ●  产品整合：子设备被整合到网关设备中，可通过网关设备查询与控制子设备。 |
| 产品名称     | 为产品命名。产品名称在账号内具有唯一性。      |

</span>   

      

4.配置好您的产品后，需要给该产品输入一个合适的名称

5.点击“确认创建”，产品创建成功！

6.点击选择“留在当前”，会展示当前项目下所有产品列表，第一个永远是您最后创建的一个产品。产品面板会展示一些当前产品的信息，包括：产品名称、开发状态、产品品类、产品logo图片、创建时间以及系统为该产品自动生成的ProductKey。

7.下面介绍产品编辑功能。点击产品列表中产品面板，进入产品开发流程。

在整个产品开发流程过程中，整个右侧栏为产品基本信息栏，可以针对产品名称，logo图片进行重新修改，同样您也可以对该产品的用户绑定权限进行修改。所谓用户绑定权限，指的是终端用户绑定设备的限制，分为三种模式<br />
● 多用户绑定模式：一台设备允许多用户同时绑定。<br />
● 轮流绑定模式：一台设备只允许一人同时绑定，后绑者挤掉前绑者。<br />
● 拥有者绑定模式：一台设备只允许一人同时绑定，后绑者绑定失败。

>备注：当一台设备同时被两个用户绑定时，多用户绑定将不允许修改为其他绑定模式。蓝牙产品只能选择拥有者绑定模式或者轮流绑定模式。

针对终端用户的分享权限可以通过设备分享开关进行控制，一旦开启则允许该产品下设备进行分享。（关闭后不影响已分享的用户与设备，但不能进行新的分享。）

整个产品信息栏最下方面板则显示了当前产品下所拥有的设备总数，已激活的设备数和当前在线设备数的一个统计信息。点击购买激活码会跳转至文档中心引导您如何增加该产品下激活码。

