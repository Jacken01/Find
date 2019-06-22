<template>
  <div class="bg">
    <span class="iconfont" @click="user">&#xe837;</span>
    <div class="header">
      社团登录
    </div>
    <div class="input_wrapper">
      <div>
        <input placeholder="社团名称" type="text" class="input" v-model="corname"/>
      </div>
      <div>
        <input placeholder="密码" type="password" class="input" v-model="password"/>
      </div>
    </div>
    <div class="tip" v-show="wrong">账号或密码不正确</div>
    <div class="tip" v-show="nothing">账号和密码均不能为空</div>
    <div class="btn_wrapper">
      <button class="btn" @click="corLogin">登录</button>
    </div>
    <div class="other">
      <div class="o" @click.prevent="user">返回用户登录</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CorLogin',
  data () {
    return {
      corname: '',
      password: '',
      nothing: false,
      wrong: false
    }
  },
  methods: {
    corLogin () {
      if (!this.corname.length || !this.password.length) {
        this.nothing = true
        return false
      } else {
        this.nothing = false
      }
      axios.post('/cor/login', {
        corname: this.corname,
        password: this.password
      }).then((response) => {
        let res = response.data
        if (res.status !== '0') {
          this.wrong = true
        } else {
          if (res.status === '0') {
            this.nothing = false
            this.wrong = false
            let result = res.result.doc
            this.$store.dispatch('changeCor', result)
            this.$router.push('/cor')
          }
        }
      })
    },
    user () {
      this.$router.push('/login')
    },
    autoLogin () {
      if (localStorage.cor) {
        this.corname = JSON.parse(localStorage.cor).corname
        this.password = JSON.parse(localStorage.cor).password
        this.corLogin()
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
        margin-bottom .5rem
        width 60%
        overflow hidden
        height .8rem
        border-bottom .02rem solid black
        text-align center
    .tip
      color red
      text-align center
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
        color #ffffff
        margin-bottom .3rem
    .other
      width 60%
      margin 0 20%
      height auto
      display flex
      flex-direction row
      position absolute
      bottom 1.5rem
      .o
        flex 1
        text-align center
        margin 0 .5rem
        text-decoration underline
</style>
