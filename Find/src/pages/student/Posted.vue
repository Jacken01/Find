<template>
  <div class="bg">
    <common-header>
      <div slot="title">已发布兼职</div>
    </common-header>
    <div class="list" ref="list">
      <div>
        <div class="wrapper" v-for="item of postedList" :key="item._id">
          <div class="left" @click="detail(item._id)">
            <div class="position">{{item.position}}</div>
            <div class="address">
            <span class="iconfont">&#xe610;</span>&nbsp;&nbsp;{{item.address}}
            </div>
            <div class="money">{{item.money}}</div>
          </div>
          <div class="right">
            <span class="iconfont" @click="showConfirm(item._id)">&#xe612;</span>
          </div>
        </div>
      </div>
      <Fade>
      <div class="box_wrapper" v-show="confirm">
        <div class="top">是否删除</div>
        <div class="btm">
          <span class="left" @click="dele">确定</span>
          <span class="right" @click="cancle">取消</span>
        </div>
      </div>
      </Fade>
    </div>
  </div>
</template>
<script>
import Fade from '../common/FadeAnimation'
import Bscroll from 'better-scroll'
import axios from 'axios'
import CommonHeader from '../common/CommonHeader'
export default {
  name: 'Posted',
  data () {
    return {
      postedList: [],
      confirm: false,
      selectId: '',
      user: {}
    }
  },
  methods: {
    detail (shopId) {
      this.$router.push({
        path: 'jobDetail',
        query: { shopId: shopId }
      })
    },
    showConfirm (selectId) {
      this.confirm = true
      this.selectId = selectId
    },
    dele () {
      this.confirm = false
      axios.get('/shop/delete?deleteId=' + this.selectId).then((response) => {
        let res = response.data
        if (res.status === '1') {
          this.selectId = ''
          this.getData()
        }
      })
    },
    cancle () {
      this.confirm = false
    },
    getData () {
      axios.get('/shop/posted?userId=' + this.user._id).then((response) => {
        let res = response.data
        this.postedList = res.result.doc
      })
    },
    initialize () {
      this.user = JSON.parse(this.$store.state.user)
    }
  },
  components: {
    CommonHeader,
    Fade
  },
  created () {
    this.initialize()
    this.getData()
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.list, {click: true, tap: true})
  }
}
</script>
<style lang="stylus" scoped>
  .list
    position absolute
    top 1rem
    left 0
    right 0
    bottom 0
    z-index -1
    .wrapper
      width 100%
      height 1.8rem
      display flex
      flex-direction row
      box-sizing border-box
      padding 0 .4rem
      border-bottom .02rem #E5E3E3 solid
      .left
        width 80%
        height 100%
        .position
          width 100%
          height .8rem
          padding-top .25rem
          box-sizing border-box
          overflow hidden
          font-size .37rem
          font-weight bold
          white-space: nowrap
          text-overflow:ellipsis
        .address
          width 100%
          height .5rem
          overflow hidden
          color #B2ADAD
          white-space: nowrap
          text-overflow:ellipsis
        .money
          width 100%
          height .5rem
          overflow hidden
          color red
          font-weight bold
          font-size .32rem
      .right
        width 20%
        height 100%
        text-align center
        line-height 1.8rem
        color red
        .iconfont
          font-size .6rem
    .box_wrapper
      position absolute
      top 45%
      bottom 55%
      left 0
      right 0
      width 5rem
      height 2rem
      margin auto
      display flex
      flex-direction column
      box-shadow .02rem .02rem .3rem #888888
      background #ffffff
      z-index 100
      .top
        width 100%
        height 1rem
        line-height 1rem
        text-align center
        font-size .35rem
        font-weight bold
        border-bottom .02rem #000000 solid
      .btm
        width 100%
        height 1rem
        display flex
        flex-direction row
        .left
          flex 1
          height 100%
          text-align center
          line-height 1rem
          font-size .3rem
          border-right .02rem #000000 solid
          font-weight bold
        .right
          flex 1
          height 100%
          text-align center
          line-height 1rem
          font-size .3rem
          color red
          font-weight bold
</style>
