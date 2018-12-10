/**
 * 页面路由配置
 */
import Home from '../../pages/home/home.vue';
import Login from '../../pages/login/login.vue';

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    meta: {auth: true},
    component: Home,
  },
  {
    path: '/login',
    meta: {auth: false},
    component: Login,
  },
];
