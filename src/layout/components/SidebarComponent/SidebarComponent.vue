<template>
  <div class="sidebarRoot">
    <h1>文档中心</h1>

    <SidebarItem
      v-for="(item, index) in menuList"
      :key="'menuItem' + index"
      :dataItem="item"
    ></SidebarItem>
  </div>
</template>

<script setup lang="ts">
import menuObject from '~/docs/.vuepress/menu.js'
import { ref } from 'vue'
import SidebarItemComponent from './SidebarItemComponent.vue'

const SidebarItem = ref(SidebarItemComponent)

const menuList: object[] = menuObject.locales.zh.sidebar

console.log(menuList)

console.log(menuObject)
</script>

<style lang="scss" scoped></style>
