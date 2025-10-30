const KEY = 'cart_count'

export function getCartCount() {
  return Number(localStorage.getItem(KEY) || 0)
}

export function setCartCount(n) {
  localStorage.setItem(KEY, String(n))
  window.dispatchEvent(new Event('cart-updated'))
}

export function incrementCart() {
  const next = getCartCount() + 1
  setCartCount(next)
}

export function subscribeCart(handler) {
  const h = () => handler(getCartCount())
  window.addEventListener('cart-updated', h)
  window.addEventListener('storage', h)
  return () => {
    window.removeEventListener('cart-updated', h)
    window.removeEventListener('storage', h)
  }
}

export function resetCart() {
  localStorage.setItem('cart_count', '0')
  window.dispatchEvent(new Event('cart-updated'))
}
