import { Component, createContext } from 'react'
import ReactDOM from 'react-dom'

组件通讯Context跨级组件：父组件向孙组件通讯
根组件可以和任意一个子孙组件直接的通讯叫做跨级组件通讯
// Provider: 提供者
// Consumer：消费者
const { Provider, Consumer } = createContext()

class Sun extends Component {
  render() {
    return (
      <Consumer>
        {(value) => (
          <div>
            <h4>我是孙组件---{value.money}</h4>
            <button onClick={() => value.changeMoney(10)}>修改</button>
          </div>
        )}
      </Consumer>
    )
  }
}

class Son extends Component {
  render() {
    return (
      <div>
        <h3>我是子组件</h3>
        <Sun></Sun>
      </div>
    )
  }
}

class Father extends Component {
  render() {
    return (
      <div>
        <h2>我是父组件</h2>
        <Son></Son>
      </div>
    )
  }
}

class App extends Component {
  // 提供了共享的状态以及修改状态的方法
  state = {
    money: 100
  }
  changeMoney = (money) => {
    this.setState({
      money: this.state.money - money
    })
  }
  render() {
    return (
      <Provider
        value={{
          money: this.state.money,
          changeMoney: this.changeMoney
        }}
      >
        <div>
          <h1>根组件--{this.state.money}</h1>
          <Father></Father>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))
