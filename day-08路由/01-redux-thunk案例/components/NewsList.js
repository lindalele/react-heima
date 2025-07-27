import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import avatar from '../assets/back.jpg'
import { getNewsList } from '../store/actions/news'
export default function NewsList() {
  const active = useSelector((state) => state.channel.active)
  const list = useSelector((state) => state.news)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewsList(active))
  }, [active, dispatch])
  return (
    <div className="list">
      {list.map((item) => (
        <div key={item.art_id} className="article_item">
          <h3 className="van-ellipsis">{item.title}</h3>
          <div className="img_box">
            <img
              src={item.cover.type === 0 ? avatar : item.cover.images[0]}
              className="w100"
              alt=""
            />
          </div>
          <div className="info_box">
            <span>{item.aut_name}</span>
            <span>{item.comm_count}评论</span>
            <span>{item.pubdate}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
