import { Component } from 'react'

class Tabs extends Component {
  render() {
    const { tabs, active, changeTab } = this.props
    return (
      <div className="tabs-order">
        <ul className="sort-container">
          {tabs.map((item) => (
            <li
              key={item.id}
              className={item.type === active ? 'on' : ''}
              onClick={() => changeTab(item.type)}
            >
              按{item.name}排序
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Tabs
