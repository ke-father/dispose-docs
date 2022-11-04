# 快速指引（QuecOpen方案）
## __概念说明__

&emsp;&emsp;__QuecOpen__ 主要是一种以模块作为 __主处理器__ 的应用方式，亦可以作为 __从模块__ 。采用 __QuecOpen__ 解决方案，可以 __简化开发者对物联网应用的开发流程__，__精简硬件结构设计__，从而 __降低产品成本__。__QuecOpen__ 接入方案的 __SDK__ 采用 模块化设计 ，分离核心协议服务 与 硬件抽象层，并提供灵活的配置选项和多种编译方式，适用于不同设备的开发平台和使用环境。


<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-01.png">![img](/deviceDevelop/ble/resource/platform-01.png)</a>


## __设备侧__
### __一、开发环境准备__
#### __获取SDK__
&emsp;&emsp;跳转到模组型号选择，具体模组包括SDK下载、编译链下载、各类文档下载、驱动下载等。

#### __芯片资料__

&emsp;&emsp;以 __FR801xH__ 芯片为例，进入[富芮坤开发资料获取页面](https://www.freqchip.com/fr801xh)下载 芯片相关资料。

#### __编译环境配置__

__1、下载并安装KEIL__

&emsp;&emsp;可从[官方页面](https://www2.keil.com/mdk5)获取软件,软件版本 __Keil uVision5 MDK__


<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-02.png">![img](/deviceDevelop/ble/resource/platform-02.png)</a>


### __二、QuecThing 简介__
&emsp;&emsp;移远通信 QuecThing 对模块适配层提供统一API接口定义，在芯片基础 SDK 上进行了二次抽象，屏蔽了复杂的模组技术细节，方便您快速入门。开发者只需根据模块能力实现具体业务功能。完成编译烧录后，即可在模块上运行 QuecThing 并实现开发者中心接入，完成设备智能化。同时为加快开发效率， QuecThing 内置并提供了统一的通信协议和API供模块APP层调用，开发者无需过多关注模块型号即可直接使用并开发具体业务功能。


__1、功能逻辑结构图__

<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-09.png">![img](/deviceDevelop/ble/resource/platform-09.png)</a>



__2、部分主要API介绍__

&emsp;&emsp;QuecOpen提供符合REST接口规范的产品、设备、服务等云端API接口，帮助开发者快速开发应用，满足场景业务需求。


* 配置部分相关API

	|           函数名称           | 说明                                                                                    |
	| :-------------------------- | :-------------------------------------------------------------------------------------- |
	|         Ql_iotInit()         | 初始化 QuecThing各种信息，例如服务器IP、lifetime等                                      |
	|   Ql_iotConfigSetEventCB()   | 该函数用于注册事件回调函数，后续 QuecThing 运行过程中产生的事件均通过该回调函数进行通知 |
	| Ql_iotConfigSetProductinfo() | 配置产品PK/PS信息                                                                       |
	|  Ql_iotConfigSetConnmode()   | 配置连接模式，可配置关闭/手动开启/自动开启连接APP                                       |

* 蓝牙相关api
	|        函数名称        | 说明                                                                     |
	| :-------------------- | :----------------------------------------------------------------------- |
	|  Ql_iotDBindcodeSet()  | 该函数用于设置蓝牙PIN码或开启广播时间                                        |
	|  Ql_iotDBindcodeGet()  | 该函数用于获取当前蓝牙PIN码      |

* TTLV 部分相关 API   <font color=#999AAA >注释:XXX为数据类型，如bool、int类型等</font>

	|        函数名称        | 说明                                                                     |
	| :-------------------- | :----------------------------------------------------------------------- |
	|  Ql_iotTtlvCountGet()  | 该函数用于获取数据表的节点数量                                           |
	|  Ql_iotTtlvNodeGet()   | 该函数用于从数据表中提取数据节点                                         |
	|    Ql_iotTtlvFree()    | 该函数用于创建 TTLV 数据表或添加 TTLV 节点，在处理完成后，释放数据表资源 |
	|  Ql_iotTtlvIdAddXXX()  | 该函数用于添加节点数据-XXX 类型，例如Ql_iotTtlvIdAddBool()               |
	|  Ql_iotTtlvIdGetXXX()  | 该函数用于获取指定 ID 节点数据-XXX类型                                   |
	| Ql_iotTtlvNodeGetXXX() | 该函数用于获取节点数据-XXX类型                                           |

* 发送数据部分相关 API

	|           函数名称           | 说明                                                               |
	| :-------------------------- | :----------------------------------------------------------------- |
	| Ql_iotCmdBusPhymodelReport() | 该函数用于向APP发送物模型数据                                      |
	|  Ql_iotCmdBusPhymodelAck()   | 该函数用于向APP应答物模型数据，在接收到APP读取物模型数据时进行应答 |
	| Ql_iotCmdSysDevInfoReport()  | 该函数用于向APP上报模块信息，如模块型号、SIM 卡号等                |
	| Ql_iotCmdBusPassTransSend()  | 该函数用于向APP发送透传数据 |
			
### __三、创建产品__

&emsp;&emsp;以下举例演示如何创建产品。

__1、登录开发者中心__

&emsp;&emsp;登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。

__2、创建项目__

&emsp;&emsp;创建名为 __“移远国际酒店”__ 项目，用于演示酒店行业项目管理。


<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-03.png">![img](/deviceDevelop/ble/resource/platform-03.png)</a>

__3、创建产品__

&emsp;&emsp;在创建产品时，需要选择数据协议，其中包含 __物模型__ 与 __透传/自定义__ 两种数据格式，用户可根据实际业务场景选择其一。

&emsp;&emsp;<font color=#999AAA >提示：PK、PS码需用户保存好，设备的连接与产品删除等将会需要使用到该PK、PS。</font>

__A.物模型__

&emsp;&emsp;__物模型__ 是指设备在开发者中心的数字化表示，并在云端构建的实体数据模型。开发者中心定义的标准数据格式为 __物模型__ ，是平台与设备间通讯的数据格式。物模型分为 __属性__ 、__服务__ 、__事件__ 三个维度。定义了物模型在发布以后，即完成了物模型产品的定义，平台对数据进行解析检验和处理。

__B.透传/自定义__ 

&emsp;&emsp;__透传__ 即透明传输，指的是在通讯中不管传输的业务内容如何，只负责设备与云端的数据传输交互，而不对业务数据内容做任何改变，开发者中心也不会对其业务数据进行解析。在硬件设备中，或许会存在一些 __硬件配置低__ 或自身 __无法构建物模型__ 与开发者中心进行通讯的设备。针对这类设备，您可以选择 __透传/自定义__ 将原始数据透传至平台。



##### A.创建物模型数据产品
__1、创建物模型数据产品__
&emsp;&emsp;项目创建完成后，点击 __产品管理__ 中的 __创建产品__ 来创建一个新的产品，产品名称为 __“智能香氛机”__ 。本次数据格式采用 __物模型__ 方式为例来演示，如下图所示。



<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-04.png">![img](/deviceDevelop/ble/resource/platform-04.png)</a>


##### B.创建透传数据产品
__1、创建透传/自定义数据产品__
&emsp;&emsp;项目创建完成后，点击 __产品管理__ 中的 __创建产品__ 来创建一个新的产品，产品名称为 __“智能香氛机”__ 。本次数据格式采用 __透传/自定义__ 方式为例来演示，如下图所示。



<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-05.png">![img](/deviceDevelop/ble/resource/platform-05.png)</a>


<font color=#999AAA >提示：当您选择了数据格式为 “透传/自定义” 且选择产品品类的标准物模型时，功能定义并不起作用。</font>

### __四、程序编码__

#### __1、QuecThing初始化__

&emsp;&emsp;QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际情况进行适配。设备发送引导认证操作时，APP对其携带的PK、PS进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与APP建立连接。
```c
/* 初始化QuecThing SDK */
Ql_iotInit();
/* 注册事件回调函数 */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* 配置产品信息*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
/* 允许app连接 */
Ql_iotConfigSetConnmode(1);
```
#### __2、事件回调处理接口__
__概述__
&emsp;&emsp;事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务 __Ql_iotEventCB()__ ，当用户触发了某件事件时，交给监听器去处理，开发者既可根据不同的事件来执行不同的操作。数据模板示例 __Ql_iotMain.c__ 已实现数据事件的通用处理框架，可以基于此示例开发业务逻辑。

&emsp;&emsp;事件回调函数则会判断事件Code进入相对应的逻辑处理程序，开发者只需要在 __Ql_iotEventCB()__ 相应事件下作具体处理即可。事件回调函数主要分6个主事件：引导认证操作、接入操作、发送数据操作、接收数据操作、注销操作、OTA操作。具体解析如下：

* 引导认证操作
	>该事件设备引导认证回调，可查看设备认证成功与否及一些连接失败的错误代码，方便开发者根据相对应错误代码进行处理。

* 接入操作
	>该事件回调接入APP成功与否，在连接APP时往往会有蓝牙连接异常等错误，开发者可根据相关错误代码进行处理。

* 发送数据操作
	>该事件主要是数据格式发送的成功与失败回调，例如物模型数据发送、透传数据发送。

* 接收数据操作
	>该事件是接收到透传数据、物模型下发数据（服务调用以及下发可写属性）、物模型查询命令（设备调试中读取操作），开发者可根据该事件进行跟APP的数据交互。

* 注销操作
	>该事件代表着注销成功（断开连接成功），当终端设备与APP断开时会进入该事件。

* OTA操作
	>该事件主要回调OTA升级操作，例如有着新的升级任务，开发者可根据其事件传参中的配置信息来判断是否开启升级，亦可以判断OTA升级的进展，例如：收到升级计划、开始下载、包下载中、包下载完成、包更新中、更新固件成功、更新固件失败。

&emsp;&emsp;例如当终端设备向开发者中心发送物模型数据时，回调函数通知该事件{event:4,errcode:10210}时，表示设备已将物模型数据发送成功，开发者可以在此事件回调进行事件处理。如图下：

```c
/**************************************************************************
** 功能	@brief : 事件处理回调
** 输入	@param : event:主事件 
** 输入	@param : errcode：事件code（子集）
** 输入	@param : value：属性数据
** 输入	@param : valLen：属性数据长度
** 输出	@retval: NULL
***************************************************************************/
void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
	/* 回调事件判断 */
	switch (event)
	{
		/* 发送数据操作 */
		case 4:
		  if(10210 == errcode)
	      {
	      	/* code */
	      	printf("Sending object model succeeded\r\n");
	      }
	 		break;
	  	default:
	        break;
	}
}
```

#### __3、应用逻辑开发__
##### __变量定义（可选）__

&emsp;&emsp;结构体是一种由用户自定义的特殊的复合型的 __数据类型__ ，开发者可根据在开发者中心的 __物模型模板__ 进行定义，这样会在代码工程中使程序结构清晰。另外，在此方式下，也可以根据需要在函数中新增该结构体类型变量。

● __示例代码如下：__
```cpp
typedef struct
{
    float Odo;      /* 里程 单位：Km */
    bool Power;     /* 电源开关 0：关;1：开 */
	int batt;     /*电量*/
} CarDevice_type;
```
##### __上行业务逻辑实现__

&emsp;&emsp;设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，例如设备端将两轮车车机物理量读取到结构体内，实时将读取到的车机变量上传到APP。

● __示例代码如下所示：__
```c
	void *ttlvHead = NULL; 
	CarDevice_type  CarDevice;

	/*中断检测到了电门锁开*/ 
	CarDevice_type  CarDevice.Power = 1;

	/*车机当前电源状态*/  
	Ql_iotTtlvIdAddBool(&ttlvHead, 1,  CarDevice.Power);

	/*车机当前电量*/  
	Ql_iotTtlvIdAddInt(&ttlvHead, 1,  CarDevice.batt);

	/*车机当前里程*/  
	Ql_iotTtlvIdAddFloat(&ttlvHead, 1,  CarDevice.Odo);

	/*第一个传参是QOS值，当值是1及以上时则会有事件回调响应*/
	Ql_iotCmdBusPhymodelReport(1, ttlvHead);

	Ql_iotTtlvFree(&ttlvHead);
	

```
&emsp;&emsp;<font color=#999AAA >注意：在添加物模型节点且调用完后，开发者请调用 Ql_iotTtlvFree(xxx) 函数，该函数会释放指针指向的一个内存块，从而避免内存泄漏等问题。</font>

##### __下行业务逻辑实现__

&emsp;&emsp;服务端下行的数据，__QuecThing__ 已按数据模板协议完成 TTLV 数据的解析，开发者只需根据不同的事件来开发下行业务逻辑。物模型是根据在平台定义的产品数据模板生成的模板结构体，由定义的各属性构成成员变量。入参 value 所指向的属性数据，从服务端下行数据中，__QuecThing__  已经按数据模板协议完成了属性数据的解析，用户在下行逻辑处理的函数里，可直接使用解析完成的数据添加业务逻辑即可。


● __示例代码如下所示：__

```c
void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
	/* 回调事件判断 */
	switch (event)
	{
		/* 接收数据操作 */
		case QIOT_ATEVENT_TYPE_RECV:
			printf("data recv event,code:%d\r\n",errcode);
			/* 收到透传数据 */
			if(10200 == errcode)
			{
				printf("pass data:%.*s\r\n",valLen,(char *)value);
				/* 测试，把收到的透传数据回传到APP */
				Ql_iotCmdBusPassTransSend(1,(unsigned char *)value,valLen);
			}
			/* 收到物模型下发数据（服务下发及可写属性下发） */
			else if(10210 == errcode)
			{
				/* 测试，把收到的物模型数据回传到APP */
				Ql_iotCmdBusPhymodelReport(1,value);
				/* 物模型数据解析 （可在该函数内处理服务下发）*/
				Ql_iotTtlvHandle(value);
			}
			/* 收到物模型请求数据（APP读取操作） */
			else if(10211 == errcode && value)
			{
				quint16_t PkgID = *(quint16_t *)value;
				quint16_t *ids = (quint16_t *)(value+sizeof(quint16_t));
				void *ttlvHead = NULL;
				printf("model read event,PkgID:%d\r\n",PkgID);
				quint32_t i = 0;
				for(i=0;i<valLen;i++)
				{
					quint16_t modelId = ids[i];
					printf("modelId:%d\r\n",modelId);
			
					switch (modelId)
					{
						case 1:
						Ql_iotTtlvIdAddBool(&ttlvHead, modelId, CarDevice.Odo);/* 里程状态 */
						break;
						case 2:
						Ql_iotTtlvIdAddBool(&ttlvHead, modelId, CarDevice.LockWarn);/* 设防状态 */
						break;
						case 3:
						Ql_iotTtlvIdAddBool(&ttlvHead, modelId, CarDevice.Power);/* 电源状态 */
						break;
						default:
						break;
					}
				}
				Ql_iotCmdBusPhymodelAck(1,PkgID,ttlvHead);/* 物模型数据应答 */
				Ql_iotTtlvFree(&ttlvHead);/* 释放ttlvHead指针的函数 */
			}
			break;
				default:
			break;
	}
}
```
	
#### __四、编译__
&emsp;&emsp;以 __FR801xH__ 芯片为例介绍编译步骤。

__1、获取模板工程__ 

&emsp;&emsp;首先，我们可以从 __[富芮坤SDK获取页面](https://gitee.com/freqchip/FR801xH-SDK)__ ，获取开发模板工程。

__2、进入Keil__ 

&emsp;&emsp;下载KEIL5，打开模板工程，不需要安装其他包。

__3、编译__ 

&emsp;&emsp;在KEIL5内直接点击编译按钮，模板工程脚本会输出host_app.bin（即代码固件）。



<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-06.png">![img](/deviceDevelop/ble/resource/platform-06.png)</a>


### __五、烧写程序__

&emsp;&emsp;以 __FR801xH__ 芯片为例，介绍如何使用烧写工具为其烧写程序的步骤。

__1、下载烧写工具__

&emsp;&emsp;在 __[富芮坤开发资料获取页面](https://www.freqchip.com/fr801xh)__ 点击获取开发资料包，获取烧录工具。
 
__2、PC 端 usb 直连 FR801xH 芯片开发板__

__3、烧写工具使用__

&emsp;&emsp;打开 __FR8010H_Download_Tool烧写软件__ ，将生成的固件 __host_app.bin__ 烧写进芯片里面，操作步骤如下图所示。

&emsp;&emsp;__[1]__ 打开 PC 端串口烧录工具，选择正确的串口号，导入 DAT 文件（选择要烧录的 bin 文件），然后打开串口，进入等待连接状态。


<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-07.png">![img](/deviceDevelop/ble/resource/platform-07.png)</a>

&emsp;&emsp;__[2]__ 将串口工具的 TX 连接到芯片 PA2（芯片端的 RX），RX 连接到芯片的 PA3（芯片端的 TX）。

&emsp;&emsp;__[3]__ 将串口工具的地和供电同时与芯片的地和供电连接，这时芯片与 PC 工具握手成功后在工具端会显示已经连接，然后点击写入所有内容即可将程序烧录到芯片中。


<a data-fancybox title="img" href="/deviceDevelop/ble/resource/platform-08.png">![img](/deviceDevelop/ble/resource/platform-08.png)</a>

&emsp;&emsp;<font color=#999AAA >注意：烧写过程中，要确保该端口不被占用。</font>






