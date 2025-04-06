<template>
  <div>{{ count }} <button @click="count++">改值</button></div>
  <div>{{ obj.name }} <button @click="obj.name = '吕布'">改值</button></div>
  <div>{{ obj.desc }}</div>
</template>

<script>
import { reactive, ref, readonly } from 'vue'
// readonly 只读, 可以让数据只读
export default {
  setup() {
    const count = ref(100)
    const obj = reactive({
      name: '老铁',
      desc: '不错'
    })
    return {
      count: readonly(count),
      obj: readonly(obj)
    }
  }
}
</script>

<style>

</style>