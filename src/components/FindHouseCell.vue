<template>
  <div>
    <div class="wrapper">
      <!-- <van-image
        block
        width="106"
        height="80"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      /> -->
      <img :src="'http://liufusong.top:8080' + item.houseImg" alt="" />
      <div class="right">
        <h3 class="title">{{ item.title }}</h3>
        <p class="title1">
          <span>{{ item.desc }}</span>
        </p>
        <p class="title2">{{ item.tags[0] }}</p>
        <p class="title3"><span>1111</span>元/月</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
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
.wrapper {
  // display: flex;
  width: 345px;
  height: 120px;
  border-bottom: 1px solid #e5e5e5;
  margin-left: 15px;
  // justify-content: space-between;a
  img {
    display: inline-block;
    width: 106px;
    height: 80px;
    margin-top: 18px;
    vertical-align: top;
  }
  .right {
    width: 226px;
    display: inline-block;
    padding: 18px 0 0;
    margin-left: 12px;
    .title {
      font-size: 15px;
      color: #394043;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .title1 {
      font-size: 12px;
      color: #afb2b3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
    .title2 {
      font-size: 12px;
      background-color: #e1f5f8;
      color: #39becd;
      border-radius: 3px;
      width: 46px;
      height: 20px;
      text-align: center;
      line-height: 20px;
    }
    .title3 {
      font-size: 12px;
      color: #fa5741;
      span {
        font-size: 16px;
      }
    }
  }
}
</style>
