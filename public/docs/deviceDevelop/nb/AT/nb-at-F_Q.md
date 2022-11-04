
# 常见问题

## <font color=#A52A2A  >__快速接入开发者中心常见问题__</font>
> __1. 如何确认设备网络已具备连接上开发者中心条件？__ <br>
> 答：向模组发送 __AT+CGATT?__ 指令查询网络状态，若响应值为 __1__ 则确保模组已具备连接上开发者中心的条件。  

> __2.设备初次连接开发者中心需要做什么配置？__ <br>
> 答：初次连接开发者中心前需配置产品信息ProductKey(简称PK)、ProductSecret(简称PS)。

> __3.ProductKey和ProductSecret是什么？从哪里获取ProductKey和ProductSecret？__ <br>
> 答：ProductKey(简称PK)和ProductSecret(简称PS)分别是产品号和产品密钥，是产品的唯一标识，产品下所有设备都使用同一个PK和PS。在[开发者中心](https://iot.quectelcn.com/login?redirect=%2Fproject%2Flist)
> 创建产品时，PK和PS会自动下发到平台注册时所使用的邮箱。  

> __4.设备应该如何连接开发者中心？__ <br>
> 答：<br>
> 1、向模组发送 __AT+QIOTCFG="productinfo"[,\<pk\>,\<ps\>]__ 指令配置PK、PS。 <br>
> 2、向模组发送指令 __AT+QIOTREG=1__ 连接平台。<br>


> __5. 事件回调是什么？__ <br>
> 答：事件回调是基于监听的事件处理机制，例如开发者中心下发物模型数据，在模组收到数据后会向MCU打印该事件，您可根据回调事件进行数据处理。

> __6.如何确定当前设备已连接开发者中心？__ <br>
> 答：向模组发送 __AT+QIOTSTATE?__ 指令查询当前设备与平台之间的连接状态，若响应值为 __8__ 则确保模组已订阅上开发者中心并且可进行数据业务交互。

> __7. 为什么进行产品配置时会返回ERROR？__ <br>
> 答：
> 可能性一：该 QuecThing 版本不支持该配置指令，可发送 __AT+QIOTCFG=?__ 指令查看该配置是否支持。
> 原因二：配置指令不支持在连接开发者中心后进行设置，故需要配置时，请先断开与开发者中心的连接。<br>


> __8.为什么输入AT指令后无响应或返回ERROR？__ <br>
> 答：<br>
> 当前设备可能不支持此AT指令，请使用 __AT+QIOTINFO?__ 查看sdkversion的版本号，根据该版本号查看对应的AT使用文档进行操作使用。<br>


> __9.设备连接平台时，手动注册与自动注册的区别？__ <br>
> 答：<br>
>     手动注册：设备选择手动注册连接平台时，设备每次连接平台时需要发送指令连接平台。 <br>
>     自动注册：设备选择自动注册连接平台时，设备每次上电后会自动连接平台，不需要发送连接平台指令。 <br>  

> __10.设备连接开发者中心之前，我需要配置服务器信息吗？__ <br>
> 答：模组已有默认服务器信息，若无特殊需求则可无需配置。<br>

> __11.设备生命周期(lifetime)是什么？设备连接开发者中心之前我需要设置吗？__ <br>
> 答：设备生命周期(lifetime)，指的是协议内部的心跳时间，一般没有特殊要求不需要设置，使用默认值(86400s)即可。<br>

> __12.下行数据缓存模式是什么？设备连接开发者中心之前我需要设置吗？__ <br>
> 答：开启缓存模式时，开发者中心下行的数据会缓存在模组内部，需要MCU发送读取指令将缓存数据读取出来；<br>
> 关闭缓存模式时，开发者中心下行数据会直接打印到串口，模组不会进行缓存；<br>
> 您可以根据自己实际需求决定是否需要设置，若不配置默认为非缓存模式。<br>

> __13. PDP上下文ID(contextID)是什么？设备连接开发者中心之前我需要设置吗？__ <br>
> 答：contextID是当模组除了使用上云功能以外，还需要使用模组进行其他传输业务时才需要设置的，若无特殊需求则可不需要进行配置。<br>

> __14.设备与平台之间的连接加密模式是什么？设备连接开发者中心之前我需要设置吗？__ <br>
> 答：数据链路的一种加密模式，可选项，默认关闭。<br>

> __15.什么是物模型数据格式？设备连接开发者中心之前我需要设置吗？__ <br>
> 答：MCU与模组直接进行物模型数据传输时，可以选择TTLV或者JSON数据格式，两种格式区别如下：<br>
> * JSON格式是一种轻量级的数据交换格式，可直观查看数据内容方便阅读理解。<br>
> * TTLV格式是将数据压缩为较小的体积，但需运用脚本或是Code调用TTLV解析库解读。相比JSON格式数据量更小，对于空间的利用率高，不允许冗余字段的产生。<br>
> 您可以根据实际需求决定是否使用TTLV格式还是JSON格式，默认为TTLV格式。<br>

> __16.设备连接平台之前，我需要配置 DeviceKey 和 DeviceSecret 吗？__ <br>
> 答：__DeviceKey__ 一般不需要特别设置，在不设置的情况下，模组默认使用IMEI（蜂窝模组）或者MAC地址（WIFI模组）作为 __DeviceKey__。 __DeviceSecret__ 不需要配置，模组第一次连接平台时，平台会生成 __DeviceSecret__ 并下发给模组（此步骤用户无感知）。
 
> __17.上行消息的\<txID>是什么？设备连接开发者中心之前我需要设置吗？__ <br>
> 答：配置了\<txID>时，上行物模型数据，会收到平台返回上行消息的\<txID>(当Qos=1或者Qos=2时)，一般没有特殊要求不需要设置。

> __18.设备如何在开发者中心认证？如何激活？__ <br>
> 答：设备在初次连接上开发者中心时，会自动认证。设备上行一条数据或平台下行一条数据后就会被激活。<br>

> __19.设备每次上电后都需要配置一下产品ProductKey(简称PK)、ProductSecret(简称PS)吗？__ <br>
> 答：MCU发送配置指令到模组后，模组会记录配置信息在内部，设备下次启动时配置信息仍然有效，不需要重复配置。<br>

> __20.为什么设备连接平台时失败，事件回调码打印 "1,10422" ？__ <br>
> 答：出现此等情况，一般是切换产品导致模组保存的DS与产品DS对应不上失败，或者是烧录固件时覆盖了配置文件导致模组保存的DS清除了。
> 需要在平台重置一下DeviceSecret，设备再重新上线即可。<br>

## <font color=#A52A2A  >__数据业务常见问题__</font>
> __1. 数据格式有几种？__ <br>
> 答：数据格式有两种，分别为物模型与透传。

> __2. 物模型是什么？__ <br>
> 答：物模型是指设备在开发者中心的数字化表示，并在云端构建的实体数据模型，并分为属性、服务和事件三个维度。

> __3.透传数据格式是什么？__ <br>
> 答：透传数据格式是指设备上报透传数据到开发者中心，云平台不做任何数据解析。

> __4. RAI是什么？__ <br>
> 答：RAI 标记用于指示核心网释放与模块的 RRC 连接。 
RAI为0时，无指示。
RAI为1时，指示该包上行数据后不期望有进一步的上行或者下行数据，核心网可立即释放。
RAI为2时，指示该包上行数据后期望有对应回复的单个下行数据包，核心网在下发后立即释放。

> __5. NON数据和CON数据的差别是什么？__ <br>
> 答：NON数据表示发送的该数据不需要服务器ACK，CON表示发送数据需要服务器ACK。模组在发送CON数据并收到服务器ACK后，会通过URC通知到应用层。

> __6. PkgID是什么？__ <br>
> 答：PkgID是上下行数据包的ID。例如开发者在连续多次发送上述类型数据时，可能无法判别是哪个数据成功或失败，所以在此增加发送时先返回PkgID，在成功发送到平台时再通知给开发者该PkgID，开发者可以根据两次的PkgID来判别是否成功。

> __7. 如何发送物模型到开发者中心？__ <br>
> 答：MCU向模组发送 __AT+QIOTMODELTD__ 指令即可向开发者中心发送物模型数据。

> __8. 如何接收物模型服务？__ <br>
> 答：若在缓存模式下，当开发者中心下发服务时，MCU可向模组发送 __AT+QIOTMODELRD__ 指令查询数据。若非缓存模式下模组收到直接向MCU打印回调事件与下行数据。

> __9. 什么是缓存与非缓存模式？__ <br>
> 答：MCU读取数据可分为两种模组，一种是缓存另一种是非缓存。
> * 缓存是指当开发者中心下发数据时，模组收到后会主动向MCU打印回调事件并把数据储存到模组内存里，MCU需主动发送  __AT+QIOTMODELRD__ 指令读取该下行数据。
 > * 非缓存是指当开发者中心下发数据时，模组收到后会主动向MCU打印回调事件与下行数据。

> __10. 物模型数据有什么数据格式？__ <br>
> 答：物模型数据分为JSON格式与TTLV格式。
> * JSON格式是一种轻量级的数据交换格式，可直观查看数据内容方便阅读理解。
> * TTLV格式是将数据压缩为较小的体积，但需运用脚本或是Code调用TTLV解析库解读。相比JSON格式数据量更小，对于空间的利用率高，不允许冗余字段的产生。

> __11.AT指令中直接发送模式和透传发送模式的区别？__ <br>
> 答：
> * 直接发送模式: 支持任意字符串语句。<br>
> * 透传发送模式  支持任意字节流语句。<br>  

> __12.设备上报物模型数据时，一次性可以上报的数据长度最大多少字节？__ <br>
> 答：设备一次性可上报的最大数据长度因模组型号而异。

> __13.为什么发送物模型数据失败，返回ERROR？__ <br>
> 答：<br>
> 原因一：当前设备还未连上开发者中心，请使用 __AT+QIOTSTATE?__ 指令查询当前设备与平台之间的连接状态。<br>
> 原因二：当前设备所发送的数据格式不正确，请检查发送的数据长度以及数据格式中是否有多余空格。<br>
> 原因三：设备上报的物模型数据长度，超过模组一次性可发送的最大物模型数据长度。<br>

> __14.为什么发送读取物模型数据指令失败，返回ERROR？__ <br>
> 答：当前设备未配置 __开启缓存模式__ ，可发送 __AT+QIOTCFG="buffer",1__ 开启缓存模式。 <br>

> __15.设备上报事件时，一定要携带属性参数吗？__ <br>
> 答：设备上报事件时，可以携带不带参数。 <br>

> __16.设备上报物模型数据时，可以同时上报属性和事件吗？__ <br>
> 答：可以，设备上报物模型数据可以一次性将多条属性和事件同时上报。<br>

> __17.设备开启缓存模式时，最多可以缓存多少条数据？__ <br>
> 答：目前模组缓存模式最多可缓存 __10__ 条数据，若缓存数据未及时读取，会被新下发的数据覆盖。 <br>

> __18.设备配置物模型数据格式为JSON格式后，模组底层发送到开发者中心的数据也是JSON格式吗？__ <br>
> 答：配置物模型数据为JSON格式后，只是MCU与模组之间的数据格式是JSON格式，模组底层发送至开发者中心的数据格式仍是TTLV格式。

## <font color=#A52A2A  >__OTA升级常见问题__</font>
> __1. OTA是什么意思？__ <br>
> 答：OTA是指在线网络升级。可将升级固件包上传到开发者中心并创建好升级计划，当设备环境满足升级策略后，MCU需主动触发平台计划与确认升级。

> __2. DMP OTA分为几种，分别是什么？__ <br>
> 答：OTA分为两种，分别是FOTA（模组固件升级）、SOTA（MCU固件升级）。

> __3. 我该如何选择OTA？__ <br>
> 答：根据项目需求来定，若是给MCU升级程序则选择SOTA，若是给模组升级则则选择FOTA。

> __4. 开发者中心  FOTA 操作步骤？__ <br>
> 答：<br>
> 1、在开发者中心创建升级模型、升级版本及升级计划。 <br>
> 2、MCU主动向模组发送 __AT+QIOTOTAREQ__ 指令请求 OTA 升级计划，若设备升级环境满足升级策略即可确认升级。 <br>
> 3、MCU主动向模组发送 __AT+QIOTUPDATE=1__ 指令确认升级。 <br>
> 4、模组自动接收升级包后自动进入升级状态。 <br>

> __5. 开发者中心  SOTA 操作步骤？__ <br>
> 答：<br>
> 1、MCU主动向模组发送 __AT+QIOTMCUVER__ 指令配置 MCU 版本号。 <br>
> 2、在开发者中心创建升级模型、升级版本及升级计划。 <br>
> 3、MCU主动向模组发送 __AT+QIOTOTAREQ__ 指令请求 OTA 升级计划，若设备升级环境满足升级策略即可确认升级。 <br>
> 4、MCU主动向模组发送 __AT+QIOTUPDATE=1__ 指令确认升级。 <br>
> 5、MCU主动向模组发送 __AT+QIOTOTARD__ 指令分片读取SOTA 数据。 <br>
> 6、MCU接收完整升级包数据后则进入更新状态。 <br>
> 7、MCU升级完毕后设置新的MCU版本号并上传至开发者中心。 <br>

 > __6.OTA为什么触发不了？__ <br>
> 答：<br>
> 原因一：当前设备未连接开发者中心。<br>
> 原因二：当前设备的属性不满足计划的要求，如用户剩余空间不足、当前信号弱、版本不匹配。<br>
> 原因三：用户所创建的计划不包含该设备。<br>

> __7.OTA为什么会失败？__ <br>
> 答：<br>
> 原因一：请确保当前SDK版本是否符合相关的AT指令，若2.9.2版本前的SDK使用2.9.2版本及之后的AT指令将会衍生不可预知的错误。<br>
> 原因二：若设备处于OTA升级途中，出现设备断电断网获取断开开发者中心连接直至超过计划的生存周期则认为失败。<br>
> 原因三：若设备处于OTA升级途中，出现网络波动并持续一段时间后，设备将认为本次升级失败，并自动重新触发升级，若连续5次均失败，则认为设备于此计划升级中失败。<br>
> 原因四：若设备OTA下载完成更新失败，有可能为更新过程中损坏了升级文件，可关注对存储升级文件区域的操作。<br>
<br>

> __8.OTA请求时，发送AT+QIOTOTAREQ指令和AT+QIOTOTAREQ=1指令有什么区别？__ <br>
> 答：
> * 使用 __AT+QIOTOTAREQ__ 指令请求OTA时，平台下发计划时不会携带固件的SHA256校验信息；
> * 使用 __AT+QIOTOTAREQ=1__ 指令请求OTA时，平台下发升级计划时会携带固件包的SHA256校验信息；<br>
> 您可以根据自己的需求来决定是否需要使用固件的SHA256校验信息。<br>

> __9.为什么SOTA升级时，发送OTA请求指令后，无法收到升级计划？__ <br>
> 答：<br>
>    原因一：平台未创建升级计划或者计划未激活。<br>
>    原因二：模组未设置MCU版本号，需要发送 __AT+QIOTMCUVER__ 指令设置MCU版本号。 <br>

> __10.为什么SOTA升级时，模组不能一次性下载完升级包？__ <br>
> 答：模组空闲内存不够一次性存放升级包，所以会导致分包下载，模组空闲内存大小因模组型号而异。 <br>  

> __11.为什么SOTA升级时，模组不会自动下载下一块固件数据？__ <br>
> 答：SOTA升级从开发者中心分块下载固件时，在下载完第一块后，需要MCU发送指令 __AT+QIOTUPDATE=2__ 才会下载下一块数据。

> __12.设备端如何判断设备OTA是否成功？__ <br>
> 答：当设备OTA升级成功时，设备端会打印事件响应码：__7,10705__ ，或在开发者中心升级计划界面查看计划升级成功。<br>

## <font color=#A52A2A  >__设备定位常见问题__</font>
> __1. 设备定位有几种方式？__ <br>
> 答：QuecThing 设备定位有两种，分别是LBS基站定位与GNSS定位。

> __2. LBS基站定位特点？__ <br>
> 答：LBS基站定位要求覆盖率高室内室外都有信号，定位精度较低，无需外置模组。

> __3.GNSS定位特点？__ <br>
> 答：GNSS定位速度快，全天候作业，不需要考虑目视通视条件，可以远距离大范围测量。但受天顶方向遮盖影响极大，在室内、隧道内精度下降。

> __4. LBS基站定位该如何使用？__ <br>
> 答：QuecThing已包含LBS基站定位组件，只需使用 __AT+QIOTLOCIN__ 指令即可获取/上报设备内置定位功能的定位数据。

> __5. GNSS定位该如何使用？__ <br>
> 答：GNSS定位需要外置GNSS模组，需将GNSS模组读取的坐标系读取到MCU，MCU再使用 __AT+QIOTLOCEXT__ 指令上报设备外置定位功能的定位数据。

> __6.我该选择哪种定位方式？__ <br>
> 答：<br>
> 若对设备的定位精度要求不高时，可选择使用LBS定位；<br>
> 若对设备的定位精度要求较高，可选择使用GNSS定位；<br>

> __7.如何判断设备定位数据上报成功？__ <br>
> 答：当设备上报定位数据成功时，模组会打印事件回调码：__+QIOTEVT: 4,10220__ 。 <br>

> __8.为什么发送定位数据失败，返回ERROR？__ <br>
> 答：<br>
> 原因一：当前设备还未连接上平台，请在设备连接平台之后再上报定位数据。 <br>
> 原因二：当前设备的固件不支持上报定位数据的指令，请测试:
> * 发送 __AT+QIOTLOCIN=?__ 查询固件是否支持上报内置定位。
> * 发送 __AT+QIOTLOCEXT=?__ 查看固件是否支持上报外置定位。 <br>  

 ## <font color=#A52A2A  >__其他常见问题__</font>
> __1.使用Qflash烧录固件时，烧录失败？__ <br>
> 答：<br>
> 原因一：模组驱动没有安装正确。<br>
> 原图二：固件的存放路径下有中文或者空格。<br>

> __2.为什么设备上报告警事件，移联万物APP没有弹窗提醒？__ <br>
> 答：设备管理平台没有配置消息通知规则，在设备管理平台“产品开发”->“项目”->“产品”->“功能定义”->“消息规则”配置一下即可。  

> __3.开发者中心下行数据时，MCU仿真工具提示无法匹配数据？__ <br>
> 答：MCU仿真工具没有导入物模型，导致工具无法解析平台下发的物模型，需要在工具中导入物模型文件。 <br> 

