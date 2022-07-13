<template>
  <div>
    <!-- NvaBar -->
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
    <!-- Form -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: '手机格式不正确',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          {
            pattern:
              /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
            message: '密码格式不正确',
          },
        ]"
      />
      <div>
        <van-button block native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="footer_link" @click="toRegister">还没有账号，去注册~</div>
  </div>
</template>
<script>
import { userLogin } from '@/api/user'
export default {
  name: 'login',
  created () {
  },
  data () {
    return {
      username: '13033030173',
      password: 'xizhutao1212..'

    }
  },
  methods: {
    // 返回按钮的路由跳转
    onClickLeft () {
      console.log(this.$router)
      this.$router.back()
    },
    // 发起登录请求
    async onSubmit () {
      const res = await userLogin({ username: this.username, password: this.password })
      console.log('res', res)
      const { body, status } = res.data
      try {
        if (body.token && status === 200) {
          console.log(111)
          localStorage.setItem('loginToken', body.token)
          // 跳转首页
          this.$router.push('/home')
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 跳转注册界面
    toRegister () {
      this.$router.push('/register')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-form {
  padding: 20px 10px 0;
}
.van-field {
  margin: 10px;
  font-size: 17px;
  width: 100%;
  line-height: 60px;
  margin: 0;
  padding: 0;
}
.van-button--default {
  display: block;
  width: 100%;
  height: 50px;
  background-color: #1cb676;
  margin: 0;
  color: white;
}
.footer_link {
  font-size: 14px;
  margin-left: 187px;
  transform: translateX(-40%);
  margin-top: 30px;
}
</style>
