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
        <Link to="/" className="back-link">← Back to list</Link>

        {loading && <p>Loading product...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && product && (
          <div className="details-container">
            <div className="details-image">
              <img src={product.imgUrl} alt={product.model} />
            </div>

            <div className="details-info">
              <h2>{product.brand} {product.model}</h2>
              <p className="price">
                {product.price ? `${product.price}€` : 'Price not available'}
              </p>

              <div className="details-table">
                <p><strong>CPU:</strong> {product.cpu}</p>
                <p><strong>RAM:</strong> {product.ram}</p>
                <p><strong>OS:</strong> {product.os}</p>
                <p><strong>Display:</strong> {product.displayResolution}</p>
                <p><strong>Battery:</strong> {product.battery}</p>
                <p><strong>Primary Camera:</strong> {product.primaryCamera}</p>
                <p><strong>Secondary Camera:</strong> {product.secondaryCmera}</p>
                <p><strong>Dimensions:</strong> {product.dimentions}</p>
                <p><strong>Weight:</strong> {product.weight}</p>
              </div>

              <div className="actions-placeholder">
                <p>Actions here</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
