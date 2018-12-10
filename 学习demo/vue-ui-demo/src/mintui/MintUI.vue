<template>
    <div>
      <h3>我是MintUI</h3>
      <mt-header fixed title="固定在顶部"></mt-header>
      <router-view></router-view>


      <mt-swipe :auto="4000" class="page-swipe">
        <mt-swipe-item class="slide1">
          <div>1</div>
        </mt-swipe-item>
        <mt-swipe-item class="slide2">
          <div>2</div>
        </mt-swipe-item>
        <mt-swipe-item class="slide3">
          <div>3</div>
        </mt-swipe-item>
      </mt-swipe>

      <mt-tabbar v-model="selected">
        <!--<router-link to="/home" class="mt-tab-item" >外卖</router-link>-->
        <!--<router-link to="/order" class="mt-tab-item">订单</router-link>-->
        <!--<router-link to="/discover" class="mt-tab-item">发现</router-link>-->
        <!--<router-link to="/me" class="mt-tab-item">我的</router-link>-->


        <mt-tab-item id="外卖">
          <router-link to="/home" class="tabs">外卖</router-link>
        </mt-tab-item>
        <mt-tab-item id="订单">
          <router-link to="/order" class="tabs">订单</router-link>
        </mt-tab-item>
        <mt-tab-item id="发现">
          <router-link to="/discover" class="tabs">发现</router-link>
        </mt-tab-item>
        <mt-tab-item id="我的">
          <router-link to="/me" class="tabs">我的</router-link>
        </mt-tab-item>
      </mt-tabbar>


      <div>{{selected}}</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Mint from 'mint-ui';

    Vue.use(Mint);

    export default {
        name: "MintUI",
        data() {
          return {
            selected: '外卖',
            msg: "1",
          }
        },
      methods: {
        get() {
          this.msg = 2
        }
      }
    }
</script>

<style scoped>
  .page-swipe {
    height: 200px;
  }
  .slide1 {
    background: red;
  }
  .slide2 {
    background: blue;
  }
  .slide3 {
    background: green;
  }

</style>
