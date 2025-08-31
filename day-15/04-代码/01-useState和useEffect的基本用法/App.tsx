import { useEffect, useState } from 'react'

export default function App() {
  // 由于useState可以指定泛型参数也叫类型变量也就是<>，useSate函数传了参数也就是初始值以后，ts会自动根据初始值进行类型推断，类型就确定了，所以useState的泛型参数可以省略（仅限基本类型数据，如果是复杂类型数据，还是需要泛型参数的，见进阶用法）
  // const [count, setCount] = useState<number>(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = window.setInterval(() => {
      console.log('哈哈哈')
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <div>点击次数：{count}</div>
      <button onClick={() => setCount(count + 1)}>修改</button>
    </div>
  )
}
