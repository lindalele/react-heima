import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
// store只接受一个reducer，如果需要多个reducer，需要合并
const rootReducer = combineReducers({
  todos,
  filter,
})

export default rootReducer
