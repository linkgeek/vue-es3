<template>
  <div>
    <sub-header titleText="视频播放">
      <input
        type="text"
        class="lg-input self-input"
        placeholder="搜索热点"
        v-model="searchTxt"
        @keyup.enter="linkToSearchPage(searchTxt)"
      />
    </sub-header>
    <div class="video-box">
      <video-player
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied">
      </video-player>
    </div>
    <div class="author-info">
      <div class="title">
        王者荣耀：别让梦泪拿到这个英雄！被他拿到就可以六分钟了！
      </div>
      <div>
        <i class="avatar"><img src="https://p3.pstatp.com/thumb/2c6a0005ee0c17026cf9" alt="头像"></i>
        <span class="name">王者荣耀小饭堂</span>
      </div>
    </div>
  </div>

</template>

<script>
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
import SubHeader from '../components/SubHeader'

export default {
  components: {
    subHeader: SubHeader
  },
  data () {
    return {
      searchTxt: '',
      playerOptions: {
        muted: false,
        language: 'zh-CN',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }],
        width: 750,
        poster: '../assets/logo.png'
      }
    }
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    linkToSearchPage (searchTxt) {
      this.$router.push({path: 'search', query: {searchTxt: searchTxt}})
    },
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>
<style scoped>
.video-box {
  margin-left: 50px;
  width: 850px;
}
.author-info {
  margin: 10px 50px;
}
.title {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
  position: relative;
  padding-right: 12px;
  font-size: 20px;
  margin-bottom: 8px;
}
.avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: -9px;
}
</style>
