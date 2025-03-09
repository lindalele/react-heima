import { Component } from 'react'
import Tabs from './components/Tabs'
import Form from './components/Form'
import List from './components/List'
class App extends Component {
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot'
      },
      {
        id: 2,
        name: '时间',
        type: 'time'
      }
    ],
    active: 'hot',
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-11-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-12-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1
      }
    ]
  }
  changeTab = (type) => {
    this.setState({
      active: type
    })
  }
  add = (content) => {
    const comment = {
      id: Date.now(),
      author: '作者',
      comment: content,
      time: new Date(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0
    }
    this.setState({
      list: [...this.state.list, comment]
    })
  }
  del = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id)
    })
  }

  changeAttitude = (id, attitude) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            attitude
          }
        } else {
          return item
        }
      })
    })
  }
  render() {
    const { list, tabs, active } = this.state
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>{list.length} 评论</span>
          </div>
          {/* 排序 */}
          <Tabs tabs={tabs} active={active} changeTab={this.changeTab}></Tabs>

          {/* 添加评论 */}
          <Form add={this.add}></Form>

          {/* 评论列表 */}
          <List
            list={list}
            active={active}
            del={this.del}
            changeAttitude={this.changeAttitude}
          ></List>
        </div>
      </div>
    )
  }
}

export default App
