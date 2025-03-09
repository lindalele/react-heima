import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h1>
          根组件-{this.state.count}-
          <button onClick={this.handleClick}>打豆豆</button>
        </h1>
      </div>
    )
  }
  handleClick = () => {
    // react自己提供了一个更新队列,多次调用页面只会执行一次。setState会把所有的合并成一个对象，最后同一执行
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count) //0 setState是异步的,打印不会立即更新
    console.log(document.querySelector('h1').innerHTML) //0 不会立即更新dom

    // 更新数据  更新DOM
    this.setState(
      // setState里面还可以传一个回调函数,dom更新还是在所有setState执行完毕之后才会更新,好处是可以获取到上一次的状态
      // 上一次的状态
      (preState) => {
        return {
          count: preState.count + 1,
        }
      },
      // setState里面还可以传第2个回调函数
      // 可以获取到更新后的状态
      //setState的第二个函数参数是可以省略的
      () => {
        console.log('会等待setState执行结束后才会执行')
        console.log(this.state.count) //1
        console.log(document.querySelector('h1').innerText) //1
      }
    )
    // this.setState((preState) => {
    // setState里面还可以传一个回调函数
    // 上一次的状态
    // 写函数会基于上一次的值
    //   return {
    //     count: preState.count + 1
    //   }
    // })
    // this.setState((preState) => {
    //   return {
    //     count: preState.count + 1
    //   }
    // })
  }
}
