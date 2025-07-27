import axios from 'axios'
import { CHANGE_ACTIVE, SET_CHANNEL } from '../constants'
export const getChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://toutiao.itheima.net/v1_0/channels')
    dispatch({
      type: SET_CHANNEL,
      payload: res.data.data.channels
    })
  }
}

export const changeActive = (id) => {
  return {
    type: CHANGE_ACTIVE,
    id
  }
}
