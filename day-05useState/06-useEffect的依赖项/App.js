// 1. 导入useEffect
import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // componentDidMount + componentDidUpdate
  useEffect(() => {
    // 2. 处理副作用
    // useEffect: 回调函数 会在每次组件渲染后执行
    document.title = '被点击了' + count + '次'
    console.log('副作用执行')
    // useEffect的依赖项的作用是：只要数据改变，就会重新执行useEffect。也就是money改变，这里的代码又重新执行一次。
    // 为了性能优化，可以设置依赖项，只有依赖项改变的时候，才会重新执行useEffect
    // useEffect的依赖项是一个数组，数组中的数据就是依赖项,也就是依赖项count改变的时候，才会重新执行useEffect
  }, [count])

  const [money, setMoney] = useState(100)
  useEffect(() => {
    // 适合详情页面详情接口只有在页面加载的时候执行一次，所以这里设置空数组
    console.log('发送请求')
    // 空数组和省略完全不写是有本质区别的：
    // useEffect的依赖项是一个空数组，表示只有组件挂载的时候，才会执行useEffect
    // useEffect依赖项省略不写，代表的是只要数据改变，就会重新执行useEffect，这个useEffect函数的代码就重新执行一次
    // 空数组使用场景：发送请求，只执行一次的时候，dom注册事件的时候，只要注册一次就可以了
    // 相当于componentDidMount这一个钩子函数
  }, [])

  return (
    <div>
      <h1>根组件</h1>
      <div>点击次数：{count}</div>
      <div>金钱：{money}</div>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <button onClick={() => setMoney(money + 10)}>金钱</button>
    </div>
  )
}
