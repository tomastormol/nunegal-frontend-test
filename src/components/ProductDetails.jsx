import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { fetchProductById } from '../services/api'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetchProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div>
      <Header />
      <main className="container">
        <Link to="/" className="back-link">← Volver</Link>

        {loading && <p>Loading product...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && product && (
          <>
            <h2>{product.brand} {product.model}</h2>
            <p>Price: {product.price ? `${product.price}€` : 'N/A'}</p>
            <p>CPU: {product.cpu}</p>
            <p>RAM: {product.ram}</p>
          </>
        )}
      </main>
    </div>
  )
}
