// <div id="box" class="demo">这是一个react案例</div>
// import React from 'react'
// import ReactDOM from 'react-dom'
// 注意js中有class关键字，所以类名的时候要写className
// const div = React.createElement('div', {id: 'box', className: 'demo' }, '这是一个react案例')

// ReactDOM.render(div, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'

const ul = React.createElement(
  'ul',
  { className: 'list' },
  React.createElement('li', null, '香蕉'),
  React.createElement('li', null, '橘子'),
  React.createElement('li', null, '苹果')
)

ReactDOM.render(ul, document.getElementById('root'))
