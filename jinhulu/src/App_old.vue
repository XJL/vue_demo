<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->

    <input type="button" value="长大" @click="getUser">
    <input type="button" value="长大" @click="changeFromData">
    <div>年龄：{{userAge}}</div>
    <div>{{user.name}}</div>
    <div>{{me.name}}</div>
    <div>{{changeMyName("小贱贱")}}</div>
    <Header></Header>

    <router-view></router-view>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
  import * as TYPES from './store_old/types';

  export default {

  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      changeFromData: ()=>this.$store.commit(TYPES.GET_USER)
    }
  },
  computed: {
    ...mapState([
      "user",
    ]),
    ...mapState({
      me: "user"
    }),
    ...mapGetters([
      "userName",
      "userAge",
    ]),
    ...mapGetters({
      changeMyName: "changeName"
    })
  },
  methods: {
    show() {

    },
    ...mapActions([
      "getUser"
    ]),
    ...mapActions({
      getMe: "getUser"
    }),
    ...mapMutations([
      TYPES.GET_USER,
    ]),
    ...mapMutations({
      change: TYPES.GET_USER
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
