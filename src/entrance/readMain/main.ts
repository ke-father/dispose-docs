import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/index.css'
// 导入路由
import router from '@/router'
// 导入vuex
import store from '@/store'

// 导入v-md-editor
import VMdPreview from '@/plugins/VMdPreview'

// 创建plugins插件列表
const createPlugins = [VMdPreview]

const app = createApp(App)

// 安装路由
app.use(router)
// 安装vuex
app.use(store)

createPlugins.map((plugin) => {
  app.use(plugin)
})

app.mount('#app')
