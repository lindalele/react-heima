// HashRouter整体路由对象，一个项目就一个，我们需要使用HashRouter包裹整个应用
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import Home from './pages/Home'
import Comment from './pages/Comment'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import './App.css'
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            {/* exact代表精确匹配 */}
            <NavLink exact to="/">
              首页
            </NavLink>
          </li>
          {/* activeClassName给高亮取个类名，默认类名active */}
          <li>
            <NavLink to="/comment" activeClassName="aa">
              评论
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">搜索</NavLink>
          </li>
        </ul>
        <hr />

        {/* 
          如果path是 '/',能够匹配到任意的路径，，需要加上exact
        */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/comment" component={Comment}></Route>
          <Route path="/search" component={Search}></Route>
          {/* 兜底的方最下面 */}
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  )
}
