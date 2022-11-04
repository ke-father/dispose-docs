# SaaS应用开发

## **案例简介**

本文以RGB灯为例，带您快速体验SaaS开发的基本流程：创建SaaS，开发SaaS，获取设备上行数据，控制设备这四个基本场景。

## **创建SaaS应用**
登录开发者中心后，点击“SaaS开发”→"SaaS管理"，进入SaaS管理列表页。

<a data-fancybox title="img" href="/guide/image2022-0706-01.png?version=1&modificationDate=1646655516000&api=v2">![img](/guide/image2022-0706-01.png?version=1&modificationDate=1646655516000&api=v2)</a>

<a data-fancybox title="img" href="/guide/image2022-0706-02.png?version=1&modificationDate=1646655516000&api=v2">![img](/guide/image2022-0706-02.png?version=1&modificationDate=1646655516000&api=v2)</a>



## **开发SaaS**

您可基于我们的SaaS SDK快速开发自己的SaaS应用，详细请看[这里](/saasDevelop/CommunicatOverview.md)。

控制设备的最小闭环为获取token、控制设备、获取上行数据。在此之外可叠加其他个性化业务功能。

## **获取API授权token**

通过AccessKey调用登录授权获取access_token

| 功能      | 接口名称 | 接口                                          |
| :-------- | :------- | :-------------------------------------------- |
| AccessKey | 登录接口 | /v2/quecauth/accessKeyAuthrize/accessKeyLogin |

请求示例：
```html
http:/iot-api.quectelcn.com/v2/quecauth/accessKeyAuthrize/accessKeyLogin?username=ver%3D1%26access_key%3D24b9rucZxRSS843tQa4ezfu9%26sign_method%3Dsha256%26auth_mode%3DaccessKey%26timestamp%3D1618473561027&password=407b0b8e9307e65097da29f6b7903f9732b9eec3c5ac6daed6baf6a9019584c8&grant_type=password&client_id=sdfasdf&scope
```
返回示例：

```json
{
    "msg": "OK",
    "access_token": "QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MjExIiwiaWF0IjoxNjMwMzk1MDg2LCJqdGkiOiJjZjVkMGE3ZS1hZjk2LTQ0ZDktOTgwYi05NjBkMjc4Y2U4YjgiLCJ1dHkiOiJlbnQiLCJleHAiOjE2MzA0ODE0ODYsImFtIjoiQWNjZXNzS2V5In0.QRLVqknFjDvD8SyQGeJwNUe1zCkdS0jiVIKsSF-8OdE",
    "code": 200,
    "token_type": "jwt",
    "expires_in": 86400
}
```

更多相关的接口，请查看[这里](/saasDevelop/OpenAPI/Overview.md)。

## **控制设备**

通过HTTP接口进行设备控制控制。

| 接口名称         | 接口                        |
| :--------------- | :-------------------------- |
| 设备发送下行数据 | /r2/openapi/device/sendData |


请求示例:
```java
/**
     * 设备发送下行数据.data为发送下行数据的具体内容.operate=GET,数据格式为"[“key1","key2",…]"(key为物模型标识符)。operate=DOWN,数据格式为”[{key1:value1},{key2:value2}]"(key为物模型标识符).
     * 示例:
     * 属性bool/int/float/double/enum/date/text
     * "[{\"key\":\"value\"}]"
     * 属性array
     * "[{\"key\":[{\"id\":\"value1\"},{\"id\":\"value2\"}]}]"（id为0）
     * 属性struct
     * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"}]}]"
     * 属性array含有struct
     * "[{\"key\":[{\"id\":[{\"key1\":\"value1\"}]},{\"id\":[{\"key2\":\"value2\"}]}]}]"（id为0）
     * 服务调用bool/int/float/double/enum/date/text
     * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]"
     * 服务调用array
     * "[{\"key\":[{\"key1\":[{\"id\":\"value1\"},{\"id\":\"value1\"}]}]}]"（id为0）
     * 服务调用struct
     * "[{\"key\":[{\"key1\":[{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]}]"
     * 服务调用array，且array含有struct
     * "[{\"key\":[{\"key1\":[{\"id\":[{\"key2\":\"value2\"}]},{\"id\":[{\"key3\":\"value3\"}]}]}]}]"(id固定为0)
     */
    public void sendData(String productKey,String deviceKey,String operate,String type,String data,String accessToken) throws IOException {
        CloseableHttpClient httpclient = HttpClients.custom().build();
        String baseUrl="http://iot-api.quectelcn.com/v2/quecopenapi/r2/openapi/device/sendData";
        String requestUrl=baseUrl+"?productKey="+ productKey+"&deviceKey="+deviceKey;
        HttpPost httpPostRequest = new HttpPost(requestUrl);
        try {
            JSONObject body = new JSONObject();
            body.put("operate",operate);
            body.put("type",type);
            body.put("data",data);
            StringEntity bodyEntity = new StringEntity(body.toString(), Charset.forName("UTF-8"));
            bodyEntity.setContentEncoding("UTF-8");
            // 发送Json格式的数据请求
            bodyEntity.setContentType("application/json");
            httpPostRequest.setEntity(bodyEntity);
            httpPostRequest.setHeader("Authorization",accessToken);
            HttpResponse response = httpclient.execute(httpPostRequest);
            HttpEntity entity = response.getEntity();
            String result = EntityUtils.toString(entity, "UTF-8");
            log.info("sendData result is :{}",result);
        }catch (Exception e){
            log.error("sendData error",e);
        }finally {
            httpPostRequest.releaseConnection();
            httpclient.close();
        }
    }
```

返回示例:

```json
{
    "code": 200,
    "msg": "OK",
    "data": {
    "ticket": "882318891492089856"
    }
}
```

更多API相关的接口内容，请参见[这里](/saasDevelop/OpenAPI/Overview.md)。

## **AMQP订阅接收设备上行数据**

使用AMQP订阅消息，可实时接收到设备上行数据，也可以按业务需求订阅其他的消息事件。

请求设备订阅的示例代码，请参见[这里](/saasDevelop/subscription/AMQPtoC.html)。

更多可订阅消息格式，请参见[数据格式概述](/saasDevelop/DataFormat/overview.md)
