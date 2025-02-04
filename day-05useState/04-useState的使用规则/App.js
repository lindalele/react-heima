import { useState } from 'react'
/* 
  1. useState可以调用多次，可以提供多个状态
  2. useState只能在函数中使用， 不能嵌套在if else for 函数 中使用
  3. 因为多次调用useState依赖调用的顺序来识别状态
*/
export default function App() {
  console.log('render')

  // useState的参数是初始值，，，useState的参数也可以是一个函数
  // const [count, setCount] = useState(() => {
  //   console.log(
  //     '初始值只调用一次，当组件第一次渲染的时候调用一次，使用setCount更新状态的时候不会调用,使用的是上一次变化的数据'
  //   )
  //   // 从localStorage中获取数据
  //   return 0
  // })
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  // 如果数据很多的情况，useState可以写多次，不建议写成一个对象，否则就是全量更新了。推荐改哪一个就更新哪一个
  const [money, setMoney] = useState(100)

  return (
    <div>
      <h1>根组件</h1>
      <div>点击次数：{count}</div>
      <div>金钱：{money}</div>
      <button onClick={handleClick}>点击</button>
      <button onClick={() => setMoney(money + 100)}>挣钱</button>
    </div>
  )
}
