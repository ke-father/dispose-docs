# 快速接入云示例

## __场景描述__

网关的能力是转换不同设备间的通讯协议，可以让不具有联网能力的子设备通过网关连接上云端。如果我们想要达到该目的，首先需连接网关到平台，再连接子设备至网关，由此实现子设备连接到平台。本章节指导用户通过 QuecPython 接入方案使得子设备通过网关连接上开发者中心。



## __涉及指令__

| 函数 | 说明  |
|:--------:| :-------------:|
|quecIot.subDevSetEventCB() |	注册子设备与网关交互事件回调处理函数|
|quecIot.subDevConn()	|连接子设备至网关|
|quecIot.subDevDisconn()	|断开子设备与网关之间的连接|
|quecIot.subDevDeauth()	|注销子设备|
|quecIot.subDevPassTransSend()|	发送子设备透传数据至平台|
|quecIot.subDevPassTransSend_ex()|	发送子设备透传数据至平台|
|quecIot.subDevPhymodelReport()	|发送子设备物模型数据至平台|
|quecIot.subDevPhymodelReport_ex()	|发送子设备物模型数据至平台|
|quecIot.subDevPhymodelAck()|	回复平台向子设备请求的物模型数据|
|quecIot.subDevHTB()|刷新子设备与网关最后进行交互的时间|

<font color=#999AAA >提示：详情请参考[网关子设备 API接口概览](/deviceDevelop/subDevice/d_c_sub/QuecPython/sub-quecpython-api-01.md)。</font>

	
## __操作步骤__
### __一、登录开发者中心__
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。
### __二、创建项目__
项目是产品的集合，用户在注册平台账户后需新建项目方可进行产品创建或者设备管理等操作。
### __三、创建产品__
#### __1、创建网关产品__
创建网关产品与创建蜂窝产品类似，在设备类型选项选择 __网关设备__ 与相匹配的选项即可。

<a data-fancybox title="img" href="/deviceDevelop/subDevice/Example-01.png">![img](/deviceDevelop/subDevice/Example-01.png)</a>


#### __2、创建网关子设备产品__

<a data-fancybox title="img" href="/deviceDevelop/subDevice/Example-02.png">![img](/deviceDevelop/subDevice/Example-02.png)</a>


* __设备类型__：单品设备指的是可以直接接入网络；网关设备是可帮助子设备连接云端的设备；网关子设备是依赖网关连接上网络的设备。
* __是否启用云端访问控制__：表示子设备通过网关代理转发数据连到云端时是否校验之间的拓扑关系。
* __授权网关权限__：平台对网关设备授权。 
	*  __仅代理上网__：网关仅代理子设备上网及转发数据到开发者中心，不在开发者中心上记录子设备任何的行为。
	*  __产品整合__：网关代理转发子设备的数据，并在开发者中心上记录子设备的行为数据。
* __是否允许子设备动态切换网关__：是否允许子设备动态切换网关：表示子设备挂载在网关上后，是否允许子设备动态切换所挂载的网关。一旦创建后，不可变更。

### __四、网关设备配置__

__1、初始化__

开发前您还需要完成工程的 QuecThing SDK的初始化，需要在使用联网服务前调用。初始化指的是在模组上电后，完成模组基本的配置，达到可以配网连接云端。
```py
""" 初始化QuecThing SDK """
quecIot.init()
```
__2、网关事件回调函数注册__

事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务，当网关设备触发了某件事件时，交给监听器去处理，开发者只需要在事件回调函数内相应事件下作具体处理即可。

```py
""" 注册事件回调函数 """
quecIot.setEventCB(self.eventCB)
```

__3、配置产品信息（初次连接需配置）__

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际的项目需求进行适配。网关设备发送引导认证操作时，开发者中心对其携带的ProductKey、ProductSecret进行认证，若认证通过则建立连接并下发该设备接入所需信息。

```py
""" 配置产品信息"""
quecIot.setProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh")
```


__4、连接开发者中心__

模组启动连接开发者中心，在开发者中心和设备间建立安全，稳定的通信并实现设备管理，监测，控制等操作。

```py
""" 启动云平台连接 """
quecIot.setConnmode(1)
```
<font color=#999AAA >提示：网关成功连接开发者中心后，开始转发子设备消息到开发者中心，在此之前所有收到子设备发往开发者中心消息皆丢弃，不做保存。</font>


### __五、子设备操作步骤__

网关的能力是转换不同设备间的通讯协议，可以让不具有联网能力的子设备通过网关连接上云端。如果我们想要达到该目的，需要将子设备添加到网关下，建立子设备与网关的联系。

