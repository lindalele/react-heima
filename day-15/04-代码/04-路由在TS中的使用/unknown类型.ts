// never: 不可能实现的类型
// any：   任意类型 不对类型进行判断
// unknown:任意类型 更安全的any类型
// let num: any

// num = 11

// num = 'abc'

// num()

// console.log(num.length)

let num: unknown

num = 'abc'
num = 11

// 类型断言  类型收窄
// console.log((num as string).length)
if (typeof num === 'string') {
  num.toUpperCase()
}
if (typeof num === 'number') {
  num.toFixed()
}

export {}
