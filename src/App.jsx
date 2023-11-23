import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='*' element={<h2>Wrong Page</h2>} />
    </Routes>
    
  )
}

export default App