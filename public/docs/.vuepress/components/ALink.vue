<template>
  <div>
    <a data-fancybox title="img" :href="imgenurl" v-if="isEu"
      ><img :src="imgenurl"
    /></a>
    <a data-fancybox title="img" :href="imgurl" v-else><img :src="imgurl" /></a>
  </div>
</template>

<script>
import mixinFun from '../mixinFun'
export default {
  mixins: [mixinFun],
  props: {
    imgurl: {
      required: true,
    },
    imgenurl: {
      required: true,
    },
  }
}
</script>
<style lang="stylus" scoped></style>
