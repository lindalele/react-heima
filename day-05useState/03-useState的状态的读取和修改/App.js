// const obj = {
//   name: 'zs',
//   age: 18
// }
// const { name: name1, age } = obj
// console.log(name1, age)
// const arr = [1, 2, 3]
// const [a, b, c] = arr
// console.log(a, b, c)
import { useState } from 'react'
// 1. 导入useState函数
export default function App() {
  console.log('render')
  // const [count, setCount] = useState(0)
  // console.log('render')

  const [count, setCount] = useState({
    key: '对象的属性，解构出来的count是这一整个对象',
    count: 0,
  })
  const handleClick = () => {
    // 如果useState的初始值是一个对象，那么修改这个对象的属性是不行的，，，需要重新赋值
    setCount({
      ...count,
      count: count.count + 1,
    })
  }
  return (
    <div>
      <h1>根组件</h1>
      <div>点击次数：{count.count}</div>
      <button onClick={handleClick}>点击</button>
    </div>
  )
}
