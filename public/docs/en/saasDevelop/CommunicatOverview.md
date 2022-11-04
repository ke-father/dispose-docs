# SaaS Application Data Communication

## **Background**

After accessing Developer Center, your device and server communicate with each other through Developer Center.  The flow chart of message forwarding on Developer Center is shown below:

<ALink imgurl="/en/saasDevelop/image2022-3-14_15-30-55.png" imgenurl="/en/saasDevelop/image2022-3-14_15-30-55_en.png" />


A SaaS application can control the device remotely by using SaaS SDK or OpenAPI provided by Developer Center. For API details, see  [OpenAPI Overview](/en/saasDevelop/OpenAPI/Overview.md).

You can subscribe events in different type based on actual business scenario by using AMQP subscription function of Developer Center, such as the real-time reception of device online and offline event, device uplink data, and device status change. For details, see [AMQP Message Subscription Overview](/en/saasDevelop/subscription/AMQPinfo.md).
