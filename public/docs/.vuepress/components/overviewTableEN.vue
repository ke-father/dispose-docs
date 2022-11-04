<template>
  <table>
    <tr>
      <th>Type</th>
      <th>API</th>
      <th>Description</th>
      <th>Version</th>
      <th>Remarks</th>
    </tr>
    <!--    产品设备管理API-->
    <tr>
      <td valign="top" rowspan="36">Product and Device Management</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/addSnListUsingPOST')">/r1/openapi/enterpriseapi/addSnList</a>
      </td>
      <td>Adds or covers the topology relationship between SNs and devices in batches.</td>
      <td valign="top" rowspan="36">2.0.0</td>
      <td></td>
    </tr>
    <tr v-for="item in productList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td>{{ item.commit ? item.commit : '' }}</td>
    </tr>
    <!--    消息订阅管理API-->
    <tr>
      <td valign="top" rowspan="14">Message Subscription Management</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/clearQueueUsingPOST')">/{version}/openapi/queue/clear</a>
      </td>
      <td>Clears the message queue.</td>
      <td valign="top" rowspan="14">1.0.0</td>
      <td></td>
    </tr>
    <tr v-for="item in messageList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : '' }}</td>
    </tr>
    <!--    短信管理API-->
    <tr>
      <td valign="top" rowspan="15">SMS Message Management</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsAccountUsingPOST_3')">/enterpriseapi/addEntSmsAccount</a>
      </td>
      <td>Adds an SMS message account of an enterprise.</td>
      <td valign="top" rowspan="15">2.6.0</td>
      <td></td>
    </tr>
    <tr v-for="item in noteList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : '' }}</td>
    </tr>
    <!--    终端用户管理API-->
    <tr>
      <td valign="top" rowspan="24">End User Management</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEmailAccountUsingPOST_3')">/enterpriseapi/addEmailAccount</a>
      </td>
      <td>Adds an email account.</td>
      <td valign="top" rowspan="24">2.6.0</td>
      <td></td>
    </tr>
    <tr v-for="item in userAdminList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : '' }}</td>
    </tr>
    <!--    绑定管理API-->
    <tr>
      <td valign="top" rowspan="4">Binding Management</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/bindDeviceByPkDkUsingPOST_1')">/enterpriseapi/bindDeviceByPkDk</a>
      </td>
      <td>Binds device with PK and DK</td>
      <td valign="top" rowspan="4">2.6.0</td>
      <td></td>
    </tr>
    <tr v-for="item in bindList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : '' }}</td>
    </tr>
<!--    设备组管理API-->
    <tr>
      <td valign="top" rowspan="12">Device Group Management</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/addDeviceGroupUsingPOST_3')">/enterpriseapi/addDeviceGroup</a>
      </td>
      <td>Adds a device group</td>
      <td valign="top" rowspan="12">2.6.0</td>
      <td></td>
    </tr>
    <tr v-for="item in equiList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : '' }}</td>
    </tr>
  </table>
</template>


