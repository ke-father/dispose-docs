# DTU-Modbus示例
## __场景描述__

数据传输单元DTU是专门用于将串口数据通过无线通信网络进行传送的无线终端设备。广义地讲，在进行通信时，传输数据的链路两端负责发送数据信息的模块单元都称之为DTU，在它的作用下对所传信息进行格式转换和数据整理校验。此示例讲述一个 __具有Modbus通讯协议的温湿度传感器__ 通过 __移远DTU模块__ 连接上 __开发者中心__ 并进行数据交互。


## __涉及API接口__

| 函数 | 说明  |
|:--------:| :-------------|
|  Ql_iotMBInit() | 初始化 modbus 组件|
|  Ql_iotMBCloudRecv() | 转换平台下发的物模型数据为 ModBus 格式后发送到 ModBus 从机设备 |
|  Ql_iotMBLocalRecv() | 转发串口接收到的 ModBus 数据至 ModBus 组件中并处理| 
|  Ql_iotMBDeinit() | 注销modbus组件 |

<font color=#999AAA >提示：详情请参考[DTU-Modbus 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-09.md)。</font>




## __平台侧操作步骤__
### __一、登录开发者中心__
登录<a :href="toDevelopCenter()" target="_blank">开发者中心</a>，未注册可单击<a :href="toDevelopCenter('registerType')" target="_blank">立即注册</a>完成注册。
### __二、创建项目__
项目是产品的集合，用户在注册平台账户后需新建项目方可进行产品创建或者设备管理等操作。
### __三、创建产品__
创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备WiFi联网能力的温湿度，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能温湿度”。	

## __DTU-Modbus配置工具操作步骤__
DTU-Modbus配置工具是一款能帮助您快速通过Modbus协议对从机设备进行功能定义等操作，在工具内配置产品信息以及功能定义操作后，只需将配置文件烧写进DTU模组上与导入开发者中心即可完成从机设备连接上云的操作。

__主页总览如下图所示__

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-01.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-01.png)</a>

### __一、配置产品信息__

点击左侧配置栏 __添加产品__ 按钮。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-02.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-02.png)</a>

添加产品信息弹窗如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-03.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-03.png)</a>

* __产品名称__：DTU产品所具有的产品命名。
* __ProductKey__：在开发者中心创建产品生成的 ProductKey。
* __ProductSecret__：在开发者中心创建产品生成的 ProductSecret。
* __上报方式__：分别为变化上报与全部上报。
    * __全部上报__：设备每次轮询到的数据都会直接上报到开发者中心。
    * __变化上报__：设备每次轮询到的数据与上次数据进行比较，发生变化才上报到开发者中心。
* __设备类型__：分为直连版与网关版。
    * __直连版本__：从机设备和网关共用产品信息，以一个整体设备在云平台展示。
    * __网关版本__：从机设备拥有独立的产品信息和设备信息，在云平台单独展示。
 
<font color=#999AAA >提示：产品信息仅可添加一条，需要添加新的请通过修改或删除旧的产品信息。</font>

### __二、配置串口信息__
点击左侧配置栏 __添加串口__ 按钮。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-04.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-04.png)</a>

添加串口配置弹窗如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-05.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-05.png)</a>


* __端口号__：实际DTU接入从机设备的端口号。
* __波特率__：表示每秒钟传送的字节的个数，常用有9600, 115200等，需与从机设备相匹配。
* __数据位__：衡量通信中有效数据的参数，默认为8个，需与从机设备相匹配。
* __停止位__：可设置为1位、1.5位或2位，标志着传输一个字符的结束，需与从机设备相匹配。
* __校验位__：分为奇校验位、偶校验及无校验，默认为无校验，需与从机设备相匹配。
* __轮询间隔__：DTU设备向从机设备轮询发送Modbus协议周期。例如每60秒向从机设备读取一次温湿度值。
* __命令间隔__：因可能存在黏包情况，需设置DTU向从机设备发送每条Modbus协议的最小时间间隔。


### __三、配置功能信息__

假设一款 Modbus协议 温湿度传感器 接入到开发者中心，通过开发者中心可以远程查看传感器的温度、湿度，并可远程配置传感器开关与设置实时时间。以下以温湿度传感器为例演示如何在配置工具桌面添加功能信息。

需添加的功能如下表所示。

| 类型| 功能名称 |读写权限|数据类型 |字节顺序 |换算公式 |字节长度|
|--|--|--|--|--|--|--|--|
| 布尔型 | 温湿度开关 | 可读可写|--|--|--|--|--|
| 数值型 | 温度 | 只读|十六位有符号整型|大端模式|x0.01+0|--|
| 数值型 | 湿度 | 只读|十六位无符号整型|大端模式|x0.01+0|--|
| 字节流 | 时间戳 |只写|--|--|--|13|


点击左侧配置栏 __添加功能__ 按钮。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-06.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-06.png)</a>

__1、添加布尔型__

