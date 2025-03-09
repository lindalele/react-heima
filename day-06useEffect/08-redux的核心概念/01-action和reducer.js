// // action
// // 1. Action就是一个js对象，必须要有type属性
// const action = {
//   type: 'add' //action对象，必须有一个type属性
// }

// const action2 = {
//   type: 'del_todo',
//   id: 2  //action对象，还可以添加对象参数，可以写一个id,代表删除id为2的任务
// }

// const action1 = {
//   type: 'add_todo',
//   name: '吃饭' //action对象，还可以添加对象参数，可以写一个name任务名称
// }

// 由于action是一个对象，但是一个一个创建太麻烦，所以可以写一个函数来批量化创建action
// 可以通过一个函数来创建action，，，把这个函数称为action creator
const addTodo = (name) => {
  return {
    type: 'addTodo',
    name,
  }
}
addTodo('吃饭')
addTodo('睡觉')

const delTodo = (id) => {
  return {
    type: 'delTodo',
    id,
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
