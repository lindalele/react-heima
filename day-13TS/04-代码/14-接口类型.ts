{
  // 接口：实现复用，Ts中，可以用自定义类型type,也可以使用接口
  // 和type不同type 名字={}
  // 区别：type可以为任意类型指定别名，接口只能为对象指定别名
  // 接口interface 名字{},没有等号
  // interface强大之处在于可以继承，而type不能继承

  interface IStudent {
    //接口interface 名字{},没有等号
    name: string
    gender: string
    sayHi(): void
    add(n1: number, n2: number): number
  }

  const stu: IStudent = {
    name: 'zs',
    gender: '男',
    sayHi() {
      console.log('哈哈')
    },
    add(n1, n2) {
      return n1 + n2
    },
  }
}
