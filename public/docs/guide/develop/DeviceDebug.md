# 设备调试

本文介绍产品开发过程中第三步，设备调试。

## **前提条件**

● 已创建产品<br />
● 已购买与产品设备类型对应的模组<br />
● 已根据设备开发指引完成设备端开发，并将设备接入了开发者中心。具体开发流程可参考 [设备开发](/deviceDevelop/preliminaries.md)

## **操作步骤**

1.登录开发者中心后，点击产品面板或者面板上 **“设备开发”** 按钮，则会进入产品开发流程。

2.完成设备开发后，点击“下一步”，或直接点击进度栏上 **“③设备调试”**，进入设备调试页。

<a data-fancybox title="img" href="/guide/image2022-3-15_17-20-36.png?version=1&modificationDate=1646469585000&api=v2">![img](/guide/image2022-3-15_17-20-36.png?version=1&modificationDate=1646469585000&api=v2)</a>

3.点击添加设备，可手动添加不同认证方式的设备。<br />

动态认证设备：当关闭产品级别动态认证功能时，仅已导入的设备可以通过ProductKey和ProductSecret连接云端进行认证，并获取到DeviceSecret。<br />

静态认证设备：需要预先烧录DeviceSecret后的设备可登录云端，同时云端将拒绝DeviceKey、DeviceSecret不匹配的设备进行认证操作。<br />

静态认证类型的设备添加成功后，可通过“设备详情”或“批次管理”页面，获取平台为设备生成的DeviceSecret。<br />

备注：仅<span v-if="!isEu">LwM2M、</span>MQTT标准协议产品支持添加静态认证类型设备。

X.509证书设备：平台支持设备使用自己的X.509证书进行认证鉴权，设备接入前需要上传设备的CA证书。

添加此认证类型设备时，可选择录入对应的设备证书指纹，若不录入则会以设备初次连接时所使用的证书生成指纹，后续连接将与该指纹进行匹配验证。

设备证书指纹需采用SHA-1算法计算，如：openssl x509 -fingerprint -sha1 -in certfile.crt，openssl生成的指纹带有":"号，需将":"去除后上传40位长度的16进制字符串。

4.点击设备列表页的操作栏 **“设备调试”** 按钮，进入设备调试页。

<a data-fancybox title="img" href="/guide/image2022-3-15_17-19-29.png?version=1&modificationDate=1646469693000&api=v2">![img](/guide/image2022-3-15_17-19-29.png?version=1&modificationDate=1646469693000&api=v2)</a>

左侧是数据发送面板，右侧是调试的实时日志面板，当设备在线时，可以通过左侧面板下发数据，通过“通信日志”可以查看设备上行到云端的数据。

若产品的数据格式是“透传/自定义”，则设备调试时可直接下发十六进制或字符串内容。

<a data-fancybox title="img" href="/guide/image2022-3-15_17-21-37.png?version=1&modificationDate=1646615141000&api=v2">![img](/guide/image2022-3-15_17-21-37.png?version=1&modificationDate=1646615141000&api=v2)</a>
