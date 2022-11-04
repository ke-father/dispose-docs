# 程序编码

## __一、QuecThing初始化__

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际情况进行适配。设备发送引导认证操作时，开发者中心对其携带的PK、PS进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与开发者中心建立连接。
```c
/* 初始化QuecThing SDK */
Ql_iotInit();
/* 注册事件回调函数 */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* 配置产品信息*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
/* 启动云平台连接 */
Ql_iotConfigSetConnmode(1);
```
## __二、事件回调处理接口__
__概述__
事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务 __Ql_iotEventCB()__ ，当用户触发了某件事件时，交给监听器去处理，开发者既可根据不同的事件来执行不同的操作。数据模板示例 __Ql_iotMain.c__ 已实现数据事件的通用处理框架，可以基于此示例开发业务逻辑。

事件回调函数则会判断事件Code进入相对应的逻辑处理程序，开发者只需要在 __Ql_iotEventCB()__ 相应事件下作具体处理即可。事件回调函数主要分8个主事件：引导认证操作、接入操作、订阅操作、发送数据操作、接收数据操作、注销操作、OTA操作、平台事件。具体解析如下：

* 引导认证操作
	>该事件设备引导认证回调，可查看设备认证成功与否及一些连接失败的错误代码，方便开发者根据相对应错误代码进行处理。

* 接入操作
	>该事件回调接入开发者中心成功与否，在连接开发者中心时往往会有设备密钥不正确或网络异常等错误，开发者可根据相关错误代码进行处理。

* 订阅操作
	>该事件回调订阅MQTT主题是否成功。

* 发送数据操作
	>该事件主要是数据格式发送的成功与失败回调，例如物模型数据发送、透传数据发送及定位数据发送。

* 接收数据操作
	>该事件是接收到透传数据、物模型下发数据（服务调用以及下发可写属性）、物模型查询命令（设备调试中读取操作），开发者可根据该事件进行跟开发者中心的数据交互。

* 注销操作
	>该事件代表着注销成功（断开连接成功），当终端设备与云端断开时会进入该事件。

* OTA操作
	>该事件主要回调OTA升级操作，例如有着新的升级任务，开发者可根据其事件传参中的配置信息来判断是否开启升级，亦可以判断OTA升级的进展，例如：收到升级计划、开始下载、包下载中、包下载完成、包更新中、更新固件成功、更新固件失败。

* 平台事件
	>该事件是指设备端收发信息时导致开发者中心限流，例如超过单设备激活数量或者每日请求数导致限流等。

例如当终端设备向开发者中心发送物模型数据时，回调函数通知该事件{event:4,errcode:10210}时，表示设备已将物模型数据发送成功，开发者可以在此事件回调进行事件处理。如图下：

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
<font color=#999AAA >提示：事件详情请参考[设备与平台交互 相关事件](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-10.md)。</font>


## __三、应用逻辑开发__

### __1、开启蓝牙功能__

可根据实际的项目需求拟定开启蓝牙功能，例如按下按键开启蓝牙功能。

* 示例代码如下所示：

    ```c
	Qhal_IotBLEInit();			/* 蓝牙服务初始化 */
	char buff[2] = {"1", "1"}; 
	quec_ble_debug(2, buff);	/* 开启蓝牙功能 */
    ```

<font color=#999AAA >提示：WiFi功能缺省已打开Station模式。</font>
### __2、变量定义（可选）__

结构体是一种由用户自定义的特殊的复合型的 __数据类型__ ，开发者可根据在开发者中心的 __物模型模板__ 进行定义，这样会在代码工程中使程序结构清晰。另外，在此方式下，也可以根据需要在函数中新增该结构体类型变量。

* 示例代码如下所示：

    ```c
    typedef struct 
    {
        float         OilsCurrentCapacity;  /* 精油当前容量值 单位：ML*/
        quint32_t     ReportFrequency;		/* 上传时间频率 单位：秒*/
        qbool         PowerSwitch;			/*电源开关 0：关;1：开*/
        qbool         OilsLackWarning;		/* 精油不足告警 精油不足时主动上告给云端*/
        quint32_t     WorkPattern;			/* 设置香薰机工作模式 */
    }AromaDiffuser_type;  
    ```
    
