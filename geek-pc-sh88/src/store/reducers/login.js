import { LOGIN, LOGOUT } from '../constants'

const initValue = {
  token: '',
}
export default function login(state = initValue, action) {
  if (action.type === LOGIN) {
    // return了一个对象更好，扩展性更强，以防止将来有更多属性 rerturn action.payload也可以，dispatch({
    //   type: LOGIN,
    //   payload: token,
    // })是把token传进来了，所以是action.paload
    return {
      // 登录吧token数据return出去，以供组件来使用
      ...state,
      token: action.payload,
    }
  }
  if (action.type === LOGOUT) {
    return {
      ...state,
      token: '',
    }
  }
  return state
}
