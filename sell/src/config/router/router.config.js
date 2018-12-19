/**
 * 路由相关配置管理
 */
import VueRouter from 'vue-router';
import routes from './routes';
import Vue from 'vue';

Vue.use(VueRouter);

let router = new VueRouter();

router.map(routes);

router.redirect({
  '/': '/goods',  // 默认匹配商品页
  '*': '/goods' // 匹配不到的路由就进入这里
});

export default router;
