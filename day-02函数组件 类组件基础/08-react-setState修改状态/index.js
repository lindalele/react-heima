import { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    count: 0,
    money: 100,
    car: '小黄车',
    list: [1, 2, 3],
    obj: {
      name: 'zs',
      age: 18,
    },
  }
  render() {
    return (
      <div>
        <h3>这是App组件</h3>
        <div>
          点击次数：{this.state.count}
          <div>数组：{this.state.list}</div>
          <div>
            {this.state.obj.name} -{this.state.obj.age}
          </div>
          <button onClick={this.handleClick}>点我</button>
        </div>
      </div>
    )
  }

  handleClick = () => {
    // console.log(this.state.count)
    // this.state.count++ //只会让数据变化，react没有监听数据，dom不会更新
    // this.state.list.push(4)
    // this.setState({
    // 想改谁就写谁 不改原来的值，赋值给新的count
    //   count: this.state.count + 1
    // })
    // this.state.obj.name = 'ls'
    // react提供了一个方法setState，可以修改状态，并且让react监听数据的变化，更新dom
    // 更新需要手动写setState,所以在react中数据不能直接改原数据，通过setState修改
    this.setState({
      // react与vue不同的是，react不能改原来的值，数组应该重新给他一个值
      // list: [...this.state.list, 4]
      obj: {
        ...this.state.obj,
        name: 'ls',
      },
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
