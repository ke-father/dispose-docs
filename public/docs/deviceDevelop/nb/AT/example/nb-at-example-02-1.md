# 物模型格式数据交互示例
## **场景描述**
本章节指导用户使用AT指令接入方式实现设备与云平台的物模型数据交互。

## **涉及指令**

| 指令名称| 功能描述    |
|:--------:| :-------------:|
|  AT+QIOTCFG| 配置可选参数 |
|  AT+QIOTMODELTD| 发送物模型数据至平台 |
|  AT+QIOTMODELRD |读取平台下发的物模型数据 |

<font color=#999AAA >提示：详情请参考[数据业务交互 相关命令](/deviceDevelop/nb/AT/API/nb-at-04.md)。</font>


	
## **操作步骤**
### **平台侧**
#### **一、登录开发者中心**

登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。

#### **二、创建项目**

项目是设备的集合，新用户在注册登录后默认是没有项目的，需进行项目的创建流程后才可进行项目维度的相关操作。
#### **三、创建产品**
物模型数据业务的交互需要在创建产品时选择 __物模型__ 协议。

<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/02-1-1.png">![img](/deviceDevelop/nb/AT/resource/02-1-1.png)</a>


#### **四、物模型功能定义**
 提示：由于在创建产品时已选择了产品品类，系统已为您自动创建该品类的所有物模型功能。您可根据实际项目需求修改物模型功能。 
<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/02-1-2.png">![img](/deviceDevelop/nb/AT/resource/02-1-2.png)</a>



 产品物模型结构规划如下表所示。

| 功能ID | 功能类型    |功能名称   |数据类型    |数据定义  |功能描述  |
|:--------:|:-------------|:-------------|:-------------|:-------------|:-------------|
| 1 |属性 | 精油当前容量 | FLOAT |取值范围：0~300 |定时上报精油当前容量
| 2 |属性 | 定时上报频率 | INT |取值范围：1 ~ 2678400 |设置与查询精油当前容量定时上报频率|
| 3 |属性 | 开关状态 | BOOL |布尔值：<br>true - 开启；<br>false - 关闭； |控制香薰机开关|
| 4 |事件 | 精油不足告警 | - |事件类型：告警 <br>输出参数功能ID：1 |精油不足时主动上告给云端|
| 5 |服务 | 设置工作模式 | - |调用方法：异步<br>输入参数功能ID：6 |设置香薰机工作模式|




### **设备侧**
#### **物模型数据交互**

物模型是开发者中心 针对物理实体设备在云端建立的数据模型，主要用于描述产品的功能，从而方便数据的解析。设备成功接入平台后，通过 __AT+QIOTMODELTD__ 与 __AT+IOTMODELRD__ 指令来实现与开发者中心的数据交互。



#### **示例一(主动发送TTLV格式物模型数据)**

TTLV数据在实际代码工程中使用TTLV库进行解析或者使用移远云提供的脚本解析。

__1、将数据格式设置为TTLV格式__ 

MCU可通过 __AT+QIOTCFG="tsl"[,\<tsl_mode>]__ 指令配置物模型数据格式，若不配置则出厂默认为 __`0`__：TTLV格式。

```c
[TX]AT+QIOTCFG="tsl",0

[RX]AT+QIOTCFG="tsl",0

OK
```
__2、MCU Demo定义物模型类型__

```c
typedef struct
{
	/*模拟数据类型，开发中按照实际项目需求编写*/
	qbool bool_1;			
	qbool bool_2;			
	quint32_t num_1;		
	float num_2;			
 	quint8_t byte_1[9+1];	
}ql_modelInfo_t;
static ql_modelInfo_t ql_modelInfo;

quos_modelList_t ql_modelList[] =
{
    /* 物模型ID       物模型类型   			数据指针                		 数据长度 */
	{	1       ,QIOT_DPDATA_TYPE_BOOL    ,&ql_modelInfo.bool_1      ,sizeof(ql_modelInfo.bool_1)},	
	{	2       ,QIOT_DPDATA_TYPE_BOOL    ,&ql_modelInfo.bool_2      ,sizeof(ql_modelInfo.bool_2)},		
    {	3   	,QIOT_DPDATA_TYPE_NUM     ,&ql_modelInfo.num_1  	 ,sizeof(ql_modelInfo.num_1)},
    {	4       ,QIOT_DPDATA_TYPE_NUM     ,&ql_modelInfo.num_2       ,sizeof(ql_modelInfo.num_2)},
    {	5       ,QIOT_DPDATA_TYPE_BYTE    ,&ql_modelInfo.byte_1      ,sizeof(ql_modelInfo.byte_1)},
		
};
```
__3、设置物模型值及发送物模型__

```c	
quint16_t modelIds[] = {
	1,2,3,4,5,																
};
	/*物模型数据设置*/
	Quos_modelSet_bool(1,TRUE);
	Quos_modelSet_bool(2,TRUE);
	Quos_modelSet_num(3,30);
	Quos_modelSet_num(4,200.56);
	Quos_modelSet_structString(5,0,(quint8_t *)"ABCabc123");

	/*发送物模型数据*/
	Quos_modelSend(0,modelIds,sizeof(modelIds)/sizeof(modelIds[0]));

```


