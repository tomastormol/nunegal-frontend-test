const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/product`)
  if (!res.ok) throw new Error('Error fetching products')
  return await res.json()
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/product/${id}`)
  if (!res.ok) throw new Error('Error fetching product details')
  return await res.json()
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



