const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/product`)
  if (!res.ok) throw new Error('Error fetching products')
  return await res.json()
}
