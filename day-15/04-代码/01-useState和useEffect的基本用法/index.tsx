import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// 只要用到jsx,那这个文件就不能叫ts,要叫tsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
