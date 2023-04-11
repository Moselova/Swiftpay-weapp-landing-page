import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './Navbar'
import Partners from './Partners'
import Why from './Why'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Partners />
    <Why />
  </React.StrictMode>,
)
