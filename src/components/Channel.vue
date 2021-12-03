<template>
  <div>
    <router-link to="/" class="logo">
      <!-- <img src="../assets/logo.png" /> -->
    </router-link>
    <div class="channels">
      <div class="item" v-for="channel in channelData" v-bind:key="channel.key">{{channel.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        channels: {},
    },
    computed: {
        channelData() {
            let tmpArr = Object.keys(this.channels).map((key) => ({ key, name: this.channels[key] }));
            return tmpArr;
        },
    },
};
</script>

<style scoped>
/* .logo {
    display: block;
    width: 110px;
    height: 28px;
    margin-bottom: 16px;
} */
.channels > .item {
    display: block;
    width: 110px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    color: #444;
    border-radius: 4px;
    margin-bottom: 2px;
    transition-property: color, background-color;
}
.channels > .item:hover {
    background-color: #f23d58;
    color: #fff;
    cursor: pointer;
}
</style>
