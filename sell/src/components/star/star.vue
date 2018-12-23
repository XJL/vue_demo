<template>
  <div class="star">
    <span v-for="itemClass in itemClasses" class="star-item" :class="{[itemClass]: true, [starType]: true}" track-by="$index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';

  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      itemClasses () {
        let arr = [];
        const on = Math.floor(this.score);
        const off = LENGTH - on;
        const descimal = Math.floor(this.score * 2) / 2 - on;
        for (let i = 0; i < on; i++) {
          arr.push(CLS_ON);
        }
        if (descimal !== 0) {
          arr.push(CLS_HALF);
        }
        for (let i = 0; i < off; i++) {
          arr.push(CLS_OFF);
        }
        return arr;
      },
      starType () {
        return 'star-' + this.size;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl";

.star
  display: inline-block
  .star-item
    display inline-block
    background-repeat no-repeat
    &+.star-item
      margin-left: 16px
    &.star-48
      width: 24px
      height: 24px
      background-size: 24px 24px
      &.on
        bg-img('star24_on')
      &.off
        bg-img('star24_off')
      &.half
        bg-img('star24_half')
    &.star-36
      width: 18px
      height: 18px
      background-size: 18px 18px
      &.on
        bg-img('star36_on')
      &.off
        bg-img('star36_off')
      &.half
        bg-img('star36_half')
    &.star-24
      width: 12px
      height: 12px
      background-size: 12px 12px
      &.on
        bg-img('star24_on')
      &.off
        bg-img('star24_off')
      &.half
        bg-img('star24_half')
</style>
