import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const [time, setTime] = useState(5)
  const timeRef = useRef(time)

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(timeRef.current - 1)
      if (timeRef.current <= 1) {
        clearInterval(timer)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    timeRef.current = time
  }, [time])

  return (
    <div>
      你访问的页面不存在！要不来上海黑马学习前端吧！
      <Link to="/home">{time}秒后自动返回首页</Link>
    </div>
  )
}
