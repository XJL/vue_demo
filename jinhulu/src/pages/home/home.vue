<template>
  <div id="home">
    {{title}}
    <div class="weui-tabbar">
      <a href="javascirpt:;" :class="{['weui-tabbar__item']: true, ['weui-bar__item_on']: tabSelected==0}" @click="changeTab(0)">
        <span>
        <span class="weui-badge">8</span>
        </span>
        <p class="weui-tabbar__label">微信</p>
      </a>
      <a href="javascirpt:;" :class="{['weui-tabbar__item']: true, ['weui-bar__item_on']: tabSelected==1}" @click="changeTab(1)">
        <p class="weui-tabbar__label">投资</p>
      </a>
      <a href="javascirpt:;" :class="{['weui-tabbar__item']: true, ['weui-bar__item_on']: tabSelected==2}" @click="changeTab(2)">
        <p class="weui-tabbar__label">发现</p>
      </a>
      <a href="javascirpt:;" :class="{['weui-tabbar__item']: true, ['weui-bar__item_on']: tabSelected==3}" @click="changeTab(3)">
        <p class="weui-tabbar__label">我</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data: function () {
      return {
        title: "首页",
        tabSelected: 0
      }
    },
    methods: {
      changeTab(i) {
        this.tabSelected = i;
      }
    }
  }
</script>

<style scoped>


</style>
