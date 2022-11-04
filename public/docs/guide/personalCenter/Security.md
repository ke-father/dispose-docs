# 安全中心

本文介绍安全中心相关操作。安全中心是对AccessKey/AccessSecret的管理。AccessKey是平台安全中的重要一环，AccessKey是应用调用OpenAPI和进行AMQP消息订阅的身份凭证，其中AccessKey/AccessSecret是用于加密签名字符串和服务器端验证签名字符串的密钥，需要妥善保管，不要透露信息给他人。

### **前提条件**

● 若您需要调用平台OpenAPI，需要事先开通OpenAPI功能，具体开通详见[功能开通](/guide/saas/FunctionOpen.md)<br />
● 若您需要订阅平台消息，需要事先开通消息订阅功能，具体开通详见[功能开通](/guide/saas/FunctionOpen.md)

### **操作步骤**

1.登录开发者中心后，点击上方导航栏个人用户名下拉框，选择“安全中心”进入。

<a data-fancybox title="img" href="/guide/image2022-3-12_14-58-31.png?version=1&modificationDate=1647067705000&api=v2">![img](/guide/image2022-3-12_14-58-31.png?version=1&modificationDate=1647067705000&api=v2)</a>

2.进入安全中心列表页，点击“新增AccessKey”

3.AccessKey创建完成，可以点击列表页中操作栏进行详情查看

>备注：企业账号可以创建AccessKey个数上限为5个，个人开发者账号可以创建AccessKey个数上限为2个。

4.具体AccessKey的使用详见 [SaaS应用开发](/saasDevelop/CommunicatOverview.md)
