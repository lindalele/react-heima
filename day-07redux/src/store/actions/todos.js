import {
  ADD_TODO,
  CHANGE_ALL_DONE,
  CHANGE_DONE,
  CHANGE_NAME,
  CLEAR_TODO,
  DEL_TODO,
} from '../constants/todos'

/**
 * 删除todo的action
 * @param {*} id
 * @returns
 */
// export const delTodo = (id) => ({
//   type: DEL_TODO,
//   id,
// })
// 异步的action
// 先安装react-thunk
export const delTodo = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: DEL_TODO,
        id,
      })
    }, 2000)
  }
}
/**
 * 修改任务的状态
 * @param {*} id
 * @returns
 */
export const changeDone = (id) => ({
  type: CHANGE_DONE,
  id,
})

/**
 * 添加任务
 * @param {*} name
 * @returns
 */
export const addTodo = (name) => ({
  type: ADD_TODO,
  name,
  id: Date.now(),
})

/**
 * 全选功能
 * @param {*}} done
 * @returns
 */
export const changeAllDone = (done) => ({
  type: CHANGE_ALL_DONE,
  done,
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
  name,
})
// 同步action的写法
// export const clearTodo = () => ({
//   type: CLEAR_TODO
// })
// 异步action的写法
export const clearTodo = () => {
  return (dispatch) => {
    // 处理异步代码
    setTimeout(() => {
      // 这里才是store.dispatch真正的被reducer处理
      dispatch({
        type: CLEAR_TODO,
      })
    }, 1000)
  }
}
