import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import Comment from './pages/Comment'
export default function App() {
  const [current, setCurrent] = useState('')

  useEffect(() => {
    const onChange = () => {
      // console.log(window.location.hash)
      setCurrent(window.location.hash.slice(1))
    }
    window.addEventListener('hashchange', onChange)
    return () => {
      window.removeEventListener('hashchange', onChange)
    }
  })
  return (
    <div>
      <ul>
        <li>
          <a href="#/home">首页</a>
        </li>
        <li>
          <a href="#/comment">评论</a>
        </li>
        <li>
          <a href="#/search">搜索</a>
        </li>
      </ul>
      <hr />
      {current === '/home' && <Home></Home>}
      {current === '/search' && <Search></Search>}
      {current === '/comment' && <Comment></Comment>}
    </div>
  )
}
