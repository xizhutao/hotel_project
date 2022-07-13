<template>
  <div>
    <van-index-anchor :index="title.toUpperCase()"></van-index-anchor>
    <van-cell v-for="(item, index) in cityArr" :key="index">
      <template #title>
        <div>
          {{ item.label || "暂无城市" }}
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'anchorCell',
  props: {
    title: {
      type: String,
      required: true
    },
    cityArr: {
      type: Array,
      required: true
    }
  },
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .van-index-anchor {
  color: #b2b2b2 !important;
}
</style>
