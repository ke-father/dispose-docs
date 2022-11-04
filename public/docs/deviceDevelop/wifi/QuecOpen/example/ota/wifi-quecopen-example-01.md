# FOTA升级示例


## __场景描述__
QuecThing的FOTA固件升级，一般来说指的是把新的固件写入移远云模组芯片中，代替原有的固件的过程。升级方式均为将固件包上传到开发者中心，设备从开发者中心获取固件包实现远程升级，设备本身可以依此进行功能更新迭代。本章节指导用户通 过QuecOpen 接入方式进行FOTA固件升级。


## __涉及指令__

| 函数 | 说明  |
|:--------:| :-------------|
| Ql_iotCmdOtaRequest() | 向平台请求OTA升级计划 |
| Ql_iotCmdOtaAction()| 配置OTA升级行为 |


<font color=#999AAA >提示：详情请参考[OTA升级 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-05.md)。</font>

	
## __操作步骤__
### __一、登录开发者中心__
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。
### __二、创建项目__
项目是产品的集合，用户在注册平台账户后需新建项目方可进行产品创建或者设备管理等操作。
### __三、创建产品__
创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备WiFi联网能力的香薰机，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能香薰机”产品。	

### __四、OTA升级操作流程__

#### **1、添加版本包**

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-1.png">![img](/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-1.png)</a>
 

* __版本名称__ ：为此升级包输入一个名称。
* __组件类型__：支持模组固件升级与MCU固件升级。
	* 模组固件（FOTA），一般来说指的是把新的固件写入移远云模组芯片中 。
	* MCU固件（SOTA），一般来说指的是把新的软件包通过移远模组烧入进外挂MCU内。
* __版本包类型__：支持整包升级、差分包升级两种固件升级方式。
	* 差分包针对指定源版本的升级，一般为进行小规模功能或修复BUG升级。
	* 整包不指定源版本，所有设备均可升级。
* __源版本__：原固件包的版本，若选择差分包类型则会显示此项，整包则无。（开发者中心根据设备连接平台时上报的设备信息中的版本号判断是否与此参数一致，若一致则下发升级信息）。
* __目标版本__：固件包的新版本号。（设备升级完成后需要上报升级后的版本号，开发者中心检查设备上报的版本号是否与此参数一致，若一致则判断为升级成功）。
* __上传版本包__：上传的固件文件支持格式：
.bin,.zip,.rar,.pack,.mini_1,.mini_2,.py,.tar,.tar.gz,.s19,.bin_1,.bin_2等类型的文件，文件大小不能超过100MB，最多支持5个文件。
* __版本信息__：对本次上传的固件版本进行描述和记录。



#### **2、创建升级计划**

在升级设备前，需创建或选择一个已有的升级计划；计划包含了需要升级的设备、升级时间、升级的组件配置等信息。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-2.png">![img](/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-2.png)</a>

__i.基本信息填写__

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-3.png">![img](/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-3.png)</a>


* __计划名称__：为此升级计划输入一个名称。
* __升级产品__ ：选择对应需要升级设备的产品。
* __设置黑白名单__：若不设置黑、白名单，则该产品下所有设备升级。若同时设置黑、白名单，则黑名单优先级大于白名单优先级
	* __若只设置白名单__：只允许在白名单中的设备被升级。
	* __若只设置黑名单__：在黑名单中的设备不允许被升级。
* __升级方式__ ：
	* __静默升级__： 是指无需用户确认，应用端将自动完成升级，再次开启后为升级过的版本。
	* __用户确认升级__： 是指用户需主动进入设备控制界面，在设备详情页检查并确认固件升级。

__ii.制定升级策略__

在固件升级的过程中，难免会遇到因升级环境较差的情况导致升级失败，为了避免这种情况，从而需制定升级策略来减少升级失败概率。点击升级策略旁的 __自定义__ 按钮即可在弹窗配置升级策略。
<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-4.png">![img](/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-4.png)</a>



__iii.新增升级组件__

升级组件是用户自主创建，由一个或多个组件构成的集合体。用于创建升级计划时对需要升级的产品组件进行选择和规划，组件名称、组件标识需唯一。
<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-5.png">![img](/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-5.png)</a>

__iv.选择升级版本__

新增升级组件后，需选择需要升级的固件包。点击 __未选择__ 下的控件按钮即可选择需要升级的固件包版本。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-6.png">![img](/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-6.png)</a>

__v.激活升级任务__

完成以上的 __添加版本包__ 与 __创建升级计划__ 操作步骤后，点击左下角的 __激活计划__ 按钮即可激活此计划。开发者中心将会执行升级任务，下发所选的目标版本固件到升级范围内的目标设备中。

<font color=#999AAA >提示：升级任务激活后将不允许被删除。</font>

#### __3、设备初始化并连接云__
设备初始化并启动连接开发者中心，在开发者中心和设备间建立安全，稳定的通信并实现设备管理，OTA等操作。 

```c
/* 初始化QuecThing SDK */
Ql_iotInit();
/* 注册事件回调函数 */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* 启动云平台连接 */
Ql_iotConfigSetConnmode(1);
```
<font color=#999AAA >提示：MQTT协议设备连接上开发者中心后会自动在平台添加此设备。</font>


