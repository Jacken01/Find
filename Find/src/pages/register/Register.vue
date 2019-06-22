<template>
  <div class="bg">
    <span class="iconfont" @click="back">&#xe837;</span>
    <div class="header">
      注册
    </div>
    <div class="input_wrapper">
      <div>
        <input placeholder="用户名" type="text" class="input" v-model="username"/>
      </div>
      <div>
        <input placeholder="密码" type="password" class="input" v-model="password"/>
      </div>
      <div>
        <input placeholder="年级专业(如:16级软件工程)" type="text" class="input" v-model="major"/>
      </div>
      <div>
        <input placeholder="联系电话" type="text" class="input" v-model="telphone"/>
      </div>
      <div>
        <input placeholder="学号" type="text" class="input" v-model="stu_number"/>
      </div>
    </div>
    <div class="tip" v-show="registered">用户名已存在</div>
    <div class="tip" v-show="nothing">请输入完整信息</div>
    <div class="tip" v-show="wrong">服务器异常，请重新注册</div>
    <div class="btn_wrapper">
      <button class="btn" @click="check">注册</button>
      <router-link to="/login" tag="div">
        <div class="login">前往登录</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      major: '',
      telphone: '',
      stu_number: '',
      registered: false,
      nothing: false,
      wrong: false
    }
  },
  methods: {
    register () {
      axios.post('/users/register', {
        username: this.username,
        password: this.password,
        major: this.major,
        telphone: this.telphone,
        stu_number: this.stu_number
      }).then((response) => {
        let res = response.data
        if (res.status !== '0') {
          this.wrong = true
        } else {
          if (res.status === '0') {
            this.nothing = false
            this.wrong = false
            this.$router.push('/login')
          }
        }
      })
    },
    check () {
      if (!this.username.length || !this.password.length || !this.major.length ||
        !this.telphone.length || !this.stu_number.length) {
        this.nothing = true
        return false
      }
      axios.post('/users/check', {
        username: this.username
      }).then((response) => {
        let res = response.data
        if (res.status === '1') {
          this.registered = true
          return false
        } else {
          if (res.status === '2') {
            this.register()
          }
        }
      })
    },
    back () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    display flex
    flex-direction column
    position relative
    height 13rem
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
        margin-bottom .3rem
        width 60%
        overflow hidden
        height .8rem
        border-bottom .02rem solid black
        overflow hidden
        padding: 0 .3rem
        line-height: .62rem
        text-align: center
      .radio_wrapper
        margin-bottom .3rem
        text-align left
        .radio
          margin-left 1.2rem
     .tip
       color red
       text-align center
    .btn_wrapper
      text-align center
      text-decoration underline
      position absolute
      bottom 3rem
      left 0
      right 0
      .btn
        width 4rem
        height .8rem
        border-radius .32rem
        background #000000
        color #ffffff
      .login
        margin-top .3rem
</style>
