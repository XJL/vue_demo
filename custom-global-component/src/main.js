import Vue from 'vue'
import App from './App.vue'


// 自定义方法一
import Loading from './components/loading';
Vue.use(Loading);

// 自定义方法二
// import Loading from './components/loading/Loading.vue';
// Vue.component('Loading', Loading);

new Vue({
  el: '#app',
  render: h => h(App)
})
