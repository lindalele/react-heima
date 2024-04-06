import ReactDOM from 'react-dom'

// 函数组件：使用js的函数或者箭头函数创建的组件
const isLoading = true
// 注意函数组件必须首字母大写，react借此区分函数和组件的区别。,且需要有返回值，或者返回null

function Hello() {
  if (isLoading) {
    return <div>正在加载中...</div>
  }
  return null
}

const Demo = () => <div>我是demo组件</div>

const element = (
  <div>
    <h1>函数组件</h1>
    <Hello></Hello>
    <Hello></Hello>
    <Hello></Hello>
    <Demo></Demo>
  </div>
)

// package。json中^代表大于等于这个版本 ，yarn.lock指定是具体的版本
// react脚手架项目提供了ejec命令，会出现配置项
ReactDOM.render(element, document.getElementById('root'))
