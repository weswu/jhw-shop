import Vue from 'vue'
import App from './App'
import Axios from './utils/diyaxios'
import router from './router/router'
import store from './store'
// 注册为全局组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// Inject Global Css And Themes Css
import './assets/index.scss'
// 开启debug模式
Vue.config.debug = true
// use
Vue.use(MintUI)
Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
