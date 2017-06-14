<template>
  <div>
    <div class="user">
      <div class="user-logo left">
        <img src="https://v3.modao.cc/uploads3/images/1024/10248198/raw_1497342287.png">
      </div>
      <div class="user-info left">
        <p>会员编号：18</p>
        <span>张三</span>
        <mt-badge type="error">合伙人</mt-badge>
      </div>
    </div>
    <mt-cell title="我的订单" to="/myOrder" is-link class="clear">
      <i slot="icon" class="material-icons">assignment</i>
    </mt-cell>
    <mt-cell title="我的业绩" to="/myAchievement" is-link>
      <i slot="icon" class="material-icons">assessment</i>
    </mt-cell>
    <mt-cell title="我的二维码" to="/myQrcode" is-link>
      <i slot="icon" class="material-icons">crop_free</i>
    </mt-cell>

    <div class="toPage center" @click="toPage('product')">
      <div>
        <i class="material-icons">add_shopping_cart</i>
      </div>
      <p>购物中心</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      console.log('获取接口数据')
    },
    toPage(val) {
      this.$router.push({path: val})
    }
  }
}
</script>
<style scoped>
.user{font-size:.7rem;padding:.7rem .5rem;overflow:hidden;border-bottom:1px solid #ddd}
.user-logo{width:2rem;height:2rem;margin-right:.5rem}
.user-logo img{width:100%}
.user-info p{font-size:.5rem;padding:.17rem 0;color:#999}
.user-info .mint-badge{font-size:.5rem}
.material-icons{color:#666;font-size:1rem}
.toPage{position:absolute;position:absolute;bottom:1rem;left:50%;width:3rem;color:#999;font-size:.5rem;margin-left:-1.5rem}
.toPage div{border:.05rem solid #ccc;border-radius:50%;width:2.5rem;height:2.5rem;margin:0 auto}
.toPage i{color:#fff;background-color:#8bc34a;width:2.3rem;height:2.3rem;line-height:2.4rem;font-size:1.3rem;border-radius:50%;text-align:center;margin:.05rem}
.toPage p{padding:.3rem 0}


</style>
