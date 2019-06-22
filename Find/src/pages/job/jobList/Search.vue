<template>
  <div>
    <div class="header">
      <div class="ic_wrapper" @click="back">
        <span class="iconfont ic">&#xe837;</span>
      </div>
      <input class="search" placeholder="输入内容进行搜索" v-model="keyword"/>
      <div class="ic_wrapper">
        <span class="iconfont ic">&#xe611;</span>
      </div>
    </div>
    <!-- 搜索到的列表 -->
    <div class="search_list" ref="search_list" v-show="keyword">
      <div>
        <div class="wrapper" v-for="item of list" :key="item._id" @click="detail(item._id)">
          <div class="position">{{item.position}}</div>
          <div class="address">
            <span class="iconfont">&#xe610;</span>&nbsp;&nbsp;{{item.address}}
          </div>
          <div class="money">{{item.money}}</div>
        </div>
        <div class="noData" v-show="noData">没有找到匹配数据</div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    jobList: Array
  },
  data () {
    return {
      keyword: '',
      list: []
    }
  },
  computed: {
    noData () {
      return !this.list.length
    }
  },
  methods: {
    detail (shopId) {
      this.$router.push({
        path: 'JobDetail',
        query: { shopId: shopId }
      })
    },
    back () {
      this.$router.go(-1)
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        this.jobList.forEach((value) => {
          if (value.shopname.includes(this.keyword) || value.position.includes(this.keyword) ||
            value.address.includes(this.keyword) || value.money.includes(this.keyword)) {
            result.push(value)
          }
        })
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search_list, {click: true, tap: true})
  }
}
</script>
<style lang="stylus" scoped>
  .header
    height 1rem
    background #ffffff
    border-bottom .02rem #E5E3E3 solid
    display flex
    flex-direction row
    position relative
    box-sizing border-box
    z-index 99
    .ic_wrapper
      width 1rem
      height 100%
      text-align center
      line-height 1rem
      .ic
        font-size .5rem
    .search
      flex 1
      height .6rem
      margin .2rem .2rem
      border-radius .12rem
      padding 0 .2rem
      text-align center
      background #EDEDED
  .search_list
    position absolute
    top 1rem
    left 0
    right 0
    bottom 0
    background #ffffff
    z-index 98
    .wrapper
      width 100%
      height 1.8rem
      display flex
      flex-direction column
      box-sizing border-box
      padding 0 .4rem
      border-bottom .02rem #E5E3E3 solid
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
    .noData
      width 100%
      height .8rem
      text-align center
      line-height .8rem
      font-size .35rem
      font-weight bold
      border-bottom .02rem #E5E3E3 solid
</style>
