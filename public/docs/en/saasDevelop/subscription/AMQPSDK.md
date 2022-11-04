# Connect a AMQP Client to Developer Center by Using the SDK

This section describes how to connect an AMQP JMS client to Developer Center and receive messages from Developer Center.

## **Prerequisites**

● A SaaS application is created and you have gotten the AccessKey/AccessSecret.

## **Development Environment Preparation**

In this example, the development environment consists of the following components:

● Operating system: Windows10<br />
● JDK version: [JDK8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) <br />
● Integrated development environment: [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/)

## **SDK Example**

1. Download the jar package.  Maven dependency is used in this sample.

```
<dependency>
    <groupId>com.quectel.aiot</groupId>
    <artifactId>quecloud-sdk-dev-msg</artifactId>
    <version>1.1.7.RELEASE</version>
</dependency>
```

2. Initialize the SDK.

Create AmqpClient subject to store AccessKey/AccessSecret, connectionUrl and queueName.

3. Calling steps:

a) Complete SDK initialization and obtain AmqpClient subject.

b) Call start method of AmqpClient subject to link rabbitmq and receive messages.

The SDK provides two methods to handle the received message. The one is handling message by the way customized through DeliverCallback class. The other one is implementing HandleMessage. Each method of HandleMessage corresponds to a uplink message type, such as device online/offline, ACK confirmation message.

3. Sample code

```
public void msgUpLinkDemo(){
    AmqpClient amqpClient = new AmqpClient("${accessKey}","${accessSecret}","${connectionUrl}","${queueName}");
    HandleMessage handleMessage = new HandleMessageImpl();
    amqpClient.start(handleMessage);
}

```

See github for the detailed sample code:

[https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git](https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git)

4. Uplink message types and the corresponding methods of HandleMessage subject

| Method            | Message Type                                                                                                             |
| :---------------- |:-------------------------------------------------------------------------------------------------------------------------|
| upAndDownLine     | Online/offline event                                                                                                     |
| deviceStatus      | Device status                                                                                                            |
| upLink            | Transparent transmission - device uplink data                                                                            |
| downLink          | Transparent transmission - device downlink data                                                                          |
| reqack            | ACK confirmation                                                                                                         |
| mAttrRead         | Downlink, TSL - request of read                                                                                          |
| mAttrReadresp     | Uplink, TSL- response of read                                                                                            |
| mAttrWrite        | TSL - request of write                                                                                                   |
| mAttrReport       | Uplink. Corresponding to the event message type of the TSL data packet protocol,  that is reporting TSL property.        |
| mServInput        | Downlink. Request of TSL service execution. Corresponding to the Write message type of the TSL data packet protocol.     |
| mServOutput       | Uplink. Response of TSL service execution. Corresponding to the event message type of the TSL data packet protocol.      |
| mEventInfo        | Uplink. Corresponding to the event message type of the TSL data packet protocol,  that is reporting TSL event - message. |
| mEventWarn        | Uplink. Corresponding to the event message type of the TSL data packet protocol,  that is reporting TSL event - alert.   |
| mEventError       | Uplink. Corresponding to the event message type of the TSL data packet protocol,  that is reporting TSL event - fault.   |
| locationMode      | Positioning mode.                                                                                                        |
| locationQuery     | Positioning information request.  If it is null, the method returns in the way of the saved MODE.                        |
| locationInfoRaw   | Response of positioning information request and active reporting of positioning information.                             |
| locationInfoKV    | Response of positioning information request and active reporting of positioning information.                             |
| enduserUserAdd    | Terminal user information change - addition                                                                              |
| enduserUserUpdate | Terminal user information change - modification                                                                          |
| enduserUserDelete | Terminal user information change - deletion                                                                              |
| enduserUserBind   | Device binding information change                                                                                        |
| productAddAndDel  | Product addition/deletion/Product Authorization Information                                                                  |
| productUpdate     | Product information change                                                                                               |
| deviceModelInfo   | TSL model information change                                                                                             |
| deviceAddAndDel   | Device addition/deletion                                                                                                 |
| deviceUpdate      | Device information change                                                                                                |

## **Error Codes**

See [Error Code Summary](/en/appDevelop/errorCode.md)