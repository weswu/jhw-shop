import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import api from '../api'
Vue.use(Vuex)

window.ua = navigator.userAgent.toLowerCase()
const store = new Vuex.Store({
  state: {
    user: {
      'id': 0,
      'name': '名称'
    },
    loading: false, // 是否正在加载中
    isWeixin: !!window.ua.match(/MicroMessenger/i),    // 微信浏览器
    errImgUrl: 'http://img.easthardware.com/upload/j/j2/jihui/picture/2015/12/04/cb46a5be-9960-4c96-a463-895e7948c415.png',
    imgUrl: 'http://img.jihui88.com/'
  },
  getters: {
    user: state => state.user,
    loading: state => state.loading,
    isWeixin: state => state.isWeixin,
    errImgUrl: state => state.errImgUrl,
    imgUrl: state => state.imgUrl
  },
  // 异步的数据操作
  actions: {
    getSong ({commit, state}, id) {
      commit('openLoading')
      Axios.get(api.getSong(id)).then(res => {
        // 统一数据模型，方便后台接口的改变
        var url = res.data.data[0].url
        commit('setAudio')
        commit('setLocation', url)
      })
      .catch((error) => {     // 错误处理
        console.log(error)
        window.alert('信息出错！')
      })
    }
  }
})
export default store
