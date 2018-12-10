<template>
  <div>
    <h4>我是退出</h4>
    <input type="button" value="退出" @click="logout">
  </div>
</template>

<script>
  import router from '../router';
    export default {
        name: "Logout",
        methods: {
          logout() {
            router.push({path: '/home'});
          }
        }
    }
</script>

<style scoped>

</style>
