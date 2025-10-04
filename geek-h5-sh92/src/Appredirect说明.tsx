import './App.scss'
import React, { Suspense } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './utils/history'
import KeepAlive from './components/KeepAlive'
// 异步组件，，，路由懒加载
import Layout from './pages/Layout'
// const Layout = React.lazy(() => import('./pages/Layout'))
const Login = React.lazy(() => import('./pages/Login'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))
const Demo = React.lazy(() => import('./pages/demo'))
const ProfileEdit = React.lazy(() => import('./pages/Profile/Edit'))
const PrivateRoute = React.lazy(() => import('./components/PrivateRoute'))
const Chat = React.lazy(() => import('@/pages/Profile/Chat'))
const Search = React.lazy(() => import('@/pages/Search'))
const SearchResult = React.lazy(() => import('@/pages/Search/Result'))
const Article = React.lazy(() => import('./pages/Article'))
// 使用React CLI搭建项目：npx create-react-app geek-h5 typescript
// 进入项目根目录：cd geek-h5
// 启动项目：yarn start

function App() {
  console.log('history.location.pathname', history.location.pathname)
  return (
    <Router history={history}>
      <Suspense fallback={<div>loading....</div>}>
        <div className="app">
          <KeepAlive path="/home">
            {/* 注意是home路径，里面组件名称叫layout */}
            <Layout></Layout>
          </KeepAlive>
          <Switch>
            {/*需求 如果当前url是/ 跳转到 /home */}
            {/* 1.如果外层没有Switch包裹，那么就用这中精确匹配/ 的写法           */}
            {/* <Route
              exact
              path="/"
              render={() => <Redirect to="/home"></Redirect>}
            ></Route> */}
            {/* **2.这种Redirect的写法，如果有from属性，那么外面必须套一个Switch，否则from失效，相当于只有to属性,也就是任何路径都能去/home。from代表来源带‘/’的路径，也就是所有，所以加了exact */}
            <Redirect exact from="/" to="/home"></Redirect>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/demo">
              <Demo></Demo>
            </Route>

            {/* 修改用户信息 */}
            <PrivateRoute path="/profile/edit" exact>
              <ProfileEdit></ProfileEdit>
            </PrivateRoute>

            {/* 聊天功能 */}
            <PrivateRoute path={'/chat'}>
              <Chat></Chat>
            </PrivateRoute>

            {/* 配置Search路由 */}
            <Route path="/search" exact>
              {/* 路由对应的组件 */}
              <Search></Search>
            </Route>
            <Route path="/search/result">
              <SearchResult></SearchResult>
            </Route>
            <Route path="/article/:id">
              <Article></Article>
            </Route>
            {/* 404页面 如果有缓存组件，404页面不渲染*/}
            {history.location.pathname !== '/home' && (
              <Route>
                <NotFound></NotFound>
              </Route>
            )}
          </Switch>
        </div>
      </Suspense>
    </Router>
  )
}

export default App
