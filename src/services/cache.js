const CACHE_KEY_PREFIX = 'cache:'
const CACHE_TTL = 60 * 60 * 1000

export function setCache(key, data) {
  const record = {
    data,
    timestamp: Date.now()
  }
  localStorage.setItem(CACHE_KEY_PREFIX + key, JSON.stringify(record))
}

export function getCache(key) {
  const raw = localStorage.getItem(CACHE_KEY_PREFIX + key)
  if (!raw) return null

  try {
    const record = JSON.parse(raw)
    const expired = Date.now() - record.timestamp > CACHE_TTL
    if (expired) {
      localStorage.removeItem(CACHE_KEY_PREFIX + key)
      return null
    }
    return record.data
  } catch {
    return null
  }
}
