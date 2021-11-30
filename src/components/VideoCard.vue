<template>
  <router-link to="/videopage">
  <div class="video-card" >
    <!-- <router-link :to="{name:'topic',params:{id:item.id}}"> -->
    <div class="poster">
        <img src="https://p3.pstatp.com/list/190x124/pgc-image/1529847680147ede46f1eac" class="poster-img" />
        <i class="pic-tip video-tip"><span>02:13</span></i>
    </div>
    <div class="content">
      <div class="content-title">迷你世界 小白鸡VS6只大猪猪，人家放的是屁，大猪猪放的是火焰屁</div>
      <div class="content-footer-bar">
        <img src="https://p1.pstatp.com/large/b721000049192db95a32" class="media-avatar"/>
        <span class="media-author">小无聊解说 ⋅</span>
        <span class="media-time">1小时前</span>
      </div>
    </div>
  </div>
  </router-link>
</template>
<style scoped>
  .video-card {
    display: flex;
    align-items: center;
    height: 123px;
    border-bottom: 1px solid #e8e8e8;
  }
  .poster {
    position: relative;
    background: #eee;
    width: 158px;
    height: 102px;
    margin-right: 16px;
  }
  .poster-img {
    width: 158px;
    height: 102px;
  }
  .pic-tip.video-tip {
    padding-left: 18px;
  }
  .pic-tip.video-tip:before {
    content: "";
    position: absolute;
    top: 7px;
    left: 8px;
    border-top: 4px solid transparent;
    border-left: 6px solid #fff;
    border-right: 6px solid transparent;
    border-bottom: 4px solid transparent;
  }
  .pic-tip {
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 0 6px;
    border-radius: 10px;
    background: #000;
    background: rgba(0,0,0,.7);
    font-style: normal;
    font-size: 12px;
    color: #fff;
    height: 22px;
    line-height: 22px;
}
.content {
  flex: 1;
}
.content-title {
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 4px;
  font-weight: 700;
  max-height: 52px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content-footer-bar {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
    vertical-align: middle;
}
.media-avatar {
  color: #fff;
  margin-right: 2px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  font-size: 12px;
  border-radius: 50%;
  background-color: #eee;
  overflow: hidden;
  vertical-align: middle;
}
.media-author {
  vertical-align: middle;
  /* margin-right: 5px; */
}
.media-time {
  font-size: 12px;
  line-height: 1;
  vertical-align: middle;
  color: #999;
}
</style>
