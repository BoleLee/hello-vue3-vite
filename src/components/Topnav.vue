<template>
<div class="topnav">
  <span class="toggleAside" @click="toggleMenu"></span>
  <div class="logo">Grace UI</div>
  <ul class="menu">
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li>
      <router-link to="/doc">文档</router-link>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { inject, Ref } from '@vue/runtime-core'

export default {
  name: 'Topnav',
  setup () {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }

    return {
      toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 550px) {
    > .menu{display: none;} 
    > .logo{margin: 0 auto;}
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>