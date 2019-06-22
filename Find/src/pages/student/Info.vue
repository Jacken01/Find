<template>
  <div class="bg">
    <common-header>
      <div slot="title">个人信息</div>
    </common-header>
    <div class="from">
      <div class="wrapper">
        <div class="text-wrapper">用户名:</div>
        <div class="text">{{this.user.username}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">学号：</div>
        <div class="text">{{this.user.stu_number}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">年级专业：</div>
        <div class="text">{{this.user.major}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">联系电话：</div>
        <div class="text">{{this.user.telphone}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
export default {
  name: 'Info',
  components: {
    CommonHeader
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    initialize () {
      this.user = JSON.parse(this.$store.state.user)
    }
  },
  created () {
    this.initialize()
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    height 100%
    width 100%
    .title
      width 100%
      height 1.3rem
      background #ffffff
      text-align center
      line-height 1.3rem
      font-size .4rem
      font-weight bold
    .from
      height 9rem
      width 100%
      background #ffffff
      position absolute
      top 3rem
      .wrapper
        width 100%
        height 1rem
        display flex
        flex-direction row
        border-bottom .01rem black solid
        .text-wrapper
          width 20%
          height 100%
          line-height 1rem
          text-align center
          padding-left .3rem
        .text
          width 70%
          height 1rem
          overflow hidden
          line-height 1rem
          text-align center
</style>
