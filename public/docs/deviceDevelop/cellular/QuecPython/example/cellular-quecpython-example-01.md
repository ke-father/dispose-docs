# 产品配置及快速上云示例
## __场景描述__
本章节指导用户通过 QuecPython 接入方案配置产品信息及快速连接上开发者中心。

## __涉及API接口__

| 函数 | 说明  |
|:--------:| :-------------|
|quecIot.init()|初始化 QuecThing 功能 |
|quecIot.setConnmode()|初始化配置并启动QuecThing功能 |
|quecIot.getConnmode()|获取设备当前配置的平台连接模式 |
|quecIot.getWorkState()|查询当前设备与平台之间的连接状态 |
|quecIot.setEventCB() |设置平台事件回调处理函数 |
|quecIot.setProductinfo()|配置产品信息 |


<font color=#999AAA >提示：详情请参考[产品配置 相关接口](/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-02.md)。</font>


## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。
#### __二、创建项目__
项目是产品的集合，用户在注册平台账户后需新建项目方可进行产品创建或者设备管理等操作。

<a data-fancybox title="img" href="/deviceDevelop/cellular/QuecPython/resource/Connect_cloud/Example-01.png">![img](/deviceDevelop/cellular/QuecPython/resource/Connect_cloud/Example-01.png)</a>

#### __三、创建产品__
创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备LTE联网能力的香薰机，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能香薰机”产品。

<a data-fancybox title="img" href="/deviceDevelop/cellular/QuecPython/resource/Connect_cloud/Example-02.png">![img](/deviceDevelop/cellular/QuecPython/resource/Connect_cloud/Example-02.png)</a>

<font color=#999AAA >提示：PK、PS码需用户保存好，设备的连接与产品删除等将会需要使用到该PK、PS。</font>

## __设备侧操作步骤__
### __一、初始化配置__
开发前您还需要完成工程的QuecThing 组件的初始化，需要在使用联网服务前调用。初始化指的是在模组上电后，首先声明 quecIot 模块，并执行初始化接口。
```py
import quecIot
""" 初始化 qucsdk """
quecIot.init()
```
### __二、事件回调__

事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务，当设备触发了某件事件时，交给监听器去处理，开发者只需要在事件函数中的相应事件下作具体处理即可。

```py
# ''' 注册事件回调函数 '''
quecIot.setEventCB(self.eventCB)
```
### __三、配置产品信息（初次连接需配置）__

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际情况进行适配。设备发送引导认证操作时，开发者中心对其携带的ProductKey、ProductSecret进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与开发者中心建立连接。
```py
# ''' 配置产品信息'''
quecIot.setProductinfo("pxxxxn", "MWZxxxxxxxxxxDlt")
```


### __四、连接开发者中心__
模组启动连接开发者中心，在开发者中心和设备间建立安全，稳定的通信并实现设备管理，监测，控制等操作。
```py
# ''' 启动云平台连接 '''
quecIot.setConnmode(1)
```

### __五、查询当前连接状态__

为了进一步确认设备是否正常连接开发者中心，可通过调用 quecIot.getWorkState() 函数查看其返回值判断状态，若已确定设备与平台建立链接并可进行数据交互业务。

```py
State = quecIot.getWorkState()
```

<br>

连接状态说明若下表所示。

| 响应数值 | 说明   |
|:--------:| :-----------|
|0| 未初始化|
|1| 已初始化|
|2| 正在认证|
|3| 认证成功|
|4| 认证失败|
|5| 正在注册|
|6| 注册成功，等待订阅|
|7| 注册失败|
|8| 已订阅，数据可发送|
|9| 订阅失败|
|10| 正在注销|
|11|  注销成功|
|12|  注销失败|

      
 
