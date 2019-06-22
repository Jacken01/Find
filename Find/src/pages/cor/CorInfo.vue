<template>
  <div class="bg">
    <common-header>
      <div slot="title">社团信息</div>
    </common-header>
    <div class="from">
      <div class="wrapper">
        <div class="text-wrapper">社团名称:</div>
        <div class="text">{{this.cor.corname}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">英文名称：</div>
        <div class="text">{{this.cor.english}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">社团宣言：</div>
        <div class="text">{{this.cor.title}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">社团简介：</div>
        <div class="text">{{this.cor.content}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">招聘要求：</div>
        <div class="text">{{this.cor.requirement}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">招新时间：</div>
        <div class="text">{{this.cor.time}}</div>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">招新部门：</div>
        <div class="text">{{this.cor.department}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
export default {
  name: 'CorInfo',
  data () {
    return {
      cor: {}
    }
  },
  components: {
    CommonHeader
  },
  methods: {
    initialize () {
      this.cor = JSON.parse(this.$store.state.cor)
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
