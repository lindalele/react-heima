import ReactDOM from 'react-dom'

const list = [
  { id: 1, name: '上海黑马82期', salary: 11000 },
  { id: 2, name: '上海黑马83期', salary: 12000 },
  { id: 3, name: '上海黑马84期', salary: 13000 },
  { id: 4, name: '上海黑马88期', salary: 18000 }
]
const element = (
  <div>
    <h1>班级薪资</h1>
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <h3>班级：{item.name}</h3>
          <p>工资：{item.salary}</p>
        </li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
