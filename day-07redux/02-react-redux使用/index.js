import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
一般情况下，我们会在index.js中引入Provider组件，并将其作为根组件的包裹层，以便在整个应用程序中使用Redux的store。这样，我们就可以在应用程序的任何地方使用Redux的状态管理功能了。
// yarn add redux react-redux

import { Provider } from 'react-redux'
// Provider是一个组件，你让他包裹最大的根组件，这样，根组件下的所有子组件都可以使用store
provider提供了store，这样，根组件下的所有子组件都可以使用store
ReactDOM.render(
  // https://react-redux.js.org ->
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)