#### __4、OTA请求__
<font color=#999AAA >前提：OTA升级期间请确保设备已成功连接开发者中心。</font>
在开发者中心制定完成升级计划及激活后，设备需调用 __Ql_iotCmdOtaRequest()__ 函数请求OTA升级。<font color=#999AAA >提示：此API接口适用于2.9.2及以上的QuecThing版本。</font>
* 示例代码如下所示：
	```c
	/* ota 请求*/
	Ql_iotCmdOtaRequest(0);
	```


#### __5、确认升级__

发送OTA请求指令后，若该设备已包含在创建的升级计划产品内，则会自动触发 __Ql_iotEventCB__ 回调函数进入 __{7,10700}__ 事件中。事件内容包括组件标识+源版本+目标版本+最低电池电量+最低信号强度+固件包大小。若确认设备满足升级策略要求即可调用 __Ql_iotCmdOtaAction()__ 函数进行确认升级。

* 升级计划下发处理，事件上报如下所示。（该事件包含：组件标识、源版本、目标版本、OTA 升级最小电量、OTA 升级最小信号强度、OTA 升级需要磁盘空间）

	```c
	7, 10700,"<componentNo>","<sourceVersion>","<targetVersion>",<batteryLimit>,<minSignalIntensity>,<useSpace>,len
	```
	回调事件处理示例代码如下所示：
	```c
	void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
	{
	    switch (event)
	    {
	    	/* OTA事件回调 */
		    case QIOT_ATEVENT_TYPE_OTA:
		    {
		        switch (errcode)
		        {
			        /* 检测到有升级任务 */
			        case QIOT_OTA_TASK_NOTIFY:
			        {
			            char *words[100];
			            /* 字符串分解 */
			            quint32_t count = Quos_stringSplit((char *)value,HAL_STRLEN(value), words, sizeof(words) / sizeof(words[0]),",", FALSE);
			            printf("recv ota task\r\n");
			            if(count < 6)
			            {
			                break;
			            }
			            /* 需确认设备是否满足升级策略要求 */
			            printf("componentNo:%s,sourceVersion:%s,targetVersion:%s,batteryLimit:%s,minSignalIntensity:%s,minSignalIntensity:%s\r\n",
			                words[0],words[1],words[2],words[3],words[4],words[5]);
			            /* 设备开始确认升级*/
			            Ql_iotCmdOtaAction(1);
			            break;
			        }
		        }
	        }
		}
	}
	```


#### __6、设备升级流程反馈__

固件升级成功的流程分为 __开始下载__、__下载中__、__下载完成__、__更新中__、__更新完成__ 5个步骤。每更新一个步骤都会触发 __Ql_iotEventCB__ 回调函数进入相对应的事件中。FOTA升级流程反馈如下所示。

* 设备开始下载固件包，事件上报如下所示。（该事件包含：组件标识、固件包大小、固件包 MD5 值）

	```c
	void (*eventCB)(7,10701,"<componentNo>",<length>,"<MD5>");
	```
* 固件包下载中，事件上报如下所示。

	```c	
	void (*eventCB)(7,10702,NULL,0);
	```	
* 固件包下载完成，事件上报如下所示。（该事件包含：组件标识、固件包大小、固件包的当前块起始位置、当前文件块大小）
	```c
	void (*eventCB)(7,10703,"<componentNo>",<length>,"<startaddr>","<piece_length>");
	```
	回调事件处理示例代码如下所示：
	```c
	void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
	{
	    switch (event)
	    {
	    	/* OTA事件回调 */
		    case QIOT_ATEVENT_TYPE_OTA:
		    {
		        switch (errcode)
		        {
				    /* 下载完成 */
				    case QIOT_OTA_DOWNLOADED:
				    {
				        char *words[100];
				        quint32_t count = Quos_stringSplit((char *)value,HAL_STRLEN(value), words, sizeof(words) / sizeof(words[0]),",", FALSE);
				        printf("ota download complete\r\n");
				        if(count < 4)
				        {
				            break;
				        }
				        printf("componentNo:%s,length:%s,startaddr:%s,piece_length:%s\r\n",words[0],words[1],words[2],words[3]);
	
				    }
		        }
	        }
		}
	}
	```	
* 固件包更新中，事件上报如下所示。

	```c
	void (*eventCB)(7,10704,NULL,0);
	```	
* 更新固件成功，事件上报如下所示。（固件更新成功后，模组会自动重启）

	```c
	void (*eventCB)(7,10705,NULL,0);
	```	
	
设备升级完成后，因设备需重启，所以连接上开发者中心升级结果会随着连接上开发者中心自动上报。




### **五、升级监控**

在 __升级计划__  点击 __查看__ 按键即可查看所有产品中的升级计划。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-7.png">![img](/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-7.png)</a>



在计划列表中选择 __升级监控__ >__组件详情__ 进入升级日志，在升级日志中，可查看该升级任务所有设备当前的升级状态和状态详情。状态详情则包含：__开始__、__设备确认__、__下载中__、__升级中__、__成功/失败__。另外，在组件详情页签点击 __详情>>__ 按钮可在列表右侧弹窗查看升级日志详情，可以根据升级进度进行设备升级的取消等操作。升级监控如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-8.png">![img](/deviceDevelop/wifi/QuecOpen/resource/OTA/FOTA/03-1-8.png)</a>
