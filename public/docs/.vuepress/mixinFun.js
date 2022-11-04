export default {
  data(){
    return {
      isEu: false,
      hosturl:'',
      window:{
        location:{
          host:''
        }
      },
      // 协议显示相关 true（国内）  false（海外）
      agreementStatus: true
    }
  },

  methods:{
    getUrl(params, lang = 'zh'){
      let hosturl = ''
      switch (this.window.location.host) {
        case 'iot-cloud-docs.quectelcn.com':
          hosturl = 'https://iot.quectelcn.com'
          break;
        case 'iot-cloud-docs.quectel.com':
          hosturl = 'https://iot.quectelcn.com'
          break;
        case 'ioteu-cloud-docs.quectel.com':
          hosturl = 'https://iot.quecteleu.com'
          break;
        case 'iot-docs.quecteleu.com':
          hosturl = 'https://iot.quecteleu.com';
          break;
        case 'iot-docs.quectelus.com':
          hosturl = 'https://iot.quectelus.com';
          break;
        case 'uat-iot-cloud-docs.quectelcn.com':
          hosturl = 'https://uat-iot.quectelcn.com';
          break;
        case 'fat2-iot-doc-quectelcn.com':
          hosturl = 'http://fat2-iot.quectelcn.com'
          break;
        case 'fat2-doc-web.quectel.com':
          hosturl = 'http://fat2-iot.quectelcn.com'
          break;
        case 'fatc-iot-doc.quectelcn.com':
          hosturl = 'http://fatc-iot.quectelcn.com'
          break;
        case 'fatb-doc-web.quectel.com':
          hosturl = 'http://fatb-quectel.com'
          break;
        case 'fatg-iot-docs.quecteleu.com':
          hosturl = 'http://fatg-iot.quecteleu.com'
          break;
        case 'fatg-doc-web.quectel.com':
          hosturl = 'http://fatg-iot.quecteleu.com'
          break;
        default:
          hosturl = 'http://fat2-iot.quectelcn.com'
          break;
      }
      return hosturl + '/download' + '?' + params + `&languagemh=${lang}`
    },
    toDevelopCenter(params, lang = 'zh'){
      let hosturl = ''
      switch (this.window.location.host) {
        case 'iot-cloud-docs.quectelcn.com':
          hosturl = 'https://iot.quectelcn.com';
          break;
        case 'iot-cloud-docs.quectel.com':
          hosturl = 'https://iot.quectelcn.com';
          break;
        case 'ioteu-cloud-docs.quectel.com':
          hosturl = 'https://iot.quecteleu.com';
          break;
        case 'iot-docs.quecteleu.com':
          hosturl = 'https://iot.quecteleu.com';
          break;
        case 'iot-docs.quectelus.com':
          hosturl = 'https://iot.quectelus.com';
          break;
        case 'uat-iot-cloud-docs.quectelcn.com':
          hosturl = 'https://uat-iot.quectelcn.com';
          break;
        case 'fat2-iot-doc-quectelcn.com':
          hosturl = 'http://fat2-iot.quectelcn.com';
          break;
        case 'fat2-doc-web.quectel.com':
          hosturl = 'http://fat2-iot.quectelcn.com';
          break;
          case 'fatc-iot-doc.quectelcn.com':
          hosturl = 'http://fatc-iot.quectelcn.com'
          break;
        case 'fatb-doc-web.quectel.com':
          hosturl = 'http://fatb-quectel.com';
          break;
        case 'fatg-iot-docs.quecteleu.com':
          hosturl = 'http://fatg-iot.quecteleu.com';
          break;
        case 'fatg-doc-web.quectel.com':
          hosturl = 'http://fatg-iot.quecteleu.com';
          break;
        default:
          hosturl = 'https://iot.quectelcn.com';
          break;
      }
      return params ? hosturl + '/' + params + `?languagemh=${lang}` : hosturl + `?languagemh=${lang}`
    },
    toCloudOTA(params, lang = 'zh'){
      let hosturl = ''
      switch (this.window.location.host) {
        case 'iot-cloud-docs.quectelcn.com':
          hosturl = 'https://cloudota.quectelcn.com';
          break;
        case 'iot-cloud-docs.quectel.com':
          hosturl = 'https://cloudota.quectelcn.com';
          break;
        case 'ioteu-cloud-docs.quectel.com':
          hosturl = 'https://cloudota.quectelcn.com';
          break;
        case 'iot-docs.quecteleu.com':
          hosturl = 'https://cloudota.quectelcn.com';
          break;
        case 'fat2-iot-doc-quectelcn.com':
          hosturl = 'http://fat2-cloudota.quectelcn.com';
          break;
        case 'fat2-doc-web.quectel.com':
          hosturl = 'http://fat2-cloudota.quectelcn.com';
          break;
        case 'fatc-iot-doc.quectelcn.com':
          hosturl= 'http://fatc-iot.quectelcn.com'
          break;
        case 'fatb-doc-web.quectel.com':
          hosturl = 'http://192.168.25.149:8881';
          break;
        case 'fatg-iot-docs.quecteleu.com':
          hosturl = 'http://fatg-cloudota.quecteleu.com';
          break;
        case 'fatg-doc-web.quectel.com':
          hosturl = 'http://fatg-cloudota.quecteleu.com';
          break;
        default:
          hosturl = 'https://cloudota.quectelcn.com';
          break;
      }
      return  hosturl + '/' + params + `?languagemh=${lang}`
    },
    toAiot(lang = 'zh'){
      let hosturl = ''
      switch (this.window.location.host) {
        case 'iot-cloud-docs.quectelcn.com':
          hosturl = 'https://aiot.quectel.com';
          break;
        case 'iot-cloud-docs.quectel.com':
          hosturl = 'https://aiot.quectel.com';
          break;
        case 'ioteu-cloud-docs.quectel.com':
          hosturl = 'https://aiot.quectel.com';
          break;
        case 'iot-docs.quecteleu.com':
          hosturl = 'https://aiot.quectel.com';
          break;
        case 'uat-iot-cloud-docs.quectelcn.com':
          hosturl = 'https://uat-aiot.quectel.com';
          break;
        case 'fat2-iot-doc-quectelcn.com':
          hosturl = 'http://fat2-web-iot.quectel.com';
          break;
        case 'fat2-doc-web.quectel.com':
          hosturl = 'http://fat2-web-iot.quectel.com';
          break;
        case 'fatc-iot-doc.quectelcn.com':
          hosturl = 'http://fatc-iot.quectelcn.com'
          break;
        case 'fatb-doc-web.quectel.com':
          hosturl = 'http://fatb-web.quectel.com';
          break;
        case 'fatg-iot-docs.quecteleu.com':
          hosturl = 'https://aiot.quectel.com';
          break;
        case 'fatg-doc-web.quectel.com':
          hosturl = 'https://aiot.quectel.com';
          break;
        default:
          hosturl = 'https://aiot.quectel.com';
          break;
      }
      return hosturl + `?languagemh=${lang}`
    },
    getCurHost() {
      // let EuArr = ['ioteu-cloud-docs.quectel.com', 'iot-docs.quecteleu.com', 'iot-docs.quectelus.com', 'fatg-iot-docs.quecteleu.com', 'fatg-doc-web.quectel.com']
      switch (this.window.location.host) {
        case 'ioteu-cloud-docs.quectel.com':
          this.isEu = true
          break
        case 'iot-docs.quecteleu.com':
          this.isEu = true
          break
        case 'iot-docs.quectelus.com':
              this.isEu = true
              break
        case 'fatg-iot-docs.quecteleu.com':
          this.isEu = true
          break
        case 'fatg-doc-web.quectel.com':
          this.isEu = true
          break
        default:
          // this.isEu = true
          break
      }
    },
    toUrlnew(params){
      let hosturl = ''
      switch (this.window.location.host) {
        case 'iot-cloud-docs.quectelcn.com':
          hosturl = 'https://iot-api.quectelcn.com';
          break;
        case 'iot-cloud-docs.quectel.com':
          hosturl = 'https://iot-api.quectelcn.com';
          break;
        case 'ioteu-cloud-docs.quectel.com':
          hosturl = 'https://iot-api.quecteleu.com/';
          break;
        case 'iot-docs.quecteleu.com':
          hosturl = 'https://iot-api.quecteleu.com/';
          break;
        case 'uat-iot-cloud-docs.quectelcn.com':
          hosturl = 'https://iot-api.quectelcn.com';
          break;
        case 'fat2-iot-doc-quectelcn.com':
          hosturl = 'http://fat2-api.quectelcn.com';
          break;
        case 'fat2-doc-web.quectel.com':
          hosturl = 'http://fat2-api.quectelcn.com';
          break;
        case 'fatc-iot-doc.quectelcn.com':
          hosturl = 'http://fatc-iot.quectelcn.com'
          break;
        case 'fatb-doc-web.quectel.com':
          hosturl = 'http://fatb-gateway.quectel.com';
          break;
        case 'fatg-iot-docs.quecteleu.com':
          hosturl = 'http://fatg-iot-api.quecteleu.com';
          break;
        case 'fatg-doc-web.quectel.com':
          hosturl = 'http://fatg-iot-api.quecteleu.com';
          break;
        default:
          hosturl = 'https://iot-api.quecteleu.com';
          break;
      }
      return hosturl + params
    },

    // 判断是否为海外环境 国内true 海外false
    getLocalCNorEN() {
      let str = ['fatg-iot-docs.quecteleu.com', 'fatg-doc-web.quectel.com', 'ioteu-cloud-docs.quectel.com', 'iot-docs.quecteleu.com', 'iot-docs.quectelus.com']
      if (str.includes(this.window.location.host)) {
          return false
        }

      return true
    }
  }
}
