<template>
  <div class="outer">
    <!-- 上部登录面板 -->
    <div class="top_wrapper">
      <van-image
        width="100%"
        height="191px"
        fit="cover"
        src="http://liufusong.top:8080/img/profile/bg.png"
      />
      <div class="top_pannel">
        <div class="pannel_circle">
          <van-image
            width="90%"
            height="90%"
            fit="cover"
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />
        </div>
        <p class="youke">游客</p>
        <van-button type="primary" to="/login">去登录</van-button>
      </div>
    </div>
    <!-- 中间菜单栏 -->
    <div class="center_menu_wrapper">
      <div class="single_menu_wrapper">
        <div class="single_menu">
          <van-icon name="star" />
          <span>我的收藏</span>
        </div>
        <div class="single_menu">
          <van-icon name="star" />
          <span>我的收藏</span>
        </div>
        <div class="single_menu">
          <van-icon name="star" />
          <span>我的收藏</span>
        </div>
      </div>
      <div class="single_menu_wrapper">
        <div class="single_menu">
          <van-icon name="star" />
          <span>我的收藏</span>
        </div>
        <div class="single_menu">
          <van-icon name="star" />
          <span>我的收藏</span>
        </div>
        <div class="single_menu">
          <van-icon name="star" />
          <span>我的收藏</span>
        </div>
      </div>
    </div>
    <!-- 底部展示图片区 -->
    <van-image
      class="footer_show"
      width="345px"
      height="85px"
      fit="cover"
      src="http://liufusong.top:8080/img/profile/join.png"
    />
  </div>
</template>

<script>
export default {
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
.outer {
  width: 100%;
  // 上部登录面板
  .top_wrapper {
    width: 100%;
    height: 306px;
    position: relative;
    .top_pannel {
      position: absolute;
      top: 140px;
      left: 34px;
      width: 319px;
      height: 165px;
      background-color: white;
      box-shadow: 0 0 10px 3px #ddd;
      text-align: center;
      p {
        font-size: 13px;
        a {
          color: white;
        }
      }
      .van-button--primary {
        width: 72px;
        height: 30px;
        font-size: 13px;
        margin-top: 15px;
        background-color: #21b97a;
      }
      .pannel_circle {
        position: relative;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 10px 3px #ddd;
        width: 70px;
        height: 70px;
        background-color: white;
        border-radius: 100%;
        text-align: center;
        .van-image {
          display: inline-block;
          margin-top: 3px;
        }
      }
    }
  }
  .top_pannel:nth-child(2) p {
    margin-top: -20px;
  }
  // 中间菜单栏
  .center_menu_wrapper {
    width: 375px;
    height: 190px;
    background-color: white;
    .single_menu_wrapper {
      display: flex;
      width: 375px;
      height: 95px;
      .single_menu {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 95px;
        box-sizing: border-box;
        padding: 15px 0;
        .van-icon {
          font-size: 20px;
        }
        span {
          font-size: 13px;
        }
      }
    }
  }
  // 底部
  .footer_show {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
}
</style>
