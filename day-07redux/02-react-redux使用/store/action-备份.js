// 提供action
// action: 代表要做的每一件事件
// 1. action使用js中的对象来表示
// 2. action必须要有一个type属性 plus minus用于区分动作类型
// 3. action还可以拥有额外的参数, 建议名字： payload 载荷 额外的参数
reducer必须是一个纯函数：纯函数：相同的输入永远会得到相同的输出，而且没有任何副作用，里面不能有Math.random()随机的数据，因为每次得到的结果不一样，纯函数不能使用全局变量，因为全局变量是共享的，会互相影响，纯函数不得该写参数

redux是一个单独的库，react也是独立的一个库，但是redux的数据变了，无法更改到react。react-redux是react和redux的连接桥梁,也是单独的库，react可以用redux,也可以用react-redux是专门给react用的，把redux库单独抽离出来，是为了其他库也可以使用redux。在react中使用react-redux更好。
export const addOne = {
  type: 'addOne'
}

export const subOne = {
  type: 'subOne'
}

export const addMore = {
  type: 'addMore',
  payload: 5
}

export const subMore = {
  type: 'subMore',
  payload: 5
}
