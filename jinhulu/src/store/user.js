/**
 * 用户模块
 */
import Vue from 'vue';
import R from '../utils/request';

export const USER_SIGNIN = 'USER_SIGNIN'; //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT'; //退出登录

export default {
  state: sessionStorage.getItem('token') ? {
    token: sessionStorage.getItem('token')
  } : {},
  mutations: {
    [USER_SIGNIN]: (state, payload) => {
      R.post('account/login', {
        accName: payload.accName,
        pwd: payload.pwd
      }).then(token=>{
        sessionStorage.setItem('token', token);
        Object.assign(state, {token})
      }).catch(errorMsg=>{
        alert(errorMsg)
      });
    },
    [USER_SIGNOUT]: (state, payload) => {
      sessionStorage.removeItem('token')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    },
  },
  actions: {
    // 登陆
    signin: ({commit}, payload) => {
      commit(USER_SIGNIN, payload);
    },
    signout: (options, payload) => {
      options.commit(USER_SIGNOUT, payload);
    }
  }
}
