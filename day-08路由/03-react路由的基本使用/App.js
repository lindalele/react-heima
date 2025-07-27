// HashRouter整体路由对象，一个项目就一个，我们需要使用HashRouter包裹整个应用
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Comment from './pages/Comment'
import Search from './pages/Search'
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/comment">评论</Link>
          </li>
          <li>
            <Link to="/search">搜索</Link>
          </li>
        </ul>
        <hr />
        <Route path="/home" component={Home}></Route>
        <Route path="/comment" component={Comment}></Route>
        <Route path="/search" component={Search}></Route>
      </div>
    </Router>
  )
}
