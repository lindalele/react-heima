import { ApiResponse, Article } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import request from '@/utils/request'

export function getUserChannel(): RootThunkAction {
  return async (dispatch) => {
    const res = await request.get<ApiResponse<{ channels: Channel[] }>>(
      '/user/channels'
    )
    dispatch({ type: 'home/saveUserChannel', payload: res.data.channels })
  }
}
export function getAllChannel(): RootThunkAction {
  return async (dispatch) => {
    // 接口文档写返回值是channels: 【】是个数组
    const res = await request.get<ApiResponse<{ channels: Channel[] }>>(
      '/channels'
    )
    dispatch({ type: 'home/saveAllChannel', payload: res.data.data.channels })
  }
}
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
