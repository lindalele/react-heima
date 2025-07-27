import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './styles/index.css'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
