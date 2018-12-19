import Vue from 'vue';
import App from './App';
import router from 'config/router/router.config';
import 'common/stylus/index.styl';

let app = Vue.extend(App);

router.start(app, '#app');
