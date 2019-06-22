<template>
  <div class="header">
    <div class="left_wrapper" @click="toCor">
      <span class="iconfont">&#xe837;</span>
    </div>
    <div class="text">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  methods: {
    toCor () {
      this.$router.go(-1)
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
    text-align center
    z-index 99
    .left_wrapper
      width 1rem
      position absolute
      top 0
      left 0
      bottom 0
      text-align center
      line-height 1rem
      .iconfont
        font-size .5rem
    .text
      font-size .4rem
      line-height 1rem
      font-weight bold
</style>
