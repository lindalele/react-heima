// 1. 导入方法
import { createStore } from 'redux'

// reducer
function reducer(state = 0, action) {
  if (action.type === 'add') {
    return state + 1
  }
  if (action.type === 'sub') {
    return state - 1
  }
  return state
}

// 2. 创建store对象
// 参数：reducer  函数
const store = createStore(reducer)

// store.getState()  获取store的状态
// store.dispatch(action) 分配任务
console.log(store.getState())

store.dispatch({ type: 'add' })
store.dispatch({ type: 'add' })
// store.dispatch({ type: 'abc' })
store.dispatch({ type: 'sub' })

console.log(store.getState())
