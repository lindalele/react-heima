import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from 'react-router-dom'
import Article from './Article'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/article/1">文章1</NavLink>
          </li>
          <li>
            <NavLink to="/article/2">文章2</NavLink>
          </li>
          <li>
            <NavLink to="/article/3">文章3</NavLink>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route path="/article/:id" component={Article}></Route>
        </Switch>
      </div>
    </Router>
  )
}
