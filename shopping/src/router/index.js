import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/tabbar/HomeContainer'
import member from '../components/tabbar/MemberContainer'
import search from '../components/tabbar/SearchContainer'
import newsList from '../components/news/newsList'
import photolist from '../components/photo/photolist'
import shoplist from '../components/goodslist/shoplist'
import videolist from '../components/news/videolist'
import phonelist from '../components/news/phonelist'
import newsinfo from '../components/news/newsinfo'
import shopinfo from '../components/goodslist/shopinfo'
import photoprive from '../components/photo/photoprive'
import shopcar from '../components/shopcar/car'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: home
    },
    {
      path: '/member',
      component: member
    }, {
      path: '/search',
      component: search
    }, {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/home/newsList',
      component: newsList
    },
    {
      path: '/home/phonelist',
      component: phonelist
    },
    {
      path: '/home/photolist',
      component: photolist
    },
    {
      path: '/home/shoplist',
      component: shoplist
    },
    {
      path: '/home/videolist',
      component: videolist
    },
    {
      path: '/home/newsinfo/:id',
      component: newsinfo
    },
    {
      path: '/home/shopinfo/:id',
      component: shopinfo
    },
    {
      path: '/home/photoprive/:id',
      component: photoprive
    },
  ]
})