添加温湿度开关，可远程控制温湿度开关状态。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-07.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-07.png)</a>

* __类型__：选择布尔型，例如温湿度开启：Ture。
* __功能名称__：从机设备功能所具有的功能命名，例如开关。
* __读写类型__：分为只读、只写、可读可写。

__2、添加数值型__


添加温湿度功能，可在云端查看当前传感器温湿度值。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-08.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-08.png)</a>

* __类型__：选择数值型，例如温度值为：“25.63”度。
* __功能名称__：从机设备功能所具有的功能命名，例如温度。
* __读写类型__：分为只读、只写、可读可写。
* __数据类型__：该类型的变量所能存储的最大值和最小值，例如因温度值可能为负摄氏度且范围为-40~85，所以定义为16位有符号整型较为合适。
* __字节顺序__：数据在内存中的存放顺序。用32位整型举例：数值(ABCD)使用两个字节储存：高位字节是(AB)，低位字节是(CD)。
	* __大端模式__：高位字节在前，低位字节在后，即以(ABCD)形式储存。
 	* __小端模式__：低位字节在前，高位字节在后，即以(DCBA)形式储存。
 	* __大端模式字节交换__ ：大端模式并高低位字节间两两交换，即以(BADC)形式储存。
	* __小端模式字节交换__ ：小端模式并高低位字节间两两交换，即以(CDAB)形式储存。

* __换算公式__：对该数值进行换算，例如从传感器读取到的数值为：0x0A 0x03 (十进制为2563)，2563 *0.01+0=25.63，则25.63则为实际的温度值。

__3、添加字节流型__

添加时间戳设置功能，可在云端读取或设置温湿度传感器时间戳。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-09.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-09.png)</a>


* __类型__：选择字节流型，例如字节流值为：“ABCabc123#&*”。
* __功能名称__：从机设备功能所具有的功能命名，例如时间戳。
* __读写类型__：分为只读、只写、可读可写。
* __字节长度__：根据字节流数据的最大字节长度设定。


### __四、添加设备信息__

<font color=#999AAA >提示：当选择设备类型为“网关版”时，需要为每一款modbus设备填写对应的产品信息。</font>

__1__ 、点击 __添加设备(+)__ 按钮添加从机设备设备。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-10.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-10.png)</a>


__2、添加从机设备弹窗详情__

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-11.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-11.png)</a>

__i.__ 在弹窗页面中 __设备名称__ 填写从机设备的命名，例如填写 __温湿度传感器__ 。

__ii.__ 在对应串口端口号的列表下输入该设备的modbus从机地址，例如温湿度传感器放置于串口1，modbus地址为1，则输入1，若有多个设备需要设置为不同的modbus从机地址，或添加多个即可。


### __五、添加功能寄存器__

从机设备Modbus需添加的功能如下表所示。

| 类型| 功能名称 |读写权限 |数据类型 |字节顺序|
|--|--|--|--|--|--|--|--|
| 布尔型 | 温湿度开关 | 可读可写|--|--|--|--|--|
| 数值型 | 温度 | 只读|十六位有符号整型|大端模式|x0.01+0|--|
| 数值型 | 湿度 | 只读|十六位无符号整型|大端模式|x0.01+0|--|
| 字节流 | 时间戳 |只写|--|--|--|13|

__1、添加寄存器地址__

选择页签中从机设备并点击 __添加寄存器地址__ 按钮。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-12.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-12.png)</a>


在弹窗页面中分别输入 __起始地址__、__数量__ 参数。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-13.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-13.png)</a>

<font color=#999AAA >提示：可以通过勾选 __Hex__ 勾选框，切换 __起始地址__ 输入框是以十进制还是十六进制显示。</font>


__2、添加寄存器配置信息__

把功能列表里的功能配置信息拉拽到右侧的功能标签址中 __+__ 控件，松开鼠标左键即可自动将功能寄存器配置添加到寄存器配置文件。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-14.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-14.png)</a>


### __六、生成配置文件__

在工作栏中点击 __配置文件__ >__生成配置文件__ ， 在弹窗页面中选择需要保存的文件路径。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-15.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-15.png)</a>

若成功生成配置文件后则会在选择的文件目录生成以下两种格式的文件。
* xxxxxx_xxxxxxxxxx_cloud.json：物模型定义文件，用于在开发者中心导入
* xxxxxx_xxxxxxxxxx_local.bin：modbus定义文件，用于在设备烧写


### __七、导入配置文件至开发者中心__

1、登录开发者中心，打开对应的产品页面，并切换到 __功能定义__ 页面，点击 __草稿模式__ 进入编辑模式。

2、点击 __快速导入__ >__导入物模型__ >__点击上传__

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-16.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-16.png)</a>


3、 在弹窗页面中选择生成的xxxxxx_xxxxxxxxxx_cloud.json文件，最后点击 __确认按钮__ 即可导入功能配置文件。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-17.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-17.png)</a>

