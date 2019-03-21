import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/HomeContainer'
import Member from '../components/MemberContainer'
import Search from '../components/SearchContainer'
import Shopcar from '../components/ShopcarContainer'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/Home',
      component: Home
    },
    {
      path: '/Member',
      component: Member
    },{
      path: '/Search',
      component: Search
    },{
      path:'/Shopcar',
      component:Shopcar
    }
  ]
})
