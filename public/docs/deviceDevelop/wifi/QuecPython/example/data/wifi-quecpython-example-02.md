# 透传格式数据业务交互示例
 ## __场景描述__
根据实际业务场景来使用。如果不需要平台解析数据，仅透传数据的话，可以在设备成功接入移远通信物联网开发者中心后，通过 __quecIot.passTransSend()__ 与 __quecIot.passTransSend_ex()__ 指令来实现与开发者中心的数据交互，任何类型的数据均可采用透传模式。本章节指导用户通过 QuecPython 接入方案连接上开发者中心并进行透传数据格式的业务交互。



## __涉及指令__

| 函数 | 说明  |
|:--------:| :-------------|
|quecIot.passTransSend() |发送透传数据至平台 |
|quecIot.passTransSend_ex() |发送透传数据至平台 |

<font color=#999AAA >提示：详情请参考[透传数据交互 相关接口](/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-03.md)。</font>

## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__

登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。

#### __二、创建项目__ 

项目是产品的集合，用户在注册平台账户后需新建项目方可进行产品创建或者设备管理等操作。

#### __三、创建产品__ 

透传数据业务的交互需要在创建产品时选择 __透传/自定义__ 协议。 

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecPython/resource/data/SeriaNet/Example-01.png">![img](/deviceDevelop/wifi/QuecPython/resource/data/SeriaNet/Example-01.png)</a>


### __透传数据交互__

设备成功发送数据后将返回 True，若 mode 为 1 或以上，将调用事件回调函数，并传入参数 4,10200； 若 mode 为 0，不产生事件。

#### __示例一(发送透传数据)__
设备可调用 __quecIot.passTransSend_ex()__ 函数主动向平台发送透传数据。发送数据为长度12个字节的字符串"ABCabc123456"，QoS级别为1。

示例代码如下所示：

```c
quecIot.passTransSend_ex(1,"ABCabc123456");
```

#### __示例二(读取平台下发的透传数据)__

__1、开发者中心下发透传数据__

在 __产品详情__ 详情页，单击 __设备调试__ 页签可进行透传数据业务的交互。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecPython/resource/data/SeriaNet/Example-02.png">![img](/deviceDevelop/wifi/QuecPython/resource/data/SeriaNet/Example-02.png)</a>

__2、设备接收到透传数据__

设备成功接收数据后，通过事件回调函数通知应用层，用户只需对事件标识符进行判断并提取数
据即可。

```py
@staticmethod
def eventCB(data):
    print("event:", data)
    event = data[0]
    errcode = data[1]
    if len(data) > 2:
        data = data[2]
    elif event == 5:  # 接收数据事件，开发者可根据该事件进行下行业务逻辑实现
        if errcode == 10200: # 接收到透传数据
            print('接收到透传数据：')
            print(data)  # 此打印为平台下发的透传数据
```


 


