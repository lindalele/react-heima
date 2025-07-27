import React, { useEffect, useRef, useState } from 'react'
export default function Publish() {
  const [count, setCount] = useState(0)
  const ref = useRef(count)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    ref.current = count
  }, [count])
  const getCount = () => {
    setTimeout(() => {
      console.log(count) // 闭包中
      console.log(ref.current) // 最新的值
    }, 3000)
  }
  return (
    <div>
      <button onClick={handleClick}>点击按钮</button>
      <button onClick={getCount}>获取</button>
      <div>点击次数：{count}</div>
    </div>
  )
}
