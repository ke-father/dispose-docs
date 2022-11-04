# DTU-Modbus 相关接口
## **API 列表**

| 函数 | 说明  |
|:--------:| :-------------:|
| [quecIot.MBInit()](#MBInit)|初始化 ModBus 组件 |
| [quecIot.MBCloudRecv()](#MBCloudRecv)|转换平台下发的物模型数据为 ModBus 格式后发送到 ModBus 从机设备 |
| [quecIot.MBDeinit()](#MBDeinit) |注销 ModBus 组件|
| [quecIot.MBLocalRecv()](#MBLocalRecv)|转发串口接收到的 ModBus 数据至 ModBus 组件中并处理 |

## **API 详情**

<span id="MBInit">  </span>
## <font color=#A52A1A  >__quecIot.MBInit__</font>

该函数用于初始化ModBus 组件，同时配置可用于烧写配置文件（该配置文件包含设备信息、QuecThing配置和串口配置。该文件由移远通信提供的工具生成，详情可联系移远通信技术支持）的串口列表、注册用于向串口发送数据的回调函数和初始化回调函数。

__函数原型__

```py
quecIot.MBInit(uartList, sendFunc, initCb)
```
__参数说明__

* __输入参数__ 
	 * __`uartList`__：用于烧写配置文件的串口列表。需要自行打开对应串口。
* __入参回调函数__
	* __`sendFunc`__：ModBus 组件需向串口发送数据时将调用该回调函数。用户需在该函数中实现串口发送能力。
		* __函数原型__
			```py
			sendFunc(data_list)
			```
		* __参数说明__
			* __`data_list`__：形式参数，序列类型。
		* __返回值__
			* __`data_list[0]`__：整型。端口号。
			* __`data_list[1]`__：字节数组。需要发送的数据内容。

	 * __`initCb`__：ModBus 组件初始化完成后，将配置文件中的设备信息传入至该回调函数。用户需在该函数中实现串口收发以及设备连接平台的操作。
		* __函数原型__
			```py
			initCb(data_dict)
			```
		
		* __输入参数__
			* __`data_dict`__：形式参数，字典类型。
		* __返回值__
			* __`data_dict["product"]`__：字典类型。
				* __`product_dict["pk"]`__：字符串类型。创建产品生成的 ProductKey。
				* __`product_dict["ps"]`__：字符串类型。创建产品生成的 ProductSecret。
			* __`data_dict["uart"]`__：序列类型。
				* __`uart_list[0]`__：整型。端口号。
				* __`uart_list[1]`__：整型。波特率。
				* __`uart_list[2]`__：整型。数据位。
					* __`0`__：数据位为 5
					* __`1`__：数据位为 6
					* __`2`__：数据位为 7
					* __`3`__：数据位为 8
				* __`uart_list[3]`__：整型。校验位。
					* __`0`__：无校验
					* __`1`__：偶校验
					* __`2`__：奇校验
					* __`3`__：始终为 1
					* __`4`__：始终为 0
				* __`uart_list[4]`__：整型。停止位。
					* __`0`__：停止位为 1
					* __`1`__：停止位为 1.5
					* __`2`__：停止位为 2

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
portList[] = [0,1,2,3,4,5,6,7,8,9]
ret = quecIot.MBInit(portList,modbusUartSend,modbusInitCb)
```

---


<span id="MBCloudRecv">  </span>
## <font color=#A52A1A  >__quecIot.MBCloudRecv__</font>

该函数用于将平台下发的物模型数据转为 ModBus 格式后发送到 ModBus 从机设备。

__函数原型__

```py
quecIot.MBCloudRecv(data)
```
__参数说明__

 * __`data`__：字典类型。需要发送的数据内容。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.MBCloudRecv(data)
```
---

<span id="MBLocalRecv">  </span>
## <font color=#A52A1A  >__quecIot.MBLocalRecv__</font>

该函数用于将串口接收到的 ModBus 数据转发到 ModBus 组件中并处理。

__函数原型__

```py
quecIot.MBLocalRecv(port, data)
```
__参数说明__

 * __`port`__：整型。串口端口号。
 * __`data`__：字节数组。串口接收到的 ModBus 数据。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.MBLocalRecv(1,data)
```
---

<span id="MBDeinit">  </span>
## <font color=#A52A1A  >__quecIot.MBDeinit__</font>

该函数用于注销 ModBus 组件。

__函数原型__

```py
quecIot.MBDeinit()
```
__参数说明__

无。
	 
__返回值__

* __`True`__：函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.MBDeinit()
```
---


