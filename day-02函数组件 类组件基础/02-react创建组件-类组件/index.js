import ReactDOM from 'react-dom'
import { Component } from 'react'
// 使用es6中的class语法创建组件

// 定义类组件 也1.必须以大写字母开头
// 2.类组件必须继承由react提供的React.Component父类，从而使用父类中提供的方法或属性
// 也可以按需导入import { Component } from 'react'，继承时候就不用React.Component，引入是import React from 'react'写法麻烦了
// 3.类组件必须提供render方法
// 4.render方法必须有返回值return，表示该组件的UI结构

class Hello extends Component {
  render() {
    return <div>我是Hello组件</div>
  }
}

class Demo extends Component {
  render() {
    return <div>我是Demo组件</div>
  }
}

const element = (
  <div>
    <h1>类组件</h1>
    <Hello></Hello>
    <Demo></Demo>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
