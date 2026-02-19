import { ApiResponse, Article } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import request from '@/utils/request'

export const getArticleList = (
  channel_id: number,
  timestamp: number
): RootThunkAction => {
  return async (dispatch) => {
    const res = await request.get<
      ApiResponse<{
        pre_timestamp: string
        results: Article[]
      }>
    >('/articles', {
      params: {
        channel_id,
        timestamp,
      },
    })

    dispatch({
      type: 'home/saveChannelArticles',
      payload: {
        timestamp: res.data.data.pre_timestamp,
        channel_id,
        results: res.data.data.results,
      },
    })
  }
}

export const getNewsArticleList = (
  channel_id: number,
  timestamp: number
): RootThunkAction => {
  return async (dispatch) => {
    const res = await request.get<
      ApiResponse<{
        pre_timestamp: string
        results: Article[]
      }>
    >('/articles', {
      params: {
        channel_id,
        timestamp,
      },
    })
    dispatch({
      type: 'home/saveNewArticleList',
      payload: {
        timestamp: +res.data.data.pre_timestamp,
        channel_id,
        results: res.data.data.results,
      },
    })
  }
}
