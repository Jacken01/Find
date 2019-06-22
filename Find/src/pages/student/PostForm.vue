<template>
  <div class="all">
      <common-header>
        <div slot="title">社团报名</div>
      </common-header>
      <div class="wrapper">
        <div class="text">姓名：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="name"/>
      </div>
      <div class="wrapper">
        <div class="text">性别：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="sex"/>
      </div>
      <div class="wrapper">
        <div class="text">年级专业：</div>
        <input type="text" class="input" placeholder="点击输入"  v-model="major"/>
      </div>
      <div class="wrapper">
        <div class="text">学号：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="stu_number"/>
      </div>
      <div class="wrapper">
        <div class="text">联系电话：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="telphone"/>
      </div>
      <div class="btn-wrapper">
        <button class="post" @click="post">报名</button>
      </div>
      <Dialog v-show="success" @sure="sure">
        <div slot="tips">报名成功</div>
      </Dialog>
  </div>
</template>

<script>
import Dialog from '../common/Dialog'
import CommonHeader from '../common/CommonHeader'
import axios from 'axios'
export default {
  name: 'PostForm',
  data () {
    return {
      corId: '',
      name: '',
      sex: '',
      major: '',
      stu_number: '',
      telphone: '',
      user: {},
      success: false
    }
  },
  components: {
    CommonHeader,
    Dialog
  },
  methods: {
    post () {
      axios.post('/form/create', {
        corId: this.corId,
        name: this.name,
        sex: this.sex,
        major: this.major,
        stu_number: this.stu_number,
        telphone: this.telphone
      }).then((response) => {
        let res = response.data
        if (res.status !== '0') {
          this.success = false
        } else {
          if (res.status === '0') {
            this.success = true
          }
        }
      })
    },
    sure () {
      this.success = false
    },
    initialize () {
      this.user = JSON.parse(this.$store.state.user)
    }
  },
  created () {
    this.initialize()
    this.corId = this.$route.query.corId
    this.name = this.user.username
    this.sex = this.user.sex
    this.major = this.user.major
    this.stu_number = this.user.stu_number
    this.telphone = this.user.telphone
  }
}
</script>

<style lang="stylus" scoped>
  .all
    width 100%
    height 100%
    overflow hidden
    .header
      width 100%
      height 1rem
      background #ffffff
      line-height 1rem
      font-size .4rem
      text-align center
      font-weight: bold
      margin-bottom .7rem
    .wrapper
      width 100%
      height 1rem
      background #ffffff
      display flex
      flex-direction row
      .text
        flex 1.5
        height 100%
        font-size .3rem
        font-weight: bold
        line-height 1rem
        padding-left .5rem
      .input
        width 100%
        flex 3.5
        height 100%
        line-height 1rem
        overflow hidden
        padding-right .3rem
    .btn-wrapper
      width 100%
      height 100%
      background #ffffff
      .post
        width 60%
        height .8rem
        margin .4rem 20% 0 20%
        background #000000
        color #ffffff
        border-radius .32rem
    .success
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
