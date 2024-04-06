import { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h3>这是App组件</h3>
        <div>
          点击次数：{this.state.count}
          <button onClick={this.handleClick}>点我</button>
        </div>
      </div>
    )
  }
  // react官网中文档 事件处理就有将近方法
  // 箭头函数没有this,指向指向外部的this
  handleClick = (e) => {
    console.log('哈哈哈', e)
    console.log(this)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
