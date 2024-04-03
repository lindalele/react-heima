{
  // 函数类型的语法
  // function 函数名(参数: 类型, 参数: 类型): 返回值类型 {}
  // function add(n1: number, n2: number): number {
  //   return n1 + n2
  // }

  // add(1, 2)

  // // 箭头函数
  // const add1 = (n1: string, n2: string): string => {
  //   return n1 + n2
  // }

  // 可以直接为函数指定函数的类型

  // const add = (n1: number, n2: number): number => {
  //   return n1 + n2
  // }
  // const sub = (n1: number, n2: number): number => {
  //   return n1 - n2
  // }

  //函数就是这么一种形式，想要赋值给变量，说明这个变量其实是一个函数；
  //  函数类型 (n1: number, n2: number) => number//箭头后面是返回值类型
  type Fn = (n1: number, n2: number) => number
  const add: Fn = function (a, b) {
    return a + b
  }

  const sub: Fn = function (n1, n2) {
    return n1 - n2
  }
}
