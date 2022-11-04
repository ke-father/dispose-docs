/*interface HomePageConfig {
    title: string
    desc: string
    bannerNavs: Array<{
        text: string
        url: string
    }>
    learnPathLabel: string
    learnPaths: Array<{
        icon: string
        title: {
            text: string
            url: string
        }
        subList?: Array<{
            text: string
            url: string
        }>
    }>
}

interface Locales {
    zh: HomePageConfig
    en: HomePageConfig
}*/

const EuHosts = [
  "ioteu-cloud-docs.quectel.com",
  "iot-docs.quecteleu.com",
  "iot-docs.quectelus.com",
  "fatg-iot-docs.quecteleu.com",
  "fatg-doc-web.quectel.com",
];

export const HomePageLocales = (host) => {
  const isEu = EuHosts.includes(host);
  return {
    zh: {
      title: "开发者中心",
      desc: "开发者中心，为客户的多种终端设备提供安全可靠的网络快速接入、数据传输、数据存储、数据管理等完整的交互服务。可通过云端调用API实现海量设备和应用的数据传输，达到控制设备和采集数据的目的。",
      bannerNavs: [
        { url: "/introduction/page-01.html", text: "平台概述" },
        { url: "/introduction/page-02.html", text: "产品优势" },
        { url: "/introduction/page-03.html", text: "名词解析" },
        { url: "/introduction/page-04.html", text: "最新动态" },
      ],
      learnPathLabel: "平台学习路径",
      learnPaths: [
        {
          icon: "/homepage/快速入门.svg",
          title: { text: "快速入门", url: "/quickStart/Overview.html" },
          subList: [
            { text: "概述", url: "/quickStart/Overview.html" },
            { text: "平台注册", url: "/quickStart/register.html" },
            { text: "产品开发", url: "/quickStart/ProductDevelop.html" },
            { text: "App应用开发", url: "/quickStart/App.html" },
            { text: "SaaS应用开发", url: "/quickStart/Saas.html" },
          ],
        },
        {
          icon: "/homepage/设备开发.svg",
          title: { text: "设备开发", url: "/deviceDevelop/preliminaries.html" },
          subList: [
            { text: "准备工作", url: "/deviceDevelop/preliminaries.html" },
            {
              text: "2G/3G/4G/5G",
              url: "/deviceDevelop/cellular/speediness/speediness-01.html",
            },
            {
              text: "WiFi",
              url: "/deviceDevelop/wifi/speediness/speediness-01.html",
            },
            isEu
              ? null
              : {
                  text: "NB-IoT",
                  url: "/deviceDevelop/nb/speediness_ctwing/speediness-01.html",
                },
            { text: "BLE", url: "/deviceDevelop/ble/page-01.html" },
            {
              text: "网关子设备",
              url: "/deviceDevelop/subDevice/page-01.html",
            },
            {
              text: "模组接入",
              url: "/deviceDevelop/ModuleAccess/page-01.html",
            },
          ],
        },
        {
          icon: "/homepage/app应用开发.svg",
          title: { text: "App应用开发", url: "/appDevelop/ready.html" },
          subList: [
            { text: "App数据通信概览", url: "/appDevelop/ready.html" },
            { text: "OpenAPI使用指导", url: "/appDevelop/OpenAPI.html" },
            {
              text: "WebSocket使用指导",
              url: "/appDevelop/websocket/guide.html",
            },
            { text: "Android SDK使用指导", url: "/appDevelop/AndroidSDK.html" },
            { text: "iOS SDK使用指南", url: "/appDevelop/iosSDK.html" },
            {
              text: "设备配网流程说明",
              url: "/appDevelop/networkDescription.html",
            },
            { text: "错误码集合", url: "/appDevelop/errorCode.html" },
          ],
        },
        {
          icon: "/homepage/saas应用开发.svg",
          title: {
            text: "SaaS应用开发",
            url: "/saasDevelop/CommunicatOverview.html",
          },
          subList: [
            {
              text: "SaaS数据通信概述",
              url: "/saasDevelop/CommunicatOverview.html",
            },
            {
              text: "OpenAPI使用指导",
              url: "/saasDevelop/OpenAPI/Overview.html",
            },
            {
              text: "消息订阅使用指导",
              url: "/saasDevelop/subscription/AMQPinfo.html",
            },
            { text: "数据格式", url: "/saasDevelop/DataFormat/overview.html" },
            { text: "错误码集合", url: "/saasDevelop/errorCode.html" },
          ],
        },
        {
          icon: "/homepage/用户指南.svg",
          title: { text: "用户指南", url: "/guide/develop/ProjectManage.html" },
          subList: [
            { text: "产品开发", url: "/guide/develop/ProjectManage.html" },
            { text: "App开发", url: "/guide/app/dev.html" },
            { text: "SaaS开发", url: "/guide/saas/FunctionOpen.html" },
            {
              text: "行业应用",
              url: "/guide/IndustryApplication/Overview.html",
            },
            {
              text: "设备管理",
              url: "/guide/deviceManage/operation/List.html",
            },
            { text: "个人中心", url: "/guide/personalCenter/accout.html" },
          ],
        },
        {
          icon: "/homepage/量产说明.svg",
          title: { text: "量产说明", url: "/massProduct/process.html" },
          subList: [
            { text: "量产流程", url: "/massProduct/process.html" },
            { text: "设备二维码", url: "/massProduct/QRcode.html" },
            {
              text: "License介绍",
              url: "/massProduct/LicenseIntroduction.html",
            },
            { text: "如何购买License", url: "/massProduct/buy.html" },
          ],
        },
        {
          icon: "/homepage/工具.svg",
          title: {
            text: "工具",
            url: "/tool/QthTools-debug/QthTools-MCU_Simulator/summary.html",
          },
          subList: [
            {
              text: "调试工具",
              url: "/tool/QthTools-debug/QthTools-MCU_Simulator/summary.html",
            },
            {
              text: "开发工具",
              url: "/tool/QthTools-develop/QthTools-DTU_Modbus/summary.html",
            },
            {
              text: "生产工具",
              url: "/tool/QthTools-factory/QthTools-SN2IMEI_Binding/summary.html",
            },
          ],
        },
        {
          icon: "/homepage/常见问题.svg",
          title: { text: "常见问题", url: "/problem/page-01.html" },
          subList: [
            { text: "产品使用问题", url: "/problem/page-01.html" },
            { text: "商务咨询问题", url: "/problem/page-02.html" },
            { text: "业务问题", url: "/problem/page-03.html" },
          ],
        },
        {
          icon: "/homepage/联系我们.svg",
          title: { text: "联系我们", url: "/contactUs/" },
          subList: [],
        },
      ],
    },
    en: {
      title: "Developer Center",
      desc: "Developer Center provides a complete communication service of quick connection, data transmission, data storation and data management for multiple terminal devices. You can transmit data between massive devices and applications by calling API on Developer Center, achieving the target of controlling devices and collecting data.",
      bannerNavs: [
        {
          url: "/en/introduction/page-01.html",
          text: "What is Developer Center",
        },
        { url: "/en/introduction/page-02.html", text: "Features" },
        { url: "/en/introduction/page-03.html", text: "Terms" },
        { url: "/en/introduction/page-04.html", text: "Platform Updates" },
      ],
      learnPathLabel: "Learning Path",
      learnPaths: [
        {
          icon: "/homepage/快速入门.svg",
          title: { text: "Quick Start", url: "/en/quickStart/Overview.html" },
          subList: [
            { text: "Overview", url: "/en/quickStart/Overview.html" },
            {
              text: "Registration Guidance",
              url: "/en/quickStart/register.html",
            },
            {
              text: "Product Development",
              url: "/en/quickStart/ProductDevelop.html",
            },
            { text: "Mobile App Development", url: "/en/quickStart/App.html" },
            {
              text: "SaaS Application Development",
              url: "/en/quickStart/Saas.html",
            },
          ],
        },
        {
          icon: "/homepage/设备开发.svg",
          title: {
            text: "Develop Device",
            url: "/en/deviceDevelop/preliminaries.html",
          },
          subList: [
            {
              text: "Preparation",
              url: "/en/deviceDevelop/preliminaries.html",
            },
            {
              text: "2G/3G/4G/5G",
              url: "/en/deviceDevelop/cellular/speediness/speediness-01.html",
            },
            {
              text: "WiFi",
              url: "/en/deviceDevelop/wifi/speediness/speediness-01.html",
            },
            isEu
              ? null
              : {
                  text: "NB-IoT",
                  url: "/en/deviceDevelop/nb/speediness_ctwing/speediness-01.html",
                },
            { text: "BLE", url: "/en/deviceDevelop/ble/page-01.html" },
            {
              text: "Gateway Sub-device",
              url: "/en/deviceDevelop/subDevice/page-01.html",
            },
            {
              text: "QuecThing SDK Porting",
              url: "/en/deviceDevelop/ModuleAccess/page-01.html",
            },
          ],
        },
        {
          icon: "/homepage/app应用开发.svg",
          title: {
            text: "Mobile App Development",
            url: "/en/appDevelop/ready.html",
          },
          subList: [
            {
              text: "Overview of App Data Communication",
              url: "/en/appDevelop/ready.html",
            },
            { text: "OpenAPI User Guide", url: "/en/appDevelop/OpenAPI.html" },
            {
              text: "WebSocket Access Guide",
              url: "/en/appDevelop/websocket/guide.html",
            },
            {
              text: "Android SDK User Guide",
              url: "/en/appDevelop/AndroidSDK.html",
            },
            { text: "iOS SDK User Guide", url: "/en/appDevelop/iosSDK.html" },
            {
              text: "Device Network Provisioning Process",
              url: "/en/appDevelop/networkDescription.html",
            },
            {
              text: "Error Code Summary",
              url: "/en/appDevelop/errorCode.html",
            },
          ],
        },
        {
          icon: "/homepage/saas应用开发.svg",
          title: {
            text: "SaaS Application Development",
            url: "/en/saasDevelop/CommunicatOverview.html",
          },
          subList: [
            {
              text: "SaaS Application Data Communication",
              url: "/en/saasDevelop/CommunicatOverview.html",
            },
            {
              text: "OpenAPI User Guide",
              url: "/en/saasDevelop/OpenAPI/Overview.html",
            },
            {
              text: "Message Subscription Guide",
              url: "/en/saasDevelop/subscription/AMQPinfo.html",
            },
            {
              text: "Data Format",
              url: "/en/saasDevelop/DataFormat/overview.html",
            },
            {
              text: "Error Code Summary",
              url: "/en/saasDevelop/errorCode.html",
            },
          ],
        },
        {
          icon: "/homepage/用户指南.svg",
          title: {
            text: "User Guide",
            url: "/en/guide/develop/ProjectManage.html",
          },
          subList: [
            {
              text: "Develop Product",
              url: "/en/guide/develop/ProjectManage.html",
            },
            { text: "Develop App", url: "/en/guide/app/dev.html" },
            {
              text: "Develop SaaS Application",
              url: "/en/guide/saas/FunctionOpen.html",
            },
            {
              text: "Industry and Services",
              url: "/en/guide/IndustryApplication/Overview.html",
            },
            {
              text: "Device Management",
              url: "/en/guide/deviceManage/operation/List.html",
            },
            {
              text: "Personal Center",
              url: "/en/guide/personalCenter/accout.html",
            },
          ],
        },
        {
          icon: "/homepage/量产说明.svg",
          title: {
            text: "Mass Production",
            url: "/en/massProduct/process.html",
          },
          subList: [
            {
              text: "Mass Production Process",
              url: "/en/massProduct/process.html",
            },
            { text: "Device QR Code", url: "/en/massProduct/QRcode.html" },
            {
              text: "License Overview",
              url: "/en/massProduct/LicenseIntroduction.html",
            },
            {
              text: "How to purchase a license",
              url: "/en/massProduct/buy.html",
            },
          ],
        },
        {
          icon: "/homepage/工具.svg",
          title: {
            text: "Tool",
            url: "/en/tool/QthTools-debug/QthTools-MCU_Simulator/summary.html",
          },
          subList: [
            {
              text: "Debugging Tool",
              url: "/en/tool/QthTools-debug/QthTools-MCU_Simulator/summary.html",
            },
            {
              text: "Development Tool",
              url: "/en/tool/QthTools-develop/QthTools-DTU_Modbus/summary.html",
            },
            {
              text: "Production Tool",
              url: "/en/tool/QthTools-factory/QthTools-SN2IMEI_Binding/summary.html",
            },
          ],
        },
        {
          icon: "/homepage/常见问题.svg",
          title: { text: "FAQ", url: "/en/problem/page-01.html" },
          subList: [
            {
              text: "FAQs About Product Usage",
              url: "/en/problem/page-01.html",
            },
            {
              text: "FAQs About Consultation",
              url: "/en/problem/page-02.html",
            },
            { text: "FAQs About Business", url: "/en/problem/page-03.html" },
          ],
        },
        {
          icon: "/homepage/联系我们.svg",
          title: { text: "Contact Us", url: "/en/contactUs/" },
          subList: [],
        },
      ],
    },
  };
};
