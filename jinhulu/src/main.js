import Vue from 'vue'
import App from './App.vue'
import router from './config/router/router.config';
import store from './store/';
import components from './components' //加载公共组件
import R from './utils/request';

// 注册所有公共组件
for(let key in components) {
  const name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(name, components[key]);
}

Vue.prototype.$http = R.request;
Vue.prototype.$httpGet = R.get;
Vue.prototype.$httpPost = R.post;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
