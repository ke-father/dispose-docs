# SOTA示例
## **场景描述**
QuecThing的SOTA升级，一般来说指的是把新的固件写入外挂MCU中，代替原有的固件的过程。升级方式均为将固件包上传到开发者中心，设备从开发者中心获取固件包实现远程升级，最后MCU 接收升级包并写入本地闪存，实现固件的升级。本章节指导用户通过AT指令进行SOTA固件升级。


## **涉及指令**

| 指令名称| 功能描述    |
|:--------:| :-------------:|
| AT+QIOTOTAREQ  | 请求OTA升级计划 |
| AT+QIOTUPDATE | 配置 OTA 升级行为 |
| AT+QIOTOTARD | 分片读取 SOTA 数据 |
| AT+QIOTMCUVER   | 配置 MCU 版本号 |

<font color=#999AAA >提示：OTA升级相关命令详情请参考[这里](/deviceDevelop/nb/AT/API/nb-at-05.md)，产品配置相关命令详情请参考[这里](/deviceDevelop/nb/AT/API/nb-at-03.md)。</font>


## **操作步骤**
### **一、登录开发者中心**
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。
### **二、创建项目**
项目是设备的集合，新用户在注册登录后默认是没有项目的，需进行项目的创建流程后才可进行项目维度的相关操作。
### **三、创建产品**
创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备NB-IOT联网能力的香薰机，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能香薰机”产品。

### **四、OTA升级操作流程**
#### **1、添加版本包**
<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/03-2-1.png">![img](/deviceDevelop/nb/AT/resource/03-2-1.png)</a>


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

<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/03-1-2.png">![img](/deviceDevelop/nb/AT/resource/03-1-2.png)</a>

__i.基本信息填写__

<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/03-2-3.png">![img](/deviceDevelop/nb/AT/resource/03-2-3.png)</a>


* __项目名称__：升级计划的项目名称（暂不可选）
* __产品名称__ ：选择对应需要升级设备的产品。
* __计划名称__：此计划名称。
* __选择模型__：选择对应需要升级设备的产品模型。
* __设置黑白名单__：若不设置黑、白名单，则该产品下所有设备升级。若同时设置黑、白名单，则黑名单优先级大于白名单优先级。
	* __若只设置白名单__：只允许在白名单中的设备被升级。
	* __若只设置黑名单__：在黑名单中的设备不允许被升级。

__ii.制定升级策略__

在固件升级的过程中，难免会遇到因升级环境较差的情况导致升级失败，为了避免这种情况，从而需制定升级策略来减少升级失败概率。点击升级策略旁的 __自定义__ 框架即可在弹窗配置升级策略。
<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/03-2-4.png">![img](/deviceDevelop/nb/AT/resource/03-2-4.png)</a>


__iii.新增升级组件__

升级组件是用户自主创建，由一个或多个组件构成的集合体。用于创建升级计划时对需要升级的产品组件进行选择和规划，组件名称、组件标识需唯一。
<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/03-2-5.png">![img](/deviceDevelop/nb/AT/resource/03-2-5.png)</a>


__iv.选择OTA升级版本__

在创建升级计划中，选择升级模型后会自动弹出该模型的组件及版本，我们则需选择需要升级的MCU组件包，若不需固件升级则可以暂且关闭固件升级按钮。点击 __选择版本__ 下的控件按钮即可选择需要升级的MCU组件包版本。
<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/03-2-6.png">![img](/deviceDevelop/nb/AT/resource/03-2-6.png)</a>



__v.激活升级任务__

完成以上的 __添加版本包__ 与 __创建升级计划__ 操作步骤后，点击左下角的 __激活计划__ 按钮即可激活此计划。开发者中心将会执行升级任务，下发所选的目标版本固件到升级范围内的目标设备中。

<font color=#999AAA >提示：升级任务激活后将不允许被删除。</font>

#### **3、设备连接**
 
MCU可通过 __AT+QIOTREG=\<reg_mode\>__ 指令配置平台连接模式，连接开发者中心前需配置PK/PS，若未配置则返回ERROR。发送指令后，当模组响应如以下返回值，则代表设备已成功与开发者中心连接。 

