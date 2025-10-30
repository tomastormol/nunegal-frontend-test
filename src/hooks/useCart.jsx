import { useEffect, useState } from 'react'
import { resetCart as resetCartStorage } from '../services/cart'

export function useCart() {
  const [count, setCount] = useState(
    Number(localStorage.getItem('cart_count') || 0)
  )

  useEffect(() => {
    const update = () => setCount(Number(localStorage.getItem('cart_count') || 0))
    window.addEventListener('cart-updated', update)
    window.addEventListener('storage', update)
    return () => {
      window.removeEventListener('cart-updated', update)
      window.removeEventListener('storage', update)
    }
  }, [])

  const addItem = () => {
    const newCount = (Number(localStorage.getItem('cart_count') || 0) + 1)
    localStorage.setItem('cart_count', newCount)
    window.dispatchEvent(new Event('cart-updated'))
  }

  const reset = () => {
    resetCartStorage()
    setCount(0)
  }

  return { count, addItem, reset }
}
