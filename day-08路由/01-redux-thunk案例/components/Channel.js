import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeActive, getChannelList } from '../store/actions/channel'

/**
 * Channel组件
 * 用于显示频道列表，并处理频道切换功能
 * 使用Redux进行状态管理
 */
export default function Channel() {
  // 使用useDispatch钩子获取dispatch函数，用于触发action
  const dispatch = useDispatch()
  // 使用useEffect钩子在组件挂载时获取频道列表
  useEffect(() => {
    dispatch(getChannelList())
    // store.dispatch永远是这个dispatch，不会变的，所以也可以是空数组，代表页面一进来发请求
  }, [dispatch])

  const list = useSelector((state) => state.channel.list)
  // 使用useSelector获取当前激活的频道ID
  const active = useSelector((state) => state.channel.active)
  // 渲染频道列表
  return (
    <ul className="catagtory">
      {list.map((item) => (
        <li
          key={item.id} // 使用item.id作为列表项的key
          className={item.id === active ? 'select' : ''} // 根据是否激活设置样式类
          onClick={() => dispatch(changeActive(item.id))} // 点击时切换激活的频道
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}
