import * as TYPES from './types';

export default {
  ['getUser']: (options, a) => {
    console.log(options);
    /**
     * commit 有三个参数
     * type       action type
     * payload    携带参数
     * options    ？？
     */
    options.commit(TYPES.GET_USER, {a: 1})
  }
}
