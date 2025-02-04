import { useEffect, useState } from 'react'
import img from './1.gif'
export default function Move() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })
  useEffect(() => {
    const move = (e) => {
      console.log('移动')

      setPosition({
        x: e.pageX,
        y: e.pageY,
      })
    }

    document.addEventListener('mousemove', move)
    console.log('注册事件')
    return function () {
      document.removeEventListener('mousemove', move)
    }
  }, [])
  return (
    <div>
      <img
        src={img}
        style={{
          position: 'absolute',
          top: position.y + 1,
          left: position.x + 1,
        }}
        alt=""
      />
    </div>
  )
}
