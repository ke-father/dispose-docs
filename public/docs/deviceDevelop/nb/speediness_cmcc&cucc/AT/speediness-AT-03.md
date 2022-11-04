# 快速上云

##  __一、 测试通讯__
通过 __移远MCU仿真工具__ 发送 __“AT”__ 到模组测试AT指令功能是否正常，当串口工具打印 __“OK”__ 返回值时，表示您的设备已成功与PC端通讯成功。MCU仿真工具交互示例如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-04.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-04.png)</a>



## __二、初始化配置__
如果是初次连接开发者中心，在此之前您还需要完成初始化配置。

__QuecThing配置部分相关AT指令__


| AT指令 |     解析    |说明|
|:--------:|:-------------:|:-------------|
| AT+QIOTCFG="productinfo"[,\<pk>,\<ps>]| 配置PK/PS|\<pk>创建产品生成的 ProductKey；<br> \<ps>创建产品生成的 ProductSecret；|


<font color=#999AAA >提示：详情请参考[产品配置相关命令](/deviceDevelop/nb/AT/API/nb-at-03.md)。</font>


__1.平台导出物模型TSL文件__

打开 __开发者中心__ ，在 __功能定义__ 下，点击 __功能导出__ 按钮即可导出 __Json格式的物模型TSL文件__ 到本地。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-06.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-06.png)</a>

__2.配置PK、PS__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-07.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-07.png)</a>

__3.添加产品信息__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-08.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-08.png)</a>

* __ProductKey__：创建产品生成的 ProductKey。
* __ProductSecret__：创建产品生成的 ProductSecret。
* __数据格式__：分别为 __物模型__ 与 __透传__ 两种数据格式，选择产品相对应的数据格式即可。
* __功能定义文件__：点击 __导入文件__ 按钮并选择第一步导出的 __物模型TSL文件__ 。<font color=#999AAA >提示：数据格式选择透传时则无此步骤。</font>


__4.发送产品配置信息指令__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-09.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-09.png)</a>

<font color=#999AAA >如无特别要求暂且不需要修改其他配置。</font>



## __三、连接开发者中心__

__1.连接平台AT指令解析__

| AT指令 |     解析    |说明|
|:--------:|:-------------:|:-------------|
|AT+QIOTREG=<reg_mode>|配置平台连接模式|__0__：注销并关闭接入 QuecThing 功能<br>__1__：手动启用 QuecThing；若未配置 PK/PS/平台域名和端口，则返回 ERROR<br>__2__：自动启用 QuecThing；此模式会在设备开机后自动连接平台，若未配置 PK/PS/平台域名和端口，则返回 ERROR|

<font color=#999AAA >提示：详情请参考[产品配置相关命令](/deviceDevelop/nb/AT/API/nb-at-03.md)。</font>


__2.启动连接操作__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-10.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-10.png)</a>

__3.连接成功响应__
当串口工具打印以下返回值时，表示您的设备已成功接入到平台，此时您的设备便可与平台通信了。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-11.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-11.png)</a>
