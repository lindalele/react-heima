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
          <button
            onClick={(e) => {
              // 注册事件是一个函数，点击一下才会调用里面的函数
              // 点击事件通过this调用，this指向的就是组件
              this.handleClick(e)
            }}
          >
            点我
          </button>
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
