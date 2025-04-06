<template>
  <div>
    <h1>当前鼠标的位置</h1>
    <div>{{ x }}, {{ y }}</div>
    <div>{{ name }}, {{ age }}</div>
  </div>
</template>

<script>
import { reactive, onMounted, onUnmounted, toRefs } from 'vue'
// ---------------------- 鼠标滑动获取鼠标位置 ------------------------
function mouseHandler () {
  // 准备数据
  const mouse = reactive({
    x: 0,
    y: 0
  })
  // 声明处理函数
  const move = e => {
    mouse.x = e.pageX
    mouse.y = e.pageY
  }
  // 类似于之前vue2的mounted函数, dom结构渲染完了触发
  onMounted(() => {
    // 注册事件
    document.addEventListener('mousemove', move)
  })
  // 类似于之前vue2的destroyed函数, 组件卸载触发
  onUnmounted(() => {
    // 解绑事件
    document.removeEventListener('mousemove', move)
  })
  return mouse
}
// ---------------------- 鼠标滑动获取鼠标位置 ------------------------


export default {
  setup() {
    const mouse = mouseHandler()
    const obj = reactive({
      name: 'zs',
      age: 18
    })

    return {
      ...toRefs(mouse),
      ...toRefs(obj)
    }
  }
}
</script>