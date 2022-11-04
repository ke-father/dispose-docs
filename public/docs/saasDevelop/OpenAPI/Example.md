# OpenAPI SDK接入示例

本文介绍SaaS SDK中 OpenAPI相关部分的使用示例。

## **前提条件**

● 已创建SaaS应用，并获取AK/AS



## **开发环境准备**

示例使用的开发环境如下：

● 操作系统：Windows10<br />
● JDK版本：[JDK8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)<br />
● 集成开发环境：[IntelliJ IDEA社区版](https://www.jetbrains.com/idea/)

## **SDK版本列表**
|  SDK名称  | 版本  |
|  :-----  | :-----  |
|  quecloud-sdk-dev-mgr	| 1.1.8.RELEASE |
|  quecloud-sdk-dev-msg | 1.1.7.RELEASE |

## **SDK功能列表**
### **quecloud-sdk-dev-mgr:**
| 方法名称                          | 功能描述  |
|:------------------------------| :-----  |
| getProjectList                | 获取项目列表 |
| getProjectDetail              | 获取项目详情 |
| getProductItems               | 获取产品品类 |
| getProductDetail              | 获取产品详情 |
| getProductList                | 获取产品列表 |
| getDeviceList                 | 获取设备列表 |
| getDeviceDetail               | 获取设备详情 |
| getDeviceDataHistory          | 获取设备历史上下行数据 |
| getDeviceEventData            | 获取设备事件日志数据 |
| getDeviceLocationLatest       | 获取设备定位信息数据 |
| getTslJson                    | 获取物模型数据 |
| generateSn                    | 获取SN |
| createSnBindDevice            | 创建SN与设备绑定关系  |
| delSnBindDevice               | 删除SN与设备绑定关系 |
| createQuece                   | 创建队列 |
| getQueceDetail                | 获取队列详情 |
| createSubscribe               | 创建普通订阅 |
| createEnterpriseUserSubscribe | 创建企业用户订阅 |
| createSaasUserSubscribe       |  创建SaaS用户订阅|
| createEndUserSubscribe        | 创建终端用户订阅 |
| getSubscribeDetail            | 获取订阅详情 |
| startSubscribe                | 启动订阅 |
| stopSubscribe                 | 停止订阅 |
### **quecloud-sdk-dev-msg:**
|  方法名称  | 功能描述  |
|  :-----  | :-----  |
|  sendDeviceData | 设备发送下行数据 |
|  batchSendDeviceData | 批量设备发送下行数据 |
|  start | 消息订阅 |

## **SDK示例**

1.中央仓库引用jar包

```java
a)产品设备管理

<dependency>
  <groupId>com.quectel.aiot</groupId>
  <artifactId>quecloud-sdk-dev-mgr</artifactId>
  <version>1.1.8.RELEASE</version>
</dependency>

b)设备数据上下行管理

<dependency>
  <groupId>com.quectel.aiot</groupId>
  <artifactId>quecloud-sdk-dev-msg</artifactId>
  <version>1.1.7.RELEASE</version>
</dependency>
```

2.初始化SDK

a)创建InitClientProfile对象，存放accessKey、accessSecret、endpoint(链接地址，国内生产环境值为 iot-api.quectelcn.com)等信息

b)创建Client对象。产品设备管理是初始化MgrClient对象，设备上下行是初始化对象MsgClient对象

3.调用步骤:

Sass SDK为每个API封装两个类，分别是请求参数类 (*Request)和请求响应类(*Response)。

a).完成SDK初始化。获取MgrClient Client/MsgClient Client对象

b).创建对应API请求方法的参数对象

c).对参数对象，使用set方法，设置API所需的请求参数值。

d).通过获取的Client对象，直接调用对象中的方法获取响应对象。每个响应对象包含 success(是否成功标识)，msg(返回信息)，errorMsg(错误信息，当success为false时，返回具体的错误信息)，body(body是一个object对象，它承载了每个API返回具体信息值)

e).使用catch()方法处理异常报错。


<p>API列表及对应的Request和Response对象说明请参见 <a target="_blank" :href="toUrlnew('/swagger-ui.html')" class="external-link">
<font v-if="isEu">https://iot-api.quecteleu.com/swagger-ui.html</font>
<font v-else>https://iot-api.quectelcn.com/swagger-ui.html</font>
</a></p>

4.以下发数据API功能为例，编写代码
```java
public static void main(String[] args) {
        try{
            // accessKey和accessSecre是开发者中心用户创建accessKey和accessSecret
            InitClientProfile initClientProfile = new InitClientProfile(
                    "${accessKey}",
                    "${accessSecret}",
                    "${endpoint}");
            // 获取MgrClient对象。建议可以使用单例模式。此对象中包含设备数据下发相关的sdk
            MsgClient msgClient = new MsgClient(initClientProfile);
 
            // PASSTHROUGH:透传 PROPERTY:属性 SERVICE:服务
            String type="PASSTHROUGH|PROPERTY|SERVICE";
            // GET:上报 DOWN:下发
            String operate="GET|DOWN";
 
            // 单设备下发物模型属性数据
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
 
            type = "PROPERTY";
            operate = "DOWN";
            DeviceSendDataRequest deviceSendTslDataRequest = new DeviceSendDataRequest("${productKey}","${deviceKey}","${data}",type,operate);
            DeviceSendDataResponse tslResult = msgClient.sendDeviceData(deviceSendTslDataRequest);
            log.info("单设备下发物模型数据返回结果:{}", JSONObject.toJSONString(tslResult));
        }catch(Exception e){
            log.info("单设备下发物模型属性数据出错",e);
        }
    }

```


具体Demo code详见github地址：
产品设备管理(quecloud-sdk-dev-mgr)

[https://github.com/thridparty-cloud2/quecloud-sdk-dev-mgr-demonstration.git](https://github.com/thridparty-cloud2/quecloud-sdk-dev-mgr-demonstration.git)

设备数据上下行(quecloud-sdk-dev-msg)

[https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git](https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git)

## **错误码**
具体详见[错误码集合](/saasDevelop/errorCode.md)


  