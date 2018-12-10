import Vue from 'vue';
import R from '../utils/request';
import {PRODUCT_GET} from "./product";

// 首页数据
export const HOME_DATA = 'get_home_data';

export default {
  state: {},
  mutations: {
    [HOME_DATA]: (state, payload) => {
      R.get('notices/list')
        .then(res => {
          console.log(res);
        })
    }
  },
  actions: {
    // 查询首页信息
    homeGet: (options, payload) => {
      options.commit(HOME_DATA, payload);
    },
  }
}
