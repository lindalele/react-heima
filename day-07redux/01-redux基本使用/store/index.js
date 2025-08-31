// store: 整个数据的仓库，负责关联reducer和action
// store可以给reducer分配action
import { createStore } from 'redux'
import reducer from './reducer'

// 只要创建了store,需要传递reducer，store就会自动的dispatch一次action，action的type是'@@redux/INIT.'。目的是store能够有初始值.
// 目的：就是为了store能够有初始值。
const store = createStore(reducer)
// store.dispatch({type: '@@xxxxxxxx'})

export default store
