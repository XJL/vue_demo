/**
 * 路由器配置
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../../store/index';
import {routes} from './routes';

// 声明VueRouter
Vue.use(VueRouter);

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
  const meta = to.meta;
  const {auth = true} = meta;
  const isLogin = Boolean(store.state.user.token);

  // 登陆校验拦截
  if(auth && !isLogin && (to.path !== '/login')) {
    return next({path: '/login'})
  }

  // 登录态在登录页自动跳转首页
  if(isLogin && (to.path == '/login')) {
    return next({path: '/home'})
  }

  // 正常跳转
  next();
});

export default router;
