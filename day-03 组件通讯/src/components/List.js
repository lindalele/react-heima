import { Component } from 'react'
import avatar from '../images/avatar.png'
import classnames from 'classnames'
class List extends Component {
  render() {
    const { list, active, changeAttitude } = this.props
    let showList = []
    if (active === 'hot') {
      // 按照热度排序
      showList = [...list].sort((a, b) => b.id - a.id)
    } else if (active === 'time') {
      showList = [...list].sort((a, b) => b.time - a.time)
    }

    if (list.length === 0) {
      return <div>暂无更多评论数据~</div>
    }
    return (
      <div className="comment-list">
        {showList.map((item) => (
          <div className="list-item" key={item.id}>
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="comment">
              <div className="user">{item.author}</div>
              <p className="text">{item.comment}</p>
              <div className="info">
                <span className="time">{item.time.toLocaleString()}</span>
                <span
                  className={classnames('like', { liked: item.attitude === 1 })}
                  onClick={() =>
                    changeAttitude(item.id, item.attitude === 1 ? 0 : 1)
                  }
                >
                  <i className="icon" />
                </span>
                <span
                  className={classnames('hate', {
                    hated: item.attitude === -1
                  })}
                  onClick={() =>
                    changeAttitude(item.id, item.attitude === -1 ? 0 : -1)
                  }
                >
                  <i className="icon" />
                </span>
                <span
                  className="reply btn-hover"
                  onClick={() => this.props.del(item.id)}
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
}

export default List
