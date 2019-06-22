<template>
  <div>
    <home-content :corList="corList"></home-content>
    <common-foot />
  </div>
</template>

<script>
import { getCorList } from '../api/index'
import CommonFoot from '@/pages/common/Foot'
import HomeContent from './components/Content'
export default {
  name: 'Home',
  components: {
    HomeContent,
    CommonFoot
  },
  data () {
    return {
      corList: []
    }
  },
  methods: {
    getData () {
      getCorList().then((res) => {
        this.corList = res
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
