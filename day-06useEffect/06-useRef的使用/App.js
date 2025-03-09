import { useRef } from 'react'
import Demo from './Demo'
export default function App() {
  这里不能用this，因为在函数组件中使用的hooks里面不能用this.createRef，,所以用useRef可以直接获取dom元素
  // 一般会给ref一个初始值，这个初始值可以是null，也可以是其他值，但是不能是undefined
  const ref = useRef(null)
  console.log(ref)

  const click = () => {
    // useRef可以获取dom元素，也可以获取组件
    console.log(ref.current.sayHi())
  }
  return (
    <div>
      <h1>useRef的使用</h1>
      <div>
        {/* <input ref={ref} type="text" /> 
        获取的时候是ref.current.value
        */}
        <button onClick={click}>按钮</button>
       注意： 函数组件不能用ref，因为函数组件的方法，是函数组件内部定义的函数变量；
       如果是类组件，他里面可以写函数，写了sayHi,类的实例就可以调用sayHi。
       所以这个组件必须是类组件，才能用ref获取组件实例
        <Demo ref={ref}></Demo>
      </div>
    </div>
  )
}
