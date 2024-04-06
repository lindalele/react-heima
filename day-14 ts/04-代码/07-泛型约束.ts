{
  // 指定更具体的参数类型 指定参数数组类型，返回值也是数组
  // function fn<T>(value: T[]): T[] {
  //   return value
  // }
  // 说明是数字类型，结合function 说明是数字数组
  // fn<number>([1, 2, 3])

  // 添加约束：  要求传入的T类型必须要有length
  interface ILength {
    length: number
  }
  // 约束传进来的参数必须有name age 属性
  interface IUser {
    name: string
    age: number
  }
  // 泛型约束，一般会继承一个接口
  function fn<T extends IUser>(value: T): T {
    console.log(value.name)
    console.log(value.age)
    return value
  }

  fn({
    name: 'zs',
    age: 18,
  })
}
