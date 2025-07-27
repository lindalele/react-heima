// 自定义history对象
import { createBrowserHistory } from 'history'
// 如果用的是history形式，就引入createHashHistory 地址栏多了#
const history = createBrowserHistory()
// 自己创建的，所以可以再其他地方使用
export default history
