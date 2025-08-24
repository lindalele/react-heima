// yarn add react-router-dom@5.3.0
// yarn add @types/react-router-dom 路由声明文件
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Article from './pages/Article'
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">登录</Link>
          </li>
          <li>
            <Link to="/home">首页</Link>
          </li>
        </ul>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/article/:id">
          <Article></Article>
        </Route>
      </div>
    </Router>
  )
}
