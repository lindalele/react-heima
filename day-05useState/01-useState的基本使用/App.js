// 1. 导入useState函数
import { useState } from 'react'
export default function App() {
  // 2. 调用useState,传入初始值, 返回一个数组
  // 第0项：状态   第1项：函数， 用于修改状态
  const [count, setCount] = useState(0)
  // const count = result[0]
  // const setCount = result[1]
  return (
    <div>
      <h1>根组件</h1>
      <div>点击次数：{count}</div>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}
