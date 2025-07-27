import axios from 'axios'
import { SET_NEWS } from '../constants'

// 获取新闻列表
export const getNewsList = (id) => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://toutiao.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`
    )
    dispatch({
      type: SET_NEWS,
      payload: res.data.data.results
    })
  }
}
