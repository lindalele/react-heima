import { CHANGE_FILTER } from '../constants/filter'

// all active completed
export default function filter(state = 'all', action) {
  if (action.type === CHANGE_FILTER) {
    return action.filter
  }
  return state
}
