import React from 'react'
import ReactDOM from 'react-dom'
const arr = [1, 2, 3]
const obj = {
  name: 'zs'
}
const element = (
  <div>
    <h1 list={{ arr, fn: this.fn }}>哈哈哈</h1>
    {/* <div>{arr.map(item => <li></li>)}</div> */}
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
