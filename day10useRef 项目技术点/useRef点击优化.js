import React, { useEffect, useState, useRef } from 'react'
export default function Publish() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    // 只要count变化就同步发哦currentRef
    countRef.current = count
  }, [count])

  const getCount = () => {
    setTimeout(() => {
      console.log(countRef.current)
    }, 3000)
  }
  return (
    <div>
      <button onClick={handleClick}>点击按钮+1</button>
      <button onClick={getCount}>获取</button>
      <p>最终的点击次数：{count}</p>
    </div>
  )
}
