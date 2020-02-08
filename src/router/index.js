import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Document from '@/components/Document'
import Slide from '@/components/Slide'

import Study from '@/components/about/Study'
import Work from '@/components/about/Work'
import Hobby from '@/components/about/Hobby'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // routor-link选中的class名称
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: '',
          name: 'Study',
          component: Study
        },
        {
          path: 'work',
          name: 'Work',
          component: Work
        },
        {
          path: 'hobby',
          name: 'Hobby',
          component: Hobby
        }, {
          path: '*',
          redirect: 'study'
        }
      ]
    },
    {
      path: '/document',
      name: 'document',
      // component: Document
      components: {
        default: Document,
        slide: Slide
      }
    }
    // 重定向
    // {
    //   path: '*'
    // redirect: 'home' // 1
    // redirect: {   //2
    //   path: 'home'
    // }
    // redirect: {name: 'Home'}
    // redirect: (to) => {
    //   // to目标路由对象
    //   console.log(to)
    //   if (to.path === '/123') {
    //     return '/about'
    //   }
    //   return '/home'
    // }
    // }
  ]
})
