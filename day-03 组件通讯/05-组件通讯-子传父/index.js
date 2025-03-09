import { Component } from 'react'
import ReactDOM from 'react-dom'

class Father extends Component {
  state = {
    money: 10000,
    car: '28大杠',
  }
  render() {
    const { money, car } = this.state
    return (
      <div>
        <h1>
          我是父组件 -- {money} -- {car}
          <button onClick={this.handleClick}>修改</button>
        </h1>
        {/* 2. 父组件把函数传递给子组件 */}
        <Son money={money} car={car} buy={this.buy}></Son>
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      money: this.state.money + 10,
      car: '劳斯莱斯.幻觉',
    })
  }
  // 1. 父组件提供函数
  // 如果函数里面没有this，这样写也可以
  // buy(){
  //  this是子组件调用的，所以this指向子组件的props
  // }
  buy = (money) => {
    //这么写是为了解决this指向问题
    this.setState({
      //this指向父组件自己
      money: this.state.money - money,
    })
  }
}

class Son extends Component {
  render() {
    return (
      <div>
        <h3>
          我是子组件 -- {this.props.car} --- {this.props.money}
          <button onClick={this.handleClick}>买皮肤</button>
        </h3>
      </div>
    )
  }
  handleClick = () => {
    // 3. 子组件通过props调用父组件传递的函数
    this.props.buy(100)
  }
}

ReactDOM.render(<Father></Father>, document.getElementById('root'))
