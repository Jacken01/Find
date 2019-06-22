<template>
  <div class="all">
      <common-header>
        <div slot="title">发布兼职</div>
      </common-header>
      <div class="wrapper">
        <div class="text">职位：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="position"/>
      </div>
      <div class="wrapper">
        <div class="text">公司名称：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="shopname"/>
      </div>
      <div class="wrapper">
        <div class="text">薪资：</div>
        <input type="text" class="input" placeholder="点击输入"  v-model="money"/>
      </div>
      <div class="wrapper">
        <div class="text">工作内容：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="job"/>
      </div>
      <div class="wrapper">
        <div class="text">工作要求：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="requirement"/>
      </div>
      <div class="wrapper">
        <div class="text">工作时间：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="time"/>
      </div>
      <div class="wrapper">
        <div class="text">招收人数：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="people"/>
      </div>
      <div class="wrapper">
        <div class="text">联系方式：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="wechat"/>
      </div>
      <div class="wrapper">
        <div class="text">工作电话：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="telphone"/>
      </div>
      <div class="wrapper">
        <div class="text">工作地点：</div>
        <input type="text" class="input" placeholder="点击输入" v-model="address"/>
      </div>
      <div class="btn-wrapper">
        <button class="post" @click="post">发布</button>
      </div>
      <Dialog v-show="success" @sure="sure">
        <div slot="tips">发布成功</div>
      </Dialog>
      <Dialog v-show="nothing" @sure="sure">
        <div slot="tips">请输入完整信息</div>
      </Dialog>
  </div>
</template>

<script>
import Dialog from '../common/Dialog'
import CommonHeader from '../common/CommonHeader'
import axios from 'axios'
export default {
  name: 'PostJob',
  components: {
    CommonHeader,
    Dialog
  },
  data () {
    return {
      position: '',
      shopname: '',
      money: '',
      job: '',
      requirement: '',
      time: '',
      people: '',
      telphone: '',
      address: '',
      wechat: '',
      success: false,
      nothing: false,
      user: {}
    }
  },
  methods: {
    post () {
      if (this.position.length * this.shopname.length * this.money.length * this.job.length * this.requirement.length *
      this.time.length * this.people.length * this.telphone.length * this.address.length * this.wechat.length === 0) {
        this.nothing = true
        return false
      }
      axios.post('/shop/postjob', {
        userId: this.user._id,
        position: this.position,
        shopname: this.shopname,
        money: this.money,
        job: this.job,
        requirement: this.requirement,
        time: this.time,
        people: this.people,
        telphone: this.telphone,
        address: this.address,
        wechat: this.wechat
      }).then((response) => {
        let res = response.data
        if (res.status !== '0') {
          this.success = true
        } else {
          if (res.status === '0') {
            this.success = true
          }
        }
      })
    },
    sure () {
      this.success = false
      this.nothing = false
    }
  },
  created () {
    if (!this.$store.state.user) {
      this.$router.push('./')
    }
    this.user = JSON.parse(this.$store.state.user)
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
    .wrapper
      width 100%
      height 1rem
      background #ffffff
      display flex
      flex-direction row
      margin .2rem 0
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
        height .8rem
        overflow hidden
        margin .1rem .2rem
        overflow hidden
    .btn-wrapper
      width 100%
      height 100%
      background #ffffff
      margin-bottom 4rem
      .post
        width 60%
        height .8rem
        margin .4rem 20% 0 20%
        background #000000
        color #ffffff
        border-radius .32rem
</style>
