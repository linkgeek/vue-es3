<template>
  <div class="container">
    <div class="input-box">
      <input
        type="text"
        class="lg-input self-input"
        v-model="searchTxt"
        @keyup.enter="changeSearch(searchTxt)"
      />
      <a class="input-box-btn" @click="changeSearch(searchTxt)">搜索</a>
    </div>
    <div class="content">
      <video-card v-for="item in new Array(3)" :key="item" />
    </div>
  </div>
</template>
<script>
import VideoCard from "../components/VideoCard";

export default {
    name: "Search",
    components: {
        videoCard: VideoCard,
    },
    created() {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        this.searchTxt = this.$route.query.searchTxt;
        // this.fetchData()
    },
    methods: {
        changeSearch: function(searchTxt) {
            this.$router.push({ path: "search", query: { searchTxt: searchTxt } });
        },
    },
};
</script>

<style scoped>
.container {
    width: 660px;
    margin: 0 auto;
    margin-top: 16px;
}
.input-box {
    display: flex;
    margin-bottom: 20px;
}
.input-box-btn {
    display: inline-block;
    text-align: center;
    width: 80px;
    height: 40px;
    line-height: 40px;
    outline: none;
    vertical-align: middle;
    background: #ed4040;
    color: #fff;
    cursor: pointer;
    margin-left: -1px;
}
.input-box-btn:hover {
    background: #ed4040;
    color: rgb(201, 110, 110);
}
.lg-input {
    vertical-align: middle;
    box-sizing: border-box;
    flex: 1;
    height: 40px;
    outline: 0;
    padding: 3px 10px;
    margin: 0;
}
.lg-input:focus {
    margin: 0;
}
</style>
