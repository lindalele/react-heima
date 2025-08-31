import { combineReducers } from 'redux'
// 在reducer的每一个模块的state中，都保存了该模块的状态;而如果在组件中使用时，拿到的state是所有模块的state的集合，即一个对象，这个对象中包含了各个模块的state,使用是用state.money。
import { SET_NAME, SUB_MORE } from './ActionTypes'
function money(state = 1000, action) {
  // console.log('reducer执行', action)
  // 处理各种各样的action
  switch (action.type) {
    case 'addOne':
      return state + 1
    case 'subOne':
      return state - 1
    case 'addMore':
      return state + action.payload
    case SUB_MORE:
      return state - action.payload
    default:
      // 很重要
      return state
  }
}

function user(state = { name: 'zs', password: '123456' }, action) {
  if (action.type === SET_NAME) {
    // 只是改名字，密码不变
    return {
      ...state,
      name: action.payload,
    }
  }
  return state
}
// 由于store只接受一个reducer，所以需要把多个reducer合并成一个
// 合并多个reducer
const rootReducer = combineReducers({
  // a 和 b指的就是模块的名字
  // a:money,
  // b:user,
  money,
  user,
})

export default rootReducer
