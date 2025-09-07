// redux-thunk异步插件
github搜索redux-thunk
github.com / reduxjs / redux - thunk / tree / master / src / index.js

会判断是否是对象还是函数。如果是函数，则执行函数，并传入dispatch和getState。返回函数就是异步的，返回对象就是同步的reducer。

// redux开发者工具
1.百度极简插件-搜索redux,下载后解压，把.crx拖动进chrome扩展程序中。
如果要激活，项目是react开发的，并且启动后F12，点击发现是灰色的，来到插件的github,github.com/zalmoxisus/redux-devtools-extension#usage,
根据使用指南，
2.npm install --save redux-devtools-extension
3.import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
4.查看 state是变化后的数据什么样，Diff是本次的变了什么

// 综合案例
// 1.新建项目：
npx create-react-app redux-demo
//2. 集成redux
yarn add redux react-redux redux-thunk axios redux-devtools-extension