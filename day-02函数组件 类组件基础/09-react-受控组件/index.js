import { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    msg: 'hello',
    isDog: false,
  }
  // react处理表单的两种方式：1.受控组件 2.非受控组件
  render() {
    return (
      <div>
        <h3>受控组件</h3>
        {/* 受控组件：表单元素的value值受到了react的state的控制，称为受控组件 */}
        {/* onInput react不用这个事件,因为统一处理过了，两个事件统一了，输入也能触发，
        vue这两个事件是不一样的 */}
        <input
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        />
        <label htmlFor="isDog">是否单身：</label>
        <input
          id="isDog"
          type="checkbox"
          checked={this.state.isDog}
          onChange={this.handleDog}
        />
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    })
  }
  handleDog = (e) => {
    this.setState({
      isDog: e.target.checked,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
