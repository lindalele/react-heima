import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
import { TodoAction } from './actions/todos'
import reducers from './reducers'
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

// function add(n1:  number, n2: number):number {
//   return n1 + n2
// }
// type Fn = typeof add

// 泛型工具类 Return<Type>  获取这个Type（函数）的返回值类型
// type Res = ReturnType<typeof add>
export type RootState = ReturnType<typeof store.getState>
export type RootThunkAction = ThunkAction<void, RootState, any, TodoAction>

export default store
