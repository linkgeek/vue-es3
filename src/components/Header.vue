<template>
  <div class="topbar">
    <router-link to="/">
      <img class="head-logo" src="../assets/logo.png" />
    </router-link>
    <div class="control">
      <router-link to="/my">我的</router-link>
      <router-link to="/upload">上传视频</router-link>
    </div>
  </div>
</template>
<style>
.topbar {
    width: 1170px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    background: #304156;
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
    overflow: hidden;
}
.head-logo {
    display: inline-block;
    width: 110px;
    height: 28px;
    margin-top: 10px;
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
    background: #f23d58;
}
</style>
