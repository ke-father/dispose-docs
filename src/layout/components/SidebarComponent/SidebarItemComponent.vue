<template>
  <div>
    {{ SidebarItem.title }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  dataItem: Object
})

const SidebarItem = ref(props.dataItem)
</script>

<style scoped></style>