<script>
import mixinFun from '../mixinFun'
export default {
  name: "OverviewTable",
  mixins: [mixinFun],
  data() {
    return {
      // 产品设备list
      productList: [
      ],
      // 消息管理List
      messageList: [
      ],
      // 短信管理list
      noteList: [
      ],
      // 终端用户管理list
      userAdminList: [
      ],
      // 绑定列表
      bindList: [
      ],
      // 设备管理列表
      equiList: [
      ]
    }
  },
  created(){
    this.$nextTick(function () {
      this.datashow()
    })
  },
  methods:{
    datashow(){
      this.equiList=[
        {
          place: '/enterpriseapi/addDeviceToGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/addDeviceToGroupUsingPOST_3'),
          rem: 'Adds a device to the device group.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/controlDevicesByDeviceGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/controlDevicesByDeviceGroupUsingPOST_1'),
          rem: 'Controls devices through the device group.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteDeviceGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deleteDeviceGroupUsingDELETE_3'),
          rem: 'Deletes the device group.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteDeviceToGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deleteDeviceToGroupUsingDELETE_4'),
          rem: 'Removes a device from the device group.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deviceGroupInfo',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deviceGroupInfoUsingGET_3'),
          rem: 'Queries device group details.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deviceGroupList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deviceGroupListUsingGET_3'),
          rem: 'Queries the list of device groups.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getControlDeviceGroupTaskDetail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getControlDeviceGroupTaskDetailUsingGET_1'),
          rem: 'Queries the task details of controlling devices through device groups.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getControlDeviceGroupTaskList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getControlDeviceGroupTaskListUsingGET_1'),
          rem: 'Queries the task list for the controlled devices by the device group.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getDeviceGroupList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getDeviceGroupListUsingGET_3'),
          rem: 'Queries the device group list according to the device.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getGroupDeviceList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getGroupDeviceListUsingGET_3'),
          rem: 'Queries the devce list in the device group.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/setDeviceGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/setDeviceGroupUsingPUT_3'),
          rem: 'Edits the device group.',
          // 版本号
          ver: '',
        }
      ]
      this.bindList=[
        {
          place: '/enterpriseapi/deviceUserList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/deviceUserListUsingGET_3'),
          rem: 'Queries the list of users bound to the device.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/unbundlingUserDevice',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/unbundlingUserDeviceUsingDELETE_1'),
          rem: 'The enterprise unbinds the device bound by the user.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/userDeviceList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/userDeviceListUsingGET_6'),
          rem: 'Queries the list of devices that are bound by the user and that accept the sharing.',
          // 版本号
          ver: '',
        }
      ]
      this.userAdminList=[
        {
          place: '/enterpriseapi/addEmailTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEmailTemplateUsingPOST_3'),
          rem: 'Adds email template.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/addEnterpriseThirdpartyConfig',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEnterpriseThirdpartyConfigUsingPOST_1'),
          rem: 'Adds enterprise third-party configuration.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/addUserDomainProductAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addUserDomainProductAuthUsingPOST_3'),
          rem: 'Adds product authorization of the user domain.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEmailAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEmailAccountUsingDELETE_3'),
          rem: 'Deletes the email account.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEmailTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEmailTemplateUsingDELETE_3'),
          rem: 'Deletes the email template.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEnterpriseThirdpartyConfig',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEnterpriseThirdpartyConfigUsingDELETE_1'),
          rem: 'Deletes enterprise third-party configuration.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteUserDomainProductAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteUserDomainProductAuthUsingDELETE_3'),
          rem: 'Deletes user domain product authentication.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/emailAccountUserDomainAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/emailAccountUserDomainAuthUsingPOST_3'),
          rem: 'Authorizes the user domain of the mail account.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/emailTemplateUserDomainAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/emailTemplateUserDomainAuthUsingPOST_3'),
          rem: 'Authorizes the user domains ot the email template.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEmailAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/enabledEmailAccountUsingPUT_3'),
          rem: 'Enables/disables the email account.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEmailTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/enabledEmailTemplateUsingPUT_3'),
          rem: 'Enables/disables the email template.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entUserDomainList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/entUserDomainListUsingGET_4'),
          rem: 'Queries the list of enterprise user domains.',
          // 版本号
          ver: '',
        }, {
          place: '/enterpriseapi/getEmailAccountInfo',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailAccountInfoUsingGET_3'),
          rem: 'Checks email account details.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getEmailAccountList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailAccountListUsingGET_3'),
          rem: 'Queries the list of mail accounts.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getEmailTemplateContent',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E9%82%AE%E4%BB%B6/getEmailTemplateContentUsingGET_3'),
          rem: 'Queries email template content.',
          // 版本号
          ver: '',
        }, {
          place: '/enterpriseapi/getEmailTemplateList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailTemplateListUsingGET_3'),
          rem: 'Queries the list of email templates.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getEnterpriseThirdpartyConfig',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEnterpriseThirdpartyConfigUsingGET_1'),
          rem: 'Queries the third-party configuration list of the enterprise.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/productAuthUserDomainList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/productAuthUserDomainListUsingGET_3'),
          rem: 'Gets the list of user domains authorized by the product.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/setEmailAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/setEmailAccountUsingPUT_3'),
          rem: 'Edits the email account.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/setEmailTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/setEmailTemplateUsingPUT_3'),
          rem: 'Edits the email template.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/userDomainProductAuthList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userDomainProductAuthListUsingGET_3'),
          rem: 'Gets the list of products authorized by the user domain.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/userDomainUserList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userDomainUserListUsingGET_1'),
          rem: 'Queries the list of users registered in the user domain.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/userInfo',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userInfoUsingGET_5'),
          rem: 'Queries user information.',
          // 版本号
          ver: '',
        }
      ]
      this.noteList=[
        {
          place: '/enterpriseapi/addEntSmsSign',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsSignUsingPOST_3'),
          rem: 'Adds an enterprise SMS message signature.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/addEntSmsTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsTemplateUsingPOST_3'),
          rem: '添加企业短信模板Adds SMS message template of an enterprise.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEntSmsAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsAccountUsingDELETE_3'),
          rem: 'Deletes an enterprise SMS message account.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEntSmsSign',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsSignUsingDELETE_3'),
          rem: 'Deletes the enterprise SMS message signature.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEntSmsTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsTemplateUsingDELETE_3'),
          rem: 'Deletes the enterprise SMS message template.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEntSmsAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsAccountUsingPUT_3'),
          rem: 'Enables/disables enterprise SMS message account.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEntSmsSign',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsSignUsingPUT_3'),
          rem: 'Enables/disables the enterprise SMS message signature.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEntSmsTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsTemplateUsingPUT_3'),
          rem: 'Enables/disables the enterprise SMS message template.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entSmsAccountList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsAccountListUsingGET_3'),
          rem: 'Queries the list of enterprise SMS accounts.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entSmsSignList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsSignListUsingGET_3'),
          rem: 'Queries the list of enterprise SMS message signatures',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entSmsSignUserDomainAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsSignUserDomainAuthUsingPOST_3'),
          rem: 'Queries user domain authorization for enterprise SMS message signature.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entSmsTemplateList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsTemplateListUsingGET_3'),
          rem: 'Queries the list of enterprise SMS message templates.',
          // 版本号
          ver: '',
        },
        {
          place: 'enterpriseapi/entSmsTemplateUserDomainAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsTemplateUserDomainAuthUsingPOST_3'),
          rem: 'Queries user domain authorization for enterprise SMS message template.',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/setEntSmsAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/setEntSmsAccountUsingPUT_3'),
          rem: 'Changes enterprise SMS message account.',
          // 版本号
          ver: '',
        }
      ]
      this.messageList=[
        {
          place: '/{version}/openapi/queue/create',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createQueueUsingPOST'),
          rem: 'Ceates a message queue.',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/queue/delete',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/deleteQueueUsingDELETE'),
          rem: 'Deletes a message queue.',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/queue/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/queueDetailUsingGET'),
          rem: 'Queries message queue details.',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/queue/list',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/listQueuesUsingPOST'),
          rem: 'Queries the message queue list.',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/create',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createSubscribeUsingPOST'),
          rem: 'Creates product/device subscriptions.',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/delete',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/deleteSubscribeUsingDELETE'),
          rem: 'Deletes the subscription.',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/subscribeDetailUsingGET'),
          rem: 'Queries the subscription details.',
          // 版本号
          ver: '',
        }, {
          place: '/{version}/openapi/subscribe/enduser',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST'),
          rem: 'Creates an end user subscription.',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/enterprise',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST'),
          rem: 'Creates an enterprise subscription.',
          // 版本号
          ver: '',
          commit: 'Sub-account not supported.'
        },
        {
        place: '/{version}/openapi/subscribe/saas',
        link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST'),
        rem: 'Create SaaS Application Subscription.',
        // 版本号
        ver: '',
        commit: 'Only the SaaS sub-accounts are supported.'
       },
        {
          place: '/{version}/openapi/subscribe/list',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/listSubscriptionsUsingPOST'),
          rem: 'Queries the subscription list.',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/start',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/startSubscribeUsingPOST'),
          rem: 'Starts to subscribe.',
          // 版本号
          ver: '',
        }, {
          place: '/{version}/openapi/subscribe/stop',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/stopSubscribeUsingPOST'),
          rem: 'Stops subscribing.',
          // 版本号
          ver: '',
        }, {
          place: '/{version}/openapi/subscribe/update',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/updateSubscribeUsingPOST'),
          rem: 'Updates the subscription.',
          // 版本号
          ver: '',
        }
      ]
      this.productList=[
        {
          place: '/r1/openapi/enterpriseapi/deleteSnList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/deleteSnListUsingDELETE'),
          rem: 'Deletes the topology relationship between SNs and devices in batches.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/enterpriseapi/findDkList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/findDkListUsingPOST'),
          // 版本号
          ver: '',
          rem: 'Queries the corresponding device list according to the PK and SN list.',
        },
        {
          place: '/r1/openapi/enterpriseapi/findSnList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/findSnListUsingPOST'),
          rem: 'Queries the corresponding SN list according to the device list.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/enterpriseapi/generateSnList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/generateSnListUsingPOST'),
          rem: 'Generates the SN data.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/产品管理/productDetailUsingGET'),
          rem: 'Queries the product details.',
          // 版本号
          ver: '',
          commit: 'Discarded. To be removed in later versions.'
        },
        {
          place: '/r2/openapi/product/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/产品管理/productDetailUsingGET_1'),
          rem: 'Queries the product details.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/edit',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86/editProductUsingPUT'),
          rem: 'Modifies product basic information.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/items',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86/productItemsUsingGET'),
          rem: 'Queries product category dictionary table.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/publish',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86/publishUsingPOST'),
          rem: 'Releases the product.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/project/{projectId}/product/overview',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86/overviewProductsUsingGET'),
          rem: 'Queries the product list.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/getAbilityFormatJsonTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%89%A9%E6%A8%A1%E5%9E%8B/getAbilityFormatJsonTemplateUsingGET'),
          rem: 'Queries the template of the TSL data sent fron the device.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/export/tslFile',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%89%A9%E6%A8%A1%E5%9E%8B/getProductTslFileUsingGET'),
          rem: 'Exports the TSL file.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/tslFile/copyTsl',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%89%A9%E6%A8%A1%E5%9E%8B/copyTslToProductDraftUsingGET'),
          rem: 'Copies TSL model to the target product.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/product/gateway/getGatewayInfoByChild',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BD%91%E5%85%B3%E5%AD%90%E8%AE%BE%E5%A4%87%E7%BB%91%E5%AE%9A%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86/getGatewayProductByChildUsingGET'),
          rem: 'Queries the information of the gateway to which the sub-device belongs',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/gateway/subList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BD%91%E5%85%B3%E5%AD%90%E8%AE%BE%E5%A4%87%E7%BB%91%E5%AE%9A%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86/subListUsingGET'),
          rem: 'Queries the sub-devices associated with the gateway device.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/data/history',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceDataHistoryUsingGET'),
          rem: 'Queries the historical uplink and downlink data of the device.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceDetailUsingGET'),
          rem: 'Queries device details.',
          // 版本号
          ver: '',
          commit: 'Discarded. To be removed in later versions.'
        },{
          place: '/r2/openapi/device/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceDetailUsingGET_1'),
          rem: 'Queries device details.',
          // 版本号
          ver: '',
         }, {
          place: '/r1/openapi/device/edit',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/editDeviceInfoUsingPUT'),
          rem: 'Edits the device.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/eventdata/history',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceEventDataHistoryUsingGET'),
          rem: 'Queries device event log.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/getlocation',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/getLocationUsingGET'),
          rem: 'Queries the latest positioning data of the device.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/resource',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceResourceUsingGET'),
          rem: 'Queries device resource information.',
          // 版本号
          ver: '',
          commit: 'Discarded. To be removed in later versions.'
        },
        {
         place: '/r2/openapi/device/resource',
         link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceResourceUsingGET_1'),
         rem: 'Queries device resource information.',
         // 版本号
         ver: '',
         },
        {
          place: '/r1/openapi/device/verify',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/verifiedUsingPOST'),
          rem: 'Performs secondary verification of the device.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/product/device/batchcreate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/addDeviceListUsingPOST'),
          rem: 'Adds devices in batches.',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/device/create',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/addDeviceUsingPOST'),
          rem: 'Adds a device.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/product/device/overview',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceListUsingGET'),
          rem: 'Queries the device list under the product.',
          // 版本号
          ver: '',
        }, {
          place: '/r2/openapi/device/batchSendData',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/batchSendDataUsingPOST'),
          rem: 'Sends device downlink data in batches.',
          // 版本号
          ver: '',
          commit: 'Discarded'
        }, {
          place: '/r2/openapi/device/sendData',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/sendDataUsingPOST_1'),
          rem: 'The device sends downlink data.',
          // 版本号
          ver: '',
          commit: 'Discarded'
        },
        {
                place: '/r3/openapi/dm/readData',
                link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/设备管理/readDataUsingPOST'),
                rem: 'The device queries TSL property data',
                // 版本号
                ver: '',
                },
                {
                  place: '/r3/openapi/dm/writeData',
                  link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/设备管理/writeDataUsingPOST'),
                  rem: 'The device sends downlink TSL data',
                  // 版本号
                  ver: '',
                },
                {
                  place: '/r3/openapi/raw/sendData',
                  link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/设备管理/sendDataUsingPOST_2'),
                  rem: 'The device sends downlink transparent transmission data',
                  // 版本号
                  ver: '',
                },
        {
          place: '/r1/openapi/project/{projectId}/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/projectDetailUsingGET'),
          rem: 'Queries project details.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/project/{projectId}/edit',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/editProjectUsingPUT'),
          rem: 'Edits the project information.',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/project/overview',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/overviewProjectsUsingGET'),
          rem: 'Queries the project list.',
          // 版本号
          ver: '',
        },
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
</style>