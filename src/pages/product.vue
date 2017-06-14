<template>
  <div>
    <ul class="pro-list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">
        <img v-lazy="item.pic" class="left">
        <div class="info left">
          {{ item.name }}<br>
          <span class="desc">{{ item.desc }}</span>
          <p>
            <span class="proce">￥{{ item.price }}</span><mt-button  @click="buy(item)" size="small" type="primary" class="right">立即购买</mt-button>
          </p>
        </div>
      </li>
    </ul>

    <div class="toPage center" @click="toPage('user')">
      <div>
        <i class="material-icons">perm_identity</i>
      </div>
      <p>个人中心</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      list: [
        {name: '智能门磁', desc: '门窗开关报警，您的贴心小卫士', price: '199', pic: 'https://v3.modao.cc/uploads3/images/1024/10244900/raw_1497338872.png'},
        {name: '安全门锁', desc: '手机远程管理,新一代房主的选择', price: '199', pic: 'https://v3.modao.cc/uploads3/images/1024/10245491/raw_1497339509.png'},
        {name: '公寓门锁', desc: '公寓领导品牌的第一选择', price: '199', pic: 'https://v3.modao.cc/uploads3/images/1024/10246100/raw_1497340076.png'},
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
    buy (item) {
      this.$router.push({path: '/productDetail'})
    },
    toPage(val) {
      this.$router.push({path: val})
    }
  }
}
</script>
<style scoped>
.pro-listpro-list li{border-bottom:1px solid #eee;overflow:hidden}
.pro-list img{width:31%}
.pro-list .info{width:69%;line-height:1rem;color:#444;padding:.5rem .5rem 0 .5rem}
.pro-list .desc{color:#999;font-size:.6rem}
.pro-list p{padding-top:.5rem;line-height:2rem}


.toPage{position:absolute;position:absolute;bottom:1rem;left:50%;width:3rem;color:#999;font-size:.5rem;margin-left:-1.5rem}
.toPage div{border:.05rem solid #ccc;border-radius:50%;width:2.5rem;height:2.5rem;margin:0 auto}
.toPage i{color:#fff;background-color:#8bc34a;width:2.3rem;height:2.3rem;line-height:2.4rem;font-size:1.5rem;border-radius:50%;text-align:center;margin:.05rem}
.toPage p{padding:.3rem 0}

</style>
