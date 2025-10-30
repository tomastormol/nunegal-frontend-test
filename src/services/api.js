import { getCache, setCache } from './cache'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function fetchProducts() {
  const cacheKey = 'products'
  const cached = getCache(cacheKey)
  if (cached) return cached

  const res = await fetch(`${BASE_URL}/product`)
  if (!res.ok) throw new Error('Failed to fetch products')
  const data = await res.json()

  setCache(cacheKey, data)
  return data
}

export async function fetchProductById(id) {
  const cacheKey = `product:${id}`
  const cached = getCache(cacheKey)
  if (cached) return cached

  const res = await fetch(`${BASE_URL}/product/${id}`)
  if (!res.ok) throw new Error('Failed to fetch product')
  const data = await res.json()

  setCache(cacheKey, data)
  return data
}

export async function addToCartApi({ id, colorCode, storageCode }) {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, colorCode, storageCode })
  })
  if (!res.ok) throw new Error('Error adding to cart')
  return await res.json()
}



