import ReactDOM from 'react-dom'

const isLoading = true

// function render() {
//   // if (isLoading) {
//   //   return <div>正在加载中....</div>
//   // } else {
//   //   return <div>数据加载完成</div>
//   // }
//   return isLoading ? <div>正在加载中....</div> : <div>数据加载完成</div>
// }

const element = (
  // <div>{isLoading ? <div>正在加载中....</div> : <div>数据加载完成</div>}</div>
  <div>{isLoading && <div>正在加载中...</div>}</div>
)

ReactDOM.render(element, document.getElementById('root'))
