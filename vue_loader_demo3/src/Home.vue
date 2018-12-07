<template>
    <h1>主页内容</h1>

    <ul>
        <li>
            <a v-link="{path: '/home/login'}">用户登录</a>
            <a v-link="{path: '/home/reg'}">用户注册</a>
        </li>
    </ul>

    <div class="box">
        <router-view></router-view>
    </div>
</template>

<style>
    .box {
        border: 1px dashed white;
    }
</style>