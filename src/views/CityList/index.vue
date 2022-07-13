<template>
  <div class="citylist_wrapper">
    <!-- 头部 -->
    <van-nav-bar fixed title="标题" left-arrow @click-left="onClickLeft" />
    <!-- 索引列表 -->
    <van-index-bar highlight-color="#21b97a" :index-list="indexList">
      <anchorCell
        v-for="(value, name, index) in cityListObj"
        :cityArr="value"
        :title="name"
        :key="index"
      />
    </van-index-bar>
  </div>
</template>

<script>
import anchorCell from '@/components/anchorCell.vue'
import { getCityList } from '@/api/citylist'
export default {
  name: 'CityList',
  created () {
    // 发起请求获取城市列表
    this.getcityList()
  },
  data () {
    return {
      indexList: [],
      cityIndex: [],
      cityListObj: {}
    }
  },
  methods: {
    // 路由跳转到找房
    onClickLeft () {
      this.$router.push('/findhouse')
    },
    // 获取城市列表数据
    async getcityList () {
      try {
        const res = await getCityList(1)
        const { body: cities } = res.data
        // 按照首字母进行排序
        const sortByShort = cities.sort((a, b) => {
          return (a.short.charCodeAt(0) - b.short.charCodeAt(0))
        })

        // 将数据处理成首字母相同的城市在一个数组
        sortByShort.forEach((item) => {
          const varis = item.short[0]
          if (this.cityListObj[varis]) {
            this.cityListObj[varis].push(item)
          } else {
            this.cityListObj[varis] = [item]
          }
        })
        // 将首字母相同城市对应的键值存放到数组中
        this.indexList = Object.keys(this.cityListObj)
        // 转大写
        this.indexList = this.indexList.map((item) => {
          return item.toUpperCase()
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { anchorCell }
}
</script>

<style scoped lang='less'>
.citylist_wrapper {
  height: calc(100vh - 46px);
  margin-top: 46px;
}
/deep/ .van-index-anchor--sticky {
  position: unset !important;
}
/deep/ .van-index-bar__index {
  font-size: 15px;
  margin-bottom: 15px;
}

/deep/ .van-index-bar__sidebar {
  top: 56%;
}
</style>
