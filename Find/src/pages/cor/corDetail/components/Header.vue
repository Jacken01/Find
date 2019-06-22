<template>
  <div class="header">
    <div class="left_wrapper" @click="toCor">
      <span class="iconfont ic">&#xe837;</span>
    </div>
    <div class="right_wrapper">
      <span class="iconfont ic_right">&#xe60e;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toCor () {
      this.$router.push('./')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    wdith 100%
    height 1rem
    background #ffffff
    border-bottom .02rem black solid
    box-sizing border-box
    position relative
    .left_wrapper
      width 1rem
      height 1rem
      text-align center
      line-height 1rem
      .ic
        font-size .5rem
    .right_wrapper
      width 1rem
      height 1rem
      position absolute
      right 0
      top 0
      bottom 0
      text-align center
      line-height 1rem
      .ic_right
        font-size .5rem
</style>
