<template>
  <input type="text" v-model.number="num1" /> +
  <input type="text" v-model.number="num2" /> =
  <span>{{ sum }}</span>
</template>
<script>
import { ref, computed, watch } from 'vue'
export default {
  setup() {
    const num1 = ref(0)
    const num2 = ref(0)
    // 计算属性
    const sum = computed(() => {
      return +num1.value + +num2.value
    })
    // watch(监视谁, 处理函数)
    watch(num1, (newValue, oldValue) => {
      console.log(newValue)
    })
    // yarn create vite vue3-ts-demo --template vue-ts
    // 插件TypeScript Vue Plugin (Volar)
    // watch需要指定需要监听的数据，而watchEffect不需要
    // watchEffect会自动监听函数中用到的所有数据，当函数中的任意数据发生改变时，watchEffect都会重新执行。
    watchEffect(() => {
      console.log('你好', count.value)
    })
    // watchEffect会立即执行，而watch需要加immediate:true
    return {
      num1,
      num2,
      sum,
    }
  },
}
</script>

<style></style>
