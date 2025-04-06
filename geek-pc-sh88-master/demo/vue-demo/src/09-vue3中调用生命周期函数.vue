<template>
  <div class="box">我是盒子</div>
</template>

<script>
// vue3的生命周期函数
// beforeCreate
// created
// ...
// ...
// beforeUnmount (beforeDestroy)
// unmounted (destroyed)

import { onBeforeMount ,onMounted } from 'vue'

export default {
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount', document.querySelector('.box'))
    })
    onMounted(() => {
      console.log('mounted', document.querySelector('.box'))
    })


    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('mounted')
    })
  }

  // beforeCreate() {
  //   console.log('beforeCreate')
  // },
  // created () {
  //   console.log('created')
  // }
}
</script>

<style>

</style>