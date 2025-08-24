import { useLocation } from 'react-router'
import { LocationType } from '../types'

export default function Home() {
  const location = useLocation<LocationType>()
  // console.log(location.state.from)

  return <div>Home组件--{location.state?.from}</div>
}
