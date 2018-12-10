<template>
  <div id="app">
    <!--<Bootstrap></Bootstrap>-->
    <!--<ElementUI ></ElementUI>-->
    <MintUI></MintUI>
  </div>
</template>

<script>
  import Bootstrap from './bootstrap/Bootstrap.vue';
  import ElementUI from './elementui/ElementUI.vue';
  import MintUI from './mintui/MintUI.vue';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Bootstrap,
      ElementUI,
      MintUI
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
</style>
