# 数据业务交互

<font color=#999AAA >提示：物模型数据业务的交互需要在创建产品时选择 __物模型__ 协议。</font>

## **数据业务交互**

 物模型是开发者中心 针对物理实体设备在云端建立的数据模型，主要用于描述产品的功能，从而方便数据的解析。可以在设备成功接入开发者中心后，通过 __AT+QIOTMODELTD__ 与 __AT+QIOTMODELRD__ 指令来实现与开发者中心的数据交互。


<font color=#999AAA >提示：详情请参考[数据交互相关命令](/deviceDevelop/nb/AT/API/nb-at-04.md)。</font>


## __一、物模型数据上行__

__物模型上行相关指令__

| AT指令 |     解析    |说明|
|:--------:|:-------------:|:-------------|
| AT+QIOTMODELTD=\<mode\>,\<length\>[,\<PkgID\>]| 发送物模型数据|\<mode\>发送模式；<br>\<length\>待发送数据长度；<br>[\<PkgID\>]请求包 ID，仅当设备需响应平台数据请求时需指定该参数|

__1、响应应答数据__ 

* __开发者中心读取操作__

	在开发者中心 __设备信息__ 详情页的 __设备调试__ 中，点击 __批量读取__ 按钮可一键批量读取物模型属性数值。
	
	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-12.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-12.png)</a>
		


* __设备侧响应操作__

	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-13.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-13.png)</a>

	__①__ 选择需要发送的请求包 ID。<br>
	__②__ 点击 __发送应答数据__ 按钮即可向平台响应物模型数据。

	<br>

   __事件回调响应解析__

    * __+QIOTEVT: 5,10211,4,1,3,2__<br>
		__5__ ：收到下行业务事件；<br>
		__10211__ ：收到云端读取物模型属性事件Code；<br>
		__4__ ：请求包 ID，该参数仅在模块接收物模型数据响应时有效；<br>
		__1,3,2__ ：需要读取物模型属性的ID号，分别是1、2、3；

	<br>

	__指令交互详情__

	```c
	AT+QIOTMODELTD=0,27,4
	>
	{"1":189.5,"2":30,"3":true}
	OK
	```
		


__2、物模型属性数据主动发送__

设备端主动发送 __精油剩余容量__ 、__频率开关__ 及 __电源开关状态__ 的物模型属性数据到云端。

* __设备侧发送操作__

	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-14.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-14.png)</a>
	
	__①、__ 选择需要发送的物模型。	<br>
	__②、__ 点击 __发送物模型数据__ 按钮即可向平台发送物模型数据。
	
	<br>

	__指令交互详情__

	```c
	AT+QIOTMODELTD=0,27
	>
	{"1":189.5,"2":30,"3":true}
	OK
	```


*  __开发者中心效果__

	终端设备发送物模型数据完成后，在开发者中心点击 __设备信息__ 详情页中的 __设备调试__ 可查看与终端设备数据的 __实时记录__ 与实时上传 __JSON__ 格式的物模型数据。此时开发者中心已经接收到终端设备上报的精油当前容量：__189.5__ 、定时上报频率：__30__、开关状态：__true__。如下图所示。
	
	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-15.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-15.png)</a>


__3、物模型告警事件发送__

向云端发送 __精油不足告警事件__，事件ID为：__4__，输出参数ID为：__1__ 

* __设备侧发送操作__

	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-16.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-16.png)</a>

	__①、__ 选择需要发送的物模型事件。<br>
	__②、__ 点击 __发送物模型数据__ 按钮即可向平台发送物模型事件。
	<br>

	__指令交互详情__

	```c
	AT+QIOTMODELTD=0,18
	>
	{"4":{"1":200.85}}
	OK
	```	

*  __开发者中心效果__

	在开发者中心 __设备详情__ 详情页的 __事件日志__ 中可查看事件数据记录。
	
	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-17.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-17.png)</a>

## __二、物模型数据下行__

__物模型下行相关指令__

| AT指令 |     解析    |说明|
|:--------:|:-------------:|:-------------:|
| AT+QIOTMODELRD?| 查询剩余数据包个数 |+QIOTMODELRD: \<remain_pieces\>:整型。剩余数据包个数|
| AT+QIOTMODELRD=\<req_length\>| 读取物模型数据 |\<req_length\>：整型。读取的数据长度。长度范围以测试命令实际返回值为准。|

__开发者中心下发服务__

打开物模型功能定义的 __设备调试__ > __服务调用__，模拟远程下发控制命令场景，在设备调试中，选择 __服务调用__ > __设置工作模式__ ，参数设置为：__模式二__ ，最后单击 __发送指令__ 。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-18.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-18.png)</a>

* __非缓存模式__ 

	在 __非缓存模式__ 中，当终端设备接收到云端下发的数据，直接向 __MCU__ 打印数据，例如，云端下发服务后。串口工具显示的结果如下所示。

	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-19.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-19.png)</a>

	__交互数据解析__	

	* __+QIOTEVT: 5,10210,13__ ：终端设备接收到物模型数据后，向 MCU 下发的事件通知。<br>
		__5__ ：事件类型，表示着接收到下行数据；<br>
		__10210__ ：事件Code，代表收到物模型下发数据；<br>
		__13__ ：接收到下发数据的长度；<br>

	* __{"5":{"6":2}}__ ：接收到云端发送的物模型服务Json格式数据。

	<br>

