import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs({ product }) {
  const location = useLocation()

  if (!location.pathname.startsWith('/product')) return null

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      <span>/</span>
      <span className="crumb-current">
        {product ? `${product.brand} ${product.model}` : 'Product'}
      </span>
    </nav>
  )
}
