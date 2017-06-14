<template>
  <div>
    <mt-header title="我的业绩">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>
    <ul class="pro-list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">
        <div class="header">
          <font color="#999999">订单：</font><font color="#101010"><b>1234567890123</b></font>
          <span class="time right">2017-06-06 11:30</span>
        </div>
        <img v-lazy="item.pic" class="left">
        <div class="info left">
          {{ item.name }}<br>
          <span class="price">￥{{ item.price }}</span>
          <p>
            <span class="desc">{{ item.desc }}</span>
            <span class="right" v-html="type(item.type)"></span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      list: [
        {name: '智能门磁', desc: '订单已审核', price: '199', type:'1', pic: 'https://v3.modao.cc/uploads3/images/1024/10244900/raw_1497338872.png'},
        {name: '安全门锁', desc: '安排上门安装', price: '199',type:'2', pic: 'https://v3.modao.cc/uploads3/images/1024/10245491/raw_1497339509.png'}
      ]
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      console.log('获取接口数据')
    },
    loadMore() {
      this.loading = true
      setTimeout(() => {
        //for (let i = 1; i <= 10; i++) {
          //this.list.push({name: '', desc: '', price: '', pic: ''})
        //}
        this.loading = false
      }, 2500)
    },
    back () {
      this.$router.back()
    },
    type (v) {
      if (v === '1') { return '<span style="background: #e51c23;color:#fff;border-radius: 0.2rem;padding: 0.1rem;font-size: 12px;">已奖励</span>' }
      if (v === '2') { return '' }
    }
  }
}
</script>
<style scoped>

.pro-list li{border-bottom:1px solid #eee;overflow:hidden;padding: 0.7rem 0.6rem;}
.pro-list .header{color:#999;padding-bottom: 0.5rem;}
.pro-list .time{font-size: 0.6rem}
.pro-list img{width:20%}
.pro-list .info{width:80%;line-height:1rem;color:#444;padding:.5rem .5rem 0 .5rem}
.pro-list .desc{font-size:.6rem;color: #8bc34a;}
</style>
