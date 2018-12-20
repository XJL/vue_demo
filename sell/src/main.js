import Vue from 'vue';
import App from './App';
import router from 'config/router/router.config';
import VueResource from 'vue-resource';
import 'common/stylus/index.styl';

Vue.use(VueResource);

let app = Vue.extend(App);

router.start(app, '#app');
