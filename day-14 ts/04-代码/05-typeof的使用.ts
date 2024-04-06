{
  const obj = {
    name: 'zs',
    age: 18,
    gender: '男',
  }
  // console.log(typeof obj);
  function add(n1: number, n2: number): number {
    return n1 + n2
  }

  const add2: typeof add = (n1, n2) => {
    return n1 + n2
  }
  // TS中typeof,是有一个变量，拿到变量的值的类型，赋值给新的变量作为他的类型
  type Type = typeof obj
  function fn(o: Type) {
    //o就有了obj 的所有属性的类型
    console.log(o.name)
  }
  fn(obj)
}
