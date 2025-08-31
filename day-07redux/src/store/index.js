import { createStore,applyMiddleware } from 'redux'
// applyMiddleware是redux本身提供的方法
import reducer from './reducers'
import logger from 'redux-logger'

import thunk from 'redux-thunk'
// log中间件的使用1：yarn add redux-logger 2.这里引入import logger from 'redux-logger' 3.在store中applyMiddleware(logger)
// log使用不多，react有一个插件用的多开发者工具

// thunk的使用：1.安装yarn add redux-thunk 2.引入import thunk from 'redux-thunk'
// thunk是处理异步的中间件
const store = createStore(reducer,applyMiddleware(thunk,logger,)

export default store