### __3、上行业务逻辑实现__


设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，例如设备端通过串口连接香薰机传感器将精油剩余容量值读取到结构体内，模组则需要将此时此刻读取到的精油剩余容量值上传到开发者中心。

* 示例代码如下所示：

	```c
	while (1)
	{
	    /*每隔30秒上报一次精油当前容量*/ 
	    void *ttlvHead = NULL;   
	    /*精油当前容量值*/  
	    Ql_iotTtlvIdAddFloat(&ttlvHead, 1, AromaDiffuser_type.OilsCurrentCapacity);
	    /*第一个传参是QOS值，当值是1及以上时则会有事件回调响应*/
	    Ql_iotCmdBusPhymodelReport(1, ttlvHead);
	    Ql_iotTtlvFree(&ttlvHead);
	    sleep(30); 
	}
	```
<font color=#999AAA >注意：在添加物模型节点且调用完后，开发者请调用 Ql_iotTtlvFree() 函数，该函数会释放指针指向的一个内存块，从而避免内存泄漏等问题。</font>

### __4、下行业务逻辑实现__

服务端下行的数据，__QuecThing SDK__ 已按数据模板协议完成 TTLV 数据的解析，开发者只需根据不同的事件来开发下行业务逻辑。物模型是根据在平台定义的产品数据模板生成的模板结构体，由定义的各属性构成成员变量。入参 value 所指向的属性数据，从服务端下行数据中，__QuecThing SDK__  已经按数据模板协议完成了属性数据的解析，用户在下行逻辑处理的函数里，可直接使用解析完成的数据添加业务逻辑即可。


