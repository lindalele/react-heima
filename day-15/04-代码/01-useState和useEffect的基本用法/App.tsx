import { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = window.setInterval(() => {
      console.log('哈哈哈')
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <div>点击次数：{count}</div>
      <button onClick={() => setCount(count + 1)}>修改</button>
    </div>
  )
}
