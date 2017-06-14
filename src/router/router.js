/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
  // 购物中心
  { path: '/product', component: require('../pages/product') },
  // 个人中心
  { path: '/user', component: require('../pages/user') },
  // 我的订单
  { path: '/myOrder', component: require('../pages/myOrder') },
  // 商品详情
  { path: '/productDetail', component: require('../pages/productDetail') },
  // 订单提交
  { path: '/orderSubmit', component: require('../pages/orderSubmit') },
  // 我的业绩
  { path: '/myAchievement', component: require('../pages/myAchievement') },
  // 我的二维码
  { path: '/myQrcode', component: require('../pages/myQrcode') },
  { path: '*', redirect: '/user' }
  ]
})

export default router
