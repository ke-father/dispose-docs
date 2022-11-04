# Message Subscription

This document introduces message subscription, the third step in SaaS development.

The steps and flow for message subscription are as follows:

<a data-fancybox title="img" href="/en/guide/image2022-3-21_16-14-0.png?version=1&modificationDate=1646716773000&api=v2">![img](/en/guide/image2022-3-21_16-14-0.png?version=1&modificationDate=1646716773000&api=v2)</a>

## **Prerequisites**

● At least one SaaS has been created.  

## **Steps**

### **1.Queue Management**

1.After logging in to Developer Center, click "SaaS Development" → "Message Subscription" in the left navigation bar to enter "Subscription List" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-16_17-13-24.png?version=1&modificationDate=1646655516000&api=v2">![img](/en/guide/image2022-3-16_17-13-24.png?version=1&modificationDate=1646655516000&api=v2)</a>

2.Click "Message Queue" tab and then click "Create a Queue" to create a queue for future subscriptions.

Enter a queue name and, if necessary, a description of the queue to more clearly express the role or meaning of the queue. Then click "Confirm".

Note: The queue name under the current account must be unique and can contain a maximum of 64 characters, including uppercase and lowercase letters, digits, underscores (_), hyphens (-). Slashes (/), spaces and other special characters are not supported.  

3.After the queue is created, it will be displayed in the queue list. You can click "View" or "Delete" in the Action column to view or delete the queue.  

Note: Naming rules for queues: a. {Identifier ID}. {Queue Name}

Each user can create up to 50 queues, and message queues that have not been used for 30 days are deactivated for resource recycling.

4.Find the queue you wan to view and click "View"in the Action column to view the consumption information, basic information and connection information.

If the message accumulation is greater than 0, you can manually clear the messages.

| **Queue Status** | **Description**                                                  |
| :----------- | :----------------------------------------------------------- |
| Inactive     | Indicates that there are no related subscriptions in the queue |
| Started      | Indicates that there are related subscriptions in a queue, and when the related subscriptions in a queue are deleted, the queue status changes to Inactive. |
| Suspended    | Indicates that the queue has been unavailable for a long time and has been suspended. Suspended queues cannot be restored, and an additional column of deactivation times is displayed when viewing details. |

### **2.Subscription Management**

1.After the message queue is created, you can set up message for the queue. Click "Subscription List" tab and then click "Subscribe" button to bring up the following window. Enter the required information and then click "Confirm".

<a data-fancybox title="img" href="/en/guide/image2022-3-16_17-17-6.png?version=1&modificationDate=1646710965000&api=v2">![img](/en/guide/image2022-3-16_17-17-6.png?version=1&modificationDate=1646710965000&api=v2)</a>

Parameters 

| **Parameter**            | **Description**                                                  |
| :-------------------- | :----------------------------------------------------------- |
| Subscription Name     | Enter the subscription name. The value can contain a maximum of 128 characters, including Chinese characters, uppercase and lowercase letters, digits, underscores (_), hyphens (-). Slashes (/), spaces and other special characters are not supported. |
| Please select product | Subscribe to messages of a specific product                  |
| Data Level            | Product Level: Subscribes to all device data under the selected product. Device Level: Subscribes to specific device data of the selected product. When you select Device Level, you can fuzzily search for and query specific devices on the page. |
| Message Type (TSL)    | Select the type of the message to be subscribed, and you can choose more than one type. The message types include device online/offline events, device and module status, device response, TSL-property, TSL-event- message, TSL-event-alert, TSL-event-fault, TSL-service- calling logs, device downlink data, device positioning - original data, device positioning data and device information change.  See [SaaS Application Development](/en/saasDevelop/CommunicatOverview.md). |
| Message Type (Custom) | Select the type of the message to be subscribed, and you can choose more than one type. The message types include device online/offline events, device and module status, device uplink data, device downlink data, device response, device positioning - query positioning data, device positioning - original data, device positioning data and change of device information. See [SaaS Application Development](/en/saasDevelop/CommunicatOverview.md). |
| Message Queue         | Select or create a message queue to bind this subscription   |

2.The subscription is not started after it is created. Find the subscription in Subscription List and click "**Start**" in the Action column for the subscription rules to take effect. 

>Note: You cannot modify or delete a subscription rule that has been started. You need to click "**Stop**" in the Action column before modifying the subscription rules.
