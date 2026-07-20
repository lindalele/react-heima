//1. 项目打包后想要预览：
//react打包后可以自己放服务器，也可以使用react提供的静态服务器
// 文档地址：create-react-app.dev/docs/deployment
//  yarn global add server
// serve -s build
// 默认的端口是3000

// 项目打包体积分析
//安装分析打包体积的包 yarn add source-map-explorer

// 在package.json中添加："analyze": "source-map-explorer 'build/static/js/*.js'"是指分析build/static/js/目录下的所有js文件，并生成一个分析报告。
