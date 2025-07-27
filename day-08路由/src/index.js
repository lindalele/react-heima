// // 纯函数
// function add(a, b) {
//   console.log('我执行了')

//   return a + b
// }

// 函数缓存
function memoize(func) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    return cache[key] || (cache[key] = func.apply(this, args))
  }
}

// const add1 = memoize(add)

// console.log(add1(1, 2))
// console.log(add1(1, 2))
// console.log(add1(1, 2))

// 斐波那契数列  兔子数
// 1  2  3  4  5  6
// 1  1  2  3  5  8
// 递归：化归思想 把复杂的问题简单化

// function getSum(n) {
//   if (n === 1) {
//     return 1
//   }
//   return getSum(n - 1) + n
// }

// console.log(getSum(100))
// 1 1 2 3 5 8 13 21 34 55 89 144

// const getTu = memoize((n) => {
//   // console.log('执行了')

//   if (n === 1 || n === 2) {
//     return 1
//   }
//   return getTu(n - 1) + getTu(n - 2)
// })

// console.log(getTu(100))

// 缓存的思路
// 缓存
function outer() {
  const cache = []
  return function getTu(n) {
    if (n === 1 || n === 2) {
      return 1
    }
    if (!cache[n]) {
      cache[n] = getTu(n - 1) + getTu(n - 2)
    }
    return cache[n]
  }
}

const getTu = outer()

getTu(48)
