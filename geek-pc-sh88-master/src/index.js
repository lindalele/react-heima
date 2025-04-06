import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from '@/store'
import { ConfigProvider } from 'antd'
import 'moment/locale/zh-cn'
import locale from 'antd/lib/locale/zh_CN'
// react的严格模式关闭后就不会报错了
// 严格模式只是在开发阶段用，生产会自动关闭的
// 严格模式是提示语法是否废弃
{
  /* <React.StrictMode></React.StrictMode> */
}
ReactDOM.render(
  <ConfigProvider locale={locale}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
