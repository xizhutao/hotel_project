import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vant.js'
import '@/styles/reset.less'
import './index.less'
// 引入全部样式
import 'vant/lib/index.less'
// rem根标签大小
import 'amfe-flexible'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
