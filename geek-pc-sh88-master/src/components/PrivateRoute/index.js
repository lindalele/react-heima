import { hasToken } from '@/utils/storage'
import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
// 我们需要解构所有的属性，除了component属性
export default function PrivateRoute({
  children,
  component: Component,
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
                // 会通过state来传递额外的参数
                state: {
                  from: location.pathname
                }
              }}
            ></Redirect>
          )
        }
      }}
    ></Route>
  )
}
