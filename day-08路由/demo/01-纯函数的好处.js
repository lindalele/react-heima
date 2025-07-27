// 纯函数
function add(a, b) {
  return a + b
}

// 函数缓存
function memoize(func) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    return cache[key] || (cache[key] = func.apply(this, args))
  }
}

const add1 = memoize(add)

console.log(add1(1, 2))
