import ReactDOM from 'react-dom'

const songs = ['温柔', '倔强', '私奔到月球']
// jsx中外面可以直接写<li></li>
// const songs = [<li>温柔</li>, <li>倔强</li>, <li>私奔到月球</li>]
// const songs2 = songs.map((item) => {
//   return <li>{item}</li>
// })

//注意jsx的动态属性是没有：的，直接写属性='';动态属性就是{}， key={index}
const element = (
  <div>
    <h1>歌曲列表</h1>
    <ul>
      {/* {songs2} */}
      {/* <li>哈哈</li>
      <li>呵呵</li> id*/}
      {songs.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
