import { useHistory } from 'react-router-dom'
import { LocationType } from '../types'

export default function Login() {
  // 接收一个泛型参数
  const history = useHistory<LocationType>()
  const login = () => {
    history.push('/home', {
      from: '/login'
    })
  }
  return (
    <div>
      <div>登录组件</div>
      <button onClick={login}>登录</button>
    </div>
  )
}
