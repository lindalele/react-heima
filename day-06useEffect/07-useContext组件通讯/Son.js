import React, { useContext } from 'react'
// 一般会放在外层组件中，调用公共的Consumer
import { Context } from './index'
// context只能createContext创建一次，如果调用多次，那么provider和consumer就不能匹配上
export default function Son() {
  const value = useContext(Context)
  console.log(value)

  return (
    <Context.Consumer>
      {(value) => {
        ;<div>
          <h3>我是 Son组件--{value.count}</h3>
        </div>
      }}
    </Context.Consumer>
  )
}
