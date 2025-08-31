import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions/todos'

export default function TodoHeader() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const add = (e) => {
    if (e.code === 'Enter') {
      if (!name) return alert('内容不能为空')
      dispatch(addTodo(name))
      setName('')
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={add}
      />
    </header>
  )
}
