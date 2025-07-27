import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from 'react-router-dom'
import My from './pages/My'
import Friend from './pages/Friend'
import Find from './pages/Find'
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/find">发现音乐</NavLink>
          </li>
          <li>
            <NavLink to="/my">我的音乐</NavLink>
          </li>
          <li>
            <NavLink to="/friend">朋友</NavLink>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route path="/find" component={Find}></Route>
          <Route path="/my" component={My}></Route>
          <Route path="/friend" component={Friend}></Route>
        </Switch>
      </div>
    </Router>
  )
}
