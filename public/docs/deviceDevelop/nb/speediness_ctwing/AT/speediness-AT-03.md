# 快速上云

##  __一、 测试通讯__
通过 __移远MCU仿真工具__ 发送 __“AT”__ 到模组测试AT指令功能是否正常，当串口工具打印 __“OK”__ 返回值时，表示您的设备已成功与PC端通讯成功。MCU仿真工具交互示例如下图所示。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-04.png">![img](/deviceDevelop/nb/speediness_cmcc&cucc/resource/AT/Speediness-AT-04.png)</a>




##  **二、初始化配置**
若当前设备为首次连接开发者中心，在连接平台之前还需完成初始化配置。

__QuecThing配置部分相关AT命令__


| AT命令 |     解析    |参数说明|
|:--------:|:-------------:|:-------------:|
| AT+QIOTCFG="productinfo"[,\<pk>,\<ps>]| 配置PK/PS|\<pk>创建产品生成的 ProductKey； \<ps>创建产品生成的 ProductSecret|
|AT+QIOTCFG="psk"[,\<psk\>]| 配置NB模组共享密钥 <font color=#999AAA >默认值为：关闭</font>|\<psk>添加设备时所填写的预共享密钥|

<font color=#999AAA >提示：详情请参考[产品配置相关命令](/deviceDevelop/nb/AT/API/nb-at-03.md)。</font>


__1、平台导出物模型TSL文件__

打开 __开发者中心__ ，在 __功能定义__ 下，点击 __功能导出__ 按钮导出 __物模型TSL文件__ 到本地。

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-13.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-13.png"></a>



__2、进入产品配置信息页面__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-14.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-14.png"></a>


__3、添加产品配置信息详情页__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-15.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-15.png"></a>

* __ProductKey__：创建产品生成的 ProductKey。
* __ProductSecret__：创建产品生成的 ProductSecret。
* __数据格式__：分别为 __物模型__ 与 __透传__ 两种数据格式，选择产品相对应的数据格式即可。
* __功能定义文件__：点击 __导入文件__ 按钮并选择第一步导出的 __物模型TSL文件__ 。  

<font color=#999AAA >提示：数据格式选择透传时则无此步骤。</font>

<br>

__4、配置产品信息__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-16.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-16.png"></a>

<font color=#999AAA >如无特别要求暂且不需要修改其他配置。</font>

**5、配置PSK**

倘若创建产品时数据加密方式选择DTLS,则需配置设备PSK；若数据加密方式为明文，则无需配置PSK。


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-17.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-17.png"></a>


<font color=#999AAA >提示：添加设备时所设置的密匙，若无填写则为模组IMEI号。</font>




## **三、连接平台**

__连接平台AT命令解析__

| AT命令 |     解析    |说明|
|:--------:|:-------------:|:-------------:|
|AT+QIOTREG=<reg_mode>|配置平台连接模式|__0__：注销；<br> __1__：手动启用；<br> __2__：模块开机后自动连接开发者中心；|

<font color=#999AAA >提示：详情请参考[产品配置相关命令](/deviceDevelop/nb/AT/API/nb-at-03.md)。</font>


__连接云平台指令如下图所示__

<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-18.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-18.png"></a>


当MCU仿真工具打印以下返回值时，表示设备已成功接入到开发者中心，此时设备可与平台通信。


<a data-fancybox title="img" href="/deviceDevelop/nb/speediness_ctwing/resource/picture-19.png"><img src="/deviceDevelop/nb/speediness_ctwing/resource/picture-19.png"></a>
