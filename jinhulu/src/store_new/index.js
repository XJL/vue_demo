import Vuex from 'vuex';
import Vue from 'vue';

// 声明使用vuex
Vue.use(Vuex);

// 模块引入
import user from './user';
import product from './product';

export default new Vuex.Store({
  modules: {
    user,
    product,
  }
})
