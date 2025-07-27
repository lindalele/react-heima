import React from 'react'
import { useParams } from 'react-router'

export default function Article(props) {
  // useHistory()
  // useLocation()
  // useParams()

  // 获取到当前的文章id
  const params = useParams()
  console.log(params)

  return <div>文章详情-{params.id}</div>
}
