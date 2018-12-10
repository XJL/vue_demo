import * as TYPES from "./types"

const mutations = {
  /**
   * mutation只有两个参数
   * @param state     store.state
   * @param payload   action携带参数
   */
  [TYPES.GET_USER]: (state, payload) => {
    // console.log("payload--->", payload);
    state.user.age ++;
  }
}

export default mutations;
