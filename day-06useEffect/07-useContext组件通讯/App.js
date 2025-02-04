import React, { useState } from 'react'
import Father from './Father'
import { Context } from './index'
export default function App() {
  const [count, setCount] = useState(100)
  return (
    <Context.Provider value={{ count: count }}>
      <div>
        <h1>根组件</h1>
        <Father></Father>
      </div>
    </Context.Provider>
  )
}
