import { Component } from 'react'
import ReactDOM from 'react-dom'

class Jack extends Component {
  render() {
    return (
      <div>
        <h3>我是Jack组件</h3>
        {/* jack给App组件传递的消息通过父组件的方法传参数给他 */}
        <button onClick={() => this.props.changeMsg('you jump, i look')}>
          对rolse说
        </button>
      </div>
    )
  }
}

class Rose extends Component {
  render() {
    return (
      <div>
        <h3>我是Rose组件 ,jack的话----{this.props.msg}</h3>
      </div>
    )
  }
}

class App extends Component {
  // 公共父组件提供了共享的状态以及修改状态的方法。jack组件通过方法给了数据给App组件，App组件通过传参数给Rose组件，给了数据给Rose组件
  state = {
    msg: '',
  }
  changeMsg = (msg) => {
    this.setState({
      msg,
    })
  }
  render() {
    return (
      <div>
        <h1>根组件</h1>
        <Jack changeMsg={this.changeMsg}></Jack>
        <Rose msg={this.state.msg}></Rose>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))
