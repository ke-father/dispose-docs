# 产品配置 相关指令
## **相关AT指令列表**
  
| 指令名称 | 功能描述 |
|:--------:| :-------------:|
| [AT+QIOTCFG](#AT+QIOTCFG)| 配置可选参数 |
|[AT+QIOTREG](#AT+QIOTREG)   | 配置平台连接模式 |
| [AT+QIOTSTATE](#AT+QIOTSTATE)  | 查询当前设备与平台之间的连接状态 |
| [AT+QIOTMCUVER](#AT+QIOTMCUVER)   | 配置 MCU 版本号 | 
## **相关AT指令详情**

<span id="AT+QIOTCFG">  </span>
## <font color=#A52A2A  >__AT+QIOTCFG (配置可选参数)__</font>
* __说明__：该命令用于配置可选参数。
* __最大响应时间__ ：300 毫秒。
* __特性说明__：该命令立即生效；参数配置自动保存。


### **测试命令**

* __发送：__
	```c
	AT+QIOTCFG=?
	```
	
* __响应：__
	
	```c
	+QIOTCFG: "productinfo",<pk>,<ps>
	+QIOTCFG: "server",(支持的<server_type>列表),<server_URL>
	+QIOTCFG: "lifetime",(支持的<lifetime>范围)
	+QIOTCFG: "buffer",(支持的<buffer_mode>列表)
	+QIOTCFG: "act",(支持的<contextID>范围)
	+QIOTCFG: "tsl",(支持的<tsl_mode>列表)
	+QIOTCFG: "dk_ds",<dk>[,<ds>]
	+QIOTCFG: "psk"[,<psk>]
	OK
	```

* __调用示例(查询可配置的信息及范围)__

	
	设备上电后，若未配置信息，执行 __AT+QIOTCFG=?__ 查询可配置的信息及范围。

	```c
	[TX]AT+QIOTCFG=?
	
	[RX]+QIOTCFG: "productinfo",<pk>,<ps>
	+QIOTCFG: "server",1,<server_URL>
	+QIOTCFG: "lifetime",(1-65535)
	+QIOTCFG: "buffer",(0,1)
	+QIOTCFG: "act",(1-15)
	+QIOTCFG: "tsl",(0,1)
	+QIOTCFG: "dk_ds",<dk>,<ds>
	+QIOTCFG: "psk"[,<psk>]
	[RX]
	
	OK
	```

###  **设置命令**
* __查询/配置产品信息__

	* __发送：__		
	
		```c
		AT+QIOTCFG="productinfo"[,<pk>,<ps>]
		```	
	* __响应：__
	
		若省略可选参数，则查询当前产品信息
		
		```c
		+QIOTCFG: "productinfo",<pk>,<ps>,<ver> 
		
		OK
		```
			
		若指定可选参数，则配置产品信息
		```c
		OK
		```
		若出现任何错误
		```c
		ERROR
		```
	* __参数：__
		* __`<pk>`__ ：字符串类型。创建产品生成的 ProductKey。
		* __`<ps>`__ ：字符串类型。创建产品生成的 ProductSecret。
		* __`<ver>`__ ：字符串类型。设备认证协议版本号。

	* __备注：__
	
	  2.1.2及以上版本支持。
	* __调用示例 (初始化配置产品信息)__

	
		```c
		AT+QIOTCFG="productinfo","p****n","RMW**********Dlt"
		
		OK
		```

* __查询/配置服务器信息__
	
	* __发送：__
	
		```c
		AT+QIOTCFG="server"[,<server_type>,<server_URL>]
		```	
	* __响应：__
	
		若省略可选参数，则查询当前服务器信息
	
		```c
		+QIOTCFG:"server",<server_type>,<server_URL>
		
		OK
		```
		
		若指定可选参数，则配置服务器信息
		```c
		OK
		```
		若出现任何错误
		```c
		ERROR
		```
	* __参数：__
		*	__`<server_type>`__： 整型。支持的协议类型。 
			*	__`0`__：COAP 协议
		* __`<server_URL>`__ ：字符串类型。服务器地址（平台域名和端口）。默认值："coap://iot-south.quectel.com:5683"。
	* __备注：__
	
		2.1.2及以上版本支持。
		
	* __调用示例 (配置服务器信息)__

		```c
		AT+QIOTCFG="server",0,"coap://iot-south.quectel.com:5683"
		
		OK
		```

* __查询/配置设备生命周期__
	
	* __发送：__
	
		```c
		AT+QIOTCFG="lifetime"[,<lifetime>] 
		```	
	* __响应：__
	
		若省略可选参数，则查询当前设备生命周期
	
		```c
		+QIOTCFG: "lifetime",<lifetime>
		
		OK
		```
		
		若指定可选参数，则配置设备生命周期
		```c
		OK
		```
		若出现任何错误
		```c
		ERROR
		```
	* __参数：__
		* __`<lifetime>`__ ：整型。设备生命周期。移动/联通运营商范围：1~864000；电信运营商范围：300~86400；默认值：86400；单位：秒。	 
	* __备注：__
	
		2.1.2及以上版本支持。
	* __调用示例 (配置设备生命周期)__

		```c
		AT+QIOTCFG="lifetime",86400
		
		OK

* __查询/配置下行数据缓存模式__
	
	* __发送：__
	
	```c
	AT+QIOTCFG="buffer"[,<buffer_mode>]
	```	
	* __响应：__
	
		若省略可选参数，则查询当前下行数据缓存模式
	
		```c
		+QIOTCFG: "buffer",<buffer_mode>
		
		OK
		```
		
		若指定可选参数，则配置下行数据缓存模式
		```c
		OK
		```
		若出现任何错误
		```c
		ERROR
		```
	* __参数：__
		* __`<buffer_mode>`__：整型。关闭或开启下行数据缓存模式。
	 	* __`0`__ ：关闭缓存模式
	 	* __`1`__ ：开启缓存模式
		
	* __备注：__
	
		2.1.2及以上版本支持。
		
	* __调用示例 (打开下行数据缓存模式)__



		```c
		AT+QIOTCFG="buffer",1
		
		OK
		```

* __查询/配置 PDP 上下文 ID__

	
	* __发送：__
	
		```c
		AT+QIOTCFG="act"[,<contextID>]
		```	
	* __响应：__
	
		若省略可选参数，则查询当前使用的 PDP 上下文 ID
	
		```c
		+QIOTCFG: "act",<contextID>
		
		OK
		```
		
		若指定可选参数，则配置设备连接平台使用的 PDP 上下文 ID
		```c
		OK
		```
		若出现任何错误
		```c
		ERROR
		```
	* __参数：__
	   * __`<contextID>`__ 整型。场景 ID。范围：1~15。实际范围以具体模块为准。 
	* __备注：__
	
		2.1.2及以上版本支持。
	* __调用示例 (配置设备连接平台使用的PDP 上下文 ID)__

		```c
		AT+QIOTCFG="act",1
		
		OK
		```


* __查询/配置物模型数据结构格式__
	
	* __发送：__
	
		```c
		AT+QIOTCFG="tsl"[,<tsl_mode>]
		```	
	* __响应：__
	
		若省略可选参数，则查询当前物模型数据结构格式
	
		```c
		+QIOTCFG: "tsl",<tsl_mode>
		
		OK
		```
		
		若指定可选参数，则配置物模型数据结构格式
		```c
		OK
		```

		若出现任何错误：
		```c
		ERROR
		```
	* __参数：__
		* __`<tsl_mode>`__ 整型。物模型数据格式。
			* 	__`0`__ ：TTLV 格式
			* __`1`__： JSON 格式 
	* __备注：__
	
		2.1.2及以上版本支持。
		
	* __调用示例 (配置物模型JSON数据格式)__


		```c
		AT+QIOTCFG="tsl",1
		
		OK
		```


* __查询/设置自定义设备标识和设备密钥__

	* __发送：__
	
		```c
		AT+QIOTCFG="dk_ds",[<dk>[,<ds>]]
		```	
	* __响应：__
	
		若省略可选参数，则查询当前设备标识和设备密钥（仅支持查询通过该命令自定义的设备标识）
	
		```c
		+QIOTCFG:"dk_ds",<dk>,<ds>
		
		OK
		```
		
		若仅指定\<dk>且为空字符串，则删除自定义的\<dk\>与\<ds\>，并使用默认配置
		```c
		OK
		```
		若仅指定\<dk\>且不为空，则自定义设备标识，设备将开始认证流程
		```c
		OK
		```
		若指定可选参数且不为空，则自定义设备标识和设备密钥
		```c
		OK
		```
		若指定可选参数，且\<dk\>和\<ds\>为空字符串，则清除自定义的设备标识和设备密钥
		```c
		OK
		```
		若出现任何错误：
		```c
		ERROR
		```
	* __参数：__
	   * __`<dk>`__ 字符串类型。用户自定义的设备的唯一标识。蜂窝移动模块默认值为 IMEI 号，Wi-Fi等无线模块默认值为 MAC 地址。
		* __`<ds>`__ 字符串类型。设备认证后获取的密钥。 
		
	* __备注：__
	
		2.1.2及以上版本支持。
	* __调用示例 (配置自定义设备标识)__

	
		```c
		AT+QIOTCFG="dk_ds",12345678
		
		OK
		```

* __查询/配置设备PSK密钥__

	* __发送：__
	
		```c
		AT+QIOTCFG="psk",[<psk>]
		```	
	* __响应：__
	
		若省略可选参数，则查询当前设备PSK密钥
		```c
		+QIOTCFG:"psk",<psk>
		
		OK
		```
		若指定可选参数且为空字符串，则删除设备的PSK密钥
		 ```c
		OK
		```

		若指定可选参数且不为空，则设置设备的PSK密钥
		 ```c
		OK
		```
		
		若出现任何错误：
		```c
		ERROR
		```
	* __参数：__
	
	  * __`<psk>`__ 字符串类型。设备PSK密钥。最大长度：32字节。

	* __备注：__
	
		2.1.2及以上版本支持。
	* __调用示例 (配置PSK密钥)__
		```c
		[TX]AT+QIOTCFG="psk","1234567890"
		
		[RX]OK
		```

<span id="AT+QIOTREG">  </span>
## <font color=#A52A2A  >__AT+QIOTREG (配置平台连接模式)__</font>

* __说明__：该命令用于配置平台连接模式。
* __最大响应时间__ ：300 毫秒。
* __特性说明__：该命令立即生效；参数配置自动保存。



### **测试命令**

* __发送：__

	```c
	AT+QIOTREG=?
	```	
* __响应：__

	返回支持的连接模式范围

	```c
	+QIOTREG: (支持的<reg_mode>范围)
	
	OK
	```


### **查询命令**

* __发送：__

	```c
	AT+QIOTREG?
	```	
* __响应：__

	返回支持的连接模式范围

	```c
	+QIOTREG: <reg_mode>
	
	OK
	```	

### **设置命令**

* __发送：__

	```c
	AT+QIOTREG=<reg_mode>
	```	
* __响应：__

	若设置成功

	```c
	OK
	```
	若出现任何错误
	 ```c
	ERROR
	```	
***


__参数：__

 * __`<reg_mode>`__ 整型。连接模式。
	 * __`0`__ ：注销并关闭接入 QuecThing 功能。
	 * __`1`__ ：手动启用 QuecThing；如果没有配置 PK/PS/开发者中心 域名端口，则返回 ERROR。 
	 * __`2`__ ：自动启用 Quecthing；此模式会在模块开机后自动连接 开发者中心 服务器，如果没有配置 PK/PS/开发者中心 域名端口，则返回 ERROR。

__备注：__

2.1.2及以上版本支持。

#### **示例**

__示例1 (查询云平台连接模式)__
响应 __0__ ：注销并关闭接入。
```c
AT+QIOTREG?

+QIOTREG: 0

OK
```

__示例2 (配置手动启用连接云平台模式)__

```c
AT+QIOTREG=1

OK
```

***
<span id="AT+QIOTSTATE">  </span>

## <font color=#A52A2A  >__AT+QIOTSTATE (查询平台连接状态)__</font>

* __说明__：该命令用于查询当前设备与平台之间的连接状态。
* __最大响应时间__ ：300 毫秒。




### **查询命令**

* __发送：__

	```c
	AT+QIOTSTATE?
	```	
* __响应：__

	 响应平台连接状态
	
	```c
	+QIOTSTATE: <state>
	
	OK
	```	
***

__参数：__

 * __`<state>`__ 整型。平台连接状态。
	* __`0`__：  未初始化。
	* __`1`__：  已初始化。
	* __`2`__：  正在认证。 
	* __`3`__：  认证成功。 
	* __`4`__：  认证失败。 
	* __`5`__：  正在注册。 
	* __`6`__：  注册成功，等待订阅。 
	* __`7`__：  注册失败。 
	* __`8`__：  已订阅，数据可发送。 
	* __`9`__：  订阅失败。 
	* __`10`__： 正在注销。 
	* __`11`__：  注销成功。 
	* __`12`__：  注销失败。

__备注：__

2.1.2及以上版本支持。
#### **示例**

__示例1 (查询平台连接状态)__
响应 __8__ ：终端设备已连接上云平台，可以进行数据业务交互。
```c
AT+QIOTSTATE?

+QIOTSTATE: 8

OK
```
***


<span id="AT+QIOTMCUVER">  </span>
## <font color=#A52A2A  >__AT+QIOTMCUVER (配置 MCU 版本号)__</font>

* __说明__：该命令用于配置 MCU 版本号。
* __最大响应时间__ ：300 毫秒。
* __特性说明__：该命令立即生效；参数配置自动保存。


***

### **测试命令**

* __发送：__

	```c
	AT+QIOTMCUVER=?
	```	
* __响应：__

	响应是否支持该指令

	```c
	+QIOTMCUVER: <MCU_number>,<MCU_version>
	
	OK
	```


### **查询命令**

* __发送：__

	```c
	AT+QIOTMCUVER?
	```	
* __响应：__

	响应已设置的MCU编号及MCU对应的版本

	```c
	+QIOTMCUVER: <MCU_number1>,<MCU_version1> 
	[+QIOTMCUVER: <MCU_number2>,<MCU_version2>] […]
	
	OK
	```	
	若出现任何错误：
	```c
	ERROR
	```

### **设置命令**

* __发送：__

	```c
	AT+QIOTMCUVER=<MCU_number>[, <MCU_number_version>]
	```	
* __响应：__

	若省略可选参数，则查询当前 MCU 版本

	```c
	+QIOTMCUVER: <MCU_number>,<MCU_version> 
	
	OK
	```
	若指定可选参数，则配置 MCU 版本

	```c
	OK
	```	
	若出现任何错误
	```c
	ERROR
	```	
***


__参数：__

 * __<MCU_numberN>__：字符串类型。MCU 编号。
* __<MCU_versionN>__： 字符串类型。MCU 对应的版本。

__备注：__

2.1.2及以上版本支持。

#### **示例**

__示例1 (查询当前MCU版本号)__
响应：MCU编号为 __MCU1__；对应的版本号为：__1.0.0__ 。
```c
AT+QIOTMCUVER?

+QIOTMCUVER: "MCU1","1.0.0"

OK
```

__示例2(配置MCU编号与版本号)__

配置当前MCU编号为“MCU1”及版本号为“1.0.1”。
```c
AT+QIOTMCUVER="MCU1","1.0.1"

OK
```