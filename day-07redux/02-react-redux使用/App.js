import { useDispatch } from 'react-redux'

// 直接写useSelector就不会导入错，自动导入
import { useSelector } from 'react-redux'
import { addMore, addOne, subMore, subOne, setName } from './store/action'
import Demo from './Demo'
export default function App() {
  // 这么写，只能是组件中内部可以使用，外部如果使用，需要使用组件通讯方式。所以这个时候就可以用到redux
  // const [count, setCount] = useState(0)
  // 通过redux实现金钱管理
  // 通过自己导入的store ,调用store.getState() 就可以获取到store的状态。但是用了react-redux之后，store.getState()就不需要了，因为react-redux,store统一提供了
  // useSelector((state)里面的参数就是store里面的state，注意这样写以后，这个值就不用监听，他自己就会更新***
  const money = useSelector((state) => {
    // 由于reducer是合并的，所以我们用的是money的模块，所以这里需要写state.money
    return state.money
  })
  const user = useSelector((state) => state.user)

  // 如果是用store.dispatch，数据更新了，但是没有通知到组件，react组件不会更新，所以需要使用react-redux提供的useDispatch,组件就会更新了
  const dispatch = useDispatch()
  return (
    <div>
      <h1>我是根组件</h1>
      <div>当前的金钱：{money}</div>
      <div>
        <button onClick={() => dispatch(addOne())}>+1</button>
        <button onClick={() => dispatch(subOne())}>-1</button>
        <button onClick={() => dispatch(addMore(5))}>+5</button>
        <button onClick={() => dispatch(subMore(5))}>-5</button>
        <button>+10</button>
        <button>-10</button>

        <hr />
        <Demo></Demo>

        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <div>
          <h3>用户管理</h3>
          <div>用户名：{user.name}</div>
          <div>用户密码：{user.password}</div>
          <button onClick={() => dispatch(setName('ls'))}>修改用户名</button>
        </div>
      </div>
    </div>
  )
}
