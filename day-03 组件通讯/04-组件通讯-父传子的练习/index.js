import { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class Father extends Component {
  state = {
    // 列表数据
    list: [
      {
        id: 1,
        name: '超级好吃的棒棒糖',
        price: 18.8,
        info: '开业大酬宾，全场8折',
      },
      {
        id: 2,
        name: '超级好吃的大鸡腿',
        price: 34.2,
        info: '开业大酬宾，全场8折',
      },
      {
        id: 3,
        name: '超级无敌的冰激凌',
        price: 14.2,
        info: '开业大酬宾，全场8折',
      },
    ],
  }
  render() {
    return (
      <div className="parent">
        <h1>父组件</h1>
        {this.state.list.map((item) => (
          // {...item}把整个 item展开，将所有的值全部传递给子组件
          // {...item}相当于把name、price、info传递给子组件
          // name={item.name} price={item.price} info={item.info}
          <Son key={item.id} {...item}></Son>
        ))}
      </div>
    )
  }
}

class Son extends Component {
  render() {
    const { name, price, info } = this.props
    return (
      <div className="child">
        <div className="product">
          <h3>标题：{name}</h3>
          <div className="price">价格：{price}</div>
          <div>{info}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Father></Father>, document.getElementById('root'))
