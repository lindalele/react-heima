import { useParams } from 'react-router'

export default function Article() {
  const params = useParams<{ id: string }>()
  return <div>文章详情组件--{params.id}</div>
}
