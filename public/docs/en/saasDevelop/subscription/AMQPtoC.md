# Connect an AMQP Client to Developer Center

After you create a message queue and configure the subscription rule on Developer Center console, you can refer to this section to connect an AMQP client to Developer Center.  After the connection is established, you can run the AMQP client on your server to receive device message.

## **Protocol Versions**

For details of AMQP, see [AMQP Overview](https://www.amqp.org/?spm=a2c4g.11186623.0.0.5d12fbc7kRjGQ2). AMQP message subscription of Developer Center supports the AMQP 1.0 only.

To create an AMQP Client, see [Client Documentation - RabbitMQ](https://www.rabbitmq.com/clients.html).



## **Connection and Authentication Procedure**

1. An AMQP client establishes a TCP connection with Developer Center by using a three-way handshake. Then, a TLS handshake is performed to authenticate the AMQP client.<br />
   To ensure security, AMQP clients must transmit data by using TLS encryption. Data cannot be transmitted over unencrypted TCP channels.<br />

2. The client requests to establish a connection.<br />
   The PLAIN SASL mechanism is used to authenticate the connection. The authentication is based on a username and password. After the username and password-based authentication is passed by Developer Center, the connection is established.<br />
   AMQP requires that the open frame includes the **idle-time-out** field when a connection is established. This field specifies the heartbeat timeout period. Range: 30,000 – 60,000. Unit: ms. If no frame is transmitted over the connection after the heartbeat timeout period expires, Developer Center ends the connection.<br />

3. The client sends a request to Developer Center to establish a receiver link. The receiver link is a one-way channel that you can use to push data from IoT Platform to the client.<br />
   The client must establish the receiver link within 15 seconds after the AMQP connection is established. Otherwise, Developer Center ends the connection.<br />
   After the receiver link is established, the client is connected to Developer Center.

## **Connection and Authentication Parameters**

The connection address and connection authentication parameters of connecting an AMQP client to Developer Center are listed in the table below.

| Parameter     | Description                                                  |
| :------------ | :----------------------------------------------------------- |
| connectionUrl | AMQP client connection URL. You can obtain the connection URL in the message queue details page. |
| username      | Username used to establish the connection. For username composition rule, see  **Username and Password Composition Rule**. |
| password      | Password used when establish the connection. Password is generated with username and AccessSecret. For password composition rule, see  **Username and Password Composition Rule**. |
| queueName     | Connected message queue. You can obtain the message queue name in the message queue details page. You only have consuming permission on this queue. |

## **Username and Password Composition Rule**

**Username Composition Fields**

| Parameter   | Name                | Type   | Description                                                  |
| :---------- | :------------------ | :----- | :----------------------------------------------------------- |
| ver         | Version number      | String | Fixed to "1".                                                |
| auth_mode   | Authentication mode | String | Fixed to "accessKey".                                        |
| sign_method | Signature algorithm | String | Fixed to "sha256".                                           |
| access_key  | AccessKey           | String | AccessKey, which can be created and obtained in Security Center. |
| timestamp   | Timestamp.          | Long   | Unit: ms. Please note that the time difference from standard time must be within 10 minutes. |

**Username composition rule**

Username is generated in the method of key=value, and each field is spliced with "&" character. There is no order between the fields. For example:

**username**

```java
ver=1&auth_mode=accessKey&sign_method=sha256&access_key=${AccessKey}&timestamp=${timestamp}
```

**Password composition rule**

The password is spliced with the credential key ` ${AccessSecret}` after the username `${username}`, and then encrypted with sha256. For example:

**password**

```java
sha256(${username}${AccessSecret})
```

## **Example For Java**

**Development Environment**

The development environment used in this example is JDK 1.8 .

**Add Maven Dependency**

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

**Example**

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
