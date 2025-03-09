import axios from 'axios'
import React, { Component } from 'react'

export default class TodoHeader extends Component {
  state = {
    todoName: ''
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.todoName}
          onChange={(e) => this.setState({ todoName: e.target.value })}
          onKeyUp={this.add}
        />
      </header>
    )
  }
  add = async (e) => {
    if (e.code === 'Enter') {
      // 校验
      if (!this.state.todoName.trim()) return
      // 发送请求，添加
      await axios.post('http://localhost:8888/todos', {
        name: this.state.todoName,
        done: false
      })
      this.setState({
        todoName: ''
      })
      // 重新渲染
      this.props.getTodoList()
    }
  }
}
