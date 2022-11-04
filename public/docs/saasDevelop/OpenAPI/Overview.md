# OpenAPI概述

使用平台OpenAPI接口，可以实现SaaS应用远程控制设备、产品、项目管理等，在您的SaaS应用上即可完成对平台和设备的控制管理。

## **前提条件**

● 已创建AccessKey/AccessSecret<br />
● 使用AcceeKey/AccessSecret调用授权API换取token



## **授权API**

当您在平台创建好AccessKey/AccessSecret，最后一步需要在应用程序中使用AccessKey/AccessSecret换取token，才能够正常的使用OpenAPI能力。

授权API主要是以下两个接口

| 接口地址                                      | 功能描述                            | 版本  |
| :-------------------------------------------- | :---------------------------------- | :---- |
| /v2/quecauth/accessKeyAuthrize/accessKeyLogin | 使用AccessKey/AccessSecret获取token | 2.0.0 |
| /v2/quecauth/accessKeyAuthrize/refreshToken   | 刷新token时间                       | 2.0.0 |

## **接口详情**

**使用AccessKey/AccessSecret获取token**

接口地址

`/v2/quecauth/accessKeyAuthrize/accessKeyLogin`

接口方法

HTTP GET,HTTP POST

接口请求参数

| 参数       | 参数类型 | 是否必填 | 参数描述                                                     |
| :--------- | :------- | :------- | :----------------------------------------------------------- |
| grant_type | String   | 是       | 授权类型，此处固定为password                                 |
| username   | String   | 是       | 用户名组成请遵守用户名组成规则，传输时请使用uriencode进行编码 |
| password   | String   | 是       | 用户名组成请遵守密码组成规则                                 |
| client_id  | String   | 否       | 客户端id，携带当前请求的客户端名称                            |
| scope      | String   | 否       | 授权范围，此值为空时代表申请所有的功能范围，多个scope时使用空格分离，例如：userinfo tls ota |

注：

用户名生成规则：用户名的字段使用key=value的方式组成，各字段再使用"&"字符进行拼接，各字段之间没有顺序要求.

示例：

**username**
```java
ver=1&auth_mode=accessKey&sign_method=sha256&access_key=${AccessKey}&timestamp=${timestamp}
```
在传输时请对用户名字段使用uriencode进行编码

用户名组成字段说明

| 参数        | 类型   | 描述                                                         |
| :---------- | :----- | :----------------------------------------------------------- |
| ver         | String | 版本号，固定为 1                                             |
| auth_mode   | String | 用户类型，固定为 accessKey                                   |
| sign_method | String | 签名方法，固定为 sha256                                      |
| access_key  | String | AccessKey，用户在开发者中心安全中心创建的AccessKey                   |
| timestamp   | Long   | 请求时间戳，精度为毫秒，请注意与标准时间的时间差必须在10分钟以内 |

密码生成规则：密码由用户名`${username}后面拼接凭证密钥${AccessSecret}`，再用sha256进行加密.
示例：

**password**
```java
sha256("${username}${AccessSecret}")
```

接口响应参数

| 参数         | 参数类型 | 是否必填 | 参数描述                                                     |
| :----------- | :------- | :------- | :----------------------------------------------------------- |
| code         | int      | 是       | 错误码 200代表成功，其他为错误码                             |
| msg          | String   | 是       | 结果信息，成功返回“OK”                                       |
| access_token | String   | 否       | 成功返回token值                                              |
| token_type   | String   | 否       | 固定为“jwt”                                                  |
| expire_in    | String   | 否       | 过期时间                                                     |
| scope        | String   | 否       | 授权范围，此值为空时代表申请所有的功能范围，多个scope时使用空格分离，例如：userinfo tls ota |

接口示例

请求：
```
http://iot-api.quectelcn.com/v2/quecauth/accessKeyAuthrize/accessKeyLogin?username=ver%3D1%26access_key%3D24b9rucZxRSS843tQa4ezfu9%26sign_method%3Dsha256%26auth_mode%3DaccessKey%26timestamp%3D1618473561027&password=407b0b8e9307e65097da29f6b7903f9732b9eec3c5ac6daed6baf6a9019584c8&grant_type=password&client_id=sdfasdf&scope
```


响应：

