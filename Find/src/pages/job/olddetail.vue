<template>
    <div class="bg">
        <div class="a">
            <div class="title">
              <span class="iconfont" @click="back">&#xe837;</span>职位详情
            </div>
        </div>
        <div class="line"></div>
        <div class="b">
          <div class="title_job">{{list.position}}</div>
          <div class="c">
            <div class="title_money">{{list.money}}</div>
          </div>
          <div class="d">{{list.people}}</div>
        </div>
        <div class="details">
          <div class="details-title">职位描述</div>
          <div class="box2"></div>
          <div class="text">工作内容：{{list.job}}</div>
          <div class="text">工作要求：{{list.requirement}}</div>
          <div class="text">工作时间：{{list.time}}</div>
          <div class="text">联系方式：{{list.wechat}}</div>
        </div>
        <div class="palace">
            <div class="work-palace-title">工作地点</div>
            <div class="box2"></div>
            <div class="work-palace">
              <div class="work-palace-detail">{{list.address}}</div>
              <div class="tel">Tel:{{list.telphone}}</div>
            </div>
            <div class="i_wrapper" v-show="list.img">
              <img class="picture" :src="list.img" />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'JobDetail',
  data () {
    return {
      shopId: '',
      list: []
    }
  },
  methods: {
    getData () {
      axios.post('/shop/dtails', {
        shopId: this.$route.params.shopId
      }).then((response) => {
        let res = response.data
        if (res.status === '0') {
          this.list = res.result.doc
        }
      })
    },
    back () {
      this.$router.go(-1)
    }
  },
  created () {
    this.shopId = this.$route.params.shopId
    this.getData()
  },
  activated () {
    if (this.$route.params.shopId !== this.shopId) {
      this.shopId = this.$route.params.shopId
      this.getData()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .bg
    background: #F5F5F5
    width: 100%
    height: 100%
    .a
      background: #ffffff
      width: 100%
      height: 1rem
      .title
        text-align: center
        font-size: .45rem
        line-height 1rem
        position relative
        .iconfont
          position absolute
          width 1rem
          top 0
          left 0
          bottom 0
          text-align center
          line-height 1rem
          font-size .5rem
    .line
      width: 100%
      height: .01rem
      background: #E9E9E9
    .b
      background: #ffffff
      width: 100%
      height: 1.8rem
      overflow: hidden
      padding .2rem .1rem
      .title_job
        font-weight: bold
        font-size: .41rem
        margin-top: .1rem
        margin-left: 2.5%
      .c
        width: 5rem
        height: .9rem
        margin-left: 2.5%
        .title_money
          display: inline
          font-weight: bold
          font-size: .45rem
          color: #FF5F00
          width: 2.5rem
          line-height .9rem
      .d
        color: #B0B0B0
        font-size: .35rem
        margin-left: 2.5%
    .details
      width: 100%
      height: 100%
      background: #ffffff
      margin-top: 0.25rem
      overflow: hidden
      .box1
        width: 2rem
        height: 0.2rem
        margin-left: 2%
        margin-top: 0.2rem
        background: #F5F5F5
      .details-title
        font-size: 0.4rem
        font-weight: bold
        margin-left: 2.5%
        margin-top: 0.25rem
        margin-bottom .3rem
      .text
        margin .2rem .2rem
        font-size: .28rem
        color: #787878
    .palace
      width: 100%
      height: 100%
      background: #ffffff
      margin-top: 0.2rem
      overflow hidden
      .work-palace-title
        font-size: 0.4rem
        font-weight: bold
        margin-left: 2.5%
        margin-top: 0.25rem
      .box2
        width: 1rem
        height: 0.06rem
        margin-left: 2%
        margin-top: 0.1rem
        background: #F5F5F5
      .i_wrapper
        width: 100%
        height: 2.5rem
        margin .2rem 2%
        .picture
          width 96%
          height 100%
    .work-palace
      width: 7.2rem
      height: 1.2rem
      border: 1.2px solid
      border-color: #E1E1E1
      margin-left: 2%
      margin-top: 0.4rem
      .work-palace-detail
        font-size: .3rem
        text-align: center
        margin-top: 0.2rem
        color: #828282
        white-space: nowrap
        text-overflow:ellipsis
      .tel
        font-size: .2rem
        text-align: center
        margin-top: .2rem
</style>
