// ; 函数组件中点击事件的函数，如果函数中使用了组件中的state，那么这个函数就是一个闭包函数。如果函数中使用了定时器，那么当时点击环境下的数据会被保存下来，定时器执行时，会根据保存下来的数据，执行相应的操作。

import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  const [time, setTime] = useState(5)
  const timeRef = useRef(time)
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(timeRef.current - 1) //这个是异步的，数据还没改变
      if (timeRef.current <= 1) {
        clearInterval(timer)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  useEffect(() => {
    // time一开始是5，监听time改变，变成了4，赋值给timeRef
    timeRef.current = time
  }, [time])
  return (
    <div>
      <h1>404</h1>
      <p>页面不存在，{time}秒后跳转</p>
    </div>
  )
}