```json
{ 
    "msg": "OK",
    "access_token": "QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTQ5NCIsImlhdCI6MTYxODQ3Mjk2MiwianRpIjoiYjVhMmRhNjgtMzI0Ni00ZWRjLWEwZTktOTEyZjdjMDFkMmMzIiwidXR5IjoicGVyIiwiZXhwIjoxNjE4NTU5MzYyLCJhbSI6IkFjY2Vzc0tleSIsInNwIjoiIn0.JUQjUKlaDepazh7JssvRZKDiA1UL83VK8WECj86TI_I", 
    "code": 200, 
    "scope": "", 
    "token_type": "jwt", 
    "expires_in": 86400 
}
```



### **刷新token**

● 如果token在30分钟之内刚刷新过或创建时间在30分钟以内，返回原token；<br />
● 如果用户、AccessKey被禁用刷新失败，并禁用原token；<br />
● 如果用户类型发生变化，如个人用户审核成功成为企业用户，刷新后token将更新为最新用户类型。

接口地址

`/v2/quecauth/accessKeyAuthrize/refreshToken`

接口方法

HTTP GET,HTTP POST

接口请求参数

| 参数          | 参数类型 | 是否必填 | 参数描述                                                     |
| :------------ | :------- | :------- | :----------------------------------------------------------- |
| refresh_token | String   | 是       | 需要刷新的token                                              |
| grant_type    | String   | 是       | 授权类型，固定为 refresh_token                               |
| scope         | String   | 否       | 授权范围，此值为空时代表申请所有的功能范围，多个scope时使用空格分离，例如：userinfo tls ota |

接口响应参数

| 参数         | 参数类型 | 是否必填 | 参数描述                         |
| :----------- | :------- | :------- | :------------------------------- |
| code         | int      | 是       | 错误码 200代表成功，其他为错误码 |
| msg          | String   | 是       | 结果信息，成功返回“OK”           |
| access_token | String   | 否       | 成功返回token值                  |
| token_type   | String   | 否       | 固定为“jwt”                      |
| expire_in    | String   | 否       | 过期时间                         |

接口示例

请求

```
http://iot-api.quectelcn.com/v2/quecauth/userAuthorize/refreshToken?grant_type=refresh_token&scope=userinfo&refresh_token=QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Mzc5IiwiaWF0IjoxNjE1ODAxMzg2LCJqdGkiOiI5NzRkNTVkNy0wM2JjLTQxNzctOGQyNi02MDQ5YWYzNzlhNWUiLCJ1dHkiOiJwZXIiLCJleHAiOjE2MTU4ODc3ODYsInNjb3BlIjoidXNlcmluZm8ifQ.fYBbMx0fU5pU3A1YvnkDJTf7BRDMw9-KfrxWR9LNOSg
```

响应：
```json
{ 
    "msg": "", 
    "access_token": "QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTQ5NCIsImlhdCI6MTYxODQ3Mjk2MiwianRpIjoiYjVhMmRhNjgtMzI0Ni00ZWRjLWEwZTktOTEyZjdjMDFkMmMzIiwidXR5IjoicGVyIiwiZXhwIjoxNjE4NTU5MzYyLCJhbSI6IkFjY2Vzc0tleSIsInNwIjoiIn0.JUQjUKlaDepazh7JssvRZKDiA1UL83VK8WECj86TI_I", 
    "code": 200, 
    "scope": "userinfo", 
    "token_type": "jwt", 
    "expires_in": 86400 
}
```

## **API接口及版本说明**

目前平台对SaaS开放的OpenAPI主要分为以下几类：

● 产品设备管理API：针对SaaS应用，提供项目管理、产品管理、设备管理能力，针对网关与子设备提供拓扑关系查询等；<br />
● 消息订阅管理API：针对AMQP消息队列、消息订阅的管理提供的API能力；<br />
● 短信管理API：针对终端用户App应用提供的短信API能力，包括签名管理、模板管理等；<br />
● 终端用户管理API：针对终端用户提供的用户管理API能力，包括邮箱账号管理、邮件模板管理等；<br />
● 绑定管理API：针对终端用户绑定设备的API能力提供，可为App用户直接绑定/解绑设备；<br />
● 设备组管理API：针对SaaS应用，创建设备分组、分配设备到分组中等功能。

具体接口列表如下：

<overview-table />

<p>具体API使用请参考：<a target="_blank" :href="toUrlnew('/swagger-ui.html')" class="external-link">Swagger API</a></p>

  
