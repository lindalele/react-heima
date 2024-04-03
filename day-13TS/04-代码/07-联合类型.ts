{
  // 在TS中，或就是|表示，在js中，或就是||表示
  // let num: string | number = 'abc'
  // num = 123

  // 场景1：定时器id
  // let timer: null | number = null
  // timer = window.setInterval(() => {

  // })

  // 场景2：数组中既可以有数字，也可以有字符串
  // 竖线的优先级很低，所以需要加上括号()
  let arr: (number | string)[] = [1, 2, 3]
  arr = ['a', 'b', 'c']
}
