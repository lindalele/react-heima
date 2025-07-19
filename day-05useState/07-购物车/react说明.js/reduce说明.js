;[1, 2, 3, 4, 5].reduce((prev, curr, index) => {
  //prev是上一次的返回值return的值
  return prev + curr
}, 0)
// 如果传了初始值，callback就会执行5次，则从第1项开始，否则从第二项开始
// 如果没有初始值，callback执行4次，从第1项开始，prev是1，curr是2，return 3，prev是3，curr是3，return 6，prev是6，curr是4，return 10，prev是10，curr是5，return 15

// 如果数组比较复杂：
const arr1 = [
  { id: 1, name: 'zs', age: 28 },
  { id: 2, name: 'ls', age: 18 },
  { id: 3, name: 'ww', age: 22 },
]
arr1.reduce((prev, curr) => {
  return prev + curr.age
}, 0)
// 如果没有初始值，那么第一项prev就是  { id: 1, name: 'zs', age: 28 }
// MDN js核心网站
