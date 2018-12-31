<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{highlight: totalCount>0}">
            <i class="icon-shopping_cart" :class="{highlight: totalCount>0}"></i>
          </div>
          <div class="num" v-show="totalCount">{{totalCount}}</div>
        </div>
        <div class="price" :class="{highlight: totalCount>0}">&#165;{{totalPrice}}</div>
        <div class="desc">另需配送费&#165;{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{payDesc}}</div>
      </div>
    </div>
    <div class="ball-container">
      <div v-for="ball in balls" v-show="ball.show" transition="drop" class="ball">
        <div class="inner inner-hook"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      selectedFoods: {
        type: Array,
        default() {
          return [];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        balls: [
          {show: false, showing: false},
          {show: false, showing: false},
          {show: false, showing: false},
          {show: false, showing: false},
          {show: false, showing: false}
        ],
        dropBalls: []
      };
    },
    computed: {
      totalPrice() {
        let total = 0;
        this.selectedFoods.forEach(food => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount() {
        let count = 0;
        this.selectedFoods.forEach(food => {
          count += food.count;
        });
        return count;
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          return `还差￥${this.minPrice - this.totalPrice}元起送`;
        } else {
          return '去结算';
        }
      },
      payClass() {
        return this.totalPrice < this.minPrice ? 'not-enough' : 'enough';
      }
    },
    methods: {
      drop(el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.el = el;
            ball.show = true;
            this.dropBalls.push(ball);
            return;
          }
        }
      }
    },
    transitions: {
      drop: {
        beforeEnter(el) {
          let count = this.balls.length;
          while (count--) {
            let ball = this.balls[count];
            // 估计在el.style设置成功时 动画已经开始 所以只能必须准确匹配到刚添加的那个对象
            if (ball.show && !ball.showing) {
              ball.showing = true;
              let rect = ball.el.getBoundingClientRect();
              let x = rect.left + 10 - 32;
              let y = -(window.innerHeight - 26 - rect.top - 22);
              el.style.display = '';
              el.style.webkitTransform = `translate3d(0, ${y}px, 0)`;
              el.style.transform = `translate3d(0, ${y}px, 0)`;
              let inner = el.getElementsByClassName('inner-hook')[0];
              inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`;
              inner.style.transform = `translate3d(${x}px, 0, 0)`;
            }
          }
        },
        enter(el) {
          /* eslint-disable no-unused-vars */
          // 申明只是为了触发浏览器重绘和重排  可百度查浏览器重绘和重排
          let rf = el.offsetHeight;
          this.$nextTick(() => {
            el.style.webkitTransform = 'translate3d(0, 0, 0)';
            el.style.transform = 'translate3d(0, 0, 0)';
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = 'translate3d(0, 0, 0)';
            inner.style.transform = 'translate3d(0, 0, 0)';
          });
        },
        afterEnter(el) {
          let ball = this.dropBalls.shift();
          if (ball) {
            el.style.display = 'none';
            ball.el = null;
            ball.show = false;
            ball.showing = false;
          }
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px

    .content
      display: flex
      left: 0
      bottom: 0
      width: 100%
      height: 100%
      background: #141d27

      .content-left
        display: flex
        flex: 1
        font-size: 0
        background: #141d27

        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27

          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            background: #2b343c
            text-align: center

            &.highlight
              background: rgb(0, 160, 220)

            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: rgba(255, 255, 255, 0.4)

              &.highlight
                color: #fff

          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            color: #fff
            font-weight: 700
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)

        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          font-size: 16px
          font-weight: 700
          color: rgba(255, 255, 255, 0.4)
          line-height: 24px
          box-sizing: border-box
          padding-right: 12px
          border-right: 1px solid rgba(255, 255, 255, 0.1)

          &.highlight
            color: #fff

        .desc
          flex: 1
          display: inline-block
          vertical-align: top
          margin-top: 12px
          font-size: 12px
          font-weight: 700
          color: rgba(255, 255, 255, 0.4)
          line-height: 24px
          box-sizing: border-box
          padding: 0 12px

      .content-right
        flex: 0 0 105px
        width: 105px

        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-weight: 700
          font-size: 12px

          &.not-enough
            background: #2b333b
            color: rgba(255, 255, 255, 0.4)

          &.enough
            background: #00b43c
            color: #fff


    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200

        &.drop-transition
          transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41)

          .inner
            width: 16px
            height: 16px
            border-radius: 50%
            background: rgb(0, 160, 220)
            transition: all 1s linear
</style>
