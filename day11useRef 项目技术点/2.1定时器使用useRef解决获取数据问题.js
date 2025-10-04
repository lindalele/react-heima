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
  }, [count]) // 每次count变化，useEffect就会执行，把最新的值赋值给countRef.current
  const getCount = () => {
    // 获取希望拿的是最新的值
    setTimeout(() => {
      console.log(count) //他是闭包中的，在哪一次的闭包比如，第一次，第二次，第三次，所以拿到的值是0，1，2。假设来到第10次，当时是在第三次点击获取的，那就是2。
      //   现在要求拿最新的值，就是第10次点击的值，所以需要用ref来获取最新的值。
      console.log(countRef.current) // 10
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
