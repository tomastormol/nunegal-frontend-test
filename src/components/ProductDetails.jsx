import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'

export default function ProductDetails() {
  const { id } = useParams()

  return (
    <div>
      <Header />
      <main className="container">
        <Link to="/" className="back-link">← Volver</Link>
        <h2>Detalle del producto #{id}</h2>
        <p>Cargando detalle...</p>
      </main>
    </div>
  )
}
