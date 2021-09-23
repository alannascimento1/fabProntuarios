import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import CreatePront from '@/components/CreatePront'
import GetForKey from '@/components/GetForKey'
import GetAll from '@/components/GetAll'
import GetHistoryForKey from '@/components/GetHistoryForKey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/getForKey',
      name: 'GetForKey',
      component: GetForKey
    },
    {
      path: '/getHistoryForKey',
      name: 'GetHistoryForKey',
      component: GetHistoryForKey
    },
    {
      path: '/getAll',
      name: 'GetAll',
      component: GetAll
    },
    {
      path: '/createPront',
      name: 'CreatePront',
      component: CreatePront
    }
  ]
})