<template>
  <div class="all">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of corList" :key="item.corId">
        <div class="wrapper">
          <div class="engish">{{item.english}}</div>
          <div class="name">{{item.corname}}</div>
          <div class="title">{{item.title}}</div>
          <button class="enter" @click="detail(item.corId)">社团详情</button>
          <div class="img_wrapper">
            <img v-lazy="item.img" class="img">
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  props: {
    corList: Array
  },
  methods: {
    detail (corId) {
      this.$router.push({path: 'corDetail', query: { corId: corId }})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .all
    width: 100%
    height: 10.4rem
    background: #E9EAEE
    .wrapper
      width: 70%
      height: 9.5rem
      margin .45rem 15%
      background #ffffff
      border-radius .32rem
      .engish
        width 80%
        height 1.2rem
        font-size .4rem
        font-weight bold
        text-align center
        margin 0 10%
        padding-top .6rem
      .name
        width 80%
        height 1rem
        margin 0 10%
        font-weight bold
        font-size .7rem
        text-align center
        line-height 1rem
        color #868B90
      .title
        width 80%
        height 1rem
        margin 0 10%
        font-size .3rem
        font-weight bold
        text-align center
        line-height 1rem
      .enter
        width 40%
        height .6rem
        margin 0 30%
        background #ffffff
        border-radius:.32rem
        border #000000 .02rem solid
      .img_wrapper
        width 80%
        height 4rem
        margin .6rem 10% 0 10%
        .img
          width 100%
          height 100%
</style>
