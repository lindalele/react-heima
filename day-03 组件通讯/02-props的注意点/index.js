import { fn } from 'moment'
import { Component } from 'react'
import ReactDOM from 'react-dom'

// 1. 函数组件通过参数props获取到组件上的属性。
function App1({ money, car }) {
  // console.log(props)
  return (
    <div>
      <h1>
        我是App根组件---{money} - {car}
      </h1>
    </div>
  )
}

class App extends Component {
  render() {
    const { money, car } = this.props
    return (
      <div>
        <h1>
          我是App根组件 -- {money} -- {car}
          <div>{this.props.aa}</div>
          <button onClick={this.change}>修改</button>
        </h1>
      </div>
    )
  }
  change = () => {
    // 单向数据流react，父组件数据变更会自动流向子组件
    this.props.fn()
    // this.props.money++
    // this.props.car = 'abc'
  }
}
// 可以传任意数据，数字、字符串、函数、包括jsx
ReactDOM.render(
  <App
    money={100}
    car="宝骏"
    fn={() => {
      console.log('123')
    }}
    aa={<div>123</div>}
  />,
  document.getElementById('root')
)
