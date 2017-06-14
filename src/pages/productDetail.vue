<template>
  <div>
    <mt-header title="商品详细">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>
    <div class="banner">
      <img src="https://v3.modao.cc/uploads3/images/1025/10258337/raw_1497363907.png" alt="">
    </div>
    <div class="wrapper">
      <div class="header">
        <span class="left">安全门锁</span><span class="right price">¥199</span>
      </div>
      <p class="clear">手机远程管理,新一代房主的选择</p>
      <img src="https://v3.modao.cc/uploads3/images/1025/10258512/raw_1497364884.png" alt="">
      <img src="https://v3.modao.cc/uploads3/images/1025/10258609/raw_1497365204.png" alt="">
    </div>
    <mt-button type="primary" size="large" class="orderSubmit" @click="submit">立即购买</mt-button>
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
    back () {
      this.$router.back()
    },
    submit () {
      this.$router.push({path: 'orderSubmit'})
    }
  }
}
</script>
<style scoped>
.banner{
  background: url(https://v3.modao.cc/uploads3/images/1025/10258365/raw_1497364001.png) no-repeat
}
.banner img{
  width: 46%;
margin: 0 auto;
padding-top:1rem;
display: flex;
}
.wrapper {
  padding: 1rem;    margin-bottom: 2rem;
}
.wrapper img{
      width: 100%;
}
.wrapper p{
  color: #999;
  font-size: 0.6rem;
  padding: 1rem 0;
}
.price{
      color: #8bc34a;
}
.orderSubmit{
  position: fixed;
bottom: 0;
border-radius: 0;
}
</style>
