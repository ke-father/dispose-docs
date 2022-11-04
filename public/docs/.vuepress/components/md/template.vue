<template>
  <div>
    <div v-for="(level1item, index) of dataList" :key="index">
      <h2 v-if="level1item.level1Title">
        {{ level1item.level1Title }}
      </h2>
      <div v-if="level1item.level1Text" class="level-text">
        {{ level1item.level1Text }}
      </div>
      <img
        class="level1-img"
        :src="level1item.level1Img"
        v-if="level1item.level1Img"
      />
      <template
        v-if="level1item.level2List && level1item.level2List.length > 0"
      >
        <div
          v-for="(level2item, index2) of level1item.level2List"
          :key="index2"
        >
          <h3 v-if="level2item.level2Title">{{ level2item.level2Title }}</h3>
          <div v-if="level2item.level2Text" class="level-text">
            {{ level2item.level2Text }}
          </div>
        </div></template
      >
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    dataList: {
      required: true
    }
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.level-text {
  font-size: 14px;
  color: #666;
}

.level1-img {
  width: 100%;
}
</style>
