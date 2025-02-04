import React, { useContext } from 'react'
import { Context } from './index'
export default function Son() {
  const value = useContext(Context)
  console.log(value)

  return (
    <div>
      <h3>我是 Son组件--{value.count}</h3>
    </div>
  )
}
