// 提供action
// action: 代表要做的每一件事件
// 1. action使用js中的对象来表示
// 2. action必须要有一个type属性 :plus/ minus
// 3. action还可以拥有额外的参数, 建议名字： payload 载荷 额外的参数
export const addOne = {
  type: 'addOne',
}

export const subOne = {
  type: 'subOne',
}

export const addMore = {
  type: 'addMore',
  payload: 5,
}

export const subMore = {
  type: 'subMore',
  payload: 5,
}
