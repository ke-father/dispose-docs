# Python脚本编写

## **脚本编写**

QuecPython支持上电 __自动执行__ 用户代码。Quectel通信模组上电运行后，QuecPython会查找用户分区下名称为 __main.py__ 的程序文件并 __自动执行__ 该文件。如果您希望能上电后自动运行用户的代码，则需要将程序命名为 __main.py__，连同它的依赖等文件，一起下载到模块内。接下来我们开始编写一个 __main.py__ 脚本示例。


## __一、初始化配置设备信息__
在连接开发者中心前，您还需要完成工程的初始化配置。
<font color=#999AAA >提示：详情请参考[产品配置 相关接口](/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-02.md)。</font>


* 设备上电后首先导入quecIot模块，__初始化Quecthing__ 。
    ```py
	quecIot.init()
    ```
* 注册云平台 __事件接收回调函数__，根据回调事件判断云平台当前连接状态。
    ```py
	quecIot.setEventCB(queciot_even_cb)
    ```
* 设备认证方式支持 __一型一密__，配置设备信息时，只需将您创建产品时获取到的 __PK、PS__ 写入该方法传参中。
    ```py
	quecIot.setProductinfo("pxxxxy", "OFZCxxxxxxxxUdn")
    ```


* 示例代码如下所示
    ```py
    """ 初始化QuecThing SDK """
        quecIot.init()
    """ 注册事件回调函数 """
        quecIot.setEventCB(self.eventCB)
    """ 配置产品信息"""
        quecIot.setProductinfo("pxxxxy", "OFZCxxxxxxxxUdn")
    ```

## __二、连接云平台__
QuecPython提供设备 __一键连接__ 接入开发者中心，接入后即可在开发者中心建立安全，稳定的通信并实现设备管理，监测，控制等操作。
* 示例代码如下所示
    ```py
    """ 启动云平台连接 """
        quecIot.setConnmode(1)
    ```
## __三、应用逻辑开发__


### __1、开启蓝牙功能__

可根据实际的项目需求拟定开启蓝牙功能，例如按下按键开启蓝牙功能。

* 示例代码如下所示

    ```py
    """ 启动蓝牙GATT """
        def ble_gatt_open():
            ret = ble.gattStart()
            if ret != 0:
                print('ble_gatt_open failed.')
                return -1
            print('ble_gatt_open success.')
            return 0
    ```

<font color=#999AAA >提示：WiFi功能缺省已打开Station模式。</font>


### __2、上行业务逻辑实现__

数据模板示例 __main.py__ 已实现数据收发及事件响应的通用处理框架，开发者可根据该示例结合项目需求实现业务数据逻辑开发。

<font color=#999AAA >提示：详情请参考[数据业务交互 相关接口](/deviceDevelop/wifi/QuecPython/api/wifi-quecpython-api-03.md)。</font>

设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，模组则需要将精油剩余容量值上传到开发者中心。
* 示例代码如下所示
    ```py
    def QuecIot_passTransSend():
        while True:
            # 第一个传参是QOS值，当值是1及以上时则会有事件回调响应
            quecIot.phymodelReport(1, {1: 180.25})   #用户任务，每30秒上报精油剩余容量       
            print('QuecIot_passTransSend')
            utime.sleep(30)

    if __name__ == '__main__':
        Quecthing()
        _thread.start_new_thread(QuecIot_passTransSend, ())
    ```
### __3、下行业务逻辑实现__
服务端下行的数据，__QuecThing SDK__ 已按数据模板协议完成 TTLV 数据的解析，开发者只需根据不同的事件来开发下行业务逻辑。物模型是根据在平台定义的产品数据模板生成的模板结构体，由定义的各属性构成成员变量。入参 value 所指向的属性数据，从服务端下行数据中，__QuecThing SDK__  已经按数据模板协议完成了属性数据的解析，用户在下行逻辑处理的函数里，可直接使用解析完成的数据添加业务逻辑即可。


* 示例代码如下所示
    ```py
    @staticmethod
        def eventCB(data):
            print("event:", data)
            event = data[0]
            errcode = data[1]
            if len(data) > 2:
                data = data[2]
                
            if event == 5:  # 接收数据事件，开发者可根据该事件进行下行业务逻辑实现
            if errcode == 10200: # 接收到透传数据
                    print('接收到透传数据：')
                    print(data)
                    # quecIot.passTransSend(1, 'OilsCurrentML: 180.65')
            elif errcode == 10210:   # 接收到下发数据
                print('接收数据操作')
                model = data
                model_keys = list(model.keys())
                for cmdId in model_keys:
                    value = model.get(cmdId)
                    if 2 == cmdId:    #下发频率控制
                            #code
                            print("Ctemporal frequency："+ str(value)) 
                    elif 3 == cmdId:    #下发开关
                            if  False == value:   #Close
                            #code
                            print("Turn off the aromatherapy machine") 
                            elif True == value:   #Open
                            #code
                            print("Turn on the aromatherapy machine") 
                    elif 5 == cmdId:    #服务调用                     
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
            elif errcode == 10211:   # 接收到平台读取数据操作
                print('平台读取数据')
                if [1] == data[1]:
                    quecIot.phymodelReport(1, {1: 180.25})
                elif [2] == data[1]:
                    quecIot.phymodelReport(1, {2: 30})  
                elif [3] == data[1]:
                    quecIot.phymodelReport(1, {3: True})
                else :
                    pass
    ```

## __四、烧录QuecPython脚本__

Python代码不需要编译，直接通过 __QPYcom工具__ 把 __main.py__ 文件烧录到模块中运行即可。


<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-07.png">![img](/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-07.png)</a>


__①、__ 点击 __文件__ 标签，进入文件页，并选择对应的 __main.py__ 文件。<font color=#999AAA >提示：左侧为电脑本地的文件；右侧为模块端的文件</font><br>
__②、__  把 __main.py__ 文件拉拽到右侧的 __usr__ 用户目录根节点，松开鼠标左键即可自动下载文件到模块。

<font color=#999AAA >提示：文件下载过程中，工具页面底部状态栏有下载进度，进度到100%表示文件下载成功。</font>


## __五、运行程序__

 在右侧的模块端的文件管理选中 __main.py__ ，在点击上侧的 __三角运行控件__ 即可自动运行代码。

<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-08.png">![img](/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-08.png)</a>


<font color=#999AAA >提示：自动运行的脚本，或者循环输出的脚本，将无法使用Ctrl+C停止运行；唯一将脚本停止的方法是重新烧录固件包。</font>


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


<a data-fancybox title="img" href="/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-15.png">![img](/deviceDevelop/wifi/speediness/resource/QuecPython/Speediness-QuecPython-15.png)</a>