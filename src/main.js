// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import echarts from 'echarts'
import'lib-flexible'
import axios from 'axios'
import $ from 'jquery'
import Swiper from 'swiper'


import 'swiper/dist/css/swiper.css';
Vue.use(ElementUI);
Vue.prototype.$axios =axios
Vue.prototype.Swiper =Swiper
Vue.prototype.$ = $
Vue.prototype.$echarts = echarts
axios.defaults.baseURL="http://10.10.2.11:8037"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
