<template>
  <div>
    <input type="text" v-model="accName">
    <input type="text" v-model="pwd">
    <input type="button" value="登录" @click="signin({accName: accName, pwd: pwd})">
  </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
      data: function () {
        return {
          accName: "",
          pwd: ""
        }
      },
      methods: {
        ...mapActions({
          signin: "signin"
        })
      }
    }
</script>

<style scoped>

</style>
