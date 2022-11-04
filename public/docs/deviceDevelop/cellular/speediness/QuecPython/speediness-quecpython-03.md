# 效果呈现

## **一、设备上线**

此时烧写好程序的模组已经开始运行起来，可以通过QPYcom工具的 __交互__ 查看。用于在电脑端与设备端通信，下发命令让设备按照开发者的想法去工作，同时设备可以返回信息给电脑，用户在交互界面可以看到设备内部的运作情况。当交互界面反馈 __event：(3,10200)__ 事件代表着模组已经成功连接上云端。QPYcom交互界面如图下所示。


<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-09.png">![img](/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-09.png)</a>


此时在开发者中心可查看设备状态已上线。平台显示效果如下图所示。


<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-15.png">![img](/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-15.png)</a>

## __二、在线设备调试__

 <font color=#999AAA >提示：设备在线调试主要用于辅助开发者完成设备功能调试，包含属性调试以及一些服务调试，调试期间请保证设备正常在线。</font>
 
__1、查看数据日志__

查看通信日志，可以看到终端设备每隔30秒上传一次精油剩余容量到开发者中心。

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-10.png">![img](/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-10.png)</a>


__2、读取当前属性值__

单击某个属性 __读取__ ，云端将向设备端下发读取指令。您也可以实时查看通信日志，确认下发数据情况及设备端上报数据情况。

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-11.png">![img](/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-11.png)</a>

__3、服务调用__

根据物模型功能定义的 __设备调试__ > __服务调用__，模拟远程下发控制命令场景，在设备调试中，选择服务：__设置工作模式__ ，命令参数设置为：__模式二__ ，单击 __发送指令__ ，我们可以看到终端设备已接收开发者中心下发的服务。

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-12.png">![img](/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-12.png)</a>


此时设备端已接收回调事件与服务数据。QPYcom交互界面如图下所示。


<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-13.png">![img](/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-13.png)</a>


__4、告警事件日志__

 查看 __事件日志__，可查看到终端设备产生告警后会主动上报告警事件到云端。

<a data-fancybox title="img" href="/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-14.png">![img](/deviceDevelop/cellular/speediness/resource/QuecPython/Speediness-QuecPython-14.png)</a>

## **Demo 设备例程**
main.py示例完整代码如下所示
```py
import quecIot
import _thread
import utime

key = "pxxxxn"  # 填入产品key
src = "MWZzxxxxxxxxDlt"  # 填入产品密钥

class Quecthing:
    def __init__(self):
        # ''' 初始化QuecThing SDK '''
        quecIot.init()
        # ''' 注册事件回调函数 '''
        quecIot.setEventCB(self.eventCB)
        # ''' 配置产品信息'''
        quecIot.setProductinfo(key, src)
        # ''' 启动云平台连接 '''
        quecIot.setConnmode(1)
        return

    @staticmethod
    def eventCB(data):
        print("event:", data)
        event = data[0]
        errcode = data[1]
        if len(data) > 2:
            data = data[2]

        if event == 1:  # 发送数据操作
            if errcode == 10200:
                print('设备认证成功')
            elif errcode == 10422:
                print('设备已认证（连接失败）')
        elif event == 2:  # 接入操作
            if errcode == 10200:
                print('接入成功')
        elif event == 3:  # 发送数据操作
            if errcode == 10200:
                print('订阅成功')
        elif event == 4:  # 发送数据操作
            if errcode == 10200:
                print('数据发送成功')
        elif event == 5:  # 接收数据事件，开发者可根据该事件进行下行业务逻辑实现
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
        elif event == 6:  # 接入操作
            if errcode == 10200:
                print('注销成功（断开连接成功）')
        elif event == 7:  # OTA操作
            if errcode == 10700:
                print('有升级任务,为配置信息')

def QuecIot_passTransSend():
    while True:
        # 第一个传参是QOS值，当值是1及以上时则会有事件回调响应
        quecIot.phymodelReport(1, {1: 180.25})   #用户主任务，每30秒上报精油剩余容量
        utime.sleep(30)
        print('QuecIot_passTransSend')

if __name__ == '__main__':
    Quecthing()
    _thread.start_new_thread(QuecIot_passTransSend, ())
```

