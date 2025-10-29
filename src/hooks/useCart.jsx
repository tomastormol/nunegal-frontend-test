import { useEffect, useState, useCallback } from 'react'

export function useCart() {
  const read = () => Number(localStorage.getItem('cart_count') || 0)
  const [count, setCount] = useState(read())

  useEffect(() => {
    const onSync = () => {
      const n = read()
      if (n !== count) setCount(n)
    }
    window.addEventListener('storage', onSync)
    window.addEventListener('cart-updated', onSync)
    return () => {
      window.removeEventListener('storage', onSync)
      window.removeEventListener('cart-updated', onSync)
    }
  }, [count])

  const addItem = useCallback(() => {
    const current = read()
    const next = current + 1
    localStorage.setItem('cart_count', String(next))
    setCount(next)
    setTimeout(() => {
      window.dispatchEvent(new Event('cart-updated'))
    }, 0)
  }, [])

  return { count, addItem }
}
