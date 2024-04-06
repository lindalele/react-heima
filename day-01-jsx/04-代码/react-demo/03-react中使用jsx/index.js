import React from 'react'
import ReactDOM from 'react-dom'
// 创建react元素  prettier

const element = (
  <>
    <ul>
      <li>苹果</li>
      <li>香蕉</li>
      <li>榴莲</li>
    </ul>
    <div>123</div>
    <input type="text" />
    <div className="aa"></div>
    <label htmlFor="123"></label>
  </>
)

function fn() {
  return <div>123</div>
}

// 渲染
ReactDOM.render(element, document.getElementById('root'))
