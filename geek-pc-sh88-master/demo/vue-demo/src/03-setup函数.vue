<template>
  <div>我是盒子</div>
</template>

<script>
export default {
  // setup函数是composition api的入口
  // setup中, 没有this
  setup() {
    console.log('setup')
    console.log(this)
  },

  // vue2的写法
  beforeCreate() {
    console.log('beforeCreate')
    console.log(this)
  },
  created () {
    console.log('created')
    console.log(this)
  }
}
</script>

<style>

</style>