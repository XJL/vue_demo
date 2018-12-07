import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations';
import state from './modules';
import getters from './getters';

Vue.use(Vuex)


/**
 * 总结一下
 *
 * # mutation必须是同步函数 异步参数可以在action里做
 *
 *
 * state新添参数2种方法
 *    1. Vue.set(obj, 'newProp'， 123)
 *    2. state.obj = {...state.obj, newProp: 123}
 *
 * action 两个参数
 *    action: (options, payload, other) => {}
 *    options {
 *      commit,         commit(state, payload, options)
 *      dispatch,       TODO
 *      getters,
 *      rootGetters,    整个项目所有module的getters
 *      rootState,      整个项目所有module的state
 *      state           当前模块的state
 *    },
 *    payload 参数
 *    other   可以传{root: true}
 *
 * getters 四个参数
 *    getter: (state, getters, rootState, rootGetters) => {}
 *    state   状态
 *    getters 当前getters
 *    rootState   整个项目所有module的state
 *    rootGetters 整个项目所有module的getters
 *
 * mutations 两个参数
 *    mutation: (state, payload) => {}
 *    state   状态
 *    payload 参数
 *
 *
 * # 命名空间
 *    默认actions mutations getters是注册在全局命名空间的
 *    如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
 *
 *    1.
 *    modules{
 *      moduleA: {
 *        namespaced: true,
 *        actions:{do}, dispatch('moduleA/do')
 *        ...
 *        // 嵌套模块
 *        moduleB: {
 *          namespaced: true,
 *          actions: {do},  dispatch('moduleA/modulesB/do')
 *        }
 *      },
 *    }
 *    2.
 *    dispatch(type)      'moduleA/moduleB/type'
 *    dispatch(type, null, {root: true})  'type'
 *
 *
 *
 *
 * mutation传参方式
 *    1.$store.commit(type, payload参数)
 *      mutation:(state, payload参数)=>{}
 *    2.$store.commit({
 *        type: XXX,
 *        amount: 5
 *      })
 *      mutation:(state, payload)=>{
 *        payload.amount ...
 *      }
 *
 * action参数方式
 *    1.$store.dispatch(type, 参数)
 *      action: (state, 参数)=>{}
 *    2.$store.dispatch({
 *        type: XXX,
 *        amount: 5
 *      })
 *      action: (state, payload)=>{
 *        payload.amount
 *      }
 */

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
