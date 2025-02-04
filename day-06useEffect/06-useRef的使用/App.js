import { useRef } from 'react'
import Demo from './Demo'
export default function App() {
  const ref = useRef(null)
  console.log(ref)

  const click = () => {
    console.log(ref.current.sayHi())
  }
  return (
    <div>
      <h1>useRef的使用</h1>
      <div>
        {/* <input ref={ref} type="text" /> */}
        <button onClick={click}>按钮</button>
        <Demo ref={ref}></Demo>
      </div>
    </div>
  )
}
