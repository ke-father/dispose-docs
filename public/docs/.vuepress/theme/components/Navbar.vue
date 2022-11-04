<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <!-- <RouterLink :to="$localePath" class="home-link"> -->
    <a class="home-link" target="_blank" :href="toAiot()">
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span
      >
    </a>
    <!-- </RouterLink> -->

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <div
        v-if="yuuConfig.extraOptions && yuuConfig.extraOptions.before"
        class="user-options-before"
      >
        <component
          :is="yuuConfig.extraOptions.before"
          @hook:mounted="handleLinksWrapWidth()"
        />
      </div>
      <user-settings />
      <div
        v-if="yuuConfig.extraOptions && yuuConfig.extraOptions.after"
        class="user-options-after"
      >
        <component
          :is="yuuConfig.extraOptions.after"
          @hook:mounted="handleLinksWrapWidth()"
        />
      </div>
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox
        v-else-if="
          $site.themeConfig.search !== false &&
          $page.frontmatter.search !== false
        "
      />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import UserSettings from '@theme/components/settings/UserSettings.vue'

export default {
  name: 'Navbar',

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox,
    UserSettings,
  },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },

    yuuConfig () {
      return this.$site.themeConfig.yuu
    },
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        // this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
        //   - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)

        const ref = this.$refs[this.yuuConfig.logo ? 'yuuLogo' : 'siteName']
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING - ((ref && ref.offsetWidth) || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  methods:{
    toAiot(){
      let lang = this.$lang === 'zh-CN' ? 'zh' : 'en'
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
        case 'iot-docs.quectelus.com': 
          hosturl = 'https://aiot.quectel.com';
          break;
        case 'uat-iot-cloud-docs.quectelcn.com': 
          hosturl = 'https://aiot.quectel.com';
          break;
        case 'fat2-iot-doc-quectelcn.com':
          hosturl = 'http://fat2-web-iot.quectel.com';
          break;
        case 'fat2-doc-web.quectel.com':
          hosturl = 'http://fat2-web-iot.quectel.com';
          break;
          case 'fatc-iot-doc.quectelcn.com':
          hosturl = 'http://fatc-web-iot.quectelcn.com'
          break;
        case 'fatb-doc-web.quectel.com':
          hosturl = 'http://fatb-web.quectel.com';
          break;
        case 'fatg-iot-docs.quecteleu.com':
          hosturl = 'http://fatb-web.quectel.com';
          break;
        case 'fatg-doc-web.quectel.com':
          hosturl = 'http://fatb-web.quectel.com';
          break;
        default:
          hosturl = 'http://fatb-web.quectel.com';
          break;
      }
      return hosturl + `?languagemh=${lang}`
    },
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 10px;
$navbar-horizontal-padding = 1.5rem;
$navbar-horizontal-padding1 = 0; //0610

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;

  a, span, img {
    display: inline-block;
  }

  .logo {
    height: 20px;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    left: 20rem;
    position: absolute;
    top: 20px;
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: $textColor;
    position: relative;
    display: none;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    background-color: white;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 1.5rem;
      right: $navbar-horizontal-padding1; //0610
    }

    .site-name {
      width: calc(100vw - 9.4rem);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

    //0610
   .search-box {
      padding: 0 1.5rem 0 2rem;
    }

  .logo{
     left:23rem!important;
  }
}

@media (max-width: $MQFullNarrow) {
   .navbar {
     .logo{
       left: 1.5rem;
     }
   }
}
</style>
