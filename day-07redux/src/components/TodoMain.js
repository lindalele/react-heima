import { useDispatch, useSelector } from 'react-redux'
import { changeAllDone } from '../store/actions/todos'

import TodoItem from './TodoItem'
export default function TodoMain() {
  const list = useSelector((state) => {
    if (state.filter === 'active') {
      return state.todos.filter((item) => !item.done)
    } else if (state.filter === 'completed') {
      return state.todos.filter((item) => item.done)
    } else {
      return state.todos
    }
  })
  const isCheckAll = list.every((item) => item.done)
  const dispatch = useDispatch()

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isCheckAll}
        onChange={() => dispatch(changeAllDone(!isCheckAll))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map((item) => (
          <TodoItem key={item.id} item={item}></TodoItem>
        ))}
      </ul>
    </section>
  )
}
