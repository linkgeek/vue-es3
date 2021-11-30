<template>
  <div class="sub-header">
    <div class="nav-wrapper">
      <router-link to="/">首页</router-link>
      /
      <span>{{titleText}}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    titleText: String
  }
}
</script>

<style scoped>
.sub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  line-height: 58px;
  padding: 0 100px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.12);
  margin-bottom: 20px;
}
.nav-wrapper {
  line-height: 58px;
  margin-left: 20px;
  font-size: 16px;
}
.nav-wrapper span {
  color: #999;
}
.lg-input {
  justify-self: flex-end;
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  outline: 0;
  padding: 3px 10px;
}
</style>
