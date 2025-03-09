import { Component } from 'react'
import ReactDOM from 'react-dom'

class Son1 extends Component {
  render() {
    return (
      <div>
        <h3>我是大儿子组件</h3>
        <div>妈妈：</div>
        <div>弟媳：</div>
      </div>
    )
  }
}

class Son2 extends Component {
  render() {
    return (
      <div>
        <h3>我是小儿子组件</h3>
        <div>妈妈：</div>
        <div>
          配偶：
          <input type="text" />
        </div>
      </div>
    )
  }
}

class App extends Component {
  // 提供了共享的状态以及修改状态的方法
  state = {
    msg: ''
  }
  changeMsg = (msg) => {
    this.setState({
      msg
    })
  }
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <div>
          配偶：
          <input type="text" />
        </div>
        <div>儿媳妇：</div>
        <Son1></Son1>
        <Son2></Son2>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))
