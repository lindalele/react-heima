import React from 'react'
import { useParams } from 'react-router'

export default function Article(props) {
  // 可以用props.match.params.id
  // 路由中提供了3个hook
  // useHistory()
  // useLocation()
  // useParams()

  // 也可以直接用hook->useParams获取到当前的文章id
  const params = useParams()
  console.log(params)

  return <div>文章详情-{params.id}</div>
}
