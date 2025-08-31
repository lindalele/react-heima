import {
  ADD_TODO,
  CHANGE_ALL_DONE,
  CHANGE_DONE,
  CHANGE_NAME,
  CLEAR_TODO,
  DEL_TODO
} from '../constants/todos'
const initState = [
  { id: 1, name: '吃饭', done: true },
  { id: 2, name: '学习', done: false },
  { id: 3, name: '睡觉', done: true }
]
export default function todos(state = initState, action) {
  if (action.type === DEL_TODO) {
    return state.filter((item) => item.id !== action.id)
  }
  if (action.type === CHANGE_DONE) {
    return state.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          done: !item.done
        }
      } else {
        return item
      }
    })
  }
  if (action.type === ADD_TODO) {
    const todo = {
      id: action.id,
      name: action.name,
      done: false
    }
    return [todo, ...state]
  }
  if (action.type === CHANGE_ALL_DONE) {
    return state.map((item) => {
      return {
        ...item,
        done: action.done
      }
    })
  }
  if (action.type === CHANGE_NAME) {
    return state.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          name: action.name
        }
      } else {
        return item
      }
    })
  }
  if (action.type === CLEAR_TODO) {
    return state.filter((item) => !item.done)
  }
  return state
}
