import React, { useState } from 'react'
import Move from './Move'
import { useMouse, useScroll } from './hooks'
// 导出一个默认函数App
export default function App() {
  // 使用useState钩子，定义一个count变量，初始值为0
  const [count, setCount] = useState(0)
  // 使用自定义hook，获取鼠标的位置
  const { x, y } = useMouse()
  // 使用自定义hook，获取滚动位置
  const { scrollLeft, scrollTop } = useScroll()
  return (
    <div style={{ height: 4000, width: 4000 }}>
      <div>
        鼠标的位置：{x}-{y}
      </div>
      <div>
        滚动位置：{scrollLeft} - {scrollTop}
      </div>
      <button onClick={() => setCount(count + 1)}>点击</button>
      {/* 点击以后Move组件消失，也就是图片会消失 App.js还在，那么鼠标的x/y还是在的 。他们之间互不影响*/}
      {count < 5 ? <Move></Move> : <h5>没了</h5>}
    </div>
  )
}