__1、初始化__

开发前您还需要完成工程的QuecThing 组件的初始化，需要在使用联网服务前调用。初始化指的是在模组上电后，首先声明 quecIot 模块，并执行初始化接口。
```py
import quecIot
""" 初始化 qucsdk """
quecIot.init()
```

__2、子设备事件回调注册__

事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务，当子设备触发了某件事件时，交给监听器去处理，开发者只需要在事件回调函数内相应事件下作具体处理即可。

```py
""" 配置子设备回调函数 """
quecIot.subDevSetEventCB(subDevEventCB)
```


__3、子设备认证__

首次连接平台时，须进行子设备认证。可通过 quecIot.subDevConn() 函数进行设备认证。已通过认证的子设备在未连接至平台时，仍可通过 quecIot.subDevDeauth() 注销子设备。

```py
""" 子设备发起认证到平台 """
quecIot.subDevConn("pxxxxM", "VzY3xxxxxxxxeDE5", "8ExxxxxxxxE9", 0, 120)
"""
```

若子设备已认证到平台过，之后调用登录接口时需要将认证得到的ds信息放到方法中。
例如认证得到的ds为 "1234" ,示例代码如下所示：
```py
quecIot.subDevConn("pxxxxM", "VzY3xxxxxxxxeDE5", "8ExxxxxxxxE9", "1234", 0, 120)
```


### __六、子设备发送心跳包__
为了维护子设备与网关之间的链路有效性，子设备和网关之间会维护一个心跳信息。心跳的启动会依赖子设备主动发送心跳包的指令，所以需要根据子设备连接网关时所配置的 __子设备保活时间__ 来定时发送心跳包保活指令。

```py
def passTranDev_timerCB(self):
    quecIot.subDevHTB("pxxxxM", "8ExxxxxxxxE9")
    ptTimer.stop()
    ptTimer.start(period=60 * 1000,mode=Timer.PERIODIC, callback=self.passTranDev_timerCB)
```
### __七、子设备物模型数据交互__
需要实现一个智能设备的远程控制，最基本的能力就是设备的状态上报以及接收来自云端的命令并执行。因此数据传输部分是网关的核心能力。以下将以智能三色灯子设备作为物模型交互示例。

#### __物模型数据上行__

子设备可根据业务场景需求，对数据属性采取一定的策略进行检测处理，子设备则将读取到的数据通过网关上传到开发者中心。


发送物模型数据如下表所示。
|ID | 类型   |值    |
|:--------:| :-------------|:-------------|
| 1 | Bool |True|
| 2 | Int|123|
| 3 | Float |123.123|
| 4 | 数组|[1, 2, 3]|
| 5 | 结构体 |{6: 1.0, 7: 1.0}|


子设备向平台发送物模型代码如下所示。
```py
def tslDev_connSuccess(self):
    """ 发送bool型数据"""
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {1: True})
    """ 发送数值 """
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {2: 123})
    """ 发送浮点型 """
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {3: 123.123})
    """ 发送array """
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {4: [1, 2, 3]})
    """ 发送结构体 """
    quecIot.subDevTslReport("pxxxxM", "8ExxxxxxxxE9", {5: {6: 1.0, 7: 1.0}})
    tslTimer = Timer(Timer.tslTimer)
    tslTimer.start(period=60 * 1000,mode=Timer.PERIODIC, callback=self.tslDev_timerCB)
```


#### __物模型数据下行__


__1、开发者中心下发子设备物模型服务__

 在开发者中心 __设备调试__ 页面，第一步点击 __服务调用__，第二步选择要需下发的物模型服务及服务传参，第三步点击左下角的 __发送指令__ 即可下发物模型服务给终端。



__2、子设备收到物模型服务处理__

当子设备接收到物模型下行服务数据后，则会自动进入 __subDevEventCB__ 子设备事件处理回调函数，您可根据相对应的事件进行数据响应处理。

* 事件回调处理示例代码如下所示：

	```py
    def subDevEventCB(self,data):
        print("event:", data)
        event = data[0]
        errcode = data[1]
        if len(data) > 2:
            data = data[2]
        if event == 5:  # 接收数据事件，开发者可根据该事件进行下行业务逻辑实现
           if errcode == 10210:   # 接收到下发数据
               print('接收数据操作')
               model = data
               model_keys = list(model.keys())
               for cmdId in model_keys:
                   value = model.get(cmdId)
                   if 8 == cmdId:    #服务下发ID    
                    #code
                    print("Model 2") 
                   elif 9 == cmdId:    #服务下发ID      
                    #code
                    print("Model 2")              
                   else :
                       pass         
	```

 