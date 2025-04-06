<template>
  <div>姓名: {{ obj.name }}</div>
  <div>年纪: {{ obj.age }}</div>
  <div>品牌: {{ car.brand }}</div>
  <button @click="obj.name = '张飞'">改名字</button>
</template>

<script>
// 1. setup需要返回数据, setup中返回的数据才能在模板中使用
// 2. 默认对象, 不做处理直接返回, 不是响应式的
// 3. 如果希望返回的数据, 是响应式的, 需要用reactive函数包裹处理
//    传入一个对象, 可以得到一个被proxy处理过的代理对象
import { reactive } from 'vue'

export default {
  setup() {
    const obj = reactive({
      name: 'zs',
      age: 18
    })

    const car = reactive({
      brand: '品牌'
    })

    return {
      obj,
      car
    }
  }
}
</script>

<style>

</style>