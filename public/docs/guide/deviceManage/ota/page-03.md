# 监控统计

本文介绍OTA升级计划的监控统计，监控指对正在升级的计划中设备进行实时升级状态监控，统计指的是对已经结束的计划进行升级成功率，升级设备数相关统计。

## **前提条件**

● 已创建升级计划，并进行过或正在进行设备升级

## **操作步骤**

1.登录开发者中心后，点击左侧菜单“设备管理”→"OTA升级"页。

<a data-fancybox title="img" href="/guide/image2022-3-12_13-45-2.png?version=1&modificationDate=1647063296000&api=v2">![img](/guide/image2022-3-12_13-45-2.png?version=1&modificationDate=1647063296000&api=v2)</a>

2.点击上图“升级计划”面板中“查看”按钮，跳转至升级计划列表

<a data-fancybox title="img" href="/guide/image2022-3-12_13-46-36.png?version=1&modificationDate=1647063390000&api=v2">![img](/guide/image2022-3-12_13-46-36.png?version=1&modificationDate=1647063390000&api=v2)</a>

3.点击列表中操作栏“升级监控”，进入监控统计页

<a data-fancybox title="img" href="/guide/image2022-3-12_13-47-22.png?version=1&modificationDate=1647063436000&api=v2">![img](/guide/image2022-3-12_13-47-22.png?version=1&modificationDate=1647063436000&api=v2)</a>

设备升级状态说明

| 设备升级状态 | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| 升级失败     | 设备中只要有一个组件升级失败，或计划结束仍未进行升级，则设备升级失败 |
| 升级成功     | 设备中所有组件升级成功，设备升级成功                         |
| 升级中       | 设备上报OTA请求后，平台匹配计划成功下发升级计划信息，设备收到计划并确认升级后，此设备进入升级中状态 |
| 未升级       | 设备未上线或者上报了版本未收到升级计划                       |


4.点击设备列表中操作栏“组件详情”查看，可对设备中每个组件的升级进度进行查看

<a data-fancybox title="img" href="/guide/image2022-3-12_14-0-18.png?version=1&modificationDate=1647064212000&api=v2">![img](/guide/image2022-3-12_14-0-18.png?version=1&modificationDate=1647064212000&api=v2)</a>

设备在整个升级过程中会上报多条组件升级信息，这些信息被称为组件升级状态，具体分类见下表：

组件升级状态说明

| 组件升级状态 | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| 开始         | 包括设备上报OTA请求，平台匹配升级计划并下发                  |
| 设备确认     | 包括设备收到升级计划并确认升级，平台下发升级组件下载地址     |
| 下载中       | 包括设备收到升级包地址，去OSS获取升级包信息                  |
| 升级中       | 包括下载完成后，设备更新                                     |
| 成功/失败    | 包括设备上报更新成功，计划到期介绍，计划强制终止，升级失败，超过失败重试次数 |

5.点击“组件详情”中“升级日志”→“详情”，可对组件整个升级日志进行查看，升级日志按照时间先后顺序展示。

<a data-fancybox title="img" href="/guide/image2022-3-12_14-8-51.png?version=1&modificationDate=1647064725000&api=v2">![img](/guide/image2022-3-12_14-8-51.png?version=1&modificationDate=1647064725000&api=v2)</a>
