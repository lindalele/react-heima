import { hasToken } from '@/utils/storage'
import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

{
  /*Route具有的属性 <Route path={} component={} exact></Route> */
}
// 组件中接收到所有的属性，<Route {...props} >,此时组件不应该提供component,而应该是render来接收，render是一个函数，可以写逻辑 。
// 现在props中包含了component属性，所以我们需要解构，把component属性单独拿出来，剩下的属性通过...rest传递给Route
// 我们需要解构所有的属性，除了component属性
export default function PrivateRoute({
  children,
  component: Component, //react的组件需要大写开头
  ...rest
}) {
  const location = useLocation()
  return (
    <Route
      {...rest}
      render={() => {
        if (hasToken()) {
          return children ? children : <Component></Component>
        } else {
          return (
            <Redirect
              to={{
                // 跳转的路径
                pathname: '/login',
                //路由跳转的 时候 会通过state来传递额外的参数。
                state: {
                  // 获取当前路径，通过location
                  from: location.pathname,
                },
              }}
            ></Redirect>
          )
        }
      }}
    ></Route>
  )
}
