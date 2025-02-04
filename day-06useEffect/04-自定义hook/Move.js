import img from './1.gif'
import { useMouse } from './hooks'
export default function Move() {
  const position = useMouse()
  return (
    <div>
      <img
        src={img}
        style={{
          position: 'absolute',
          top: position.y + 1,
          left: position.x + 1
        }}
        alt=""
      />
    </div>
  )
}
