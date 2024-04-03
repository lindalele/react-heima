// const user: {
//   //说明user是一个对象{}，里面是name
//   name: string //注意对象类型如果下一个是换行的，就可以不写分号，也可以写上分号
// 如果写在一行中的，就需要用；分号隔开
// age: number
// } = {
//   name: '张三',
// }
// const user: {
//   //说明user是一个对象{}，里面是name
// 如果写在一行中的，就需要用；分号隔开
//   name: string ；age: number
// } = {
//   name: '张三',
// }
type User = {
  name: string
  gender: string
  age: number
  hobby?: string
  // 指定方法的类型 方式1
  sayHi(name: string): void
  add(n1: number, n2: number): number
  // 指定方法的类型 方式2
  // sayHi: (name: string) => void
  // add: (n1: number, n2: number) => number
}
const user: User = {
  name: '张三',
  gender: '男',
  age: 20,
  sayHi(name) {
    console.log('大家好，', name)
  },
  add: function (n1, n2) {
    return n1 + n2
  },
  hobby: '篮球',
}

function showUser(user: User): void {
  console.log(user.name)
  user.sayHi('张三')
}

// const user2: User = {
//   name: '李四',
//   gender: '女',
//   age: 30,

//   sayHi(name) {
//     console.log(name)
//   }
// }