#### **示例二(主动发送物模型JSON格式数据)**
__1、将数据格式设置为JSON格式__

MCU可通过 __AT+QIOTCFG="tsl"[,\<tsl_mode>]__ 指令配置物模型数据格式，若不配置则出厂默认为 __`0`__：TTLV格式。

```c
[TX]AT+QIOTCFG="tsl",1

[RX]AT+QIOTCFG="tsl",1

OK
```
__2、发送JSON格式物模型数据__

发送物模型数据28字节 __{"1":268.51,"2":30,"3":true}__，消息类型为CON数据，则执行 __AT+QIOTMODELTD=100,28__，待响应 __>__ 后，MCU发送物模型数据。

```c
[TX]AT+QIOTMODELTD=100,28
[RX]>
[TX]{"1":268.51,"2":30,"3":true}
[RX]OK

+QIOTEVT: 4,10210
```

<font color=#999AAA >提示：若发送数据为CON数据，模块成功发送数据后将响应OK并上报+QIOTEVT: 4,10210；若发送数据为NON数据，不产生事件。</font>

#### **示例三(根据PkgID响应平台读取数据)**
__1、开发者中心批量读取物模型实时数据__

在开发者中心 __设备信息__ 详情页的 __设备调试__ 中，点击 __批量读取__ 按钮可一键批量读取物模型属性数值。

<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/02-1-4.png">![img](/deviceDevelop/nb/AT/resource/02-1-4.png)</a>


__2、模组收到查询指令并向MCU打印回调事件__

* 回调事件解析：__+QIOTEVT: 5,10211,7,1,2,3__

	__5__ ：收到下行业务事件。
	
	__10211__ ：收到云端读取物模型属性事件Code。
	
	__7__ ：请求包 ID，该参数仅在模块接收物模型数据响应时有效。
	
	__1,2,3__ ：需要读取物模型属性的ID号，分别是ID1、ID2与ID3。
	
__3、MCU根据回调事件判断回复的PkgID与物模型ID实时数据__

```c
[TX]AT+QIOTMODELTD=100,28,7
[RX]>
[TX]{"1":268.51,"2":30,"3":true}
[RX]OK

+QIOTEVT: 4,10210
```
<font color=#999AAA >提示：若发送数据为CON数据，模块成功发送数据后将响应OK并上报+QIOTEVT: 4,10210；若发送数据为NON数据，不产生事件。</font>

#### **示例四(主动上报物模型告警事件)**
模拟精油不足时主动上告给云端，该事件包含输出参数：__精油当前容量__，将输出参数 __{"1":32.89}__ 包含进告警事件ID 内一并发送到开发者中心，发送物模型事件数据为17字节 __{"4":{"1":32.89}}__。消息类型为CON数据，则执行 __AT+QIOTMODELTD=100,17__，待响应 __>__ 后，MCU发送数据。
```c
[TX]AT+QIOTMODELTD=100,17
[RX]>
[TX]{"4":{"1":32.89}}
[RX]OK

+QIOTEVT: 4,10210
```
<font color=#999AAA >提示：若发送数据为CON数据，模块成功发送数据后将响应OK并上报+QIOTEVT: 4,10210；若发送数据为NON数据，不产生事件。</font>

#### **示例五(非缓存模式读取平台下发的物模型数据)**
若不配置则出厂默认为 __`0`__：关闭缓存模式。

__1、开发者中心下发物模型服务__

 在开发者中心 __设备调试__ 页面，第一步点击 __服务调用__，第二步选择要下发的服务物模型，第三步点击左下角的 __发送指令__ 即可下发物模型服务给终端。
<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/02-1-5.png">![img](/deviceDevelop/nb/AT/resource/02-1-5.png)</a>



__2、模组收到服务下发指令并向MCU打印回调事件与数据__

模组收到服务指令后，会主动向MCU打印回调事件 __+QIOTEVT: 5,10210,13__ 与下发的服务物模型数据 __{"5":{"6":1}}__。

```c
[RX]+QIOTEVT: 5,10210,13
{"5":{"6":1}}
```
#### **示例六(缓存模式读取平台下发的物模型数据)**
__1、打开下行数据缓存模式__

MCU可通过 __AT+QIOTCFG="buffer"[,<buffer_mode>]__ 指令配置下行数据缓存模式。

```c
[TX]AT+QIOTCFG="buffer",1

[RX]AT+QIOTCFG="buffer",1

OK
```

__2、开发者中心下发物模型服务__

 在开发者中心 __设备调试__ 页面，第一步点击 __服务调用__，第二步选择要下发的服务物模型，第三步点击左下角的 __发送指令__ 即可下发物模型服务给终端。
<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/02-1-6.png">![img](/deviceDevelop/nb/AT/resource/02-1-6.png)</a>


__3、模组收到服务下发指令并向MCU打印回调事件__

* 回调事件解析：__+QIOTEVT: 5,10210__

	__5__ ：收到下行业务事件。
	
	__10210__ ：收到云端读取物模型服务事件Code。
	

__4、MCU根据回调事件查询服务__
```c
[TX]AT+QIOTMODELRD=512

[RX]AT+QIOTMODELRD=512

+QIOTMODELRD: 13,0,0
{"5":{"6":1}}
OK
```


 