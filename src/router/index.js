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
import member from '@/views/member'
import error from '@/views/error'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      myphone: 'Home',
      component: Home,
      meta: {
        title: '我的卡劵'
      }
    },
    {
      path: '/coupondetails',
      myphone: 'coupondetails',
      component: coupondetails,
      meta: {
        title: '店铺优惠券'
      }
    },
    {
      path: '/phonenumber',
      myphone: 'phonenumber',
      component: phonenumber,
      meta: {
        title: '修改手机号'
      }
    },
    {
      path: '/mycard',
      myphone: 'mycard',
      component: mycard,
      meta: {
        title: '我的会员卡'
      }
    },
    {
      path: '/jifenlijin',
      myphone: 'jifenlijin',
      component: jifenlijin,
      meta: {
        title: '积分'
      }
    },
    {
      path: '/totalcard',
      myphone: 'totalcard',
      component: totalcard,
      meta: {
        title: '所有店铺会员卡'
      }
    },
    {
      path: '/coupon',
      myphone: 'coupon',
      component: coupon,
      meta: {
        title: '礼金劵'
      }
    },
    {
      path: '/mycoupon',
      myphone: 'mycoupon',
      component: mycoupon,
      meta: {
        title: '所有店铺优惠券'
      }
    },
    {
      path: '/jifenlipin',
      myphone: 'jifenlipin',
      component: jifenlipin,
      meta: {
        title: '积分'
      }
    },
    {
      path: '/jifenmingxi',
      myphone: 'jifenmingxi',
      component: jifenmingxi,
      meta: {
        title: '积分'
      }
    },
    {
      path: '/myphone',
      myphone: 'myphone',
      component: myphone,
      meta: {
        title: '所有店铺充值'
      }
    },
    {
      path: '/mypoints',
      myphone: 'mypoints',
      component: mypoints,
      meta: {
        title: '所有店铺积分'
      }
    },
    {
      path: '/phonedetails',
      myphone: 'phonedetails',
      component: phonedetails,
      meta: {
        title: '店铺充值'
      }
    },
    {
      path: '/member',
      myphone: 'member',
      component: member,
      meta: {
        title: '会员注册'
      }
    },
    {
      path: '/error',
      myphone: 'error',
      component: error,
      meta: {
        title: '错误'
      }
    }
  ]
})
