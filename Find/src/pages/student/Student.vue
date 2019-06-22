<template>
  <div class="bg">
    <div class="header">
      <div class="img_wrapper">
        <img v-lazy="img" class="img"/>
      </div>
      <div class="username">{{this.user.username}}</div>
    </div>
      <div class="fc" @click="info">
        <span class="iconfont info">&#xe6c9;</span>个人资料
      </div>
      <div class="fc" @click="update">
        <span class="iconfont other">&#xe68e;</span>修改资料
      </div>
      <div class="fc" @click="postJob">
        <span class="iconfont other">&#xe657;</span>发布兼职
      </div>
      <div class="fc" @click="posted">
        <span class="iconfont other">&#xe637;</span>已发布的兼职
      </div>
      <button class="loginOut" @click="loginOut">退出登录</button>
      <div class="foot">
        <div class="wrapper" @click="cor">
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
  name: 'Student',
  data () {
    return {
      doc: '',
      user: {},
      img: '/static/images/0.jpg'
    }
  },
  methods: {
    info () {
      this.$router.push('/info')
    },
    update () {
      this.$router.push('/stuUpdate')
    },
    postJob () {
      this.$router.push('/postJob')
    },
    loginOut () {
      localStorage.user = ''
      this.$store.state.user = ''
      this.$router.push('/')
    },
    cor () {
      this.$router.push('/')
    },
    job () {
      this.$router.push('/jobList')
    },
    posted () {
      this.$router.push('/posted')
    },
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
    height 11rem
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
        width 35%
        height 90%
        line-height 2.5rem
        margin-left .3rem
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
    .btm
      width 100%
      position absolute
      margin-top 2rem
      bottom 0
      height 1.55rem
      background #ffffff
      display flex
      flex-direction row
      .logo
        flex 1
        text-align center
        display flex
        flex-direction column
        .ic
          width 100%
          height 50%
          font-size .65rem
          padding-top .2rem
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
