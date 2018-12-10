import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from './pages/Home.vue';
import Order from './pages/Order.vue';
import Discover from './pages/Discover.vue';
import Me from './pages/Me.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: Home},
  {path: '/order', component: Order},
  {path: '/discover', component: Discover},
  {path: '/me', component: Me},
];

const router = new VueRouter({routes});

export default router;
