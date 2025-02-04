import { useState } from 'react'
import DouDou from './DouDou'
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>根组件</h1>
      <button onClick={() => setCount(count + 1)}>打豆豆</button>
      {count < 5 ? <DouDou count={count}></DouDou> : <h5>豆豆被打死了</h5>}
    </div>
  )
}
