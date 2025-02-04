import { useState } from 'react'
export default function App() {
  // 1. 定义一个状态变量
  // 2. 定义一个修改状态变量的函数
  const result = useState(0)
  console.log(result) // 结果是一个数组[0, function(){}] 数组第0项是状态，第1项是修改状态的方法
  // const count= result[0];
  // const setCount= result[1];
  // 由于数组解构，所以可以简化为
  // 变量名字，叫什么度可以count1也行
  //   解构出的变量名，和直接定义const count=0的区别在于，直接定义的没有办法修改，解构出的变量可以修改

  const [count, setCount] = useState(0)
  handleClick = () => {
    // 注意修改的时候，不要直接修改旧值，而是要基于旧值进行修改
    setCount(count + 1)
  }
  return (
    <div>
      <h2>App</h2>
      <p>点击次数{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点击+1
      </button>
      <button onClick={handleClick}>点击+1</button>
      {/* <button onClick={() => {
                result[1](count - 1);
            }}>-1</button> */}
      <hr />
    </div>
  )
}
