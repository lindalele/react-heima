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
          <NavLink to="/find/top">排行榜</NavLink>
        </li>
        <li>
          <NavLink to="/find/list">歌单</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/find/top" component={Top}></Route>
        <Route path="/find/list" component={List}></Route>
      </Switch>
    </div>
  )
}
