<template>
  <div class="food" v-if="showFlag" transition="move">
    <div class="food-header border-1px">
      <div class="header-top">
        <div class="img-wrapper">
          <img :src="food.image" class="img">
        </div>
        <i class="icon-arrow_lift back" @click="_back"></i>
      </div>
      <div class="header-bottom">
        <h1 class="name">{{food.name}}</h1>
        <div class="desc" v-if="food.description">{{food.description}}</div>
        <div class="sell">
          <span class="sellCount">月售{{food.sellCount}}份</span>
          <span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="new"><span class="currency">￥</span>{{food.price}}</span>
          <span class="old" v-if="food.oldPrice"><span class="currency">￥</span>{{food.oldPrice}}</span>
        </div>
        <div class="button">
          <cartcontrol class="counter" :food="food" v-if="food.count"></cartcontrol>
          <div class="addCart" @click="_addCart" v-else>加入购物车</div>
        </div>
      </div>
    </div>
    <div class="detail border-1px" v-if="food.info">
      <h1 class="title">商品介绍</h1>
      <div class="desc">{{food.info}}</div>
    </div>
    <div class="ratings border-1px">
      <div class="filter border-1px">
        <div class="title">商品评价</div>
        <div class="words">
          <span class="all">全部 {{food.ratings.length}}</span>
          <span class="recommend">推荐 {{recommendedCount}}</span>
          <span class="debase">吐槽 {{notRecommendedCount}}</span>
        </div>
        <div class="types">
          <i class="icon-check_circle" :class="{active: showOnly}" @click="_showOnly"></i>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="list">
        <ul>
          <li class="item border-1px" v-for="item in ratingList">
            <div class="top">
              <div class="time">{{item.rateTime | date}}</div>
              <div class="user">
                <span class="text">{{item.username}}</span>
                <img class="avatar" :src="item.avatar">
              </div>
            </div>
            <div class="bottom">
              <span class="thumb" :class="item.rateType | rate"></span>
              <span class="content">{{item.text | rating}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import Vue from 'vue';

  // 最好不要在这里用全局过滤器 改用局部过滤器
  // Vue.filter('date', (date) => {
  //   date = new Date(date);
  //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  // });

  export default {
    props: {
      food: {
        type: Object
      }
    },
    components: {
      cartcontrol
    },
    data() {
      return {
        showFlag: false,
        showOnly: false
      };
    },
    computed: {
      thumb() {
        return this.food.thumb ? 'icon-thumb_up' : 'icon-thumb_down';
      },
      recommendedCount() {
        let count = 0;
        this.food.ratings.forEach(v => v.rateType && count++);
        return count;
      },
      notRecommendedCount() {
        let count = 0;
        this.food.ratings.forEach(v => !v.rateType && count++);
        return count;
      },
      ratingList() {
        if (this.showOnly) {
          const list = [];
          this.food.ratings.forEach(v => !!v.text && list.push(v));
          return list;
        } else {
          return this.food.ratings;
        }
      }
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      _back() {
        this.showFlag = false;
      },
      _addCart() {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
      _showOnly() {
        this.showOnly = !this.showOnly;
      }
    },
    // 局部过滤器
    filters: {
      date(date) {
        date = new Date(date);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
      },
      rating(text) {
        return text || '用户没有评论';
      },
      rate(rateType) {
        return rateType ? 'icon-thumb_up' : 'icon-thumb_down';
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .food
    position: fixed
    bottom: 48px
    top: 0
    left: 0
    width: 100%
    background: #f3f5f7
    overflow-y: scroll

    &::-webkit-scrollbar
      display: none;

    &.move-transition
      transition: all 0.2s linear
      transform: translate3d(0, 0, 0)

    &.move-enter, &.move-leave
      transform: translate3d(100%, 0, 0)

    .food-header
      margin-bottom: 16px
      background: #fff
      border-bottom-1px(rgba(7, 17, 27, 0.1))

      .header-top
        .img-wrapper
          position: relative
          width: 100%
          height: 0
          padding-top: 100%
          background: #fff

          .img
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%

        .icon-arrow_lift
          position: absolute
          display: block
          left: 0
          top: 0
          padding: 20px
          font-size: 12px
          color: #fff

      .header-bottom
        position: relative
        padding: 18px

        .name
          font-size: 14px
          font-weight: 700
          color: rgb(7, 17, 27)
          line-height: 14px
          margin-bottom: 8px

        .desc
          font-size: 10px
          color: rgb(147, 153, 159)
          line-height: 10px
          margin-bottom: 8px

        .sell
          margin-bottom: 18px
          font-size: 0

          .sellCount, .rating
            font-size: 10px
            color: rgb(147, 153, 159)
            line-height: 10px

            & + .rating
              margin-left: 12px

        .price
          font-size: 0
          line-height: 14px

          .new
            font-size: 14px
            color: rgb(240, 20, 20)
            font-weight: 700

          .old
            margin-left: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
            text-decoration-line: line-through

          .currency
            font-size: 10px
            font-weight: normal

        .button
          position: absolute
          bottom: 18px
          right: 18px

          .addCart
            display: block
            border-radius: 12px
            box-sizing: border-box
            padding: 6px 12px
            background: rgb(0, 160, 200)
            font-size: 10px
            color: white
            line-height: 12px

          .counter
            position: relative
            bottom: -6px
            right: -6px

    .detail
      margin-bottom: 16px
      padding: 18px
      background: #fff
      border-top-1px(rgba(7, 17, 27, 0.1))
      border-bottom-1px(rgba(7, 17, 27, 0.1))

      .title
        font-size: 14px
        color: rgb(7, 17, 27)
        line-height: 14px
        margin-bottom: 6px

      .desc
        font-size: 12px
        font-weight: 200
        color: rgb(77, 85, 93)
        line-height: 24px
        margin: 0 8px

    .ratings
      padding: 18px 18px 0 18px
      background: #fff
      border-top-1px(rgba(7, 17, 27, 0.1))

      .filter
        border-bottom-1px(rgba(7, 17, 27, 0.1))

        .title
          font-size: 14px
          color: rgb(7, 17, 27)
          line-height: 14px
          margin-bottom: 6px

        .words
          margin-bottom: 18px
          font-size: 0
          line-height: 16px

          .all, .recommend, .debase
            display: inline-block
            box-sizing: border-box
            padding: 8px 12px
            border-radius: 1px
            font-size: 12px

          .all
            color: rgb(255, 255, 255)
            background: rgb(0, 160, 220)

          .recommend
            margin-left: 8px
            color: rgb(77, 85, 93)
            background: rgba(0, 160, 220, 0.2)

          .debase
            margin-left: 8px
            color: rgb(77, 85, 93)
            background: rgba(77, 82, 93, 0.2)

        .types
          border-top-1px(rgba(7, 17, 27, 0.1))
          padding: 12px 0
          font-size: 0

          .icon-check_circle
            margin-right: 4px
            vertical-align: top
            font-size: 24px
            color: rgb(147, 153, 157)
            line-height: 24px

            &.active
              color: rgb(0, 160, 220)

          .text
            vertical-align: top
            font-size: 12px
            color: rgb(147, 153, 157)
            line-height: 24px

      .list
        padding: 0 18px

        .item
          width: 100%
          padding: 16px 0
          margin-bottom: 20px
          border-bottom-1px(rgba(7, 17, 27, 0.1))

          &:last-child
            border-none()

          .top
            display: inline-block
            width: 100%
            line-height: 12px

            .time
              float: left;
              font-size: 10px
              color: rgb(147, 153, 159)

            .user
              float: right;

              .text
                vertical-align: top
                font-size: 10px
                color: rgb(147, 153, 159)

              .avatar
                vertical-align: top
                width: 12px
                height: 12px
                border-radius: 50%


          .bottom
            .thumb
              vertical-align: top
              font-size: 12px
              line-height: 24px

              &.icon-thumb_up
                color: rgb(0, 160, 220)

              &.icon-thumb_down
                color: rgb(147, 153, 159)


            .content
              font-size: 12px
              color: rgb(7, 17, 27)
              line-height: 16px
</style>
