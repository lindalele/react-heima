// HashRouter整体路由对象，一个项目就一个，我们需要使用HashRouter包裹整个应用
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Comment from './pages/Comment'
import Search from './pages/Search'
import './App.css'
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            {/* exact代表精确匹配，如果不加点什么都会红色，因为任何一个都是以‘/’开头的 */}
            <NavLink exact to="/">
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to="/comment">评论</NavLink>
          </li>
          <li>
            <NavLink to="/search">搜索</NavLink>
          </li>
        </ul>
        <hr />

        {/* 
          如果path是 '/',能够匹配到任意的路径，，需要加上exact
        */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/comment" component={Comment}></Route>
        <Route path="/search" component={Search}></Route>
        <Route component={Home}></Route>
      </div>
    </Router>
  )
}
