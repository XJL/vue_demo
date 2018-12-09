import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

// 声明VueRouter
Vue.use(VueRouter);

// 页面引用
import Home from '../pages/home/home.vue';
import Login from  '../pages/login/login.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {auth: false},
    component: Home,
  },
  {
    path: '/login',
    meta: {auth: false},
    component: Login,
  },
];

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
  const meta = to.meta;
  const {auth = true} = meta;
  const isLogin = Boolean(store.state.user.id);

  // 登陆校验拦截
  if(auth && !isLogin && (to.path !== '/login')) {
    return next({path: '/login'})
  }
  // 正常跳转
  next();
});

export default router;
