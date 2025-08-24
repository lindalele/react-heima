import { RootThunkAction } from '..'

export type TodoAction =
  | {
      type: 'ADD_TODO'
      name: string
    }
  | {
      type: 'DEL_TODO'
      id: number
    }
  | {
      type: 'CHANGE_DONE'
      id: number
    }

export const addTodo = (name: string): RootThunkAction => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'ADD_TODO',
        name
      })
    }, 1000)
  }
}

// 类型参数1：ReturnType 用于指定函数的返回值类型  void
// 类型参数2：指定RootState的类型
// 类型参数3：指定额外的参数类型，一般为unkonwn或者any
// 类型参数4：用于指定dispatch的Action的类型
export const delTodo = (id: number): RootThunkAction => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'DEL_TODO',
        id
      })
    }, 1000)
  }
}

export const changeDone = (id: number): TodoAction => {
  return {
    type: 'CHANGE_DONE',
    id
  }
}
