import React, { Component } from 'react'
import PropTypes from 'prop-types'
// console.log(PropTypes)

class Demo extends Component {
  render() {
    return (
      <div>
        <h3>我的金钱：{this.props.money + 100}</h3>
        <div>{this.props.name.toUpperCase()}</div>
      </div>
    )
  }

  // props校验
  static propTypes = {
    money: PropTypes.number,
    // 字符串类型 且  必传
    name: PropTypes.string.isRequired,
    children: PropTypes.element,
    user: PropTypes.shape({
      age: PropTypes.number.isRequired
    })
  }
  static defaultProps = {
    money: 100
  }
}
// 给组件添加类型的校验
// Demo.propTypes = {
//   money: PropTypes.number,
//   // 字符串类型 且  必传
//   name: PropTypes.string.isRequired,
//   children: PropTypes.element,
//   user: PropTypes.shape({
//     age: PropTypes.number.isRequired
//   })
// }

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>根组件</h1>
        <Demo money={100} name="zs" user={{ a: 'b', age: 18 }}></Demo>
      </div>
    )
  }
}
