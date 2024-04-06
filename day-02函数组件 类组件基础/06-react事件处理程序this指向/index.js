import { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    count: 0,
    money: 100,
    list: ['黑马程序员', '传智播客'],
  }
  render() {
    相当于let onClick = this.handleClick
    // 外面就是去调用了onClick() 也就是指向外层，外加上模块化开发环境this指向的是undefined
    return (
      <div>
        <h3>这是App组件</h3>
        <div>
          点击次数：{this.state.count}
          {/* react注册事件只能给函数，不能调用 */}
          <a href="http://www.baidu.com" onClick={this.handleClick}>
            点我
          </a>
        </div>
      </div>
    )
  }

  handleClick(e) {
    // 阻止浏览器默认行为
    e.preventDefault()
    e.stopPropagation()
    console.log('点击事件')
    // 在模块化开发中，this指向的是undefined****
    // render里面的this就是react当前组件 
    console.log(this) // 这里的this指向的是undefined
  }
  fn() {
    console.log('mouseenter')
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
