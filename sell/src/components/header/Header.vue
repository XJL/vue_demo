<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar"><img :src="seller.avatar" width="64" height="64"></div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">
      {{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <div class="detail" v-show="detailShow" transition="fade">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="name">{{seller.name}}</div>
          <div class="score">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="item in seller.supports">
              <span class="icon" :class="classMap[item.type]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="detailClose">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';

  export default {
    created () {
      this.classMap = [
        'decrease', 'discount', 'special', 'invoice', 'guarantee'
      ];
    },
    props: ['seller'],
    methods: {
      showDetail () {
        this.detailShow = true;
      },
      detailClose () {
        this.detailShow = false;
      }
    },
    data: function () {
      return {
        detailShow: false
      };
    },
    components: {
      star
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl';

  .header
    position: relative
    height: 134px
    overflow hidden
    background: rgba(7, 17, 27, 0.5)

    .content-wrapper
      padding: 24px 12px 18px 24px
      position: relative

      .avatar
        display: inline-block
        margin-right 16px
        vertical-align top

        img
          border-radius 2px

      .content
        display: inline-block
        font-size 0

        .title
          .brand
            margin-right 6px
            vertical-align bottom
            bg-img('brand')
            background-size 30px 18px
            width: 30px
            height: 18px

          .name
            font-size: 16px
            font-weight bold
            color: rgb(255, 255, 255)
            line-height: 18px

        .description
          margin-top 8px
          line-height 12px
          font-size 12px
          color: rgb(255, 255, 255)
          font-weight 200

        .supports
          margin-top 10px

          .icon
            display: inline-block
            vertical-align: top
            margin-right 4px
            margin-top 1px
            width 12px
            height 12px
            background-size 12px 12px
            &.decrease
              bg-img('decrease_1')

            &.discount
              bg-img('discount_1')

            &.guarantee
              bg-img('guarantee_1')

            &.invoice
              bg-img('invoice_1')

            &.special
              bg-img('special_1')

          .text
            font-size 10px
            color: rgb(255, 255, 255)
            font-weight 200
            line-height: 14px
            vertical-align: top

      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        background: rgba(0, 0, 0, 0.2)
        padding: 0 8px
        height: 24px
        text-align center
        border-radius 14px
        color: rgb(255, 255, 255)
        font-weight 200

        .count
          font-size 10px
          line-height 24px

        .icon-keyboard_arrow_right
          font-size 10px
          line-height 24px

    .bulletin-wrapper
      position: relative
      height: 28px
      line-height 28px
      padding: 0 22px 0 12px
      background: rgba(7, 17, 27, 0.2)
      white-space nowrap
      overflow: hidden
      text-overflow ellipsis
      color: rgb(255, 255, 255)
      // font-size 0

      .bulletin-title
        display: inline-block
        margin-top 8px
        vertical-align: top
        width: 22px
        height: 12px
        bg-img('bulletin')
        background-size 22px 12px
        background-repeat no-repeat

      .bulletin-text
        vertical-align: top
        font-size 10px
        color: rgb(255, 255, 255)
        font-weight 200
        margin-left 8px

      .icon-keyboard_arrow_right
        position: absolute
        top: 8px
        right: 10px
        font-size 10px
        color: rgb(255, 255, 255)

    .background
      img
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index: -1;
        filter: blur(10px)
    .detail
      position: fixed
      top: 0
      left: 0
      z-index: 100
      width: 100%
      height: 100%
      background: rgba(7, 17, 27, 0.8)
      overflow auto
      transition: all 0.5s
      backdrop-filter: blur(10px)
      &.fade-transition
        opacity: 1
        background: rgba(7, 17, 27, 0.8)
      &.fade-enter, &.fade-leave
        opacity: 0
        background: rgba(7, 17, 27, 0.8)
      .detail-wrapper
        min-height: 100%
        width: 100%

        .detail-main
          margin-top: 64px
          padding-bottom: 96px
          .name
            font-size 16px
            color: rgb(255,255,255)
            font-weight 700
            line-height 16px
            text-align center
          .score
            margin-top: 16px
            text-align: center
          .title
            display: flex
            margin: 28px auto 24px auto
            width: 80%
            .line
              position: relative
              top: -6px
              flex: 1
              border-bottom 1px solid rgba(255, 255, 255, 0.2)
            .text
              margin: 0 12px
              font-size: 18px
              font-weight: 700
              color: rgb(255, 255, 255)
          .supports
            width: 80%
            margin: 0 auto
            .support-item
              padding: 0 12px
              margin-bottom 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                margin-right 6px
                vertical-align: top
                width: 16px
                height: 16px
                background-repeat: no-repeat
                background-size: 16px 16px
                &.decrease
                  bg-img('decrease_2')
                &.discount
                  bg-img('discount_2')
                &.special
                  bg-img('special_2')
                &.invoice
                  bg-img('invoice_2')
                &.guarantee
                  bg-img('guarantee_2')
              .text
                font-size: 12px
                color: rgb(255, 255, 255)
                font-weight: 200
                line-height: 16px

          .bulletin
            width: 80%
            margin: 0 auto
            .content
              font-size: 12px
              font-weight: 200
              color: rgb(255, 255, 255)
              line-height: 24px
      .detail-close
        position: relative
        margin: -64px auto 0 auto
        clear: both
        width: 32px
        height: 32px
        font-size 32px
        color: rgba(255,255,255,0.5)
</style>
