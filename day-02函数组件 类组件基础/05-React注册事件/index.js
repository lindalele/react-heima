import { Component } from 'react'
import ReactDOM from 'react-dom'

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
        <div>
          点击次数：{this.state.count}
          react注册事件的语法：
          {/*  on事件名称={函数，函数会找不到，所以用this.代表类组件中的一个方法} on事件名称={this.方法名} */}
          <a
            href="http://www.baidu.com"
            onClick={this.handleClick}
            onMouseEnter={this.fn}
          >
            点我
          </a>
        </div>
        <div>金钱：{this.state.money}</div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
  // 事件是一个函数，和dom元素很像，可以接受到一个e

  handleClick(e) {
    // 阻止浏览器默认行为
    // react没有像vue一样提供.prevent.stop方法，需要自己写
    e.preventDefault()
    e.stopPropagation()
    console.log('点击事件')
  }
  fn() {
    console.log('mouseenter')
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
