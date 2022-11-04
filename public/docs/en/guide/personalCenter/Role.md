# Permission Management

This document introduces the permission management for enterprise users. This permission management feature is designed for enterprise users who require multi-user collaboration. It allows the enterprise users to flexibly assign role permissions to its sub accounts for collaborative development of IoT projects.

### **Prerequisites**

● An account is registered as enterprise account or an individual account is upgraded to enterprise account.

### **Steps**

1.After logging in to Developer Center, click "Permission Management" in the drop-down menu for username in the upper right corner to enter "Permission Management" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-12_15-36-30.png?version=1&modificationDate=1647069984000&api=v2">![img](/en/guide/image2022-3-12_15-36-30.png?version=1&modificationDate=1647069984000&api=v2)</a>

2.There are two tabs: Role Management and Member Management. The "Role Management" tab page is displayed by default. There are two types of roles: default roles and custom roles. The default roles are as follows:

| **Role**  | **Description**                                                         |
| :--------- | :----------------------------------------------------------- |
| Super Administrator | Have all permissions. This role is unique to enterprise accounts and cannot be assigned to any sub accounts of the enterprise accounts. You can view the specific menu permissions for Super Administrator on Developer Center. |
| Operator Maintainer   | Permission management. It is used for enterprise users to manage their sub accounts. You can view the specific menu permissions for Operator Maintainer on Developer Center. |
| Operator   | Management of operation abilities, such as statistical analysis. It can help enterprise users to develop platform operation abilities. You can view the specific menu permissions for Operator on Developer Center. |
| Developer   | Product development, SaaS Development and App development. It can help enterprise users to develop platform development abilities. You can view the specific menu permissions for Developer on Developer Center. |

3.If the default roles do not meet your needs, you can click "Add Role" and enter the role name and role description in the pop-up window to create a custom role.

4.After the role is added, find it in the role list and click "View Menu Permission" in the Action column to assign specific menu permissions to the role based on application requirements.

5.If you are not satisfied with the custom role, you can find the role in the role list and click "Delete" in the Action column to delete it. However, you cannot delete the default roles.

6.You can create a sub-account. Select "Sub Account Management" tab and click "Add a Sub" to bring up the following window. 

Parameters

| **Parameter**     | **Description**                                                        |
| :------- | :----------------------------------------------------------- |
| Username | Username for the sub account                                                |
| Password     | Initial password set for the sub account                                     |
| Confirm Password | Enter the password again to avoid incorrect input                                 |
| Email | Email address for the sub account. Subsequent operations of the sub account will be notified by email. Make sure you enter a valid email address. |
| Role     | A defined role for the sub account, which is used to restrict the menu permissions for the sub account.           |
| Authorized Product | Authorized products include All Products and Specified Products. Permissions for All Products: the sub account has data permissions for all products owned by current enterprise user, including future products. Permissions for Specified Products: If you have selected a specified product, the sub account has the data permissions for the selected product. The data permissions for products include the data permissions for the products created by the sub account itself, no matter All Products or Specified Products is selected. If no product is selected, the sub account only has data permissions for the products created by itself. |
| Authorized App  | Authorized Apps includes All Apps and Specified Apps. Permissions for All Apps: the sub account has data permissions for all Apps owned by current enterprise user, including future Apps. Permissions for Specified Apps: If you have selected a specified App, the sub account has the data permissions for the selected App. The data permissions for Apps include the data permissions for the Apps created by the sub account itself, no matter All Apps or Specified Apps is selected. If no App is selected, the sub account only has data permissions for the Apps created by itself. |
| Authorized SaaS  | Authorized SaaSs includes All SaaSs and Specified SaaSs. Permissions for All SaaSs: the sub account has data permissions for all SaaSs owned by current enterprise user, including future SaaSs. Permissions for Specified SaaSs: If you have selected a specified SaaS, the sub account has the data permissions for the selected SaaS. The data permissions for SaaSs include the data permissions for the SaaSs created by the sub account itself, no matter All SaaSs or Specified SaaSs is selected. If no SaaS is selected, the sub account only has data permissions for the SaaSs created by itself. |

>Note: For OTA version and OTA plan, the sub accounts only have the data permissions created by themselves.

7.Enter the above required information in the pop-up window and the click "Confirm". The sub account is created and the data permissions and menu permissions are assigned to the sub account.

8.If you want to delete a sub account, click "Member Management" tab and find the sub account you want to delete in the sub account list, and then click "Delete" in the Action column. The sub account is deleted.  All resources created by the sub account are retained after the sub account is deleted, and these resources belongs to the enterprise user.
