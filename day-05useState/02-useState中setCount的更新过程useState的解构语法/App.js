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
  const [money, setMoney] = useState(100)

  const handleClick = () => {
    // 函数组件使用 useState*第第二个参数也就是调用解构出来的第二个参数 后的执行过程，以及状态值的变化：

    // - 组件第一次渲染：

    //   1. 从头开始执行该组件中的代码逻辑
    //   2. 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
    //   3. 渲染组件，此时，获取到的状态 count 值为： 0
    // - 组件第二次渲染：

    //   1. 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
    //   2. 组件重新渲染时，会再次执行该组件中的代码逻辑
    //   3. 再次调用 `useState(0)`，此时 **React 内部会拿到最新的状态值而非初始值**，比如，该案例中最新的状态值为 1
    //   4. 再次渲染组件，此时，获取到的状态 count 值为：1

    // 注意：**useState 的初始值(参数)只会在组件第一次渲染时生效**。

    // 也就是说，以后的每次渲染，useState 获取到都是最新的状态值。React 组件会记住每次最新的状态值!
    setMoney(money + 1)
  }

  return (
    <div>
      <h1>根组件</h1>
      <div>点击次数：{money}</div>
      <button onClick={handleClick}>点击</button>
    </div>
  )
}
