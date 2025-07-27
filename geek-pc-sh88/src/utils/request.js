// 封装axios
import { message } from 'antd'
import axios from 'axios'
import { getToken } from './storage'
import store from '@/store'
import { logout } from '@/store/actions/login'
import history from '@/utils/history'
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = getToken()
    if (token) {
      // 添加token
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (err) {
    if (!err.response) {
      message.error('网络繁忙，请稍后重试')
      return Promise.reject(err)
    }
    if (err.response.status === 401) {
      // token过期了
      // 提示消息
      message.error('登录信息过期', 1)
      // 清除token
      store.dispatch(logout())
      // 跳转到登录 history,用history.push跳转，页面不会刷新，单页面。
      // history.push可以直接写地址   history.push('/login')
      //  也可以写对象 history.push({
      //   pathname: '/login',
      //   // token失效，跳转到登录页之前的那个页面
      //   state: {
      //     from: history.location.pathname,
      //   },
      // })
      // 如果用window.location.href跳转，整个页面会刷新，所有资源会重新加载。
      // 非组件中不能用hook，所以无法使用到useHistory,此时可以用到Router组件
      console.log(history.location.pathname) //需要先全部打印，否则跳转过去以后，打印的是最后 的
      history.replace({
        pathname: '/login',
        // token失效，跳转到登录页之前的那个页面
        state: {
          from: history.location.pathname,
        },
      })
    }
    // 对响应错误做点什么
    return Promise.reject(err)
  }
)

export default instance
