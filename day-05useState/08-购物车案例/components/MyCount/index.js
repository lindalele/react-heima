import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { Context } from '../../App'
import './index.scss'
export default function MyCount({ count, id }) {
  console.log('接收到的count', count)

  const [num, setNum] = useState(count)

  // 当count发生了变化，修改Num的值
  useEffect(() => {
    setNum(count)
  }, [count])

  const { changeCount } = useContext(Context)
  const plus = () => {
    changeCount(id, count + 1)
  }
  const minus = () => {
    if (count <= 1) return
    changeCount(id, count - 1)
  }

  const change = (e) => {
    setNum(e.target.value)
  }
  const blur = () => {
    changeCount(id, num < 1 ? 1 : num)
  }
  return (
    <div className="my-counter">
      <button type="button" className="btn btn-light" onClick={minus}>
        -
      </button>
      <input
        type="number"
        className="form-control inp"
        value={num}
        onChange={change}
        onBlur={blur}
      />
      <button type="button" className="btn btn-light" onClick={plus}>
        +
      </button>
    </div>
  )
}
