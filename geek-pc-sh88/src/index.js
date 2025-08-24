import React from 'react'
import ReactDOM from 'react-dom'
// 样式
// 先组件库的css，再自己的css
import 'antd/dist/antd.css'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from '@/store'
import { ConfigProvider } from 'antd'
import 'moment/locale/zh-cn'
import locale from 'antd/lib/locale/zh_CN'
// 使用antd的时候react严格模式会报错，因为react会检查是否使用depred的api，但是antd的组件库里面有很多depred的api，所以需要关闭严格模式即可解决报错 <React.StrictMode>  <App /></React.StrictMode>->  <App />
ReactDOM.render(
  <ConfigProvider locale={locale}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
