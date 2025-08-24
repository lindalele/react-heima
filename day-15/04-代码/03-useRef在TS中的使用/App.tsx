import { useRef } from 'react'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const aRef = useRef<HTMLAnchorElement>(null)

  const get = () => {
    // console.log(inputRef.current?.value)
    // console.log(aRef.current?.href)
    // console.log(aRef.current?.innerHTML)

    // const current = aRef.current!
    // console.log(current.href);
    console.log(aRef.current!.href)
    console.log(aRef.current!.innerHTML)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <a ref={aRef} href="http://www.baidu.com">
        百度一下
      </a>
      <button onClick={get}>获取</button>
    </div>
  )
}