4、点击 __发布应用__ 退出编辑模式。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-18.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-18.png)</a>

## __设备侧操作步骤__

### __一、程序编程__
__1、QuecThing初始化__

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际情况进行适配。设备将携带这些信息与开发者中心建立连接。
```c
/* 初始化QuecThing SDK */
Ql_iotInit();
/* 注册事件回调函数 */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```

__2、初始化Modbus组件__

初始化modbus组件，需要注册可用于烧写配置文件的串口列表，以及注册串口发送函数和初始化回调函数。

```c
/* 初始化modbus */
Ql_iotMBInit(portList,sizeof(portList)/sizeof(quint16_t),modbusUartSend,modbusInitCb);
```
__i.__ ModBus 组件初始化完成后，将配置文件中的设备信息传入至该回调函数。用户需在该函数中实现串口收发以及设备连接平台的操作。


```c
qbool modbusUartSend(quint16_t port, const quint8_t *buf, quint32_t bufLen)
{
    if(portFd[port] != SOCKET_FD_INVALID)
    {
        write(portFd[port], buf, bufLen);
        return TRUE;
    }
    return FALSE;
}
```

__ii.__ ModBus 组件需向串口发送数据时会调用该回调函数。用户需在该函数中实现串口发送能力。

```c
void modbusInitCb(char *pk, char *ps,QIot_MBPortCfg_t *portInfo[], quint32_t portNum)
{
    /* 关闭串口 */
    quint32_t i;
    for (i = 0; i < sizeof(portList)/sizeof(quint16_t); i++)
    {
        close(portFd[i]);
    }
    HAL_MEMSET(portFd,0XFF,sizeof(portFd));
    /* 根据配置文件重新打开串口 */
    for (i = 0; i < portNum; i++)
    {
        if(portInfo[i]->port < QIOT_MODBUS_PORT_MAXNUM)
        {
            portFd[portInfo[i]->port] = modbusUartInit(portInfo[i]->port,portInfo[i]->baudrate,portInfo[i]->dataBits,portInfo[i]->parity,portInfo[i]->stopBits);
        }
        else
        {
            HAL_PRINTF("port[%d] is error\r\n",portInfo[i]->port);
        }
    }
    /* 配置PK/PS,启动云平台连接 */
    Ql_iotConfigSetProductinfo(pk, ps);
    Ql_iotConfigSetConnmode(QIOT_CONNMODE_REQ);
}
```


__3、下行数据处理__

在开发者中心发送指令，设备接收后将TTLV数据转为MODBUS数据并通过注册的发送接口发送。
```c
void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
    switch (event)
    {
    /* 接收数据操作 */
    case QIOT_ATEVENT_TYPE_RECV:
        printf("data recv event,code:%d\r\n",errcode);
        if(QIOT_RECV_SUCC_PHYMODEL_RECV == errcode)
        {
            /* modbus数据下发 */
            Ql_iotMBCloudRecv(value);
        }
        break;
 
    default:
        break;
    }
}
```
### __二、编译、烧写程序__

<font color=#999AAA >提示：因为每个DTU-Modbus模组烧写程序不一样，具体烧写方式请联系移远云技术支持提供。</font>

### __三、烧写配置文件至DTU设备__

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-19.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-19.png)</a>

1、在工作栏中点击 __下载__ >__串口下载__ 按钮。<br>
2、 点击 __导入文件__ 按钮，在弹窗页面中选择生成的 xxxxxx_xxxxxxxxxx_local.bin 文件。<br>
3、 选择对应的PC连接DTU设备端口号与波特率等配置后点击 __打开串口__ 按钮。<font color=#999AAA >提示：可以根据开发板上的PIN脚号或对应版本的原理图找到对应的烧录串口位置。</font><br>
4、最后点击 __开始下载__ 后重启硬件设备，文本框中会显示文件下载进度，下载成功会弹出提示 __下载成功__ 弹窗。
<br>

## __效果呈现__

__1、设备上线__

将程序烧写进模组里，模组会根据代码步骤自动连接到云端。模组连接到云端后，开发者中心会自动在该产品下添加本机设备，并且 __自动认证__。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-20.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-20.png)</a>


__2、查看数据日志__

在设备详情 >数据日志页可以查看到终端设备规律的每隔60秒即向从机设备获取最新数据并发送至开发者中心。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-21.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-21.png)</a>


根据物模型功能定义的 __设备调试__ > __通讯日志__ 可以清晰的查看上传的温度值：25.68；湿度值：65.13。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-23.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-23.png)</a>


__3、下发指令__

通过平台下发指令到DTU-Modbus设备，DTU设备进入回调函数处理且通过串口转换成Modbus协议发送给温湿度传感器。此时通过温湿度传感器已通过DTU设备接收到下发的时间戳与开关指令。

<a data-fancybox title="img" href="/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-22.png">![img](/deviceDevelop/wifi/QuecOpen/resource/DTU_Modbus/Example-22.png)</a>

 

