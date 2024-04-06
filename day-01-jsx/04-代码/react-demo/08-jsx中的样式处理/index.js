import ReactDOM from 'react-dom'
import './index.css'
// class ===> className
// 在jsx中 style 不能是字符串，而是一个对象  dom.style.xxx
// jsx中style行内样式的px可以省略
const element = (
  <div>
    <h1 style={{ backgroundColor: 'red', width: '40%', height: 400 }}>
      我是一个标题
    </h1>

    <h3 className="box">哈哈哈</h3>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
