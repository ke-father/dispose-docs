<template>
  <div>
    <img
      style="margin-top: 10px"
      :style="{ width: imgData.size || '30%' }"
      :src="imgData.url"
    />
    <p>{{ imgData.desc }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    imgData: {
      required: true
    }
  },
  created () {
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