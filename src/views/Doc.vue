<template>
<div class="layout">
  <div class="nav">
    <Topnav></Topnav>
  </div>
  <div class="content">
    <aside v-if="menuVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script lang="ts">
import { inject, Ref } from '@vue/runtime-core'
import Topnav from '../components/Topnav.vue'

export default {
  name: 'Doc',
  components: {
    Topnav
  },
  setup () {
    const menuVisible = inject<Ref<boolean>>('menuVisible')

    return {
      menuVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    overflow: auto;
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: green;
  }
}
aside {
  color: #fff;
  background: #313640;
  width: 150px;
  padding: 16px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 550px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
  }
}
main {
  overflow: auto;
}
</style>