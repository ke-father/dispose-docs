# AMQP SDK接入示例

本文介绍使用AMQP协议的JMS客户端接入开发者中心，接收服务端订阅消息的示例。

## **前提条件**

● 已创建SaaS应用，并获取AK/AS

## **开发环境准备**

示例使用的开发环境如下：

● 操作系统：Windows10<br />
● JDK版本：[JDK8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) <br />
● 集成开发环境：[IntelliJ IDEA社区版](https://www.jetbrains.com/idea/)

## **SDK示例**

1.下载jar包，本例中使用maven引用

```
<dependency>
    <groupId>com.quectel.aiot</groupId>
    <artifactId>quecloud-sdk-dev-msg</artifactId>
    <version>1.1.7.RELEASE</version>
</dependency>
```

2.初始化SDK

创建AmqpClient对象，存放AccessKey/AccessSecret、connectionUrl、queueName

3.调用步骤:

a).完成SDK初始化。获取对应的AmqpClient对象

b).调用AmqpClient对象的start方法开始链接rabbitmq并接收消息。

  sdk提供两种方式处理接收到的消息。一、通过DeliverCallback类自定义处理消息。二、实现HandleMessage。HandleMessage中每个方法对应一种上行数据的类型，例如设备上下线、ACK确认消息等。

3.代码示例

```
public void msgUpLinkDemo(){
    AmqpClient amqpClient = new AmqpClient("${accessKey}","${accessSecret}","${connectionUrl}","${queueName}");
    HandleMessage handleMessage = new HandleMessageImpl();
    amqpClient.start(handleMessage);
}

```

具体demo code详见github:

[https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git](https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git)

4.HandleMessage对象中方法对应的上行数据类型

| 方法名称            | 消息类型                              |
| :------------------ |:----------------------------------|
| upAndDownLine     | 上下线事件                             |
| deviceStatus      | 设备状态                              |
| upLink            | 上行，透传命令上行                         |
| downLink          | 下行，透传命令下行                         |
| reqack            | ACK确认消息                           |
| mAttrRead         | 下行，物模型属性读命令下发                     |
| mAttrReadresp     | 上行，物模型属性读命令响应                     |
| mAttrWrite        | 物模型属性写命令下发                        |
| mAttrReport       | 上行，对应物模型数据包协议的Event消息类型，物模型属性上报   |
| mServInput        | 下行，物模型服务执行请求，对应透传数据包协议的Write消息类型  |
| mServOutput       | 上行，物模型服务执行响应，对应透传数据包协议的Event消息类型  |
| mEventInfo        | 上行，对应物模型数据包协议的Event消息类型，物模型事件信息上报 |
| mEventWarn        | 上行，对应物模型数据包协议的Event消息类型，物模型事件告警上报 |
| mEventError       | 上行，对应物模型数据包协议的Event消息类型，物模型事件故障上报 |
| locationMode      | 设置定位信息发送模式                        |
| locationQuery     | 查询定位信息，为空，则以保存的MODE返回             |
| locationInfoRaw   | 定位信息查询的响应、定位信息的主动上报               |
| locationInfoKV    | 定位信息查询的响应、定位信息的主动上报               |
| enduserUserAdd    | 终端用户信息变更-新增                       |
| enduserUserUpdate | 终端用户信息变更-修改                       |
| enduserUserDelete | 终端用户信息变更-删除                       |
| enduserUserBind   | 终端用户设备绑定信息                        |
| productAddAndDel  | 产品新增/删除/产品授权信息                 |
| productUpdate     | 产品信息变更                            |
| deviceModelInfo   | 产品物模型信息变更                         |
| deviceAddAndDel   | 设备新增/删除                           |
| deviceUpdate      | 设备信息修改                            |

## **错误码**

具体详见[错误码集合](/appDevelop/errorCode.md)
