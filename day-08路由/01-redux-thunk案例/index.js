import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './styles/index.css'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.render(
  // Provider让全局用上store
  // React.StrictMode react严格模式，加了以后就不会让写react的老的语法
  <Provider store={store}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
