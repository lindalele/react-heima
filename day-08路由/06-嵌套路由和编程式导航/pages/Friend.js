import React from 'react'
import { useHistory } from 'react-router'

export default function Friend(props) {
  // 所有想要通过编程式导航跳转的组件都需要使用useHistory(推荐)，或者props.history
  // console.log("🚀 ~ Friend ~ props:", props);
  // props有history对象，有push跳转、replace替换栈跳转、go(1)前进、go(-1)后退,goBack，goForward等方法

  // 如果使用js代码的方式实现路由的跳转----》编程式导航方式2：useHistory
  const history = useHistory()

  return (
    <div>
      {/* history.push('/find') */}
      {/* history.go(1) -1 */}
      {/* history.replace('/find') 跳转路由替换当前的记录 */}
      朋友 --- <button onClick={() => history.replace('/find')}>登录</button>
    </div>
  )
}
