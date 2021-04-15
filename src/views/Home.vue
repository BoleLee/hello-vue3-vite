<template>
<div>
  <div class="topnav">
    <div class="logo">Grace UI</div>
    <div class="menu"></div>
  </div>
  <div class="banner">
    <h1>Grace UI</h1>
    <h2>一个基于Vue3的造轮子UI框架</h2>
    <p class="actions">
      <a href="https://github.com/BoleLee/hello-vue3-vite" target="blank">Github</a>
      <router-link to="./doc">开始</router-link>
    </p>
  </div>
</div>
</template>

<script lang="ts">

export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #313640;
  color: #47b784;
  > .actions{
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>