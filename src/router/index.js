import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import rltj from '@/components/rltj'
import ssdars from '@/components/ssdars'
import bjtj from '@/components/bjtj'
import bjdt from '@/components/bjdt'
import pdqk from '@/components/pdqk'
import win from '@/components/win'

import handleMost from '@/components/handleMost'
import consultationMost from '@/components/consultationMost'
import acceptanceMost from '@/components/acceptanceMost'
import pieceMost from '@/components/pieceMost'
import pjtj from '@/components/pjtj'
import evaluateMost from '@/components/evaluateMost'
import sjlxq from '@/components/sjlxq'
import cqjy from '@/components/cqjy'
import fbtj from '@/components/fbtj'
import lcsy from '@/components/lcsy'
import lctj from '@/components/lctj'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/rltj', name: 'rltj', component: rltj},
    {path: '/bjtj', name: 'bjtj', component: bjtj},
    {path: '/sjlxq', name: 'sjlxq', component: sjlxq},
    {path: '/bjdt', name: 'bjdt', component: bjdt},
    {path: '/pdqk', name: 'pdqk', component: pdqk},
    {path: '/handleMost', name: 'handleMost', component: handleMost},
    {path: '/consultationMost', name: 'consultationMost', component: consultationMost},
    {path: '/acceptanceMost', name: 'acceptanceMost', component: acceptanceMost},
    {path: '/pieceMost', name: 'pieceMost', component: pieceMost},
    {path: '/pjtj', name: 'pjtj', component: pjtj},
    {path: '/evaluateMost', name: 'evaluateMost', component:evaluateMost},
    {path: '/fbtj', name: 'fbtj', component: fbtj},
    {path: '/ssdars', name: 'ssdars', component: ssdars},
    {path: '/lcsy', name: 'lcsy', component: lcsy},
    {path: '/lctj', name: 'lctj', component: lctj},
    {path: '/cqjy', name: 'cqjy', component: cqjy},
    {path: '/win', name: 'win', component: win},
  ]
})
