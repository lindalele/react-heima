import ReactDOM from 'react-dom'
import { createContext } from 'react'
import App from './App'
export const Context = createContext()

ReactDOM.render(<App />, document.getElementById('root'))
