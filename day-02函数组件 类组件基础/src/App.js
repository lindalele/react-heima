import { Component } from 'react'
import avatar from './images/avatar.png'
import moment from 'moment'
class App extends Component {
  state = {
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
    // 评论内容
    comment: '',
  }
  render() {
    const state = this.state
    return (
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
                  onClick={this.changeTab.bind(this, item.type)}
                >
                  按{item.name}排序
                </li>
              ))}
            </ul>
          </div>

          {/* 添加评论vue项目默认template里面的代码整个都会被webpack处理，所以图片可以i出来。
           对于react，img src="./ava.png"看见字符串就不处理了，就没有办法加载图片。
           所以react办法1.img src需要先引入图片才能使用import ava from './ava.png ; img中就写变量<img className="user-head" src={avatar} alt="" />
           */}

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
                value={this.state.comment}
                onChange={this.handleChange}
              />
              <button className="comment-submit" onClick={this.add}>
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          {this.renderList()}
        </div>
      </div>
    )
  }
  // YYYY-MM-DD HH:mm:ss   HH是24小时的hh是12小时
  renderList = () => {
    if (this.state.list.length > 0) {
      return (
        <div className="comment-list">
          {this.state.list.map((item) => (
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
                  {/* 注意react的类名不能是写两个className，只能动态的和写死的类名写在一起，可以用数组，然后再用join，因为className后面要的是字符串
                   也可以拼接，但是要注意类名与类名之间要有空格。
                   相比vue,vue可以写对象，数组*/}
                  <span
                    onClick={this.changeAttitude.bind(
                      this,
                      item.id,
                      item.attitude === 1 ? 0 : 1
                    )}
                    className={[
                      'like',
                      item.attitude === 1 ? 'liked' : '',
                    ].join(' ')}
                  >
                    <i className="icon" />
                  </span>
                  <span
                    onClick={this.changeAttitude.bind(
                      this,
                      item.id,
                      item.attitude === -1 ? 0 : -1
                    )}
                    className={`hate ${item.attitude === -1 ? 'hated' : ''}`}
                  >
                    <i className="icon" />
                  </span>
                  <span
                    className="reply btn-hover"
                    onClick={this.del.bind(this, item.id)}
                  >
                    删除
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }
    return <div>暂无更多评论~</div>
  }

  changeTab = (type) => {
    // console.log('呵呵', type)
    this.setState({
      active: type,
    })
  }

  del = (id) => {
    // console.log(id)
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    })
  }

  add = () => {
    if (!this.state.comment) {
      return alert('评论内容不能为空')
    }
    // 添加评论
    const obj = {
      id: Date.now(),
      author: '闪电',
      comment: this.state.comment,
      time: new Date(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0,
    }
    this.setState({
      list: [obj, ...this.state.list],
      comment: '',
    })
  }
  changeAttitude = (id, attitude) => {
    // console.log(id, attitude)
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            attitude: attitude,
          }
        } else {
          return item
        }
      }),
    })
  }
}
export default App
