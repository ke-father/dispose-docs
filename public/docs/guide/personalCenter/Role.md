# 角色权限

本文介绍企业用户中角色权限功能。此功能是针对企业用户下需要多用户协作开发进行的权限功能设计，用于企业用户灵活的分配角色权限给子账号，协作完成物联网项目。

### **前提条件**

● 注册账号为企业用户，或个人开发者已通过升级企业用户的审核

### **操作步骤**

1.登录开发者中心，点击用户名下拉框，选择“角色权限”，进入角色权限管理页。

<a data-fancybox title="img" href="/guide/image2022-3-12_15-36-30.png?version=1&modificationDate=1647069984000&api=v2">![img](/guide/image2022-3-12_15-36-30.png?version=1&modificationDate=1647069984000&api=v2)</a>

2.整个页面分为“角色管理”和“子账号管理”两个tab页，默认进入“角色管理”tab页，角色分为默认角色和自定义角色两种，系统默认角色见下表

| 默认角色   | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| 超级管理员 | 拥有企业所有权限。企业账号独有，不可分配此角色给任意子账号，具体菜单权限可以登录平台点击菜单权限功能查看。 |
| 运维人员   | 拥有角色权限管理功能，可以帮助企业账号进行账号管理。具体菜单权限可以登录平台点击菜单权限功能查看。 |
| 运营人员   | 拥有统计分析等账号下运营能力管理功能，可以帮助企业账号进行平台运营能力建设。具体菜单权限可以登录平台点击菜单权限功能查看。 |
| 开发人员   | 拥有产品开发、SaaS开发、App开发功能，可以帮助企业账号进行平台开发能力建设。具体菜单权限可以登录平台点击菜单权限功能查看。 |

3.若上述默认角色不能满足您的场景需要，您可以点击“新增角色”用来创建一个自定义角色。

4.定义完一个角色的名称及描述后，可以点击角色列表操作栏的“菜单权限分配”，根据实际应用需求分配具体的菜单权限。

5.当你对所定义的角色不满意时，同样可以点击操作栏中的“删除”，删除自定义角色。但是您不能删除系统默认角色。

6.点击“子账号管理”tab页，用来创建一个子账号。

参数说明

| 参数     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| 用户名称 | 子账号用户名                                                 |
| 密码     | 为子账号设置一个初始密码                                     |
| 确认密码 | 再输入一次，防止密码输入有误                                 |
| 邮箱地址 | 为子账号填写一个邮箱地址，后续子账号的一些操作会通过邮件通知，请务必填写真实有效的邮箱地址。 |
| 角色     | 为子账号赋予一个定义好的角色，用来约束其菜单权限             |
| 授权产品 | 分为企业级产品和指定产品。企业级产品权限：当前企业用户下所有产品的数据权限，包括未来创建的产品。具体产品：勾选具体产品，则该子账号则拥有勾选产品的数据权限，无论是企业级产品权限还是具体产品，均包括子账号自身创建的产品数据权限，若不勾选任何产品，则只拥有子账号创建产品的数据权限。 |
| 授权App  | 分为企业级App权限和指定App。企业级App权限：当前企业用户下所有App的数据权限，包括未来创建的App。具体App：勾选具体App，则该子账号则拥有勾选App的数据权限，无论是企业级App权限还是具体App，均包括子账号自身创建的App数据权限，若不勾选任何App，则只拥有子账号创建App的数据权限。 |
| 授权SaaS  | 分为企业级SaaS权限和指定SaaS。企业级SaaS权限：当前企业用户下所有SaaS的数据权限，包括未来创建的SaaS。具体SaaS：勾选具体SaaS，则该子账号则拥有勾选SaaS的数据权限，无论是企业级SaaS权限还是具体SaaS，均包括子账号自身创建的SaaS数据权限，若不勾选任何SaaS，则只拥有子账号创建SaaS的数据权限。 |

>备注：针对OTA版本、OTA计划，子账号只拥有自己创建的数据权限。

7.点击确定后，完成子账号创建，同时也完成了子账号数据权限和菜单权限的赋予。

8.若您想删除某个子账号时，点击子账号列表中操作栏“删除”按钮进行删除，则此账号将会删除，但子账号所创建的一切资源将被保留，这些资源都是属于企业用户的。
