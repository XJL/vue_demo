/**
 * 用户模块
 */
import Vue from 'vue';

export const USER_SIGNIN = 'USER_SIGNIN'; //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT'; //退出登录

export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {},
  mutations: {
    [USER_SIGNIN]: (state, payload) => {
      // ...一系列校验
      sessionStorage.setItem('user', JSON.stringify(payload))
      Object.assign(state, payload)
    },
    [USER_SIGNIN]: (state, payload) => {
      sessionStorage.removeItem('user')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    },
  },
  actions: {
    // 登陆
    signin: (options, payload) => {
      options.commit(USER_SIGNIN, payload);
    },
    signout: (options, payload) => {
      options.commit(USER_SIGNOUT, payload);
    }
  }
}
