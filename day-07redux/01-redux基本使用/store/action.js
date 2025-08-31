// 提供action
// action: 代表要做的每一件事件
// 1. action使用js中的对象来表示
// 2. action必须要有一个type属性 plus minus
// 3. action还可以拥有额外的参数, 建议名字： payload 载荷 额外的参数
export const addOne = () => ({
  type: 'addOne',
})
// action不能用对象的理由是：如果+1，+5+10，那么action就很多，所以用函数来代替
export const subOne = () => ({ type: 'subOne' })

export const addMore = (payload) => ({
  type: 'addMore',
  payload,
})

export const subMore = (payload) => ({
  type: 'subMore',
  payload,
})
