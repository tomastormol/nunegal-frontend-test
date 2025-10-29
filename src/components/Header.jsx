import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getCartCount, subscribeCart } from '../services/cart'

export default function Header() {
  const [count, setCount] = useState(getCartCount())

  useEffect(() => {
    const unsubscribe = subscribeCart(setCount)
    return unsubscribe
  }, [])

  return (
    <header className="header-glass">
      <div className="header-left">
        <Link to="/" className="logo">📱 Mobile Shop</Link>
      </div>
      <div className="header-right">
        <div className="cart-badge">{count}</div>
      </div>
    </header>
  )
}
