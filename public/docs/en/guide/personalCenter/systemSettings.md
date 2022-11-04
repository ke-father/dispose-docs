# System Settings

This document introduces system messages in System Settings. System messages include notifications and account-related system information.

### **Prerequisites**

None

### **Steps**

After logging in to Developer Center, click "Statistical Analysis" in the drop-down menu for username in the upper right corner to enter "System Settings" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-14_10-58-40.png?version=1&modificationDate=1647226099000&api=v2">![img](/en/guide/image2022-3-14_10-58-40.png?version=1&modificationDate=1647226099000&api=v2)</a>

You can also click **Little Bell** in the top navigation bar to enter the system message page. The **Little Bell** has a number to indicate the unread messages.

<a data-fancybox title="img" href="/en/guide/image2022-3-14_10-59-54.png?version=1&modificationDate=1647226173000&api=v2">![img](/en/guide/image2022-3-14_10-59-54.png?version=1&modificationDate=1647226173000&api=v2)</a>

Parameters

| **Parameter**   | **Description**                                                  |
| :---------- | :----------------------------------------------------------- |
| No.         | A unique identifier for each message                         |
| Time        | The time when this message was generated                     |
| Type        | Message type. Notifications: The messages that the system sends to all users, such as a reminder of a system upgrade. All users can receive such messages. System messages: the system messages triggered by the user's operations, which is directed to specific users, such as message queue expiration reminder and OpenAPI review result reminder. |
| initiator   | Producer of this message                                     |
| Description | Content of this message                                      |
| Status      | Status of the request approval message, including approved and failed |
