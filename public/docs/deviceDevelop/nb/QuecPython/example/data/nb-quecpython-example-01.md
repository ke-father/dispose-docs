
# 物模型格式数据业务交互示例

## __场景描述__

本章节指导用户通过QuecPython 接入方案连接上开发者中心并进行物模型数据格式的业务交互。

## __涉及指令__

| 函数 | 说明  |
|:--------:| :-------------|
|quecIot.phymodelReport() |发送物模型数据至平台 |
|quecIot.phymodelAck()|应答平台请求的物模型数据 |

<font color=#999AAA >提示：详情请参考[物模型数据交互 相关接口](/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-03.md)</font>
	
## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。
#### __二、创建项目__
项目是产品的集合，用户在注册平台账户后需新建项目方可进行产品创建或者设备管理等操作。
#### __三、创建产品__
物模型数据业务的交互需要在创建产品时选择 __物模型__ 协议。
<a data-fancybox title="img" href="/deviceDevelop/nb/QuecPython/resource/data/Physical_model/Example-01.png">![img](/deviceDevelop/nb/QuecPython/resource/data/Physical_model/Example-01.png)</a>


#### __四、物模型功能定义__
 提示：由于在创建产品时已选择了产品品类，系统已为您自动创建该品类的所有物模型功能。您可根据实际项目需求修改物模型功能。 

<a data-fancybox title="img" href="/deviceDevelop/nb/QuecPython/resource/data/Physical_model/Example-02.png">![img](/deviceDevelop/nb/QuecPython/resource/data/Physical_model/Example-02.png)</a>

 产品物模型结构规划如下表所示。

| 功能ID | 功能类型    |功能名称   |数据类型    |数据定义  |功能描述  |
|:--------:|:-------------|:-------------|:-------------|:-------------|:-------------|
| 1 |属性 | 精油当前容量 | FLOAT |取值范围：0~300 |定时上报精油当前容量
| 2 |属性 | 定时上报频率 | INT |取值范围：1 ~ 2678400 |设置与查询精油当前容量定时上报频率|
| 3 |属性 | 开关状态 | BOOL |布尔值：<br>true - 开启；<br>false - 关闭； |控制香薰机开关|
| 4 |事件 | 精油不足告警 | - |事件类型：告警 <br>输出参数功能ID：1 |精油不足时主动上告给云端|
| 5 |服务 | 设置工作模式 | - |调用方法：异步<br>输入参数功能ID：6 |设置香薰机工作模式|

## __设备侧__
### __物模型数据交互__

物模型是开发者中心 针对物理实体设备在云端建立的数据模型，主要用于描述产品的功能，从而方便数据的解析。设备成功接入平台后，通过构建物模型数据来实现与开发者中心的数据交互。


#### __示例一(主动发送物模型数据)__

设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，例如设备端可通过串口读取香薰机传感器精油剩余容量值等数据后，设备则将读取到的精油剩余容量值、定时上报频率、开关状态上传到开发者中心。

* 示例代码如下所示：
	```py
	# 浮点数
	quecIot.phymodelReport(100, {1: 218.53})
	# 整数
	quecIot.phymodelReport(100, {2: 30})
	# 布尔型
	quecIot.phymodelReport(100, {3: True})
	```


#### __示例二(响应平台读取数据)__
__1、开发者中心批量读取物模型实时数据__

在开发者中心 __设备信息__ 详情页的 __设备调试__ 中，点击 __批量读取__ 按钮可一键批量读取物模型属性数值。
<a data-fancybox title="img" href="/deviceDevelop/nb/QuecPython/resource/data/Physical_model/Example-03.png">![img](/deviceDevelop/nb/QuecPython/resource/data/Physical_model/Example-03.png)</a>

__2、设备收到数据并进入回调__

平台下发读取请求且已注册回调函数后,该事件回调函数返回的数据为 list 类型数据，第一个元素是 PkgID（即请求包 ID），第二个元素是 id list（即请求读取的物模型功能 ID 列表）。
* 事件回调如下所示：

	```py
	5.10211,[8, [2, 3]]
	```

__3、模组响应平台读取__

设备成功接入平台后，可通过 __quecIot.phymodelReport()__ 函数响应物模型数据到平台。物模型数据为dict 类型数据，key 表示在平台创建物模型数据时生成的功能 ID；value 表示功能 ID 对应的数据。

* 事件回调处理示例代码如下所示：
	```py
    @staticmethod
    def eventCB(data):
        if 5 == data[0] and 10211 == data[1]:
			quecIot.phymodelAck(100, 1, {1: 218.53,2: 30,3: True})
	```
<font color=#999AAA >提示：设备成功发送数据后将返回 True，若发送数据为CON数据，将调用事件回调函数，并传入参数 4,10210；若发送数据为NON数据，设备无通知事件。</font>

#### __示例三(主动上报物模型告警事件)__
模拟精油不足时主动上告给云端，该事件包含输出参数：__精油当前容量__，将输出参数 __ID：1,value：30.60__ 包含进告警事件内组成结构体一并发送到开发者中心。

* 示例代码如下所示：
	```py
	quecIot.phymodelReport(100, {4:{1: 30.60}})
	```
<font color=#999AAA >提示：设备成功发送数据后将返回 True，若发送数据为CON数据，将调用事件回调函数，并传入参数 4,10210；若发送数据为NON数据，设备无通知事件。</font>

#### __示例四(读取平台下发的物模型数据)__

__1、开发者中心下发物模型服务__

 在开发者中心 __设备调试__ 页面，第一步点击 __服务调用__，第二步选择要下发的物模型服务，第三步点击左下角的 __发送指令__ 即可下发物模型服务给终端。
<a data-fancybox title="img" href="/deviceDevelop/nb/QuecPython/resource/data/Physical_model/Example-04.png">![img](/deviceDevelop/nb/QuecPython/resource/data/Physical_model/Example-04.png)</a>

__2、设备收到数据并进入回调__

平台下发读取请求且已注册回调函数后,该事件回调函数返回的数据为 list 类型数据，第一个元素是 PkgID（即请求包 ID），第二个元素是 id list（即请求读取的物模型功能 ID 列表）。
* 事件回调如下所示：

	```py
	5.10210,[5, 2]
	```

__3、设备接收到服务处理__

设备接收到平台下发的物模型服务数据时，会通过事件回调函数通知应用层，用户只需要对事件标识判断并提取数据即可。

* 事件回调处理示例代码如下所示：
	```py
    @staticmethod
    def eventCB(data):
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
                   if 5 == cmdId:    #服务下发ID                     
                        if  1 == value[6]:   #模式一
                           #code
                           print("Model 1") 
                        elif 2 == value[6]:   #模式二
                           #code
                           print("Model 2") 
                        elif 3 == value[6]:   #模式三
                           #code
                           print("Model 3") 
                   else :
                       pass                
	```

 