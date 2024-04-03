{
  let num = 11 //变量有初始值，所以下面的类型注解可以不写
  // let num1: number = 11
  // 给一个变量初始化并且赋值的时候，会自动推断类型
  // let num = '11'
  // num = 12
  // 如果没有给变量赋值，那么就需要类型注解
  // let num: number
  // // num = 'abc'
  // type User = {
  //   name: string
  //   age: number
  //   gender: string
  //   sayHi(): void
  // }
  // 当我们定义变量，并且赋值了初始值的时候，ts会自动推断出类型，所以类型推论可以不写
  const obj = {
    name: '张三',
    age: 19,
    gender: '男',
    sayHi() {
      console.log('哈哈')
    },
  }
  // 函数的返回值，num+num相加，肯定是数字返回值，所以返回值的类型可以不写
  function fn(n1: number, n2: number) {
    return n1 + n2
  }
  // console.log()
  // const a = document.createElement('a')
  // a.addEventListener
}
