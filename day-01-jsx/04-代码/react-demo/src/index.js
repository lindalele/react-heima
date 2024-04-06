// react17不需要额外引入react import React from 'react
// react包只包含了最核心的语法 如果想要开发网页应用，还需要引入react-dom
// 如果是开发app, 需要两个包，react和react-native
import ReactDOM from 'react-dom'
// 创建react元素(虚拟DOM),需要react-dom渲染成真实dom
import './index.css'
import avatar from './images/avatar.png'
import moment from 'moment'

// react支持空标签 <></> 表示什么都不会渲染
// jsx中单标签必须闭合
// jsx语法接近js class应该用className
// for 应该用htmlFor
// jsx中允许换行，如果有换行，必须用()括起来，以免自动加入分号，比如说function的时候，不加分好就有了分号后面的语句被return掉了
// jsx的{里面可以写表达式，但是不能写语句}
// 如果要写注释，用 花括号包裹起来 {/* 注释的写法 */}
// 条件渲染写法 &&  三元 if else
// loading false,后面文字也就不显示了
// const element = <div>{isLoading && <div>正在加载中。。。</div>}</div>

// 在开发vue时候eslint比较严格，用eslint校验足够。而react需要格式化工具eslint+prettier

const element = <div>{}</div>
const state = {
  // hot: 热度排序  time: 时间排序
  tabs: [
    {
      id: 1,
      name: '热度',
      type: 'hot',
    },
    {
      id: 2,
      name: '时间',
      type: 'time',
    },
    {
      id: 3,
      name: '点赞',
      type: 'good',
    },
  ],
  active: 'time',
  list: [
    {
      id: 1,
      author: '刘德华',
      comment: '给我一杯忘情水',
      time: new Date('2021-10-10 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1,
    },
    {
      id: 2,
      author: '周杰伦',
      comment: '哎哟，不错哦',
      time: new Date('2021-10-11 15:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0,
    },
    {
      id: 3,
      author: '五月天',
      comment: '不打扰，是我的温柔',
      time: new Date('2021-10-11 10:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1,
    },
  ],
}

const element = (
  <div className="App">
    <div className="comment-container">
      {/* 评论数 */}
      <div className="comment-head">
        <span>{state.list.length} 评论</span>
      </div>
      {/* 排序 */}
      <div className="tabs-order">
        <ul className="sort-container">
          {state.tabs.map((item) => (
            <li
              key={item.id}
              className={item.type === state.active ? 'on' : ''}
            >
              按{item.name}排序
            </li>
          ))}
        </ul>
      </div>

      {/* 添加评论 */}
      <div className="comment-send">
        <div className="user-face">
          <img className="user-head" src={avatar} alt="" />
        </div>
        <div className="textarea-container">
          <textarea
            cols="80"
            rows="5"
            placeholder="发条友善的评论"
            className="ipt-txt"
          />
          <button className="comment-submit">发表评论</button>
        </div>
        <div className="comment-emoji">
          <i className="face"></i>
          <span className="text">表情</span>
        </div>
      </div>

      {/* 评论列表 */}
      <div className="comment-list">
        {state.list.map((item) => (
          <div className="list-item" key={item.id}>
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="comment">
              <div className="user">{item.author}</div>
              <p className="text">{item.comment}</p>
              <div className="info">
                <span className="time">
                  {moment(item.time).format('YYYY-MM-DD HH:mm:ss')}
                </span>
                <span
                  className={['like', item.attitude === 1 ? 'liked' : ''].join(
                    ' '
                  )}
                >
                  <i className="icon" />
                </span>
                <span className={`hate ${item.attitude === -1 ? 'hated' : ''}`}>
                  <i className="icon" />
                </span>
                <span className="reply btn-hover">删除</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
