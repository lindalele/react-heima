import axios from 'axios'
import { useEffect, useState } from 'react'

type ListType = {
  id: number
  name: string
}[]
export default function App() {
  const [list, setList] = useState<ListType>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels')
      setList(res.data.data.channels)
    }
    fetchData()
  }, [])
  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}
