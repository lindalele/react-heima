// 定义数组的语法一：  : 类型[]
// number[]: 必须是一个数组，且只能是数字
// string[]：必须是一个数组，且只能是字符串
// const arr: number[] = [1, 2, 3, 4]

// const names: string[] = ['a', 'b', 'c']

// 定义数组的语法二： 泛型写法  : Array<number>
const arr: Array<number> = [1, 2, 3]

const names: Array<string> = ['a', 'b', 'c']

arr.push(12)

let res = arr.pop()
