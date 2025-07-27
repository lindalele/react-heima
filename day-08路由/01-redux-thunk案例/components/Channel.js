import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeActive, getChannelList } from '../store/actions/channel'

export default function Channel() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChannelList())
  }, [dispatch])

  const list = useSelector((state) => state.channel.list)
  const active = useSelector((state) => state.channel.active)
  return (
    <ul className="catagtory">
      {list.map((item) => (
        <li
          key={item.id}
          className={item.id === active ? 'select' : ''}
          onClick={() => dispatch(changeActive(item.id))}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}
