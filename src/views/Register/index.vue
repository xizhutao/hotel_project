<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },

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
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern:
              /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
            message: '密码格式不正确',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
import { userRegister } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 发起用户注册请求
    async onSubmit (values) {
      const res = await userRegister(values)
      // 将请求回来的token值存到本地
      const { body } = res.data
      try {
        if (body) {
          this.timer = setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 返回按钮
    goBack () {
      this.$router.push('/login')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {},
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang='less'>
</style>
