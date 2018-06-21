import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import coupondetails from '@/views/coupondetails'
import phonenumber from '@/views/phonenumber'
import mycoupon from '@/views/mycoupon'
import mycard from '@/views/mycard'
import jifenlijin from '@/views/jifenlijin'
import totalcard from '@/views/totalcard'
import coupon from '@/views/coupon'
import jifenlipin from '@/views/jifenlipin'
import jifenmingxi from '@/views/jifenmingxi'
import myphone from '@/views/myphone'
import mypoints from '@/views/mypoints'
import phonedetails from '@/views/phonedetails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      myphone: 'Home',
      component: Home
    },
    {
      path: '/coupondetails',
      myphone: 'coupondetails',
      component: coupondetails
    },
    {
      path: '/phonenumber',
      myphone: 'phonenumber',
      component: phonenumber
    },
     {
      path: '/mycard',
      myphone: 'mycard',
      component: mycard
    },
    {
      path: '/jifenlijin',
      myphone: 'jifenlijin',
      component: jifenlijin
    },
     {
      path: '/totalcard',
      myphone: 'totalcard',
      component: totalcard
    },
     {
      path: '/coupon',
      myphone: 'coupon',
      component: coupon
    }, 
     {
      path: '/mycoupon',
      myphone: 'mycoupon',
      component: mycoupon
    }, 
    {
      path: '/jifenlipin',
      myphone: 'jifenlipin',
      component: jifenlipin
    },
    {
      path: '/jifenmingxi',
      myphone: 'jifenmingxi',
      component: jifenmingxi
    },
     {
      path: '/myphone',
      myphone: 'myphone',
      component: myphone
    },
    {
      path: '/mypoints',
      myphone: 'mypoints',
      component: mypoints
    },
     {
      path: '/phonedetails',
      myphone: 'phonedetails',
      component: phonedetails
    }
  ]
})
