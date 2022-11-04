<template>
  <table>
    <tr>
      <th>类型</th>
      <th>接口地址</th>
      <th>功能描述</th>
      <th>版本</th>
      <th>备注</th>
    </tr>
    <!--    产品设备管理API-->
    <tr>
      <td valign="top" rowspan="36">产品设备管理API</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/addSnListUsingPOST')">/r1/openapi/enterpriseapi/addSnList</a>
      </td>
      
      <td>批量添加或覆盖SN与设备的拓扑关系</td>
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
      <td valign="top" rowspan="14">消息订阅管理API</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/clearQueueUsingPOST')">/{version}/openapi/queue/clear</a>
      </td>
      <td>清理队列</td>
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
      <td valign="top" rowspan="15">短信管理API</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsAccountUsingPOST_3')">/enterpriseapi/addEntSmsAccount</a>
      </td>
      <td>添加企业短信账号</td>
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
      <td valign="top" rowspan="24">终端用户管理API</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEmailAccountUsingPOST_3')">/enterpriseapi/addEmailAccount</a>
      </td>
      <td>添加邮件账号</td>
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
      <td valign="top" rowspan="4">绑定管理API</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/bindDeviceByPkDkUsingPOST_1')">/enterpriseapi/bindDeviceByPkDk</a>
      </td>
      <td>通过PK，DK绑定设备</td>
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
      <td valign="top" rowspan="12">设备组管理API</td>
      <td>
        <a target="_blank" :href="toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/addDeviceGroupUsingPOST_3')">/enterpriseapi/addDeviceGroup</a>
      </td>
      <td>添加设备组</td>
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
          rem: '添加设备到设备组中',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/controlDevicesByDeviceGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/controlDevicesByDeviceGroupUsingPOST_1'),
          rem: '通过设备组控制设备',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteDeviceGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deleteDeviceGroupUsingDELETE_3'),
          rem: '删除设备组',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteDeviceToGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deleteDeviceToGroupUsingDELETE_4'),
          rem: '移除设备组中的设备',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deviceGroupInfo',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deviceGroupInfoUsingGET_3'),
          rem: '查询设备组详情',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deviceGroupList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deviceGroupListUsingGET_3'),
          rem: '查询设备组列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getControlDeviceGroupTaskDetail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getControlDeviceGroupTaskDetailUsingGET_1'),
          rem: '查询通过设备组控制设备的任务详情',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getControlDeviceGroupTaskList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getControlDeviceGroupTaskListUsingGET_1'),
          rem: '查询通过设备组控制设备的任务列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getDeviceGroupList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getDeviceGroupListUsingGET_3'),
          rem: '根据设备查询设备组列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getGroupDeviceList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getGroupDeviceListUsingGET_3'),
          rem: '查询设备组中的设备列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/setDeviceGroup',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/setDeviceGroupUsingPUT_3'),
          rem: '修改设备组',
          // 版本号
          ver: '',
        }
      ]
      this.bindList=[
        {
          place: '/enterpriseapi/deviceUserList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/deviceUserListUsingGET_3'),
          rem: '查询绑定设备的用户列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/unbundlingUserDevice',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/unbundlingUserDeviceUsingDELETE_1'),
          rem: '企业解绑用户绑定的设备',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/userDeviceList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/userDeviceListUsingGET_6'),
          rem: '查询用户绑定和接受分享的设备列表',
          // 版本号
          ver: '',
        }
      ]
      this.userAdminList=[
        {
          place: '/enterpriseapi/addEmailTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEmailTemplateUsingPOST_3'),
          rem: '添加邮件模板',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/addEnterpriseThirdpartyConfig',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEnterpriseThirdpartyConfigUsingPOST_1'),
          rem: '添加企业第三方配置',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/addUserDomainProductAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addUserDomainProductAuthUsingPOST_3'),
          rem: '添加用户域产品授权',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEmailAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEmailAccountUsingDELETE_3'),
          rem: '删除邮件账号',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEmailTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEmailTemplateUsingDELETE_3'),
          rem: '删除邮件模板',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEnterpriseThirdpartyConfig',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEnterpriseThirdpartyConfigUsingDELETE_1'),
          rem: '删除企业第三方配置',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteUserDomainProductAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteUserDomainProductAuthUsingDELETE_3'),
          rem: '删除用户域产品授权',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/emailAccountUserDomainAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/emailAccountUserDomainAuthUsingPOST_3'),
          rem: '邮件账号的用户域授权',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/emailTemplateUserDomainAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/emailTemplateUserDomainAuthUsingPOST_3'),
          rem: '邮件模板的用户域授权',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEmailAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/enabledEmailAccountUsingPUT_3'),
          rem: '启用停用邮件账号',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEmailTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/enabledEmailTemplateUsingPUT_3'),
          rem: '启用停用邮件模板',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entUserDomainList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/entUserDomainListUsingGET_4'),
          rem: '查询企业用户域列表',
          // 版本号
          ver: '',
        }, {
          place: '/enterpriseapi/getEmailAccountInfo',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailAccountInfoUsingGET_3'),
          rem: '查询邮件账号详情',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getEmailAccountList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailAccountListUsingGET_3'),
          rem: '查询邮件账号列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getEmailTemplateContent',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E9%82%AE%E4%BB%B6/getEmailTemplateContentUsingGET_3'),
          rem: '查询邮件模板内容',
          // 版本号
          ver: '',
        }, {
          place: '/enterpriseapi/getEmailTemplateList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailTemplateListUsingGET_3'),
          rem: '查询邮件模板列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/getEnterpriseThirdpartyConfig',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEnterpriseThirdpartyConfigUsingGET_1'),
          rem: '查询企业第三方配置列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/productAuthUserDomainList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/productAuthUserDomainListUsingGET_3'),
          rem: '获取产品授权的用户域列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/setEmailAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/setEmailAccountUsingPUT_3'),
          rem: '修改邮件账号',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/setEmailTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/setEmailTemplateUsingPUT_3'),
          rem: '修改邮件模板',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/userDomainProductAuthList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userDomainProductAuthListUsingGET_3'),
          rem: '获取用户域授权的产品列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/userDomainUserList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userDomainUserListUsingGET_1'),
          rem: '查询用户域中注册的用户列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/userInfo',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userInfoUsingGET_5'),
          rem: '查询用户信息',
          // 版本号
          ver: '',
        }
      ]
      this.noteList=[
        {
          place: '/enterpriseapi/addEntSmsSign',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsSignUsingPOST_3'),
          rem: '添加企业短信签名',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/addEntSmsTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsTemplateUsingPOST_3'),
          rem: '添加企业短信模板',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEntSmsAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsAccountUsingDELETE_3'),
          rem: '删除企业短信账号',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEntSmsSign',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsSignUsingDELETE_3'),
          rem: '删除企业短信签名',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/deleteEntSmsTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsTemplateUsingDELETE_3'),
          rem: '删除企业短信模板',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEntSmsAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsAccountUsingPUT_3'),
          rem: '启用停用企业短信账号',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEntSmsSign',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsSignUsingPUT_3'),
          rem: '启用停用企业短信签名',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/enabledEntSmsTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsTemplateUsingPUT_3'),
          rem: '启用停用企业短信模板',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entSmsAccountList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsAccountListUsingGET_3'),
          rem: '企业短信账号列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entSmsSignList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsSignListUsingGET_3'),
          rem: '企业短信签名列表',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entSmsSignUserDomainAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsSignUserDomainAuthUsingPOST_3'),
          rem: '企业短信签名的用户域授权',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/entSmsTemplateList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsTemplateListUsingGET_3'),
          rem: '企业短信模板列表',
          // 版本号
          ver: '',
        },
        {
          place: 'enterpriseapi/entSmsTemplateUserDomainAuth',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsTemplateUserDomainAuthUsingPOST_3'),
          rem: '企业短信模板的用户域授权',
          // 版本号
          ver: '',
        },
        {
          place: '/enterpriseapi/setEntSmsAccount',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/setEntSmsAccountUsingPUT_3'),
          rem: '修改企业短信账号',
          // 版本号
          ver: '',
        },
      ]
      this.messageList=[
        {
          place: '/{version}/openapi/queue/create',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createQueueUsingPOST'),
          rem: '创建队列',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/queue/delete',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/deleteQueueUsingDELETE'),
          rem: '删除队列',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/queue/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/queueDetailUsingGET'),
          rem: '队列详情查询',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/queue/list',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/listQueuesUsingPOST'),
          rem: '队列列表',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/create',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createSubscribeUsingPOST'),
          rem: '创建产品级/设备级订阅',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/delete',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/deleteSubscribeUsingDELETE'),
          rem: '删除订阅',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/subscribeDetailUsingGET'),
          rem: '查看订阅详情',
          // 版本号
          ver: '',
        }, {
          place: '/{version}/openapi/subscribe/enduser',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST'),
          rem: '创建终端用户订阅',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/enterprise',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST'),
          rem: '创建企业用户订阅',
          // 版本号
          ver: '',
          commit: '子账号不支持'
        },
        {
         place: '/{version}/openapi/subscribe/saas',
         link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createSaasSubscribeUsingPOST'),
         rem: '创建SaaS用户订阅',
         // 版本号
         ver: '',
         commit: '仅支持SaaS子账户'
        },
        {
          place: '/{version}/openapi/subscribe/list',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/listSubscriptionsUsingPOST'),
          rem: '订阅列表查询',
          // 版本号
          ver: '',
        },
        {
          place: '/{version}/openapi/subscribe/start',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/startSubscribeUsingPOST'),
          rem: '启动订阅',
          // 版本号
          ver: '',
        }, {
          place: '/{version}/openapi/subscribe/stop',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/stopSubscribeUsingPOST'),
          rem: '停止订阅',
          // 版本号
          ver: '',
        }, {
          place: '/{version}/openapi/subscribe/update',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/updateSubscribeUsingPOST'),
          rem: '修改订阅',
          // 版本号
          ver: '',
        }
      ]
      this.productList=[
        {
          place: '/r1/openapi/enterpriseapi/deleteSnList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/deleteSnListUsingDELETE'),
          rem: '批量删除SN与设备的拓扑关系',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/enterpriseapi/findDkList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/findDkListUsingPOST'),
          // 版本号
          ver: '',
          rem: '根据 PK与SN列表查询对应的设备列表',
        },
        {
          place: '/r1/openapi/enterpriseapi/findSnList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/findSnListUsingPOST'),
          rem: '根据设备列表查询对应的 sn 列表',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/enterpriseapi/generateSnList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/SN%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86/generateSnListUsingPOST'),
          rem: '生成SN数据',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/产品管理/productDetailUsingGET'),
          rem: '查询产品详情',
          // 版本号
          ver: '',
          commit: '废弃,后续版本会删除'
        },
        {
          place: '/r2/openapi/product/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/产品管理/productDetailUsingGET_1'),
          rem: '查询产品详情',
          // 版本号
          ver: '',

         },
        {
          place: '/r1/openapi/product/edit',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86/editProductUsingPUT'),
          rem: '产品基础信息修改',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/items',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86/productItemsUsingGET'),
          rem: '产品品类字典表查询',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/publish',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86/publishUsingPOST'),
          rem: '产品发布',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/project/{projectId}/product/overview',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86/overviewProductsUsingGET'),
          rem: '查询产品列表',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/getAbilityFormatJsonTemplate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%89%A9%E6%A8%A1%E5%9E%8B/getAbilityFormatJsonTemplateUsingGET'),
          rem: '获取设备发送物模型数据模板',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/export/tslFile',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%89%A9%E6%A8%A1%E5%9E%8B/getProductTslFileUsingGET'),
          rem: '物模型文件导出',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/tslFile/copyTsl',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%89%A9%E6%A8%A1%E5%9E%8B/copyTslToProductDraftUsingGET'),
          rem: '克隆物模型到目标产品',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/product/gateway/getGatewayInfoByChild',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BD%91%E5%85%B3%E5%AD%90%E8%AE%BE%E5%A4%87%E7%BB%91%E5%AE%9A%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86/getGatewayProductByChildUsingGET'),
          rem: '根据子设备查询所属网关的信息',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/gateway/subList',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BD%91%E5%85%B3%E5%AD%90%E8%AE%BE%E5%A4%87%E7%BB%91%E5%AE%9A%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86/subListUsingGET'),
          rem: '查询网关设备关联的子设备',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/data/history',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceDataHistoryUsingGET'),
          rem: '设备上下行历史数据查询',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceDetailUsingGET'),
          rem: '设备详情查询',
          // 版本号
          ver: '',
          commit: '废弃,后续版本会删除'
        },
        {
        place: '/r2/openapi/device/detail',
        link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceDetailUsingGET_1'),
        rem: '设备详情查询',
        // 版本号
        ver: '',
        },
        {
          place: '/r1/openapi/device/edit',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/editDeviceInfoUsingPUT'),
          rem: '设备修改',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/eventdata/history',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceEventDataHistoryUsingGET'),
          rem: '设备事件日志查询',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/getlocation',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/getLocationUsingGET'),
          rem: '设备最新定位数据查询',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/device/resource',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceResourceUsingGET'),
          rem: '设备资源信息查询',
          // 版本号
          ver: '',
          commit: '废弃,后续版本会删除'
        },
        {
         place: '/r2/openapi/device/resource',
         link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceResourceUsingGET_1'),
         rem: '设备资源信息查询',
         // 版本号
         ver: '',
        },
        {
          place: '/r1/openapi/device/verify',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/verifiedUsingPOST'),
          rem: '设备二次认证',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/product/device/batchcreate',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/addDeviceListUsingPOST'),
          rem: '批量添加设备',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/product/device/create',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/addDeviceUsingPOST'),
          rem: '添加设备',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/product/device/overview',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/deviceListUsingGET'),
          rem: '查询产品下设备列表',
          // 版本号
          ver: '',
        }, {
          place: '/r2/openapi/device/batchSendData',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/batchSendDataUsingPOST'),
          rem: '批量发送设备下行数据',
          // 版本号
          ver: '',
           commit: '废弃'
        }, {
          place: '/r2/openapi/device/sendData',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86/sendDataUsingPOST_1'),
          rem: '设备发送下行数据',
          // 版本号
          ver: '',
           commit: '废弃'
        },
        {
        place: '/r3/openapi/dm/readData',
        link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/设备管理/readDataUsingPOST'),
        rem: '设备读取物模型属性数据',
        // 版本号
        ver: '',
        },
        {
          place: '/r3/openapi/dm/writeData',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/设备管理/writeDataUsingPOST'),
          rem: '设备发送下行物模型数据',
          // 版本号
          ver: '',
        },
        {
          place: '/r3/openapi/raw/sendData',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/设备管理/sendDataUsingPOST_2'),
          rem: '设备发送下行透传数据',
          // 版本号
          ver: '',
        },
        {
          place: '/r1/openapi/project/{projectId}/detail',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/projectDetailUsingGET'),
          rem: '项目详情查询',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/project/{projectId}/edit',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/editProjectUsingPUT'),
          rem: '项目信息修改',
          // 版本号
          ver: '',
        }, {
          place: '/r1/openapi/project/overview',
          link: this.toUrlnew('/swagger-ui.html?urls.primaryName=%E4%BA%A7%E5%93%81%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/overviewProjectsUsingGET'),
          rem: '项目列表查询',
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
