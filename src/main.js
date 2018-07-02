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

Vue.use(MintUI)
Vue.use(require('vue-wechat-title'));
Vue.use(InfiniteScroll);

FastClick.attach(document.body)

Vue.config.productionTip = false;
Vue.prototype.$http = function (data){
  let obj={openid:123};
  let str={...obj,...data}
  return axios.post('/wechatMember',str)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 