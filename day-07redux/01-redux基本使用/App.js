import store from './store'
import { addMore, addOne, subMore, subOne } from './store/action'
yarn add redux
redux自身只能处理同步操作，如果需要处理异步操作，需要借助中间件。

没有中间件：（store.dispatch的方法后直接来到reducer）
      callback    action       state 
button --> dispatch ------> reducer ------> view
有中间件：dispatch(action)正常给reducer，但是如果有了中间件dispatch(action)会经过中间件，中间件处理完的结果会交给下一个中间件，下一个中间件处理完的结果会交给下一个中间件，直到交给reducer。
                       这些中间件都会重新生成一个新的dispatch。new dispatch
                       中间件处理完的结果会交给下一个中间件，下一个接收把处理完的最新结果交给下一个
                       中间件会生成一个dispatch
button--(callback)--->mid1--->mid2---(action)---->dispatch--->reducer--->view

export default function App() {
  // 通过redux实现金钱管理

  // 通过store.getState() 就可以获取到store的状态
  const handleClick = () => {
    // store.dispatch(参数是个{}对象，对象封装在addOne()中)
    store.dispatch(addOne())
    // 注意：redux和react没有关系，这样是仅仅是redux变了，但是react没有感知到redux的变化，react数据没有变
    console.log(store.getState()) // 1000+1=1001
  }
  只要store dispatch了action，action就会来到reducer，reducer会根据action.type来决定如何处理action，
  return (
    <div>
      <h1>我是根组件</h1>
      即使getState获取了数据，但是组件没有更新，
      <div>当前的金钱：{store.getState()}</div>
      <div>
        <button onClick={handleClick}>+1</button>
        <button onClick={() => store.dispatch(subOne())}>-1</button>
        <button onClick={() => store.dispatch(addMore(5))}>+5</button>
        <button onClick={() => store.dispatch(subMore(5))}>-5</button>
        <button>+10</button>
        <button>-10</button>
      </div>
    </div>
  )
}
