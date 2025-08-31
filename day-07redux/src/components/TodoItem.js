import classnames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeDone, changeName, delTodo } from '../store/actions/todos'
export default function TodoItem({ item }) {
  const [currentId, setCurrentId] = useState('')
  const [currentName, setCurrentName] = useState('')
  const ref = useRef(null)
  const dispatch = useDispatch()

  const showEdit = (id, name) => {
    setCurrentId(id)
    setCurrentName(name)
  }

  const edit = (e) => {
    // console.log(e.code)

    if (e.keyCode === 27) {
      setCurrentId('')
    }
    if (e.keyCode === 13) {
      // console.log('修改')
      dispatch(changeName(currentId, currentName))
      setCurrentId('')
    }
  }

  useEffect(() => {
    // 获取焦点
    ref.current.focus()
  }, [currentId])
  return (
    <li
      className={classnames({
        completed: item.done,
        editing: item.id === currentId
      })}
      key={item.id}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={() => dispatch(changeDone(item.id))}
        />
        <label onDoubleClick={() => showEdit(item.id, item.name)}>
          {item.name}
        </label>
        <button
          className="destroy"
          onClick={() => dispatch(delTodo(item.id))}
        ></button>
      </div>
      <input
        className="edit"
        ref={ref}
        onBlur={() => setCurrentId('')}
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        onKeyUp={edit}
      />
    </li>
  )
}
