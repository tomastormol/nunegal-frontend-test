import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductDetails from './components/ProductDetails'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes>
  )
}
