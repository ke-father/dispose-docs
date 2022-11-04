# Security Center

This document introduces the generation of AcccessKey/AccessSecret in Security Center, the second step in SaaS development.

## **Prerequisites**

● The application for message subscription has been approved.<br />
● The application for OpenAPI has been approved.

## **Steps**

1.After logging in to Developer Center, click "SaaS Development" → "Development Guide" in the left navigation bar to enter "Development Guide" page, and then click "Security Center" link. Or you can click "Security Center" in the drop-down menu for username in the upper right corner to enter "Security Center" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-7_19-55-14.png?version=1&modificationDate=1646653546000&api=v2">![img](/en/guide/image2022-3-7_19-55-14.png?version=1&modificationDate=1646653546000&api=v2)</a>

2.Click "Add a AccessKey" to bring up the follwing window.

<a data-fancybox title="img" href="/en/guide/image2022-3-7_19-56-56.png?version=1&modificationDate=1646653647000&api=v2">![img](/en/guide/image2022-3-7_19-56-56.png?version=1&modificationDate=1646653647000&api=v2)</a>

Enter a name for your AccessKey to facilitate daily AccessKey management. Click "Confirm". The AccessKey is created. 

Note: Each account can have a limited number of AccessKeys, as shown in the following table:    

|**Account Type**   | **Quantity of AccessKeys** | **Description**                                                         |
| :--------- | :------------ | :----------------------------------------------------------- |
| Individual Developer | 2             | You can register as an individual developer account and create a maximum of 2 AccessKeys for conneting your devices to SaaS applications. |
| Enterprise User   | 5             | You can register as an enterprise user account and create a maximum of 5 Accesskeys for connecting your devices to SaaS applications. Enterprise accounts share this limit with their members. |

3.If you have security requirements, you can add an IP whitelist to your SaaS application. Click "IP Whitelist" to bring up the following window.

<a data-fancybox title="img" href="/en/guide/image2022-3-7_20-5-47.png?version=1&modificationDate=1646654178000&api=v2">![img](/en/guide/image2022-3-7_20-5-47.png?version=1&modificationDate=1646654178000&api=v2)</a>

Click the button in the pop-up window to enable IP whitelist feature and then enter your SaaS application IP addresses in the whitelist input box. Click "Confirm". Then you can only call OpenAPI or use message subscription functions by using AccessKey through the IP addresses in the whitelist.

Note: All AccessKeys you create will be limited by the IP whitelist.

4.If you want to delete a AccessKey, you can find the AccessKey you want to delete on "Security Center" page and click "Delete" in the Action column.
