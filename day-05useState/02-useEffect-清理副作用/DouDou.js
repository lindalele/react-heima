import React, { useEffect } from 'react'

export default function DouDou({ count }) {
  // 清理副作用的函数：每次副作用的回调函数执行之前执行一次以及组件销毁的时候，
  // 目的：清除上一次的副作用带来的影响    componentWillUnmount
  useEffect(() => {
    console.log('这是副作用函数')
    let timer = setInterval(() => {
      console.log('别打我')
    }, 1000)
    // useEffect中return函数就是清理副作用的函数，
    // 执行时机：数据变更，副作用函数执行。副作用函数执行之前会执行一次清理副作用函数，目的是清除上一次的副作用 以及组件销毁的时候。
    // 页面渲染，副作用函数执行，每次数据变更-》清理副作用函数执行-》副作用函数执行  最后组件销毁-》清理副作用函数执行
    // 在这里给了一个【】，表示没有依赖项，所以，副作用函数只会在组件挂载和卸载的时候执行一次。清理副作用在组件卸载的时候执行一次。
    //  占用全局资源的时候使用清理
    return () => {
      console.log('清理副作用的函数')
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h3>我是豆豆组件，我被打了{count}次</h3>
    </div>
  )
}
