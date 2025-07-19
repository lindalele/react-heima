import React, { Component, createRef } from 'react'
setState本身并不是一个异步的方法，是一个同步的方法。但是react内部性能优化，react会将多次的setState合并成一次，所以setState看起来像是异步的。
setState不是宏任务队列，也不属于微任务队列，它属于react自己维护的队列。
export default class App extends Component {
  state = {
    showInput: false,
  }
  inputRef = createRef()
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        {this.state.showInput ? (
          <input ref={this.inputRef} type="text" placeholder="请输入你的回复" />
        ) : (
          <button>回复</button>
        )}
      </div>
    )
  }
  // this.setState在生命周期里面或者是react提供的事件里面，react会自动的将多次的setState合并成一次，所以setState看起来像是异步的。
  但是如果在原生环境里面，也就是：不是react提供的事件注册，就是原生环境，就是同步的，会等它执行完再执行 setTimeout/setInterval也是原生环境，就是同步的，会等它执行完再执行
  componentDidMount() {
  使用原生环境不是react提供的事件注册，就是原生环境，，就是同步的，会等它执行完再执行
    document.querySelector('button').onclick = () => {
        这不是react提供的事件注册，就是原生环境，就是同步的，会等它执行完再执行
      this.setState({
        showInput: true
      })
      this.inputRef.current.focus()
    }


  }
}
