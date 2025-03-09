import React, { Component, createRef } from 'react'

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
          <button onClick={this.handleClick}>回复</button>
        )}
      </div>
    )
  }
  // componentDidMount() {
  使用原生环境不是react提供的事件注册，就是原生环境，，就是同步的，会等它执行完再执行
  //   document.querySelector('button').onclick = () => {
  //     this.setState({
  //       showInput: true
  //     })
  //     this.inputRef.current.focus()
  //   }
  // }
  handleClick = () => {
    // 如果不用多次调用setState，直接用this.setState({showInput:true})对象即可
    // this.setState({
    //   showInput: true
    // })
    // console.log(this.state.showInput)
    // // 不能直接调用，dom还没有显示，因为用的是if渲染的
    // this.inputRef.current.focus()

    // this.setState是异步的，它们会放到一个更新队列里面，等待更新完毕后才会执行这里面的代码
    // 注意同步和异步的区别：
    react在生命周期中或者在事件处理函数中调用setState，react会自动批处理，多次调用setState只会执行一次
    // 如果在async异步环境中，this.setState是同步的表现
    // handleClick = async () => {
    //    this.setState({ count: this.state.count + 1 })}
    react在setTimeout、setInterval、promise、async、原生事件处理函数中调用setState，react不会自动批处理，多次调用setState会执行多次

    // setTimeout(()=>{
    //   this.setState({ count: this.state.count + 1 })
    //   // 原生定时器包裹以后，就是同步的，会等它执行完再执行
    //   console.log(this.state.showInput)
    //   this.inputRef.current.focus()
    // })

    this.setState(
      {
        showInput: true,
      },
      // 相当于vue的this.nextTick dom更新完后执行
      () => {
        console.log('会等待setState执行结束后才会执行')
        console.log(this.state.showInput)
        this.inputRef.current.focus()
      }
    )
  }
}
