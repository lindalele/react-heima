<template>
  <h1>我是vue3学习大标题 - {{ msg }}</h1>
  <h1>我是vue3学习大标题 - {{ name }}</h1>
  <h1>我是vue3学习大标题</h1>
  <h1>我是vue3学习大标题</h1>
  <button @click="changeMsg">改值</button>
</template>

<script>
export default {
  // options api 方便, 易学, 很明确的指定了具体的代码应该放在什么位置
  data () {
    return {
      msg: 'zs',
      name: '张飞',
      age: 18
    }
  },
  methods: {
    changeMsg () {
      this.msg = '哈哈'
    }
  },
  // computed
  // watch
  // ...
}
</script>

<style>

</style>