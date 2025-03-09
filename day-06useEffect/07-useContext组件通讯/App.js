import React, { useState } from 'react'
import Father from './Father'
// export const Context = createContext()
import { Context } from './index'
export default function App() {
  const [count, setCount] = useState(100)
  //  const Context = createContext()
  // Context里面有Provider,Consumer
  return (
    <Context.Provider value={{ count: count }}>
      <div>
        <h1>根组件</h1>
        <Father></Father>
      </div>
    </Context.Provider>
  )
}
