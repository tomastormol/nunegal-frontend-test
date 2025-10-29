import React from 'react'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import { fetchProducts } from '../services/api'

export default function ProductList() {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <Header />
      <main className="container">
        {loading && <p>Cargando productos...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && <ProductGrid products={products} />}
      </main>
    </div>
  )
}
