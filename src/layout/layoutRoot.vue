<template>
  <div class="appRoot">
    <Sidebar></Sidebar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SidebarComponent from './components/SidebarComponent/SidebarComponent.vue'

const Sidebar = ref(SidebarComponent)
</script>

<style scoped></style>
