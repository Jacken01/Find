<template>
  <div class="bg">
    <span class="iconfont" @click="back">&#xe837;</span>
    <div class="header">
      登录
    </div>
    <div class="input_wrapper">
      <div>
        <input placeholder="用户名" type="text" class="input" v-model="username"/>
      </div>
      <div>
        <input placeholder="密码" type="password" class="input" v-model="password"/>
      </div>
    </div>
    <div class="tip" v-show="wrong">账号或密码不正确</div>
    <div class="tip" v-show="nothing">账号和密码均不能为空</div>
    <div class="btn_wrapper">
      <button class="btn" @click="login">登录</button>
    </div>
    <div class="other">
      <div class="o" @click="register">前往注册</div>
      <div class="o" @click="cor">社团登录</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      nothing: false,
      wrong: false,
      result: ''
    }
  },
  methods: {
    login () {
      if (!this.username.length || !this.password.length) {
        this.nothing = true
        return
      } else {
        this.nothing = false
      }
      axios.post('/users/login', {
        username: this.username,
        password: this.password
      }).then((response) => {
        let res = response.data
        if (res.status === '12') {
          this.nothing = false
          this.wrong = true
        } else {
          if (res.status === '0') {
            this.$store.state.userLogin = true
            this.nothing = false
            this.wrong = false
            let result = res.result.doc
            this.$store.dispatch('changeUser', result)
            this.$router.push('/student')
          }
        }
      })
    },
    register () {
      this.$router.push('/register')
    },
    cor () {
      this.$router.push('/corLogin')
    },
    back () {
      this.$router.push('./')
    },
    autoLogin () {
      if (localStorage.user) {
        this.username = JSON.parse(localStorage.user).username
        this.password = JSON.parse(localStorage.user).password
        this.login()
      }
    }
  },
  created () {
    this.autoLogin()
  },
  activated () {
    this.autoLogin()
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    display flex
    flex-direction column
    position relative
    height 10rem
    .header
      width 70%
      height 1rem
      text-align center
      margin .5rem 15%
      font-size .5rem
      line-height 1rem
      font-weight bold
    .iconfont
      position absolute
      width 0
      top .5rem
      left .4rem
      bottom 0
      text-align center
      line-height 1rem
      font-size .5rem
    .input_wrapper
      text-align center
      .input
        text-align center
        margin-bottom .02rem
        width 60%
        overflow hidden
        height .8rem
        border-bottom .02rem solid black
    .tip
      width 100%
      text-align center
      margin .3rem 0
      color red
    .btn_wrapper
      text-align center
      text-decoration underline
      position absolute
      bottom 3.5rem
      left 0
      right 0
      .btn
        width 4rem
        height .8rem
        margin-top 1rem
        border-radius .32rem
        background #000000
        margin-bottom .3rem
        color #ffffff
    .other
      width 60%
      margin 0 20%
      height auto
      display flex
      flex-direction row
      position absolute
      bottom 2rem
      .o
        flex 1
        text-align center
        margin 0 .3rem
        text-decoration underline
</style>
