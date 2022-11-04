# API概览

## **产品配置 相关接口**
| 函数 | 说明  |
|:--------:| :-------------:|
|  Ql_iotInit()| 初始化配置并启动QuecThing功能 |
| Ql_iotConfigSetEventCB()| 设置平台事件回调处理函数|
| Ql_iotConfigSetConnmode() | 配置设备与云平台之间的连接模式 |
| Ql_iotConfigGetConnmode() | 获取当前设备与云平台之间的连接模式 |
| Ql_iotGetWorkState() | 查询当前设备与平台之间的连接状态 |
|Ql_iotConfigSetPdpContextId() | 配置设备连接平台使用的PDP上下文ID| 
|Ql_iotConfigGetPdpContextId()| 获取设备连接平台使用的PDP上下文ID |
|Ql_iotConfigSetServer()| 配置服务器信息| 
|Ql_iotConfigGetServer() | 查询服务器信息 |
|Ql_iotConfigSetLifetime() | 配置设备生命周期| 
|Ql_iotConfigGetLifetime()| 获取设备生命周期|
|Ql_iotConfigSetProductinfo()| 配置云平台产品信息| 
|Ql_iotConfigGetProductinfo() | 获取云平台产品信息| 
|Ql_iotConfigSetMcuVersion()| 配置MCU编号及其对应的版本号| 
|Ql_iotConfigGetMcuVersion()| 获取MCU编号及其对应的版本号| 
|Ql_iotConfigSetSessionFlag() | 关闭或开启设备与平台之间的连接加密模式| 
|Ql_iotConfigGetSessionFlag()| 查询设备与平台之间的连接加密模式是否开启| 
|Ql_iotConfigSetAppVersion() | 设置设备软件版本用户标识| 
|Ql_iotConfigGetSoftVersion() | 获取设备软件版本用户标识| 
|Ql_iotConfigSetDkDs()| 设置自定义设备标识和设备密钥 | 
|Ql_iotConfigGetDkDs() | 获取自定义设备标识和设备密钥| 

<font color=#999AAA >提示：详情请参考[产品配置 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-02.md)。</font>

<br>


## **数据交互 相关接口**
| 函数 | 说明  |
|:--------:| :-------------:|
| Ql_iotCmdBusPassTransSend() |发送透传数据至平台| 
| Ql_iotCmdBusPassTransSend_ex() |根据PkgID响应透传数据至平台| 
| Ql_iotCmdBusPhymodelReport() | 发送物模型数据至平台 |
| Ql_iotCmdBusPhymodelReport_ex() | 根据PkgID响应物模型数据至平台 |
| Ql_iotCmdBusPhymodelAck() | 应答物模型数据|
| Ql_iotCmdSysStatusReport() | 上报设备状态 |
| Ql_iotSysGetDevStatus() | 获取设备状态|
| Ql_iotCmdSysDevInfoReport() | 上报指定设备信息 |
| Ql_iotSysGetDevInfo() | 获取指定设备信息 |

<font color=#999AAA >提示：详情请参考[数据交互 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-03.md)。</font>

<br>

## **TTLV数据 相关接口**
| 函数 | 说明  |
|:--------:| :-------------:|
| Ql_iotTtlvCountGet() | 获取数据表的节点数量 |
| Ql_iotTtlvNodeGet() | 从数据表中提取数据节点| 
| Ql_iotTtlvFree() | 释放数据表资源 |
| Ql_iotTtlvNodeGetType() | 获取节点数据的类型 |
| Ql_iotTtlvNodeGetBool() | 获取节点数据-Bool 类型 |
| Ql_iotTtlvNodeGetInt()| 获取节点数据-Int 类型 |
| Ql_iotTtlvNodeGetFloat() | 获取节点数据-浮点 类型 |
| Ql_iotTtlvNodeGetString() | 获取节点数据-String 类型 |
| Ql_iotTtlvNodeGetByte() | 获取节点数据-Byte类型 |
| Ql_iotTtlvNodeGetStruct() | 获取节点数据-Struct 类型 |
| Ql_iotTtlvIdGetType() | 获取指定ID节点数据的类型 |
| Ql_iotTtlvIdGetBool() | 获取指定 ID 节点数据-Bool 类型 |
| Ql_iotTtlvIdGetInt() | 获取指定 ID 节点数据-Int 类型 |
| Ql_iotTtlvIdGetFloat() | 获取指定 ID 节点数据-浮点 类型 |
| Ql_iotTtlvIdGetString()| 获取指定 ID 节点数据-String 类型 |
| Ql_iotTtlvIdGetByte() | 获取指定 ID 节点数据-Byte 类型 |
| Ql_iotTtlvIdGetStruct() | 获取指定 ID 节点数据-Struct 类型 |
| Ql_iotTtlvIdAddBool() | 添加节点数据-Bool 类型 |
| Ql_iotTtlvIdAddInt() | 添加节点数据-Int 类型 |
| Ql_iotTtlvIdAddFloat() |  添加节点数据-浮点 类型 |
| Ql_iotTtlvIdAddByte() | 添加节点数据-Byte 类型 |
| Ql_iotTtlvIdAddStruct() | 添加节点数据-Struct 类型 |


<font color=#999AAA >提示：详情请参考[TTLV数据 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-04.md)。</font>

<br>

## **OTA 相关接口**

| 函数 | 说明  |
|:--------:| :-------------:|
| Ql_iotCmdOtaRequest()| 向平台请求OTA升级计划 |
| Ql_iotCmdOtaAction()| 配置OTA升级行为 |
| Ql_iotCmdOtaMcuFWDataRead() | 读取保存在模块中的固件数据|

<font color=#999AAA >提示：详情请参考[OTA 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-05.md)。</font>

<br>




## **GNSS&LBS定位 相关接口**

| 函数 | 说明  |
|:--------:| :-------------:|
|  Ql_iotLocGetSupList()| 获取设备内置定位功能支持的NMEA语句类型|
|  Ql_iotLocGetData() | 获取设备当前内置定位功能的定位数据| 
|  Ql_iotCmdBusLocReportInside()| 上报设备当前内置定位功能的定位数据|
|  Ql_iotCmdBusLocReportInside_ex() | 上报设备当前内置定位功能的定位数据|
|  Ql_iotCmdBusLocReportOutside() | 上报设备外置定位功能的定位数据| 
|  Ql_iotCmdBusLocReportOutside_ex() | 上报设备外置定位功能的定位数据| 

<font color=#999AAA >提示：详情请参考[GNSS&LBS定位 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-07.md)。</font>

<br>



## **设备授权 相关接口**
| 函数 | 说明  |
|:--------:| :-------------:|
|  Ql_iotDBindcodeSet()| 上报绑定信息 |
|  Ql_iotDBindcodeGet() | 获取设备绑定码 |
|  Ql_iotRst() | 重置设备 |

<font color=#999AAA >提示：详情请参考[设备授权 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-08.md)。</font>

<br>



## **DTU-Modbus 相关接口**

| 函数 | 说明  |
|:--------:| :-------------:|
|  Ql_iotMBInit() | 初始化 modbus 组件|
|  Ql_iotMBCloudRecv() | 转换平台下发的物模型数据为 ModBus 格式后发送到 ModBus 从机设备 |
|  Ql_iotMBLocalRecv() | 转发串口接收到的 ModBus 数据至 ModBus 组件中并处理| 
|  Ql_iotMBDeinit() | 注销modbus组件 |
 
<font color=#999AAA >提示：详情请参考[DTU-Modbus 相关接口](/deviceDevelop/wifi/QuecOpen/api/wifi-quecopen-api-09.md)。</font>

<br>



