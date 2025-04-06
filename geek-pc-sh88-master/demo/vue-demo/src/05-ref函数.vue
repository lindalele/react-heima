<template>
    <div>计数器: {{ count }}</div>
    <button @click="count++">改值</button>
</template>

<script>
// import { reactive } from 'vue'  reactive只能将复杂类型, 处理成响应式
import { ref } from 'vue'
// ref函数
// 1. 如果有***简单类型, 需要响应式, 可以用 ref 函数
// 2. ref接收一个简单类型, 会返回一个响应式的对象, 这个对象中有value属性, 可以获取值
// 3. 在setup函数中, 对ref包装的简单类型进行操作, 千万不要忘了 .value
// 4. 如果是在模板中使用ref包装的简单类型数据, ref 属性会自动解套, 不需要额外的 .value
// 5. 如果给 ref 传递了***复杂类型, 内部会做判断, 会自动转而调用 reactive

export default {
    setup () {
        const count = ref(100)
        const obj = ref({
            name: 'zs',
            age: 18
        })
        // count.value = 200
        // console.log(count.value)
        return {
            count,
            obj
        }
    }
}
</script>

<style>
</style>