import React, { useState } from 'react'
import Move from './Move'
import { useMouse, useScroll } from './hooks'
export default function App() {
  const [count, setCount] = useState(0)
  const { x, y } = useMouse()
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
      {count < 5 ? <Move></Move> : <h5>没了</h5>}
    </div>
  )
}
