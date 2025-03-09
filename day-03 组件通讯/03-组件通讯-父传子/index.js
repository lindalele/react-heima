import { Component } from 'react'
import ReactDOM from 'react-dom'

class Father extends Component {
  // 1. 父组件提供数据
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
        {/* 2. 父组件通过属性prop的方式传递给子组件 */}
        <Son money={money} car={car}></Son>
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      money: this.state.money + 10,
      car: '劳斯莱斯.幻觉',
    })
  }
}
// 子组件
class Son extends Component {
  render() {
    return (
      <div>
        {/* 3. 子组件通过this.props获取属性 */}
        <h3>
          我是子组件 -- {this.props.car} --- {this.props.money}
        </h3>
      </div>
    )
  }
}

ReactDOM.render(<Father></Father>, document.getElementById('root'))
