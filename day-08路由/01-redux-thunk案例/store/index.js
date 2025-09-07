import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// redux开发者工具composeWithDevTools包裹中间件
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
