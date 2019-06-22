<template>
  <div class="bg">
    <common-header>
      <div slot="title">编辑信息</div>
    </common-header>
    <div class="from">
      <div class="wrapper">
        <div class="text-wrapper">用户名:</div>
        <input class="input" v-model="username"/>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">学号：</div>
        <input class="input" v-model="stu_number"/>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">年级专业：</div>
        <input class="input" v-model="major"/>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">联系电话：</div>
        <input class="input" v-model="telphone"/>
      </div>
      <button @click="update" class="update">确定修改</button>
    </div>
    <Dialog v-show="success" @sure="sure">
      <div slot="tips">修改成功</div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '../common/Dialog'
import CommonHeader from '../common/CommonHeader'
import axios from 'axios'
export default {
  name: 'StuUpdate',
  components: {
    CommonHeader,
    Dialog
  },
  data () {
    return {
      username: '',
      stu_number: '',
      major: '',
      telphone: '',
      user: {},
      success: false
    }
  },
  created () {
    this.initialize()
    this.username = this.user.username
    this.stu_number = this.user.stu_number
    this.major = this.user.major
    this.telphone = this.user.telphone
  },
  methods: {
    update () {
      axios.post('/users/update', {
        username: this.username,
        major: this.major,
        telphone: this.telphone,
        stu_number: this.stu_number,
        sex: this.sex
      }).then((response) => {})
      let newUser = {
        _id: this.user._id,
        username: this.username,
        major: this.major,
        telphone: this.telphone,
        stu_number: this.stu_number
      }
      this.$store.dispatch('changeUser', newUser)
      this.success = true
    },
    sure () {
      this.success = false
    },
    initialize () {
      this.user = JSON.parse(this.$store.state.user)
    }
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
        .input
          width 70%
          height 80%
          margin .1rem
          overflow hidden
          padding 0 .2rem
          text-align center
    .update
      width 50%
      height .8rem
      margin .8rem 25%
      border-radius .32rem
      background #000000
      color #ffffff
      font-weight bold
      color #ffffff
    .noLogin
      width 60%
      height 4rem
      margin 0 20%
      position absolute
      top 4.5rem
      background #ffffff
      border-radius .32rem
      display flex
      flex-direction column
      z-index 99
      border .02rem #000000 solid
      .text
        width 100%
        height 1rem
        line-height 1rem
        margin-top .7rem
        text-align center
        font-size .45rem
      .sure
        width 60%
        height .8rem
        margin 1rem 20% 0 20%
        border-radius .32rem
        background #4D9DF2
</style>
