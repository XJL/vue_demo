import Home from './pages/Home.vue';
import Me from './pages/Me.vue';
import Login from './pages/Login.vue';
import Logout from './pages/Logout.vue';
import Info from './pages/Info.vue';
import Vue from 'vue';
import VueRouter from "vue-router";

// 必须明确声明使用路由
Vue.use(VueRouter);

const routes = [
  // {
  //   path: '*',  // 任何匹配不上其他选项的路径  可用于404
  //   redirect: '/me'
  // }, // 重定向
  {
    path: '/home',
    component: Home
  },
  {
    path: '/me',
    component: Me,
    children: [
      {path: 'info/:name', component: Info},
      {path: 'login', component: Login},
      {path: 'logout', component: Logout},
    ],
  }
];

const router = new VueRouter({routes});

export default router;

/**
 * router 的方法：
 * push、replace、
 */
