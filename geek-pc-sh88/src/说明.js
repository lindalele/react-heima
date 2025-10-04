装依赖包可以再vscode中点击+好，新建一个终端，输入yarn add react-router-dom@5.3.0
yarn add redux react-redux redux-thunk redux-devtools-extension axios

1.配置@别名：
react脚手架项目中webpack配置隐藏在node_modules/react-scripts/config/webpack.config.js中
不能修改node_modules中的文件，只能通过配置覆盖.因为 node——modules会删除

注意，用create-react-app创建的项目配置，都隐藏在了node_modules下面react-scripts中，
修改方法有：
1.推荐通过第三方库来修改，比如@craco/craco
2.通过执行yarn eject命令，将配置文件暴露出来，但是这个操作是不可逆的，执行后就不能再回去了
3.配置package.json
"start": "craco start",
"build": "craco build",
"test": "craco test",

// 配置vscode的jsconfig.json文件,为了编辑器能识别@别名，快速打出路径
