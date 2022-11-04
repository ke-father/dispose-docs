<template>
  <section
      class="sidebar-group"
      :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0,
      },
      `depth-${depth}`,
    ]"
  >
    <RouterLink
        v-if="item.path"
        class="sidebar-heading clickable"
        :class="{
        open,
        active: isActive($route, item.path),
      }"
        :to="item.path"
        @click.native="handleShowStatus"
    >
      <span>{{ item.title }}</span>
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'"/>
    </RouterLink>

    <p
        v-else
        class="sidebar-heading"
        :class="{ open }"
        @click="handleShowStatus"
    >
      <span>{{ item.title }}</span>
      <span v-if="collapsable" class="arrow" :class="showStatus ? 'down' : 'right'"/>
      <!--      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />-->
    </p>

    <DropdownTransition>
      <SidebarLinks
          v-if="showStatus || !collapsable"
          class="sidebar-group-items"
          :items="item.children"
          :sidebar-depth="item.sidebarDepth"
          :initial-open-group-index="item.initialOpenGroupIndex"
          :depth="depth + 1"
      />
      <!--      <SidebarLinks-->
      <!--          v-if="open || !collapsable"-->
      <!--          class="sidebar-group-items"-->
      <!--          :items="item.children"-->
      <!--          :sidebar-depth="item.sidebarDepth"-->
      <!--          :initial-open-group-index="item.initialOpenGroupIndex"-->
      <!--          :depth="depth + 1"-->
      <!--      />-->
    </DropdownTransition>
  </section>
</template>

<script>

import {isActive} from '../util'
import Status from "../util/status";
import DropdownTransition from '@theme/components/DropdownTransition.vue'

export default {
  name: 'SidebarGroup',
  data() {
    return {
      showStatus: false,
    }
  },

  components: {
    DropdownTransition,
  },

  mounted() {
    let instance = Status.getInstance()
    if (instance.status && this.open) {
      this.showStatus = this.open
      instance.change()
    } else {
      this.showStatus = false
    }
  },

  watch: {
    '$route': {
      handler() {
        let instance = Status.getInstance()
        instance.status = true
        if (instance.status && this.open) {
          this.showStatus = this.open
          instance.change()
        } else {
          this.showStatus = false
        }
      }
    }
  },


  props: [
    'item',
    'open',
    'collapsable',
    'depth',
  ],

  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks = require('@theme/components/SidebarLinks.vue').default
  },

  methods: {
    isActive,
    handleShowStatus() {
      if (this.showStatus) {
        this.showStatus = false
      } else {
        this.showStatus = true
      }

      this.$emit('toggle')
    }
  }
}
</script>

<style lang="stylus">
.sidebar-group {
  .sidebar-group {
    padding-left: 0.5em;
  }

  &:not(.collapsable) {
    .sidebar-heading:not(.clickable) {
      cursor: auto;
      color: inherit;
    }
  }

  // refine styles of nested sidebar groups

  &.is-sub-group {
    padding-left: 0;

    & > .sidebar-heading {
      //font-size: 0.95em;
      line-height: 1.4;
      font-weight: normal;
      padding-left: 2rem;

      &:not(.clickable) {
        opacity: 0.5;
      }
    }

    & > .sidebar-group-items {
      padding-left: 1rem;

      & > li > .sidebar-link {
        //font-size: 0.95em;
        border-left: none;
      }
    }
  }

  &.depth-2 {
    & > .sidebar-heading {
      border-left: none;
    }
  }
}

.sidebar-heading {
  color: $textColor;
  transition: color 0.15s ease;
  cursor: pointer;
  font-size: 14px;
  // text-transform uppercase
  padding: 0.75rem 1.5rem 0.75rem 1.25rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  border-left: 0.25rem solid transparent;
  opacity: 1 !important;

  &.open {
    color: inherit;
  }

  &:hover {
    color: inherit;
    background-color: #f6ecec;
  }

  .arrow {
    position: relative;
    top: -0.12em;
    left: 0.5em;
  }

  &.clickable {
    &.active {
      font-weight: 600;
      color: $accentColor;
      border-left-color: $accentColor;
    }

    &:hover {
      color: $accentColor;
    }
  }
}

.sidebar-group-items {
  transition: height 0.1s ease-out;
  //font-size: 0.95em;
  overflow: hidden;
}
</style>
