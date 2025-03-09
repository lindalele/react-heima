import React, { Component } from 'react'
import { createRef } from 'react/cjs/react.development'

// 只有类组件才有生命周期，函数组件没有
// 挂载阶段只执行一次：constructor、render（只适合渲染结构）、componentDidMount（适合发请求，操作dom）
// 更新阶段：render还没更新完、componentDidUpdate组件更新好了 （更新时机：1.子组件接受到的props改变了、2.setState改变自己的数据、3.forceUpdate）
class DouDou extends Component {
  componentDidMount() {
    this.timerId = setInterval(function () {
      console.log('别打我，我是豆豆')
    }, 1000)

    window.addEventListener('mousemove', this.mouseFn)
  }
  mouseFn = (e) => {
    console.log(e.pageX, e.pageY)
  }
  render() {
    return (
      <div>
        <h3>豆豆组件--{this.props.count}</h3>
      </div>
    )
  }
  // 接收到的props数据变化了
  componentDidUpdate() {
    console.log('doudou componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('豆豆凉了')
    window.clearInterval(this.timerId)
    window.removeEventListener('mousemove', this.mouseFn)
  }
}

export default class App extends Component {
  // 类的构造函数， 适合给组件初始化数据
  // 如果写了extends，继承，那么，必须写super
  // 类初始化就会执行，适合给组件初始化数据
  constructor() {
    super()
    // 给组件初始化数据
    this.state = {
      count: 0,
    }
    this.aRef = createRef()
    console.log('constructor执行了')
  }
  // 简写形式就是下面这两行，等价于constructor的写法
  // state = {}
  // aRef = createRef()

  // react生命周期函数render是一定要写上的
  // 每次组件渲染都会触发，渲染的时候执行，不代表dom已经渲染好了；更新阶段也会执行
  // render不止执行一次，适合渲染结构，注意不要在里面setState
  render() {
    console.log('render执行了')
    return (
      <div>
        <h1>
          根组件-{this.state.msg}-
          <button onClick={this.handleClick}>打豆豆</button>
          <hr />
          {this.state.count < 5 ? (
            <DouDou count={this.state.count}></DouDou>
          ) : (
            <div>豆豆被打死了~</div>
          )}
        </h1>
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
    // 强制更新
    // this.forceUpdate()
  }
  // 组件已经挂载好了 完成dom渲染，可以在这里操作dom
  // 挂载阶段，只执行一次，适合发送请求、执行dom操作
  componentDidMount() {
    console.log('componentDidMount执行')
  }
  //componentDidUpdate执行的3种场景
  // 1 父组件给子组件的数据变了，子组件会重新渲染，
  // setState组件自己的数据变了，组件会重新渲染，只要调用了this.setState，组件就会重新渲染
  // 调用了this.forceUpdate，强制执行会重新渲染
  // 组件更新完毕，可以在这钩子函数里面操作dom，更新完毕之后操作数据比如存储等一些事情
  // 注意：更新阶段的钩子函数里一定不能调用setState，否则会陷入死循环再一次来到更新函数
  //注意： 子组件的更新函数先执行，最后执行父组件的更新函数
  componentDidUpdate() {
    更新阶段钩子函数，可以操作dom,或者数据改变了存本地的时候，可以在这里操作。更新阶段一定不能调用setState，否则会陷入死循环，也不能forceUpdate，否则会陷入死循环
    console.log('componentDidUpdate执行')
    // this.setState({})
  }
}
