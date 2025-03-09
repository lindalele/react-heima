import React, { Component } from 'react'

// 定义一个modal组件 对话框

class Modal extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.title}
        <div>{this.props.children}</div>
        <div>
          <button>确定</button>
          <button>取消</button>
        </div>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>根组件</h1>
        <Modal title={<h4>我是标题</h4>}>
          <div>
            <a href="http://www.baidu.com">百度一下</a>
          </div>
        </Modal>
      </div>
    )
  }
}
