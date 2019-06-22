<template>
  <Fade>
    <div class="bg">
      <div class="wrapper">
        <div class="box">
          <div class="text">
            <slot name="tips"></slot>
          </div>
        <button class="btn" @click="sure">确定</button>
        </div>
      </div>
    </div>
  </Fade>
</template>

<script>
import Fade from './FadeAnimation'
export default {
  name: 'Dialog',
  components: {
    Fade
  },
  methods: {
    sure () {
      this.$emit('sure')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    display flex
    flex-direction column
    justify-content: center
    position fixed
    z-index 99
    top 0
    left 0
    right 0
    bottom 0
    .wrapper
      wdith 100%
      height 4rem
      text-align center
      .box
        width 4rem
        height 4rem
        background #ffffff
        margin 0 auto
        border-radius .32rem
        border .02rem #000000 solid
        .text
          line-height 2rem
          font-size .45rem
          font-weight bold
        .btn
          width 2rem
          height .6rem
          border .02rem #000000 solid
          border-radius .32rem
          background #000
          margin-top .6rem
          color #ffffff
</style>
