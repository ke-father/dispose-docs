# SaaS Application Development

## **Introduction**

This section takes RGB light as an example to present you the basic process of SaaS development in the four basic scenarios: creating AccessKey and AccessSecret, developing SaaS application, obtaining device uplink data, and controlling the device.

## **create a saas Application**

After logging in to Developer Center, click "SaaS Development" → "SaaS Management" in the left navigation bar to enter "SaaS Management" page.

<a data-fancybox title="img" href="/en/quickStart/image2022-0706-01.png">![img](/en/quickStart/image2022-0706-01.png)</a>

<a data-fancybox title="img" href="/en/quickStart/image2022-0706-02.png">![img](/en/quickStart/image2022-0706-02.png)</a>

## **Develop SaaS Application**

Quectel provides you a SaaS SDK, which can be used to develop your own SaaS application quickly. See [SaaS Application Data Communication](/en/saasDevelop/CommunicatOverview.md) for details.

The minimum closed-loop of controlling the devices is obtaining token, controlling devices, getting uplink data. Besides this, you can add other personalized service. 

## **Obtain API Authorization Token**

Obtain the access_token by calling the login interface with AccessKey.

| Function  | Description     | Interface                                     |
| :-------- | :-------------- | :-------------------------------------------- |
| AccessKey | login interface | /v2/quecauth/accessKeyAuthrize/accessKeyLogin |

Sample of request

```html
http:/iot-api.quectelcn.com/v2/quecauth/accessKeyAuthrize/accessKeyLogin?username=ver%3D1%26access_key%3D24b9rucZxRSS843tQa4ezfu9%26sign_method%3Dsha256%26auth_mode%3DaccessKey%26timestamp%3D1618473561027&password=407b0b8e9307e65097da29f6b7903f9732b9eec3c5ac6daed6baf6a9019584c8&grant_type=password&client_id=sdfasdf&scope
```

Sample of response

```json
{
    "msg": "OK",
    "access_token": "QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MjExIiwiaWF0IjoxNjMwMzk1MDg2LCJqdGkiOiJjZjVkMGE3ZS1hZjk2LTQ0ZDktOTgwYi05NjBkMjc4Y2U4YjgiLCJ1dHkiOiJlbnQiLCJleHAiOjE2MzA0ODE0ODYsImFtIjoiQWNjZXNzS2V5In0.QRLVqknFjDvD8SyQGeJwNUe1zCkdS0jiVIKsSF-8OdE",
    "code": 200,
    "token_type": "jwt",
    "expires_in": 86400
}
```

For more related interfaces, see [OpenAPI Overview](/en/saasDevelop/OpenAPI/Overview.md).

## **Control Device**

You can control the devices with HTTP interfaces.

| Description                     | Interface                   |
| :------------------------------ | :-------------------------- |
| Send downlink data to a device. | /r2/openapi/device/sendData |


Sample of request:

```java
/**
     * Send downlink data to a device. data is the content of downlink data to be sent. operate=GET, data format is "[“key1","key2",…]"(key is TSL ID). operate=DOWN, data format is "[{key1:value1},{key2:value2}]"(key is TSL ID).
     * Example:
     * Property bool/int/float/double/enum/date/text
     * "[{\"key\":\"value\"}]"
     * Property array
     * "[{\"key\":[{\"id\":\"value1\"},{\"id\":\"value2\"}]}]"（id为0）
     * Property struct
     * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"}]}]"
     * Property array contains struct
     * "[{\"key\":[{\"id\":[{\"key1\":\"value1\"}]},{\"id\":[{\"key2\":\"value2\"}]}]}]"（id为0）
     * Service calls bool/int/float/double/enum/date/text
     * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]"
     * Service calls array
     * "[{\"key\":[{\"key1\":[{\"id\":\"value1\"},{\"id\":\"value1\"}]}]}]"（id为0）
     * Service calls struct
     * "[{\"key\":[{\"key1\":[{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]}]"
     * Service calls array and array contains a struct
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
            //Send a request in JSON format.
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

Sample of response:

```json
{
    "code": 200,
    "msg": "OK",
    "data": {
    "ticket": "882318891492089856"
    }
}
```

For more API information, see [OpenAPI Overview](/en/saasDevelop/OpenAPI/Overview.md).

## **AMQP Subscription Receives Device Uplink Data**

AMQP subscription enables you to receive device uplink data in real time, and you can also subscribe to other message events according to business requirements.

For the sample code of device subscription request, see [Connect an AMQP Client to Developer Center](/en/saasDevelop/subscription/AMQPtoC.html).

For more message format, see [Data Format Overview](/en/saasDevelop/DataFormat/overview.md)