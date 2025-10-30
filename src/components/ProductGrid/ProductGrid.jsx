import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products }) {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

