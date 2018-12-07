<template>
    <h1>新闻内容</h1>
    <ul>
        <li><a v-link="{path: '/news/detail/01'}">新闻1</a></li>
        <li><a v-link="{path: '/news/detail/02'}">新闻2</a></li>
    </ul>

    <router-view></router-view>
</template>