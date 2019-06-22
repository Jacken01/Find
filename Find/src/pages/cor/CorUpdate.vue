<template>
  <div class="bg">
    <common-header>
      <div slot="title">编辑社团信息</div>
    </common-header>
    <div class="from">
      <div class="wrapper">
        <div class="text-wrapper">社团宣言：</div>
        <input class="input" v-model="title"/>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">社团简介：</div>
        <input class="input" v-model="content"/>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">招聘要求：</div>
        <input class="input" v-model="requirement"/>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">招聘时间：</div>
        <input class="input" v-model="time"/>
      </div>
      <div class="wrapper">
        <div class="text-wrapper">招聘部门：</div>
        <input class="input" v-model="department"/>
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
  name: 'CorUpdate',
  components: {
    CommonHeader,
    Dialog
  },
  data () {
    return {
      cor: {},
      corId: '',
      corname: '',
      english: '',
      title: '',
      content: '',
      requirement: '',
      time: '',
      department: '',
      img: '',
      success: false
    }
  },
  created () {
    this.initialize()
    this.corId = this.cor.corId
    this.corname = this.cor.corname
    this.english = this.cor.english
    this.title = this.cor.title
    this.content = this.cor.content
    this.requirement = this.cor.requirement
    this.time = this.cor.time
    this.department = this.cor.department
    this.img = this.cor.img
  },
  methods: {
    update () {
      axios.post('/cor/update', {
        corId: this.corId,
        corname: this.corname,
        title: this.title,
        content: this.content,
        requirement: this.requirement,
        time: this.time,
        department: this.department,
        img: this.img
      }).then((response) => {})
      let newCor = {
        corId: this.corId,
        corname: this.corname,
        title: this.title,
        english: this.english,
        content: this.content,
        requirement: this.requirement,
        time: this.time,
        department: this.department,
        img: this.img
      }
      this.$store.dispatch('changeCor', newCor)
      this.success = true
    },
    sure () {
      this.success = false
    },
    initialize () {
      this.cor = JSON.parse(this.$store.state.cor)
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
