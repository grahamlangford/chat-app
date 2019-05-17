import './bootstrap'
import './dotenv'
import React from 'react'
import ReactDOM from 'react-dom'

import 'typeface-roboto'
import './index.css'
import App, { SocketDiv } from './components/App'
import { ChatProvider } from './context/chatContext/chatContext'

ReactDOM.render(
  <ChatProvider>
    <App />
    <SocketDiv />
  </ChatProvider>,
  document.getElementById('root')
)
