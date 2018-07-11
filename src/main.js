// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as FastClick from 'fastclick'
import App from './App'
import router from './router'
import './styles/theme.styl'
import './styles/global.css'
import axios from './http'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { InfiniteScroll } from 'mint-ui';
import { Dialog } from 'mand-mobile'
import { GetQueryString ,stateAdmin,isWeixinBrowser} from './common'
import {setTitle} from './common/index'
Vue.use(MintUI)
Vue.component(Dialog.name, Dialog)
// Vue.use(require('vue-wechat-title'));
Vue.use(InfiniteScroll);

router.beforeEach((to, from, next) => {
  if(!isWeixinBrowser()){
    return next({path:"/error"})
  }
  let title='详情';
  to.meta&&(title=to.meta.title);
  if(to.path!='/member'){
    if(localStorage.getItem('registed')!=1) {
      return next({path: "/member"});
    }else{
      setTitle(title);
      return next();
    }     
  }else{
      setTitle(title);
      next();
  }

});

FastClick.attach(document.body)

Vue.config.productionTip = false;
Vue.prototype.localStorageState=stateAdmin();

(function () {
  if(!!GetQueryString("registed")){
    localStorage.setItem("openid", GetQueryString("openid"));
    localStorage.setItem("registed", GetQueryString("registed"))
  }
})()


Vue.prototype.$http = (function () {
  let obj={openid:localStorage.getItem("openid")}
  return function (data) {
    let str = { ...obj, ...data }
    return axios.post('/wechatMember', str)
  }
})()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
