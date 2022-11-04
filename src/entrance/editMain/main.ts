import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from '@/router'
// 导入vuex
import store from '@/store'

// 导入v-md-editor
import VMdEditor from '@/plugins/VMdEditor'

// 创建plugins插件列表
const createPlugins = [VMdEditor]

const app = createApp(App)

// 安装路由
app.use(router)
// 安装vuex
app.use(store)

createPlugins.map((plugin) => {
  app.use(plugin)
})

app.mount('#app')
