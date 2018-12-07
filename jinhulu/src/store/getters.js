/**
 * state数据获取
 */
const getters = {
  /**
   * getter有两个参数
   * @param state     store.state
   * @param getters   当前的这个getters
   * @returns {*}
   */
  userName: (state, getters) => {
    return state.user.name;
    // return getters.changeName("很强");
  },
  userAge: (state, getters) => {
    return state.user.age;
  },
  // 这种方式相当于加了层过滤器
  changeName: (state) => (src) => {
    return state.user.name+src;
  }
}

export default getters;
