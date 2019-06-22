<template>
  <div>
    <job-search :jobList="jobList"></job-search>
    <div ref="search" class="bg">
      <div>
          <div class="wrapper" v-for="item of jobList" :key="item._id" @click="detail(item._id)">
            <div class="position">{{item.position}}</div>
            <div class="address">
              <span class="iconfont">&#xe610;</span>&nbsp;&nbsp;{{item.address}}
            </div>
            <div class="money">{{item.money}}</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getJobList } from '../../api/index'
import JobSearch from './Search'
import Bscroll from 'better-scroll'
export default {
  name: 'JobList',
  data () {
    return {
      jobList: []
    }
  },
  components: {
    JobSearch
  },
  methods: {
    getData () {
      getJobList().then((res) => {
        this.jobList = res
      })
    },
    detail (shopId) {
      this.$router.push({
        path: 'jobDetail',
        query: { shopId: shopId }
      })
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {click: true, tap: true, mouseWheel: true})
  }
}
</script>
<style lang="stylus" scoped>
  .bg
    position absolute
    top 1rem
    left 0
    right 0
    bottom 0
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
</style>
