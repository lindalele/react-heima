import { useState } from 'react'

// 根组件
export default function App() {
  // useState初始化
  // useState的使用：首先调用一下useState传入一个值
  const [salary, setSalary] = useState(1000)
  // 需求：得到一个数组，这个数组需要一些额外的判断

  const level = 1
  // 注意useState的函数参数不能写在外面，必须写在函数内部，写在外面每次都会执行，初始化成原始值。虽然useState用的temp还是第一次执行出来的值，但是这个if else每次都会执行，影响性能
  // if (level === 1) {
  //   temp= salary + 10000
  // } else if (level === 2) {
  //   temp=  salary + 20000
  // } else {
  //   temp=  salary + 30000
  // }
  // const [money, setMoney] = useState(temp)

  const [money, setMoney] = useState(() => {
    // 如果写在useState里面，那么这个函数只会执行一次
    if (level === 1) {
      return salary + 10000
    } else if (level === 2) {
      return salary + 20000
    } else {
      return salary + 30000
    }
  })
  return (
    <div>
      <h1>根组件</h1>
      <div>{salary}</div>
    </div>
  )
}
