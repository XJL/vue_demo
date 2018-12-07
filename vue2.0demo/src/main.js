import Vue from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/animate.css';

Vue.component("aaa", {
  template: '<div><h3>aaa</h3><h2>bbb</h2></div>'
});

var Home = {
  template: "<h3>Home</h3>"
}

Vue.component("Home", Home);

Vue.config.keyCodes.aaa = 17;

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  // 属性未绑定
  beforeCreate() {

  },
  // 属性已经绑定
  created() {

  },
  // 模板编译之前
  beforeMount() {

  },
  // 模板编译之后  对应之前的ready()
  mounted() {

  },
  // 组件更新之前
  beforeUpdate() {

  },
  // 组件更新完成
  updated() {

  },
  // 销毁前
  beforeDestroy() {

  },
  // 销毁
  destroyed() {

  }


})
