<template>
  <div class="bs" ref="wrapper">
    <div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in list.slide" :key="index">
            <div class="swiper_wrapper">
              <img v-lazy="item" class="img">
            </div>
          </swiper-slide>
        </swiper>
        <div class="content_wrapper">
          <div class="corname">{{list.corname}}</div>
          <div class="content">&nbsp;&nbsp;&nbsp;&nbsp;{{list.content}}</div>
        </div>
        <div class="ic_wrapper">
            <div class="icon">
              <span class="iconfont ic">&#xe60a;</span>
              <div class="text">招新时间</div>
            </div>
            <div class="icon">
              <span class="iconfont ic">&#xe6ae;</span>
              <div class="text">招新部门</div>
            </div>
            <div class="icon">
              <span class="iconfont ic">&#xe62c;</span>
              <div class="text">招聘要求</div>
            </div>
        </div>
        <div class="bottom_wrapper">
          <div class="time">
            <div class="left">招新时间:</div>
            <div class="right">{{list.time}}</div>
          </div>
          <div class="time">
            <div class="left">招新部门:</div>
            <div class="right">{{list.department}}</div>
          </div>
          <div class="requirement">
            <div class="r_top">招聘条件:</div>
            <div class="r_btm">&nbsp;&nbsp;&nbsp;&nbsp;{{list.requirement}}</div>
          </div>
        </div>
    </div>
    <Foot v-show="showfoot" @post="handlePost"></Foot>
    <Dialog v-show="noLogin" @sure="sure">
      <div slot="tips">请先登录</div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/pages/common/Dialog'
import axios from 'axios'
import Foot from './Foot'
import Bscroll from 'better-scroll'
export default {
  name: 'Content',
  components: {
    Foot,
    Dialog
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000
      },
      corId: '',
      list: [],
      noLogin: false
    }
  },
  computed: {
    showfoot () {
      return !this.$store.state.cor.length
    }
  },
  methods: {
    handlePost () {
      if (!this.$store.state.user.length) {
        this.noLogin = true
      } else {
        let corId = this.corId
        this.$router.push({path: 'postForm', query: { corId: corId }})
      }
    },
    getData () {
      axios.post('/cor/detail', {
        corId: this.corId
      }).then((response) => {
        this.list = response.data.result.doc
      })
    },
    sure () {
      this.noLogin = false
    }
  },
  created () {
    this.corId = this.$route.query.corId
    this.getData()
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {mouseWheel: true})
  },
  activated () {
    if (this.$route.query.corId !== this.corId) {
      this.corId = this.$route.query.corId
      this.getData()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bs
    position: absolute
    overflow hidden
    top 1rem
    left 0
    right 0
    bottom 0
    background #EAEAEA
    .swiper_wrapper
      width 100%
      height 4rem
      .img
        width 100%
        height 100%
    .content_wrapper
      wdith 100%
      height 4rem
      background #ffffff
      margin-bottom .2rem
      .corname
        width 90%
        height .9rem
        line-height 1rem
        margin 0 5%
        text-align center
        font-size .4rem
        font-weight bold
      .content
        width 90%
        height 100%
        margin .2rem 5%
        overflow hidden
        line-height .37rem
    .ic_wrapper
      width 100%
      height 1.5rem
      background #ffffff
      margin-bottom .2rem
      display flex
      flex-direction row
      .icon
        flex 1
        height 100%
        display flex
        flex-direction column
        .ic
          width 100%
          height 1rem
          font-size .55rem
          text-align center
          line-height 1rem
        .text
          width 100%
          height .5rem
          text-align center
          line-height .5rem
    .bottom_wrapper
      width 100%
      height 5rem
      background #ffffff
      display flex
      flex-direction column
      padding-bottom 1rem
      .time
        flex 1
        width 96%
        margin 0 2%
        display flex
        border-bottom .02rem #989595 solid
        .left
          width 1.8rem
          height 100%
          line-height 1rem
          font-size .32rem
          font-weight bold
          padding-left .2rem
        .right
          flex 1
          height 100%
          background #ffffff
          line-height 1rem
          font-size .3rem
          font-weight bold
          padding-right .2rem
          text-align right
          color #989595
      .requirement
        flex 3
        width 96%
        margin 0 2%
        display flex
        flex-direction column
        .r_top
          wdith 100%
          height 1rem
          line-height 1rem
          font-size .32rem
          font-weight bold
          padding-left .2rem
        .r_btm
          width 100%
          height 100%
          overflow hidden
          font-size .32rem
          color #989595
          padding-left .2rem
</style>
