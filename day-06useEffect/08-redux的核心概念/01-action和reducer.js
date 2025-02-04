// // action
// // 1. Action就是一个js对象，必须要有type属性
// const action = {
//   type: 'add'
// }

// const action2 = {
//   type: 'del_todo',
//   id: 2
// }

// const action1 = {
//   type: 'add_todo',
//   name: '吃饭'
// }

// 可以通过一个函数来创建action，，，把这个函数称为action creator
const addTodo = (name) => {
  return {
    type: 'addTodo',
    name
  }
}
addTodo('吃饭')
addTodo('睡觉')

const delTodo = (id) => {
  return {
    type: 'delTodo',
    id
  }
}

console.log(delTodo(1))
console.log(delTodo(2))

function reducer(prevState, action) {
  // 处理action
}

// 纯函数
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.splice(1, 3))
// console.log(arr.splice(1, 3))
// console.log(arr.splice(1, 3))
// console.log(arr.splice(1, 3))
// console.log(arr.splice(1, 3))
// function fn(a, b) {
//   return a + b + Math.random()
// }
// let num = 10
// function add(a, b) {
//   return a + b + num
// }
// add(1, 2)
