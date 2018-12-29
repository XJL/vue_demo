<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price">&#165;0</div>
        <div class="desc">另需配送费&#165;4元</div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
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
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: rgba(255, 255, 255, 0.4)
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
        .desc
          flex: 1
          display: inline-block
          vertical-align: top
          margin-top: 12px
          font-size: 16px
          font-weight: 700
          color: rgba(255, 255, 255, 0.4)
          line-height: 24px
          box-sizing: border-box
          padding: 0 12px
      .content-right
        flex: 0 0 105px
        background: red
</style>
