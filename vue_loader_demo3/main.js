import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import RouterConfig from './router.config';

Vue.use(VueRouter);

const vr = new VueRouter();

vr.map(RouterConfig);

vr.redirect({
    '/': 'home',
});

vr.start(App, 'app');