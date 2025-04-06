<template>
    <div>{{ name }}</div>
    <button @click="name = '黄忠'">改名字</button>
    <div>{{ age }}</div>
    <div>{{ desc }}</div>
    <div>{{ car.brand }}</div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
    setup () {
        // const name = ref('zs')
        // const age = ref(18)
        // const desc = ref('不错')
        // const car = ref({  // 内部调用的是reactive
        //   brand: '劳斯莱斯',
        //   price: 998
        // })

        // 响应式对象的处理, 加给对象的, 如果对 对象 做了展开操作
        // 那么就会丢失响应式的效果
        const state = reactive({
            name: 'zs',
            age: 18,
            desc: '不错',
            car: {
                brand: '劳斯莱斯',
                price: 998
            }
        })

        return {
            // 1. 将响应式对象, 转换成普通对象
            // 2. 对普通对象中的所有属性, 做ref()的操作
            // ...state以后是 name: 'zs',
            // age: 18,
            // desc: '不错',
            // car: {
            //     brand: '劳斯莱斯',
            //     price: 998
            // }
            ...toRefs(state) // ...toRefs(state)是从...state展开对象，然后把对象平铺后把每一个包装成ref()
        }
    }
}
</script>

<style>
</style>