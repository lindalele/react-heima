import { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h3>这是App组件</h3>
        <div>
          点击次数：{this.state.count}
          {/* bind改变指向会返回一个新函数，不会去调用，call、apply能改this指向，但是会调用 */}
          <button onClick={this.handleClick.bind(this)}>点我</button>
        </div>
      </div>
    )
  }

  handleClick(e) {
    console.log('哈哈哈', e)
    console.log(this)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
