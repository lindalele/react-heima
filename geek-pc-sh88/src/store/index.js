// yarn add redux react-redux redux-thunk redux-devtools-extension
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getToken } from '@/utils/storage'

// 三个参数
// 参数1：reducer
// 参数2：可选的对象，可以用于提供初始值
// 参数3：提供中间件
let middlewares
if (process.env.NODE_ENV === 'development') {
  middlewares = composeWithDevTools(applyMiddleware(thunk))
} else {
  middlewares = applyMiddleware(thunk)
}
const store = createStore(
  reducer,
  {
    login: {
      token: getToken(),
    },
  },
  middlewares
)

export default store
