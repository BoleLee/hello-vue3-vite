<template>
<div>
  <h1 @click="add" style="text-align: center; padding: 15px 10px;">{{ count }}</h1>
</div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

let count = ref(1)

const add = () => {
  count.value++
  console.log(count.value)
}
</script>

<style scoped>
  
</style>