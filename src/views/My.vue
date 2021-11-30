<template>
  <div>
    <sub-header titleText="我的视频列表" />
    <div class="container">
      <video-card v-for="item in new Array(5)" :key="item" />
      <page :total="100" />
    </div>
</div>
</template>
<script>
import {Page} from 'iview'
import SubHeader from '../components/SubHeader'
import VideoCard from '../components/VideoCard'

export default {
  components: {
    page: Page,
    subHeader: SubHeader,
    videoCard: VideoCard
  },
  data () {
    return {
      page: 1,
      totalPage: 10
    }
  },
  methods: {
    goPage (data) {
      this.page = data.page
    }
  }
}
</script>
<style scoped>
.container {
  width: 660px;
  margin: 0 auto;
  margin-top: 16px;
}
.ivu-page {
  margin: 10px auto;
}
</style>
