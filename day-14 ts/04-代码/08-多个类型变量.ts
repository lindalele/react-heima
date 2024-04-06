{
  // 泛型多个参数需求：，需要传一个对象进来，要拿对象的key的值
  // 关键字：keyof可以拿到对象的所有的key
  // keyof用法：是可以和其他一起用的type Type = keyof {name: string, age: number}
  // 参数p的类型只能是 T的类型的 key

  function fn<T, P extends keyof T>(obj: T, prop: P): void {
    console.log(obj[prop])
  }

  const obj = {
    name: 'zs',
    age: 18,
  }
  fn(obj, 'age') //打印出 18
  fn(obj, 'name') //'zs'
}
