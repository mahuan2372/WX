import axios from 'axios'
import {
  Toast
} from 'mand-mobile'
import {
  baseurl
} from './base.js'
axios.interceptors.response.use((res) => {
  if (res.data.code == '0000') {
    return Promise.resolve(res.data.data);
  } else {
    Toast.failed(res.data.msg);
    return Promise.reject(res.data);
  }
}, (error) => {
  //404等问题可以在这里处理
  Toast.failed(res.data.msg);
  return Promise.reject(error);
});
axios.defaults.baseURL = baseurl;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
export default axios;
