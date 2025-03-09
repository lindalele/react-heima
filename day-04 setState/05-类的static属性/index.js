// 实例成员：通过实例调用的属性和方法
// 静态成员：必须通过类本身（构造函数）进行调用的成员
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 静态语法
  static sayHi() {
    console.log('大家好')
  }
  static money = 100
}

console.log(Person.money)
Person.sayHi()

// const p = new Person('zs', 18)
// console.log(p.name)
// console.log(p.age)
// p.sayHi()
// console.log(p.money)
