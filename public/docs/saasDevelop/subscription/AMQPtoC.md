# AMQP客户端接入说明

在开发者中心->控制台创建完消息队列以及配置完消息订阅规则，您需要参考本文将AMQP客户端接入开发者中心。成功接入后，在您的服务端运行AMQP客户端，即可接收设备消息。

## **协议版本说明**

AMQP协议标准的详细介绍，请参见[AMQP协议标准](https://www.amqp.org/?spm=a2c4g.11186623.0.0.5d12fbc7kRjGQ2)。移远云AMQP订阅仅支持AMQP 1.0协议标准。

创建客户端连接可以参考文档[ Client Documentation - RabbitMQ。](https://www.rabbitmq.com/clients.html)



## **连接认证过程**

1.首先，AMQP客户端与开发者中心经过三次握手建立TCP连接，然后进行TLS握手校验。<br />
  为了保障安全，接收方必须使用TLS加密，不支持非加密的TCP传输。<br />

2.客户端请求建立Connection。<br />
   连接认证方式为PLAIN-SASL，可以理解为用户名（username）和密码（password）认证。物联网平台的云端认证username和password通过后，建立Connection。<br />
   此外，根据AMQP协议，客户端建连时，还需在Open帧中携带心跳时间，即AMQP协议的idle-time-out参数。心跳时间单位为毫秒，取值范围为30，000~60，000。如果超过心跳时间，Connection上没有任何帧通信，平台将关闭连接。<br />

3.客户端向平台的云端发起请求，建立Receiver Link（即云端向客户端推送数据的单向通道）。<br />
   客户端建立Connection成功后，需在15秒内完成Receiver Link的建立，否则平台会关闭连接。<br />
   建立Receiver Link后，客户端成功接入开发者中心。

## **连接配置说明**

AMQP客户端接入开发者中心的连接地址和连接认证参数说明如下：

| 名称          | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| connectionUrl | 客户端连接地址，可以在消息队列详情页面获取到连接地址。       |
| username      | 创建连接时使用的用户名，用户名生成方式见 **用户名和密码生成方式 。** |
| password      | 创建连接时使用的密码，由username和AccessSecret生成，密码生成方式见 **用户名和密码生成方式 。** |
| queueName     | 连接的队列名，可以在消息队列列表页面获取到队列名称，用户只拥有该队列的消费权限。 |

## **用户名和密码生成方式**

**用户名生成参数**

| 参数名      | 参数中文名 | 参数类型 | 参数描述                                                     |
| :---------- | :--------- | :------- | :----------------------------------------------------------- |
| ver         | 版本号     | String   | 固定填写 “1”                                                 |
| auth_mode   | 类型       | String   | 固定填写 “accessKey”                                         |
| sign_method | 签名方法   | String   | 固定填写 “sha256”                                            |
| access_key  | AccessKey  | String   | 用户创建的AccessKey，可以通过界面创建获取AccessKey。 |
| timestamp   | 时间戳     | Long     | 精度为毫秒，请注意与标准时间的时间差必须在10分钟以内         |

**用户名生成说明**

用户名的字段使用key=value的方式组成，各字段再使用“&”字符进行拼接，各字段之间没有顺序要求。

示例：

**username**
```java
ver=1&auth_mode=accessKey&sign_method=sha256&access_key=${AccessKey}&timestamp=${timestamp}
```

**密码生成说明**

密码由用户名${username}后面拼接凭证密钥${AccessSecret}，再用sha256散列算法生成。

示例：

**password**
```java
sha256(${username}${AccessSecret})
```

## **Java 接入示例**

**开发环境**

本示例使用的开发环境为JDK 1.8版本。

**添加Maven依赖**
```java
<dependency>
    <groupId>commons-codec</groupId>
    <artifactId>commons-codec</artifactId>
    <version>1.15</version>
</dependency>
<dependency>
    <groupId>com.rabbitmq</groupId>
    <artifactId>amqp-client</artifactId>
    <version>5.10.0</version>
</dependency>
```

**示例代码**

```
package amqp;

import com.rabbitmq.client.Channel; import com.rabbitmq.client.Connection; import com.rabbitmq.client.ConnectionFactory; import com.rabbitmq.client.DeliverCallback; import org.apache.commons.codec.digest.DigestUtils; import java.nio.charset.StandardCharsets; import java.util.concurrent.CountDownLatch;

/** RabbitMQDemo */

public class RabbitmqClient {

public static void main(String[] args) {

String accessKey = "${accessKey}";

String accessSecret = "${accessSecret}";

String url = "${connectionUrl}", queueName = "${queueName}";

long timestamp = System.currentTimeMillis();

String username = String.format("ver=1&auth_mode=accessKey&sign_method=sha256&access_key=%s&timestamp=%s", accessKey, timestamp);

String password = DigestUtils.sha256Hex(username + accessSecret).toLowerCase();

try {

CountDownLatch latch = new CountDownLatch(1);

ConnectionFactory factory = new ConnectionFactory();

factory.setUri(url);

factory.setUsername(username);

factory.setPassword(password);

factory.useSslProtocol();

try (Connection conn = factory.newConnection(); Channel channel = conn.createChannel()) {

channel.basicQos(1); // DeliverCallback

DeliverCallback deliverCallback = (consumerTag, delivery) ->{

try { String message = new String(delivery.getBody(), StandardCharsets.UTF_8); // handle

System.out.println("Received message: '" + message + "', timestamp: " + System.currentTimeMillis());

} finally {

channel.basicAck(delivery.getEnvelope().getDeliveryTag(), false); }

}; // acutoAck true/false

channel.basicConsume(queueName, false, deliverCallback, consumerTag -> {

System.out.println("The consumer is cancelled");

latch.countDown(); });

latch.await();

}

} catch (Exception e) {

e.printStackTrace();

} } }

```
