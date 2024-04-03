{
  // let是可以变的，所以str1推论是字符串
  // let str1 = 'Hello TS'
  // // 字面量类型 直接量，也就是常量的值直接就可以作为一个类型 const是不能变的
  // let str2: 'hello' = 'hello' //直接给定了一个量
  // const num = 100
  // 字面量类型的应用，配合联合类型来使用
  // let gender: '男' | '女' = '男'
  // gender = '男'

  // type Direction = 'up' | 'down' | 'left' | 'right'

  // function changeDirection(direction: Direction) {
  //   console.log(direction)
  // }

  // changeDirection('left')
  // changeDirection('right')

  // 使用场景  redux中处理action的type类型  action-types
  type ActionType = 'ADD_TODO' | 'DEL_TODO' | 'CHANGE_TODO' | 'CHANGE_DONE'

  function reducer(type: ActionType) {
    if (type === 'CHANGE_TODO') {
    }
  }
}
