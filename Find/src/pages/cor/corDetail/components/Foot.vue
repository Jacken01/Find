<template>
  <div class="bg" >
    <button @click="post" class="btn">立即报名</button>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  methods: {
    post () {
      this.$emit('post')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    position absolute
    height 1rem
    width 100%
    bottom 0
    left 0
    right 0
    z-index 99
    .btn
      width 100%
      height 100%
      background #000000
      color #ffffff
      line-height 1rem
      text-align center
      font-size .35rem
</style>
