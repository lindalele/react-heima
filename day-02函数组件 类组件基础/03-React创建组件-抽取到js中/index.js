import ReactDOM from 'react-dom'
// react中组件不像vue有单独的.vue后缀，react组件就是.js，为了区分组件，react常用.jsx后缀
// 在引入.jsx文件时候，如果项目没有进行配置，.jsx后缀是不能省略的

import Hello from './components/Hello.jsx'
import Demo from './components/Demo.jsx'
const element = (
  <div>
    <h1>类组件</h1>
    <Hello></Hello>
    <Demo></Demo>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
