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

export const addTodo = (name: string): TodoAction => {
  return {
    type: 'ADD_TODO',
    name
  }
}

export const delTodo = (id: number): TodoAction => {
  return {
    type: 'DEL_TODO',
    id
  }
}

export const changeDone = (id: number): TodoAction => {
  return {
    type: 'CHANGE_DONE',
    id
  }
}
