# 设备列表

本文介绍设备运维中设备的相关操作。

## **设备添加**

### **前提条件**

● 已创建产品

### **操作步骤**

1.登录开发者中心后，点击左侧菜单 **“设备管理”** → **“设备运维”** ，出现设备列表。

<a data-fancybox title="img" href="/guide/image2022-3-8_16-43-12.png?version=2&modificationDate=1647338478000&api=v2">![img](/guide/image2022-3-8_16-43-12.png?version=2&modificationDate=1647338478000&api=v2)</a>

2.点击右侧 **“添加设备”** 按钮，弹出如下对话框

<a data-fancybox title="img" href="/guide/image2022-3-8_16-52-10.png?version=1&modificationDate=1646728954000&api=v2">![img](/guide/image2022-3-8_16-52-10.png?version=1&modificationDate=1646728954000&api=v2)</a>

3.设备从平台可以通过单个添加或者批量导入两种方式加入到平台。

无论是单个添加或是批量导入均可添加不同认证方式的设备。

动态认证设备：当关闭产品级别动态认证功能时，仅已导入的设备可以通过ProductKey和ProductSecret连接云端进行认证，并获取到DeviceSecret。

静态认证设备：需要预先烧录DeviceSecret后的设备可登录云端，同时云端将拒绝DeviceKey、DeviceSecret不匹配的设备进行认证操作。

静态认证类型的设备添加成功后，可通过 **“设备详情”** 或 **“批次管理”** 页面，获取平台为设备生成的DeviceSecret。

备注：仅<span v-if="!isEu">LwM2M、</span>MQTT标准协议产品支持添加静态认证类型设备。

X.509证书设备：平台支持设备使用自己的X.509证书进行认证鉴权，设备接入前需要上传设备的CA证书。

添加此认证类型设备时，可选择录入对应的设备证书指纹，若不录入则会以设备初次连接时所使用的证书生成指纹，后续连接将与该指纹进行匹配验证。

设备证书指纹需采用SHA-1算法计算，如：openssl x509 -fingerprint -sha1 -in certfile.crt，openssl生成的指纹带有":"号，需将":"去除后上传40位长度的16进制字符串。

**自动添加设备**

开发者中心支持<span v-if="!isEu">LwM2M、</span>MQTT标准协议设备接入。当开启产品级动态认证开关功能时，可把产品创建时获得的密钥（ProductKey和ProductSecret）烧录进设备，新设备完成认证流程后将自动添加到对应产品的设备列表中。

4.点击右侧“生成SN”按钮，可以根据需要生成一定数量的SN，（每次生成最多10000个）用于App端绑定设备所用。

<a data-fancybox title="img" href="/guide/image2022-3-8_17-25-18.png?version=1&modificationDate=1646730942000&api=v2">![img](/guide/image2022-3-8_17-25-18.png?version=1&modificationDate=1646730942000&api=v2)</a>

对于设备的一些其他操作，详见下表

| 操作     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| 重置 | 当设备连接至平台后，若想重置设备密钥（DeviceSecret）或X.509证书指纹，可以通过设备信息页的重置按钮，重新进行认证流程。 |
| 子设备管理   | 仅网关类产品拥有子设备管理功能。用户可在该页面内查看、控制和管理挂在当前网关设备下且接入网关方式为产品整合的子设备。 |
| 删除     | 当设备处于未激活状态时，可以选择删除此设备重新进行接入，删除后系统仍会保留该设备产生过的历史数据。 |
| 设备调试 | 详见[设备调试](/guide/deviceManage/operation/Debugger.md) |

  