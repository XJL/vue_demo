import * as TYPES from './types';

export default {  // 告诉mutations，到底需要做什么，但是数据的变化不在这里
  increment ({commit, state}) {
    console.log(state );
    commit(TYPES.INCREMENT);
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
  decrease (options) {
    options.commit(TYPES.DECREASE, { // payload
      a: 1, b: 2,
    });
  }
}
