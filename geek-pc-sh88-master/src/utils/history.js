// 自定义history对象
import { createBrowserHistory } from 'history'
// 如果是hash路由，使用createHashHistory
// import { createHashHistory } from 'history'
const history = createBrowserHistory()

export default history
