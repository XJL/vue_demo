<template>
    <h1>welcome vue router</h1>

    <div>
        <a v-link="{path: '/home'}">主页</a>
        <a v-link="{path: '/news'}">新闻</a>
    </div>
    <menu></menu>

    <router-view></router-view>
</template>

<style>

</style>

<script>
    import Menu from './src/Menu.vue';

    export default {
        data: function () {
            return {
                msg: '消息',
            }
        },
        components: {
            "menu": Menu
        }
    }
</script>