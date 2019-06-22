<template>
  <div class="bg">
    <common-header>
      <div slot="title">查看报名名单</div>
    </common-header>
   <div class="wrapper" v-for="(item,index) in list" :key="index">
      <div class="column">
        <div class="top">{{item.name}}</div>
        <div class="top">{{item.sex}}</div>
        <div class="top">{{item.stu_number}}</div>
      </div>
      <div class="column">
        <div class="btm">{{item.major}}</div>
        <div class="btm">Tel:{{item.telphone}}</div>
      </div>
    </div>
    <div class="no" v-show="noPeople">当前无人报名</div>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import axios from 'axios'
export default {
  name: 'CorForm',
  components: {
    CommonHeader
  },
  data () {
    return {
      list: [],
      cor: {},
      corId: '',
      noPeople: false
    }
  },
  methods: {
    getData () {
      axios.post('/form/all', {
        corId: this.cor.corId
      }).then((res) => {
        this.list = res.data.result.doc
        if (!this.list.length) {
          this.noPeople = true
        } else {
          this.noPeople = false
        }
      })
    },
    initialize () {
      this.cor = JSON.parse(this.$store.state.cor)
    }
  },
  created () {
    this.initialize()
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    width 100%
    height 110%
    .wrapper
      width 90%
      height 3rem
      margin .3rem 5%
      border-radius .42rem
      display flex
      flex-direction column
      padding 0 .25rem
      box-sizing border-box
      box-shadow .02rem .02rem .3rem #888888
      .column
        width 100%
        height 50%
        display flex
        flex-direction row
        font-size .3rem
        .top
          flex 1
          height 100%
          line-height 1rem
        .btm
          flex 1
          height 100%
          line-height 1.8rem
    .no
      height 1rem
      line-height 1rem
      text-align center
      color #000000
      position absolute
      top 3rem
      left 0
      right 0
</style>
