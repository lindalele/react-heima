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
// 只要是类组件的实例，直接挂在组件上。可以通过this.props获取到组件上的属性
class App extends Component {
  render() {
    const { money, car } = this.props
    return (
      <div>
        <h1>
          我是App根组件 -- {money} -- {car}
        </h1>
      </div>
    )
  }
}
// react money={100} 就是数字100
ReactDOM.render(<App money={100} car="宝骏" />, document.getElementById('root'))