* __缓存模式__

	当模组接收到物模型数据时，模组会主动向 __MCU__ 打印该事件： __+QIOTEVT: 5,10210__ ，该事件表示设备端接收到云端下发的物模型数据，如果想查看数据内容则需要 __MCU__ 主动发送 __AT+QIOTMODELRD=\<req_length\>__ 指令查看具体数据。

	点击 __读取物模型数据__ 按钮即可读取缓存的物模型数据。如下图所示。
	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-20.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-20.png)</a>

	__交互数据解析__

	* __+QIOTEVT: 5,10210__  ：终端设备接收到物模型数据后，向 MCU 下发的事件通知。<br>
		__5__ ：事件类型，表示着接收到下行数据；<br>
		__10210__ ：事件Code，代表收到物模型下发数据；<br>

	* __+QIOTMODELRD: 13,0,0__ ：读取物模型数据响应。<br>
		__13__ ：返回的数据长度；<br>
		__0__ ：当前数据包剩余数据长度；<br>
		__0__ ：剩余数据包个数；<br>

	* __{"5":{"6":2}}__ ：接收到云端发送的物模型服务Json格式数据。


<br>

## __透传数据业务__


<font color=#999AAA >提示：透传数据业务的交互需要在创建产品时选择 __透传/自定义__ 协议。</font>

根据实际业务场景来使用。如果不需要平台解析数据，仅透传数据的话，可以在设备成功接入开发者中心后，通过 __AT+QIOTSEND__ 与 __AT+QIOTRD__ 指令来实现与开发者中心的数据交互。任何类型的数据均可采用透传模式。


<font color=#999AAA >提示：详情请参考[数据交互相关命令](/deviceDevelop/nb/AT/API/nb-at-04.md)。</font>


#### __一、透传数据上行__

发送精油剩余容量的透传数据到云端。

__透传数据上行部分相关AT指令解析__
| AT指令 |     解析    |说明|
|:--------:|:-------------:|:-------------:|
| AT+QIOTSEND=\<mode\>,\<length\>[,\<data\>]| 发送透传数据|\<mode\>发送模式；<br>\<length\>待发送数据长度；<br>\<data\>发送数据；|
使用 __AT+QIOTSEND__ 即可向开发者中心发送透传数据，首先设置要发送数据的字节数，等待模组返回 __>__ 后，输入要发送的数据即可，如果发送的数据超过了设置的N个字节，则只发送前N个字节，后面的数据被认为是无效数据且不会发送。

* __MCU仿真工具操作步骤__

	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-21.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-21.png)</a>
	
	__①、__ 在发送输入框填写将要发送的透传数据。<br>
	__②、__ 点击 __发送数据__ 按钮即可向平台发送透传数据。

	<br>

	__指令交互详情__
	```c
	AT+QIOTSEND=0,20
	>
	OilsCurrentML:180.65
	OK
	```

* __开发者中心效果__
	终端设备发送透传数据完成后，在开发者中心点击 __设备信息__ 详情页中的 __数据日志__ 可查看与终端设备数据的实时记录与长周期存储服务数据，点击单条数据 __查看__ 可以选择查看数据格式。如下图所示。
	
	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-22.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-22.png)</a>

	数据格式是保存在数据日志中的规则，可以是 __Text__、__Hex__，也可以是 __Base64__ ，请选择终端设备上行的数据格式。此时开发者中心已经接收到终端设备上报的精油剩余容量：180.65。如下图所示。
	
	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-23.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-23.png)</a>

## __二、透传数据下行__

下发透传数据。 

__部分相关AT指令解析__

| AT指令 |     解析    |说明|
|:--------:|:-------------:|:-------------:|
| AT+QIOTRD?| 查询剩余数据包个数 |响应：+QIOTRD: <remain_pieces>|
| AT+QIOTRD=\<req_length\>| 读取透传数据 |\<req_length\>：读取的数据长度。长度范围以测试命令实际返回值为准。|



__平台侧操作__

在 __产品详情__ 详情页，单击 __设备调试__ 页签可进行数据业务的交互。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-24.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-24.png)</a>

① 选择 __数据格式__	，透传格式发送主要分为两种。 __Hex__ ：将数据或者byte数组转换为十六进制字符；__Text__：发送时会以一定的编码格式发送, 默认UTF-8编码。<br>
② 填写 __数据内容__ : __“Power:1”__ 作为香薰机电源打开命令，内容长度限制为4096字符。	<br>
③ 点击 __发送指令__ 云端即可把该填写的数据内容下发到设备端。

<br>

* __非缓存模式__

	在 __非缓存模式__ 中，当终端设备接收到云端下发的数据，直接向MCU打印接收到的数据，例如，发送 __“Power:1”__ 后，串口工具显示的结果如下：

	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-25.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-25.png)</a>


	* __+QIOTEVT: 5,10200,7__ ：终端设备接收到透传数据后，向 MCU 下发的事件通知。<br>
		__5__ ：事件类型，表示着接收到下发数据；<br>
		__10200__ ：事件Code，代表着接收的是透传数据；<br>
		__7__ ：接收到下发数据的长度；<br>

	*  __Power:1__ ：接收到云端发送的透传数据。

<br>

* __缓存模式__ 
	
	当模组接收到透传数据时，模组会主动向MCU打印该事件： __+QIOTEVT: 5,10200__ ，该事件表示设备端收到云端下发的透传数据，如果想查看数据内容则需要MCU主动发送 __AT+QIOTRD=\<req_length\>__ 指令查看具体数据。

	<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-26.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-26.png)</a>

	__示例数据解析：__

	* __+QIOTEVT: 5,10200__  ：终端设备接收到透传数据后，向 MCU 下发的事件通知。<br>
		__5__ ：事件类型，表示着接收到下发数据；<br>
		__10200__ ：事件Code，代表着接收的是透传数据；<br>

	* __+QIOTRD: 7,0,0__ ：读取透传数据响应。<br>
		__7__ ：返回的数据长度；<br>
		__0__ ：当前数据包剩余数据长度；<br>
		__0__ ：剩余数据包个数；<br>
		__Power:1__ ：接收到云端发送的透传数据；<br>
	
