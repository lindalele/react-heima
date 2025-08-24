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
        {/* Route是路由规则 */}
        执行过程1.监听到路径变化，2.拿到所有Route,3.拿着地址栏的地址和Route的path去匹配，根据路径匹配到对应的组件，渲染到Route的component属性对应的组件
        {/* path="/"如果不加exact，那么任何路径都会匹配到Home组件，所以需要加上exact */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/comment" component={Comment}></Route>
        <Route path="/search" component={Search}></Route>
        {/* Route不加上path,那么这个组件就一定会渲染，相当于path="/"， 用处配置404的时候，不写path一定会匹配到，这个还需要配合其他一起使用 */}
        <Route component={Home}></Route>
      </div>
    </Router>
  )
}
