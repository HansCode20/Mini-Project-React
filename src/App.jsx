import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './home/Home'

const App = () => {
  return (
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}

export default App