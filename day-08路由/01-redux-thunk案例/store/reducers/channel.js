import { CHANGE_ACTIVE, SET_CHANNEL } from '../constants'

const initState = {
  list: [],
  active: 0,
}
// 初始值不止是列表，还有active，所以这里的state初始值应该给一个对象
export default function channel(state = initState, action) {
  if (action.type === SET_CHANNEL) {
    // 返回数据，组件中可以调用
    // 返回的数据中不能是list,yinwei channel组件中还有其他数据，所以应该返回一个对象
    return {
      ...state,
      // 只改list,原来的数据不变
      list: action.payload,
    }
  }
  if (action.type === CHANGE_ACTIVE) {
    return {
      ...state,
      active: action.id,
    }
  }
  return state
}
