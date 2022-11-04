<template>
  <ul v-if="items.length" class="sidebar-links">
    <li v-for="(item, i) in items" :key="i">
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="computedIsShowGroup(i, item)"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />
      <SidebarLink v-else :sidebar-depth="sidebarDepth" :item="item" />
    </li>
  </ul>
</template>

<script>
import SidebarGroup from '@theme/components/SidebarGroup.vue'
import SidebarLink from '@theme/components/SidebarLink.vue'
import { isActive } from '../util'

export default {
  name: 'SidebarLinks',

  components: { SidebarGroup, SidebarLink },

  props: [
    'items',
    'depth',  // depth of current sidebar links
    'sidebarDepth', // depth of headers to be extracted
    'initialOpenGroupIndex'
  ],

  data () {
    return {
      openGroupIndex: this.initialOpenGroupIndex || 0,
      status: false
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },

  created () {
    this.refreshIndex()
  },

  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive (page) {
      return isActive(this.$route, page.regularPath)
    },

    // 计算是否展开组
    computedIsShowGroup (index, item) {
      // 循环遍历子项
      const childMap = (list, path) => {
        let status = false

        if (list.type === 'group') {
          list?.children.map(item => {
            childMap(item, path)
          })
        } else {
          status = list.path === path
        }

        if (status) {
          this.status = true
        }
      }

      // 获取当前路由
      childMap(item, this.$route.path)

      return !this.status ? this.status : (index === this.openGroupIndex)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (descendantIsActive(route, item)) {
      return i
    }
  }
  return -1
}

function descendantIsActive (route, item) {
  if (item.type === 'group') {
    const childIsActive = item.path && isActive(route, item.path)
    const grandChildIsActive = item.children.some(child => {
      if (child.type === 'group') {
        return descendantIsActive(route, child)
      } else {
        return child.type === 'page' && isActive(route, child.path)
      }
    })

    return childIsActive || grandChildIsActive
  }
  return false
}
</script>
