// 1. 导入useEffect
import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  // 函数组件副作用：函数组件主要作用是根据数据渲染UI结构；组件副作用：发送请求、操作DOM、localStorage定时器等
  // componentDidMount + componentDidUpdate
  useEffect(() => {
    // 2. 处理副作用
    // useEffect默认没有依赖项的情况的执行时机: 回调函数 会在每次组件渲染后执行。一进来这个函数组件App组件渲染一次，dom渲染完成，然后执行副作用函数，里面可能操作数据，于是数据更新了。每次数据更新了，副作用函数也会再执行一次。
    document.title = '被点击了' + count + '次'
    console.log('副作用执行')
  })

  return (
    <div>
      <h1>根组件</h1>
      <div>点击次数：{count}</div>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}
