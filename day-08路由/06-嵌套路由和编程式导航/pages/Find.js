import React from 'react'
import { NavLink, Switch, Route, Link } from 'react-router-dom'
import List from './List'
import Top from './Top'
export default function Find() {
  return (
    <div>
      <h3>发现音乐</h3>
      <ul>
        <li>
          {/* 嵌套路由 */}
          <NavLink to="/find/top">排行榜</NavLink>
        </li>
        <li>
          <NavLink to="/find/list">歌单</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        {/* 二级嵌套路由，二级路由前面一定要写上一级路由的路径 */}
        {/* 与vue不同，vue配置路由的时候写的是children  */}
        {/* vue的二级路由可以不用带上一级路由，但是react需要带上一级路由  */}
        <Route path="/find/top" component={Top}></Route>
        <Route path="/find/list" component={List}></Route>
      </Switch>
    </div>
  )
}
