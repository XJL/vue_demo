import Vue from 'vue';
import VueRouter from 'vue-router';

// 声明VueRouter
Vue.use(VueRouter);

// 页面引用
import Home from '../pages/home/home.vue';


const routes = [
  {
    path: '/home',
    component: Home,
  }
];
const router = new VueRouter({routes});
export default router;
