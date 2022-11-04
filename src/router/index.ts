import { createRouter, createWebHashHistory } from 'vue-router'
// 导入路由类型检查
import { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/layoutRoot.vue'

// 创建路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: layout
  }
]

// 创建路由
const router = createRouter({
  // 插入路由
  routes,
  // 创建hash模式路由
  history: createWebHashHistory()
})

export default router
