import request from '@/utils/request'
import { setToken, removeToken } from '@/utils/storage'
import { LOGIN, LOGOUT } from '../constants'
// payload参数
export const login = (payload) => {
  return async (dispatch) => {
    const res = await request({
      method: 'post',
      url: '/authorizations',
      data: payload,
    })
    const token = res.data.data.token
    // 注意redux的数据存在内存中的，一刷新就就没有了
    // 存储到本地
    setToken(token)
    // redux中存储
    dispatch({
      type: LOGIN,
      payload: token,
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    removeToken()
    dispatch({
      type: LOGOUT,
    })
  }
}
