<template>
  <div>
    <input type="text" v-model="accName">
    <input type="text" v-model="pwd">
    <input type="button" value="登录" @click="signin({accName: accName, pwd: pwd})">
  </div>
</template>

<script>
    export default {
      data: function () {
        return {
          accName: "",
          pwd: ""
        }
      },
      methods: {
        signin({accName, pwd}) {
          this.$store.dispatch("signin", {accName, pwd})
            .then(()=>{this.$router.push({path: '/home'})})
            .catch((error)=>alert(error.message));
        },
      }
    }
</script>

<style scoped>

</style>
