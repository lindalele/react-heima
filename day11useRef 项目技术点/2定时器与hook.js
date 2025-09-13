import React from 'react'
import { useState } from 'react'

export default function Hooksprop() {
  // function Hooksprop()是一个函数，setCount(count + 1)是一个函数，使用了外部的变量count,是闭包。第一次调用结束内部不会释放，等着点下一次。所以状态会一直存在。这样才能实现累加。

  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  const getCount = () => {
    第一次调用的时候，count是0，第二次点击的时候第一次的快照还没有销毁，等着定时器。但是点击获取的时候拿的就是当时快照的值。此时是0+1=1，所以获取的是count:1。就比如已经点到了7下，count=7了，但是getCount是在第二次点击的时候去获取的，那么这个count就是第一次点击的时候的快照，也就是0+1=1。和7没有关系，哪一个快照就是属于哪一个快照的，互不影响
    setTimeout(() => {
      console.log(count)
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
