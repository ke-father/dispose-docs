# 安全中心

本文介绍SaaS开发第二步，去安全中心创建AcccessKey/AccessSecret。

## **前提条件**

● 申请开通消息订阅并审核通过<br />
● 申请开通OpenAPI并审核通过

## **操作步骤**

1.登录开发者中心后，点击击左侧菜单栏“SaaS开发” → "SaaS开发指引"，进入SaaS开发指引页，页面上有跳转“安全中心”链接。您也可以点击个人头像下拉选择“安全中心”点击进入。

<a data-fancybox title="img" href="/guide/image2022-3-7_19-55-14.png?version=1&modificationDate=1646653546000&api=v2">![img](/guide/image2022-3-7_19-55-14.png?version=1&modificationDate=1646653546000&api=v2)</a>

2.点击安全中心右侧按钮“新增AccessKey”，出现如下弹窗

<a data-fancybox title="img" href="/guide/image2022-3-7_19-56-56.png?version=1&modificationDate=1646653647000&api=v2">![img](/guide/image2022-3-7_19-56-56.png?version=1&modificationDate=1646653647000&api=v2)</a>

为您的AccessKey输入一个别名，便于日常AccessKey的管理，点击“确定”，创建AccessKey。

注意：AccessKey每个账号拥有数量限制，具体见下表

| 账号类型   | AccessKey数量 | 描述                                                         |
| :--------- | :------------ | :----------------------------------------------------------- |
| 个人开发者 | 2             | 注册为个人开发者的账号，最多可以创建2个AccessKey用于对接SaaS应用。 |
| 企业用户   | 5             | 注册为企业用户账号，最多可以创建5个AccessKey用于对接SaaS应用。企业账号与其创建的子账号共享这个数量限制。 |

3.若您对安全有要求，可以对自己的SaaS应用添加IP白名单。点击“IP白名单”按钮，弹出如下弹窗。

<a data-fancybox title="img" href="/guide/image2022-3-7_20-5-47.png?version=1&modificationDate=1646654178000&api=v2">![img](/guide/image2022-3-7_20-5-47.png?version=1&modificationDate=1646654178000&api=v2)</a>

首先，需要开启IP白名单功能，在白名单输入框中输入您的SaaS应用IP地址，确认保存后，将只能通过白名单范围内的IP，使用AccessKey调用OpenAPI或消息订阅的功能。

注意：您创建的所有AccessKey都将受到IP白名单的限制。

4.您也可以通过安全中心列表上的操作栏对创建的AccessKey进行删除操作。
