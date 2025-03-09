// redux的前身是Flux，Flux已经不用了
// 除了redux，还有MobX,MobX功能会好一些，所以用redux状态管理工具的人比较多
// 使用redux管理状态，是因为react用自身的组件通讯会使得组件嵌套过多（App->zi1->zi2->z3），
                      //  |
                      //  |->另外的z1->z2->z3分支 会难以维护
// 代码难以维护，所以使用redux来管理状态更好

// 创建react项目 npx create-react-app  redux-basic

// yarn add redux就安装redux
redux核心概念：
1.action动作：比如购物车新增、修改、删除的动作；这里是描述要做的事情。
2.reducer（函数）：处理器，专门处理action，改的是store中的数据。
3.数据放在store中

store相当于公司的老板，数据钱放在store中，action是老板的指令，reducer是干活的，老板的秘书，秘书根据老板的指令修改数据。

redux中时不能直接修改state的值的

redux是一个纯函数：
纯函数就是：相同的输入永远会有相同的输出，不会产生副作用。就是同样的参数传递，永远会得到同样的结果。
比如数组的slice方法，就是纯函数，因为slice不会改变原数组，只是返回一个新数组。
数组的splice方法不是纯函数，因为splice会改变原数组。
纯函数原则也就是如何保证是一个纯函数：
1.不得改写参数，比如传进来对象数组，不能去改了这个对象参数。就相当于去改了外部的数据

2.不能调用Datee.now()、Math.random()等不纯的方法，因为每次调用都会得到不同的结果
3. 不能有额外的全局变量，比如全局变量，每次调用函数，全局变量都会改变，所以不是纯函数

redux必须是一个纯函数，原则就是不改原来的值，返回新的值
没有副作用，副作用是指例如函数中一些异步调用或者会影响函数作用域之外的变量一类的操作

// 1. 导入方法
import { createStore } from 'redux'

// reducer
// 定义一个reducer函数，接收state和action作为参数
function reducer(state = 0, action) {
  if (action.type === 'add') {
    return state + 1
  }
  if (action.type === 'sub') {
    return state - 1
  }
  // 如歌没有找到对应的action的type，就返回原来的state
  return state
}

// 2. 创建store对象
// 参数：reducer  函数
const store = createStore(reducer)

// store两个核心方法：
// 1.store.getState()  获取store的状态
// 2.store.dispatch(action) 分配任务
// action是一个对象
console.log(store.getState())

// 只要dispatch一个action，reducer就会执行，action会给到reducer函数，然后reducer会根据action的type去修改state
store.dispatch({ type: 'add' })
console.log(store.getState()) //0+1=1
store.dispatch({ type: 'add' })
console.log(store.getState()) //上一次的值1+1=2
// store.dispatch({ type: 'abc' })
store.dispatch({ type: 'sub' })

console.log(store.getState())

