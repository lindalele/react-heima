。

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  const [time, setTime] = useState(5)

  useEffect(() => {

    let timerId = setInterval(() => {
        // time=1-1=0,但是她是异步的，数据没有立即改变
      setTime(time - 1) //这是异步的，数据没有立即改变
    //   这里time还是1，因为是异步的。所以应该1的时候清除。所以问题就在于是0的时候还没有能清除定时器。那么使用3.0setTimeout
      if (time <= 0) {
         //这里清除不了定时器，因为setTime会新开一个快照，timeId是上一次的无法清除本次的
        clearInterval(timerId)
      }
    }, 1000)
    // 这里是指跳走，会走清除定时器
    return () => {
      clearInterval(timerId)
    }
    // 修改点：依赖项没有代表每次都执行一次。
//    思路：每次开一个定时器，每次都清除。每次进来又开一个，setTime执行了，本次快照需要清除了，于是来到了return（）=》{里面清除定时器}。由于setTime所以再次新开了一个快照。总之就循环，开了清除，开了又清除。
// 那直接使用setTimeout就行了。
  })
  return (
    <div>
      <h1>404</h1>
      <p>页面不存在，{time}秒后跳转</p>
    </div>
  )
}
