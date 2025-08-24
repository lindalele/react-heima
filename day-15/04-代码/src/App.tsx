import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Article from './pages/Article'
export default function App() {
  return (
    <Router>
      <div>
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
