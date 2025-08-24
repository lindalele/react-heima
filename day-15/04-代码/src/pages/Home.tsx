import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { addTodo, changeDone, delTodo } from '../store/actions/todos'

export default function Home() {
  // 泛型参数1：指定state的类型默认是 {}
  // 泛型参数2：指定函数的返回值类型
  // const todos = useSelector((state: RootState) => state.name)
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const add = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      dispatch(addTodo(name))
      setName('')
    }
  }
  return (
    <div>
      <input type="text" value={name} onChange={onChange} onKeyUp={add} />
      <ul>
        {todos.map((item) => {
          return (
            <li className={item.done ? 'completed' : ''} key={item.id}>
              <span onClick={() => dispatch(changeDone(item.id))}>
                {item.name}
              </span>{' '}
              <button onClick={() => dispatch(delTodo(item.id))}>X</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
