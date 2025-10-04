// 1.npx create-react-app greek-h5 --template typescript
// 新建项目以后,react-app-env.d.ts文件不能够删除，因为里面使用了ts的声明文件
// 2.yarn add sasss
// 3.yarn add react-router-dom@5.3.0 @types/react-router-dom -D



配置路径别名
yarn add -D @craco/craco 

rem、vw适配
rem需要手动修改html元素的font-size,
github.com/amfe/lib-flexible会自动修改html元素的font-size，插件就是lib-flexible.js
说明由于移动端viewport单位得到众多浏览器的支持，lib-flexible这个过渡方案已经可以放弃，不管是现在的业务还是未来的业务，都可以直接采用viewport单位来做适配，这也是lib-flexible推荐的做法。


