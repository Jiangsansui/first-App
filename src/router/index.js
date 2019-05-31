import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import bjtj from '@/components/bjtj'
import bjdt from '@/components/bjdt'
import fbtj from '@/components/fbtj'
import rltj from '@/components/rltj'
import ssdars from '@/components/ssdars'
import cqjy from '@/components/cqjy'
import Index from '@/components/Index'
import Appraise from '@/components/Appraise'
import Window from '@/components/Window'
// import Info from '@/components/Info'

import Details from '@/components/Details'
import True from '@/components/True'
import Paidui from '@/components/Paidui'
import lctj from '@/components/lctj'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/bjtj',
      name: 'bjtj',
      component: bjtj
    },
    {
      path: '/bjdt',
      name: 'bjdt',
      component: bjdt
    },
    {
      path: '/fbtj',
      name: 'fbtj',
      component: fbtj
    },
    {
      path: '/ssdars',
      name: 'ssdars',
      component: ssdars
    },
    {
      path: '/',
      name: 'lctj',
      component: lctj
    },
    {
      path: '/cqjy',
      name: 'cqjy',
      component: cqjy
    },

    {
      path: '/rltj',
      name: 'rltj',
      component: rltj
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
    // {
    //   path: '/info',
    //   name: 'Info',
    //   component: Info
    // },

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
      path: '/True',
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
