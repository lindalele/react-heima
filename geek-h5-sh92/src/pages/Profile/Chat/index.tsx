import Icon from '@/components/icon'
import { getUserProfile } from '@/store/actions/profile'
import { useInitialState } from '@/utils/hooks'
import { NavBar, Input, Toast } from 'antd-mobile'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
// yarn add socket.io-client
import io from 'socket.io-client'
import { getToken } from '@/utils/storage'
import { baseURL } from '@/utils/request'
// socket.io是websocket的库，既可以在浏览器端使用，也可以在服务器端使用

import { Socket } from 'socket.io-client'
type State = {
  type: 'robot' | 'user'
  text: string
}[]
const Chat = () => {
  const history = useHistory()

  // 获取用户头像
  // 可以从redux中取，外面页面可以传参进来，但是万一页面刷新了，就拿不到了
  // 所以最好的方式就是请求一次接口
  const { userProfile } = useInitialState(getUserProfile, 'profile')
  // useRef的返回结果默认是不允许修改current属性的，只能配合ref属性来使用
  // 如果你希望current属性能够修改，联合 | null
  // useRef一般可以绑定dom,用null，如果没有绑定dom,绑定了数据，那么就不能用null，用null数据不能改，需要用 | null
  const socketRef = useRef<Socket | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [messageList, setMessageList] = useState<State>([
    {
      type: 'user',
      text: '你好啊',
    },
    {
      type: 'robot',
      text: '你想问啥',
    },
  ])
  useEffect(() => {
    // 发送消息时滚动到最底部
    listRef.current?.scrollTo(0, listRef.current.scrollHeight)
  }, [messageList])
  // 1. 页面加载，需要建立连接
  useEffect(() => {
    const socket = io(baseURL, {
      query: {
        token: getToken().token,
      },
      transports: ['websocket'],
    })
    socketRef.current = socket
    socket.on('connect', () => {
      Toast.show('建立连接成功')
    })

    socket.on('message', (e) => {
      // 接收到机器人的消息
      setMessageList((value) => [
        //这里不能写...messageList,因为useEffect一进来是个闭包，永远是个messgaeList是个老的，所以要写新数据。

        ...value,
        {
          type: 'robot',
          text: e.msg,
        },
      ])
    })
    // useEffect的返回函数，会在组件卸载的时候执行
    // 看websocket请求在F12有一个ws就是websocket连接
    return () => {
      // 组件卸载的时候，需要断开链接
      console.log('断开链接')
      socket.close()
    }
  }, [])

  const [value, setValue] = useState('')

  const send = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value) {
      // 1. 把自己的消息添加到列表中
      setMessageList([
        ...messageList,
        {
          type: 'user',
          text: value,
        },
      ])
      // 2. 清空内容
      setValue('')
      // 3. 主动给服务器发消息
      // socketRef.current
      socketRef.current?.emit('message', {
        msg: value,
        timestamp: Date.now(),
      })
    }
  }

  return (
    <div className={styles.root}>
      {/* 顶部导航栏 */}
      <NavBar className="fixed-header" onBack={() => history.go(-1)}>
        小智同学
      </NavBar>

      {/* 聊天记录列表 */}
      <div className="chat-list" ref={listRef}>
        {messageList.map((item, index) => {
          if (item.type === 'robot') {
            return (
              <div className="chat-item" key={index}>
                <Icon type="iconbtn_xiaozhitongxue" />
                <div className="message">{item.text}</div>
              </div>
            )
          } else {
            return (
              <div className="chat-item user" key={index}>
                <img src={userProfile.photo} alt="" />
                <div className="message">{item.text}</div>
              </div>
            )
          }
        })}
      </div>

      {/* 底部消息输入框 */}
      <div className="input-footer">
        <Input
          className="no-border input"
          placeholder="请描述您的问题"
          value={value}
          onChange={(e) => setValue(e)}
          onKeyDown={send}
        />
        <Icon type="iconbianji" />
      </div>
    </div>
  )
}

export default Chat
