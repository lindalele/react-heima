import { CHANGE_ACTIVE, SET_CHANNEL } from '../constants'

const initState = {
  list: [],
  active: 0
}
export default function channel(state = initState, action) {
  if (action.type === SET_CHANNEL) {
    return {
      ...state,
      list: action.payload
    }
  }
  if (action.type === CHANGE_ACTIVE) {
    return {
      ...state,
      active: action.id
    }
  }
  return state
}
