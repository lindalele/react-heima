import { TodoAction } from '../actions/todos'

type TodosType = {
  id: number
  name: string
  done: boolean
}[]

const initValue: TodosType = [
  {
    id: 1,
    name: '来黑马学习',
    done: true
  },
  {
    id: 2,
    name: '从黑马毕业',
    done: false
  },
  {
    id: 3,
    name: '月薪18k',
    done: false
  }
]

export default function todos(
  state = initValue,
  action: TodoAction
): TodosType {
  if (action.type === 'DEL_TODO') {
    return state.filter((item) => item.id !== action.id)
  }
  if (action.type === 'ADD_TODO') {
    return [
      {
        id: Date.now(),
        name: action.name,
        done: false
      },
      ...state
    ]
  }
  if (action.type === 'CHANGE_DONE') {
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
  return state
}
