# OTA 相关接口
## **API 列表**

| 函数 | 说明  |
|:--------:| :-------------:|
| [quecIot.otaRequest()](#otaRequest)|向平台请求OTA升级计划 |
| [quecIot.otaAction()](#otaAction) |配置OTA升级行为 |
| [quecIot.mcuFWDataRead()](#mcuFWDataRead)|读取保存在模块中的固件数据 |

## **API 详情**




<span id="otaRequest">  </span>
## <font color=#A52A1A  >__quecIot.otaRequest__</font>

该函数用于向平台请求OTA升级计划。

__函数原型__

```py
quecIot.otaRequest(mp_mode)
```
__参数说明__

 * __`mp_mode`__：   是否需要额外文件校验 SHA256 信息。
	* __`0`__：不需要 
	 * __`1`__：需要

__返回值__

* __`True`__：   函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.8.2及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.otaRequest(0)
```
---

<span id="otaAction">  </span>
## <font color=#A52A1A  >__quecIot.otaAction__</font>

该函数用于在设备接收到平台推送的升级任务时，配置OTA升级行为。

__函数原型__

```py
quecIot.otaAction(action)
```
__参数说明__

 * __`action`__：  整型。OTA升级行为。
	* __`0`__： 拒绝升级。 
	* __`1`__： 确认升级。
	* __`2`__： MCU通知下载下一块固件数据 
	* __`3`__： MCU上报更新中状态

__返回值__

* __`True`__：   函数执行成功。
* __`False`__： 函数执行失败。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.otaAction(1)
```
---


<span id="mcuFWDataRead">  </span>
## <font color=#A52A1A  >__quecIot.mcuFWDataRead__</font>

该函数用于读取保存在模块中的固件数据。

__函数原型__

```py
quecIot.mcuFWDataRead(addr,len)
```
__参数说明__

 * __`addr`__：整型。读取数据开始位置。单位：字节。
 * __`len`__： 整型。待读取的数据长度。


__返回值__

* 若函数执行成功则返回读取的固件数据；
* 若函数执行失败则返回为空。

__备注__

仅2.3.3及以上版本的QuecThing SDK支持。

__调用示例__

```py
ret = quecIot.mcuFWDataRead(0,1024)
```
--- 
