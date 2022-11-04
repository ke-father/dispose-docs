# 设备开发

本文主要介绍产品开发过程中第二步，设备开发。

## **前提条件**

● 创建一个产品<br />
● 完成功能定义

## **操作步骤**

1.登录开发者中心后，点击产品面板或者面板上 **“设备开发”** 按钮，则会进入产品开发流程。

2.完成功能定义后，点击“下一步”，或直接点击进度栏上 **“②设备开发”**，进入设备开发指引页。

<a data-fancybox title="img" href="/guide/image2022-3-5_15-25-33.png?version=2&modificationDate=1647332201000&api=v2">![img](/guide/image2022-3-5_15-25-33.png?version=2&modificationDate=1647332201000&api=v2)</a>

设备开发页会根据当前产品的连网方式，初始化选择设备开发方式。

产品的连网方式与开发方式的关系


<span v-if="isEu">

| 连网方式 | 开发方式                                |
| :------- | :-------------------------------------- |
| 蜂窝移动 | QuecOpen方案<br />QuecPython方案<br />AT指令方案<br />Modbus方案 |
| WiFi     | QuecOpen方案<br />QuecPython方案<br />AT指令方案    |
| 蓝牙     | QuecOpen方案    |

</span>                     
<span v-else>

| 连网方式 | 开发方式                                |
| :------- | :-------------------------------------- |
| 蜂窝移动 | QuecOpen方案<br />QuecPython方案<br />AT指令方案<br />Modbus方案 |
| WiFi     | QuecOpen方案<br />QuecPython方案<br />AT指令方案    |
| NB-IoT   | QuecOpen方案<br />QuecPython方案<br />AT指令方案    |
| 蓝牙     | QuecOpen方案  | 

</span> 


  

3.系统将根据创建产品时所选择的连网方式，以及所选择的开发方式，过滤出当前支持的模组型号，开发者可根据实际开发使用模组进行选择。

4.完成开发方式与使用模组选择后，系统将根据所选内容展示对应的开发指引与资源下载地址

开发指引：主要包含开发指导文档、API文档、示例教程、帮助中心，点击后跳转到对应的文档查看页面。

资源下载：主要包含所选模组开发所需的资料，点击后跳转到对应的资源下载页面。

5.具体设备侧开发，详见[设备开发](/deviceDevelop/preliminaries.md)
