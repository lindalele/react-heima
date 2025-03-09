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
        info: '开业大酬宾，全场8折'
      },
      {
        id: 2,
        name: '超级好吃的大鸡腿',
        price: 34.2,
        info: '开业大酬宾，全场8折'
      },
      {
        id: 3,
        name: '超级无敌的冰激凌',
        price: 14.2,
        info: '开业大酬宾，全场8折'
      }
    ]
  }
  render() {
    return (
      <div className="parent">
        <h1>父组件</h1>
        {this.state.list.map((item) => (
          // {...item}把整个 item展开，将所有的值全部传递给子组件
          <Son key={item.id} {...item} kan={this.kan}></Son>
        ))}
      </div>
    )
  }
  kan = (id, price) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          let newPrice = +(item.price - price).toFixed(2)
          if (newPrice < 0) {
            newPrice = 0
            alert('白送')
          }
          return {
            ...item,
            price: newPrice
          }
        } else {
          return item
        }
      })
    })
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
          <div>
            <button onClick={this.handleClick}>砍一刀</button>
          </div>
        </div>
      </div>
    )
  }
  handleClick = () => {
    // 生成随机数，，将价格和id传递给父组件
    const price = parseInt(Math.random() * 3 + 1)
    this.props.kan(this.props.id, price)
  }
}

ReactDOM.render(<Father></Father>, document.getElementById('root'))
