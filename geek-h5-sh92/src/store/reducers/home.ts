import { Article } from '@/types/data'
import { HomeAction } from '@/types/store'
import produce from 'immer'

type HomeStateType = {
  articles: {
    [key: number]: {
      timestamp: number
      results: Article[]
    }
  }
}

type HomeType = {
  userChannels: Channel[]
  allChannels: Channel[]
  active: number
  channelArticles: {
    [key: number]: {
      timestamp: number
      article: Article[]
    }
  }
}

const initValue: HomeType = {
  userChannels: [],
  allChannels: [],
  active: 0,
  channelArticles: [],
}

const homeState: HomeStateType = {
  articles: {},
}

const home = produce((draft, action: HomeAction) => {
  switch (action.type) {
    case 'home/getArticleList': {
      // 需要在原来的基础上追加results数据
      const old = draft.articles[action.payload.channel_id]?.results || []
      // console.log('old', old)
      draft.articles[action.payload.channel_id] = {
        timestamp: action.payload.timestamp,
        results: [...old, ...action.payload.results],
      }
      break
    }
    case 'home/getNewArticleList': {
      // const old = draft.articles[action.payload.channel_id]?.results || []

      draft.articles[action.payload.channel_id] = {
        timestamp: action.payload.timestamp,
        results: [...action.payload.results],
      }
      break
    }
    case 'home/saveChannelArticles': {
      // 12:00
      const { channel_id, timestamp, articles } = action.payload

      const old = state.channelArticles[channel_id]?.articles || []
      return {
        ...state,
        channelArticles: {
          ...state.channelArticles,
          [channel_id]: {
            timestamp: +timestamp,
            articles: [...old, ...articles],
          },
        },
      }

      break
    }
    case 'home/saveNewChannelArticles': {
      const { channel_id, timestamp, articles } = action.payload

      const old = state.channelArticles[channel_id]?.articles || []
      return {
        ...state,
        channelArticles: {
          ...state.channelArticles,
          [channel_id]: {
            timestamp: +timestamp,
            articles: [...articles, ...old],
          },
        },
      }

      break
    }
    default:
      break
  }
}, homeState)

export default home
