<template>
  <div>
    <h3>我是我的</h3>
    <ul>
      <li><router-link to="/me/info/XJL">个人信息</router-link></li>
      <li><router-link to="/me/login">登录</router-link></li>
      <li><router-link to="/me/logout">退出</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Me"
    }
</script>

<style scoped>

</style>
