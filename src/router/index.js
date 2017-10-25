import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import News from '../components/news'

import NewsTitle from '../pages/news/newsTitle'
import NewsContent from '../pages/news/newsContent'


//注册焦点图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      redirect: '/news/title',  //设置跳转
      children: [        //子路由
        {
          path: 'title',
          component: NewsTitle
        },
        {
          path: 'content',
          component: NewsContent
        }
      ]
    }
  

  ]
})
