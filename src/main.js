// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import global from '../static/config/global'
import VueResource from 'vue-resource'

// 设置baseURL
Vue.prototype.GLOBAL = global

axios.defaults.baseURL = global.BASE_URL
axios.defaults.withCredentials = true // 解决axios 跨域问题

Vue.use(VueResource)
// Vue.prototype.$http = axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false
// element-ui
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
