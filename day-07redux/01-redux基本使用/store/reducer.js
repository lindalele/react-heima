// reducer这个名字是参考了js中的reduce这个方法，reduce方法用于对数组中的元素进行累积操作。
// reducer函数签名：reducer(prevState, action) => newState
// state代表初始状态
export default function reducer(state = 1000, action) {
  // 只要页面刷新一次，reducer就会执行一次。以后点一次加减一次会执行一次。
  console.log('reducer执行', action)
  // 处理各种各样的action
  switch (action.type) {
    case 'addOne':
      // 注意不能state++,因为reactstate是不能直接修改值的，只能返回一个新的值
      return state + 1
    case 'subOne':
      return state - 1
    case 'addMore':
      return state + action.payload
    case 'subMore':
      return state - action.payload
    default:
      // 很重要
      return state
  }
}
