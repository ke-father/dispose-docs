
# 功能定义

进入产品开发环节，物模型数据格式产品开发第一步即定义物模型模板，功能定义分为 __标准功能__ 与 __自定义功能__。


* 标准功能即开发者中心已经对该品类进行过物模型定义。
* 自定义功能即可以根据当前产品特定使用场景进行的个性化功能定义，它不与产品品类相关，只在当前产品下产生作用。

<font color=#999AAA >提示：功能定义需创建产品时选择物模型数据格式，透传数据格式产品无需进行功能定义开发。</font>


## __一、添加自定义功能__


__产品开发__ >__"移远国际酒店"__ > __“智能香薰机”__ 单击 __功能定义__ 页签，最后单击 __编辑草稿__ > __添加自定义功能__


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-04.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-04.png)</a>

根据智能香薰机实际项目需求拟定物模型功能，预添加物模型如下表所示。

| 功能类型 | 功能名称 | 数据格式     |读写类型     |单位     |
|:--------:| :-------------:| :-------------:|:-------------:|:-------------:|
| 属性 | 精油当前容量 |FLOAT|只读|ML|
| 属性 | 定时上报频率 |INT|可读可写|秒|
| 属性 | 开关状态 |BOOL|只读| true：开启；<br>false：关闭；|
| 事件| 精油不足告警 |BOOL|--|true：告警； <br> false：告警恢复；|
| 服务| 设置工作模式 |ENUM|--|1：工作模式一；<br> 2：工作模式二；<br>3：工作模式三；<br>... |

<br/>

## __二、添加属性__ 

__1、添加“精油当前容量”、“定时上报频率”、“开关状态”的物模型属性__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-05.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-05.png)</a>

* __功能类型__：选择属性，属性一般是设备的运行状态，如精油当前容量等。
* __功能名称__：功能所具有的功能命名。
* __标识符__：可用于您的功能函数定义，产品下唯一。
* __数据类型__：根据不同属性的特性，选择对应类型，一共有9种数据类型方式：布尔型、整数型、单精度浮点型、双精度浮点型、枚举型、文本型、时间型、结构体型、数组型。
* __取值范围__：一个未知数的取值范围是从它的最大值到最小值的量。
* __步长__：属性下发的增量值。
* __单位__：计量事物的标准量的名称。
* __读写类型__：分为三种只读 （R）、只写（W）、可读可写（RW），根据不同属性的读写类型选择。例如精油当前容量是传感器读取的不可写，则选择只读类型。
* __描述__：对该功能进行描述，相当于备注功能，方便于自己或他人理解。
	
<br/>

__2、平台侧属性定义示例效果如图下所示。__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-06.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-06.png)</a>

<br/>

## __三、添加事件__ 

__1、添加“精油不足告警”物模型事件__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-07.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-07.png)</a>


* __功能类型__：选择事件，事件是指设备运行时，主动上报给云端的事件。
* __功能名称__：功能所具有的功能命名。
* __标识符__：可用于您的功能函数定义，产品下唯一。
* __事件类型__：信息、告警、故障。根据实际的业务场景，灵活的进行定义。
* __输出参数__：伴随着事件上报一同上报给云端，相当于函数的返回值，点击右侧 __+添加参数__ 即可添加（可选）。
	
<br>

__2、添加事件输出参数（可选）__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-08.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-08.png)</a>

__①、__ 在添加物模型事件时，点击输出参数右侧 __+添加参数__ 即可添加输出参数。<br>
__②、__ 点击 __创建属性或参数__ 即可在当前事件添加新的属性或参数，例如精油不足告警事件上报给云平台，同时也附带着该精油当前容量值。有利于云平台知道该告警事件的详情。

<br>

__3、平台侧事件定义示例效果如图下所示。__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-09.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-09.png)</a>


## __四、添加服务__ 

__1、添加设置工作模式物模型服务__
	
<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-10.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-10.png)</a>


* __功能类型__：选择服务，服务是指设备可被外部调用的能力或方法。
* __功能名称__：功能所具有的功能命名。
* __标识符__：可用于您的功能函数定义，产品下唯一。
* __调用方法__：目前只支持异步调用方法，云端无需等待终端返回结果。当多次调用服务时，则会按照先进先出的响应规则。
* __输入参数__：伴随着服务下发一同下发给终端，相当于函数的传参，点击右侧 __+添加参数__ 即可添加（可选）。
* __输出参数__：伴随着服务上报一同上报给云平台，相当于函数的返回值，点击右侧 __+添加参数__ 即可添加（可选）。
		
<br/>
	
__2、添加服务输出参数（可选）__

<font color=#999AAA >提示：属性表示创建的输出参数是一个属性的功能类型且该属性可以被其他事件或服务所引用；参数则表示创建的输出参数是一个参数类型的属性，不可以被其他事件或服务所引用。</font>

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-11.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-11.png)</a>


__创建属性或参数操作步骤：__

__①、__ 添加该事件的输出参数，点击右侧 __+添加参数__ 即可添加。<br>
__②、__ 点击 __创建属性或参数__ 即可在当前服务添加新的属性或参数，例如输入参数传参值会跟随该服务一并下发到终端。
	
<br/>

__3、平台侧服务定义示例效果如图下所示。__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-12.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-12.png)</a>

## __五、发布应用__ 
添加好物模型功能后，点击右下角的 __发布应用__ 按钮即可将添加的物模型应用到设备开发。
<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-13.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-13.png)</a>


# 设备开发
完成功能定义后，点击 __“下一步：设备开发”__，或直接点击进度栏上 __设备开发__ ，进入设备开发指引页。选择相对应的 __接入方案__ 与 __使用模组型号__ 即可显示文档及资源供您查看下载。
<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-14.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/platform/platform-14.png)</a>
