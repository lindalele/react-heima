// useRef：会返回一个ref对象，其 有.current 属性。
// 特点：1.会返回一个不可变的ref对象，返回的 ref 对象将在组件的整个生命周期内持续存在。
// ref对象在多次组件渲染的时候，ref是不会变化的，也就是永远指向这个对象，对象不变，
// .current属性的值是可以变的

ref的current属性是可以变化的
import React, { useEffect, useState, useRef } from 'react'
export default function Publish() {
  // 返回一个ref对象，有current属性
  const aRef = useRef(5)
  console.log(aRef) // {current: 5}
  aRef.current = 10
  // 组件会更新的，但是上面的aRef 不会更新
  const [count, setCount] = useState(100)
  useEffect(() => {
    console.log(
      'aRef不会变，拿到的整体对象aRef不会变,这里只会执行一次，因为aRef不会变'
    )
  }, [aRef])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}
