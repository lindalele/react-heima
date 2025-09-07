import { SET_NEWS } from '../constants'

export default function news(state = [], action) {
  if (action.type === SET_NEWS) {
    // 把新闻数据返回出去，让组件中使用
    return action.payload
  }
  return state
}
