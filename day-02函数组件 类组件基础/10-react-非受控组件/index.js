import { Component, createRef } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  // 创建Ref,得到一个ref对象, 通过ref对象绑定元素 ref={this.aRef},就和元素绑定了
  aRef = createRef()
  bRef createRef()
  render() {
    return (
      <div>
        <h3>受控组件</h3>
        <input type="text" ref={this.aRef} />{' '}
        {/* ref的强大之处在于还能获取到组件 */}
        <Demo ref={this.bRef}></Demo>
        <button onClick={this.handleClick}>获取值</button>
      </div>
    )
  }
  handleClick = () => {
    // ref有一个current属性, 指向绑定的元素
    console.log(this.aRef.current.value)
   console.log(document.querySelector('input').value ); 

  }
}

ReactDOM.render(<App />, document.getElementById('root'))
