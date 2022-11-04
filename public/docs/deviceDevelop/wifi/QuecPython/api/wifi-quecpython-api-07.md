# 设备授权 相关接口
## **API 列表**

| 函数 | 说明  |
|:--------:| :-------------:|
|  [quecIot.bindcodeSet()](#bindcodeSet) | 上报绑定信息 |
|  [quecIot.bindcodeGet()](#bindcodeGet) | 获取设备绑定码 |
|  [quecIot.rst()](#rst) | 重置设备 | 

## **API 详情**

<span id="bindcodeSet">  </span>
## <font color=#A52A1A  >__quecIot.bindcodeSet__</font>

该函数用于上报设备绑定信息。在 App 通过短距网络（包括 TCP/IP 局域网、BLE 等）绑定设备时有效，需要设备上报与 App 相同的 bindcode 到平台才能完成实际绑定动作。

__函数原型__

```py
quecIot.bindcodeSet(bindcode, timeout)
```
__参数说明__

* 	__`bindcode`__：设备绑定码；字符范围：0~9，A~F，为NULL时系统随机生成(长度固定为16节)。
*   __`timeout`__: 可绑定时间，范围：0-4294967295(单位：秒)，0为取消绑定。

	
__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.10.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
quecIot.bindcodeSet("1234567890123456"， 120)
```
---


<span id="bindcodeGet">  </span>
## <font color=#A52A1A  >__quecIot.bindcodeGet__</font>

该函数用于获取设备绑定码。

__函数原型__

```py
quecIot.bindcodeGet()
```
__参数说明__

无。

__返回值__

* 若函数执行成功则返回列表[bindcode,120]
* 若函数执行失败则返回为空

__备注__

仅2.10.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.bindcodeGet()
```
---


<span id="rst">  </span>
## <font color=#A52A1A  >__quecIot.rst__</font>

该函数用于重置设备信息。被重置的设备信息为 deviceSecret 和设备绑定码。

__函数原型__

```py
quecIot.rst()
```
__参数说明__

无。

__返回值__

* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.10.0及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.rst()
```
---




