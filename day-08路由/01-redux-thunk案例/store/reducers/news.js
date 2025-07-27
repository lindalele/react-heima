import { SET_NEWS } from '../constants'

export default function news(state = [], action) {
  if (action.type === SET_NEWS) {
    return action.payload
  }
  return state
}
