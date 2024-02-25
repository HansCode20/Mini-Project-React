import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Navbar/Footer.jsx'
import { Container } from 'react-bootstrap'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

  <Navbar/>
    <App/>
    <Footer/>

    </BrowserRouter>
  </React.StrictMode>
)
