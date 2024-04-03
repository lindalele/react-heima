// type 别名 = 类型
// 给类型起别名
// type s = string

// const str: s = 'abc'
// console.log(str)

// type 字符串 = string

// const 姓名: 字符串 = '张三 '
// console.log(姓名)
{
  type MyArray = (number | string)[]
  const arr: MyArray = [1, 2, 3, 'ab']
  const arr2: MyArray = ['a', 'b', 'c']
}
// 本地测试ts代码控制台输入：tsc --init
// 由于练习的时候是全局环境，变量只能出现一次,可以用{}定义局部变量