* 示例代码如下所示：

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
		            /* 测试，把收到的透传数据回传到平台 */
		            Ql_iotCmdBusPassTransSend(1,(unsigned char *)value,valLen);
		        }
		        /* 收到物模型下发数据（服务下发及可写属性下发） */
		        else if(10210 == errcode)
		        {
		            /* 测试，把收到的物模型数据回传到平台 */
		            Ql_iotCmdBusPhymodelReport(1,value);
		            /* 物模型数据解析 （可在该函数内处理服务下发）*/
		            Ql_iotTtlvHandle(value);
		        }
		        /* 收到物模型请求数据（平台读取操作） */
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
		                /* id1:Float id2:int id3:Bool */
		                switch (modelId)
		                {
		               	 case 1:
		                    Ql_iotTtlvIdAddFloat(&ttlvHead, modelId, AromaDiffuser_type.OilsCurrentCapacity);/* 精油当前容量值 ML*/
		                    break;
		              	  case 2:
		                    Ql_iotTtlvIdAddInt(&ttlvHead, modelId, AromaDiffuser_type.ReportFrequency);/* 上传时间频率 s*/
		                    break;
		              	  case 3:
		                   Ql_iotTtlvIdAddBool(&ttlvHead, modelId, AromaDiffuser_type.PowerSwitch);/* 开关机状态 */
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
	


## __四、编译__

以 __FC41D__ 模组为例介绍编译步骤。

<font color=#999AAA >提示：编译说明基于/mnt/c/Users/mack.zhang/Desktop/下的应用环境。</font>

### __1、新建终端__ 

首先，我们要做的第一件事情就是打开或创建一个集成终端。最简单的方式就是按一下 __Ctrl + Shift+`__ 键，或者选择上页签点击 __终端__ > __新建终端__	，一个新的终端就被创建出来了。


### __2、进入bash__ 

bash 是 Unix 系统和 Linux 系统的一种 Shell（命令行环境），是目前绝大多数 Linux 发行版的默认 Shell。Bash 的基本用法就是在命令行输入各种命令，非常直观。作为练习，可以试着输入 __pwd__ 命令。按下回车键，就会显示当前所在的目录。

进入命令行环境以后，一般就已经打开 bash 了。如果你的 Shell 不是 bash，可以输入 __bash__ 命令启动 bash，如图下所示。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-05.png">![img](/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-05.png)</a>

<font color=#999AAA >提示：退出 bash 环境，可以使用 __exit__ 命令。</font>

### __3、make编译__ 

__make__ 是一个命令工具，是一个解释 __Makefile__ 中指令的命令工具， __make__ 命令执行时，需要一个 __Makefile__ 文件，以告诉 __make__ 命令需要怎么样的去编译和链接程序。在进入集成终端bash后，进入 __Makefile__ 当下的目录下并输入以下即可进行编译。

* 进入编译目录

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-06.png">![img](/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-06.png)</a>


* 执行清空命令 
make clean 清除编译后生成的文件，如.cfg、.bin、.map、.log文件
	> make clean

* 执行编译命令
	> make bk7231n

 此时此刻，如果编译通过将会在当前路径自动形成 __.out__ 的隐藏文件夹，在 __.out__ 文件夹里面有个 __all_2M.1220.bin的执行文件__，就代表着编译成功。




## __五、烧写程序__

以 __FC41D__ 模组为例，介绍如何使用烧写工具为其烧写程序的步骤。

__1、下载烧写工具__

进入<a :href="getUrl('menuCode=MODULE_DEVL')" target="_blank">**烧录工具下载**</a>，点击进入指定模块的相关下载页面，找到烧写工具并下载。
 
__2、PC连接设备__

PC通过 __MicroUSB__ 线连接模组的 __M_UART_USB__ 串口。

__3、烧写工具使用__

我们打开 __Beken Writer烧写软件__ ，将生成的执行文件 __all_2M.1220.bin__ 烧写进模组里面，操作步骤如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-07.png">![img](/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-07.png)</a>

__①、__ 选择连接模组的 __串口__ 与 __通讯波特率__ 。<br>
__②、__ 选择 __BK7231N__ 烧录对象。<br>
__③、__ 点击 __浏览(F5)__ 打开已生成的执行文件all_2M.1220.bin。<br>
__④、__ 点击 __烧录__ 按键及点击模组的 __复位__ 键复位模组。


<font color=#999AAA >注意：烧写过程中，要确保该端口不被占用。</font>

  
## __六、移联万物App蓝牙配网__

### **前提条件：**
下载移联万物App并注册个人账号。

### **操作步骤：**

1、打开移联万物 APP 并登录个人账户，在 App 首页，点击右上角“⊕”按钮。
<br>
<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-28.png">
<img src="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-28.png" style="width: 30%" /></a>



2、在弹出的窗口中选择“近场发现”，进入“搜索设备”界面并自动搜寻附近的设备， 搜索到设备显示在当前界面中。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-29.png">
<img src="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-29.png" style="width: 30%" /></a>


3、点击已搜索到的 WiFi 设备 QUEC_BLE_xxxx，进入“网络配置”界面。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-30.png">
<img src="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-30.png" style="width: 30%" /></a>


4、在“网络配置”界面输入当前环境下的 WiFi 名称和密码，配置 WiFi 设备网络（仅支持 WiFi 2.4 GHz频段）。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-31.png">
<img src="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-31.png" style="width: 30%" /></a>

5、在“绑定设备”界面，自动识别并输入 MAC 地址，手动输入设备名称，再点击“绑定设备”。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-32.png">
<img src="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-32.png" style="width: 30%" /></a>


6、至此添加智能香薰机设备成功，该设备显示在 App 首页“设备列表”中。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-33.png">
<img src="/deviceDevelop/wifi/speediness/resource/AT/Speediness-AT-33.png" style="width: 30%" /></a>


此时开发者中心可以看到此设备已经是在线状态。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-08.png">![img](/deviceDevelop/wifi/speediness/resource/QuecOpen/Speediness-QuecOpen-08.png)</a>

