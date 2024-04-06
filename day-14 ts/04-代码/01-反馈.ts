// let num: number = null
// let un: undefined = null

// num.toFixed()

// let num: any = 11
// num = null
// num.toFixed()

// 返回值是一个数组类型，长度为2  第一项就是值  第二项就是函数
// 返回值是元组 [number, (num: number) => void]
// const [count, setCount] = setState(10)
function setState(num: number): [number, (count: number) => void] {
  const setNum = (count: number) => {
    // 修改num的值
  }
  return [num, setNum]
}
