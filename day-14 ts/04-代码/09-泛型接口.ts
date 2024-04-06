{
  // 指定泛型接口
  // 有些值不确定用 T
  interface User<T> {
    name: T
    age: number
  }

  const user: User<number> = {
    name: 123,
    age: 100,
  }
  // 指定必须是数组类型Array
  // const arr: Array<number> = [1, 2, 3]
  // 简写的是const arr: number[] = [1, 2, 3]
  // arr.push(1, 2, 3)

  const arr1: Array<number> = [1, 2, 3]
  arr1.forEach((item) => {})
  // 自己实现数组
  interface MyArray<T> {
    length: number
    push: (value: T) => void
    pop: () => T
  }
  const arr: MyArray<string> = {
    length: 4,
    push() {},
    pop() {
      // MyArray<string>指定了字符串，所以这里只能返回string
      return 'abc'
    },
  }
  arr.push('12')
}
