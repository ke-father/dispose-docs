# 透传格式数据业务交互示例
 ## __场景描述__
根据实际业务场景来使用。如果不需要平台解析数据，仅透传数据的话，可以在设备成功接入移远通信物联网开发者中心后，通过 __Ql_iotCmdBusPassTransSend()__ 指令来实现与开发者中心的数据交互，任何类型的数据均可采用透传模式。



## __涉及指令__

| 函数 | 说明  |
|:--------:| :-------------:|
| Ql_iotCmdBusPassTransSend() |发送透传数据至平台| 

<font color=#999AAA >提示：详情请参考[透传数据交互 相关接口](/deviceDevelop/nb/QuecOpen/api/nb-quecopen-api-03.md)。</font>


## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__

登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。

#### __二、创建项目__ 

项目是产品的集合，用户在注册平台账户后需新建项目方可进行产品创建或者设备管理等操作。

#### __三、创建产品__ 

透传数据业务的交互需要在创建产品时选择 __透传/自定义__ 协议。 

<a data-fancybox title="img" href="/deviceDevelop/nb/QuecOpen/resource/data/SeriaNet/Example-01.png">![img](/deviceDevelop/nb/QuecOpen/resource/data/SeriaNet/Example-01.png)</a>


### __透传数据交互__
透传发送后，若消息类型为CON数据，设备发送透传数据后将会进入 __Ql_iotEventCB()__ 函数中的 __+QIOTEVT: 4,10200__ 事件；若消息类型为NON数据，设备成功发送数据后将且不进入事件回调。  
#### __示例一(发送透传数据)__
设备可调用 __Ql_iotCmdBusPassTransSend()__ 函数主动向平台发送透传数据。发送数据为长度12个字节的字符串"ABCabc123456"，消息类型为CON数据。

示例代码如下所示：

```c
Ql_iotCmdBusPassTransSend(100,(unsigned char *)"ABCabc123456",12);
```

#### __示例二(读取平台下发的透传数据)__

__1、开发者中心下发透传数据__

在 __产品详情__ 详情页，单击 __设备调试__ 页签可进行透传数据业务的交互。

<a data-fancybox title="img" href="/deviceDevelop/nb/QuecOpen/resource/data/SeriaNet/Example-02.png">![img](/deviceDevelop/nb/QuecOpen/resource/data/SeriaNet/Example-02.png)</a>

__2、设备接收到透传数据__

设备接收到透传数据后会进入 __Ql_iotEventCB()__ 函数中透传事件回调，您可进入该事件回调进行下行透传数据处理。

```c
void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
   switch (event)
   {  
   		/* 接收下行数据事件  */
 	  case QIOT_ATEVENT_TYPE_RECV:
 		/* 收到透传数据 */
        if(10200 == errcode)
        {
            printf("pass data:%.*s\r\n",valLen,(char *)value);
            /*Code*/
        }    
      default: break;
    }
}
```



 


