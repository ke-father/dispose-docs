# SDK说明

## __一、QuecThing SDK简介__
移远通信QuecThing SDK对模块适配层提供统一API接口定义，在芯片基础 SDK 上进行了二次抽象，屏蔽了复杂的模组技术细节，方便您快速入门。开发者只需根据模块能力实现具体业务功能。完成编译烧录后，即可在模块上运行QuecThing SDK并实现开发者中心接入，完成设备智能化。同时为加快开发效率，QuecThing SDK内置并提供了统一的通信协议和API接口供模块APP层调用，开发者无需过多关注模块型号即可直接使用并开发具体业务功能。


## __二、功能逻辑结构图__

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-04.png">![img](/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-04.png)</a>

## __三、部分主要API介绍__

QuecOpen是开源的基于Linux的嵌入式开发平台，可简化IoT应用的软件设计和开发过程并提供简易方便的API接口，帮助开发者快速开发应用，满足场景业务需求。


* 产品配置 部分相关接口

	|函数名称|说明|
	| :-------------:| :-------------|
	| Ql_iotInit() |初始化 QuecThing各种信息，例如服务器IP、lifetime等|
	| Ql_iotConfigSetEventCB() |该函数用于注册事件回调函数，后续 QuecThing 运行过程中产生的事件均通过该回调函数进行通知|
	| Ql_iotConfigSetProductinfo() |配置产品PK/PS信息|
	| Ql_iotConfigSetConnmode() |配置设备连接至平台的连接模式 |

	<font color=#999AAA >提示：详情请参考[产品配置 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-02.md)。</font>


* TTLV数据 部分相关接口 
* 
    <font color=#999AAA >注释:XXX为数据类型，如bool、int类型等</font>

	|函数名称|说明|
	| :-------------:| :-------------|
	| Ql_iotTtlvCountGet() |该函数用于获取数据表的节点数量|
	| Ql_iotTtlvNodeGet() |该函数用于从数据表中提取数据节点|
	| Ql_iotTtlvFree() |该函数用于创建 TTLV 数据表或添加 TTLV 节点，在处理完成后，释放数据表资源|
	| Ql_iotTtlvIdAddXXX() |该函数用于添加节点数据-XXX 类型，例如Ql_iotTtlvIdAddBool()|
	| Ql_iotTtlvIdGetXXX() |该函数用于获取指定 ID 节点数据-XXX类型|
	| Ql_iotTtlvNodeGetXXX() |该函数用于获取节点数据-XXX类型|

	<font color=#999AAA >提示：详情请参考[TTLV数据 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-04.md)。</font>


* 数据业务交互 部分相关接口

	|函数名称|说明|
	| :-------------:| :-------------|
	| Ql_iotCmdBusPhymodelReport() |该函数用于向云平台发送物模型数据|
	| Ql_iotCmdBusPhymodelAck() |该函数用于向云平台应答物模型数据，在接收到云平台读取物模型数据时进行应答|
	| Ql_iotCmdSysDevInfoReport() |该函数用于向云平台上报模块信息，如模块型号、SIM 卡号等|

	<font color=#999AAA >提示：详情请参考[数据业务交互 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-03.md)。</font>
