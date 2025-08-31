// store: 整个数据的仓库，复杂关联reducer和action
// store可以给reducer分配action
import { createStore } from 'redux'
import reducer from './reducer'

// 只要创建了store,需要传递reducer，store就会自动的dispatch一次action
// 目的：就是为了store能够有初始值
const store = createStore(reducer)
// store.dispatch({type: '@@xxxxxxxx'})

export default store
