<template>
<div>Button示例</div>
<h1>不同样式(props: theme)</h1>
<div>
  <Button>default组件</Button>
  <Button theme="button">button组件</Button>
  <Button theme="link">link组件</Button>
  <Button theme="text">text组件</Button>
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