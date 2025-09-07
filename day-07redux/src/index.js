import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

// yarn add redux-logger用于打印日志
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)
