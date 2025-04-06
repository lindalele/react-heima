import React, { Suspense } from 'react'
// BrowserRouter  HashRouter: 整个路由组件
// BrowserRouter = Router + createBrowserHistory
// HashRouter = Router + createHashHistory
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '@/utils/history'
import PrivateRoute from '@/components/PrivateRoute'

// import Login from './pages/Login'
// import Layout from './pages/Layout'
// import NotFound from './pages/NotFound'
const Login = React.lazy(() => import('./pages/Login'))
const Layout = React.lazy(() => import('./pages/Layout'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
export default function App() {
  // 自己用Router，就没有history属性，需要自己手动去指定
  // github找到react-router (remix-run)找到v5分支，因为用到的是v5，目录packages/react-router-dom/modules/HashRouter.js
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
            {/* <PrivateRoute path="/home" component={Layout}></PrivateRoute> */}
            <PrivateRoute path="/home">
              <Layout></Layout>
            </PrivateRoute>
            {/* <Route
            path="/home1"
            render={() => {
              const token = getToken()
              if (token) {
                return <Layout></Layout>
              } else {
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
