import Vue from 'vue'
import App from './App.vue'
import router from './route.config';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
