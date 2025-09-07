import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeFilter } from '../store/actions/filter'
import { clearTodo } from '../store/actions/todos'

export default function TodoFooter() {
  const list = useSelector((state) => state.todos)
  const filter = useSelector((state) => state.filter)
  const leftCount = list.filter((item) => !item.done).length
  const dispatch = useDispatch()
  const arr = ['all', 'active', 'completed']
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount}</strong> item left
      </span>
      <ul className="filters">
        {arr.map((item) => (
          <li key={item}>
            <a
              className={item === filter ? 'selected' : ''}
              onClick={() => dispatch(changeFilter(item))}
              href="#/"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {/* 这里是中间件的dispatch， */}
      <button className="clear-completed" onClick={() => dispatch(clearTodo())}>
        Clear completed
      </button>
    </footer>
  )
}
