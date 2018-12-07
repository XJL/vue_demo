<template>
  <div id="app">
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrease">
    <div>{{$store.state}}</div>
    <div>{{count}}</div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'app',
  data: function() {
    return {
      msg: "123",
    }
  },
  computed: mapGetters([
    'count',
  ]),
  methods: mapActions([
    'increment',
    "decrease"
  ])
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
