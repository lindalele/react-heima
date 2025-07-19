import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function App() {
  const [list, setList] = useState([])
  // useEffect(() => { })回调函数必须是一个同步的函数，所以这里不能用async
  // useEffect有一个return，用于清理副作用，如果useEffect导致return出来的不是一个函数，而是promise,就会导致清理不及时

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://geek.itheima.net/v1_0/user/channels')
      setList(res.data.data.channels)
      // 直接打印list是【】，因为setList(res.data.data.channels)和setState一样是异步的，所以打印出来是空数组，所以可以打印res,但是不能打印list,因为setLIst是异步的，所以打印出来是空数组
    }
    getData()

  }, []) // 依赖项为空数组，表示只执行一次。这里依赖项不能是list，因为list变了，会重新执行useEffect，导致死循环
  所以在外面打印就可以，因为list变了，重新渲染
  console.log(list);
  
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
