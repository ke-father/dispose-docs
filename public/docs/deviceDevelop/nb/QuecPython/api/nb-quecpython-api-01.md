# API概览


## __产品配置 相关接口__

| 函数 | 说明  |
|:--------:| :-------------|
|quecIot.init()|初始化配置并启动 QuecThing 功能 |
|quecIot.setConnmode() |配置设备与平台之间的连接模式 |
|quecIot.getConnmode()|获取当前设备与平台之间的连接模式 |
| quecIot.getWorkState()|查询当前设备与平台之间的连接状态|
|quecIot.setEventCB() |设置设备与平台交互事件回调处理函数 |
| quecIot.setProductinfo()|配置产品信息 |
|quecIot.getProductinfo() |查询产品信息 |
| quecIot.setServer()|配置服务器信息 |
|quecIot.getServer()|查询服务器信息 |
| quecIot.setLifetime()|配置设备生命周期 |
|quecIot.getLifetime() |查询设备生命周期 |	
| quecIot.setPdpContextId()|配置设备连接平台使用的 PDP 上下文 ID |
| quecIot.getPdpContextId()|获取设备连接平台使用的 PDP 上下文 ID |
|quecIot.setSoftVersion() |设置设备软件版本用户标识|
|quecIot.getSoftVersion() |获取设备软件版本用户标识|
|quecIot.setMcuVersion() |配置 MCU 编号和其对应的版本号 |
|quecIot.getMcuVersion() |获取 MCU 编号和其对应的版本号|
|quecIot.setDkDs()|设置自定义设备标识和设备密钥 |
|quecIot.getDkDs() |获取自定义设备标识和设备密钥|
|quecIot.setPsk()|设置设备的PSK密钥|
|quecIot.getPsk()|获取设备的PSK密钥|

<font color=#999AAA >提示：详情请参考[产品配置 相关接口](/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-02.md)。</font>

<br>

 

 ## __数据业务 相关接口__

| 函数 | 说明  |
|:--------:| :-------------:|
|quecIot.passTransSend() |发送透传数据至平台 |
|quecIot.phymodelReport()|发送物模型数据至平台 |
|quecIot.phymodelAck()|应答平台请求的物模型数据 |
|quecIot.statusReport()|上报设备状态 |
|quecIot.devInfoReport() |上报指定内容信息 |
|quecIot.getDevStatus() |获取设备状态 |
|quecIot.getDevInfo() |获取指定设备信息|

<font color=#999AAA >提示：详情请参考[数据业务 相关接口](/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-03.md)。</font>

<br>

## __OTA 相关接口__

| 函数 | 说明  |
|:--------:| :-------------:|
| quecIot.otaRequest()|向平台请求OTA升级计划 |
| quecIot.otaAction()|配置OTA升级行为 |
| quecIot.mcuFWDataRead()|读取保存在模块中的固件数据 |


<font color=#999AAA >提示：详情请参考[OTA 相关接口](/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-04.md)。</font>

<br>

## __设备定位 相关接口__

| 函数 | 说明  |
|:--------:| :-------------:|
| quecIot.getLocSupList()|获取设备内置定位功能支持的NMEA语句类型 |
| quecIot.getLocData() |获取设备当前内置定位功能的定位数据 |
| quecIot.locReportInside()|上报设备当前内置定位功能的定位数据 |
| quecIot.locReportOutside()|上报设备外置定位功能的定位数据 |

<font color=#999AAA >提示：详情请参考[设备定位 相关接口](/deviceDevelop/nb/QuecPython/api/nb-quecpython-api-05.md)。</font>

