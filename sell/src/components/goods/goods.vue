<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item" :class="{active: menuActive === $index}" v-for="item in goods" @click="menuActive=$index">
          <span class="text" :class="{['border-1px']: ($index !== menuActive) && ($index !== menuActive - 1)}">
            <i v-show="item.type>0" class="icon" :class="classMap[item.type]"></i>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li class="food-list" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item" v-for="food in item.foods">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <div class="desc" v-if="food.description">{{food.description}}</div>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="newPrice"><span class="currency">&#165;</span>{{food.price}}</span>
                  <!--<span class="oldPrice" v-show="food.oldPrice" style="text-decoration:line-through;">&#165;{{food.oldPrice}}</span>-->
                  <span class="oldPrice" style="text-decoration:line-through;">&#165;12</span>
                </div>
              </div>
              <div class="counter">

              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  const HTTP_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        menuActive: 0,
        goods: {}
      };
    },
    created () {
      this.classMap = [
        'decrease', 'discount', 'special', 'invoice', 'guarantee'
      ];

      this.$http.get('/api/goods').then((rsp) => {
        if (rsp.ok && (rsp.body.errno === HTTP_OK)) {
          this.goods = rsp.body.data;
          console.log(rsp.body.data);
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .goods
    display flex
    position: absolute
    width: 100%
    top: 174px
    bottom: 64px
    overflow hidden

    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      overflow-x: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .menu-item
        display: table
        width: 56px
        height: 54px
        line-height: 14px
        padding: 0 12px
        &.active
          background: white
        .icon
          display: inline-block
          vertical-align: top
          margin-top 1px
          width 12px
          height 12px
          background-size 12px 12px
          &.decrease
            bg-img('decrease_3')

          &.discount
            bg-img('discount_3')

          &.guarantee
            bg-img('guarantee_3')

          &.invoice
            bg-img('invoice_3')

          &.special
            bg-img('special_3')

        .text
          display: table-cell
          vertical-align: middle
          color: rgb(77, 85, 93)
          font-size: 12px
          &.border-1px
            border-1px(rgba(7, 17, 27, 0.1))

    .foods-wrapper
      flex: 1
      overflow-x: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar
        display: none
      .food-list
        .title
          padding: 0 14px
          line-height: 26px
          height: 26px
          font-size: 12px
          color: rgb(147 153, 159)
          border-left: 4px solid #d9dde1
          background: #f3f5f7
        .food-item
          display: flex
          margin: 18px
          padding-bottom: 18px
          font-size: 0
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
            padding-bottom: 0

          .icon
            flex: 0 0 57px
            margin-right: 10px
          .content
            flex: 1
            overflow: hidden
            .name
              margin: 2px 0 8px 0
              font-size: 14px
              line-height: 14px
              color: rgb(7, 17, 27)
            .desc
              width: 100%
              margin-top: 8px
              font-size: 10px
              color: rgb(147, 153, 159)
              line-height: 10px
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis

            .extra
              margin-top: 8px
              font-size: 0
              span
                font-size: 10px
                color: rgb(147, 153, 159)
                line-height: 10px
                &+span
                  margin-left: 6px
            .price
              margin-top: 8px
              .newPrice
                color: rgb(240, 20, 20)
                font-size: 14px
                font-weight: 700
                .currency
                  font-size: 10px
                  font-weight: normal
              .oldPrice
                margin-left: 8px
                color: rgb(147, 153, 159)
                font-size: 10px
                font-weight: 700
                .currency
                  font-weight: normal
</style>
