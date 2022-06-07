import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyle } from './ui/GlobalStyle'
import { Root } from './pages/Root'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Root />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
