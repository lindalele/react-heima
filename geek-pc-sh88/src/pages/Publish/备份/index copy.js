import React, { useEffect, useRef, useState } from 'react'
export default function Publish() {
  // 返回一个ref对象，有current属性
  // ref的特性：
  // useRef会返回一个不可变的对象，，ref对象在多次组件渲染的时候，ref是不会变化
  // ref的current属性是可以变化的
  const aRef = useRef(5)
  const [count, setCount] = useState(100)

  useEffect(() => {
    console.log('我会执行吗')
  }, [aRef])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>修改</button>
    </div>
  )
}
