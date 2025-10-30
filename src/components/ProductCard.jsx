import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.imgUrl} alt={product.model} />
      </div>

      <div className="product-info">
        <div className="product-name">
          {product.brand} {product.model}
        </div>

        <div className="product-price">
          {product.price ? `${product.price}€` : '—'}
        </div>
      </div>
    </Link>
  )
}
