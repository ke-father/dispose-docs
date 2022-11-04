# 产品配置 相关接口

## **API 列表**

|                    函数                    | 说明                                     |
| :----------------------------------------: | :--------------------------------------- |
|            [quecIot.init()](#init)            | 初始化配置并启动 QuecThing 功能          |
|     [quecIot.setConnmode()](#setConnmode)     | 配置设备与平台之间的连接模式             |
|     [quecIot.getConnmode()](#getConnmode)     | 获取当前设备与平台之间的连接模式         |
|    [quecIot.getWorkState()](#getWorkState)    | 查询当前设备与平台之间的连接状态         |
|      [quecIot.setEventCB()](#setEventCB)      | 设置设备与平台交互事件回调处理函数       |
|  [quecIot.setProductinfo()](#setProductinfo)  | 配置产品信息                             |
|  [quecIot.getProductinfo()](#getProductinfo)  | 查询产品信息                             |
|       [quecIot.setServer()](#setServer)       | 配置服务器信息                           |
|       [quecIot.getServer()](#getServer)       | 查询服务器信息                           |
|     [quecIot.setLifetime()](#setLifetime)     | 配置设备生命周期                         |
|     [quecIot.getLifetime()](#getLifetime)     | 查询设备生命周期                         |
| [quecIot.setPdpContextId()](#setPdpContextId) | 配置设备连接平台使用的 PDP 上下文 ID     |
| [quecIot.getPdpContextId()](#getPdpContextId) | 获取设备连接平台使用的 PDP 上下文 ID     |
|  [quecIot.setSessionFlag()](#setSessionFlag)  | 关闭或开启设备与平台之间的连接加密模式   |
|  [quecIot.getSessionFlag()](#getSessionFlag)  | 查询设备与平台之间的连接加密模式是否开启 |
|  [quecIot.setSoftVersion()](#setSoftVersion)  | 设置设备软件版本用户标识                 |
|  [quecIot.getSoftVersion()](#getSoftVersion)  | 获取设备软件版本用户标识                 |
|   [quecIot.setMcuVersion()](#setMcuVersion)   | 配置 MCU 编号和其对应的版本号            |
|   [quecIot.getMcuVersion()](#getMcuVersion)   | 获取 MCU 编号和其对应的版本号            |
|         [quecIot.setDkDs()](#setDkDs)         | 设置自定义设备标识和设备密钥             |
|         [quecIot.getDkDs()](#getDkDs)         | 获取自定义设备标识和设备密钥             |

## **API 详情**

<span id="init"> </span>
## <font color=#A52A1A  >__quecIot.init__</font>

该函数用于初始化配置并启动QuecThing功能。

__函数原型__

```py
quecIot.init()
```

__参数说明__

无。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。
仅可在使用QuecThing功能之前调用该函数初始化一次。

__调用示例__

```py
ret = quecIot.init()
```

---

<span id="setConnmode">  </span>

## <font color=#A52A1A  >__quecIot.setConnmode__</font>

该函数用于配置设备与平台之间的连接模式。可在 QuecThing 功能启动前和运行中进行配置。

__函数原型__

```py
quecIot.setConnmode(mode)
```

__参数说明__

* __`mode`__：整型。连接模式。
  * __`0`__： 退出或不连接平台
  * __`1`__： 连接平台

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setConnmode(1)
```

---

<span id="getConnmode">  </span>

## <font color=#A52A1A  >__quecIot.getConnmode__</font>

该函数用于获取当前设备与平台之间的连接模式。

__函数原型__

```py
quecIot.getConnmode()
```

__参数说明__

无。

__返回值__

* 整型。连接模式
  * __`0`__： 未发起连接
  * __`1`__： 发起连接
  * __`其他值`__：函数执行失败

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
status = quecIot.getConnmode()
```

---

<span id="getWorkState"> </span>

## <font color=#A52A1A  >__quecIot.getWorkState__ </font>

该函数用于查询当前设备与平台之间的连接状态。

__函数原型__

```py
quecIot.getWorkState()
```

__参数说明__

无。

__返回值__

* 整型。平台连接状态。
  * __`0`__：   未初始化。
  * __`1`__：   已初始化。
  * __`2`__：   正在认证。
  * __`3`__：   认证成功。
  * __`4`__：   认证失败。
  * __`5`__：   正在注册。
  * __`6`__：   注册成功，等待订阅。
  * __`7`__：   注册失败。
  * __`8`__：   已订阅，数据可发送。
  * __`9`__：   订阅失败。
  * __`10`__： 正在注销。
  * __`11`__：  注销成功。
  * __`12`__：  注销失败。
  * __`其他值`__：函数执行失败。

__调用示例__

```py
status = quecIot.getWorkState()
```

---

---

<span id="setEventCB"></span>

## <font color=#A52A1A  >__quecIot.setEventCB__</font>

该函数用于设置设备与平台交互事件回调处理函数（须在连接平台前进行设置）。

__函数原型__

```py
quecIot.setEventCB(eventCb)
```

__参数说明__

* __入参回调函数__
  * __`eventCb`__：该回调函数为设备与平台交互事件回调函数。

    * __函数原型__
      ```py
      eventCb(data_list)
      ```

      * __参数说明__
        * __`data_list`__：形式参数，序列类型。

          * __`data_list[0]`__：整型。Event 事件标识符。详情请参考[事件回调描述](/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-09.md)
          * __`data_list[1]`__：整型。Errcode，错误码。详情请参考[事件回调描述](/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-09.md)
          * __`data_list[2]`__：Value，附带数据。详情请参考[事件回调描述](/deviceDevelop/cellular/QuecPython/api/cellular-quecpython-api-09.md)

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

---

<span id="setProductinfo"></span>

## <font color=#A52A1A  >__quecIot.setProductinfo__</font>

该函数用于配置产品信息。产品信息包括 ProductKey 和 ProductSecret，均为在平台创建产品时生成。

__函数原型__

```py
quecIot.setProductinfo(product_key,product_secret)
```

__参数说明__

* __`product_key`__： 字符串类型。在平台创建产品时生成的ProductKey。
* __`product_secret`__：字符串类型。在平台创建产品时生成的ProductSecret。
  
__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh")
```

---

<span id="getProductinfo">  </span>

## <font color=#A52A1A  >__quecIot.getProductinfo__</font>

该函数用于查询产品信息。

__函数原型__

```py
quecIot.getProductinfo()
```

__参数说明__

无。

__返回值__

* 若函数执行成功则返回产品信息
  * __`index 0`__： 字符串类型。创建产品生成的 ProductKey。
  * __`index 1`__： 字符串类型。创建产品生成的 ProductSecret。
  * __`index 2`__： 字符串类型。平台协议版本号。
* 函数执行失败，返回为空

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.getProductinfo()
```

---

<span id="setServer" ></span>

## <font color=#A52A1A  >__quecIot.setServer__</font>

该函数用于配置服务器信息。

__函数原型__

```py
quecIot.setServer(type,server)
```

__参数说明__

* __`type`__：整型。协议类型。可选参数，不配置时使用默认值 1。
  * __`1`__： MQTT。
* __`server`__：字符串类型。服务器地址（平台域名和端口）。默认值：iot-south.quectel.com:1883。
  可选参数，不配置时使用默认值。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setServer(1,"iot-south.quectel.com:1883")
```

---

<span id="getServer">  </span>

## <font color=#A52A1A  >__quecIot.getServer__</font>

该函数用于查询服务器信息。

__函数原型__

```py
quecIot.getServer()
```

__参数说明__

无。

__返回值__

* 若函数执行成功则返回协议类型和服务器地址
  * __`index 0`__： 整型。协议类型。
  * __`index 1`__： 字符串类型。服务器地址。
* 函数执行失败，返回为空

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.getServer()
```

---

<span id="setLifetime"></span>

## <font color=#A52A1A  >__quecIot.setLifetime__</font>

该函数用于配置设备生命周期。

__函数原型__

```py
quecIot.setLifetime(life_time)
```

__参数说明__

* __`life_time`__：  整型。设备生命周期。范围：1~65535；默认值：120；单位：秒。可选参数，
  不配置时使用默认值。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

接口不检查输入值的合法性。
仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setLifetime(120)
```

---

<span id="getLifetime"> </span>

## <font color=#A52A1A  >__quecIot.getLifetime__</font>

该函数用于查询设备生命周期。

__函数原型__

```py
quecIot.getLifetime()
```

__参数说明__

无。

__返回值__

* 若函数执行成功，返回设备生命周期；
* 若函数执行失败，返回为空。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
lifetime = quecIot.getLifetime()
```

---

<span id="setPdpContextId">  </span>

## <font color=#A52A1A  >__quecIot.setPdpContextId__</font>

该函数用于配置设备连接平台使用的PDP上下文ID。

__函数原型__

```py
quecIot.setPdpContextId(contextID)
```

__参数说明__

* __`contextID`__：   整型。PDP上下文ID。当前仅支持设置为1。可选参数，不配置时使用默认值1。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setPdpContextId(1)
```

---

<span id="getPdpContextId">  </span>

## <font color=#A52A1A  >__quecIot.getPdpContextId__</font>

该函数用于获取设备连接平台使用的PDP上下文ID。

__函数原型__

```py
quecIot.getPdpContextId()
```

__参数说明__

无。

__返回值__

* 若函数执行成功，返回设备连接平台使用的PDP上下文ID；
* 若函数执行失败，返回为空。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
contextid = quecIot.getPdpContextId()
```

---

<span id="setSessionFlag">  </span>

## <font color=#A52A1A  >__quecIot.setSessionFlag__</font>

该函数用于关闭或开启设备与平台之间的连接加密模式。

__函数原型__

```py
quecIot.setSessionFlag(sessionFlag)
```

__参数说明__

* __`sessionFlag`__：   session 启用标识。不配置时使用默认为 FALSE，关闭。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.7.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setSessionFlag(1)
```

---

<span id="getSessionFlag"> </span>

## <font color=#A52A1A  > __quecIot.getSessionFlag__ </font>

该函数用于查询设备与平台之间的连接加密模式是否开启。

__函数原型__

```py
quecIot.getSessionFlag()
```

__参数说明__

无。

__返回值__

* 若函数执行成功，返回配置；
* 若函数执行失败，返回为空。

__备注__

仅2.7.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.getSessionFlag()
```

---

<span id="setSoftVersion"></span>

## <font color=#A52A1A  >__quecIot.setSoftVersion__</font>

该函数用于设置设备软件版本用户标识。

__函数原型__

```py
quecIot.setSoftVersion(appVer)
```

__参数说明__

* __`appVer`__：   session 启符串类型。设备软件版本用户标识。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.8.1及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setSoftVersion("app")
```

---

<span id="getSoftVersion">  </span>

## <font color=#A52A1A  >__quecIot.getSoftVersion__</font>

该函数用于获取设备软件版本用户标识。

__函数原型__

```py
quecIot.getSoftVersion()
```

__参数说明__

无。

__返回值__

* 若函数执行成功，返回设备软件版本用户标识；
* 若函数执行失败，返回为空。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ver = quecIot.getSoftVersion()
```

---

<span id="setMcuVersion"></span>

## <font color=#A52A1A  >__quecIot.setMcuVersion__</font>

该函数用于配置MCU编号及其对应的版本号。需要外挂MCU配置。

__函数原型__

```py
quecIot.setMcuVersion(compno,version)
```

__参数说明__

* __`compno`__： 字符串类型。MCU编号，最大长度32字节。
* __`version`__：字符串类型。MCU编号对应的版本，最大长度64字节。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setMcuVersion("MCU","1_0_0")
```

---

<span id="getMcuVersion"> </span>

## <font color=#A52A1A  >__quecIot.getMcuVersion__</font>

该函数用于获取MCU编号及其对应的版本号。

__函数原型__

```py
quecIot.getMcuVersion()
```

__参数说明__

无。

__返回值__

* 若函数执行成功，返回MCU编号及其对应的版本号；
* 若函数执行失败，返回为空。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.getMcuVersion()
```

---

<span id="setDkDs"></span>

## <font color=#A52A1A  >__quecIot.setDkDs__</font>

该函数用于设置自定义设备标识和设备密钥。

__函数原型__

```py
quecIot.setDkDs(dk,ds)
```

__参数说明__

* __`dk`__： 字符串类型。用户自定义的设备的唯一标识。蜂窝移动模块默认值为IMEI号，Wi-Fi等无线模块			默认值为MAC地址。最大字节长度为16字节。若设置为空，删除自定义的dk与ds，并使用默认配置，此时需重新在开发者中心进行认证。
* __`ds`__： 字符串类型。设备认证后获取的密钥。固定长度为32字节。仅当设置dk为非空且非默认值时，			允许设置设备密钥。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__

仅2.8.1及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.setDkDs("B07xxxxxx2A3","VnhyXXXXXXSTFh")
```

<br>

---

<span id="getDkDs">  </span>

## <font color=#A52A1A  >__quecIot.getDkDs__</font>

该函数用于获取自定义设备标识和设备密钥。仅支持查询通过quecIot.setDkDs()自定义的设备标识。

__函数原型__

```py
quecIot.getDkDs()
```

__参数说明__

无。

__返回值__

* 若函数执行成功，返回自定义的设备标识和设备密钥
  * __`dk`__： 字符串类型。自定义的设备标识。
  * __`ds`__： 字符串类型。自定义的设备密钥。
* 若函数执行失败，返回为空。

__备注__

仅2.8.1及以上版本的QuecThing SDK支持。
仅在 setDkDs 设置了非模组默认的 DK 后才允许查询。

__调用示例__

```py
ret = quecIot.getDkDs()
```

<br>

---
