import Vue from "vue";
import App from "./App.vue";

new Vue ({
    el: 'body',
    data: {
        msg: 'welcome vue',
    },
    components: {
        app: App
    }
});