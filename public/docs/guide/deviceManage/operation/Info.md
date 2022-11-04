# 设备信息

本文主要介绍设备运维中设备信息，设备信息主要包含**基本信息**和**模组信息。**

## **前提条件**

● 创建产品<br />
● 完成产品开发-设备调试步骤

## **操作步骤**

1.登录开发者中心后，点击左侧菜单 **“设备管理”** → **“设备运维”** ，出现设备列表页，点击设备操作栏中 **“查看”**，跳转至 **“设备信息”** 页面。

<a data-fancybox title="img" href="/guide/image2022-3-8_19-6-34_en.png?version=1&modificationDate=1646737018000&api=v2" v-if="isEu">![img](/guide/image2022-3-8_19-6-34_en.png?version=1&modificationDate=1646737018000&api=v2)</a>
<a data-fancybox title="img" href="/guide/image2022-3-8_19-6-34.png?version=1&modificationDate=1646737018000&api=v2" v-else>![img](/guide/image2022-3-8_19-6-34.png?version=1&modificationDate=1646737018000&api=v2)</a>

<a data-fancybox title="img" href="/guide/image2022-3-8_19-7-31.png?version=1&modificationDate=1646737075000&api=v2">![img](/guide/image2022-3-8_19-7-31.png?version=1&modificationDate=1646737075000&api=v2)</a>

“基本信息”包括

| 参数         | 描述                                               |
| :----------- | :------------------------------------------------- |
| 所属产品     | 当前设备所在的产品名称                             |
| 设备状态     | 在线/离线                                          |
| 设备名称     | 默认与DeviceKey相同，可编辑                        |
| DeviceKey    | 设备连云标识，当前产品下唯一                       |
| DeviceSecret | 设备密钥。设备连云认证通过后，由平台下发的设备密钥 |
| 认证类型     | 设备连云时使用的鉴权方式                     |
| 证书指纹     | 设备证书标识。设备与平台双向验证通过后，将绑定证书指纹，后续设备只可通过该证书与平台进行连接。</br>设备证书指纹需采用SHA-1算法计算，如：openssl x509 -fingerprint -sha1 -in certfile.crt，openssl生成的指纹带有":"号，需将":"去除后上传40位长度的16进制字符串。</br>重置指纹时可设置新指纹，设置成功后将使用新指纹验证设备连接权限。   |
| 设备类型     | 单品设备、网关设备、网关子设备                     |
| 连接协议     | 设备连云使用的协议。当前仅支持MQTT<span v-if="!isEu">/LwM2M</span>            |
| 创建时间     | 设备添加至平台的时间                                 |
| 最后上线时间 | 设备最近一次上线的时间                                   |
| 设备SN       | 序列号，App端绑定设备的标识。可编辑            |


  

“更多设备信息”即为模组信息

| 参数         | 描述                |
| :----------- | :------------------ |
| 模组类型    |                     |
| 固件版本     |                     |
| MCU版本      |                     |
| ICCID      |                     |
| MCC          | 移动国家代码        |
| MNC          | 移动网络代码        |
| 支持定位方式     | 是否支持某种定位功能    |
