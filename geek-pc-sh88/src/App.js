import React, { Suspense } from 'react'
// BrowserRouter  HashRouter: 整个路由组件
// BrowserRouter = Router + createBrowserHistory
// HashRouter = Router + createHashHistory
// BrowserRouter和HashRouter是特殊的两个Router，她们都依赖Router组件
// 如果直接用Router组件，那么Router就没有history属性，需要自己指定history属性。<Router history={history}></Router>,此时需要一个history的库，
// 如果直接用Router组件，就没有BrowserRouter和HashRouter的能力

// github->react-router->v5版本5分支，因为项目用的是5.3的路由-》packages封装的组件 -》react-router-dom-》modules-》BrowserRouter
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '@/utils/history'
import PrivateRoute from '@/components/PrivateRoute'

// import Login from './pages/Login'
// import Layout from './pages/Layout'
// import NotFound from './pages/NotFound'
const Login = React.lazy(() => import('./pages/Login'))
const Layout = React.lazy(() => import('./pages/Layout'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
// npm 有react-router-dom，找到github，右边有文档的链接

//https://v5.reactrouter.com/web/examples/官方提供例子
// react中，没有路由导航守卫，也就是token删除，再次访问home页面的时候，会提示token失效，是因为接口中自己写了401跳转回登录页面，需要重新登录，所以需要自己写一个路由守卫。
// 渲染组件通过component来渲染，直接把组件方法放到<Route path="/will-match"><WillMatch /></Route>

// Route API在https://v5.reactrouter.com/web下的API中可以查看，Route除了component属性，还有render属性，也可以有children

// 1.路由配置，如果没有登录就去登录。2.登录页面处理，如果有from就去from，没有就重定向到首页
// 3.request处理401去登录，带上参数

// npx create-react-app geek-pc-88

export default function App() {
  return (
    <Router history={history}>
      <div className="app">
        <Suspense fallback={<div>loading......</div>}>
          <Switch>
            {/* 路由的重定向 */}
            {/* <Redirect exact from="/" to="/home" /> */}
            <Route
              exact
              path="/"
              render={() => <Redirect to="/home"></Redirect>}
            ></Route>
            <Route path="/login" component={Login}></Route>
            {/* 需要登录的路由用自定义PrivateRoute，不需要登录的路由直接渲染 */}
            {/*给子组件传component 的写法：传递的是一个组件名称Layout；
            <PrivateRoute path="/home" component={Layout}></PrivateRoute> */}

            {/* 给子组件传children的写法： */}
            <PrivateRoute path="/home">
              <Layout></Layout>
            </PrivateRoute>
            {/*表示如果是/home1路由，那么会判断是否有token；
             <Route
            path="/home1"
            render={() => {
              const token = getToken()
              if (token) {
                return <Layout></Layout>
              } else {//Redirect组件能重定向
                return <Redirect to="/login"></Redirect>
              }
            }}
          ></Route> */}
            {/* 增加一个404 */}
            <Route component={NotFound}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}
