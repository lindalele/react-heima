import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
export default class TodoMain extends Component {
  // 添加props的校验
  static propTypes = {
    list: PropTypes.array
  }

  del = async (id) => {
    await axios.delete(`http://localhost:8888/todos/${id}`)
    // 重新渲染
    this.props.getTodoList()
  }

  changeDone = async ({ id, done }) => {
    await axios.patch(`http://localhost:8888/todos/${id}`, {
      done: !done
    })
    // 重新渲染
    this.props.getTodoList()
  }
  render() {
    const { list } = this.props
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {list.map((item) => (
            <li key={item.id} className={item.done ? 'completed' : ''}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => this.changeDone(item)}
                />
                <label>{item.name}</label>
                <button
                  className="destroy"
                  onClick={() => this.del(item.id)}
                ></button>
              </div>
              <input className="edit" />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
