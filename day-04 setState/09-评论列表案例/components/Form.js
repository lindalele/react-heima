import { Component } from 'react'

class Form extends Component {
  state = {
    content: ''
  }
  render() {
    return (
      <div className="comment-send">
        <div className="user-face">
          <img className="user-head" src="./images/avatar.png" alt="" />
        </div>
        <div className="textarea-container">
          <textarea
            cols="80"
            rows="5"
            placeholder="发条友善的评论"
            className="ipt-txt"
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
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
    )
  }

  add = () => {
    // 判断
    if (!this.state.content.trim()) {
      return alert('评论内容不能为空')
    }
    // 子传父
    this.props.add(this.state.content)
    // 清空内容
    this.setState({
      content: ''
    })
  }
}

export default Form
