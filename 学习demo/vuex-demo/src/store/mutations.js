import * as TYPES from './types';
import getters from './getters';

const state = {
  count: 10,
};

const mutations = { // 接收到action的请求，修改数据
  /**
   * 这里只有state
   * @param state
   */
  [TYPES.INCREMENT] (state) {
    state.count ++;
  },
  [TYPES.DECREASE] (state) {
    state.count --;
  }
};

export default {
  state,
  mutations,
  getters
}
