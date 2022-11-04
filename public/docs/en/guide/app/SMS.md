# SMS Settings

This document introduces the SMS management and settings during App development.

App users will receive an SMS verification code when they register accounts, log in to the App with SMS verification code, recover or reset the password and so on. 

Users can set independent SMS signature and SMS template for each App, or use the general SMS signature and SMS template provided by Quectel.   

## **General SMS Signature and SMS Template**

### **SMS Signature**

| **SMS Platform** | **Region** | **Signature ID (ssid)** | **Signature Name** |
| :------- | :-------- | :-------------- | :----------- |
| Alibaba Cloud  | Domestic/International | C1              | Quectel      |

### **SMS Template**

 <table class="confluenceTable stickyTableHeaders" resolved="" style="padding: 0px;"><thead class="tableFloatingHeaderOriginal"><tr><th style="text-align: left;" class="confluenceTh">SMS Platform</th><th style="text-align: left;" colspan="1" class="confluenceTh">Region</th><th style="text-align: left;" class="confluenceTh">Template ID (stid)</th><th style="text-align: left;" class="confluenceTh">Template Name</th><th style="text-align: left;" class="confluenceTh">Template Content</th></tr></thead><thead class="tableFloatingHeader" style="display: none;"><tr><th style="text-align: left;" class="confluenceTh">SMS Plaform</th><th style="text-align: left;" colspan="1" class="confluenceTh">Region</th><th style="text-align: left;" class="confluenceTh">Template ID (stid)</th><th style="text-align: left;" class="confluenceTh">Template Name</th><th style="text-align: left;" class="confluenceTh">Template Content</th></tr></thead><colgroup><col><col><col><col><col></colgroup><tbody><tr><td style="text-align: center;" rowspan="6" class="confluenceTd">Alibaba Cloud</td><td style="text-align: left;" rowspan="3" class="confluenceTd">Domestic<br><br><br></td><td style="text-align: left;" class="confluenceTd">C1</td><td style="text-align: left;" class="confluenceTd">Reset The Password</td><td style="text-align: left;" class="confluenceTd"> Your dynamic verification code is: ${code}, you are in the process of resetting your password, If you did not make this request, you can ignore this SMS.</td></tr><tr><td style="text-align: left;" class="confluenceTd">C2</td><td style="text-align: left;" class="confluenceTd">Log in</td><td style="text-align: left;" class="confluenceTd">Your verification code is: ${code}, This code will expire 5 minutes after this SMS was sent, please do not share with anyone!</td></tr><tr><td style="text-align: left;" class="confluenceTd">C3</td><td style="text-align: left;" class="confluenceTd">Sign up</td><td style="text-align: left;" class="confluenceTd">Registration verification code: ${code}. If you did not make this request, you can ignore this SMS.</td></tr><tr><td style="text-align: left;" rowspan="3" class="confluenceTd">International<br><br><br></td><td style="text-align: left;" colspan="1" class="confluenceTd">C4</td><td style="text-align: left;" colspan="1" class="confluenceTd">Registration Verification Code</td><td style="text-align: left;" colspan="1" class="confluenceTd">Your verification code is: ${code}. If you did not request a verification code, you can ignore this message.</td></tr><tr><td style="text-align: left;" colspan="1" class="confluenceTd">C5</td><td style="text-align: left;" colspan="1" class="confluenceTd">Login Verification Code</td><td style="text-align: left;" colspan="1" class="confluenceTd">Your verification code is: ${code}. The code is valid within 5 mininutes. Do not share it with anyone!</td></tr><tr><td style="text-align: left;" colspan="1" class="confluenceTd">C6</td><td style="text-align: left;" colspan="1" class="confluenceTd">Password Reset Verification Code</td><td style="text-align: left;" colspan="1" class="confluenceTd">Your verification code is: ${code}. Do not share it with anyone!</td></tr></tbody></table>

**Custom SMS Settings**

### **Add an SMS Account**

#### **Prerequisites**

● An App has been created.<br />
● An Alibaba Cloud SMS account has been applied.

#### **Steps**

1.After logging in to Developer Center,  click "App Development" in the left navigation bar to enter "App SDK Development" page. Find the App you have created and click "View" in the Action column to enter the detail page of the App.

Click "SMS Settings" to view the SMS signature and SMS template authorized to the App.

2.Click "SMS Settings" as shown in the figure below to enter "SMS Settings" page.

3.Click "Add an SMS Account" to bring up the following window.

<a data-fancybox title="img" href="/en/guide/image2022-7-12-4.png?version=1&modificationDate=1647393801000&api=v2">![img](/en/guide/image2022-7-12-4.png?version=1&modificationDate=1647393801000&api=v2)</a>

Currently, you can configure Alibaba Cloud SMS platform. In the pop-up window, select "Alibaba Cloud" in the drop-down box of "SMS Platform", enter the AccessKey and AccessSecret issued by Alibaba Cloud,  enter an account name, then click "Confirm". A customized SMS account is added.

### **Edit SMS Account**

Find the SMS account you want to edit on "SMS Settings" page and click "Edit" in the Action column to edit the account name and note of an existing SMS account in the pop-up "Edit SMS Account" window.

### **Delete SMS Account**

Find the SMS account you want to delete on "SMS Settings" page and click "Delete" in the Action column to delete an existing SMS account. And you cannot send a message from an account which has been deleted.

### **Add SMS Signature and SMS Template**

#### **Prerequisites**

● An SMS account has been created.<br />
● An SMS signature and SMS template on Alibaba Cloud have been applied.

#### **Steps**

1.Find the SMS account to which you want to add an SMS signature and SMS template on "SMS Settings" page and click "View" in the Action column to enter "Details" page where you can manage the SMS signature and SMS template under the SMS account.

2.Select "Signature Management" tab and click "Add a Signature" to add the SMS signature that has been approved on Alibaba Cloud.


3.After the signature is added successfully, you can click "Authorize App" to configure which Apps can use the signature.

4.Select "Template Management" tab and click "Add a Template" to add the SMS template that has been approved on Alibaba Cloud.

Enter the SMS template ID applied on Alibaba Cloud and click "Query SMS Content" to get the content of the SMS template, then click "Confirm". The SMS template is created. 

5.After the template is added successfully, you can click "Authorize App" to configure which Apps can use the template.
