import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://geek.itheima.net/v1_0/user/channels')
      setList(res.data.data.channels)
    }
    getData()
  }, [])
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
