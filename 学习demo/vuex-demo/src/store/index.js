import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 拆分模块

// import actions from './actions';
// import mutations from './mutations';
// export default new Vuex.Store({
//   // state,
//   actions,
//   modules: {
//     mutations,
//   },
// })


// 不拆分模块

// 数据容器
const state = {
  count : 10,
};

const mutations = { // 接收到action的请求，修改数据
  /**
   * 这里只有state
   * @param state
   */
  increment (state) {
    state.count ++;
  },
  decrease (state) {
    state.count --;
  }
};



const actions = { // 告诉mutations，到底需要做什么，但是数据的变化不在这里
  ['increment'] ({commit}) {
    commit('increment');
  },
  /**
   * @param options
   * options里面有
   * commit
   * dispatch
   * getters
   * rootGetters
   * rootState
   * state        修改前的state
   */
  ['decrease'] (options) {
    options.commit('decrease', { // payload
      a: 1, b: 2,
    });
  }
};

const getters = {
  count(state) {
    return state.count;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
