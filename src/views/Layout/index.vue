<template>
  <div>
    <!-- 二级路由放置点 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar route fixed>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/findhouse" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/housenews" icon="friends-o"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: 0
    }
  },
  methods: {

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
