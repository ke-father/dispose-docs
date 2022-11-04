<template>
  <div>
    <img
      v-for="(data, index) of imgDatas"
      :key="index"
      style="margin-top: 10px"
      :style="{ width: data.size }"
      :src="data.url"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    imgDatas: {
      required: true
    }
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
div {
  width: 100%;
  text-align: center;
}

img {
  width: 30%;
  margin: 0 auto;
}
</style>