// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/style/common.scss'
import 'lib-flexible/flexible.js'
// 在入口文件中（main.js），导入组件库
import vueHashCalendar from 'vue-hash-calendar'
// 引入组件CSS样式
import 'vue-hash-calendar/lib/vue-hash-calendar.css'

import "mint-ui/lib/style.css";
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// 注册组件库
Vue.use(vueHashCalendar)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