```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

[RX]OK

[RX]+QIOTEVT: 2,10200

[RX]+QIOTEVT: 3,10200
```

#### **4、设置MCU版本号**
```c
[TX]AT+QIOTMCUVER="STM32","V1_0"

[RX]OK
```

#### **5、OTA请求**
制定完成升级计划及激活后，设备需发送 __AT+QIOTOTAREQ__ 指令请求SOTA升级。发送SOTA请求指令后，若该设备已包含在创建的升级计划产品内，则主动打印事件，事件包括组件标识+源版本+目标版本+最低电池电量+最低信号强度+固件包大小。若确认设备满足升级策略要求即可进行下一步确认升级。

```c
[TX]AT+QIOTOTAREQ=1

[RX]OK

[RX]+QIOTEVT: 7,10700,"STM32","","V2_0",30,-113,19656
[RX]
```

#### **6、设备确认升级**
发送 __AT+QIOTUPDATE__ 指令确认是否升级。

```c
[TX]AT+QIOTUPDATE=1

[RX]AT+QIOTUPDATE=1

OK
```

 <font color=#999AAA >提示：设备确认升级后，可在软件升级任务列表中查看批量任务的执行结果。单击对应任务 __查看__ 按钮，可以在 __执行详情__ 界面查看每个设备的升级结果。</font>


#### **7、设备升级流程反馈**

固件升级成功的流程分为 __开始下载__、__下载中__、__下载完成__、__更新中__、__更新完成__ 5个步骤。其中当升级状态为“更新中”，状态详情则显示百分比进度。SOTA升级流程反馈如下所示。

* 设备开始下载固件包回调事件

	```c
	[RX]+QIOTEVT: 7,10701,"STM32",19656,"95cbdeb4faeda4322ad9b65eb731ed2b",4022793929,"2bb534d576fb307f049a149787afab2382ebb8605467acfc2c05a2e67677e094"
	```
* 固件包下载中回调事件

	```c
	[RX]+QIOTEVT: 7,10702
	```	
* 固件包下载完成回调事件

	```c
	[RX]+QIOTEVT: 7,10703,"STM32",19656,0,19656
	```	
* MCU固件更新中

	```c
	[RX]+QIOTEVT: 7,10704
	
	[TX]AT+QIOTOTARD=1,1024
	
	[RX]+QIOTOTARD: 1,1024
	
	00000064
	65746e45
	52412072
	4d545f48
	...
	
	
	[RX]OK


	[RX]+QIOTEVT: 7,10704
	
	[TX]AT+QIOTOTARD=1024,1024
	
	[RX]+QIOTOTARD: 1024,1024
	
	f9e2b03b 
	d7013a95 
	279a69b3 
	2398e546
	...

	[RX]OK
	
	[TX]AT+QIOTOTARD=19656,1024
	
	[RX]+QIOTOTARD: 19656,305
	
	6c512072
	6365535f
	54646e6f
	6369546f
	...
	
	OK
	```	
* MCU 接收升级包并写入本地闪存，实现固件的升级

* 设置新的MCU版本（设备升级完成后，需MCU主动设置新的MCU版本号）

	```c
	[TX]AT+QIOTMCUVER="STM32","V2_0"
	
	[RX]OK
	```		

* 更新固件成功回调事件

	```c
	[RX]+QIOTEVT: 7,10705

	+QIND: "FOTA","END",0
	```	

### **五、升级监控**

在 __升级计划__  点击 __查看__ 按键即可查看所有产品中的升级计划。

<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/03-2-7.png">![img](/deviceDevelop/nb/AT/resource/03-2-7.png)</a>

在计划列表中选择 __升级监控__ >__组件详情__ 进入升级日志，在升级日志中，可查看该升级任务所有设备当前的升级状态和状态详情。状态详情则包含：__开始__、__设备确认__、__下载中__、__升级中__、__成功/失败__。另外，在组件详情页签点击 __详情>>__ 按钮可在列表右侧弹窗查看升级日志详情，可以根据升级进度进行设备升级的取消等操作。升级监控如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/nb/AT/resource/03-2-8.png">![img](/deviceDevelop/nb/AT/resource/03-2-8.png)</a>




