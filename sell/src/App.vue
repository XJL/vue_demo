<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/ratings'}">评价</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/Header.vue';

  const HTTP_OK = 0;

  export default {
    data () {
      return {
        seller: {}
      };
    },
    created  () {
      this.$http.get('/api/seller').then((rsp) => {
        if (rsp.ok && rsp.body.errno === HTTP_OK) {
          this.seller = rsp.body.data;
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'common/stylus/mixin';

  .tab
    display: flex
    height: 40px
    border-1px(rgba(7, 17, 27, 0.1))

    .tab-item
      flex: 1
      line-height 40px
      text-align center
      font-size 14px
      color: rgb(77, 85, 93)

      a
        display: block
</style>
