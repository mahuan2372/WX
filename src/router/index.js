import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import details from '@/views/details'
import cou from '@/views/cou'
import act from '@/views/act'
import stored from '@/views/stored'
import snt from '@/views/snt'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },{
      path: '/cou',
      name: 'cou',
      component: cou
    },
    {
      path: '/act',
      name: 'act',
      component: act
    },
    {
      path: '/stored',
      name: 'stored',
      component: stored
    },
     {
      path: '/snt',
      name: 'snt',
      component: snt
    }
  ]
})
