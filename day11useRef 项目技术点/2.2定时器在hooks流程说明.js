import React, { useState, useEffect, useRef } from 'react'

export default function Hooksprop() {
  // function Hooksprop()是一个函数，setCount(count + 1)是一个函数，使用了外部的变量count,是闭包。第一次调用结束内部不会释放，等着点下一次。所以状态会一直存在。这样才能实现累加。

  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  const handleClick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    countRef.current = count
  }, [count])
  const getCount = () => {
    // 获取拿的是最新的值了。因为current已经跟着后面的变了
    setTimeout(() => {
      // count属于闭包也就是每个快照中的，是当时快照的值。
      // ref.current不管更新多少次，只有一个 所以拿到的是最新的最后的值
      console.log(countRef.current)
    }, 3000)
  }
  return (
    <div>
      <button onClick={handleClick}>点我加1</button>
      <button onClick={getCount}>获取</button>
      <p>点击次数：{count}</p>
    </div>
  )
}
