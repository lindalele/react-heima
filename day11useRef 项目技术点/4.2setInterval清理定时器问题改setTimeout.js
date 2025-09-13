。

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// 全部变量的问题，如果这个组件使用了两次，那么会公用一个timerId，全局变量会相互影响
let timerId

export default function NotFound() {
  const [time, setTime] = useState(5)
  useEffect(() => {

     timerId = setTimeout(() => {
      setTime(time - 1) 
    //   if (time <= 1) {
    //     // 还是清除不了的，因为setTime会新开一个快照，timeId是上一次的无法清除本次的。需要写一个依赖time，如下面useEffect的依赖
    //     clearTimeout(timerId)
    //   }
    }, 1000)
    // 这里是指跳，会走清除定时器
    return () => {
        clearTimeout(timerId)
    }

  })
//   上面是每次开，每次关，这里是判断条件，当time<0的时候还需要关。需要去拿的是上一次的timeId,所以用了全局变量，所以是不能写在函数里面的，因为每一次都置空了，所以应该写成全局变量放在外面
  useEffect(() => {
    // 这里会有定时器访问不到的情况，因为定时器id写在上面.。方案把timeId写在外层
    if (time <= 0) {
        clearTimeout(timerId)
    }
  }, [time])
  return (
    <div>
      <h1>404</h1>
      <p>页面不存在，{time}秒后跳转</p>
    </div>
  )
}
