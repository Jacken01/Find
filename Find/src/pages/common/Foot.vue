<template>
  <div class="foot">
    <div class="wrapper" @click="cor">
      <span class="iconfont ic">&#xe60c;</span>
      <div class="text">社团</div>
    </div>
    <div class="wrapper" @click="job">
      <span class="iconfont ic">&#xe677;</span>
      <div class="text">兼职</div>
    </div>
    <div v-if="weatherLogin()" class="wrapper" @click="login">
      <span class="iconfont ic">&#xe67c;</span>
      <div class="text">登录</div>
    </div>
    <div v-else class="wrapper" @click="login">
      <span class="iconfont ic">&#xe606;</span>
      <div class="text">个人中心</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonFoot',
  methods: {
    cor () {
      this.$router.push('/')
    },
    job () {
      this.$router.push('/jobList')
    },
    login () {
      if (this.$store.state.user.length) {
        this.$router.push('/student')
      } else if (this.$store.state.cor.length) {
        this.$router.push('/cor')
      } else {
        this.$router.push('/login')
      }
    },
    weatherLogin () {
      if (this.$store.state.user.length || this.$store.state.cor.length) {
        return false
      } else {
        return true
      }
    }
  },
  activated () {
    this.weatherLogin()
  }
}
</script>

<style lang="stylus" scoped>
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
