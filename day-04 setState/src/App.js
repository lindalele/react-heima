import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
import axios from 'axios'
export default class App extends Component {
  state = {
    list: []
  }
  async componentDidMount() {
    this.getTodoList()
  }
  getTodoList = async () => {
    const res = await axios.get('http://localhost:8888/todos')
    console.log(res)
    this.setState({
      list: res.data
    })
  }
  render() {
    return (
      <section className="todoapp">
        <TodoHeader getTodoList={this.getTodoList}></TodoHeader>
        <TodoMain
          list={this.state.list}
          getTodoList={this.getTodoList}
        ></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    )
  }
}
