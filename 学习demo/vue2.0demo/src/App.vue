<template>
  <div id="app">
    <Home></Home>
    <aaa></aaa>
    <input type="text" @keydown.aaa="alert">
    <h3>{{money | aaa(1,2)}}</h3>
    <input type="button" value="点击显示隐藏" @click="show=!show">
    <!--<transition name="fade"-->
                <!--@enter="enter"-->
                <!--@after-enter="afterEnter"-->
                <!--@before-enter="beforeEnter">-->
      <!--<div class="red" v-show="show"></div>-->
    <!--</transition>-->
    <transition-group name="fade"
                @enter="enter"
                @after-enter="afterEnter"
                @before-enter="beforeEnter">
      <div class="red" v-show="show" :key="1"></div>
      <div class="red" v-show="show" :key="2"></div>
    </transition-group>

    <div>
      <router-link to="/home">主页</router-link>
      <router-link to="/me">我的 </router-link>
    </div>

    <transition >
      <router-view class="animated"></router-view>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue';

  /**
   * 自定义过滤器
   */
  Vue.filter('aaa', function (a,b,c) {
    // alert(a);
    // alert(b);
    // alert(c);
    return a;
  });

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      money: 123,
      show: false
    }
  },
  methods: {
    alert() {
      alert(1);
    },
    beforeEnter(el) {
      console.log(el);
    },
    enter(el) {
      console.log(el);
    },
    afterEnter(el) {
      console.log(el);
    }
  },
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

.red {
  width: 300px;
  height: 300px;
  background: red;
  opacity: 1;
}

.blue {
  width: 300px;
  height: 300px;
  background: blue;
  margin: 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: 2s all ease;
}
.fade-enter {
  opacity: 0;
  width: 100px;
  height: 100px;
  background: red;
}
.fade-enter-to {
  opacity: 1;
  width: 300px;
  height: 300px;
  background: red;
}
.fade-leave {
  opacity: 1;
  width: 300px;
  height: 300px;
  background: red;
}
.fade-leave-active {
  opacity: 0;
  width: 100px;
  height: 100px;
  background: red;
}
</style>
