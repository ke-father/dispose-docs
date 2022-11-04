# 数据业务交互

<font color=#999AAA >提示：物模型数据业务的交互需要在创建产品时选择 __物模型__ 协议。</font>

物模型是开发者中心针对物理实体设备在平台建立的数据模型，主要用于描述产品的功能，从而方便数据的解析。可以在设备成功接入开发者中心后，通过 __AT+QIOTMODELTD__ 与 __AT+QIOTMODELRD__ 实现与开发者中心的数据交互。


<font color=#999AAA >提示：详情请参考[数据交互相关命令](/deviceDevelop/nb/AT/API/nb-at-04.md)。</font>


## **物模型数据上行**
__AT命令解析__

| AT命令 |     解析    |说明|
|:--------:|:-------------:|:-------------:|
| AT+QIOTMODELTD=\<mode\>,\<length\>[,\<PkgID\>]| 发送物模型数据|\<mode\>发送模式；\<length\>发送数据长度；[\<PkgID\>]请求包 ID，仅当设备需响应平台数据请求时需指定该参数|

__1. 响应请求数据__ 

* __平台读取操作__

	在开发者中心 __设备信息__ 详情页的 __设备调试__ 中，点击 __批量读取__ 一键批量读取物模型属性数值。

	
<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-20.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-20.png"></a>


* __事件回调__	
	当设备收到开发者中心下发的数据交互时，会主动向MCU串口打印回调事件码，方便MCU获取设备状态。
	
	__事件回调响应解析__
	
	* __+QIOTEVT: 5,10211,13,1,2,3,4,5,6,7__ <br>
		__5__ ：收到下行业务事件。<br>
		__10211__ ：收到开发者中心读取物模型属性事件码。<br>
		__13__ ：请求包 ID。设备响应开发者中心的物模型数据请求时，需携带该参数。<br>
		__1,2,3,4,5,6,7__ ：需要读取物模型属性的ID号。<br>
	
* __发送步骤__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-21.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-21.png"></a>


__①__ 选择需要发送的请求包 ID。<br>
__②__ 点击 __发送应答数据__ 向开发者中心响应物模型数据。



__2. 物模型属性数据主动发送__

设备主动发送物模型属性数据到 __开发者中心__。

* __发送步骤__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-22.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-22.png"></a>

__①__ 选择需要发送的物模型。<br>
__②__ 点击 __发送物模型数据__ 向开发者中心发送物模型数据。



*  __开发者中心效果__

	设备发送物模型数据完成后，在开发者中心点击 __设备信息__ 详情页中的 __设备调试__ 可查看与设备之间数据交互的 __实时数据__ 及数据 的 __JSON__ 格式。如下图所示。
	

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-23.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-23.png"></a>




__3. 物模型告警事件上报__


* __发送步骤__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-24.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-24.png"></a>


__①__ 选择需要发送的物模型事件。<br>
__②__ 点击 __发送物模型数据__ 向开发者中心发送物模型数据。


*  __开发者中心效果__

	在开发者中心 __设备详情__ 详情页的 __事件日志__ 中可查看事件数据记录。
	

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-25.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-25.png"></a>



## **物模型数据下行**
__AT命令解析__

| AT命令 |     解析    |说明|
|:--------:|:-------------:|:-------------:|
| AT+QIOTMODELRD?| 查询剩余数据包个数 |响应：+QIOTRD: <remain_pieces>|
| AT+QIOTMODELRD=\<req_length\>| 读取物模型数据 |\<req_length\>：读取的数据长度。长度范围以测试命令实际返回值为准。|

__开发者中心下发服务__

打开物模型功能定义的 __设备调试__ > __属性调试__，模拟远程下发控制命令场景，在设备调试中，勾选待下发的属性内容，单击 __发送指令__ 将该属性下发给设备。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-26.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-26.png"></a>



__非缓存模式__ 

在 __非缓存模式__ 中，设备接收到开发者中心下发的数据后会直接主动向 __MCU__ 打印接收到的数据。例如，开发者中心下发属性后，数据交互显示结果如图下所示：


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-27.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-27.png"></a>



* __+QIOTEVT: 5,10210,2__ 设备接收到物模型数据后，向 MCU 下发的事件通知<br>
	__5__ ：事件类型，表示接收到下行数据。<br>
	__10210__ ：事件码，代表收到物模型下发数据。<br>
	__2__ ：开发者中心下发数据的长度。<br>

* __0x0021__ ：开发者中心下发的物模型属性TTLV格式数据，该数据为十六进制。

__缓存模式__

设备接收到物模型数据时，会主动向 __MCU__ 打印事件： __+QIOTEVT: 5,10210__ ，表示设备接收到开发者中心下发的物模型数据。__MCU__ 主动发送 __AT+QIOTMODELRD=\<req_length\>__ 命令可查看具体数据。

点击 __读取物模型数据__ 读取未读取的物模型数据。如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-28.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-28.png"></a>


__示例数据解析：__

* __+QIOTEVT: 5,10210__ 设备接收到透传数据后向 MCU 下发的事件通知<br>
	__5__ ：事件码。表示接收到下行数据。<br>
	__10210__ ：物模型数据。<br>

* __+QIOTMODELRD: 2,0,0__ 读取到的物模型数据<br>
	__2__ ：返回的数据长度。<br>
	__0__ ：当前数据包剩余数据长度。<br>
	__0__ ：剩余数据包个数。<br>

* __0x0021__ ：开发者中心下发的物模型属性TTLV格式数据。


