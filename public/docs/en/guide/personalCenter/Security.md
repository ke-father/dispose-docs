# Security Center

This document introduces operations related to Security Center. Security Center is used to manage AccessKey/AccessSecret. AccessKey, as an important part of platform security, is the identity certificate for application to call OpenAPI and subscribe AMQP message. AccessKey and AccessSecret are used to encrypt and verify the signature, which need to be properly kept. Do not disclose the AccessKey and AccessSecret to anyone.

### **Prerequisites**

● If you want to call OpenAPI, you need to enable OpenAPI feature in advance. See [Feature Enablement](/en/guide/saas/FunctionOpen.md).<br />
● If you want to subscribe to platform messages, you need to enable message subscription feature in advance. See [Feature Enablement](/en/guide/saas/FunctionOpen.md).

### **Steps**

1.After logging in to Developer Center, click "Security Center" in the drop-down menu for username in the upper right corner to enter "Security Center" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_14-58-31.png?version=1&modificationDate=1647067705000&api=v2">![img](/en/guide/image2022-3-12_14-58-31.png?version=1&modificationDate=1647067705000&api=v2)</a>

2.Click "Add a AccessKey" and enter a AccessKey name. Then click "Confirm".

3.Find the AccessKey you has created in the AccessKey list and click "View" in the Action column to view the details of the AccessKey.

>Note: The maximum number of AccessKey that can be created for an enterprise account is 5, and the maximum number of AccessKey that can be created for an individual account is 2.

4.Usage of AccessKey, see [Develop a SaaS Application](/en/saasDevelop/CommunicatOverview.md).
