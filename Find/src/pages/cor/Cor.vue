<template>
  <div class="bg">
    <div class="header">
      <div class="img_wrapper">
        <img :src="this.cor.img" class="img"/>
      </div>
      <div class="username">{{this.cor.corname}}</div>
    </div>
      <div class="fc" @click="corInfo">
        <span class="iconfont info">&#xe6c9;</span>社团资料
      </div>
      <div class="fc" @click="corUpdate">
        <span class="iconfont other">&#xe68e;</span>修改资料
      </div>
      <div class="fc" @click="corForm">
        <span class="iconfont other">&#xe637;</span>查看报名名单
      </div>
      <button class="loginOut" @click="loginOut">退出登录</button>
    <div class="foot">
        <div class="wrapper" @click="ToCor">
          <span class="iconfont ic">&#xe60c;</span>
          <div class="text">社团</div>
        </div>
        <div class="wrapper" @click="job">
          <span class="iconfont ic">&#xe677;</span>
          <div class="text">兼职</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Cor',
  data () {
    return {
      cor: {}
    }
  },
  methods: {
    corInfo () {
      this.$router.push('/corInfo')
    },
    corUpdate () {
      this.$router.push('/corUpdate')
    },
    corForm () {
      this.$router.push('/corForm')
    },
    loginOut () {
      localStorage.cor = ''
      this.$store.state.cor = ''
      this.$router.push('/')
    },
    ToCor () {
      this.$router.push('/')
    },
    job () {
      this.$router.push('/jobList')
    },
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
    height 10rem
    width 100%
    background #E6E6E6
    position relative
    .header
      width 100%
      height 2.5rem
      color #000000
      background #ffffff
      margin-bottom .5rem
      display flex
      flex-direction row
      .img_wrapper
        width 2.3rem
        height 2rem
        line-height 2.5rem
        margin-left .6rem
        .img
          width 100%
          height 100%
      .username
        width 60%
        height 100%
        overflow hidden
        padding-left .8rem
        line-height 2.5rem
        font-size .6rem
    .fc
      width 90%
      height .9rem
      color #000000
      line-height .9rem
      padding 0 5%
      background #ffffff
      border-bottom .02rem black solid
      display flex
      flex-direction row
      .info
        font-size .5rem
      .other
        font-size .35rem
        margin-right .15rem
    .loginOut
      width 70%
      height 1rem
      margin .9rem 15%
      background red
      color #ffffff
      font-size .4rem
      font-wight bold
    .foot
      width 100%
      height 1.5rem
      border-bottom .02rem #000000 solid
      display flex
      flex-direction row
      background #ffffff
      .wrapper
        flex 1
        height 100%
        text-align center
        .ic
          width 100%
          height 1rem
          font-size .65rem
          line-height 1rem
        .text
          width 100%
          height .5rem
          line-height .5rem
</style>
