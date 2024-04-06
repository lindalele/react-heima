// 1. 导入`react`和`react-dom`
// 2. 创建react元素(虚拟DOM)
// 3. 渲染react元素到页面中

import React from 'react'
import ReactDOM from 'react-dom'

// 创建react元素 （虚拟DOM）
// 参数1：标签名
// 参数2：标签的属性，是一个对象 {id: 'box'}
// 参数3：标签的内容
// <h1 id="box" title="嘻嘻">我是一个盒子</h1>
const element = React.createElement(
  'h1',
  { id: 'box', title: '嘻嘻' },
  '我是一个盒子'
)

// 参数1：需要渲染的react元素
// 参数2：渲染到哪里，，需要一个DOM节点
ReactDOM.render(element, document.getElementById('root'))
