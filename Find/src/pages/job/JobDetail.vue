<template>
  <div class="bg">
    <common-header>
      <div slot="title">职位详情</div>
    </common-header>
    <div ref="content" class="content">
      <div>
        <div class="card">
          <div class="top">
            {{list.position}}
          </div>
          <div class="card_bottom">
            <div class="left">{{list.money}}</div>
            <div class="right">{{list.people}}</div>
          </div>
        </div>
        <div class="middle">
          <div class="title">工作内容:</div>
          <div class="m_text">{{list.job}}</div>
          <div class="title">工作要求:</div>
          <div class="m_text">{{list.requirement}}</div>
          <div class="title">工作时间：</div>
          <div class="m_text">{{list.time}}</div>
          <div class="title">联系方式：</div>
          <div class="m_text">{{list.wechat}}</div>
          <div class="title">地址：</div>
          <div class="address_wrapper">
            <div class="address">{{list.address}}</div>
            <div class="phone">Tel:{{list.telphone}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import CommonHeader from '../common/CommonHeader'
import axios from 'axios'
export default {
  name: 'JobDetail',
  data () {
    return {
      shopId: '',
      list: []
    }
  },
  components: {
    CommonHeader
  },
  methods: {
    getData () {
      axios.post('/shop/dtails', {
        shopId: this.$route.query.shopId
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
  mounted () {
    this.scroll = new Bscroll(this.$refs.content, {mouseWheel: true})
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
  .content
    position absolute
    top 1.25rem
    left 0
    right 0
    bottom 0
    .card
      height 3rem
      border .02rem #666 solid
      margin .25rem
      box-shadow .03rem .03rem .2rem #000000
      display flex
      flex-direction column
      background #ffffff
      .top
        flex 1
        line-height 1rem
        margin 0 .25rem
        border-bottom .02rem #666 solid
        font-size .4rem
        font-weight bold
      .card_bottom
        flex 2
        margin 0 .3rem
        line-height 2rem
        display flex
        justify-content space-between
        .left
          font-size .5rem
          color #ED3B0F
    .middle
      background #ffffff
      height 12rem
      margin .3rem 0
      display flex
      flex-direction column
      border-top #B6B6B6 .02rem solid
      border-bottom #B6B6B6 .02rem solid
      .title
        margin .25rem .4rem
        font-size .4rem
        font-weight bold
      .m_text
        margin .25rem .4rem
        text-indent .3rem
        corlor #666
        font-size .32rem
        letter-spacing .03rem
      .address_wrapper
        margin .25rem .4rem
        border #000000 .02rem solid
        text-align center
      .address
        margin .25rem .4rem
        font-size .3rem
        color #666
      .phone
        margin .25rem .4rem
        color #666
        font-size .2rem
</style>
