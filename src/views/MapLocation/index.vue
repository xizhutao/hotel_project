<template>
  <div class="containerWrapper">
    <van-nav-bar
      fixed
      title="地图找房"
      left-arrow
      @click-left="onClickLeft"
      z-index="9999"
    />
    <!-- 地图容器 -->
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
    // 跳转上一步
    onClickLeft () {
      this.$router.back()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {},
  mounted () {
    // 获取地图
    const myCity = new window.BMapGL.LocalCity()// 获取当前电脑所在的城市
    myCity.get(function (result) {
      console.log(result)//
      const map = new window.BMapGL.Map('container')
      const point = new window.BMapGL.Point(result.center.lng, result.center.lat)// 绘制地图
      map.centerAndZoom(point, 15)// 根据某城市的中心点绘制图 15是缩放级别
    })
  }
}
</script>

<style scoped lang='less'>
#container {
  height: 100%;
}
.containerWrapper {
  height: 100%;
}
</style>
