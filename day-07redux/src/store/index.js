import { createStore,applyMiddleware } from 'redux'
// applyMiddleware是redux本身提供的方法
import reducer from './reducers'
import logger from 'redux-logger'

import thunk from 'redux-thunk'
// log中间件的使用1：yarn add redux-logger 2.这里引入import logger from 'redux-logger' 3.在store中applyMiddleware(logger)
// log使用不多，react有一个插件用的多开发者工具

// redux-thunk:可以处理函数形式的action，因此在函数形式的action中可以处理异步代码，完成异步操作。

// thunk的使用：1.安装yarn add redux-thunk 2.引入import thunk from 'redux-thunk'
// thunk是处理异步的中间件

// 第二个参数我们可以去使用他的中间件。
// logger可以打印出原来的值prev state和新的值next state。后面会装一个开发者工具就能看得到，而且看的比这个还更加的清晰。

// 中间件的作用：1.可以处理异步。store.dispatch(action) 只能是同步的，中间件可以处理异步。
// store.dispatch(action)    =>  中间件处理 结束以后触发原本的dispatch(action) =>  reducer

const store = createStore(reducer,applyMiddleware(thunk,logger,)

export default store
