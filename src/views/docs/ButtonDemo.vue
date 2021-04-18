<template>
<h1>Button示例</h1>
<h2>不同样式(props: theme)</h2>
<div>
  <Button>default</Button>
  <Button theme="button">button</Button>
  <Button theme="primary">primary</Button>
  <Button theme="danger">danger</Button>
  <Button theme="link">link</Button>
  <Button theme="text">text</Button>
</div>
<h2>不同大小(props: size)</h2>
<div>
  <Button>默认</Button>
  <Button size="small">small</Button>
  <Button size="big">big</Button>
</div>
<div>
  <Button theme="primary">默认</Button>
  <Button theme="primary" size="small">small</Button>
  <Button theme="primary" size="big">big</Button>
</div>
<h2>Disabled(props: disabled)</h2>
<div>
  <Button>default</Button>
  <Button :disabled="true">禁用</Button>
  <Button :disabled="false">不禁用</Button>
</div>
<h2>Loading(props: loading)</h2>
<div>
  <Button>default</Button>
  <Button :loading="true">加载中</Button>
  <Button :loading="false">加载完成</Button>
</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'

export default {
  name: 'ButtonDemo',
  components: {
    Button
  },
  setup () {
    
  }
}
</script>

<style lang="scss" scoped>
  
</style>