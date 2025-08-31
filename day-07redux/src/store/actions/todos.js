import {
  ADD_TODO,
  CHANGE_ALL_DONE,
  CHANGE_DONE,
  CHANGE_NAME,
  CLEAR_TODO,
  DEL_TODO
} from '../constants/todos'

/**
 * 删除todo的action
 * @param {*} id
 * @returns
 */
export const delTodo = (id) => ({
  type: DEL_TODO,
  id
})

/**
 * 修改任务的状态
 * @param {*} id
 * @returns
 */
export const changeDone = (id) => ({
  type: CHANGE_DONE,
  id
})

/**
 * 添加任务
 * @param {*} name
 * @returns
 */
export const addTodo = (name) => ({
  type: ADD_TODO,
  name,
  id: Date.now()
})

/**
 * 全选功能
 * @param {*}} done
 * @returns
 */
export const changeAllDone = (done) => ({
  type: CHANGE_ALL_DONE,
  done
})

/**
 * 修改任务名称
 * @param {*} id
 * @param {*} name
 * @returns
 */
export const changeName = (id, name) => ({
  type: CHANGE_NAME,
  id,
  name
})

export const clearTodo = () => ({
  type: CLEAR_TODO
})
