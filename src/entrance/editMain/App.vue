<template>
  <v-md-editor v-model="text" height="100%" @save="handleSave"></v-md-editor>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import md from '~/docs/appDevelop/AndroidSDK.md'

let md1 = md

const reg = new RegExp('<a(.*?)</a>', 'g')
const pics = md1.match(reg)

pics?.map((item: any) => {
  let filter1 = item.replace('href="/', 'href="../docs/.vuepress/public/')

  let filter2 = filter1.replace('](/', '](/../docs/.vuepress/public/')

  // console.log(item, filter2)

  md1 = md1.replace(item, filter2)
  // console.log(md1)
})

const handleSave = (text: string) => {
  console.log(text)
}

// console.log(md1)

let text = ref(md1)
</script>

<style lang="less"></style>
