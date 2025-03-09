import React, { Component } from 'react'
import PropTypes from 'prop-types'
// console.log(PropTypes)

class Demo extends Component {
  render() {
    const { money = 100, name = 'zs' } = this.props
    return (
      <div>
        <h3>我的金钱：{money + 100}</h3>
        <div>{name.toUpperCase()}</div>
      </div>
    )
  }
}
// 给组件添加类型的校验
Demo.propTypes = {
  money: PropTypes.number,
  name: PropTypes.string
}

Demo.defaultProps = {
  money: 100,
  name: 'zs'
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>根组件</h1>
        <Demo></Demo>
      </div>
    )
  }
}
