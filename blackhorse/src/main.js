// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'animate.css/animate.css'
import 'regenerator-runtime/runtime.js'

//启动路由
import router from './router'
Vue.use(router)
//导入路由组件
// import index from './router/index'

import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:5000"

import moment from 'moment'
Vue.filter('datefmt', function (data, str = "YYYY-MM-DD hh:mm:ss") {
  return moment(data).format(str)
})


//导入vant插件
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Card,
  Button
} from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Card).use(Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  // router: index
})
