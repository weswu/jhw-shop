<template>
  <div>
    <mt-header title="我的二维码">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>
    <div class="center myQrcode">
      <img  src="http://img.easthardware.com/upload/j/j2/jihui/picture/2015/12/28/caa0bba6-2881-4bf5-8a6f-41533fa8f2dd.jpg" alt="">
      <p>长按将二维码保存至手机相册</p>
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
    back () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.myQrcode{
  padding: 2rem 0;
    line-height: 2rem;
    color: #333;
}
</style>
