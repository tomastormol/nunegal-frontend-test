import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <img
        src={product.imgUrl}
        alt={`${product.brand} ${product.model}`}
        className="product-image"
      />
      <div className="info">
        <div className="brand">{product.brand}</div>
        <div className="model">{product.model}</div>
        <div className="price">{product.price ? `${product.price}€` : 'Sin precio'}</div>
      </div>
    </Link>
  )
}
