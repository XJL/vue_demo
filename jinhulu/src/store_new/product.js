/**
 * 产品模块
 */
import Vue from 'vue';

export const PRODUCT_GET = "PRODUCT_GET"; // 查询产品信息

export default {
  state: {
    id: 2,
    name: '123',
    price: '??'
  },
  mutations: {
    [PRODUCT_GET]: (state, payload) => {
      //... 查询交互
      Object.assign(state, {
        id: 1,
        name: '稳盈',
        price: 10000
      })
    }
  },
  actions: {
    // 查询产品信息
    productGet: (options, payload) => {
      options.commit(PRODUCT_GET, payload);
    },
  }
}
