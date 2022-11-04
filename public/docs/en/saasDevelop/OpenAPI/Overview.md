# OpenAPI Overview

Developer Center provides OpenAPI that are used by SaaS application to control devices remotely and manage products, projects. You can control or manage Developer Center and device through your SaaS application.

## **Preconditions**

● AccessKey/AccessSecret is created<br />
● Token is obtained by calling the related API with AcceeKey/AccessSecret



## **Authorization API**

After you create AccessKey/AccessSecret on Developer Center and enable OpenAPI, to use OpenAPI functionality normally, you still have to obtain Token with AccessKey/AccessSecret in the application. 

Authorization API includes the following interfaces.

| Interface Address                             | Description                               | Version |
| :-------------------------------------------- | :---------------------------------------- | :------ |
| /v2/quecauth/accessKeyAuthrize/accessKeyLogin | Obtain Token with AccessKey/AccessSecret. | 2.0.0   |
| /v2/quecauth/accessKeyAuthrize/refreshToken   | Refresh Token.                            | 2.0.0   |

## **Description of Interface**

**Obtain Token with AccessKey/AccessSecret**

Address

`/v2/quecauth/accessKeyAuthrize/accessKeyLogin`

Method

HTTP GET,HTTP POST

Request Parameter

| Parameter  | Type   | Required | Description                                                  |
| :--------- | :----- | :------- | :----------------------------------------------------------- |
| grant_type | String | Y        | Authentication type. Fixed to "password".                    |
| username   | String | Y        | Username should follow the composition rule and be encoded with uriencode when transmitting. |
| password   | String | Y        | Password should follow the composition rule.                 |
| client_id  | String | N        | Client ID that carries the client name requesting token.     |
| scope      | String | N        | Authentication scope. Null indicates requesting all functions. Use spaces to separate multiple scopes, for example: userinfo tls ota. |

Note:

Username composition rule: Username is generated in the method of key=value, and each field is spliced with "&" character. There is no order between the fields. For example:<br />

**username**
```java
ver=1&auth_mode=accessKey&sign_method=sha256&access_key=${AccessKey}&timestamp=${timestamp}
```
The username should be encoded with uriencode when transmitting.

Username Composition Fields

| Parameter   | Type   | Description                                                  |
| :---------- | :----- | :----------------------------------------------------------- |
| ver         | String | Version number. Fixed to "1".                                |
| auth_mode   | String | Authentication mode. Fixed to "accessKey".                   |
| sign_method | String | Signature method. Fixed to "sha256".                         |
| access_key  | String | AccessKey that is created in Security Center on Developer Center.         |
| timestamp   | Long   | Request timestamp.  Unit: ms. Please note that the time difference from standard time must be within 10 minutes. |

Password composition rule: The password is spliced with the credential key ` ${AccessSecret}` after the username `${username}`, and then encrypted with sha256.For example:

**password**

```java
sha256(${username}${AccessSecret})
```

Response Parameter

| Parameter    | Type   | Required | Description                                                  |
| :----------- | :----- | :------- | :----------------------------------------------------------- |
| code         | int    | Y        | 200 indicates success. Other values indicate failure.        |
| msg          | String | Y        | Results.  "OK" is returned if successful.                    |
| access_token | String | N        | Token value is returned if successful.                       |
| token_type   | String | N        | Fixed to “jwt”.                                              |
| expire_in    | String | N        | Expiration time.                                             |
| scope        | String | N        | Authentication scope. Null indicates requesting all functions. Use spaces to separate multiple scopes, for example: userinfo tls ota. |

Example

Request:

```
http://iot-api.quectelcn.com/v2/quecauth/accessKeyAuthrize/accessKeyLogin?username=ver%3D1%26access_key%3D24b9rucZxRSS843tQa4ezfu9%26sign_method%3Dsha256%26auth_mode%3DaccessKey%26timestamp%3D1618473561027&password=407b0b8e9307e65097da29f6b7903f9732b9eec3c5ac6daed6baf6a9019584c8&grant_type=password&client_id=sdfasdf&scope
```


Response:

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



### **Refresh token**

● The original token is returned if the token is refreshed or created within 30 minutes.<br />
● If the user account and AccessKey are disabled, the refreshment will be failed and the original token will be disabled.<br />
● If user account type is changed, for example, personal account is changed to enterprise account, the refreshed token will be updated to the latest user account type. 

API Address

`/v2/quecauth/accessKeyAuthrize/refreshToken`

API Methods

HTTP GET, HTTP POST

Request Parameters

| Parameter     | Type   | Required | Description                                                  |
| :------------ | :----- | :------- | :----------------------------------------------------------- |
| refresh_token | String | Y        | Token to be refreshed.                                       |
| grant_type    | String | Y        | Authentication type.  Fixed to "refresh_token".              |
| scope         | String | N        | Authentication scope. Null indicates requesting all functions. Use spaces to separate multiple scopes, for example: userinfo tls ota. |

Response Parameters

| Parameter    | Type   | Required | Description                                           |
| :----------- | :----- | :------- | :---------------------------------------------------- |
| code         | int    | Y        | 200 indicates success. Other values indicate failure. |
| msg          | String | Y        | Results.  "OK" is returned if successful.             |
| access_token | String | N        | Token value is returned if successful.                |
| token_type   | String | N        | Fixed to “jwt”.                                       |
| expire_in    | String | N        | Expiration time.                                      |

Example

Request:

```
http://iot-api.quectelcn.com/v2/quecauth/userAuthorize/refreshToken?grant_type=refresh_token&scope=userinfo&refresh_token=QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Mzc5IiwiaWF0IjoxNjE1ODAxMzg2LCJqdGkiOiI5NzRkNTVkNy0wM2JjLTQxNzctOGQyNi02MDQ5YWYzNzlhNWUiLCJ1dHkiOiJwZXIiLCJleHAiOjE2MTU4ODc3ODYsInNjb3BlIjoidXNlcmluZm8ifQ.fYBbMx0fU5pU3A1YvnkDJTf7BRDMw9-KfrxWR9LNOSg
```

Response:

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

## **API and Version**

OpenAPI provided by Developer Center to SaaS application are classified to the following:

●  Product and device management API:  Manage project, product and device. In terms of gateway and sub-device, Developer Center provides the capability of querying  topological relationship.<br />
●  Message subscription management API: Manage AMQP message queues and message subscription.<br />
● SMS message management API: Manage SMS message, including managing signature and template, for terminal user application. <br />
● Terminal user management API: Manage terminal users, including managing email accounts, email templates, for terminal user.<br />
● Binding management API: Bind device for terminal user. Terminal user application can bind/unbind device directly.<br />
● Device group management API: Manage device group, such as creating a device group and adding a device to a device group.

API list table is shown below:

<overviewTableEN />

<p>To use the API, see <a target="_blank" :href="toUrlnew('/swagger-ui.html')" class="external-link">Swagger API</a></p>
