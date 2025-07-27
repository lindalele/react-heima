import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div>
      404,你访问的页面不存在 <Link to="/">首页</Link>
    </div>
  )
}
