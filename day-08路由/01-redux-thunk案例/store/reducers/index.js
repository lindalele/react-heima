import { combineReducers } from 'redux'
import channel from './channel'
import news from './news'
const rootReducers = combineReducers({
  channel,
  news
})

export default rootReducers
