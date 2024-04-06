import { Component } from 'react'
import ReactDOM from 'react-dom'
// 状态就是数据
// 函数组件又叫做无状态组件，函数组件是不能自己提供数据的，这种情况在react18之前，hooks之前是这样，有了hooks之后，函数组件也可以自己提供数据了<div className=""></div>
// 类组件又叫做有状态组件，类组件是可以自己提供数据的，组件内部的状态也就是数据发生改变，内容也就会发生改变
// 类组件通过this.state.xxx可以读取数据
// 虽然有了hooks，但是官方还是推荐用类组件.官方不准备用hooks完全替代类组件

class App extends Component {
  state = {
    count: 0,
    money: 100,
    list: ['黑马程序员', '传智播客'],
  }
  render() {
    return (
      <div>
        <h3>这是App组件</h3>
        <div>点击次数：{this.state.count}</div>
        <div>金钱：{this.state.money}</div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
