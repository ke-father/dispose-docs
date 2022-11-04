# DTU-Modbus 相关接口
## **API 列表**

| 函数 | 说明  |
|:--------:| :-------------|
|  [Ql_iotMBInit()](#Ql_iotMBInit) | 初始化 modbus 组件|
|  [Ql_iotMBCloudRecv()](#Ql_iotMBCloudRecv) | 转换平台下发的物模型数据为 ModBus 格式后发送到 ModBus 从机设备 |
|  [Ql_iotMBLocalRecv()](#Ql_iotMBLocalRecv) | 转发串口接收到的 ModBus 数据至 ModBus 组件中并处理| 
|  [Ql_iotMBDeinit()](#Ql_iotMBDeinit) | 注销modbus组件 |

## **API 详情**

<span id="Ql_iotMBInit">  </span>

## <font color=#A52A2A  >__Ql_iotMBInit__</font>

该函数用于初始化ModBus 组件，同时配置可用于烧写配置文件（该配置文件包含设备信息、QuecThing配置和串口配置。该文件由移远通信提供的工具生成，详情可联系移远通信技术支持）的串口列表、注册用于向串口发送数据的回调函数和初始化回调函数。

__函数原型__

```c
qbool Ql_iotMBInit(quint16_t uartList[],quint32_t uartNum,QIot_MBSend_f sendFunc,QIot_MBInitCb_f initCb);
```

__参数说明__

* __输入参数__
	* __quint16_t__     __`uartList`__：可用于串口烧写配置文件的串口列表，需要自行打开对应串口。
	* __quint32_t__     __`uartNum`__：可用于串口烧写配置文件的串口数量，若不需要串口烧写文件功能可以填0。
	* __QIot_MBSend_f__  __`sendFunc`__：串口发送函数。 详情请参考[QIot_MBSend_f解析](#QIot_MBSend_f)。
	* __QIot_MBInitCb_f__  __`initCb`__：初始化回调函数。详情请参考[QIot_MBInitCb_f 解析](#QIot_MBInitCb_f)。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

2.10.0及以上版本支持。

__调用示例__

```c
quint16_t portList[] = {0,1,2,3,4,5,6,7,8,9};
#define QIOT_MODBUS_PORT_MAXNUM   100
static pointer_t portFd[QIOT_MODBUS_PORT_MAXNUM] = {[0 ...(QIOT_MODBUS_PORT_MAXNUM-1)] = SOCKET_FD_INVALID};

quint32_t i;
for (i = 0; i < sizeof(portList)/sizeof(quint16_t); i++)
{
    portFd[i] = modbusUartInit(portList[i],9600,QIOT_MBUART_DATABITS_8,QIOT_MBUART_PARITY_NONE,QIOT_MBUART_STOPBITS_1);
}
/* 初始化modbus */
Ql_iotMBInit(portList,sizeof(portList)/sizeof(quint16_t),modbusUartSend,modbusInitCb);
```
---
<span id="QIot_MBSend_f">  </span>
### <font color=#A52A2A  >__QIot_MBSend_f__</font>

ModBus 组件需向串口发送数据时会调用该回调函数。用户需在该函数中实现串口发送能力。

__函数原型__

```c
typedef qbool (*QIot_MBSend_f)(quint16_t port, const quint8_t *buf, quint32_t bufLen);
```

__参数说明__

* __输入参数__
	* __quint16_t__     __`port`__：端口号。
	* __const quint8_t *__  __`buf`__： 需要发送的数据内容。
	* __quint32_t__     __`bufLen`__：需要发送的数据长度。

__返回值__

* __`True`__：   函数执行成功。
* __`False`__： 函数执行失败。

---
<span id="QIot_MBInitCb_f">  </span>
### <font color=#A52A2A  >__QIot_MBInitCb_f__</font>

ModBus 组件初始化完成后，将配置文件中的设备信息传入至该回调函数。用户需在该函数中实现串口收发以及设备连接平台的操作。

__函数原型__

```c
typedef void (*QIot_MBInitCb_f)(char *pk, char *ps,QIot_MBUartCfg_t *uartInfo[], quint32_t uartNum);
```

__参数说明__

* __输入参数__
	* __char *__         __`pk`__：创建产品生成的 ProductKey。
	* __char *__         __`ps`__：创建产品生成的 ProductSecret。
	* __QIot_MBUartCfg_t *__  __`uartInfo`__：配置文件中的串口配置信息。详情请参考[Ql_iotMBCloudRecv()](#Ql_iotMBCloudRecv)

	* __quint32_t__       __`uartNum`__：配置文件中的串口数量。


##### <font color=#A52A2A  >__QIot_MBUartCfg_t__</font>

串口配置信息定义如下：

```c
typedef struct
{
    quint16_t port;
    quint32_t baudrate;
    QIot_MBDataBits_e dataBits;
    QIot_MBParity_e parity;
    QIot_MBStopBits_e stopBits;
}QIot_MBUartCfg_t;
```

__参数说明__

|类型| 参数 | 描述    |
|:-----:|:--------:| :-------------|
|quint16_t| port | 端口号 |
|quint32_t| baudrate| 波特率 |
|QIot_MBDataBits_e| dataBits | 数据位，详情请参考[数据位解析](#QIot_MBDataBits_e)  |
|QIot_MBParity_e| parity | 校验位，详情请参考[校验位解析](#QIot_MBParity_e)  |
|QIot_MBStopBits_e| stopBits | 停止位，详情请参考[停止位解析](#QIot_MBStopBits_e)  |

---
<span id="QIot_MBDataBits_e">  </span>
##### <font color=#A52A2A  >__QIot_MBDataBits_e__</font>

数据位枚举定义如下：

```c
typedef enum
{
    QIOT_MBUART_DATABITS_5  = 0,
    QIOT_MBUART_DATABITS_6  = 1,
    QIOT_MBUART_DATABITS_7  = 2,
    QIOT_MBUART_DATABITS_8  = 3,
}QIot_MBDataBits_e;
```

__参数说明__

| 参数 | 描述    |
|:--------:| :-------------|
| QIOT_MBUART_DATABITS_5 | 数据位为5bit |
| QIOT_MBUART_DATABITS_6| 数据位为6bit |
| QIOT_MBUART_DATABITS_7 | 数据位为7bit |
| QIOT_MBUART_DATABITS_8 | 数据位为8bit |
---
<span id="QIot_MBParity_e">  </span>
##### <font color=#A52A2A  >__QIot_MBParity_e__</font>

校验位枚举定义如下：

```c
typedef enum配置文件中的串口数量 {
    QIOT_MBUART_PARITY_NONE  = 0,
    QIOT_MBUART_PARITY_EVEN  = 1,
    QIOT_MBUART_PARITY_ODD   = 2,
    QIOT_MBUART_PARITY_MARK  = 3,
    QIOT_MBUART_PARITY_SPACE = 4,
}QIot_MBParity_e;
```

__参数说明__

| 参数 | 描述    |
|:--------:| :-------------|
| QIOT_MBUART_PARITY_NONE | 无校验 |
| QIOT_MBUART_PARITY_EVEN| 偶校验 |
| QIOT_MBUART_PARITY_ODD | 奇校验 |
| QIOT_MBUART_PARITY_MARK | 始终为1 |
| QIOT_MBUART_PARITY_SPACE | 始终为0 |
---
<span id="QIot_MBStopBits_e">  </span>
##### <font color=#A52A2A  >__QIot_MBStopBits_e__</font>

停止位枚举定义如下：

```c
typedef enum
{
    QIOT_MBUART_STOPBITS_1   = 0,
    QIOT_MBUART_STOPBITS_1_5 = 1,
    QIOT_MBUART_STOPBITS_2   = 2,
}QIot_MBStopBits_e;
```

__参数说明__

| 参数 | 描述    |
|:--------:| :-------------|
| QIOT_MBUART_STOPBITS_1 | 停止位为1bit |
| QIOT_MBUART_STOPBITS_1_5| 停止位为1.5bit |
| QIOT_MBUART_STOPBITS_2 | 停止位为2bit |

---
<span id="Ql_iotMBCloudRecv">  </span>
### <font color=#A52A2A  >__Ql_iotMBCloudRecv__</font>

该函数用于将平台下发的物模型数据转为 ModBus 格式后发送到 ModBus 从机设备。

__函数原型__

```c
qbool Ql_iotMBCloudRecv(const void *ttlvHead);
```

__参数说明__

* __输入参数__
	* __const void *__  __`ttlvHead`__： TTLV 数据表。

__返回值__

* __`True`__：   函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.10.0及以上版本支持。

__调用示例__

```c
void *ttlvHead = NULL;
qbool ret = Ql_iotMBCloudRecv(ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```
---



<span id="Ql_iotMBLocalRecv">  </span>
### <font color=#A52A2A  >__Ql_iotMBLocalRecv__</font>

该函数用于将串口接收到的 ModBus 数据转发到 ModBus 组件中并处理。

__函数原型__

```c
qbool Ql_iotMBLocalRecv(quint16_t port,quint8_t *data,quint32_t len);
```

__参数说明__

* __输入参数__
	* __quint16_t__  __`port`__：串口端口号。
	* __quint8_t *__  __`data`__：串口接收到的 modbus 数据。
	* __quint32_t__  __`len`__：modbus 串口接收到的 modbus 数据长度。

__返回值__

* __`True`__：   函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.10.0及以上版本支持。

__调用示例__

```c
int uartId;
quint8_t buf[1024];
qint32_t bufLen = read(sockFd, buf, sizeof(buf));
Ql_iotMBLocalRecv(uartId, buf, bufLen);
```
---

<span id="Ql_iotMBDeinit">  </span>
### <font color=#A52A2A  >__Ql_iotMBDeinit__</font>

用于删除已经初始化的modbus组件。

__函数原型__

```c
qbool Ql_iotMBDeinit(void);
```

__参数说明__

无。

__返回值__

* __`True`__：   函数执行成功。
* __`False`__： 函数执行失败。

__备注__

2.10.0及以上版本支持。

__调用示例__

```c
qbool ret = Ql_iotMBDeinit();
```
---
