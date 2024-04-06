{
  // TS内置的几个方便操作的工具类型
  // 将 Type 中的所有属性设置为可选
  // Partial<Type>
  type User = {
    name: string
    age: number
    gender: string
  }
  // Partial作用：会返回一个新的类型，且所有的属性都是可选的
  // 使用场景是：已经有了User类型，但是需要一个可选的类型，可以创建一个新类型
  // User1用Partial包裹User，User1的类型就是{name?: string, age?: number, gender?: string}
  // 当然自己写也可以是name? string, age? number, gender? string
  type User1 = Partial<User>
  // Readonly把所有属性设置为只读，不能修改
  type User2 = Readonly<User>

  const user: User2 = {
    name: 'zs',
    age: 20,
    gender: '男',
  }
  // user.name = 'ls'
  // 从第一个类型中选取几个属性创建新的类型，
  // 注意后面挑选的属性要是第一个中的属性之一
  type User3 = Pick<User, 'age' | 'gender'>

  // Omit: 从一个类型中排除属性  和Pick相反
  type User4 = Omit<User, 'age'>
}
