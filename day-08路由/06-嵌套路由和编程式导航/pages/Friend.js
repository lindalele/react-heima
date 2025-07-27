import React from 'react'
import { useHistory } from 'react-router'

export default function Friend() {
  // 如果使用js代码的方式实现路由的跳转----》编程式导航
  const history = useHistory()

  return (
    <div>
      朋友 ---<button onClick={() => history.replace('/find')}>登录</button>
    </div>
  )
}
