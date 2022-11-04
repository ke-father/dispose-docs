# SMS Settings

This document introduces the SMS settings. SMS settings is mainly used in App development. App users will receive an SMS verification code when they register accounts, log in to the App with SMS verification code, recover or reset the password and so on. By default, a general SMS signature and SMS template are used. You can customize the SMS signature and SMS template if required.

### **Prerequisites**

● An App has been created.

### **Steps**

1.After logging into Developer Center, click "App Development" in the left navigation bar to enter "App SDK Development" page. Find the App you create and click "View" in the Action column to enter the detail page of the App.

Click "SMS Settings" to view the SMS signature and SMS template authorized to the App.

<a data-fancybox title="img" href="/en/guide/image2022-3-16_9-22-10.png?version=1&modificationDate=1647423281000&api=v2">![img](/en/guide/image2022-3-16_9-22-10.png?version=1&modificationDate=1647423281000&api=v2)</a>

2.Click "SMS Settings" as shown in the figure below to enter "SMS Settings" page.

3.Click "Add SMS Account" to bring up the following window.

<a data-fancybox title="img" href="/en/guide/image2022-3-16_9-33-58.png?version=1&modificationDate=1647423281000&api=v2">![img](/en/guide/image2022-3-16_9-33-58.png?version=1&modificationDate=1647423281000&api=v2)</a>

Currently, you can configure Alibaba Cloud SMS platform. In the pop-up window, select "Alibaba Cloud" in the drop-down box of "SMS Platform", enter the AccessKey and AccessSecret issued by Alibaba Cloud, enter an account name, then click "Confirm". A customized SMS account is added.

Parameters

| **Parameter**    | **Description**                                                  |
| :----------- | :----------------------------------------------------------- |
| SMS Platform | The third-party SMS platform you want to configure. Only Alibaba Cloud SMS platform is currently supported. |
| Account Name | Name of the SMS account                                      |
| AccessKey    | SMS platform access credentials                              |
| AccessSecret | Key of the SMS platform access credentials                   |                          |

### **Edit SMS Account**

Find the SMS account you want to edit on "SMS Settings" page and click "Edit" in the Action column to edit the account name and note of the SMS account in the pop-up "Edit SMS Account" window.

### **Delete SMS Account**

You can click "Delete" in the Action column to delete an existing SMS account. And you cannot send a message from an account which has been deleted.

## **Add SMS Signature and SMS Template**

### **Prerequisites**

● An SMS account has been added on Developer Center.<br />
● An SMS signature and SMS template have been applied on Alibaba Cloud.

### **Steps**

1.Find the SMS account to which you want to add an SMS signature and SMS template on "SMS Settings" page and click "View" in the Action column to enter "Details" page where you can manage the SMS signature and SMS template under the SMS account.

2.Select "Signature Management" and click "Add a Signature" to add the SMS signature that has been approved on Alibaba Cloud.

3.After the signature is added successfully, you can click "Authorize App" to configure which Apps can use the signature.

| **Action**         | **Description**                                                  |
| :------------- | :----------------------------------------------------------- |
| Authorize App  | Authorize the App you have created to use the SMS signature  |
| Enable/Disable | Enable/disable the SMS signature                             |
| Delete         | Even if the SMS signature is deleted from Developer Center, the SMS signature is not deleted from the third-party SMS service. |

4.Select "Template Management" and click "Add a Template" to add the SMS template that has been approved on Alibaba Cloud.

Enter the SMS template ID applied on Alibaba Cloud and click "Query SMS Content" to get the content of the SMS template, then click "Confirm". The SMS template is created. 

5.After the template is added successfully, you can click "Authorize App" to configure which Apps can use the template.

| **Action**         | **Description**                                                  |
| :------------- | :----------------------------------------------------------- |
| Authorize App  | Authorize the App you have created to use the SMS template   |
| Enable/Disable | Enable/disable the SMS template                              |
| Delete         | Even if the SMS template is deleted from Developer Center, the SMS template is not deleted from the third-party SMS service. |
