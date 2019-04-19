import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Handle from '@/components/Handle'
import Hello from '@/components/HelloWorld'
import Appraise from '@/components/Appraise'
import Window from '@/components/Window'
import Info from '@/components/Info'
import Deal from '@/components/Deal'
import Details from '@/components/Details'
import True from '@/components/True'
import Paidui from '@/components/Paidui'
Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/handle',
      name: 'Handle',
      component: Handle
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    
    {
      path: '/appraise',
      name: 'Appraise',
      component: Appraise
    },
    {
      path: '/Window',
      name: 'Window',
      component: Window
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/deal',
      name: 'Deal',
      component: Deal
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'True',
      component: True
    },
    {
    path: '/Paidui',
    name: 'Paidui',
    component: Paidui
  }
  ]
})
