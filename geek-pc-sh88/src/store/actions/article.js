import request from '@/utils/request'
import { GET_ARTICLE_LIST, GET_CHANNEL_LIST } from '../constants'
export const getChannelList = () => {
  return async (dispatch) => {
    const res = await request.get('/channels')
    dispatch({
      type: GET_CHANNEL_LIST,
      payload: res.data.data.channels
    })
  }
}

export const getArticleList = (params) => {
  return async (dispatch) => {
    const res = await request({
      url: '/mp/articles',
      params
    })
    dispatch({
      type: GET_ARTICLE_LIST,
      payload: res.data.data
    })
  }
}

export const delArticle = (id) => {
  return async () => {
    await request({
      method: 'delete',
      url: `/mp/articles/${id}`
    })
  }
}

export const addArticle = (draft = false, data) => {
  return async (dispatch) => {
    await request({
      url: '/mp/articles',
      method: 'post',
      data,
      params: {
        draft
      }
    })
  }
}

export const editArticle = (draft = false, data) => {
  return async (dispatch) => {
    await request({
      url: `/mp/articles/${data.id}`,
      method: 'put',
      data,
      params: {
        draft
      }
    })
  }
}

export const getArticleInfo = (id) => {
  return async (dispatch) => {
    const res = await request(`/mp/articles/${id}`)
    return res.data.data
  }
}
