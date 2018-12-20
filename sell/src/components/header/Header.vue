<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar"><img :src="seller.avatar" width="64" height="64"></div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description"></div>
        <div class="supports"></div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['seller']
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl';

  .header
    background: #ccc
    .content-wrapper
      padding: 24px 12px 18px 24px
      .avatar
        display: inline-block
        vertical-align top
        margin-right 16px
      .content
        display: inline-block
        font-size 0
        .title
          .brand
            bg-image('brand')
            width: 30px
            height: 18px
          .name
            font-size: 16px
            color: rgb(255, 255, 255)
            line-height: 18px


</style>
