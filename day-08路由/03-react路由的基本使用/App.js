// HashRouter整体路由对象，一个项目就一个，我们需要使用HashRouter包裹整个应用
// HashRouter：使用URL的哈希实现
// 原理：监听URL的哈希变化，一旦发生哈希变化，就会触发路由的变化。监听window的hashchange事件
// 推荐：BrowserRouter:使用H5的history API实现 history.pushState和history.replaceState
// 原理：监听window的popstate事件来实现

// yarn add react-router-dom@5.0.3
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Comment from './pages/Comment'
import Search from './pages/Search'
export default function App() {
  return (
    // <HashRouter>HashRouter，一个项目就只有一个，使用HashRouter包裹整个应用</HashRouter>
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
