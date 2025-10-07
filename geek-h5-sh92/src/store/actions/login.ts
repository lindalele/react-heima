import { ApiResponse, LoginForm, Token } from '@/types/data'
import { LoginAction, RootThunkAction } from '@/types/store'
import request from '@/utils/request'
import { removeToken, setToken } from '@/utils/storage'
export const login = (values: LoginForm): RootThunkAction => {
  return async (dispatch) => {
    const res = await request.post<ApiResponse<Token>>(
      '/authorizations',
      values
    )
    // 存储到redux中
    dispatch({
      type: 'login/login',
      payload: res.data.data,
    })
    // 存储到localStorage中
    setToken(res.data.data)
  }
}
// 验证码流程-》

// 浏览器                服务器                     运营商
// 携带手机号发请求--》服务器生成一条msg【腾讯科技】->发请求给运营商，运营商给对应手机号发送对应的信息

// 浏览器接收到是否发送成功的消息 《-- 发送成功 《--发送成功

export const getCode = (mobile: string): RootThunkAction => {
  return async (dispatch) => {
    // 发送请求获取验证
    await request.get(`/sms/codes/${mobile}`)
    // 验证码是发到手机上的，所以不需要存储到redux中
  }
}

export const logout = (): LoginAction => {
  // 移除本地的
  removeToken()
  return {
    type: 'login/logout',
  }
}
