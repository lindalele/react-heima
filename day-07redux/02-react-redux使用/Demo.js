import React from 'react'
import { useSelector } from 'react-redux'

export default function Demo() {
  // 只要是App的子组件，都可以用useSelector来获取state中的数据，不用考虑组件层级通讯，直接使用就可以
  const money = useSelector((state) => state.money)
  return <div>{money}</div>
}
