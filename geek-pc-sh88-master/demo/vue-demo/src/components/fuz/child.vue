<template lang="">
  <div>接收父组件数据{{ count }}</div>
  <button @click="toFather">按钮</button>
</template>
<script setup lang="ts">
const props = defineProps({
  count: Number,
})
console.log('被输出值{ props.count }的输出结果是：', props.count)
const emit = defineEmits(['getData'])
const toFather = () => {
  emit('getData', 100)
}
</script>
<style lang=""></style>
