import mixinFun from "./mixinFun"

export default ({
  Vue, // VuePress 正在使用的 Vue 構造函數
  options, // 附加到根實例的一些選項
  router, // 當前應用的路由實例
  siteData, // 站點元數據
}) => {
  Vue.mixin({
    ...mixinFun,
    mounted() {
      this.window = window
      // 根据域名判断是海外还是国内地址
      this.getCurHost()
      let nav = document.querySelector('.external')
      if (nav) {
        switch (window.location.host) {
          case 'iot-cloud-docs.quectelcn.com':
            nav.href = 'https://iot.quectelcn.com/project/list'
            break;
          case 'iot-cloud-docs.quectel.com':
            nav.href = 'https://iot.quectelcn.com/project/list'
            break;
          case 'ioteu-cloud-docs.quectel.com':
            nav.href = 'https://iot.quecteleu.com/project/list'
            if(siteData.themeConfig.locales["/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/"].sidebar[3].children.splice(4,1)
            }
            if(siteData.themeConfig.locales["/en/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/en/"].sidebar[3].children.splice(4,1)
            }
            break;
          case 'iot-docs.quecteleu.com':
            nav.href = 'https://iot.quecteleu.com/project/list'
            if(siteData.themeConfig.locales["/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/"].sidebar[3].children.splice(4,1)
            }
            if(siteData.themeConfig.locales["/en/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/en/"].sidebar[3].children.splice(4,1)
            }
            break;
          case 'iot-docs.quectelus.com':
            nav.href = 'https://iot.quectelus.com/project/list'
            if(siteData.themeConfig.locales["/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/"].sidebar[3].children.splice(4,1)
            }
            if(siteData.themeConfig.locales["/en/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/en/"].sidebar[3].children.splice(4,1)
            }
            break;
          case 'uat-iot-cloud-docs.quectelcn.com':
            nav.href = 'https://uat-iot.quectelcn.com/project/li\st'
            break;
          case 'fat2-iot-doc-quectelcn.com':
            nav.href = 'http://fat2-iot.quectelcn.com/project/list'
            break;
          case 'fat2-doc-web.quectel.com':
            nav.href = 'http://fat2-iot.quectelcn.com/project/list'
            break;
          case 'fatc-iot-doc.quectelcn.com':
            nav.href = 'http://fatc-iot.quectelcn.com/project/list'
            break;
          case 'fatb-doc-web.quectel.com':
            nav.href = 'http://fatb-quectel.com/project/list'
            break;
          case 'fatg-iot-docs.quecteleu.com':
            nav.href = 'http://fatg-iot.quecteleu.com/project/list'
            if(siteData.themeConfig.locales["/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/"].sidebar[3].children.splice(4,1)
            }
            if(siteData.themeConfig.locales["/en/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/en/"].sidebar[3].children.splice(4,1)
            }
            break;
          case 'fatg-doc-web.quectel.com':
            nav.href = 'http://fatg-iot.quecteleu.com/project/list'
            if(siteData.themeConfig.locales["/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/"].sidebar[3].children.splice(4,1)
            }
            if(siteData.themeConfig.locales["/en/"].sidebar[3].children[4].title === 'NB-IoT'){
              siteData.themeConfig.locales["/en/"].sidebar[3].children.splice(4,1)
            }
            break;
          default:
            nav.href = 'https://iot.quectelcn.com/project/list'
            break;
        }
      }
    }
  })
}
