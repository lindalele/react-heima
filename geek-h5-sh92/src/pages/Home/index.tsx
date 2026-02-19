import Icon from '@/components/icon'

import styles from './index.module.scss'
import { Tabs, Popup } from 'antd-mobile'
import { useInitialState } from '@/utils/hooks'
import {
  getAllChannel,
  getUserChannel,
  changeActive,
} from '@/store/actions/channel'
import Channels from './components/Channels'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ArticleList from './components/ArticleList'
import { useHistory } from 'react-router'
/**
 * Home频道组件
 * 用于展示用户频道列表和文章列表
 */
const Home = () => {
  // 使用自定义hook获取用户频道列表和当前激活的频道
  const { userChannels, active } = useInitialState(getUserChannel, 'channel')
  // 获取所有频道列表
  useInitialState(getAllChannel, 'channel')
  // 获取dispatch函数用于状态管理
  const dispatch = useDispatch()
  // 获取history对象用于页面跳转
  const history = useHistory()
  const [visible, setVisible] = useState(false)
  const show = () => {
    setVisible(true)
  }
  const hide = () => {
    setVisible(false)
  }
  return (
    <div className={styles.root}>
      {/* 频道 Tabs 列表 */}
      {userChannels.length > 0 && (
        <Tabs
          className="tabs"
          activeKey={active + ''}
          onChange={(key) => dispatch(changeActive(+key))}
        >
          内容
          {userChannels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              <ArticleList channelId={item.id}></ArticleList>
            </Tabs.Tab>
          ))}
        </Tabs>
      )}

      <div className="tabs-opration">
        {/* 注册点击事件，跳转到/search */}
        <Icon type="iconbtn_search" onClick={() => history.push('/search')} />
        <Icon type="iconbtn_channel" onClick={show} />
      </div>

      {/* 频道管理组件 */}
      <Popup position="left" visible={visible}>
        <Channels hide={hide}></Channels>
      </Popup>
    </div>
  )
}

export default Home
