// 1. action 是一个对象  {type: 'add', num: 5}
// 2. reducer 是一个函数，，，function reducer(state, action) =>  newState

import { createStore } from 'redux'

// 注意1：state需要有一个默认的初始值
// 注意2：reducer不管能不能处理，一定要有返回结果
function reducer(state = 0, action) {
  if (action.type === 'add') {
    return state + 1
  }
  if (action.type === 'addMore') {
    return state + action.num
  }
  return state
}

// 3. store是一个对象，通过createStore(reducer)

const store = createStore(reducer)

// store操作redux

// 订阅store状态的变化，只要状态发生变化，
// 返回的函数，用于取消订阅
const unSubscribe = store.subscribe(function () {
  console.log(store.getState())
})

store.dispatch({ type: 'add' })

// console.log(store.getState())

store.dispatch({ type: 'addMore', num: 5 })

// console.log(store.getState())

store.dispatch({ type: 'addMore', num: 10 })

// console.log(store.getState())
unSubscribe()

store.dispatch({ type: 'addMore', num: 10 })
