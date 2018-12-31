<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0" @click="descreaseCart" transition="move">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
    <div class="cart-count" v-show="food.count>0" transition="move">{{food.count}}</div>
    <div class="cart-increase icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      },
      selectFoods: {
        type: Array
      }
    },
    methods: {
      addCart(event) {
        if (!event._constructed) { // 当我们自己去指定派发事件的时候这个值为true  浏览器原生点击事件没有这个属性
          return;
        }
        if (!this.food.count) {
          // 像这样直接给数据添加一个原本没有的属性的时候,vue是不会对数据进行跟踪的，而这里需要用到Vue.set()方法
          // this.food.count = 1;
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        // 派发事件出去
        this.$dispatch('cart.add', event.target);
      },
      descreaseCart(event) {
        if (!event._constructed) { // 当我们自己去指定派发事件的时候这个值为true  浏览器原生点击事件没有这个属性
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0

    .cart-decrease
      display: inline-block
      vertical-align: top
      padding: 6px
      transition: all 0.2s linear

      &.move-transition
        opacity: 1
        transform: translate3d(0, 0, 0)

        .inner
          display: inline-block
          line-height: 24px
          font-size: 24px
          color: rgb(0, 160, 220)
          transition: all 0.2s linear
          transform: rotate(0)

      &.move-enter, &.move-leave
        opacity: 0
        transform: translate3d(24px, 0, 0)

        .inner
          transform: rotate(180deg)

    .cart-count
      display: inline-block
      vertical-align: top
      line-height: 36px
      font-size: 10px
      color: rgb(147, 153, 159)
      transition: all 0.2s linear

      &.move-transition
        opacity: 1
        transform: translate3d(0, 0, 0)

      &.move-enter, &.move-leave
        opacity: 0
        transform: translate3d(24px, 0, 0)

    .cart-increase
      display: inline-block
      vertical-align: top
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

</style>
