import React, { useState } from 'react'
import Move from './Move'
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>鼠标的位置：</div>
      <button onClick={() => setCount(count + 1)}>点击</button>
      {count < 5 ? <Move></Move> : <h5>没了</h5>}
    </div>
  )
}
