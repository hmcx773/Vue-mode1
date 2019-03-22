import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/tabbar/HomeContainer'
import member from '../components/tabbar/MemberContainer'
import search from '../components/tabbar/SearchContainer'
import shopcar from '../components/tabbar/ShopcarContainer'
import newsList from '../components/news/newsList'
import photolist from '../components/news/photolist'
import shoplist from '../components/news/shoplist'
import videolist from '../components/news/videolist'
import phonelist from '../components/news/phonelist'
import newsinfo from '../components/news/newsinfo'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: home
    },
    {
      path: '/member',
      component: member
    },{
      path: '/search',
      component: search
    },{
      path:'/shopcar',
      component:shopcar
    },
    {
      path:'/home/newsList',
      component:newsList
    },
    {
      path:'/home/phonelist',
      component:phonelist
    },
    {
      path:'/home/photolist',
      component:photolist
    },
    {
      path:'/home/shoplist',
      component:shoplist
    },
    {
      path:'/home/videolist',
      component:videolist
    },
    {
      path:'/home/newsinfo/:id',
      component:newsinfo
    }
  ]
})
