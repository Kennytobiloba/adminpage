import React from 'react'
import ReactDOM from 'react-dom/client'
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import UserReducer from './UserReducer.jsx'

const store = configureStore({
  reducer:{
    users: UserReducer
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>,
)
