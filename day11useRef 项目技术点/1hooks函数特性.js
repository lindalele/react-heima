react 的组件，所以只要改状态，我们说组件就会更新一遍。
一个函数只要调用结束了，它里面的状态就会消失，下次再调用的时候会再创建一侧。如果函数内部使用了外部变量，由于js的闭包特性，这个外部变量会一直存在，所以状态会一直存在。

export default function Hooksprop() {
    // function Hooksprop()是一个函数，setCount(count + 1)是一个函数，使用了外部的变量count,是闭包。第一次调用结束内部不会释放，等着点下一次。所以状态会一直存在。这样才能实现累加。
    // 随着每一次的点击上一次的函数不绑定了，所以上一次的handleClick函数会释放，所以上一次的状态也会释放。按钮会重新绑定一个最新的handleClick函数
  const [count, setCount] = useState(0);
const handleClick = () => {
    setCount(count + 1)
}
  return (
    <div>
      <button onClick={handleClick}>点我加1</button>
      <p>点击次数：{count}</p>
    </div>
  )
}