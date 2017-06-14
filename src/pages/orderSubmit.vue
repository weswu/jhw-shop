<template>
  <div class="orderSubmit">
    <mt-header title="订单提交">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>
    <ul class="pro-list">
      <li>
        <img v-lazy="pro.pic" class="left">
        <div class="info left">
          {{ pro.name }}<br>
          <span class="price">￥{{ pro.price }}</span>
          <p>
            <span class="desc">{{ pro.desc }}</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="form">
      <mt-field placeholder="姓名" v-model="name"></mt-field>
      <mt-field placeholder="手机" v-model="phone"></mt-field>
      <mt-field placeholder="安装地址" v-model="address"></mt-field>
      <mt-button type="primary" size="large" @click="submit">立即支付</mt-button>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      phone: '',
      address: '',
      pro: {name: '安全门锁', desc: '安排上门安装', price: '199',type:'2', pic: 'https://v3.modao.cc/uploads3/images/1024/10245491/raw_1497339509.png'}
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
      this.$router.back()
    }
  }
}
</script>
<style>

.orderSubmit .pro-list li{border-bottom:1px solid #eee;overflow:hidden;padding: 0.7rem 0.6rem;}
.orderSubmit .pro-list img{width:20%}
.orderSubmit .pro-list .info{width:80%;line-height:1rem;color:#444;padding:0 .5rem 0 .5rem}
.orderSubmit .pro-list .desc{font-size:.6rem;color: #8bc34a;}
.form{padding:.7rem}
.form .mint-field{border:1px solid #ccc;margin-bottom:1rem}
.form .mint-cell{min-height:40px}
.form .mint-cell-wrapper{background-image:none!important;background:0 0;border:none}

</style>
