<template>
  <div class="container">
    <div class="channel">
      <channel :channels="channels" />
    </div>
    <div class="content">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
        <video-card v-for="(item, index) in data" :key="index" />
        <div class="my-spin"><Spin size="large" v-if="busy"></Spin></div>
      </div>
    </div>
    <div class="right-bar">
      <input
        type="text"
        class="lg-input self-input"
        placeholder="搜索热点"
        v-model="searchTxt"
        @keyup.enter="linkToSearchPage(searchTxt)"
      />
      <div class="site-info">
        <ad />
      </div>
    </div>
  </div>
</template>
<script>
import Channel from "../components/Channel";
import VideoCard from "../components/VideoCard";
import Ad from "../components/Ad";
import { Spin } from "iview";

export default {
    name: "Channel",
    components: {
        channel: Channel,
        videoCard: VideoCard,
        ad: Ad,
        Spin,
    },
    data() {
        return {
            channels: [],
            searchTxt: "",
            data: new Array(10),
            busy: false,
        };
    },
    // mounted () {},
    created() {
        this.getChannels();
    },
    methods: {
        loadMore() {
            return new Promise((resolve) => {
                this.busy = true;
                setTimeout(() => {
                    for (var i = 0; i < 10; i++) {
                        this.data.push({ name: i });
                        this.busy = false;
                    }
                    resolve();
                }, 2000);
            });
        },
        getChannels() {
            this.axios
                .get("/api/category")
                .then((response) => response.data)
                .then((json) => {
                    if (json.code === 200) {
                        this.channels = json.result;
                    }
                });
        },
        linkToSearchPage: function(searchTxt) {
            this.$router.push({ path: "search", query: { searchTxt: searchTxt } });
        },
    },
};
</script>
<style scoped>
.container {
    display: flex;
    width: 1170px;
    margin: 0 auto;
    margin-top: 16px;
    min-height: 1000px;
    justify-content: space-between;
}
.channel {
    width: 120px;
    height: 600px;
    background: #fff;
}
.content {
    width: 680px;
}
.right-bar {
    width: 340px;
    margin-left: 10px;
}
.site-info {
    border-top: 2px solid #ed4040;
    background-color: #f4f5f6;
    margin-bottom: 16px;
    margin-top: 10px;
    padding: 15px 20px 20px;
}
.lg-input {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    outline: 0;
    padding: 3px 10px;
}
.my-spin {
    width: 40px;
    margin: 0 auto;
}
</style>
