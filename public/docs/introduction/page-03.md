# 名词解释

本章介绍开发者中心中相关的名词解释



[//]: # (<table class="relative-table wrapped confluenceTable tablesorter tablesorter-default stickyTableHeaders" style="width: 100%; padding: 0px;" role="grid" resolved=""><colgroup><col style="width: 9.72322%;"><col style="width: 90.216%;"></colgroup><thead class="tableFloatingHeaderOriginal"><tr role="row" class="tablesorter-headerRow"><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="名词: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">名词</div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="描述: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">描述</div></th></tr></thead><thead class="tableFloatingHeader" style="display: none;"><tr role="row" class="tablesorter-headerRow"><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="名词: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">名词</div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="描述: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner">描述</div></th></tr></thead><tbody aria-live="polite" aria-relevant="all"><tr role="row"><td colspan="1" class="confluenceTd">Developer Center</td><td colspan="1" class="confluenceTd">Developer Center，开发者中心。</td></tr><tr role="row"><td class="confluenceTd"><span style="color: rgb&#40;255,153,0&#41;;">项目</span></td><td class="confluenceTd">产品的集合，通常是具备完整的一套方案的产品的集合。 示例：如客户是xxx厂商， 他在全国有多个项目的需求，那么他会在开发者中心中按照不同项目需求去创建各个项目，用于管理不同项目下各个产品。</td></tr><tr role="row"><td class="confluenceTd">产品</td><td class="confluenceTd">设备的集合，通常是将具有相同功能定义（物模型）的设备归属到一个产品下。开发者中心为每个产品颁发全局唯一的<strong>ProductKey</strong>。该产品下所有设备将会烧录同一个ProductKey进行设备连云的认证与通信。</td></tr><tr role="row"><td class="confluenceTd">设备</td><td class="confluenceTd">归属于某个产品下的具体设备。设备使用DeviceKey以及所属产品ProductKey连接开发者中心。</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;255,0,0&#41;;">设备激活码</span></td><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;23,43,77&#41;;">设备接入开发者中心后若累计上下行消息达到指定阈值，会消耗一个设备激活码。</span></td></tr><tr role="row"><td class="confluenceTd">设备证书</td><td class="confluenceTd"><p>设备证书指ProductKey、DeviceKey、DeviceSecret的组合，用于设备认证以及建立连接。<span>&nbsp;</span></p><p><strong>ProductKey</strong>：开发者中心为产品颁发的全局唯一标识。该参数很重要，在设备认证以及通信中都会用到，因此需要您保管好。</p><p><strong>ProductSecret</strong>：由开发者中心颁发的产品密钥，与ProductKey成对出现，用于一型一密的认证方案。该参数很重要，需要您保管好。</p><p><strong>DeviceKey</strong>：在注册设备时，自定义的或系统生成的设备标识，一般使用模组IMEI或MAC地址作为DeviceKey，具备产品维度内的唯一性。<span>&nbsp;</span></p><p><strong>DeviceSecret</strong>：在设备使用ProductKey、ProductSecret、DeviceKey进行平台认证通过后，开发者中心会为该设备下发设备密钥即DeviceSecret。设备使用DeviceSecret进行连云通信。</p></td></tr><tr role="row"><td class="confluenceTd">一型一密</td><td class="confluenceTd">同一产品下所有设备可以烧录相同的ProductKey和ProductSecret。设备发送认证请求时，开发者中心对其携带的ProductKey和ProductSecret进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与开发者中心建立连接。</td></tr><tr role="row"><td class="confluenceTd"><span style="color: rgb&#40;255,153,0&#41;;">Access Key/Access Secret</span></td><td class="confluenceTd">开发者中心对第三方开发者提供Open API以及AMQP消息订阅，当您需要使用这些功能时，需要在平台开通所需功能后，创建一个AccessKey/AccessSecret 作为使用这些功能的鉴权令牌。</td></tr><tr role="row"><td class="confluenceTd">消息订阅</td><td class="confluenceTd">消息订阅是开发者中心基于AMQP标准协议实现的数据订阅功能。</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;255,0,0&#41;;">OTA</span></td><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;51,51,51&#41;;">Over-the-Air，空中升级技术，开发者中心支持对设备模组固件、MCU程序进行空中升级。</span></td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;255,0,0&#41;;">物模型</span></td><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;51,51,51&#41;;">设备在云端的功能描述，包括设备的属性、服务和事件。开发者中心通过定义一种物的描述语言来描述物模型，称之为TSL（即 Thing Specification Language），采用JSON格式，您可以根据TSL组装上报、下发设备的数据。</span></td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;255,0,0&#41;;">App</span></td><td colspan="1" class="confluenceTd">通常指手机端应用，提供给终端用户进行账号注册、设备绑定、设备远程管理等功能。</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;255,0,0&#41;;">终端用户</span></td><td colspan="1" class="confluenceTd">指使用手机App的终端消费者。</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span style="color: rgb&#40;255,0,0&#41;;">用户域</span></td><td colspan="1" class="confluenceTd"><p><span style="color: rgb&#40;0,0,0&#41;;">用于对终端用户进行分组，不同App用户归属于不同的用户域下，厂商可通过用户域限制App可管理的产品类型范围。</span></p></td></tr></tbody></table>)
<table class="relative-table wrapped confluenceTable tablesorter tablesorter-default stickyTableHeaders" style="width: 100%; padding: 0px;" role="grid" resolved="">
    <colgroup>
        <col style="width: 9.72322%;">
        <col style="width: 90.216%;">
    </colgroup>
    <thead class="tableFloatingHeaderOriginal">
        <tr role="row" class="tablesorter-headerRow">
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="名词: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">名词</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="描述: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">描述</div>
            </th>
        </tr>
    </thead>
    <thead class="tableFloatingHeader" style="display: none;">
        <tr role="row" class="tablesorter-headerRow">
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="名词: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">名词</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="描述: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">描述</div>
            </th>
        </tr>
    </thead>
    <tbody aria-live="polite" aria-relevant="all">
        <tr role="row">
            <td colspan="1" class="confluenceTd">Developer Center</td>
            <td colspan="1" class="confluenceTd">Developer Center，开发者中心。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">项目</td>
            <td class="confluenceTd">产品的集合，通常是具备完整的一套方案的产品的集合。 示例：如客户是xxx厂商， 他在全国有多个项目的需求，那么他会在开发者中心中按照不同项目需求去创建各个项目，用于管理不同项目下各个产品。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">产品</td>
            <td class="confluenceTd">设备的集合，通常是将具有相同功能定义（物模型）的设备归属到一个产品下。开发者中心为每个产品颁发全局唯一的<strong>ProductKey</strong>。该产品下所有设备将会烧录同一个ProductKey进行设备连云的认证与通信。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">设备</td>
            <td class="confluenceTd">归属于某个产品下的具体设备。设备使用DeviceKey以及所属产品ProductKey连接开发者中心。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">设备激活码</td>
            <td colspan="1" class="confluenceTd">设备接入开发者中心后若累计上下行消息达到指定阈值，会消耗一个设备激活码。若是蓝牙设备，在App端首次绑定后同样消耗一个激活码。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">设备证书</td>
            <td class="confluenceTd">
                设备证书指ProductKey、DeviceKey、DeviceSecret的组合，用于设备认证以及建立连接。<span>&nbsp;</span>
                <li>ProductKey：开发者中心为产品颁发的全局唯一标识。该参数很重要，在设备认证以及通信中都会用到，因此需要您保管好。</li>
                <li>ProductSecret：由开发者中心颁发的产品密钥，与ProductKey成对出现，用于一型一密的认证方案。该参数很重要，需要您保管好。</li>
                <li>DeviceKey：在注册设备时，自定义的或系统生成的设备标识，一般使用模组IMEI或MAC地址作为DeviceKey，具备产品维度内的唯一性。</li>
                <li>DeviceSecret：在设备使用ProductKey、ProductSecret、DeviceKey进行平台认证通过后，开发者中心会为该设备下发设备密钥即DeviceSecret。设备使用DeviceSecret进行连云通信。</li>
            </td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">一型一密</td>
            <td class="confluenceTd">同一产品下所有设备可以烧录相同的ProductKey和ProductSecret。设备发送认证请求时，开发者中心对其携带的ProductKey和ProductSecret进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与开发者中心建立连接。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">Access Key/Access Secret</td>
            <td class="confluenceTd">开发者中心对第三方开发者提供Open API以及AMQP消息订阅，当您需要使用这些功能时，需要在平台开通所需功能后，创建一个AccessKey/AccessSecret 作为使用这些功能的鉴权令牌。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">消息订阅</td>
            <td class="confluenceTd">消息订阅是开发者中心基于AMQP标准协议实现的数据订阅功能。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">OTA</td>
            <td colspan="1" class="confluenceTd">Over-the-Air，空中升级技术，开发者中心支持对设备模组固件、MCU程序进行空中升级。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">物模型</td>
            <td colspan="1" class="confluenceTd">设备在云端的功能描述，包括设备的属性、服务和事件。开发者中心通过定义一种物的描述语言来描述物模型，称之为TSL（即 Thing Specification Language），采用JSON格式，您可以根据TSL组装上报、下发设备的数据。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">App</td>
            <td colspan="1" class="confluenceTd">通常指手机端应用，提供给终端用户进行账号注册、设备绑定、设备远程管理等功能。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">终端用户</td>
            <td colspan="1" class="confluenceTd">指使用手机App的终端消费者。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">用户域</td>
            <td colspan="1" class="confluenceTd">
                用于对终端用户进行分组，不同App用户归属于不同的用户域下，厂商可通过用户域限制App可管理的产品类型范围。
            </td>
        </tr>
    </tbody>
</table>