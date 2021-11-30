<template>
  <div class="topbar">
    <router-link to="/">桃子视频</router-link>
    <div class="control">
      <router-link to="/my">我的</router-link>
      <router-link to="/upload">上传视频</router-link>
    </div>
  </div>
</template>
<style>
  .topbar {
    height: 34px;
    line-height: 34px;
    background: #222;
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
    overflow: hidden;
  }
  .control {
    float: right;
  }
  .control a {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding: 0 10px;
  }
  .control a:hover {
    background: #F23D58;
  }
</style>
