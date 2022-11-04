# AMQP Message Subscription Overview

Message Subscription is a data forwarding solution implented by Developer Center based on AMQP (Advanced Message Queuing Protocol). After you create an AccessKey, configure and start the message subscription rule, Developer Center forwards the subscribed message type to the specified message queue according to the configurations, and then you can obtain the subscribed message by connecting the client to the message queue.

The following figure shows how messages are forwarded in AMQP message subscription.

<a data-fancybox title="img" href="/en/saasDevelop/image2022-3-17_17-17-12.png">![img](/en/saasDevelop/image2022-3-17_17-17-12.png)</a>

Benefits of AMQP message subscription:

● Supports multiple consumer message queues. For a single account, Message Queue A subscribes to the messages of Product A in the development environment and Message Queue B subscribes to the messages of Product B in the production environment. If multiple queues subscribe to the Product B at the same time, the multiple queues can receive the same messages from Product B at the same time.<br />
● Facilitates troubleshooting. Message subscription allows you to view the client status, accumulated messages, and message consumption rate.<br />
● Supports linear scalability. You can significantly improve the message forwarding capability by adding consumer clients.<br />
● Supports message accumulation queue. Developer Center pushes real-time messages first. Real-time messages enters into accumulation queue if push failure occurs, which avoids message loss. Even if messages are accumulated due to client failures or low consumption rates, real-time messages are sent with accumulated messages after clients recover. 

Before you use AMQP Message Subscription, you have to create a message queue and configure subscription rule on Developer Center, see [Message Subscription](/en/guide/saas/NewsSubscription.md). Then you must develop an AMQP client and connect it to Developer Center to subscribe message, see [AMQP Client Access Guide](/en/saasDevelop/subscription/AMQPtoC.md)。


## **Limits on AMQP Message Subscription**

| Item                                    | Description                                                  |
| :-------------------------------------- | :----------------------------------------------------------- |
| Authentication timeout                  | An authentication request is sent after a connection is established. If the authentication fails within 15 seconds, the server ends the connection. |
| Data timeout                            | When a server establishes a connection with Developer Center, the heartbeat timeout period (the idle-timeout parameter in AMQP) must be passed. Range: 30–60 seconds. If no frame is transmitted within the heartbeat timeout period, Developer Center ends the connection. After the connection is established, the server must send PING packets within the heartbeat timeout period to maintain the connection. Otherwise, Developer Center ends the connection. <br />Note: If the connection is established by using the SDK provided by QuecCloud, the server does not need to send PING packets to maintain the connection. During the keep-alive time that is provided by the SDK, make sure that the main process does not exit. |
| Policy for message pushing retries      | Messages may not be consumed in real time due to some issues, for example, the consumers is offline,  or the speed at which these messages are consumed is slow. In this case, these messages are accumulated. After these consumers re-connect to Developer Center and start to consume messages at a stable speed, Developer Center pushes accumulated messages to these consumers. If consumers fail to consume these pushed messages, the queue where accumulated messages reside may be blocked. After an interval of about 1 minute, Developer Center retries to push accumulated messages to consumers. |
| Maximum number of saved messages        | A message queue can retain a maximum of 500 Mb.              |
| Message retention period                | 30 days.                                                     |
| Maximum number of message queues        | Each  account can create a maximum of 50 message queues. A message queue is suspended automatically if the queue is not used for more than 30 days. |
| Maximum number of message subscriptions | Each account can create a maximum of 100 subscriptions.      |

