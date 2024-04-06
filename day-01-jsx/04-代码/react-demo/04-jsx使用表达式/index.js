import ReactDOM from 'react-dom'

const name = '李云迪'
const car = {
  brand: '劳斯莱斯'
}
const age = 18

const fn = () => {
  return '牢房'
}

const div = <div>爱好：PC</div>

// jsx中可以通过{}渲染表达式，但是不能出现语句
const element = (
  <div>
    <h1>个人信息展示</h1>
    <div>姓名：{name}</div>
    <div>车：{car.brand}</div>
    <div>是否成年：{age >= 18 ? '成年' : '未成年'}</div>
    <div>地址：{fn()}</div>
    <div>{div}</div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
