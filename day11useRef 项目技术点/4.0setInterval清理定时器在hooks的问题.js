// ; 函数组件中点击事件的函数，如果函数中使用了组件中的state，那么这个函数就是一个闭包函数。如果函数中使用了定时器，那么当时点击环境下的数据会被保存下来，定时器执行时，会根据保存下来的数据，执行相应的操作。

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  const [time, setTime] = useState(5)

  useEffect(() => {
    // 一开始是5，setTinterval开始，setTime以后，快照又来了一个新的，但是useEffect只执行一次，定时器不再执行了，也没有了下面的setTime，所以会定格在4。然而定时器的id还在，跑的是第一次的快照的，time一直是初始的5在跑。因为第一次的定时器没有办法拿到第二次time的最新值
    let timerId = setInterval(() => {
      setTime(time - 1)
      if (time <= 1) {
        clearInterval(timerId)
      }
    }, 1000)
    // 这里是指每次结束都要关，会走清除定时器
    return () => {
      clearInterval(timerId)
    }
    // 依赖项空，只执行一次。
    // ; 注意这里清除副作用不能依赖time，因为setInterval定时器一直在执行，time改变，依赖也一直再跟着变，又来执行这个函数就会死循环
  }, [])

  return (
    <div>
      <h1>404</h1>
      <p>页面不存在，{time}秒后跳转</p>
    </div>
  )
}
